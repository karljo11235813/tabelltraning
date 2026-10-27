// Del 2 — Enheter: längd (med mil), volym i liter och vikt (med ton).
import { pick, randInt } from "../../representationer/random.js";
import { dec, add, compare, decimals, d, shift } from "../decimal.js";
import { convert, unit } from "../units.js";
import { hops } from "../grid.js";
import { qty, unitLabel, box, op, EQ, PLUS } from "../pieces.js";
import { rawDecimal } from "../check.js";
import { sample } from "./helpers.js";
import { amountFor, convertQuestion, convertSteps, conversionMistakes, translationMistake, pickPair, fmt } from "./convert.js";
import { tilesQuestion, pickMistakes } from "./tiles.js";

const BOUNDS = { 0: [1, 2], 1: [1, 3], 2: [1, 6] };
const FORMATS = {
  0: ["plain", "write", "left"],
  1: ["plain", "write", "left", "context"],
  2: ["plain", "write", "left", "context", "compare", "sum"],
};
const MAX = d("10000000");
// Talens storlek per nivå: färre värdesiffror och decimaler på L0, små tal först på L2.
const AMOUNTS = {
  0: { maxSig: 2, maxDecimals: 3, givenDecimals: 2, min: "0,1" },
  1: { maxSig: 3, maxDecimals: 4, givenDecimals: 2, min: "0,1" },
  2: { maxSig: 3, maxDecimals: 4, givenDecimals: 3, min: "0,01" },
};

// Mening med {} för måttet, och de mått den passar för.
const ctx = (s, min, max) => ({ s, min: d(min), max: d(max) });

const LENGTH_CONTEXTS = {
  mil: [ctx("Avståndet mellan städerna är {}.", "1", "100"), ctx("Bilresan är {} lång.", "0,5", "80")],
  km: [ctx("Vägen till stan är {} lång.", "0,5", "200"), ctx("Avståndet mellan byarna är {}.", "1", "100")],
  m: [ctx("Repet är {} långt.", "0,5", "100"), ctx("Löparbanan är {} lång.", "50", "10000")],
  dm: [ctx("Bordet är {} långt.", "3", "30"), ctx("Brädan är {} lång.", "2", "50")],
  cm: [ctx("Pennan är {} lång.", "5", "25"), ctx("Linjalen är {} lång.", "10", "100")],
  mm: [ctx("Skruven är {} lång.", "5", "200"), ctx("Myran är {} lång.", "1", "20")],
};

const LITER_CONTEXTS = {
  kl: [ctx("Tanken rymmer {}.", "0,5", "50"), ctx("Cisternen rymmer {}.", "1", "100")],
  l: [ctx("Flaskan rymmer {}.", "0,25", "3"), ctx("Hinken rymmer {}.", "2", "20")],
  dl: [ctx("Receptet behöver {} mjölk.", "1", "10"), ctx("Glaset rymmer {}.", "1", "5")],
  cl: [ctx("Burken rymmer {}.", "15", "50"), ctx("Koppen rymmer {}.", "10", "40")],
  ml: [ctx("Skeden rymmer {}.", "1", "20"), ctx("Medicinflaskan rymmer {}.", "10", "500")],
};

const WEIGHT_CONTEXTS = {
  ton: [ctx("Bilen väger {}.", "0,8", "3"), ctx("Elefanten väger {}.", "2", "7")],
  kg: [ctx("Hunden väger {}.", "2", "60"), ctx("Potatispåsen väger {}.", "1", "25")],
  hg: [ctx("Godispåsen väger {}.", "1", "10"), ctx("Osten väger {}.", "2", "20")],
  g: [ctx("Brevet väger {}.", "5", "100"), ctx("Äpplet väger {}.", "80", "300")],
  mg: [ctx("Tabletten väger {}.", "100", "1000"), ctx("Myran väger {}.", "1", "10")],
};

function contextFor(rng, contexts, given) {
  const fits = (contexts[given.unit] ?? []).filter((c) => compare(given.amount, c.min) >= 0 && compare(given.amount, c.max) <= 0);
  return fits.length > 0 ? pick(rng, fits).s.replace("{}", fmt(given)) : null;
}

const pos = (id) => unit(id).pos;

