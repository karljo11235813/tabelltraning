// Del 1 — Prefix: vad k, H, D, d, c och m betyder, och sedan mikro, Mega och Giga.
// H och D står bara i rutnätet. I frågorna används vanliga enheter, och av hekto bara hg.
import { pick, shuffle } from "../../representationer/random.js";
import { d, dec, compare, equals, shift } from "../decimal.js";
import { unit, unitsOf, convert } from "../units.js";
import { gridModel, hops, SQUARES } from "../grid.js";
import { text, num, qty, box, grid, EQ } from "../pieces.js";
import { rawDecimal } from "../check.js";
import { sample } from "./helpers.js";
import { amountFor, convertQuestion, conversionMistakes, fmt, article } from "./convert.js";

const MU = "µ";
const BASES = { m: "m", l: "l", g: "g" };

const SMALL_PREFIXES = [
  { pos: 3, letter: "k", name: "kilo", word: "tusen" },
  { pos: 2, letter: "H", name: "hekto", word: "hundra" },
  { pos: 1, letter: "D", name: "deka", word: "tio" },
  { pos: -1, letter: "d", name: "deci", word: "en tiondel" },
  { pos: -2, letter: "c", name: "centi", word: "en hundradel" },
  { pos: -3, letter: "m", name: "milli", word: "en tusendel" },
];
const BIG_PREFIXES = [
  { pos: 9, name: "Giga", word: "miljard" },
  { pos: 6, name: "Mega", word: "miljon" },
  { pos: 3, name: "kilo", word: "tusen" },
  { pos: -6, name: "mikro", word: "miljondel" },
];
const INVERSE = { tusen: "en tusendel", hundra: "en hundradel", tio: "en tiondel", "en tusendel": "tusen", "en hundradel": "hundra", "en tiondel": "tio" };

// Betydelsen med riktiga enheter. Deka har ingen enhet i frågorna, så där står bara ordet.
const EXAMPLES = { 3: ["km", "m"], 2: ["hg", "g"], [-1]: ["m", "dm"], [-2]: ["m", "cm"], [-3]: ["m", "mm"] };
// I kategori 2 bara med W, m och g.
const BIG_EXAMPLES = { 3: ["kW", "W"], 6: ["MW", "W"], 9: ["GW", "MW"], [-6]: ["m", `${MU}m`] };

const cap = (s) => s[0].toUpperCase() + s.slice(1);

// Enheter med prefix som får stå i frågor i kategori 1: inga deka-enheter, av hekto bara hg.
function prefixUnits(family) {
  return unitsOf(family, { prefixOnly: true }).filter((id) => unit(id).pos !== 0 && unit(id).pos >= -3);
}

// I omvandlingarna används inte dg (ovanligt); det står bara som val i "Vilken enhet?".
const convertUnits = (family) => prefixUnits(family).filter((id) => id !== "dg");

function exampleRow(pos, examples = EXAMPLES) {
  const pair = examples[pos];
  if (!pair) return null;
  const [a, b] = pair;
  return [qty(dec(1), a), EQ, qty(convert(dec(1), a, b), b)];
}

// "Milli betyder [ … ]" med rutnätet ovanför.
function meaningQuestion(rng, prefix, all, { wide }) {
  const others = shuffle(all.filter((p) => p !== prefix), rng).slice(0, 3);
  const model = gridModel({ family: null, wide, names: true });
  const side = prefix.pos > 0 ? "till vänster om" : "till höger om";
  const steps = [
    { row: [grid(model)] },
    { text: `${cap(prefix.name)} står ${side} enheten i rutnätet, ${Math.abs(prefix.pos)} steg bort. ${cap(prefix.name)} betyder ${prefix.word}.` },
  ];
  const example = exampleRow(prefix.pos, wide ? BIG_EXAMPLES : EXAMPLES);
  if (example) steps.push({ row: example });
  return {
    key: `meaning:${prefix.name}`,
    data: { kind: "meaning", prefix: prefix.name, word: prefix.word },
    prompt: "Vad betyder prefixet?",
    rows: [[grid(model)], [text(`${cap(prefix.name)} betyder`), box("c")]],
    boxes: { c: { kind: "choice", options: shuffle([prefix, ...others], rng).map((p) => p.word), expected: prefix.word } },
    steps,
  };
}

