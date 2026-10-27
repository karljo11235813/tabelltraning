// Del 3 — Skala: läsa en skala, skriva en skala och räkna med den.
import { pick, randInt } from "../../representationer/random.js";
import { dec, d, formatDecimal, mulInt, divInt, compare, decimals, equals, sigDigits, wholeRatio, shift } from "../decimal.js";
import { unit as unitOf, convert } from "../units.js";
import { text, num, qty, unitLabel, box, ratioPiece, scaleTable, table, EQ, TIMES, DIVIDE } from "../pieces.js";
import { rawDecimal, rawRatio } from "../check.js";
import { sample } from "./helpers.js";
import { fmt, convertSteps } from "./convert.js";
import { pickScale, scaleText, scaleTableModel, directionSentence, isReduction, scaleFactor, NO_UNIT_LINE } from "./scale.js";

const int = (n) => formatDecimal(dec(n));
const kindOf = (scale) => (isReduction(scale) ? "förminskning" : "förstoring");

// ---------- 7. Läs skalan ----------

function readSteps(scale, unit) {
  const n = int(scaleFactor(scale));
  const reason = isReduction(scale)
    ? `Förminskning: 1 ${unit} på bilden är ${n} ${unit} i verkligheten, så bilden är mindre.`
    : `Förstoring: ${n} ${unit} på bilden är 1 ${unit} i verkligheten, så bilden är större.`;
  return [
    { text: reason },
    { row: [scaleTable(scaleTableModel({ scale, unit }))] },
    { text: directionSentence(scale, "bild") },
    { text: directionSentence(scale, "verklighet") },
  ];
}

const lasSkalan = {
  id: "las-skalan",
  part: 3,
  title: "Läs skalan",
  intro: "Skalan skrivs bild : verklighet. 1 : 200 betyder att 1 cm på bilden är 200 cm i verkligheten. Talen i skalan har ingen enhet.",
  exampleSeed: 21,
  fadesGrid: false,
  generate(rng, level) {
    const scale = pickScale(rng, level, { maxN: [100, 1000, Infinity][level] });
    const unit = pick(rng, ["mm", "cm", "m"]);
    const n = scaleFactor(scale);
    const red = isReduction(scale);
    const first = red
      ? [num(1), unitLabel(unit), text("på bilden är"), box("o"), unitLabel(unit), text("i verkligheten.")]
      : [num(1), unitLabel(unit), text("i verkligheten är"), box("o"), unitLabel(unit), text("på bilden.")];
    const how = ["multiplicera", "dividera"];
    return {
      key: `read:${scale.join(":")}:${unit}`,
      data: { kind: "scale-read", scale, unit },
      prompt: "Svara på frågorna om skalan.",
      rows: [
        [text(`Skalan är ${scaleText(scale)}.`)],
        first,
        [text("Bilden är en"), box("k")],
        [text("Från bild till verklighet:"), box("d1"), text("med"), box("n1")],
        [text("Från verklighet till bild:"), box("d2"), text("med"), box("n2")],
      ],
      boxes: {
        o: { kind: "decimal", expected: dec(n), unit },
        k: { kind: "choice", options: ["förminskning", "förstoring"], expected: kindOf(scale) },
        d1: { kind: "choice", options: how, expected: red ? "multiplicera" : "dividera" },
        n1: { kind: "int", expected: n },
        d2: { kind: "choice", options: how, expected: red ? "dividera" : "multiplicera" },
        n2: { kind: "int", expected: n },
      },
      steps: readSteps(scale, unit),
    };
  },
  mistakes: [
    {
      id: "swapped-directions",
      matches: (q, p) => q.data.kind === "scale-read" && p.d1 === q.boxes.d2.expected && p.d2 === q.boxes.d1.expected,
      text: (q) => {
        const red = isReduction(q.data.scale);
        return `Bilden är en ${kindOf(q.data.scale)}. Från bild till verklighet ska talet bli ${red ? "större" : "mindre"}.`;
      },
      sample: (q) => ({ d1: q.boxes.d2.expected, d2: q.boxes.d1.expected }),
    },
    {
      id: "read-as-reduction",
      matches: (q, p) => q.data.kind === "scale-read" && !isReduction(q.data.scale) && p.k === "förminskning",
      text: (q) => {
        const n = int(scaleFactor(q.data.scale));
        return `${scaleText(q.data.scale)} betyder att ${n} ${q.data.unit} på bilden är 1 ${q.data.unit} i verkligheten. Bilden är större än verkligheten.`;
      },
      sample: (q) => (isReduction(q.data.scale) ? null : { k: "förminskning" }),
    },
  ],
};

