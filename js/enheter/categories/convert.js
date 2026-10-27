// Enhetsomvandlingar: frågan med rutnätet som tonas bort, lösningen med pennvandringen och de vanliga felen.
// mil, ton och ha översätts först till en enhet med prefix; vandringen börjar där.
import { pick, randInt } from "../../representationer/random.js";
import { dec, compare, decimals, equals, formatDecimal, shift, sigDigits, d } from "../decimal.js";
import { unit, convert, translation } from "../units.js";
import { gridModel, hops } from "../grid.js";
import { text, num, qty, unitLabel, box, grid, EQ, ARROW } from "../pieces.js";
import { rawDecimal } from "../check.js";
import { sample } from "./helpers.js";

const NOUN = { längd: "sträcka", area: "yta", volym: "volym", vikt: "vikt", effekt: "effekt" };
const MAX_ANSWER = d("10000000");
const MAX_GIVEN = d("100000");

export const fmt = ({ amount, unit: u }) => `${formatDecimal(amount)} ${u}`;

// "en m", "en l", men "ett g" och "ett kg": gram är ett ett-ord.
export const article = (id) => (unit(id).family === "g" ? "ett" : "en");
const cap = (s) => s[0].toUpperCase() + s.slice(1);

// Där vandringen i rutnätet börjar: den givna enheten, eller km, kg och m² för mil, ton och ha.
export function startOf(given) {
  const tr = translation(given.unit);
  return tr ? { amount: convert(given.amount, given.unit, tr.to), unit: tr.to } : given;
}

// Ett givet tal med 1–maxSig värdesiffror mellan min och max, så att svaret har högst maxDecimals
// decimaler och är under tio miljoner. Små tal som 0,066 dm undviks med min.
export function amountFor(rng, from, to, { maxSig = 3, maxDecimals = 4, givenDecimals = 2, min = "0,1", max = "100000" } = {}) {
  const lo = d(min);
  const hi = d(max);
  return sample(() => {
    const sig = randInt(rng, 1, maxSig);
    let m = randInt(rng, 10 ** (sig - 1), 10 ** sig - 1);
    if (sig > 1 && m % 10 === 0) return null;
    const given = dec(m, randInt(rng, -3, 4));
    if (decimals(given) > givenDecimals || compare(given, lo) < 0 || compare(given, hi) > 0 || compare(given, MAX_GIVEN) > 0) return null;
    const answer = convert(given, from, to);
    if (decimals(answer) > maxDecimals || compare(answer, MAX_ANSWER) > 0) return null;
    return given;
  });
}

// Mellan m³-enheter och liter finns inget enskilt rutnät: då räknas hela tiopotensen.
function walk(start, asked) {
  const a = unit(start);
  const b = unit(asked);
  if (a.family === b.family) return hops(start, asked);
  const factorExp = a.exp - b.exp;
  return { squares: null, cells: null, factorExp, direction: factorExp > 0 ? "höger" : "vänster" };
}

function directionWords(start, asked) {
  const { direction } = walk(start, asked);
  const smaller = direction === "höger"; // den sökta enheten är mindre
  return { smaller, bigger: smaller ? "större" : "mindre" };
}

