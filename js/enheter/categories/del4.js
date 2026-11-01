// Del 4 — Area och volym: vad längd, area och volym betyder, sedan omvandlingar med 2 och 3 steg per ruta.
import { pick, randInt } from "../../representationer/random.js";
import { text, num, qty, unitLabel, box, pic, grid, EQ, PLUS, TIMES, MINUS } from "../pieces.js";
import { rect, lShape, cubes, object, areaOf, perimeterOf, layerOf, volumeOf, tenByTen } from "../pictures.js";
import { d, dec, compare, decimals, equals, formatDecimal, shift } from "../decimal.js";
import { unit, convert } from "../units.js";
import { gridModel, hops } from "../grid.js";
import { rawDecimal } from "../check.js";
import { sample } from "./helpers.js";
import { amountFor, convertQuestion, conversionMistakes, translationMistake, pickPair, fmt, stepMeaning } from "./convert.js";
import { tilesQuestion, pickMistakes } from "./tiles.js";
import { WORD_ITEMS, OBJECT_SETS, UNIT_ITEMS } from "./ord.js";

// ---------- 11. Vad betyder längd, area och volym? ----------

const UNIT_FOR = { perimeter: "cm", area: "cm²", volume: "cm³" };
const LABEL = { perimeter: "Omkretsen är", area: "Arean är", volume: "Volymen är" };
const PROMPT = {
  perimeter: "Hur lång är omkretsen? Varje ruta är 1 cm · 1 cm.",
  area: "Hur stor är arean? Varje ruta är 1 cm · 1 cm.",
  volume: "Hur stor är volymen? Varje kub är 1 cm · 1 cm · 1 cm.",
};

function flatShape(rng, level) {
  return sample(() => {
    let s;
    if (level === 2 && rng() < 0.5) {
      const w = randInt(rng, 3, 8);
      const h = randInt(rng, 3, 8);
      s = lShape(w, h, randInt(rng, 1, w - 1), randInt(rng, 1, h - 1));
    } else s = rect(randInt(rng, 2, 8), randInt(rng, 2, 8));
    return areaOf(s) === perimeterOf(s) ? null : s;
  });
}

function countSteps(shape, measure) {
  if (measure === "volume") {
    const L = layerOf(shape);
    const V = volumeOf(shape);
    return [
      { text: "Volym är hur många kuber på 1 cm · 1 cm · 1 cm som fyller lådan." },
      { text: `Räkna kuberna i ett lager: ${shape.d} rader med ${shape.w} kuber i varje rad.`, row: [num(shape.w), TIMES, num(shape.d), EQ, num(L)] },
      { text: `Lådan har ${shape.layers} lager, så multiplicera med ${shape.layers}. Volym räknar kuber, så svaret är i cm³.`, row: [num(L), TIMES, num(shape.layers), EQ, num(V)] },
    ];
  }
  const { w, h } = shape;
  const P = perimeterOf(shape);
  const A = areaOf(shape);
  const notMixedUp = { text: `Blanda inte ihop omkrets och area. Omkretsen är kanten runt figuren, ${P} cm. Arean är rutorna inne i figuren, ${A} cm².` };
  if (measure === "perimeter") {
    const steps = [{ text: "Omkretsen är hur lång kanten runt figuren är. Räkna sträckorna på 1 cm runt om." }];
    if (shape.type === "L") steps.push({ text: "Hörnet som saknas gör inte kanten kortare: kanterna inne i hörnet är lika långa som kanterna som saknas." });
    steps.push({ text: "Lägg ihop alla sidor. Omkretsen är en längd, så svaret är i cm.", row: [num(w), PLUS, num(h), PLUS, num(w), PLUS, num(h), EQ, num(P)] }, notMixedUp);
    return steps;
  }
  const steps = [{ text: "Area är hur många rutor på 1 cm · 1 cm som täcker figuren." }];
  if (shape.type === "L") {
    const whole = w * h;
    const cut = shape.cutW * shape.cutH;
    steps.push(
      { text: "Räkna rutorna i hela rektangeln:", row: [num(w), TIMES, num(h), EQ, num(whole)] },
      { text: "Räkna rutorna i hörnet som saknas:", row: [num(shape.cutW), TIMES, num(shape.cutH), EQ, num(cut)] },
      { text: "Ta bort hörnet. Area räknar rutor, så svaret är i cm².", row: [num(whole), MINUS, num(cut), EQ, num(A)] },
    );
  } else {
    steps.push({ text: `Figuren har ${h} rader med ${w} rutor i varje rad. Area räknar rutor, så svaret är i cm².`, row: [num(w), TIMES, num(h), EQ, num(A)] });
  }
  steps.push(notMixedUp);
  return steps;
}

