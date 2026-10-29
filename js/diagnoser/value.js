// Exakta värden: { n, d, r } betyder (n/d)·√r, med BigInt.
// Normaliserat: d > 0, gcd(|n|, d) = 1, r ≥ 1 och kvadratfritt, och noll är alltid { 0, 1, 1 }.
// Inga flyttal: det som inte går att skriva exakt kastar Unsupported.
// NONE betyder "inget reellt värde" (t.ex. √(-3)) och sprids genom alla räknesätt.

export class Unsupported extends Error {
  constructor(message) {
    super(message);
    this.name = "Unsupported";
  }
}

export const NONE = Object.freeze({ none: true });

export const isNone = (v) => v.none === true;

function gcd(a, b) {
  while (b !== 0n) [a, b] = [b, a % b];
  return a < 0n ? -a : a;
}

// Heltalets kvadratrot avrundad nedåt (Newtons metod).
function isqrt(m) {
  if (m < 2n) return m;
  let x = 1n << BigInt((m.toString(2).length + 1) >> 1);
  for (;;) {
    const y = (x + m / x) >> 1n;
    if (y >= x) return x;
    x = y;
  }
}

// Provdelning går bara upp till den här gränsen; radikanderna i uppgifterna är små.
const FAKTORGRANS = 1_000_000n;

// m = s² · f med f kvadratfritt.
function splitSquare(m) {
  let s = 1n;
  let f = 1n;
  let p = 2n;
  for (; p <= FAKTORGRANS && p * p <= m; p++) {
    if (m % p !== 0n) continue;
    let e = 0n;
    while (m % p === 0n) {
      m /= p;
      e++;
    }
    s *= p ** (e / 2n);
    if (e % 2n === 1n) f *= p;
  }
  if (m === 1n) return [s, f];
  if (p * p > m) return [s, f * m]; // Det som är kvar är ett primtal.
  // Alla primtalsfaktorer som är kvar är större än gränsen.
  const root = isqrt(m);
  if (root * root === m) return [s * root, f];
  if (m < p ** 3n) return [s, f * m]; // Högst två faktorer och ingen kvadrat, alltså kvadratfritt.
  throw new Unsupported("Radikanden är för stor för att förenklas");
}

// r måste redan vara kvadratfritt.
function make(n, d, r) {
  if (n === 0n) return Object.freeze({ n: 0n, d: 1n, r: 1n });
  if (d < 0n) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  return Object.freeze({ n: n / g, d: d / g, r });
}

function toBig(x) {
  if (typeof x === "bigint") return x;
  if (!Number.isSafeInteger(x)) throw new Error(`Inget heltal: ${x}`);
  return BigInt(x);
}

export function rat(n, d = 1) {
  const D = toBig(d);
  if (D === 0n) throw new Unsupported("Division med noll");
  return make(toBig(n), D, 1n);
}

const isZero = (a) => a.n === 0n;

// √(r1 · r2) = g · √f, där f är kvadratfritt eftersom r1 och r2 är det.
function rootProduct(r1, r2) {
  const g = gcd(r1, r2);
  return [g, (r1 / g) * (r2 / g)];
}

export function neg(a) {
  if (isNone(a)) return NONE;
  return make(-a.n, a.d, a.r);
}

export function add(a, b) {
  if (isNone(a) || isNone(b)) return NONE;
  if (isZero(a)) return b;
  if (isZero(b)) return a;
  if (a.r !== b.r) throw new Unsupported("En summa av olika rötter går inte att skriva exakt");
  return make(a.n * b.d + b.n * a.d, a.d * b.d, a.r);
}

export function sub(a, b) {
  return add(a, neg(b));
}

export function mul(a, b) {
  if (isNone(a) || isNone(b)) return NONE;
  const [g, f] = rootProduct(a.r, b.r);
  return make(a.n * b.n * g, a.d * b.d, f);
}

export function div(a, b) {
  if (isNone(a) || isNone(b)) return NONE;
  if (isZero(b)) throw new Unsupported("Division med noll");
  const [g, f] = rootProduct(a.r, b.r);
  return make(a.n * b.d * g, a.d * b.n * b.r, f);
}

export function pow(a, k) {
  if (isNone(a)) return NONE;
  if (k < 0n) {
    if (isZero(a)) throw new Unsupported("Noll upphöjt till ett negativt tal");
    return div(rat(1), pow(a, -k));
  }
  // (n/d · √r)^k = n^k · r^(k/2) / d^k · √r^(k mod 2)
  return make(a.n ** k * a.r ** (k / 2n), a.d ** k, k % 2n === 1n ? a.r : 1n);
}

export function sqrt(a) {
  if (isNone(a)) return NONE;
  if (isZero(a)) return a;
  if (a.n < 0n) return NONE;
  if (a.r !== 1n) throw new Unsupported("Roten ur ett icke-rationellt tal går inte att skriva exakt");
  // √(p/q) = √(p·q) / q
  const [s, f] = splitSquare(a.n * a.d);
  return make(s, a.d, f);
}

export function equals(a, b) {
  if (isNone(a) || isNone(b)) return isNone(a) && isNone(b);
  return a.n === b.n && a.d === b.d && a.r === b.r;
}

// -1, 0 eller 1. Exakt: med samma tecken jämförs kvadraterna (n/d · √r)² = n²·r / d², aldrig flyttal.
// NONE har ingen ordning och kastar Unsupported.
export function compare(a, b) {
  if (isNone(a) || isNone(b)) throw new Unsupported("NONE går inte att jämföra");
  const sign = (x) => (x.n > 0n ? 1 : x.n < 0n ? -1 : 0);
  const sa = sign(a);
  const sb = sign(b);
  if (sa !== sb) return sa < sb ? -1 : 1;
  if (sa === 0) return 0;
  const left = a.n * a.n * a.r * b.d * b.d;
  const right = b.n * b.n * b.r * a.d * a.d;
  const byMagnitude = left < right ? -1 : left > right ? 1 : 0;
  return sa > 0 ? byMagnitude : -byMagnitude;
}

export function isInteger(a) {
  return !isNone(a) && a.d === 1n && a.r === 1n;
}