// Lösningen: översättning, rutnätet med hopp, hoppen som räkning, betydelsen, kedjan och svaret.
export function convertSteps(given, asked, { wide = false, names = false } = {}) {
  const steps = [];
  const tr = translation(given.unit);
  const start = startOf(given);
  if (tr) {
    const rule = `1 ${given.unit} = ${formatDecimal(tr.factor)} ${tr.to}`;
    steps.push({
      text: equals(given.amount, dec(1)) ? `${rule}.` : `${rule}, så ${fmt(given)} = ${fmt(start)}.`,
      row: [qty(given.amount, given.unit), EQ, qty(start.amount, start.unit)],
    });
  }
  const family = unit(start.unit).family;
  const h = hops(start.unit, asked);
  steps.push({ row: [grid(gridModel({ family, from: start.unit, to: asked, showHops: true, wide, names }))] });

  // Hårt mellanslag mellan tecknet och talet, så att "· 10" aldrig bryts.
  const sign = h.direction === "höger" ? "·" : "/";
  const each = `${sign}\u00a0${formatDecimal(dec(1, h.cells))}`;
  const total = `${sign}\u00a0${formatDecimal(dec(1, h.squares * h.cells))}`;
  const chainOps = Array(h.squares).fill(each).join(" ");
  const steg = `${h.squares} steg åt ${h.direction}`;
  if (h.cells === 1) {
    steps.push({ text: `Från ${start.unit} till ${asked} är ${steg}: ${h.squares === 1 ? each : `${chainOps} = ${total}`}.` });
  } else {
    steps.push({ text: `Från ${start.unit} till ${asked} är ${steg}. Varje steg är ${each}${h.squares === 1 ? "" : `: ${chainOps} = ${total}`}.` });
  }

  const { smaller, bigger } = directionWords(start.unit, asked);
  steps.push({
    text: `${cap(article(asked))} ${asked} är ${smaller ? "mindre" : "större"} än ${article(start.unit)} ${start.unit}, så det går ${smaller ? "fler" : "färre"} ${asked} på samma ${NOUN[unit(asked).quantity]}. Talet blir ${bigger}.`,
  });

  const chain = [num(start.amount)];
  let v = start.amount;
  for (let i = 0; i < h.squares; i++) {
    v = shift(v, Math.sign(h.factorExp) * h.cells);
    chain.push(ARROW, num(v));
  }
  steps.push({ row: chain });

  const answer = convert(start.amount, start.unit, asked);
  steps.push({
    row: tr
      ? [qty(given.amount, given.unit), EQ, qty(start.amount, start.unit), EQ, qty(answer, asked)]
      : [qty(start.amount, start.unit), EQ, qty(answer, asked)],
  });
  return steps;
}

const PROMPTS = {
  plain: (given, asked) => `Gör om till ${asked}.`,
  left: () => "Vilket tal ska stå i rutan?",
  write: (given, asked) => `Skriv ${fmt(given)} i ${asked}.`,
};

// En omvandlingsfråga. L0: rutnät med hopp och "Talet blir större/mindre". L1: rutnät med pennan. L2: inget rutnät.
export function convertQuestion({ level, given, asked, format = "plain", context = null, wide = false, names = false, sense = true }) {
  const tr = translation(given.unit);
  const start = startOf(given);
  const via = tr ? start : null;
  const answer = convert(start.amount, start.unit, asked);
  const family = unit(start.unit).family;

  const rows = [];
  const boxes = {};
  if (level === 0) rows.push([grid(gridModel({ family, from: start.unit, to: asked, showHops: true, wide, names }))]);
  if (level === 1) rows.push([grid(gridModel({ family, from: start.unit, wide, names, windowUnits: [start.unit, asked] }))]);
  if (level === 0 && sense) {
    rows.push([text("Talet blir"), box("s")]);
    boxes.s = { kind: "choice", options: ["större", "mindre"], expected: compare(answer, given.amount) > 0 ? "större" : "mindre" };
  }
  if (format === "left") {
    rows.push([box("a"), unitLabel(asked), EQ, qty(given.amount, given.unit)]);
  } else if (via && level < 2) {
    rows.push([qty(given.amount, given.unit), EQ, box("t"), unitLabel(via.unit)]);
    rows.push([EQ, box("a"), unitLabel(asked)]);
    boxes.t = { kind: "decimal", expected: via.amount, unit: via.unit };
  } else {
    rows.push([qty(given.amount, given.unit), EQ, box("a"), unitLabel(asked)]);
  }
  boxes.a = { kind: "decimal", expected: answer, unit: asked };

  return {
    key: `${format}:${fmt(given)}>${asked}`,
    data: { kind: "convert", given, asked, via, answer, format },
    prompt: format === "context" ? `${context} Svara i ${asked}.` : PROMPTS[format](given, asked),
    rows,
    boxes,
    steps: convertSteps(given, asked, { wide, names }),
  };
}