const isCount = (q) => q.data.kind === "count";
const flatValue = (q, measure) => (q.data.shape.type === "cubes" ? null : measure === "area" ? areaOf(q.data.shape) : perimeterOf(q.data.shape));
const UNIT_TIPS = {
  area: "Area mäts i rutor på 1 cm · 1 cm, alltså cm².",
  perimeter: "Omkretsen är en längd, alltså cm.",
  volume: "Volym mäts i kuber på 1 cm · 1 cm · 1 cm, alltså cm³.",
};

const vadBetyder = {
  id: "vad-betyder",
  part: 4,
  title: "Vad betyder längd, area och volym?",
  intro: "Att mäta är att räkna hur många enheter något är. Längd räknar sträckor på 1 cm. Omkretsen är en längd: hur långt det är runt en figur. Area räknar rutor på 1 cm · 1 cm, som skrivs 1 cm². Volym räknar kuber på 1 cm · 1 cm · 1 cm, som skrivs 1 cm³.",
  exampleSeed: 41,
  fadesGrid: false,
  generate(rng, level) {
    let shape;
    let measure;
    if (level > 0 && rng() < 0.4) {
      shape = cubes(randInt(rng, 2, 4), randInt(rng, 2, 4), randInt(rng, 2, level === 2 ? 4 : 3));
      measure = "volume";
    } else {
      shape = flatShape(rng, level);
      measure = rng() < 0.5 ? "area" : "perimeter";
    }
    const value = measure === "volume" ? volumeOf(shape) : measure === "area" ? areaOf(shape) : perimeterOf(shape);
    const unit = UNIT_FOR[measure];
    const answerRow = level === 0
      ? [text(LABEL[measure]), box("n"), unitLabel(unit)]
      : [text(LABEL[measure]), box("n"), box("u")];
    const boxes = { n: { kind: "int", expected: value } };
    if (level > 0) boxes.u = { kind: "choice", options: ["cm", "cm²", "cm³"], expected: unit };
    return {
      key: `${measure}:${JSON.stringify(shape)}`,
      data: { kind: "count", shape, measure, value, unit },
      prompt: PROMPT[measure],
      rows: [[pic(shape)], answerRow],
      boxes,
      steps: countSteps(shape, measure),
    };
  },
  mistakes: [
    {
      id: "area-for-perimeter",
      matches: (q, p) => isCount(q) && q.data.measure === "perimeter" && p.n === flatValue(q, "area"),
      text: () => "Du räknade rutorna inne i figuren. Det är arean. Omkretsen är längden runt kanten.",
      sample: (q) => (isCount(q) && q.data.measure === "perimeter" ? { n: String(flatValue(q, "area")) } : null),
    },
    {
      id: "perimeter-for-area",
      matches: (q, p) => isCount(q) && q.data.measure === "area" && p.n === flatValue(q, "perimeter"),
      text: () => "Du räknade kanten runt figuren. Det är omkretsen. Arean är hur många rutor som täcker figuren.",
      sample: (q) => (isCount(q) && q.data.measure === "area" ? { n: String(flatValue(q, "perimeter")) } : null),
    },
    {
      id: "one-layer",
      matches: (q, p) => isCount(q) && q.data.measure === "volume" && p.n === layerOf(q.data.shape),
      text: (q) => `Det är bara ett lager. Lådan har ${q.data.shape.layers} lager.`,
      sample: (q) => (isCount(q) && q.data.measure === "volume" ? { n: String(layerOf(q.data.shape)) } : null),
    },
    {
      id: "wrong-unit",
      matches: (q, p) => isCount(q) && "u" in q.boxes && p.n === q.data.value && p.u !== q.data.unit,
      text: (q) => UNIT_TIPS[q.data.measure],
      sample: (q) => (isCount(q) && q.boxes.u ? { u: q.boxes.u.options.find((o) => o !== q.data.unit) } : null),
    },
  ],
};

// ---------- 12. Längd, area eller volym? ----------

