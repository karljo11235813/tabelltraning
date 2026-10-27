// Exakta decimaltal: { m, e } betyder m · 10^e, där m är ett heltal utan nollor på slutet.
// Inga flyttal: en enhetsomvandling är bara att flytta e.

const pow10 = (k) => 10n ** BigInt(k);

function fromBig(M, e) {
  if (M === 0n) return { m: 0, e: 0 };
  while (M % 10n === 0n) {
    M /= 10n;
    e++;
  }
  if (M > BigInt(Number.MAX_SAFE_INTEGER) || -M > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error("För många siffror");
  return { m: Number(M), e };
}

export function dec(m, e = 0) {
  if (!Number.isSafeInteger(m) || !Number.isInteger(e)) throw new Error(`Inget exakt tal: ${m}e${e}`);
  return fromBig(BigInt(m), e);
}

export const ZERO = dec(0);

// Siffror med högst ett decimalkomma eller en punkt. Mellanslag (även smala) ignoreras.
export function parseDecimal(text) {
  if (typeof text !== "string") return null;
  const match = text.replace(/\s/g, "").match(/^(\d+)(?:[.,](\d+))?$/);
  if (!match) return null;
  const [, whole, frac = ""] = match;
  if (whole.length + frac.length > 15) return null;
  return fromBig(BigInt(whole + frac), -frac.length);
}

export function d(text) {
  const x = parseDecimal(text);
  if (!x) throw new Error(`Inget decimaltal: ${text}`);
  return x;
}

// Decimalkomma, och tusental med smalt hårt mellanslag (som num() i decimaltal.html).
export function formatDecimal(x) {
  if (x.m === 0) return "0";
  let digits = String(Math.abs(x.m));
  let whole;
  let frac = "";
  if (x.e >= 0) whole = digits + "0".repeat(x.e);
  else {
    const k = -x.e;
    digits = digits.padStart(k + 1, "0");
    whole = digits.slice(0, -k);
    frac = digits.slice(-k);
  }
  whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (x.m < 0 ? "-" : "") + whole + (frac ? `,${frac}` : "");
}

export function shift(x, k) {
  return x.m === 0 ? ZERO : { m: x.m, e: x.e + k };
}

// Båda talen som heltal med samma exponent.
function align(a, b) {
  const e = Math.min(a.e, b.e);
  return [BigInt(a.m) * pow10(a.e - e), BigInt(b.m) * pow10(b.e - e), e];
}

export function add(a, b) {
  const [A, B, e] = align(a, b);
  return fromBig(A + B, e);
}

export function sub(a, b) {
  const [A, B, e] = align(a, b);
  return fromBig(A - B, e);
}

export function mulInt(x, n) {
  return fromBig(BigInt(x.m) * BigInt(n), x.e);
}

// x / n, eller null om kvoten inte är ett ändligt decimaltal.
export function divInt(x, n) {
  const N = BigInt(n);
  for (let k = 0; k <= 15; k++) {
    const M = BigInt(x.m) * pow10(k);
    if (M % N === 0n) return fromBig(M / N, x.e - k);
  }
  return null;
}

export function compare(a, b) {
  const [A, B] = align(a, b);
  return A === B ? 0 : A < B ? -1 : 1;
}

export function equals(a, b) {
  return compare(a, b) === 0;
}

export function sigDigits(x) {
  return String(Math.abs(x.m));
}

export function decimals(x) {
  return Math.max(0, -x.e);
}

export function isWhole(x) {
  return x.e >= 0;
}

export function toInteger(x) {
  if (x.e < 0) return null;
  const n = BigInt(x.m) * pow10(x.e);
  return n > BigInt(Number.MAX_SAFE_INTEGER) ? null : Number(n);
}

function gcd(a, b) {
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

// a : b som heltal i enklaste form.
export function wholeRatio(a, b) {
  const [A, B] = align(a, b);
  const g = gcd(A, B);
  return [Number(A / g), Number(B / g)];
}