// 3,5 km [<|=|>] 3 400 m: lika, nästan lika, eller ett steg fel.
function compareQuestion(rng, units) {
  const { left, right, equalValue } = sample(() => {
    const [u1, u2] = [pick(rng, units), pick(rng, units)];
    if (u1 === u2 || hops(u1, u2).squares > 3) return null;
    const m = randInt(rng, 11, 99);
    if (m % 10 === 0) return null;
    const a = dec(m, randInt(rng, -2, 1));
    const e = convert(a, u1, u2);
    const kind = pick(rng, ["equal", "near", "step"]);
    let r = e;
    if (kind === "near") r = convert(dec(m + pick(rng, [-1, 1]), a.e), u1, u2);
    if (kind === "step") r = shift(e, pick(rng, [-1, 1]));
    for (const x of [e, r]) if (decimals(x) > 4 || compare(x, MAX) > 0) return null;
    return { left: { amount: a, unit: u1 }, right: { amount: r, unit: u2 }, equalValue: e };
  });
  const c = compare(convert(left.amount, left.unit, right.unit), right.amount);
  const relation = c === 0 ? "=" : c < 0 ? "<" : ">";
  const inRight = { amount: equalValue, unit: right.unit };
  return {
    key: `compare:${fmt(left)}?${fmt(right)}`,
    data: { kind: "compare", format: "compare", left, right, relation },
    prompt: "Vilket tecken ska stå i rutan: <, = eller >?",
    rows: [[qty(left.amount, left.unit), box("s"), qty(right.amount, right.unit)]],
    boxes: { s: { kind: "symbol", expected: relation } },
    steps: [
      { text: `Gör om ${fmt(left)} till ${right.unit}, så att båda måtten har samma enhet.` },
      ...convertSteps(left, right.unit),
      {
        text: `${fmt(inRight)} ${relation} ${fmt(right)}, så ${fmt(left)} ${relation} ${fmt(right)}.`,
        row: [qty(left.amount, left.unit), op(relation), qty(right.amount, right.unit)],
      },
    ],
  };
}

// 1 m + 25 cm = [ ] cm.
function sumQuestion(rng, units) {
  const q = sample(() => {
    const [u1, u2] = [pick(rng, units), pick(rng, units)];
    if (pos(u1) <= pos(u2)) return null;
    const squares = pos(u1) - pos(u2);
    if (squares > 3) return null;
    const terms = [
      { amount: dec(randInt(rng, 1, 9)), unit: u1 },
      { amount: dec(randInt(rng, 1, Math.min(99, 10 ** squares - 1))), unit: u2 },
    ];
    const asked = rng() < 0.75 ? u2 : u1;
    const parts = terms.map((t) => convert(t.amount, t.unit, asked));
    const answer = add(parts[0], parts[1]);
    if (decimals(answer) > 4) return null;
    return { terms, asked, parts, answer };
  });
  const { terms, asked, parts, answer } = q;
  const rewrite = terms
    .map((t, i) => ({ t, i }))
    .filter(({ t }) => t.unit !== asked)
    .map(({ t, i }) => ({ row: [qty(t.amount, t.unit), EQ, qty(parts[i], asked)] }));
  return {
    key: `sum:${fmt(terms[0])}+${fmt(terms[1])}>${asked}`,
    data: { kind: "sum", format: "sum", terms, asked, answer },
    prompt: `Räkna ut summan i ${asked}.`,
    rows: [[qty(terms[0].amount, terms[0].unit), PLUS, qty(terms[1].amount, terms[1].unit), EQ, box("a"), unitLabel(asked)]],
    boxes: { a: { kind: "decimal", expected: answer, unit: asked } },
    steps: [
      { text: `Skriv båda måtten i ${asked} först. Sedan går de att lägga ihop.` },
      ...rewrite,
      { row: [qty(parts[0], asked), PLUS, qty(parts[1], asked), EQ, qty(answer, asked)] },
    ],
  };
}

// En kategori med omvandlingar inom en storhet. special är mil eller ton (översätts först),
// rare är en enhet som bara står i en del av frågorna på L1–L2 (kl).
function unitCategory({ id, title, intro, exampleSeed, units, special = null, rare = null, contexts, mistakes }) {
  return {
    id,
    part: 2,
    title,
    intro,
    exampleSeed,
    fadesGrid: true,
    generate(rng, level) {
      const sizes = AMOUNTS[level];
      if (special && rng() < special.share) {
        const asked = pick(rng, special.targets[level]);
        const given = { amount: amountFor(rng, special.unit, asked, { ...sizes, ...special.range }), unit: special.unit };
        const context = level > 0 && rng() < 0.4 ? contextFor(rng, contexts, given) : null;
        return convertQuestion({ level, given, asked, format: context ? "context" : pick(rng, ["plain", "write"]), context });
      }
      let format = pick(rng, FORMATS[level]);
      if (format === "compare") return compareQuestion(rng, units);
      if (format === "sum") return sumQuestion(rng, units);
      let pair;
      if (rare && level > 0 && rng() < rare.share) {
        pair = sample(() => {
          const other = pick(rng, units);
          const p = rng() < 0.5 ? [rare.unit, other] : [other, rare.unit];
          const { squares } = hops(p[0], p[1]);
          return squares >= BOUNDS[level][0] && squares <= BOUNDS[level][1] ? p : null;
        });
      } else {
        pair = pickPair(rng, units, BOUNDS[level]);
      }
      const given = { amount: amountFor(rng, pair[0], pair[1], sizes), unit: pair[0] };
      const context = format === "context" ? contextFor(rng, contexts, given) : null;
      if (format === "context" && !context) format = "write";
      return convertQuestion({ level, given, asked: pair[1], format, context });
    },
    mistakes,
  };
}