const ANSWERS = ["Längd", "Area", "Volym"];
const UNIT_ANSWER = { cm: "Längd", km: "Längd", mil: "Längd", "m²": "Area", "cm²": "Area", ha: "Area", "km²": "Area", "m³": "Volym", "cm³": "Volym", l: "Volym", dl: "Volym", ml: "Volym" };
const LITER_UNITS = ["l", "dl", "ml"];

function unitExplanation(item) {
  if (item === "mil") return "1 mil = 10 km. Det är en längd: hur långt något är.";
  if (item === "ha") return "ha (hektar) är en areaenhet: 1 ha = 10 000 m². Den mäter hur stor en yta är.";
  if (item === "l") return "l är en volymenhet: 1 l = 1 dm³. Den mäter hur mycket något rymmer.";
  if (LITER_UNITS.includes(item)) return `${item} är en del av en liter, och liter är en volymenhet: 1 l = 1 dm³. Den mäter hur mycket något rymmer.`;
  if (item.endsWith("²")) return `${item} är en areaenhet. Den lilla tvåan betyder två riktningar: en ruta på 1 · 1.`;
  if (item.endsWith("³")) return `${item} är en volymenhet. Den lilla trean betyder tre riktningar: en kub på 1 · 1 · 1.`;
  return `${item} är en längdenhet. Den mäter hur långt något är, i en riktning.`;
}

const MEANING = {
  Längd: "Längd är hur långt något är: en sträcka i en riktning.",
  Area: "Area är hur stor en yta är: rutor som täcker något.",
  Volym: "Volym är hur mycket något rymmer: kuber som fyller något.",
};

// Tänk först på vad som mäts, och se sedan varför just den här frågan gäller det.
const classifySteps = (item) => [
  { text: "Tänk på vad som mäts: en sträcka är längd, en yta som täcks är area och något som fylls är volym." },
  { text: `${item.why} ${MEANING[item.answer]}` },
];

const classifyQuestion = (key, data, prompt, rows, steps, label = "Frågan gäller") => ({
  key,
  data: { kind: "classify", ...data },
  prompt,
  rows: [...rows, [text(label), box("c")]],
  boxes: { c: { kind: "choice", options: ANSWERS, expected: data.answer } },
  steps,
});

