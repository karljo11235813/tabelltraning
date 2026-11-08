// Räkneordning: expressions from the worksheets Numeriska uttryck, where the order of the
// operations decides the answer: · and / before + and −, the fraction bar and
// parentheses first, powers before ·. The sheet pairs each expression with one that
// differs only in its grouping (22 + 12/2 and (22 + 12)/2). Here a question is one of
// them, and a wrong answer that comes from the other grouping is named in the help.

import { randInt, pick } from '../representationer/random.js';
import { D, dAdd, dSub, num, trim } from './decimal.js';

// LaTeX for a whole number or an exact decimal.
const n = (x) => num(typeof x === 'number' ? D(x, 0) : x);
const DOT = String.raw` \cdot `;
// A slash written between spaces, as on the sheet: 22 + 12 / 2.
const SLASH = String.raw` \mathbin{/} `;

// a / b as an exact decimal, or null when it has more than three decimals.
function divide(a, b) {
  for (let d = 0; d <= 3; d++) {
    const m = a * Math.pow(10, d);
    if (m % b === 0) return D(m / b, d);
  }
  return null;
}

const toD = (x) => (x === null ? null : typeof x === 'number' ? D(x, 0) : x);
const same = (x, y) => {
  const a = trim(x), b = trim(y);
  return a.m === b.m && a.d === b.d;
};

// The question from its states, the expression worked out one rule at a time:
// [question, [note, state], …, [note, answer]]. Each help line goes from one state to
// the next. A mistake is an answer from a wrong order and what the student did:
// [value, text], left out when the value is null or the right answer.
function stepwise(states, answer, mistakes = []) {
  const [question, ...rest] = states;
  let previous = question;
  const ladder = rest.map(([note, tex]) => {
    const line = { note, tex: `${previous} = ${tex}` };
    previous = tex;
    return line;
  });
  const right = toD(answer);
  return {
    tex: `${question} =`,
    answerType: 'decimal',
    answer: right,
    ladder,
    mistakes: mistakes.map(([value, text]) => ({ value: toD(value), text }))
      .filter(({ value }) => value !== null && value.m >= 0 && !same(value, right)),
  };
}

// Two numbers in a..b with the second one different from the first.
function pair(rng, lo, hi) {
  const a = randInt(rng, lo, hi);
  let b;
  do { b = randInt(rng, lo, hi); } while (b === a);
  return [a, b];
}

// Denominators that give at most two decimals, as in 35/10 and 45/100.
const TENS = [4, 5, 10, 20, 25, 50, 100];