// ---------- 8. Skriv skalan, samma enhet ----------

// Saker med verkliga längder: små saker i mm (förstoras), stora i cm (förminskas).
const SMALL_THINGS = [
  { name: "myran", adj: "lång", min: 3, max: 12 },
  { name: "nyckelpigan", adj: "lång", min: 4, max: 8 },
  { name: "fröet", adj: "långt", min: 1, max: 6 },
  { name: "skruven", adj: "lång", min: 5, max: 40 },
  { name: "loppan", adj: "lång", min: 1, max: 3 },
];
const BIG_THINGS = [
  { name: "bordet", adj: "långt", min: 80, max: 240 },
  { name: "huset", adj: "högt", min: 500, max: 2000 },
  { name: "rummet", adj: "långt", min: 300, max: 900 },
  { name: "båten", adj: "lång", min: 400, max: 1500 },
  { name: "bron", adj: "lång", min: 5000, max: 50000 },
  { name: "parken", adj: "lång", min: 10000, max: 100000 },
];
// Längden på bilden: 1–30 cm på en ritning, 10–300 mm på en förstorad bild.
const IMAGE_RANGE = { cm: [1, 30], mm: [10, 300] };
const PRONOUN = { långt: "det", högt: "det", lång: "den" };

// Stegen från bild : verklighet till enklaste form.
function reduceSteps(bild, real, scale) {
  const steps = [{ text: `Bild : verklighet = ${formatDecimal(bild.amount)} : ${formatDecimal(real.amount)}.` }];
  const k = Math.max(decimals(bild.amount), decimals(real.amount));
  let [x, y] = [shift(bild.amount, k), shift(real.amount, k)];
  if (k > 0) steps.push({ text: `Gör talen till heltal: multiplicera båda med ${int(10 ** k)}. Då blir det ${formatDecimal(x)} : ${formatDecimal(y)}.` });
  const [a, b] = wholeRatio(x, y);
  const g = (x.m * 10 ** x.e) / a;
  if (g !== 1) steps.push({ text: `Dela båda talen med ${int(g)}: ${scaleText([a, b])}.` });
  steps.push({ row: [ratioPiece(a, b)] });
  steps.push({ text: directionSentence(scale, "bild") });
  return steps;
}

const skrivSkalaSamma = {
  id: "skriv-skala-samma",
  part: 3,
  title: "Skriv skalan, samma enhet",
  intro: "Skriv längden på bilden först och längden i verkligheten sedan: bild : verklighet. Förkorta tills ett av talen är 1.",
  exampleSeed: 22,
  fadesGrid: false,
  generate(rng, level) {
    const enlarge = level > 0 && rng() < 0.5;
    const { scale, thing, bild, real } = sample(() => {
      const scale = pickScale(rng, level, { enlarge });
      const red = isReduction(scale);
      const n = scaleFactor(scale);
      const unit = red ? "cm" : "mm";
      const thing = pick(rng, red ? BIG_THINGS : SMALL_THINGS);
      // Verklig längd: hela tal, på L2 ibland med en decimal (5,4 mm).
      const step = thing.max >= 1000 ? 100 : thing.max >= 100 ? 10 : 1;
      let realAmount = dec(randInt(rng, Math.ceil(thing.min / step), Math.floor(thing.max / step)) * step);
      if (level === 2 && !red && rng() < 0.5) realAmount = dec(randInt(rng, thing.min * 10, thing.max * 10), -1);
      const bildAmount = red ? divInt(realAmount, n) : mulInt(realAmount, n);
      if (!bildAmount) return null;
      const [lo, hi] = IMAGE_RANGE[unit];
      if (compare(bildAmount, dec(lo)) < 0 || compare(bildAmount, dec(hi)) > 0 || decimals(bildAmount) > 1) return null;
      const anyDecimals = decimals(bildAmount) + decimals(realAmount) > 0;
      if ((level === 2) !== anyDecimals) return null;
      return { scale, thing, bild: { amount: bildAmount, unit }, real: { amount: realAmount, unit } };
    });
    const red = isReduction(scale);
    const unit = bild.unit;
    const where = red ? "ritningen" : "bilden";
    const realFirst = rng() < 0.5;
    const realSentence = realFirst
      ? `I verkligheten är ${thing.name} ${fmt(real)} ${thing.adj}.`
      : `I verkligheten är ${PRONOUN[thing.adj]} ${fmt(real)}.`;
    const bildSentence = realFirst
      ? `På ${where} är ${PRONOUN[thing.adj]} ${fmt(bild)}.`
      : `På ${where} är ${thing.name} ${fmt(bild)} ${thing.adj}.`;
    const sentences = realFirst ? `${realSentence} ${bildSentence}` : `${bildSentence} ${realSentence}`;
    return {
      key: `write:${fmt(bild)}:${fmt(real)}`,
      data: { kind: "scale-write", scale, bild, verklighet: real, realFirst },
      prompt: `${sentences} Vilken skala har ${where}?`,
      rows: [[text("Skalan är"), box("r")]],
      boxes: { r: { kind: "ratio", expected: scale } },
      steps: [
        { text: "Skalan skrivs bild : verklighet. Båda längderna har samma enhet." },
        { row: [scaleTable(scaleTableModel({ scale, known: { side: "bild", amount: bild.amount, unit }, answer: real.amount }))] },
        ...reduceSteps(bild, real, scale),
      ],
    };
  },
  mistakes: [],
};

