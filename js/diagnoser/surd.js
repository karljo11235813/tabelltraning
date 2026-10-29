// Kvadratiska tal: { p, s } betyder p + s, där p är rationellt och s = q·√r är ett värde från value.js (r > 1, eller 0).
// Det räcker för rötterna till en andragradsekvation (3 ± √2, TAe6) och för att räkna ut ett algebraiskt uttryck
// exakt i en punkt (algebra.js). Inga flyttal: det som inte går att skriva så (en summa av två olika rötter, roten ur
// 3 + √2) kastar Unsupported. NONE (inget reellt värde) sprids som i value.js.
//
// surd       gör ett värde från value.js till ett kvadratiskt tal.
// add, sub, neg, mul, div, pow, sqrt   räknesätten.
// equals     exakt likhet; två NONE är lika.
// compare    -1, 0 eller 1, exakt (NONE kastar).
// surdKey    en text som är lika för lika tal, för mängder.

import {
  rat, add as vAdd, neg as vNeg, mul as vMul, div as vDiv, sqrt as vSqrt, equals as vEquals, compare as vCompare,
  NONE, isNone, Unsupported,
} from "./value.js";

const ZERO = rat(0);
const ONE = rat(1);

const make = (p, s) => Object.freeze({ p, s });

// Summan av värden från value.js: de rationella för sig och rötterna för sig. Två olika rötter (√2 + √3) kastar
// Unsupported i value.js.
function collect(values) {
  let p = ZERO;
  let s = ZERO;
  for (const v of values) {
    if (v.r === 1n) p = vAdd(p, v);
    else s = vAdd(s, v);
  }
  return make(p, s);
}

export function surd(v) {
  if (isNone(v)) return NONE;
  return collect([v]);
}

export const ONE_SURD = make(ONE, ZERO);

export function neg(a) {
  if (isNone(a)) return NONE;
  return make(vNeg(a.p), vNeg(a.s));
}

export function add(a, b) {
  if (isNone(a) || isNone(b)) return NONE;
  return collect([a.p, a.s, b.p, b.s]);
}

export function sub(a, b) {
  return add(a, neg(b));
}

export function mul(a, b) {
  if (isNone(a) || isNone(b)) return NONE;
  return collect([vMul(a.p, b.p), vMul(a.p, b.s), vMul(a.s, b.p), vMul(a.s, b.s)]);
}

// Med en rot i nämnaren förlängs med konjugatet: (p − s)/(p² − s²), där s² är rationellt.
export function div(a, b) {
  if (isNone(a) || isNone(b)) return NONE;
  if (b.s.n === 0n) return collect([vDiv(a.p, b.p), vDiv(a.s, b.p)]); // vDiv kastar vid division med noll
  const top = mul(a, make(b.p, vNeg(b.s)));
  const bottom = vAdd(vMul(b.p, b.p), vNeg(vMul(b.s, b.s)));
  return collect([vDiv(top.p, bottom), vDiv(top.s, bottom)]);
}

export function pow(a, k) {
  if (isNone(a)) return NONE;
  if (k < 0n) return div(ONE_SURD, pow(a, -k));
  let result = ONE_SURD;
  for (let i = 0n; i < k; i++) result = mul(result, a);
  return result;
}

// Roten ur ett rationellt tal. Roten ur ett tal med en rot i går inte att skriva exakt här.
export function sqrt(a) {
  if (isNone(a)) return NONE;
  if (a.s.n !== 0n) throw new Unsupported("Roten ur ett tal med en rot i går inte att skriva exakt");
  return surd(vSqrt(a.p));
}

export function equals(a, b) {
  if (isNone(a) || isNone(b)) return isNone(a) && isNone(b);
  return vEquals(a.p, b.p) && vEquals(a.s, b.s);
}

// Tecknet för p + s: samma tecken på båda (eller en av dem noll) ger det tecknet, annars avgör vem av p² och s²
// som är störst. s² är rationellt, så jämförelsen är exakt.
export function compare(a, b) {
  if (isNone(a) || isNone(b)) throw new Unsupported("NONE går inte att jämföra");
  const d = sub(a, b);
  const sp = vCompare(d.p, ZERO);
  const ss = vCompare(d.s, ZERO);
  if (ss === 0 || sp === ss) return sp === 0 ? ss : sp;
  if (sp === 0) return ss;
  return vCompare(vMul(d.p, d.p), vMul(d.s, d.s)) > 0 ? sp : ss;
}

export const isRational = (a) => !isNone(a) && a.s.n === 0n;

export function surdKey(a) {
  if (isNone(a)) return "none";
  return `${a.p.n}/${a.p.d}+${a.s.n}/${a.s.d}√${a.s.r}`;
}