function missingQuestion(rng) {
  const prefix = pick(rng, SMALL_PREFIXES);
  const full = gridModel({ family: null, names: true });
  const model = { ...full, squares: full.squares.map((s) => (s.pos === prefix.pos ? { ...s, letter: null, name: null, isBlank: true } : s)) };
  const others = shuffle(SMALL_PREFIXES.filter((p) => p !== prefix), rng).slice(0, 3);
  const steps = [
    { text: "Rutnätet går från kilo till milli. Varje ruta är tio gånger rutan till höger." },
    { row: [grid(full)] },
    { text: `Den tomma rutan är ${prefix.name} (${prefix.letter}). ${cap(prefix.name)} betyder ${prefix.word}.` },
  ];
  const example = exampleRow(prefix.pos);
  if (example) steps.push({ row: example });
  return {
    key: `missing:${prefix.pos}`,
    data: { kind: "missing", pos: prefix.pos },
    prompt: "Vilket prefix ska stå i den tomma rutan?",
    rows: [[grid(model)], [text("I den tomma rutan står"), box("c")]],
    boxes: { c: { kind: "choice", options: shuffle([prefix, ...others], rng).map((p) => p.letter), expected: prefix.letter } },
    steps,
  };
}

// 1 000 g = 1 [kg | hg | dg | mg].
function whichUnitQuestion(rng) {
  const family = pick(rng, ["m", "l", "g"]);
  const base = BASES[family];
  const options = prefixUnits(family);
  const answer = pick(rng, options);
  const amount = convert(dec(1), answer, base);
  const prefix = SMALL_PREFIXES.find((p) => p.pos === unit(answer).pos);
  const part = prefix.pos > 0 ? `${prefix.word} ${base}` : `${prefix.word} av ${article(base)} ${base}`;
  return {
    key: `which:${answer}`,
    data: { kind: "which-unit", amount, base, answer },
    prompt: "Vilken enhet ska stå i rutan?",
    rows: [[qty(amount, base), EQ, num(1), box("c")]],
    boxes: { c: { kind: "choice", options, expected: answer } },
    steps: [
      { text: `${fmt({ amount, unit: base })} är ${part}, och ${prefix.name} betyder ${prefix.word}.` },
      { row: [qty(amount, base), EQ, qty(dec(1), answer)] },
    ],
  };
}

const invertedWord = {
  id: "inverted-word",
  matches: (q, p) => q.data.kind === "meaning" && INVERSE[q.data.word] === p.c,
  text: (q) => {
    const prefix = [...SMALL_PREFIXES, ...BIG_PREFIXES].find((x) => x.name === q.data.prefix);
    return `${cap(prefix.name)} står till ${prefix.pos > 0 ? "vänster" : "höger"} om enheten i rutnätet, så det är ${prefix.pos > 0 ? "större" : "mindre"} än enheten.`;
  },
  sample: (q) => {
    if (q.data.kind !== "meaning") return null;
    const inverse = INVERSE[q.data.word];
    return inverse && q.boxes.c.options.includes(inverse) ? { c: inverse } : null;
  },
};

const prefix = {
  id: "prefix",
  part: 1,
  title: "Prefixens betydelse",
  intro: "Ett prefix framför en enhet säger hur mycket större eller mindre den är. Varje steg i rutnätet är tio gånger.",
  exampleSeed: 11,
  fadesGrid: true,
  generate(rng, level) {
    const family = pick(rng, ["m", "l", "g"]);
    const base = BASES[family];
    const opts = { names: true, sense: false };
    if (level === 0) {
      if (rng() < 0.5) return missingQuestion(rng);
      return convertQuestion({ level, given: { amount: dec(1), unit: pick(rng, convertUnits(family)) }, asked: base, ...opts });
    }
    if (level === 1) {
      if (rng() < 0.5) return meaningQuestion(rng, pick(rng, SMALL_PREFIXES), SMALL_PREFIXES, { wide: false });
      return convertQuestion({ level, given: { amount: dec(1), unit: pick(rng, convertUnits(family)) }, asked: base, ...opts });
    }
    if (rng() < 0.5) return whichUnitQuestion(rng);
    const [from, to] = sample(() => {
      const a = pick(rng, convertUnits(family));
      const b = pick(rng, convertUnits(family));
      return a !== b && hops(a, b).squares <= 3 ? [a, b] : null;
    });
    return convertQuestion({ level, given: { amount: dec(1), unit: from }, asked: to, ...opts });
  },
  mistakes: [invertedWord, ...conversionMistakes()],
};