const isConvert = (q) => q.data.kind === "convert" && "a" in q.boxes;

function legOf(q) {
  const start = q.data.via ?? q.data.given;
  return { start, h: walk(start.unit, q.data.asked) };
}

// De två vanliga felen i varje omvandling: kommat åt fel håll, eller fel antal steg.
export function conversionMistakes() {
  return [
    {
      id: "wrong-direction",
      // cm³ → ml har ingen riktning: samma tal (1 ml = 1 cm³).
      matches: (q, p) => {
        if (!isConvert(q)) return false;
        const { start, h } = legOf(q);
        return h.factorExp !== 0 && equals(p.a, shift(start.amount, -h.factorExp));
      },
      text: (q) => {
        const { start } = legOf(q);
        const { smaller, bigger } = directionWords(start.unit, q.data.asked);
        return `Kommat flyttades åt fel håll. ${cap(article(q.data.asked))} ${q.data.asked} är ${smaller ? "mindre" : "större"} än ${article(start.unit)} ${start.unit}, så talet ska bli ${bigger}.`;
      },
      sample: (q) => {
        if (!isConvert(q)) return null;
        const { start, h } = legOf(q);
        return h.factorExp === 0 ? null : { a: rawDecimal(shift(start.amount, -h.factorExp)) };
      },
    },
    {
      id: "wrong-steps",
      matches: (q, p) => {
        if (!isConvert(q)) return false;
        const { h } = legOf(q);
        const answer = q.data.answer;
        if (p.a.m === 0 || sigDigits(p.a) !== sigDigits(answer)) return false;
        const j = p.a.e - answer.e;
        return j !== 0 && j !== -2 * h.factorExp;
      },
      text: (q) => {
        const { start, h } = legOf(q);
        if (h.squares === null) return "Räkna stegen igen, och gå via 1 dm³ = 1 l.";
        const cells = h.cells > 1 ? `, och varje steg i rutnätet är ${h.cells} steg för kommat` : "";
        return `Räkna stegen i rutnätet igen: från ${start.unit} till ${q.data.asked} är ${h.squares} steg${cells}.`;
      },
      sample: (q) => (isConvert(q) ? { a: rawDecimal(shift(q.data.answer, 1)) } : null),
    },
  ];
}

// Ett fel i översättningen av mil, ton eller ha: wrongFactors är de tiopotenser eleven trodde på.
export function translationMistake({ id, unitId, wrongExps, tip }) {
  const wrongStarts = (q) => wrongExps.map((k) => shift(q.data.given.amount, k));
  const applies = (q) => q.data.kind === "convert" && q.data.given.unit === unitId;
  return {
    id,
    matches: (q, p) => {
      if (!applies(q)) return false;
      const to = q.data.via.unit;
      return wrongStarts(q).some((w) => (p.t ? equals(p.t, w) : equals(p.a, convert(w, to, q.data.asked))));
    },
    // Utan översättningsruta (L2) kan samma svar komma från ett steg fel i rutnätet: nämn båda.
    text: (q) => {
      if (q.boxes.t) return tip;
      const tr = translation(unitId);
      const { squares } = hops(tr.to, q.data.asked);
      return `Kontrollera två saker: 1 ${unitId} är ${formatDecimal(tr.factor)} ${tr.to}, och från ${tr.to} till ${q.data.asked} är ${squares} steg i rutnätet.`;
    },
    sample: (q) => {
      if (!applies(q)) return null;
      const w = wrongStarts(q)[0];
      const a = rawDecimal(convert(w, q.data.via.unit, q.data.asked));
      return q.boxes.t ? { t: rawDecimal(w), a } : { a };
    },
  };
}

// Ett par enheter (start, sökt) med rätt antal steg för nivån.
export function pickPair(rng, units, [lo, hi]) {
  return sample(() => {
    const from = pick(rng, units);
    const to = pick(rng, units);
    if (from === to) return null;
    const { squares } = hops(from, to);
    return squares >= lo && squares <= hi ? [from, to] : null;
  });
}
