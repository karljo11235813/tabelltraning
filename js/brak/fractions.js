// Räkning med bråk, blandade tal och minsta gemensamma nämnare, ovanpå de exakta bråken i rational.js.
import { gcd, reduce } from "../representationer/rational.js";

export function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

export function lcmAll(numbers) {
  return numbers.reduce(lcm, 1);
}

export function add(x, y) {
  return reduce({ num: x.num * y.den + y.num * x.den, den: x.den * y.den });
}

export function sub(x, y) {
  return reduce({ num: x.num * y.den - y.num * x.den, den: x.den * y.den });
}

export function mul(x, y) {
  return reduce({ num: x.num * y.num, den: x.den * y.den });
}

export function div(x, y) {
  return reduce({ num: x.num * y.den, den: x.den * y.num });
}

export function compare(x, y) {
  return Math.sign(x.num * y.den - y.num * x.den);
}

export function symbolFor(x, y) {
  return ["<", "=", ">"][compare(x, y) + 1];
}

export function isWhole(value) {
  return value.num % value.den === 0;
}

// 11/4 → { whole: 2, num: 3, den: 4 }. Bråkdelen förkortas.
export function toMixed(value) {
  const { num, den } = reduce(value);
  return { whole: Math.floor(num / den), num: num % den, den };
}

export function fromMixed(whole, num, den) {
  return { num: whole * den + num, den };
}

// Enklaste form som text: "3/4", "2 3/4", "2".
export function formatValue(value) {
  const { whole, num, den } = toMixed(value);
  if (num === 0) return String(whole);
  return whole === 0 ? `${num}/${den}` : `${whole} ${num}/${den}`;
}