// ---------- 9. Skriv skalan, olika enheter ----------

const MU = "µ";
// Den minsta av två enheter: dit görs båda längderna om, så att det inte blir decimaler.
const smallerUnit = (a, b) => (unitOf(a).exp <= unitOf(b).exp ? a : b);

// bild : verklighet i enklaste form, med båda längderna i den minsta enheten.
export function scaleOf(bild, real) {
  const common = smallerUnit(bild.unit, real.unit);
  return wholeRatio(convert(bild.amount, bild.unit, common), convert(real.amount, real.unit, common));
}

// Enheten för verkligheten per nivå. L0: nära bildens enhet. L1: långt ifrån, eller förstoring. L2: mil och µm.
function realUnits(level, red, bildUnit) {
  if (level === 0) return bildUnit === "cm" ? ["dm", "m"] : ["cm", "dm"];
  if (level === 1) return red ? (bildUnit === "cm" ? ["km"] : ["m", "km"]) : bildUnit === "cm" ? ["mm"] : [];
  return red ? ["mil"] : [`${MU}m`];
}

const notConverted = {
  id: "not-converted",
  matches: (q, p) => {
    if (q.data.kind !== "scale-write" || q.data.bild.unit === q.data.verklighet.unit) return false;
    const [a, b] = wholeRatio(q.data.bild.amount, q.data.verklighet.amount);
    const [x, y] = wholeRatio(p.r.left, p.r.right);
    return x === a && y === b;
  },
  text: () => `${NO_UNIT_LINE} Gör om båda längderna till samma enhet först.`,
  sample: (q) => (q.data.kind === "scale-write" ? { r: rawRatio(...wholeRatio(q.data.bild.amount, q.data.verklighet.amount)) } : null),
};

