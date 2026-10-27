// "Vilka mått är lika stora?": fem brickor med samma siffror, där en grupp är lika stor.
// Varje fel bricka är vad ett vanligt fel ger: rätt siffror men kommat ett eller flera steg fel.
import { pick, shuffle } from "../../representationer/random.js";
import { d, compare, decimals, shift } from "../decimal.js";
import { unit, convert } from "../units.js";
import { qty, box, EQ } from "../pieces.js";
import { sample } from "./helpers.js";
import { fmt } from "./convert.js";

export const CORES = ["5", "25", "125", "2", "4", "15", "75", "45", "12"];
// Ett steg fel är vanligast, så ±1 finns två gånger.
const JUMPS = [1, 1, 2, 3, 4, 6].flatMap((j) => [j, -j]);
const TILES = 5;
// Brickorna håller sig mellan 0,01 och 100 000, som i lärarens exempel (5 cl … 500 cm³).
const MIN = d("0,01");
const MAX = d("100000");
const MAX_SHOWN = d("999999999");
const NON_PREFIX = { m: "mil", g: "ton", m2: "ha" };
// Enheten som alla brickor skrivs om till i lösningen, i den ordning de provas.
const COMMON = { m: ["m", "cm", "mm", "km"], l: ["l", "ml", "dl", "cl"], g: ["g", "kg", "mg"], m2: ["m²", "dm²", "cm²", "km²"], m3: ["dm³", "cm³", "m³"], mixed: ["l", "ml", "dl", "cl"] };

const fits = (x) => compare(x, MIN) >= 0 && compare(x, MAX) <= 0;

// Samma enheter som i omvandlingskategorierna (inga dg eller µm här).
const TILE_UNITS = {
  m: ["km", "m", "dm", "cm", "mm"],
  l: ["kl", "l", "dl", "cl", "ml"],
  g: ["kg", "hg", "g", "mg"],
  m2: ["km²", "m²", "dm²", "cm²", "mm²"],
  m3: ["m³", "dm³", "cm³", "mm³"],
};

function poolFor(rng, families, level) {
  const prefixed = families.flatMap((f) => TILE_UNITS[f]);
  if (level > 0) return prefixed;
  // L0: enheter inom fyra rutor i rutnätet.
  const anchor = pick(rng, prefixed);
  return prefixed.filter((u) => unit(u).pos <= unit(anchor).pos && unit(u).pos >= unit(anchor).pos - 3);
}

export function makeTiles(rng, { families, level, groupSize }) {
  return sample(() => {
    const pool = poolFor(rng, families, level);
    if (pool.length < 2) return null;
    const core = d(pick(rng, CORES));
    const groupUnits = shuffle(pool, rng).slice(0, groupSize);
    if (groupUnits.length < groupSize) return null;
    // Blandat m³ och liter: gruppen har en enhet av varje sort.
    if (families.length > 1 && new Set(groupUnits.map((u) => unit(u).family)).size < families.length) return null;
    const special = level === 2 ? families.map((f) => NON_PREFIX[f]).find(Boolean) : null;
    if (special && rng() < 0.5) groupUnits[groupUnits.length - 1] = special;

    const first = shift(core, Math.floor(rng() * 9) - 3);
    const group = groupUnits.map((u) => ({ amount: convert(first, groupUnits[0], u), unit: u }));
    if (!group.every((t) => fits(t.amount))) return null;

    const tiles = [...group];
    const usedJumps = new Set();
    const wrongUnits = special && !groupUnits.includes(special) ? [special] : [];
    for (let tries = 0; tiles.length < TILES && tries < 60; tries++) {
      const j = pick(rng, JUMPS);
      if (usedJumps.has(j)) continue;
      const u = wrongUnits.length > 0 ? wrongUnits.shift() : pick(rng, pool);
      const tile = { amount: convert(shift(first, j), groupUnits[0], u), unit: u };
      if (!fits(tile.amount)) continue;
      if (tiles.some((t) => t.unit === tile.unit && compare(t.amount, tile.amount) === 0)) continue;
      usedJumps.add(j);
      tiles.push(tile);
    }
    if (tiles.length < TILES) return null;
    if (special && !tiles.some((t) => t.unit === special)) return null;

    const order = shuffle(tiles.map((_, i) => i), rng);
    const shuffled = order.map((i) => tiles[i]);
    const indices = order.map((i, at) => (i < groupSize ? at : -1)).filter((i) => i >= 0).sort((a, b) => a - b);
    return { tiles: shuffled, group: indices };
  });
}

function commonUnit(families, tiles) {
  const key = families.length > 1 ? "mixed" : families[0];
  return COMMON[key].find((c) =>
    tiles.every((t) => {
      const x = convert(t.amount, t.unit, c);
      return decimals(x) <= 6 && compare(x, MAX_SHOWN) <= 0;
    }),
  ) ?? null;
}

export function tilesQuestion(rng, level, { families, groupSize }) {
  const { tiles, group, common } = sample(() => {
    const made = makeTiles(rng, { families, level, groupSize });
    const c = commonUnit(families, made.tiles);
    return c ? { ...made, common: c } : null;
  });
  const conv = (t) => ({ amount: convert(t.amount, t.unit, common), unit: common });
  const equal = group.map((i) => fmt(tiles[i]));
  return {
    key: `pick:${tiles.map(fmt).join(",")}`,
    data: { kind: "pick", tiles, group, common },
    prompt: "Vilka mått är lika stora? Markera alla.",
    rows: [[box("p")]],
    boxes: { p: { kind: "pick", tiles, expected: group } },
    steps: [
      { text: `Skriv alla mått i ${common}.` },
      ...tiles.map((t) => ({ row: [qty(t.amount, t.unit), EQ, qty(conv(t).amount, common)] })),
      { text: `Lika stora: ${equal.slice(0, -1).join(", ")} och ${equal[equal.length - 1]}.` },
    ],
  };
}

export function pickMistakes() {
  const isPick = (q) => q.data.kind === "pick";
  const conv = (q, t) => fmt({ amount: convert(t.amount, t.unit, q.data.common), unit: q.data.common });
  return [
    {
      id: "missed-one",
      matches: (q, p) => isPick(q) && p.p.length < q.data.group.length && p.p.every((i) => q.data.group.includes(i)),
      text: (q) => `Det finns fler mått som är lika stora. Skriv alla mått i ${q.data.common} och jämför.`,
      sample: (q) => (isPick(q) ? { p: [q.data.group[0]] } : null),
    },
    {
      id: "included-wrong",
      matches: (q, p) => isPick(q) && p.p.some((i) => !q.data.group.includes(i)),
      text: (q, p) => {
        const wrong = q.data.tiles[p.p.find((i) => !q.data.group.includes(i))];
        const right = q.data.tiles[q.data.group[0]];
        return `${fmt(wrong)} = ${conv(q, wrong)}, men ${fmt(right)} = ${conv(q, right)}. De är inte lika stora.`;
      },
      sample: (q) => {
        if (!isPick(q)) return null;
        const other = q.data.tiles.findIndex((_, i) => !q.data.group.includes(i));
        return { p: [...q.data.group, other] };
      },
    },
  ];
}

