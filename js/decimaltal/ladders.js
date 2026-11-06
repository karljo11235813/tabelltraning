import { D, dAdd, dSub, dMul, dMulPow10, inline, num, numFixed, trim, value } from './decimal.js';

// ---- Feedback ladders ----
// A wrong answer shows a ladder of simpler problems leading up to the problem, the
// way a teacher would at the desk: "strunta i nollorna och jämför sedan". It starts
// with the commas and end zeros removed and puts back one number per step, with a
// note on what changed and what that does to the answer. The last step is the
// problem itself. A step is { note, tex }; `note` is HTML that may hold \( … \) math.

const TIMES = ['', 'tio', 'hundra', 'tusen', 'tio tusen', 'hundra tusen', 'en miljon'];
const PARTS = ['', 'en tiondel', 'en hundradel', 'en tusendel', 'en tiotusendel', 'en hundratusendel', 'en miljondel'];
const UNITS = { '-3': 'tusendelar', '-2': 'hundradelar', '-1': 'tiondelar', 1: 'tiotal', 2: 'hundratal',
  3: 'tusental', 4: 'tiotusental', 5: 'hundratusental' };

// x as its digits without end zeros and a power of ten: 0,036 is 36 · 10^-3, 700 is 7 · 10^2.
function split(x) {
  const t = trim(x);
  let c = t.m, k = -t.d;
  while (c !== 0 && c % 10 === 0) { c /= 10; k++; }
  return [c, k];
}

function placesBetween(to, from) {
  return Math.round(Math.log10(value(to) / value(from)));
}

// "tio gånger så stor", "en hundradel så stor"
function sizeWords(k, adjective) {
  return k > 0 ? `${TIMES[k]} gånger så ${adjective}` : `${PARTS[-k]} så ${adjective}`;
}

// "0,6 är en tiondel av 6", "700 är hundra gånger så stort som 7"
function compareWords(to, from, k, adjective) {
  return k > 0
    ? `${inline(to)} är ${TIMES[k]} gånger så ${adjective} som ${inline(from)}`
    : `${inline(to)} är ${PARTS[-k]} av ${inline(from)}`;
}

export function sumOf(terms) {
  return trim(terms.reduce((acc, [x, sign]) => sign > 0 ? dAdd(acc, x) : dSub(acc, x), D(0, 0)));
}

export function sumTex(terms, show) {
  return terms.map(([x, sign], i) => (i === 0 ? '' : sign > 0 ? ' + ' : ' - ') + show(x)).join('');
}

// 6 · 4 = 24, then 0,6 · 4 = 2,4, then 0,6 · 0,4 = 0,24. A factor that is a power of
// ten (10, 0,01) starts as 1 and the other factor stays as it is: 34 · 1 = 34.
export function productLadder(a, b) {
  a = trim(a); b = trim(b);
  const [ca] = split(a), [cb] = split(b);
  const a0 = ca === 1 ? D(1, 0) : cb === 1 ? a : D(ca, 0);
  const b0 = cb === 1 ? D(1, 0) : ca === 1 ? b : D(cb, 0);
  const line = (x, y) => String.raw`${num(x)} \cdot ${num(y)} = ${num(trim(dMul(x, y)))}`;
  const steps = [{ tex: line(a0, b0) }];
  let previous = 0;
  const change = (from, to, x, y) => {
    const k = placesBetween(to, from);
    if (k === 0) return;
    const again = k === previous ? ' igen' : '';
    previous = k;
    steps.push({ note: `${compareWords(to, from, k, 'stort')}, så produkten blir ${sizeWords(k, 'stor')}${again}.`, tex: line(x, y) });
  };
  change(a0, a, a, b0);
  change(b0, b, a, b);
  return steps;
}

export function fracLine(t, n, q) {
  return String.raw`\dfrac{${num(t)}}{${num(n)}} = ${num(q)}`;
}

// From t0/n0 = q0 to t/n, the numerator first. The denominator works the other way
// round: a tenth as big a denominator gives a quotient ten times as big.
export function quotientSteps(t0, n0, q0, t, n) {
  const kt = placesBetween(t, t0), kn = placesBetween(n, n0);
  if (kt !== 0 && kt === kn) {
    return [{ note: `Täljaren och nämnaren är båda ${sizeWords(kt, 'stora')}, så kvoten är densamma.`, tex: fracLine(t, n, q0) }];
  }
  const steps = [];
  let q = q0;
  if (kt !== 0) {
    q = trim(dMulPow10(q, kt));
    steps.push({ note: `Täljaren ${compareWords(t, t0, kt, 'stor')}, så kvoten blir ${sizeWords(kt, 'stor')}.`, tex: fracLine(t, n0, q) });
  }
  if (kn !== 0) {
    q = trim(dMulPow10(q, -kn));
    steps.push({ note: `Nämnaren ${compareWords(n, n0, kn, 'stor')}, så kvoten blir ${sizeWords(-kn, 'stor')}.`, tex: fracLine(t, n, q) });
  }
  return steps;
}