const skrivSkalaOlika = {
  id: "skriv-skala-olika",
  part: 3,
  title: "Skriv skalan, olika enheter",
  intro: "Gör om båda längderna till samma enhet först, gärna den minsta. Skriv sedan bild : verklighet och förkorta.",
  exampleSeed: 23,
  fadesGrid: false,
  generate(rng, level) {
    const enlarge = level > 0 && rng() < 0.5;
    const { scale, bild, real } = sample(() => {
      const scale = pickScale(rng, level, { enlarge });
      const red = isReduction(scale);
      const n = scaleFactor(scale);
      const bildUnit = pick(rng, ["cm", "mm"]);
      const units = realUnits(level, red, bildUnit);
      if (units.length === 0) return null;
      const bildAmount = bildUnit === "cm" ? dec(randInt(rng, 1, 30)) : dec(randInt(rng, 1, 30) * 10);
      const realInBild = red ? mulInt(bildAmount, n) : divInt(bildAmount, n);
      if (!realInBild) return null;
      const realUnit = pick(rng, units);
      const realAmount = convert(realInBild, bildUnit, realUnit);
      if (compare(realAmount, d("0,1")) < 0 || compare(realAmount, d("1000")) > 0 || decimals(realAmount) > 2 || sigDigits(realAmount).length > 3) return null;
      return { scale, bild: { amount: bildAmount, unit: bildUnit }, real: { amount: realAmount, unit: realUnit } };
    });
    const common = smallerUnit(bild.unit, real.unit);
    const toConvert = bild.unit === common ? real : bild;
    const inCommon = (x) => convert(x.amount, x.unit, common);
    return {
      key: `sheet:${fmt(real)}:${fmt(bild)}`,
      data: { kind: "scale-write", scale, bild, verklighet: real, realFirst: true },
      prompt: "Bestäm skalan. Skriv den i enklaste form.",
      rows: [[table({ head: ["Verklighet", "Bild", "Skala"], rows: [[[qty(real.amount, real.unit)], [qty(bild.amount, bild.unit)], [box("r")]]] })]],
      boxes: { r: { kind: "ratio", expected: scale } },
      steps: [
        { text: NO_UNIT_LINE },
        { text: `Gör om till samma enhet. Välj den minsta enheten, ${common}, så slipper du decimaler.` },
        ...convertSteps(toConvert, common),
        { row: [scaleTable(scaleTableModel({ scale, known: { side: "bild", amount: inCommon(bild), unit: common }, answer: inCommon(real) }))] },
        ...reduceSteps({ amount: inCommon(bild), unit: common }, { amount: inCommon(real), unit: common }, scale),
      ],
    };
  },
  mistakes: [notConverted],
};

// ---------- 10. Räkna med skalan, åt båda hållen ----------

// Skalans räknesätt på ett tal i bildens enhet: från bild till verklighet, eller tillbaka.
function applyScale(scale, amount, toReal, { swap = false } = {}) {
  const n = scaleFactor(scale);
  const multiply = (toReal === isReduction(scale)) !== swap;
  return multiply ? mulInt(amount, n) : divInt(amount, n);
}

function calcValues(q, { swap = false } = {}) {
  const { scale, known, asked } = q.data;
  const toReal = known.side === "bild";
  const bildUnit = toReal ? known.unit : asked.unit;
  const knownInBild = convert(known.amount, known.unit, bildUnit);
  const scaled = applyScale(scale, knownInBild, toReal, { swap });
  return scaled && { scaled, answer: convert(scaled, bildUnit, asked.unit) };
}