// Mikro, Mega och Giga: enheterna W, m och g, med det breda rutnätet.
const BIG_FAMILIES = {
  W: ["GW", "MW", "kW", "W"],
  m: ["m", "mm", `${MU}m`],
  g: ["g", "mg", `${MU}g`],
};
const L0_PAIRS = [["GW", "MW"], ["MW", "kW"], ["kW", "W"], ["mm", `${MU}m`], ["mg", `${MU}g`]];
const L1_PAIRS = [["GW", "kW"], ["MW", "W"], ["m", `${MU}m`], ["g", `${MU}g`], [`${MU}m`, "mm"], ["kW", "MW"], [`${MU}g`, "mg"], ["MW", "GW"]];

const ctx = (s, min, max) => ({ s, min: d(min), max: d(max) });
const BIG_CONTEXTS = {
  [`${MU}m`]: [ctx("Ett hårstrå är ungefär {} tjockt.", "20", "120"), ctx("En bakterie är {} lång.", "1", "10")],
  GW: [ctx("Ett kärnkraftverk ger {}.", "0,5", "2")],
  MW: [ctx("Ett vindkraftverk ger {}.", "1", "10")],
  kW: [ctx("En elbil laddar med {}.", "3", "150")],
  [`${MU}g`]: [ctx("En vitamintablett innehåller {} vitamin D.", "5", "100")],
  mg: [ctx("En tablett innehåller {} koffein.", "50", "500")],
};

// Hur många rutor med namn (eller enheten) vandringen passerar. Den som bara räknar dem
// tror att 1 GW = 10 MW.
function namedHops(from, to) {
  const [a, b] = [unit(from).pos, unit(to).pos];
  const step = a > b ? -1 : 1;
  let named = 0;
  for (let p = a + step; p !== b + step; p += step) if (p === 0 || SQUARES.find((s) => s.pos === p).letter) named++;
  return named;
}

function namedValue(q) {
  if (q.data.kind !== "convert") return null;
  const { given, asked } = q.data;
  const h = hops(given.unit, asked);
  const named = namedHops(given.unit, asked);
  return named === h.squares ? null : shift(given.amount, Math.sign(h.factorExp) * named);
}

const namedSquaresOnly = {
  id: "named-squares-only",
  matches: (q, p) => {
    const v = namedValue(q);
    return v !== null && equals(p.a, v);
  },
  text: (q) => `Räkna alla rutor i rutnätet, också de tomma: från ${q.data.given.unit} till ${q.data.asked} är ${hops(q.data.given.unit, q.data.asked).squares} steg.`,
  sample: (q) => {
    const v = namedValue(q);
    return v === null ? null : { a: rawDecimal(v) };
  },
};

const storaSmaPrefix = {
  id: "stora-sma-prefix",
  part: 1,
  title: "Mikro, Mega och Giga",
  intro: "Rutnätet fortsätter åt båda hållen. Mega är en miljon, Giga en miljard och mikro en miljondel. Mellan dem finns rutor utan namn.",
  exampleSeed: 12,
  fadesGrid: true,
  generate(rng, level) {
    const opts = { wide: true, names: true, sense: false };
    if (level === 0) {
      const [from, to] = pick(rng, L0_PAIRS);
      return convertQuestion({ level, given: { amount: dec(1), unit: from }, asked: to, ...opts });
    }
    if (level === 1) {
      if (rng() < 0.3) return meaningQuestion(rng, pick(rng, BIG_PREFIXES), BIG_PREFIXES, { wide: true });
      const [from, to] = pick(rng, L1_PAIRS);
      return convertQuestion({ level, given: { amount: dec(1), unit: from }, asked: to, ...opts });
    }
    const units = BIG_FAMILIES[pick(rng, Object.keys(BIG_FAMILIES))];
    const [from, to] = sample(() => {
      const a = pick(rng, units);
      const b = pick(rng, units);
      return a !== b && hops(a, b).squares <= 6 ? [a, b] : null;
    });
    const given = { amount: amountFor(rng, from, to, { maxSig: 2, maxDecimals: 4, givenDecimals: 1, min: "0,5", max: "1000" }), unit: from };
    const fits = (BIG_CONTEXTS[from] ?? []).filter((c) => compare(given.amount, c.min) >= 0 && compare(given.amount, c.max) <= 0);
    if (fits.length > 0 && rng() < 0.6) {
      return convertQuestion({ level, given, asked: to, format: "context", context: pick(rng, fits).s.replace("{}", fmt(given)), ...opts });
    }
    return convertQuestion({ level, given, asked: to, format: pick(rng, ["plain", "write"]), ...opts });
  },
  mistakes: [namedSquaresOnly, ...conversionMistakes()],
};

export const DEL1 = [prefix, storaSmaPrefix];
