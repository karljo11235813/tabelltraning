// Rättar rutorna i en fråga exakt. Tom eller oläslig inmatning räknas inte (status "invalid").
// Rätt värde i fel form (6/8, 7/4, 8/4) är fel, med ett skäl som ger ett riktat tips.
import { equal, isReduced, parseFraction } from "../representationer/rational.js";
import { add, isWhole, toMixed } from "./fractions.js";

const INT_RE = /^\d{1,6}$/;
const isBlank = (s) => String(s ?? "").trim() === "";

function readInt(s) {
  const t = String(s ?? "").trim();
  return INT_RE.test(t) ? Number(t) : null;
}

function readFraction(raw) {
  if (!raw || isBlank(raw.num) || isBlank(raw.den)) return null;
  return parseFraction(raw.num, raw.den);
}

// Rå inmatning → tolkat värde, eller null om rutan inte går att rätta.
export function readBox(b, raw) {
  if (b.kind === "int") return readInt(raw);
  if (b.kind === "frac" || b.kind === "brakform") return readFraction(raw);
  if (b.kind === "enklaste") {
    const r = raw ?? {};
    if (isBlank(r.whole) && isBlank(r.num) && isBlank(r.den)) return null;
    const whole = isBlank(r.whole) ? 0 : readInt(r.whole);
    if (whole === null) return null;
    let part = null;
    if (!isBlank(r.num) || !isBlank(r.den)) {
      part = readFraction(r);
      if (!part) return null;
    }
    const value = part ? add({ num: whole, den: 1 }, part) : { num: whole, den: 1 };
    return { whole, part, value };
  }
  if (b.kind === "symbol") return ["<", "=", ">"].includes(raw) ? raw : null;
  if (b.kind === "shade") return Number.isInteger(raw) && raw > 0 ? raw : null;
  throw new Error(`Okänd ruta: ${b.kind}`);
}

function gradeSimplest(expected, { whole, part, value }) {
  if (!equal(value, expected)) return { ok: false };
  if (!part) return { ok: true };
  if (part.num === 0) return { ok: false, form: "zero-fraction" };
  if (part.num >= part.den) return { ok: false, form: whole === 0 && isWhole(expected) ? "whole-as-fraction" : "not-mixed" };
  if (!isReduced(part)) return { ok: false, form: "not-reduced" };
  return { ok: true };
}

// { ok } och, när värdet är rätt men formen fel, skälet i form.
export function gradeBox(b, v) {
  const e = b.expected;
  if (b.kind === "int" || b.kind === "symbol") return { ok: v === e };
  if (b.kind === "frac") return { ok: v.num === e.num && v.den === e.den };
  if (b.kind === "brakform") {
    if (!equal(v, e)) return { ok: false };
    return isReduced(v) ? { ok: true } : { ok: false, form: "not-reduced" };
  }
  if (b.kind === "enklaste") return gradeSimplest(e, v);
  if (b.kind === "shade") return { ok: v * e.den === e.num * b.picture.parts };
  throw new Error(`Okänd ruta: ${b.kind}`);
}

export function check(question, answers, mistakes = []) {
  const entries = Object.entries(question.boxes);
  const parsed = {};
  const invalid = [];
  for (const [id, b] of entries) {
    const v = readBox(b, answers[id]);
    if (v === null) invalid.push(id);
    else parsed[id] = v;
  }
  if (invalid.length > 0) return { status: "invalid", invalidBoxes: invalid };
  const wrong = entries.map(([id, b]) => [id, gradeBox(b, parsed[id])]).filter(([, g]) => !g.ok);
  if (wrong.length === 0) return { status: "ok", wrongBoxes: [], reason: null, formBox: null, parsed };
  const mistake = mistakes.find((m) => m.matches(question, parsed));
  const allForm = wrong.every(([, g]) => g.form);
  const formBox = allForm ? wrong[0][0] : null;
  return {
    status: "wrong",
    wrongBoxes: wrong.map(([id]) => id),
    reason: mistake ? mistake.id : allForm ? wrong[0][1].form : "wrong",
    formBox,
    parsed,
  };
}

function givenText(v) {
  if (v.part === undefined) return `${v.num}/${v.den}`;
  if (!v.part) return String(v.whole);
  return v.whole === 0 ? `${v.part.num}/${v.part.den}` : `${v.whole} ${v.part.num}/${v.part.den}`;
}

const FORM_TIPS = {
  "not-reduced": (g) => `Rätt värde, men ${g} kan förkortas. Svaret ska vara i enklaste form.`,
  "not-mixed": (g, whole) =>
    whole
      ? `Rätt värde, men ${g} är ett heltal. Skriv bara heltalet, utan bråkdel.`
      : `Rätt värde, men ${g} ska skrivas i blandad form: hela för sig och en bråkdel som är mindre än 1.`,
  "whole-as-fraction": (g) => `Rätt värde, men ${g} är ett heltal. Skriv det som ett heltal.`,
  "zero-fraction": (g) => `Rätt värde, men ${g} är ett heltal. Skriv bara heltalet, utan bråkdel.`,
};

export function tipFor(question, result, mistakes = []) {
  if (result.status !== "wrong") return null;
  const mistake = mistakes.find((m) => m.id === result.reason);
  if (mistake) return mistake.text(question, result.parsed);
  if (!result.formBox) return null;
  const b = question.boxes[result.formBox];
  return FORM_TIPS[result.reason](givenText(result.parsed[result.formBox]), b.kind === "enklaste" && isWhole(b.expected));
}

export function rawInt(n) {
  return String(n);
}

export function rawFrac(num, den) {
  return { num: String(num), den: String(den) };
}

// Som eleven skriver ett blandat tal; heltalsdelen 0 lämnas tom.
export function rawMixed(whole, num, den) {
  return { whole: whole === 0 ? "" : String(whole), num: String(num), den: String(den) };
}

export function rawWhole(whole) {
  return { whole: String(whole), num: "", den: "" };
}

export function rawSimplest(value) {
  const m = toMixed(value);
  return m.num === 0 ? rawWhole(m.whole) : rawMixed(m.whole, m.num, m.den);
}

export function rawFor(b) {
  if (b.kind === "int") return rawInt(b.expected);
  if (b.kind === "frac" || b.kind === "brakform") return rawFrac(b.expected.num, b.expected.den);
  if (b.kind === "enklaste") return rawSimplest(b.expected);
  if (b.kind === "symbol") return b.expected;
  return (b.expected.num * b.picture.parts) / b.expected.den;
}

export function correctAnswers(question) {
  return Object.fromEntries(Object.entries(question.boxes).map(([id, b]) => [id, rawFor(b)]));
}