const langdAreaVolym = {
  id: "langd-area-volym",
  part: 4,
  title: "Längd, area eller volym?",
  intro: "Längd är hur långt något är, i en riktning, och mäts till exempel i cm. Area är hur stor en yta är, i två riktningar, och mäts till exempel i cm². Volym är hur mycket något rymmer, i tre riktningar, och mäts till exempel i cm³ eller liter.",
  exampleSeed: 42,
  fadesGrid: false,
  generate(rng, level) {
    const prompt = "Gäller frågan längd, area eller volym?";
    if (level === 0) {
      const item = pick(rng, UNIT_ITEMS);
      return classifyQuestion(`unit:${item}`, { item, answer: UNIT_ANSWER[item] }, "Vad mäter enheten: längd, area eller volym?", [[unitLabel(item)]], [{ text: unitExplanation(item) }], "Enheten mäter");
    }
    if (level === 1) {
      if (rng() < 1 / 3) {
        const set = pick(rng, OBJECT_SETS);
        const item = pick(rng, set.items);
        return classifyQuestion(`object:${set.object}:${item.answer}`, { item: `${set.object}:${item.answer}`, answer: item.answer }, prompt, [[pic(object(set.object))], [text(item.text)]], [
          { text: "Bilden är densamma i alla tre frågorna om föremålet. Det är frågan som avgör." },
          { text: `${item.why} ${MEANING[item.answer]}` },
        ]);
      }
      const item = pick(rng, WORD_ITEMS.filter((w) => w.level === 1));
      return classifyQuestion(`word:${item.id}`, { item: item.id, answer: item.answer, tag: item.tag }, prompt, [[text(item.text)]], classifySteps(item));
    }
    if (rng() < 0.5) {
      const item = pick(rng, WORD_ITEMS.filter((w) => w.level === 2));
      return classifyQuestion(`word:${item.id}`, { item: item.id, answer: item.answer, tag: item.tag }, prompt, [[text(item.text)]], classifySteps(item));
    }
    // Längder ihop: plus ger en längd, två längder gånger varandra en area, tre en volym.
    const factors = randInt(rng, 1, 3);
    const u = pick(rng, ["cm", "dm", "m"]);
    const [a, b, c] = [randInt(rng, 2, 9), randInt(rng, 2, 9), randInt(rng, 2, 9)];
    const q = (n) => qty(dec(n), u);
    let pieces;
    let expr;
    let explanation;
    if (factors === 1) {
      pieces = [q(a), PLUS, q(b), PLUS, q(a), PLUS, q(b)];
      expr = `${a} ${u} + ${b} ${u} + ${a} ${u} + ${b} ${u}`;
      explanation = `Längder som läggs ihop blir en längd: svaret är i ${u}.`;
    } else if (factors === 2) {
      pieces = [q(a), TIMES, q(b)];
      expr = `${a} ${u} · ${b} ${u}`;
      explanation = `${u} · ${u} = ${u}²: två längder gånger varandra, två riktningar. Det är en area.`;
    } else {
      pieces = [q(a), TIMES, q(b), TIMES, q(c)];
      expr = `${a} ${u} · ${b} ${u} · ${c} ${u}`;
      explanation = `${u} · ${u} · ${u} = ${u}³: tre riktningar. Det är en volym.`;
    }
    const answer = ANSWERS[factors - 1];
    return classifyQuestion(`expr:${expr}`, { item: expr, expr, answer }, "Blir svaret en längd, en area eller en volym?", [pieces], [{ text: explanation }], "Svaret blir en");
  },
  mistakes: [
    {
      id: "liter-not-volume",
      matches: (q, p) => q.data.kind === "classify" && (LITER_UNITS.includes(q.data.item) || q.data.tag === "liter") && p.c !== "Volym",
      text: () => "Liter är en volymenhet: 1 l = 1 dm³. Det som mäts i liter är en volym.",
      sample: (q) => (LITER_UNITS.includes(q.data.item) || q.data.tag === "liter" ? { c: "Längd" } : null),
    },
    {
      id: "around-is-length",
      matches: (q, p) => q.data.kind === "classify" && q.data.tag === "runt" && p.c === "Area",
      text: () => "Runt något är kanten runt en yta. Kanten är en sträcka, alltså en längd.",
      sample: (q) => (q.data.tag === "runt" ? { c: "Area" } : null),
    },
  ],
};

// ---------- 13–15. Area- och volymenheter, m³ och liter ----------

const AMOUNTS = {
  0: { maxSig: 2, maxDecimals: 3, givenDecimals: 2, min: "0,1" },
  1: { maxSig: 3, maxDecimals: 4, givenDecimals: 2, min: "0,1" },
  2: { maxSig: 3, maxDecimals: 4, givenDecimals: 3, min: "0,01" },
};
const BOUNDS = { 0: [1, 1], 1: [1, 2], 2: [1, 3] };
const FORMATS = { 0: ["plain", "write", "left"], 1: ["plain", "write", "left", "context"], 2: ["plain", "write", "left", "context"] };

const ctx = (s, min, max) => ({ s, min: d(min), max: d(max) });
const AREA_CONTEXTS = {
  ha: [ctx("Gården har {} åker.", "5", "100"), ctx("Parken är {} stor.", "1", "50")],
  "km²": [ctx("Kommunen är {} stor.", "10", "900"), ctx("Sjön är {} stor.", "1", "100")],
  "m²": [ctx("Rummet är {} stort.", "8", "60"), ctx("Lägenheten är {} stor.", "30", "150")],
  "dm²": [ctx("Ett A4-papper är ungefär {} stort.", "6", "6,5"), ctx("Brickan är {} stor.", "8", "30")],
  "cm²": [ctx("Frimärket är {} stort.", "4", "12"), ctx("Mobilskärmen är {} stor.", "60", "120")],
  "mm²": [ctx("Chipet är {} stort.", "20", "400")],
};
const VOLUME_CONTEXTS = {
  "m³": [ctx("Containern rymmer {}.", "10", "80"), ctx("Rummet har {} luft.", "20", "100")],
  "dm³": [ctx("Lådan rymmer {}.", "5", "100")],
  "cm³": [ctx("Tärningen är {} stor.", "1", "30")],
};

function contextFor(rng, contexts, given) {
  const fits = (contexts[given.unit] ?? []).filter((c) => compare(given.amount, c.min) >= 0 && compare(given.amount, c.max) <= 0);
  return fits.length > 0 ? pick(rng, fits).s.replace("{}", fmt(given)) : null;
}

