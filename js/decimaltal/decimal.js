// Exact decimals and how the page writes them.

// ---- Exact decimal arithmetic ----
// A decimal is { m, d }: value = m / 10^d. All ops are done on integer
// mantissas so results are always exact, with no floating-point drift.
export function D(m, d) { return { m, d }; }

export function dAdd(x, y) {
  const d = Math.max(x.d, y.d);
  const xm = x.m * Math.pow(10, d - x.d);
  const ym = y.m * Math.pow(10, d - y.d);
  return D(xm + ym, d);
}
export function dSub(x, y) {
  const d = Math.max(x.d, y.d);
  const xm = x.m * Math.pow(10, d - x.d);
  const ym = y.m * Math.pow(10, d - y.d);
  return D(xm - ym, d);
}
export function dMul(x, y) {
  return D(x.m * y.m, x.d + y.d);
}
// Multiply by 10^power (power negative = divide). Decimal point shift only,
// always exact, which is exactly the mental-math skill this category drills.
export function dMulPow10(x, power) {
  let d = x.d - power;
  let m = x.m;
  if (d < 0) {
    m = m * Math.pow(10, -d);
    d = 0;
  }
  return D(m, d);
}

// LaTeX for a decimal: "3{,}5", "0{,}065", "4\,500". The braces stop KaTeX from
// putting a space after the comma as in a list, and \, is the thin space between
// groups of three digits.
export function num(x) {
  let { m, d } = x;
  const neg = m < 0;
  m = Math.abs(m);
  const scale = Math.pow(10, d);
  const intPart = String(Math.floor(m / scale)).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  const fracStr = d === 0 ? '' : String(m % scale).padStart(d, '0').replace(/0+$/, '');
  return (neg ? '-' : '') + (fracStr ? `${intPart}{,}${fracStr}` : intPart);
}

export function checkDecimalAnswer(rawInput, expected) {
  const normalized = rawInput.trim().replace(/\s+/g, '').replace(',', '.');
  if (normalized === '') return false;
  const givenNum = Number(normalized);
  if (!Number.isFinite(givenNum)) return false;
  // Exact: 2,10 is 2,1 but 2,14 is not. The tolerance only absorbs float noise
  // (2.1 · 10 = 21.000000000000004), not a digit more.
  const scale = Math.pow(10, expected.d);
  return Math.abs(givenNum * scale - expected.m) < 1e-6;
}

export function inline(x) { return `\\(${num(x)}\\)`; }

// Like num, but with exactly d decimals, so that the places line up: 0,40 + 0,04.
export function numFixed(x, d) {
  const t = trim(x);
  const m = t.m * Math.pow(10, d - t.d);
  const scale = Math.pow(10, d);
  const intPart = String(Math.floor(m / scale)).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  return d === 0 ? intPart : `${intPart}{,}${String(m % scale).padStart(d, '0')}`;
}

// The same decimal with no zeros at the end of the decimals.
export function trim(x) {
  let { m, d } = x;
  while (d > 0 && m % 10 === 0) { m /= 10; d--; }
  return D(m, d);
}

// c · 10^e, with no zeros at the end of the decimals.
export function placed(c, e) {
  return e >= 0 ? D(c * Math.pow(10, e), 0) : trim(D(c, -e));
}

export function value(x) { return x.m / Math.pow(10, x.d); }