// Starts from the times-table fact behind the quotient, 72/9 = 8 for 0,072/0,9, or
// from t/1 when the denominator is a power of ten.
export function quotientLadder(t, n, answer) {
  t = trim(t); n = trim(n); answer = trim(answer);
  const [cn] = split(n), [cq] = split(answer);
  const [t0, n0, q0] = cn === 1 ? [t, D(1, 0), t] : [D(cn * cq, 0), D(cn, 0), D(cq, 0)];
  return [{ tex: fracLine(t0, n0, q0) }, ...quotientSteps(t0, n0, q0, t, n)];
}

// Counts everything in the smallest place, 40 + 4 = 44 hundradelar, then writes the
// numbers with equally many decimals: 0,40 + 0,04 = 0,44. Counting is skipped when the
// counts get too big to help (500 - 0,08 would be 50 000 - 8 hundradelar).
export function sumLadder(terms) {
  terms = terms.map(([x, sign]) => [trim(x), sign]);
  const result = sumOf(terms);
  const u = Math.min(...terms.map(([x]) => split(x)[1]));
  const decimals = Math.max(...terms.map(([x]) => x.d));
  const last = `${sumTex(terms, x => numFixed(x, decimals))} = ${num(result)}`;
  const counts = terms.map(([x, sign]) => [trim(dMulPow10(x, -u)), sign]);
  const resultCount = trim(dMulPow10(result, -u));
  if (u !== 0 && [...counts.map(([c]) => c), resultCount].every(c => c.d === 0 && c.m < 1e4)) {
    return [
      { note: `Räkna i ${UNITS[u]}.`, tex: `${sumTex(counts, num)} = ${num(resultCount)}` },
      { note: `${inline(resultCount)} ${UNITS[u]} är ${inline(result)}.`, tex: last },
    ];
  }
  if (terms.some(([x]) => x.d < decimals)) return [{ note: 'Skriv talen med lika många decimaler.', tex: last }];
  return [{ tex: last }];
}

// 50 · 1 = 50, and 0,8 is less than 1, so 50 · 0,8 is less than 50.
export function comparisonLadder(n, factor, multiply) {
  const N = D(n, 0), less = value(factor) < 1;
  const larger = multiply ? !less : less;
  let shown;
  if (multiply) {
    shown = '= ' + num(trim(dMul(N, factor)));
  } else {
    // n / (m / 10^d) = n · 10^d / m, exact when it has at most three decimals.
    const top = n * Math.pow(10, factor.d) * 1000;
    shown = top % factor.m === 0
      ? '= ' + num(trim(D(top / factor.m, 3)))
      : String.raw`\approx ` + num(trim(D(Math.round(top / factor.m / 100), 1)));
  }
  const write = (f) => multiply ? String.raw`${n} \cdot ${num(f)}` : String.raw`\dfrac{${n}}{${num(f)}}`;
  return [
    { tex: `${write(D(1, 0))} = ${n}` },
    {
      note: `${inline(factor)} är ${less ? 'mindre' : 'större'} än \\(1\\), så ${multiply ? 'produkten' : 'kvoten'} blir ${larger ? 'större' : 'mindre'} än \\(${n}\\).`,
      tex: `${write(factor)} ${shown}`,
    },
  ];
}

// A problem made from its calculation, with the ladder that goes with it.
export function sumProblem(terms) {
  return { tex: sumTex(terms, num) + ' =', answerType: 'decimal', answer: sumOf(terms), ladder: sumLadder(terms) };
}

export function productProblem(a, b) {
  return { tex: String.raw`${num(a)} \cdot ${num(b)} =`, answerType: 'decimal', answer: dMul(a, b), ladder: productLadder(a, b) };
}

export function quotientProblem(t, n, answer) {
  return { tex: String.raw`\dfrac{${num(t)}}{${num(n)}} =`, answerType: 'decimal', answer, ladder: quotientLadder(t, n, answer) };
}