// Fel antal steg för kommat per ruta: · 10 (som för längd) eller · 100 (som för area).
function perSquareMistake(id, perSquare, tip) {
  const value = (q) => {
    if (q.data.kind !== "convert" || !("a" in q.boxes)) return null;
    const start = q.data.via ?? q.data.given;
    if (unit(start.unit).family !== unit(q.data.asked).family) return null;
    const h = hops(start.unit, q.data.asked);
    return shift(start.amount, Math.sign(h.factorExp) * h.squares * perSquare);
  };
  return {
    id,
    matches: (q, p) => {
      const v = value(q);
      return v !== null && equals(p.a, v);
    },
    text: () => tip,
    sample: (q) => {
      const v = value(q);
      return v ? { a: rawDecimal(v) } : null;
    },
  };
}

// Förklaringen ska gälla enheterna i uppgiften: den större enheten och enheten en ruta under den.
// km² ligger tre rutor från m², så där förklaras m².
const ONE_SMALLER = { m: "dm", dm: "cm", cm: "mm" };
function unitPair(start, asked) {
  const big = (unit(start).pos >= unit(asked).pos ? start : asked).replace(/[²³]/, "");
  const base = big === "km" ? "m" : big;
  return [base, ONE_SMALLER[base]];
}

function areaExplain(start, asked) {
  const [big, small] = unitPair(start, asked);
  return {
    text: `Varför 100? 1 ${big}² är en ruta på 1 ${big} · 1 ${big}. 1 ${big} är 10 ${small}, så rutan rymmer 10 · 10 = 100 rutor på 1 ${small}².`,
    row: [pic(tenByTen(big, small))],
  };
}

function volumeExplain(start, asked) {
  const [big, small] = unitPair(start, asked);
  return { text: `Varför 1\u00a0000? 1 ${big}³ är en kub på 1 ${big} · 1 ${big} · 1 ${big}. 1 ${big} är 10 ${small}, så kuben rymmer 10 · 10 · 10 = 1 000 kuber på 1 ${small}³.` };
}

// En omvandlingskategori för area eller volym. Bilden eller texten om 10 · 10 (· 10) läggs efter hoppen.
function squareCategory({ id, title, intro, exampleSeed, units, contexts, special, explain, mistakes, bounds = BOUNDS }) {
  return {
    id,
    part: 4,
    title,
    intro,
    exampleSeed,
    fadesGrid: true,
    generate(rng, level) {
      const sizes = AMOUNTS[level];
      let question;
      if (special && level > 0 && rng() < 0.25) {
        const asked = pick(rng, special.targets[level]);
        const given = { amount: amountFor(rng, special.unit, asked, { ...sizes, min: special.min, max: special.max }), unit: special.unit };
        const context = level > 0 && rng() < 0.3 ? contextFor(rng, contexts, given) : null;
        question = convertQuestion({ level, given, asked, format: context ? "context" : pick(rng, ["plain", "write"]), context });
      } else {
        const [from, to] = pickPair(rng, units, bounds[level]);
        const given = { amount: amountFor(rng, from, to, sizes), unit: from };
        let format = pick(rng, FORMATS[level]);
        const context = format === "context" ? contextFor(rng, contexts, given) : null;
        if (format === "context" && !context) format = "write";
        question = convertQuestion({ level, given, asked: to, format, context });
      }
      const at = question.steps.findIndex((s) => s.text?.startsWith("Räkna stegen"));
      const start = question.data.via ?? question.data.given;
      question.steps.splice(at + 1, 0, explain(start.unit, question.data.asked));
      return question;
    },
    mistakes,
  };
}

const areaEnheter = squareCategory({
  id: "area-enheter",
  title: "Areaenheter",
  intro: "Area mäts i enheter som m² och dm². 1 m² är en ruta på 1 m · 1 m. 1 m är 10 dm, så rutan rymmer 10 · 10 = 100 rutor på 1 dm². Därför är varje steg i rutnätet 100 gånger för area, inte 10 gånger. Kommat flyttas alltså två steg för varje ruta. Hektar (ha) står inte i rutnätet. 1 ha är 10\u00a0000 m², så gör först om ha till m².",
  exampleSeed: 43,
  units: ["km²", "m²", "dm²", "cm²", "mm²"],
  contexts: AREA_CONTEXTS,
  special: { unit: "ha", min: "0,5", max: "50", targets: { 1: ["dm²"], 2: ["km²", "dm²"] } },
  explain: areaExplain,
  mistakes: [
    perSquareMistake("one-step-per-square", 1, "För area är varje steg i rutnätet · 100, alltså två steg för kommat."),
    translationMistake({ id: "ha-wrong", unitId: "ha", wrongExps: [2, 3], tip: "1 ha är 10 000 m². Gör om hektaren till m² först." }),
    ...conversionMistakes(),
  ],
});