const KINDS = [
  // Multiplication and division before addition and subtraction.
  [
    (rng) => { // 15 − 4 · 3
      const a = randInt(rng, 2, 9), b = randInt(rng, 2, 9), c = a * b + randInt(rng, 1, 20);
      return stepwise([`${c} - ${a}${DOT}${b}`, ['Multiplikationen först.', `${c} - ${a * b}`], ['Sedan subtraktionen.', n(c - a * b)]],
        c - a * b, [[(c - a) * b, String.raw`Du räknade \(${c} - ${a}\) först. Multiplikation går före subtraktion.`]]);
    },
    (rng) => { // 7 + 3 · 4
      const a = randInt(rng, 2, 9), b = randInt(rng, 2, 9), c = randInt(rng, 2, 30);
      return stepwise([`${c} + ${a}${DOT}${b}`, ['Multiplikationen först.', `${c} + ${a * b}`], ['Sedan additionen.', n(c + a * b)]],
        c + a * b, [[(c + a) * b, String.raw`Du räknade \(${c} + ${a}\) först. Multiplikation går före addition.`]]);
    },
    (rng) => { // 5 · 6 − 3 · 8
      let a, b, c, d;
      do { [a, b, c, d] = [randInt(rng, 2, 9), randInt(rng, 2, 9), randInt(rng, 2, 9), randInt(rng, 2, 9)]; } while (a * b - c * d < 2);
      return stepwise([`${a}${DOT}${b} - ${c}${DOT}${d}`, ['Båda multiplikationerna först.', `${a * b} - ${c * d}`], ['Sedan subtraktionen.', n(a * b - c * d)]],
        a * b - c * d, [[(a * b - c) * d, 'Du räknade från vänster. Båda multiplikationerna går före subtraktionen.']]);
    },
    (rng) => { // 5 · 5 − 21, 4 · 5 + 8, 8 · 8 − 8: from the left is right too, so the rule is not "the last one first"
      const a = randInt(rng, 2, 9), b = randInt(rng, 2, 9), plus = rng() < 0.5;
      const c = plus ? randInt(rng, 2, 30) : randInt(rng, 1, a * b - 1), sign = plus ? '+' : '-', op = plus ? 'additionen' : 'subtraktionen';
      const result = plus ? a * b + c : a * b - c;
      return stepwise([`${a}${DOT}${b} ${sign} ${c}`, ['Multiplikationen först.', `${a * b} ${sign} ${c}`], [`Sedan ${op}.`, n(result)]],
        result, [[plus ? a * (b + c) : a * (b - c), String.raw`Du räknade \(${b} ${sign} ${c}\) först. Multiplikationen går före ${op}.`]]);
    },
    (rng) => { // 18 / 6 + 16 / 4
      const plus = rng() < 0.5, [p0, q0] = pair(rng, 2, 9), [p, q] = plus ? [p0, q0] : [Math.max(p0, q0), Math.min(p0, q0)];
      const b = randInt(rng, 2, 9), d = randInt(rng, 2, 9), a = b * p, c = d * q;
      const sign = plus ? '+' : '-', op = plus ? 'additionen' : 'subtraktionen', result = plus ? p + q : p - q;
      return stepwise([`${a}${SLASH}${b} ${sign} ${c}${SLASH}${d}`, ['Båda divisionerna först.', `${p} ${sign} ${q}`], [`Sedan ${op}.`, n(result)]],
        result, [[plus ? divide(p + c, d) : p >= c ? divide(p - c, d) : null, `Du räknade från vänster. Båda divisionerna går före ${op}.`]]);
    },
    (rng) => { // 35 / 7 + 9 · 4 and 28 / 4 − 2 · 2
      const plus = rng() < 0.5, b = randInt(rng, 2, 9);
      const c = plus ? randInt(rng, 2, 9) : randInt(rng, 2, 3), d = plus ? randInt(rng, 2, 9) : randInt(rng, 2, 3);
      const p = plus ? randInt(rng, 2, 9) : c * d + randInt(rng, 1, 6), a = b * p;
      const sign = plus ? '+' : '-', op = plus ? 'additionen' : 'subtraktionen', result = plus ? p + c * d : p - c * d;
      return stepwise([`${a}${SLASH}${b} ${sign} ${c}${DOT}${d}`, ['Divisionen och multiplikationen först.', `${p} ${sign} ${c * d}`], [`Sedan ${op}.`, n(result)]],
        result, [[plus ? (p + c) * d : (p - c) * d, `Du räknade från vänster. Division och multiplikation går före ${op}.`]]);
    },
  ],
  // The fraction bar works like parentheses round the numerator and the denominator.
  [
    (rng) => { // 35 / (12 − 5) as a fraction
      const d = randInt(rng, 2, 9), q = randInt(rng, 2, 9), c = randInt(rng, 2, 12), a = d * q, b = d + c;
      const wrong = divide(a, b);
      return stepwise([String.raw`\dfrac{${a}}{${b} - ${c}}`, ['Nämnaren först. Bråkstrecket fungerar som en parentes.', String.raw`\dfrac{${a}}{${d}}`], ['Sedan divisionen.', n(q)]],
        q, [[wrong && dSub(wrong, D(c, 0)), String.raw`Du delade bara med \(${b}\). Bråkstrecket gör att \(${a}\) delas med hela \(${b} - ${c}\).`]]);
    },
    (rng) => { // 32 − 24/4: 32 − 24 is a multiple of 4 too, so the mistake comes out whole
      const c = randInt(rng, 2, 9), k = randInt(rng, 2, 9), b = c * k, a = b + c * randInt(rng, 1, 5);
      return stepwise([String.raw`${a} - \dfrac{${b}}{${c}}`, ['Divisionen först.', `${a} - ${k}`], ['Sedan subtraktionen.', n(a - k)]],
        a - k, [[a > b ? divide(a - b, c) : null, String.raw`Du räknade \(${a} - ${b}\) först. Division går före subtraktion.`]]);
    },
    (rng) => { // (32 − 24)/4 as a fraction, with 24 a multiple of 4 as on the sheet
      const c = randInt(rng, 2, 9), k = randInt(rng, 2, 9), b = c * randInt(rng, 1, 9), a = b + c * k;
      const part = divide(b, c);
      return stepwise([String.raw`\dfrac{${a} - ${b}}{${c}}`, ['Täljaren först. Bråkstrecket fungerar som en parentes.', String.raw`\dfrac{${c * k}}{${c}}`], ['Sedan divisionen.', n(k)]],
        k, [[part && dSub(D(a, 0), part), String.raw`Du delade bara \(${b}\) med \(${c}\). Bråkstrecket gäller hela täljaren.`]]);
    },
    (rng) => { // (20 + 15)/(7 + 3) = 3,5 and (75 − 30)/(75 + 25) = 0,45
      const den = pick(rng, TENS), c = randInt(rng, 1, den - 1), d = den - c;
      const s = randInt(rng, 11, 99);
      const plus = rng() < 0.5, a = plus ? randInt(rng, 1, s - 1) : s + randInt(rng, 1, 40), b = plus ? s - a : a - s;
      return stepwise([String.raw`\dfrac{${a} ${plus ? '+' : '-'} ${b}}{${c} + ${d}}`, ['Täljaren och nämnaren först.', String.raw`\dfrac{${s}}{${den}}`], ['Sedan divisionen.', n(divide(s, den))]],
        divide(s, den));
    },
  ],
  // Written with a slash: division before addition, parentheses first.
  [
    (rng) => { // (22 + 12) / 2, both terms multiples of 2 as on the sheet
      const c = randInt(rng, 2, 9), k = randInt(rng, 3, 12), s = c * k, b = c * randInt(rng, 1, k - 1), a = s - b;
      const part = divide(b, c);
      return stepwise([`(${a} + ${b})${SLASH}${c}`, ['Parentesen först.', `${s}${SLASH}${c}`], ['Sedan divisionen.', n(k)]],
        k, [[part && dAdd(D(a, 0), part), String.raw`Du delade bara \(${b}\) med \(${c}\). Parentesen gör att hela summan delas.`]]);
    },
    (rng) => { // (18 − 12) / 6, with 12 a multiple of 6
      const c = randInt(rng, 2, 9), k = randInt(rng, 1, 9), j = randInt(rng, 1, 9), b = c * j, a = b + c * k;
      return stepwise([`(${a} - ${b})${SLASH}${c}`, ['Parentesen först.', `${c * k}${SLASH}${c}`], ['Sedan divisionen.', n(k)]],
        k, [[a - j, String.raw`Du delade bara \(${b}\) med \(${c}\). Parentesen gör att hela skillnaden delas.`]]);
    },
    (rng) => { // 22 + 12 / 2
      const c = randInt(rng, 2, 9), k = randInt(rng, 2, 9), b = c * k, a = randInt(rng, 2, 40);
      return stepwise([`${a} + ${b}${SLASH}${c}`, ['Divisionen först.', `${a} + ${k}`], ['Sedan additionen.', n(a + k)]],
        a + k, [[divide(a + b, c), String.raw`Du räknade \(${a} + ${b}\) först. Division går före addition.`]]);
    },
    (rng) => { // 14 / 7 + 3
      const b = randInt(rng, 2, 9), k = randInt(rng, 2, 9), a = b * k, c = randInt(rng, 2, 9);
      return stepwise([`${a}${SLASH}${b} + ${c}`, ['Divisionen först.', `${k} + ${c}`], ['Sedan additionen.', n(k + c)]],
        k + c, [[divide(a, b + c), String.raw`Du räknade \(${b} + ${c}\) först. Division går före addition.`]]);
    },
    (rng) => { // 14 / (7 + 3) = 1,4
      const den = pick(rng, [4, 5, 10, 20, 25]), b = randInt(rng, 2, den - 2), c = den - b, a = randInt(rng, 11, 99);
      const part = divide(a, b);
      return stepwise([`${a}${SLASH}(${b} + ${c})`, ['Parentesen först.', `${a}${SLASH}${den}`], ['Sedan divisionen.', n(divide(a, den))]],
        divide(a, den), [[part && dAdd(D(c, 0), part), String.raw`Du delade bara med \(${b}\). Parentesen gör att \(${a}\) delas med hela summan.`]]);
    },
  ],
  // Parentheses, and a number right before a parenthesis multiplies all of it.
  [
    (rng) => { // (4 + 5) · 8 and (25 + 2) · 10
      const plus = rng() < 0.5, b = randInt(rng, 2, 9), a = plus ? randInt(rng, 2, 30) : b + randInt(rng, 2, 20), c = randInt(rng, 2, 10);
      const sign = plus ? '+' : '-', s = plus ? a + b : a - b;
      return stepwise([`(${a} ${sign} ${b})${DOT}${c}`, ['Parentesen först.', `${s}${DOT}${c}`], ['Sedan multiplikationen.', n(s * c)]],
        s * c, [[plus ? a + b * c : a - b * c, String.raw`Du räknade \(${b}${DOT}${c}\) först. Parentesen räknas först.`]]);
    },
    (rng) => { // 3(16 − 7)
      const a = randInt(rng, 2, 9), d = randInt(rng, 2, 9), c = randInt(rng, 2, 12), b = c + d;
      return stepwise([`${a}(${b} - ${c})`, ['Parentesen först.', `${a}${DOT}${d}`], [String.raw`Sedan multiplikationen: \(${a}(${b} - ${c})\) betyder \(${a}${DOT}(${b} - ${c})\).`, n(a * d)]],
        a * d, [[a * b - c, String.raw`Du multiplicerade bara \(${b}\) med \(${a}\). Talet framför parentesen multipliceras med hela parentesen.`]]);
    },
    (rng) => { // 35 − 5(10 − 5)
      const b = randInt(rng, 2, 9), e = randInt(rng, 2, 9), d = randInt(rng, 2, 10), c = d + e, a = b * e + randInt(rng, 1, 20);
      return stepwise([`${a} - ${b}(${c} - ${d})`, ['Parentesen först.', `${a} - ${b}${DOT}${e}`], ['Multiplikationen före subtraktionen.', `${a} - ${b * e}`], ['Sist subtraktionen.', n(a - b * e)]],
        a - b * e, [[(a - b) * e, String.raw`Du räknade \(${a} - ${b}\) först. Multiplikationen går före subtraktionen.`]]);
    },
    (rng) => { // (35 − 5)(10 − 5)
      const x = randInt(rng, 11, 30), y = randInt(rng, 2, 9), b = randInt(rng, 2, 20), a = b + x, d = randInt(rng, 2, 10), c = d + y;
      return stepwise([`(${a} - ${b})(${c} - ${d})`, ['Parenteserna först.', `${x}${DOT}${y}`], ['Sedan multiplikationen.', n(x * y)]], x * y);
    },
  ],
  // Powers before multiplication, addition and subtraction.
  [
    (rng) => { // 5² + 3² and 7² − 5²
      const [p, q] = pair(rng, 2, 9), plus = rng() < 0.5, [a, b] = plus ? [p, q] : [Math.max(p, q), Math.min(p, q)];
      const sign = plus ? '+' : '-', result = plus ? a * a + b * b : a * a - b * b, op = plus ? 'additionen' : 'subtraktionen';
      return stepwise([`${a}^{2} ${sign} ${b}^{2}`, ['Potenserna först.', `${a * a} ${sign} ${b * b}`], [`Sedan ${op}.`, n(result)]],
        result, [
          [plus ? (a + b) * (a + b) : (a - b) * (a - b), String.raw`Du räknade \(${a} ${sign} ${b}\) först. Potenserna räknas före ${op}.`],
          [plus ? 2 * a + 2 * b : 2 * a - 2 * b, String.raw`\(${a}^{2}\) är \(${a}${DOT}${a}\), inte \(${a}${DOT}2\).`],
        ]);
    },
    (rng) => { // 10 − 2³
      const b = randInt(rng, 2, 3), cube = b * b * b, a = cube + randInt(rng, 1, 20);
      return stepwise([`${a} - ${b}^{3}`, ['Potensen först.', `${a} - ${cube}`], ['Sedan subtraktionen.', n(a - cube)]],
        a - cube, [[a - 3 * b, String.raw`\(${b}^{3}\) är \(${b}${DOT}${b}${DOT}${b}\), inte \(${b}${DOT}3\).`]]);
    },
    (rng) => { // 3 · 2²
      const a = randInt(rng, 2, 9), b = randInt(rng, 2, 6);
      return stepwise([`${a}${DOT}${b}^{2}`, [String.raw`Potensen först. Bara \(${b}\) är upphöjt.`, `${a}${DOT}${b * b}`], ['Sedan multiplikationen.', n(a * b * b)]],
        a * b * b, [[a * b * a * b, String.raw`Du räknade \(${a}${DOT}${b}\) först. Potensen gäller bara \(${b}\).`]]);
    },
    (rng) => { // (3 · 2)²
      const a = randInt(rng, 2, 5), b = randInt(rng, 2, 5);
      return stepwise([`(${a}${DOT}${b})^{2}`, ['Parentesen först.', `${a * b}^{2}`], ['Sedan potensen.', n(a * b * a * b)]],
        a * b * a * b, [[a * b * b, String.raw`Du upphöjde bara \(${b}\). Parentesen gör att hela produkten upphöjs.`]]);
    },
    (rng) => { // 5(25 − 4²)
      const c = randInt(rng, 2, 5), d = randInt(rng, 2, 9), b = c * c + d, a = randInt(rng, 2, 9);
      return stepwise([`${a}(${b} - ${c}^{2})`, ['Potensen först, inne i parentesen.', `${a}(${b} - ${c * c})`], ['Sedan resten av parentesen.', `${a}${DOT}${d}`], ['Sist multiplikationen.', n(a * d)]],
        a * d, [[a * (b - 2 * c), String.raw`\(${c}^{2}\) är \(${c}${DOT}${c}\), inte \(${c}${DOT}2\).`]]);
    },
  ],
  // Several steps: parentheses, then · and /, then + and − from the left.
  [
    (rng) => { // 2 · (5 + 3) − 8 / 4 and 3 · (3 + 10) − 10 / 5
      let a, b, c, e, q;
      do {
        [a, b, c, e, q] = [randInt(rng, 2, 5), randInt(rng, 2, 12), randInt(rng, 2, 10), randInt(rng, 2, 9), randInt(rng, 1, 9)];
      } while (a * (b + c) - q < 1);
      const s = b + c, d = e * q;
      return stepwise([`${a}${DOT}(${b} + ${c}) - ${d}${SLASH}${e}`, ['Parentesen först.', `${a}${DOT}${s} - ${d}${SLASH}${e}`],
        ['Multiplikationen och divisionen före subtraktionen.', `${a * s} - ${q}`], ['Sist subtraktionen.', n(a * s - q)]],
      a * s - q, [[a * b + c - q, String.raw`Du räknade \(${a}${DOT}${b}\) först. Parentesen räknas först.`]]);
    },
    (rng) => { // 10 / 2 + 7 − 15 / 5
      let b, p, c, e, q;
      do {
        [b, p, c, e, q] = [randInt(rng, 2, 9), randInt(rng, 2, 9), randInt(rng, 2, 12), randInt(rng, 2, 9), randInt(rng, 1, 9)];
      } while (p + c - q < 1);
      const a = b * p, d = e * q;
      return stepwise([`${a}${SLASH}${b} + ${c} - ${d}${SLASH}${e}`, ['Divisionerna först.', `${p} + ${c} - ${q}`],
        ['Sedan från vänster: först additionen.', `${p + c} - ${q}`], ['Sist subtraktionen.', n(p + c - q)]],
      p + c - q);
    },
    (rng) => { // 4 · 4 − 9 − 6 / 2: two subtractions from the left
      let a, b, c, e, q;
      do {
        [a, b, e, q] = [randInt(rng, 2, 9), randInt(rng, 2, 9), randInt(rng, 2, 9), randInt(rng, 1, 9)];
        c = randInt(rng, q + 1, q + 12);
      } while (a * b - c - q < 1);
      const p = a * b, d = e * q;
      return stepwise([`${a}${DOT}${b} - ${c} - ${d}${SLASH}${e}`, ['Multiplikationen och divisionen först.', `${p} - ${c} - ${q}`],
        ['Sedan subtraktionerna från vänster.', `${p - c} - ${q}`], ['Sist den andra subtraktionen.', n(p - c - q)]],
      p - c - q, [[p - (c - q), String.raw`Du räknade \(${c} - ${q}\) först. Två subtraktioner räknas från vänster.`]]);
    },
  ],
];

export function genOrder(rng) {
  return pick(rng, pick(rng, KINDS))(rng);
}
