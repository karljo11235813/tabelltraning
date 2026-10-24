// Texter efter ett svar: rätt svar, elevens svar och ett riktat tips (inga färdiga svar i tipsen).
import { reduce, formatDecimal, formatPercent, percentNumber } from "./rational.js";
import { shadedCount } from "./models.js";

const NBSP = " ";
const POWER_WORDS = { 10: "tiondelar", 100: "hundradelar", 1000: "tusendelar" };

export function fractionText({ num, den }) {
  return `${num}/${den}`;
}

export function correctAnswerText(question) {
  const { value, target } = question;
  if (target.kind === "brak") return fractionText(value);
  if (target.kind === "decimal") return formatDecimal(value);
  if (target.kind === "procent") return formatPercent(value);
  return `${shadedCount(value, target.picture.parts)} av ${target.picture.parts} delar`;
}

export function givenAnswerText(question, answer) {
  const { target } = question;
  if (target.kind === "brak") return `${String(answer.num).trim()}/${String(answer.den).trim()}`;
  if (target.kind === "decimal") return String(answer.text).trim();
  if (target.kind === "procent") return `${String(answer.text).trim().replace(/\s*%$/, "")}${NBSP}%`;
  return `${answer.shaded} av ${target.picture.parts} delar`;
}

export function hintFor(question, result) {
  const v = question.value;
  switch (result.reason) {
    case "not-simplified": {
      const factor = result.given.den / reduce(result.given).den;
      return `Rätt värde! Men ${fractionText(result.given)} kan förkortas — dela täljare och nämnare med ${factor}.`;
    }
    case "parts-not-scaled": {
      const n = question.target.picture.parts;
      return `Bilden har ${n} delar, inte ${v.den}. Hur många av de ${n} delarna är lika mycket som ${fractionText(v)}?`;
    }
    case "shaded-vs-unshaded":
      return `Du jämförde färgade med ofärgade. Nämnaren är hur många delar det är totalt — här ${question.source.picture.parts}.`;
    case "digits-as-decimal": {
      const base = `${fractionText(v)} betyder ${v.num} delat med ${v.den} — siffrorna kan inte bara skrivas efter kommat.`;
      const power = [10, 100, 1000].find((p) => p % v.den === 0);
      return power ? `${base} Hur många ${POWER_WORDS[power]} är ${fractionText(v)}?` : base;
    }
    case "decimal-as-percent":
      return `Procent betyder hundradelar. Hur många hundradelar är ${formatDecimal(v)}?`;
    case "percent-as-decimal": {
      const p = percentNumber(v);
      return `${p}${NBSP}% betyder ${p} hundradelar. Hur skriver man ${p} hundradelar i decimalform?`;
    }
    default:
      return null;
  }
}