const langd = unitCategory({
  id: "langd",
  title: "Längd",
  intro: "Gör om mellan km, m, dm, cm och mm med rutnätet: varje steg är tio gånger. 1 mil är 10 km, så mil görs om till km först.",
  exampleSeed: 31,
  units: ["km", "m", "dm", "cm", "mm"],
  special: { unit: "mil", share: 0.28, range: { min: "0,5", max: "100" }, targets: { 0: ["m"], 1: ["m", "dm"], 2: ["m", "dm", "cm", "mm"] } },
  contexts: LENGTH_CONTEXTS,
  mistakes: [
    translationMistake({ id: "mil-as-km", unitId: "mil", wrongExps: [0], tip: "1 mil är 10 km. Gör om milen till km först." }),
    ...conversionMistakes(),
  ],
});

// cl och dl blandas ihop: svaret blir ett steg fel.
const clDl = {
  id: "cl-dl",
  matches: (q, p) => {
    if (q.data.kind !== "convert" || !("a" in q.boxes)) return false;
    const start = q.data.via ?? q.data.given;
    if (![start.unit, q.data.asked].some((u) => u === "cl" || u === "dl")) return false;
    return [1, -1].some((j) => p.a.m !== 0 && rawDecimal(p.a) === rawDecimal(shift(q.data.answer, j)));
  },
  text: () => "cl är en hundradels liter och dl är en tiondels liter. Räkna stegen i rutnätet igen.",
  sample: (q) => {
    if (q.data.kind !== "convert") return null;
    const start = q.data.via ?? q.data.given;
    return [start.unit, q.data.asked].some((u) => u === "cl" || u === "dl") ? { a: rawDecimal(shift(q.data.answer, 1)) } : null;
  },
};

const liter = unitCategory({
  id: "liter",
  title: "Volym i liter",
  intro: "Liter har samma prefix som meter: 1 l = 10 dl = 100 cl = 1 000 ml. Varje steg i rutnätet är tio gånger.",
  exampleSeed: 32,
  units: ["l", "dl", "cl", "ml"],
  rare: { unit: "kl", share: 0.25 },
  contexts: LITER_CONTEXTS,
  mistakes: [clDl, ...conversionMistakes()],
});

const vikt = unitCategory({
  id: "vikt",
  title: "Vikt",
  intro: "Gram har samma prefix: 1 kg = 10 hg = 1 000 g. 1 ton är 1 000 kg, så ton görs om till kg först.",
  exampleSeed: 33,
  units: ["kg", "hg", "g", "mg"],
  special: { unit: "ton", share: 0.28, range: { min: "0,1", max: "50" }, targets: { 0: ["hg", "g"], 1: ["hg", "g"], 2: ["hg", "g"] } },
  contexts: WEIGHT_CONTEXTS,
  mistakes: [
    translationMistake({ id: "ton-wrong", unitId: "ton", wrongExps: [2, 4], tip: "1 ton är 1 000 kg. Gör om tonen till kg först." }),
    ...conversionMistakes(),
  ],
});

const likaStora1 = {
  id: "lika-stora-1",
  part: 2,
  title: "Vilka är lika stora? (längd, liter, vikt)",
  intro: "Gör om alla mått till samma enhet. Då syns vilka som är lika stora, fast siffrorna ser likadana ut.",
  exampleSeed: 36,
  fadesGrid: false,
  generate(rng, level) {
    const family = pick(rng, ["m", "l", "g"]);
    return tilesQuestion(rng, level, { families: [family], groupSize: level === 2 && rng() < 0.4 ? 3 : 2 });
  },
  mistakes: pickMistakes(),
};

export const DEL2 = [langd, liter, vikt, likaStora1];
