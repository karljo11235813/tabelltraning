// Rättar ett svar exakt. Tomt eller oläsligt svar räknas inte (scored: false).
// Vanliga felsvar känns igen så att Öva-läget kan ge ett riktat tips.
import { equal, isReduced, parseDecimal, parseFraction, parsePercent } from "./rational.js";

export function parseAnswer(target, answer) {
  if (target.kind === "brak") {
    const num = String(answer.num ?? "").trim();
    const den = String(answer.den ?? "").trim();
    if (num === "" || den === "") return { reason: "empty" };
    const value = parseFraction(num, den);
    return value ? { value } : { reason: "unparseable" };
  }
  if (target.kind === "decimal" || target.kind === "procent") {
    const text = String(answer.text ?? "").trim();
    if (text === "") return { reason: "empty" };
    const value = target.kind === "decimal" ? parseDecimal(text) : parsePercent(text);
    return value ? { value } : { reason: "unparseable" };
  }
  if (target.kind === "bild") {
    const shaded = answer.shaded ?? 0;
    return shaded > 0 ? { value: { num: shaded, den: target.picture.parts } } : { reason: "empty" };
  }
  return { reason: "unparseable" };
}

// Kontrolleras i den här ordningen; första träffen vinner.
const RULES = [
  {
    // 3/4 på en cirkel med 8 delar: eleven färgade 3.
    reason: "parts-not-scaled",
    matches: (q, given) =>
      q.target.kind === "bild" && q.target.picture.parts !== q.value.den && given.num === q.value.num,
  },
  {
    // 3 av 8 färgade blev 3/5.
    reason: "shaded-vs-unshaded",
    matches: (q, given) => {
      if (q.source.kind !== "bild") return false;
      const k = q.source.picture.shaded.length;
      return equal(given, { num: k, den: q.source.picture.parts - k });
    },
  },
  {
    // 1/4 blev 0,4 eller 0,14 (4 % eller 14 %).
    reason: "digits-as-decimal",
    matches: (q, given) => {
      if (q.source.kind !== "brak" && q.source.kind !== "ord") return false;
      const { num: a, den: b } = q.value;
      let candidates = [];
      if (q.target.kind === "decimal") candidates = [parseDecimal(`0,${b}`), parseDecimal(`0,${a}${b}`)];
      if (q.target.kind === "procent") candidates = [{ num: b, den: 100 }, { num: Number(`${a}${b}`), den: 100 }];
      return candidates.some((c) => c && equal(given, c));
    },
  },
  {
    // 0,5 blev 5 % eller 0,5 %.
    reason: "decimal-as-percent",
    matches: (q, given) =>
      q.target.kind === "procent" &&
      (equal(given, { num: q.value.num, den: q.value.den * 10 }) ||
        equal(given, { num: q.value.num, den: q.value.den * 100 })),
  },
  {
    // 25 % blev 25 eller 2,5.
    reason: "percent-as-decimal",
    matches: (q, given) =>
      q.source.kind === "procent" &&
      q.target.kind === "decimal" &&
      (equal(given, { num: q.value.num * 100, den: q.value.den }) ||
        equal(given, { num: q.value.num * 10, den: q.value.den })),
  },
];

export function check(question, answer) {
  const parsed = parseAnswer(question.target, answer);
  if (parsed.reason) return { correct: false, scored: false, reason: parsed.reason, given: null };
  const given = parsed.value;
  const result = (correct, reason) => ({ correct, scored: true, reason, given });
  if (equal(given, question.value)) {
    return question.target.kind === "brak" && !isReduced(given) ? result(false, "not-simplified") : result(true, "ok");
  }
  const rule = RULES.find((r) => r.matches(question, given));
  return result(false, rule ? rule.reason : "wrong");
}
