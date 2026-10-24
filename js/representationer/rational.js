// Exakta bråk { num, den } med heltal och den > 0. Inga flyttal, så 0,1 är exakt 1/10.

export function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

export function reduce({ num, den }) {
  const g = gcd(num, den) || 1;
  return { num: num / g, den: den / g };
}

export function equal(x, y) {
  return x.num * y.den === y.num * x.den;
}

export function isReduced({ num, den }) {
  return gcd(num, den) === 1;
}

// Ändlig decimalutveckling: förkortad nämnare har bara faktorerna 2 och 5.
export function isTerminating(value) {
  let { den } = reduce(value);
  while (den % 2 === 0) den /= 2;
  while (den % 5 === 0) den /= 5;
  return den === 1;
}

// Högst 6 heltalssiffror och 8 decimaler, så att talen alltid ryms exakt.
const DECIMAL_RE = /^(\d{0,6})(?:[.,](\d{1,8}))?$/;
const INT_RE = /^\d{1,6}$/;

export function parseDecimal(text) {
  const m = DECIMAL_RE.exec(String(text).trim());
  if (!m || (m[1] === "" && m[2] === undefined)) return null;
  const decimals = m[2] ?? "";
  const den = 10 ** decimals.length;
  return { num: Number(m[1] || "0") * den + Number(decimals || "0"), den };
}

export function parsePercent(text) {
  const value = parseDecimal(String(text).trim().replace(/\s*%$/, ""));
  return value && { num: value.num, den: value.den * 100 };
}

export function parseFraction(numText, denText) {
  const n = String(numText).trim();
  const d = String(denText).trim();
  if (!INT_RE.test(n) || !INT_RE.test(d)) return null;
  const den = Number(d);
  if (den === 0) return null;
  return { num: Number(n), den };
}

// Heltalsdel, siffrorna före perioden och perioden (tom om utvecklingen tar slut).
export function expand(value) {
  const { num, den } = reduce(value);
  const int = Math.floor(num / den);
  let rem = num % den;
  const digits = [];
  const seen = new Map();
  while (rem !== 0 && !seen.has(rem)) {
    seen.set(rem, digits.length);
    rem *= 10;
    digits.push(Math.floor(rem / den));
    rem %= den;
  }
  if (rem === 0) return { int, pre: digits.join(""), period: "" };
  const start = seen.get(rem);
  return { int, pre: digits.slice(0, start).join(""), period: digits.slice(start).join("") };
}

// Perioden skrivs så många gånger att mönstret syns (minst två gånger, minst tre siffror), sedan "…".
export function formatExpansion({ int, pre, period }) {
  if (!period) return pre ? `${int},${pre}` : String(int);
  const times = Math.max(2, Math.ceil(3 / period.length));
  return `${int},${pre}${period.repeat(times)}…`;
}

export function formatDecimal(value) {
  return formatExpansion(expand(value));
}

export function percentNumber(value) {
  return formatExpansion(expand({ num: value.num * 100, den: value.den }));
}

export function formatPercent(value) {
  return `${percentNumber(value)} %`;
}