const volymEnheter = squareCategory({
  id: "volym-enheter",
  title: "Volymenheter i m³",
  intro: "Volym kan mätas i enheter som m³ och dm³. 1 dm³ är en kub på 1 dm · 1 dm · 1 dm. 1 dm är 10 cm, så kuben rymmer 10 · 10 · 10 = 1\u00a0000 kuber på 1 cm³. Därför är varje steg i rutnätet 1\u00a0000 gånger för volym. Kommat flyttas alltså tre steg för varje ruta.",
  exampleSeed: 44,
  units: ["m³", "dm³", "cm³", "mm³"],
  // Högst två rutor: m³ ↔ mm³ är en miljard och ger inga rimliga tal.
  bounds: { 0: [1, 1], 1: [1, 2], 2: [1, 2] },
  contexts: VOLUME_CONTEXTS,
  special: null,
  explain: volumeExplain,
  mistakes: [
    perSquareMistake("one-step-per-square", 1, "För volym är varje steg i rutnätet · 1 000, alltså tre steg för kommat."),
    perSquareMistake("two-steps-per-square", 2, "Två steg per ruta gäller för area. För volym är varje steg i rutnätet · 1 000, alltså tre steg."),
    ...conversionMistakes(),
  ],
});

const M3 = ["m³", "dm³", "cm³"];
const LITER = ["l", "dl", "cl", "ml"];
const isSwitch = (a, b) => [a, b].sort().join("|") === "dm³|l";
const LITER_CONTEXTS = {
  "m³": [ctx("Poolen rymmer {} vatten.", "20", "80")],
  l: [ctx("Flaskan rymmer {}.", "0,33", "2")],
  "cm³": [ctx("Burken rymmer {}.", "250", "500")],
};

// Vägen från den givna enheten till den sökta, alltid via 1 dm³ = 1 l.
function routeUnits(from, to) {
  const m3First = unit(from).family === "m3";
  const seq = [from, m3First ? "dm³" : "l", m3First ? "l" : "dm³", to];
  return seq.filter((u, i) => i === 0 || u !== seq[i - 1]);
}

const legsOf = (units) => units.slice(1).filter((u, i) => !isSwitch(units[i], u)).length;

function legStep(prev, cur) {
  if (isSwitch(prev.unit, cur.unit)) return { text: "1 dm³ = 1 l, så talet är detsamma. Bara enheten byts.", row: [qty(prev.amount, prev.unit), EQ, qty(cur.amount, cur.unit)] };
  const h = hops(prev.unit, cur.unit);
  return {
    text: `Från ${prev.unit} till ${cur.unit} är det ${h.squares} steg åt ${h.direction}. ${stepMeaning(h)}`,
    row: [qty(prev.amount, prev.unit), EQ, qty(cur.amount, cur.unit)],
  };
}