const raknaSkala = {
  id: "rakna-skala",
  part: 3,
  title: "Räkna med skalan, åt båda hållen",
  intro: "Från bild till verklighet och tillbaka: skalan säger om du ska multiplicera eller dividera. Räkna i bildens enhet och gör om till den enhet som frågan vill ha.",
  exampleSeed: 24,
  fadesGrid: false,
  generate(rng, level) {
    const enlarge = level > 0 && rng() < 0.5;
    const values = sample(() => {
      const scale = pickScale(rng, level, { enlarge });
      const red = isReduction(scale);
      const n = scaleFactor(scale);
      const bildUnit = red ? "cm" : pick(rng, ["cm", "mm"]);
      const bildAmount = level === 0 || rng() < 0.5 ? dec(randInt(rng, 1, 25)) : dec(randInt(rng, 11, 199), -1);
      if (decimals(bildAmount) === 0 && level > 0 && rng() < 0.3) return null;
      const realInBild = red ? mulInt(bildAmount, n) : divInt(bildAmount, n);
      if (!realInBild) return null;
      let realUnit = bildUnit;
      if (level > 0) {
        const options = red ? ["m", "km", ...(level === 2 ? ["mil"] : [])] : ["mm", ...(level === 2 ? [`${MU}m`] : [])];
        realUnit = pick(rng, options.filter((u) => u !== bildUnit));
        if (!realUnit) return null;
      }
      const realAmount = convert(realInBild, bildUnit, realUnit);
      if (decimals(realAmount) > 3 || compare(realAmount, d("1000000")) > 0 || sigDigits(realAmount).length > 4) return null;
      // Svaret får inte gå att skriva av: 1 : 100 med cm och m ger annars samma tal.
      if (equals(realAmount, bildAmount)) return null;
      const toReal = realUnit === "mil" ? false : rng() < 0.5;
      const bild = { amount: bildAmount, unit: bildUnit };
      const real = { amount: realAmount, unit: realUnit };
      return {
        scale,
        known: toReal ? { side: "bild", ...bild } : { side: "verklighet", ...real },
        asked: toReal ? { side: "verklighet", unit: realUnit } : { side: "bild", unit: bildUnit },
        answer: toReal ? realAmount : bildAmount,
      };
    });
    const { scale, known, asked, answer } = values;
    const red = isReduction(scale);
    const n = scaleFactor(scale);
    const where = red ? (n >= 10000 ? "kartan" : "ritningen") : "bilden";
    const sentence = known.side === "bild"
      ? `På ${where} är sträckan ${fmt(known)}. Hur lång är den i verkligheten?`
      : `I verkligheten är sträckan ${fmt(known)}. Hur lång är den på ${where}?`;
    const toReal = known.side === "bild";
    const bildUnit = toReal ? known.unit : asked.unit;
    const knownInBild = convert(known.amount, known.unit, bildUnit);
    const scaled = applyScale(scale, knownInBild, toReal);
    const multiply = (toReal === red);
    const steps = [{ text: directionSentence(scale, known.side) }];
    if (!toReal && known.unit !== bildUnit) {
      steps.push({ text: `${NO_UNIT_LINE} Gör om ${fmt(known)} till ${bildUnit} först.` }, ...convertSteps(known, bildUnit));
    }
    steps.push(
      { row: [scaleTable(scaleTableModel({ scale, known: { side: known.side, amount: knownInBild, unit: bildUnit }, answer: scaled }))] },
      { row: [qty(knownInBild, bildUnit), multiply ? TIMES : DIVIDE, num(n), EQ, qty(scaled, bildUnit)] },
    );
    if (toReal && asked.unit !== bildUnit) {
      steps.push({ text: `${NO_UNIT_LINE} Gör om ${fmt({ amount: scaled, unit: bildUnit })} till ${asked.unit}.` }, ...convertSteps({ amount: scaled, unit: bildUnit }, asked.unit));
    }
    return {
      key: `calc:${scale.join(":")}:${fmt(known)}>${asked.unit}`,
      data: { kind: "scale-calc", scale, known, asked, answer },
      prompt: `Skalan är ${scaleText(scale)}. ${sentence} Svara i ${asked.unit}.`,
      rows: [[text("Svar:"), box("a"), unitLabel(asked.unit)]],
      boxes: { a: { kind: "decimal", expected: answer, unit: asked.unit } },
      steps,
    };
  },
  mistakes: [
    {
      id: "wrong-operation",
      matches: (q, p) => {
        if (q.data.kind !== "scale-calc") return false;
        const wrong = calcValues(q, { swap: true });
        return !!wrong && equals(p.a, wrong.answer);
      },
      text: (q) => {
        const red = isReduction(q.data.scale);
        const toReal = q.data.known.side === "bild";
        return `Bilden är en ${kindOf(q.data.scale)}. Från ${toReal ? "bild till verklighet" : "verklighet till bild"} ska talet bli ${toReal === red ? "större" : "mindre"}.`;
      },
      sample: (q) => {
        const wrong = calcValues(q, { swap: true });
        return wrong ? { a: rawDecimal(wrong.answer) } : null;
      },
    },
    {
      id: "not-converted",
      matches: (q, p) => {
        if (q.data.kind !== "scale-calc" || q.data.known.unit === q.data.asked.unit) return false;
        const skipped = applyScale(q.data.scale, q.data.known.amount, q.data.known.side === "bild");
        return !!skipped && equals(p.a, skipped);
      },
      text: (q) => `${NO_UNIT_LINE} Svaret ska vara i ${q.data.asked.unit}.`,
      sample: (q) => {
        if (q.data.known.unit === q.data.asked.unit) return null;
        const skipped = applyScale(q.data.scale, q.data.known.amount, q.data.known.side === "bild");
        return skipped ? { a: rawDecimal(skipped) } : null;
      },
    },
  ],
};

export const DEL3 = [lasSkalan, skrivSkalaSamma, skrivSkalaOlika, raknaSkala];