const m3Liter = {
  id: "m3-liter",
  part: 4,
  title: "m³ och liter",
  intro: "Volym kan skrivas både i m³ och i liter. Bron mellan dem är 1 dm³ = 1 l: en kub på 1 dm · 1 dm · 1 dm rymmer precis 1 liter. Gör därför först om till dm³ eller l, byt enhet, och gör sedan om till den enhet som frågan vill ha. I rutnätet står liter under dm³.",
  exampleSeed: 45,
  fadesGrid: true,
  generate(rng, level) {
    const sizes = AMOUNTS[level];
    const { from, to, units, given, route } = sample(() => {
      const fromM3 = rng() < 0.5;
      const from = pick(rng, fromM3 ? M3 : LITER);
      const to = pick(rng, fromM3 ? LITER : M3);
      const units = routeUnits(from, to);
      const legs = legsOf(units);
      if (legs === 0 || (level === 0 && legs !== 1) || (level === 1 && legs !== 2)) return null;
      const given = { amount: amountFor(rng, from, to, sizes), unit: from };
      const route = units.slice(1).map((u) => ({ amount: convert(given.amount, from, u), unit: u }));
      if (route.some((r) => decimals(r.amount) > 4)) return null;
      return { from, to, units, given, route };
    });
    const answer = route[route.length - 1].amount;
    const rows = [];
    const boxes = {};
    if (level < 2) {
      rows.push([grid(gridModel({ family: "m3", literRow: true, from, to: level === 0 ? to : null, showHops: level === 0, windowUnits: [from, to] }))]);
      route.forEach((r, i) => {
        const id = i === route.length - 1 ? "a" : `r${i + 1}`;
        rows.push(i === 0 ? [qty(given.amount, from), EQ, box(id), unitLabel(r.unit)] : [EQ, box(id), unitLabel(r.unit)]);
        boxes[id] = { kind: "decimal", expected: r.amount, unit: r.unit };
      });
    } else {
      rows.push([qty(given.amount, from), EQ, box("a"), unitLabel(to)]);
      boxes.a = { kind: "decimal", expected: answer, unit: to };
    }
    const context = level === 2 && rng() < 0.4 ? contextFor(rng, LITER_CONTEXTS, given) : null;
    const prompt = context ? `${context} Svara i ${to}.` : level < 2 ? `Gör om till ${to}. Gå via 1 dm³ = 1 l.` : `Gör om till ${to}.`;
    const path = [given, ...route];
    return {
      key: `m3l:${fmt(given)}>${to}`,
      data: { kind: "convert", format: context ? "context" : "plain", given, asked: to, via: null, answer, route },
      prompt,
      rows,
      boxes,
      steps: [
        { text: `I rutnätet står liter under dm³, eftersom 1 dm³ = 1 l. Gå alltid den vägen: ${units.join(" → ")}.`, row: [grid(gridModel({ family: "m3", literRow: true, from, to, showHops: true }))] },
        ...path.slice(1).map((cur, i) => legStep(path[i], cur)),
      ],
    };
  },
  mistakes: [
    {
      id: "m3-is-liter",
      matches: (q, p) => q.data.kind === "convert" && "a" in q.boxes && equals(p.a, shift(q.data.answer, unit(q.data.given.unit).family === "m3" ? -3 : 3)),
      text: () => "1 m³ är 1 000 l. Det är 1 dm³ som är 1 l.",
      sample: (q) => ({ a: rawDecimal(shift(q.data.answer, unit(q.data.given.unit).family === "m3" ? -3 : 3)) }),
    },
    {
      id: "cl-is-cm3",
      matches: (q, p) => q.data.kind === "convert" && [q.data.given.unit, q.data.asked].sort().join("|") === "cl|cm³" && equals(p.a, q.data.given.amount),
      text: () => "1 cl är 10 cm³. Det är 1 ml som är 1 cm³. Gå via liter.",
      sample: (q) => ([q.data.given.unit, q.data.asked].sort().join("|") === "cl|cm³" ? { a: rawDecimal(q.data.given.amount) } : null),
    },
    ...conversionMistakes(),
  ],
};

// ---------- 16. Vilka är lika stora? ----------

const likaStora2 = {
  id: "lika-stora-2",
  part: 4,
  title: "Vilka är lika stora? (area, volym, liter)",
  intro: "Samma siffror kan betyda helt olika mått, så gör först om alla mått till samma enhet. Kom ihåg att varje steg i rutnätet är 100 gånger för area och 1\u00a0000 gånger för volym. Mellan volym och liter gäller 1 dm³ = 1 l, och därför är 1 cm³ = 1 ml.",
  exampleSeed: 46,
  fadesGrid: false,
  generate(rng, level) {
    if (level === 0) return tilesQuestion(rng, level, { families: [pick(rng, ["m2", "m3"])], groupSize: 2 });
    if (level === 1) return tilesQuestion(rng, level, { families: ["m3", "l"], groupSize: 2 });
    const families = rng() < 0.5 ? ["m2"] : ["m3", "l"];
    return tilesQuestion(rng, level, { families, groupSize: rng() < 0.4 ? 3 : 2 });
  },
  mistakes: pickMistakes(),
};

export const DEL4 = [vadBetyder, langdAreaVolym, areaEnheter, volymEnheter, m3Liter, likaStora2];
