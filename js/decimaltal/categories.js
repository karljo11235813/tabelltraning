// The twelve question categories in the page's order. Each generator takes a random
// function (mulberry32 in tests, Math.random on the page) and calls it in the same
// order as the page did before the code moved here, so a seed gives one question.

import { randInt, pick, shuffle } from '../representationer/random.js';
import { D, dAdd, dSub, dMul, dMulPow10, inline, num, placed, trim, value } from './decimal.js';
import { comparisonLadder, fracLine, productLadder, productProblem, quotientLadder, quotientProblem,
  quotientSteps, shortDivisionLadder, sumLadder, sumOf, sumProblem, sumTex } from './ladders.js';
import { genOrder } from './order.js';
import { numberWords } from './words.js';

// Each generator returns { label, tex, answerType, answer, ladder, intro, mistakes }. `tex` is
// LaTeX without delimiters; `label` and `intro` are text that may hold \( … \) math.
// String.raw keeps the backslashes in the LaTeX. Every division is written as a
// display fraction. `intro` (word problems) turns the sentence into a calculation
// above the ladder.
// answerType 'decimal' -> answer is a {m,d} object, checked via checkDecimalAnswer.
// answerType 'choice' -> answer is the data-answer of the right choice button.
// answerType 'multi' -> `options` is [{ id: 'A', tex }], and answer the ids of every
// right option in order ('ADE'); the student picks all that are right.

function genAddSub(rng) {
  const variant = randInt(rng, 1, 5);
  switch (variant) {
    case 1: { // 0,8 + 0,6  (two 1-decimal numbers)
      const a = D(randInt(rng, 1, 9), 1), b = D(randInt(rng, 1, 9), 1);
      return sumProblem([[a, 1], [b, 1]]);
    }
    case 2: { // 1 − 0,3  (whole number minus a <1 decimal)
      const b = D(randInt(rng, 1, 9), 1);
      return sumProblem([[D(1, 0), 1], [b, -1]]);
    }
    case 3: { // 0,4 + 0,04  (1-decimal + 2-decimal)
      const a = D(randInt(rng, 1, 9), 1), b = D(randInt(rng, 1, 9), 2);
      return sumProblem([[a, 1], [b, 1]]);
    }
    case 4: { // 1,2 − 0,25  (2-decimal subtraction, a > b)
      const b = D(randInt(rng, 10, 40), 2);
      const a = D(b.m + randInt(rng, 1, 20) * 5, 2);
      return sumProblem([[a, 1], [b, -1]]);
    }
    default: { // 0,85 + 0,9  (2-decimal + 1-decimal)
      const a = D(randInt(rng, 10, 95), 2), b = D(randInt(rng, 1, 9), 1);
      return sumProblem([[a, 1], [b, 1]]);
    }
  }
}

function genPowers10(rng) {
  const variant = randInt(rng, 1, 5);
  switch (variant) {
    case 1: { // 10 · 3,24
      const x = D(randInt(rng, 105, 995), 2);
      return productProblem(D(10, 0), x);
    }
    case 2: { // 100 · 3,2 or 100 · 3,24
      const x = D(randInt(rng, 11, 99), pick(rng, [1, 2]));
      return productProblem(D(100, 0), x);
    }
    case 3: { // 1 000 · 0,35 or 1 000 · 0,065
      const d = pick(rng, [2, 3]);
      const x = D(randInt(rng, Math.pow(10, d - 2), Math.pow(10, d) - 1), d);
      return productProblem(D(1000, 0), x);
    }
    case 4: { // 84,3 / 10  (1-decimal x -> 2-decimal result, matches worksheet)
      const x = D(randInt(rng, 15, 995), 1);
      return quotientProblem(x, D(10, 0), dMulPow10(x, -1));
    }
    default: { // 372 / 100 or 4,5 / 100  (0- or 1-decimal x -> at most 3-decimal result)
      const x = D(randInt(rng, 15, 995), pick(rng, [0, 1]));
      return quotientProblem(x, D(100, 0), dMulPow10(x, -2));
    }
  }
}

// Times 0,1 is the same as divided by 10, and divided by 0,1 the same as times 10,
// so these are decimal point shifts too. Answers have at most three decimals.
function genPowers01(rng) {
  const variant = randInt(rng, 1, 6);
  switch (variant) {
    case 1: { // 34 · 0,1 or 3,4 · 0,1
      const x = D(randInt(rng, 15, 995), pick(rng, [0, 1]));
      return productProblem(x, D(1, 1));
    }
    case 2: { // 250 · 0,01 or 4,5 · 0,01
      const x = D(randInt(rng, 15, 995), pick(rng, [0, 1]));
      return productProblem(x, D(1, 2));
    }
    case 3: { // 3 400 · 0,001 or 65 · 0,001
      const x = D(randInt(rng, 15, 9995), 0);
      return productProblem(x, D(1, 3));
    }
    case 4: { // 7 / 0,1 or 3,47 / 0,1
      const x = D(randInt(rng, 15, 995), pick(rng, [0, 1, 2]));
      return quotientProblem(x, D(1, 1), dMulPow10(x, 1));
    }
    case 5: { // 0,345 / 0,01 or 2,5 / 0,01
      const x = D(randInt(rng, 15, 995), pick(rng, [1, 2, 3]));
      return quotientProblem(x, D(1, 2), dMulPow10(x, 2));
    }
    default: { // 0,045 / 0,001 or 2,15 / 0,001
      const x = D(randInt(rng, 15, 995), pick(rng, [2, 3]));
      return quotientProblem(x, D(1, 3), dMulPow10(x, 3));
    }
  }
}

function genMulDecimal(rng) {
  const variant = randInt(rng, 1, 5);
  switch (variant) {
    case 1: { // 0,6 · 0,4
      return productProblem(D(randInt(rng, 1, 9), 1), D(randInt(rng, 1, 9), 1));
    }
    case 2: { // 5 · 0,7
      return productProblem(D(randInt(rng, 2, 9), 0), D(randInt(rng, 1, 9), 1));
    }
    case 3: { // 6 · 0,08
      return productProblem(D(randInt(rng, 2, 9), 0), D(randInt(rng, 1, 9), 2));
    }
    case 4: { // 30 · 0,7  (multiple of ten times a 1-decimal)
      return productProblem(D(randInt(rng, 2, 9) * 10, 0), D(randInt(rng, 1, 9), 1));
    }
    default: { // 0,04 · 3 000
      return productProblem(D(randInt(rng, 1, 9), 2), D(randInt(rng, 2, 9) * 1000, 0));
    }
  }
}

// Kort division: a decimal divided by a one-digit number, always exact. The kinds on
// the worksheet Kort division 3: no carrying (48,8 / 2), carrying with a quotient below
// 10 (5,7 / 3), a first digit smaller than the divisor (22,4 / 7), a quotient above 10
// (103,8 / 6), a zero in the quotient (42,8 / 4) and two decimals (17,64 / 9). The
// numerator has as many decimals as the quotient, so never 3,0 / 2.
function genShortDivision(rng) {
  const kind = randInt(rng, 1, 6);
  const everyDigitDivides = (t, n) => [...String(t.m)].every((digit) => Number(digit) % n === 0);
  // The divisor is drawn first and kept while quotients are tried, so that 5 (where
  // half the quotients end the numerator in 0) comes as often as the others. A kind
  // that no quotient fits for this divisor (9 with carrying below 10) draws a new one.
  for (;;) {
    const n = kind === 1 ? randInt(rng, 2, 4) : randInt(rng, 2, 9);
    for (let tries = 0; tries < 30; tries++) {
      let q;
      switch (kind) {
        case 1: { // 48,8 / 2 = 24,4
          const digit = () => randInt(rng, 1, Math.floor(9 / n));
          q = D(rng() < 0.5 ? digit() * 10 + digit() : digit() * 100 + digit() * 10 + digit(), 1);
          break;
        }
        case 2: case 3: q = D(randInt(rng, 11, 99), 1); break; // 5,7 / 3 = 1,9 and 22,4 / 7 = 3,2
        case 4: q = D(randInt(rng, 101, 399), 1); break; // 103,8 / 6 = 17,3
        case 5: q = D(randInt(rng, 1, 3) * 100 + randInt(rng, 1, 9), 1); break; // 42,8 / 4 = 10,7
        default: q = D(randInt(rng, 101, 299), 2); // 17,64 / 9 = 1,96
      }
      const t = D(q.m * n, q.d), first = Number(String(t.m)[0]);
      if (q.m % 10 === 0 || t.m % 10 === 0) continue;
      if (kind === 2 && (first < n || everyDigitDivides(t, n))) continue;
      if (kind === 3 && (first >= n || t.m < 100)) continue;
      return { tex: String.raw`\dfrac{${num(t)}}{${n}} =`, answerType: 'decimal', answer: q, ladder: shortDivisionLadder(t, n, q) };
    }
  }
}

function genFraction(rng) {
  const variant = randInt(rng, 1, 2);
  if (variant === 1) {
    // Integer / round-integer, e.g. 360/60 = 6, 9000/3000 = 3, 5600/800 = 7
    const divisor = D(pick(rng, [20, 30, 40, 50, 60, 70, 80, 90, 200, 300, 400, 500, 600, 700, 800, 900, 2000, 3000, 4000, 5000]), 0);
    const quotient = randInt(rng, 2, 9);
    return quotientProblem(D(divisor.m * quotient, 0), divisor, D(quotient, 0));
  }
  // divisor is a decimal < 1, e.g. 1/0,1 = 10, 3/0,6 = 5, 5/0,01 = 500, 36/0,9 = 40
  const divisor = D(randInt(rng, 1, 9), pick(rng, [1, 2]));
  const quotient = randInt(rng, 2, 40);
  return quotientProblem(dMul(D(quotient, 0), divisor), divisor, D(quotient, 0));
}

function genComparison(rng) {
  const n = randInt(rng, 20, 90);
  const useMultiply = rng() < 0.5;
  const lessThanOne = rng() < 0.5;
  const factor = lessThanOne
    ? D(randInt(rng, 5, 98), 2)  // 0,05–0,98
    : pick(rng, [D(randInt(rng, 11, 30), 1), D(randInt(rng, 2, 5), 0)]); // 1,1–3,0 or 2–5

  const tex = useMultiply
    ? String.raw`${n} \cdot ${num(factor)}`
    : String.raw`\dfrac{${n}}{${num(factor)}}`;
  // Multiplying by <1 shrinks; multiplying by >1 grows.
  // Dividing by <1 grows; dividing by >1 shrinks.
  let larger;
  if (useMultiply) larger = !lessThanOne;
  else larger = lessThanOne;

  return {
    label: String.raw`Blir svaret större eller mindre än \(${n}\)? Svara utan att räkna.`,
    tex: tex,
    answerType: 'choice',
    answer: larger ? 'större' : 'mindre',
    ladder: comparisonLadder(n, trim(factor), useMultiply),
  };
}

// Skala om: a known fact, then a division whose numerator and denominator are
// shifted by powers of ten. Half start from a quotient, half from a product.
function genScale(rng) {
  return rng() < 0.5 ? scaleFromQuotient(rng) : scaleFromProduct(rng);
}

// Du vet att 35 · 12 = 420. Hur mycket är då 42 / 1,2 or 4,2 / 0,35? The division
// runs the product backwards by either factor, so the answer is the other factor,
// moved at most one decimal place.
function scaleFromProduct(rng) {
  const factor = () => {
    let n;
    do { n = randInt(rng, 11, 49); } while (n % 10 === 0);
    return n;
  };
  const a = factor();
  let b;
  do { b = factor(); } while (b === a);
  const product = D(a * b, 0);
  const [divisor, quotient] = rng() < 0.5 ? [a, b] : [b, a];

  let p, q;
  do {
    p = pick(rng, [-2, -1, 0, 1]);
    q = pick(rng, [-2, -1, 0, 1]);
  } while (Math.abs(p - q) > 1);

  const numerator = trim(dMulPow10(product, p));
  const denominator = trim(dMulPow10(D(divisor, 0), q));
  return {
    label: String.raw`Du vet att \(${a} \cdot ${b} = ${num(product)}\). Hur mycket är då:`,
    tex: String.raw`\dfrac{${num(numerator)}}{${num(denominator)}} =`,
    answerType: 'decimal',
    answer: dMulPow10(D(quotient, 0), p - q),
    ladder: [
      { tex: String.raw`${a} \cdot ${b} = ${num(product)}` },
      { note: 'Division är multiplikation baklänges.', tex: fracLine(product, D(divisor, 0), D(quotient, 0)) },
      ...quotientSteps(product, D(divisor, 0), D(quotient, 0), numerator, denominator),
    ],
  };
}

// Du vet att 360 / 60 = 6. Hur mycket är då 36 / 6?
function scaleFromQuotient(rng) {
  const denominator0 = pick(rng, [2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 25, 30, 40, 50]);
  const quotient0 = randInt(rng, 2, 50);
  const numerator0 = D(denominator0 * quotient0, 0);
  const denom0 = D(denominator0, 0);
  const quot0 = D(quotient0, 0);

  let p, q;
  do {
    p = pick(rng, [-1, 0, 1]);
    q = pick(rng, [-1, 0, 1]);
  } while (p === 0 && q === 0);

  const scaledNumerator = trim(dMulPow10(numerator0, p));
  const scaledDenominator = trim(dMulPow10(denom0, q));
  const answer = dMulPow10(quot0, p - q);

  return {
    label: String.raw`Du vet att \(\dfrac{${num(numerator0)}}{${num(denom0)}} = ${num(quot0)}\). Hur mycket är då:`,
    tex: String.raw`\dfrac{${num(scaledNumerator)}}{${num(scaledDenominator)}} =`,
    answerType: 'decimal',
    answer: answer,
    ladder: [
      { tex: fracLine(numerator0, denom0, quot0) },
      ...quotientSteps(numerator0, denom0, quot0, scaledNumerator, scaledDenominator),
    ],
  };
}

// ---- Samma svar? Which calculations give the same product ----
// Vilka av följande beräkningar ger samma svar som 45 · 57? Five calculations where
// each factor is moved at most two places, such as 0,45 · 5 700. The product stays
// when one factor is as many times larger as the other is smaller, so a calculation
// is right when its two moves add up to 0. One to three of the five are right.

const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const SAME_SHIFTS = [[-2, 2], [-1, 1], [1, -1], [2, -2]];
// Moves that add up to ±1 or ±2: the product is 10 or 100 times too large or small.
const OTHER_SHIFTS = [];
for (let p = -2; p <= 2; p++) {
  for (let q = -2; q <= 2; q++) {
    if ([1, 2].includes(Math.abs(p + q))) OTHER_SHIFTS.push([p, q]);
  }
}

function genSameProduct(rng) {
  const twoDigits = () => {
    let n;
    do { n = randInt(rng, 12, 98); } while (n % 10 === 0);
    return n;
  };
  const a = twoDigits();
  let b;
  do { b = twoDigits(); } while (b === a);
  const base = String.raw`${a} \cdot ${b}`;

  const right = randInt(rng, 1, 3);
  const shifts = shuffle([...shuffle(SAME_SHIFTS, rng).slice(0, right), ...shuffle(OTHER_SHIFTS, rng).slice(0, 5 - right)], rng);
  const power = (k) => num(placed(1, k));
  // 57 moved p places, written as 57 · 100 or 57/100 so that the move shows.
  const moved = (n, p) => p === 0 ? String(n) : p > 0 ? String.raw`${n} \cdot ${power(p)}` : String.raw`\dfrac{${n}}{${power(-p)}}`;

  const options = shifts.map(([p, q], i) => ({ id: LETTERS[i], p, q, tex: String.raw`${num(placed(a, p))} \cdot ${num(placed(b, q))}` }));
  return {
    label: String.raw`Vilka av följande beräkningar ger samma svar som \(${base}\)? Välj alla som stämmer.`,
    tex: '',
    answerType: 'multi',
    base,
    options: options.map(({ id, tex }) => ({ id, tex })),
    answer: options.filter(({ p, q }) => p + q === 0).map(({ id }) => id).join(''),
    intro: 'Produkten blir densamma när den ena faktorn blir lika många gånger större som den andra blir mindre.',
    // One line per calculation, not a chain of steps.
    ladder: options.map(({ id, p, q, tex }) => {
      const net = p + q;
      const result = net === 0 ? base : net > 0 ? String.raw`${base} \cdot ${power(net)}` : String.raw`\dfrac{${base}}{${power(-net)}}`;
      const middle = String.raw`${moved(a, p)} \cdot ${moved(b, q)}`;
      return {
        note: net === 0 ? `${id}: samma svar ✓` : `${id}: \\(${power(Math.abs(net))}\\) gånger ${net > 0 ? 'större' : 'mindre'} ✗`,
        tex: middle === result ? `${tex} = ${result}` : `${tex} = ${middle} = ${result}`,
      };
    }),
  };
}

// ---- Summa, differens, produkt, kvot with the numbers in words ----
// Every operand is a small digit part at a place value: a whole number such as
// 480 000 or a pure decimal such as 0,036. Mixed numbers like 5,6 never are
// operands, since "fem och sex tiondelar och …" would make the "och" between the
// two numbers ambiguous. Answers can be mixed numbers.

const OPERATIONS = [
  { word: 'summan', run: dAdd, tex: (a, b) => `${num(a)} + ${num(b)}`, ladder: (a, b) => sumLadder([[a, 1], [b, 1]]) },
  { word: 'differensen', run: dSub, tex: (a, b) => `${num(a)} - ${num(b)}`, ladder: (a, b) => sumLadder([[a, 1], [b, -1]]) },
  { word: 'produkten', run: dMul, tex: (a, b) => String.raw`${num(a)} \cdot ${num(b)}`, ladder: (a, b) => productLadder(a, b) },
  { word: 'kvoten', tex: (a, b) => String.raw`\dfrac{${num(a)}}{${num(b)}}`, ladder: (a, b, q) => quotientLadder(a, b, q) },
];

// Whole numbers below a million, or decimals below 1 with at most three decimals.
function isOperand(c, e) {
  return e >= -3 && (e >= 0 ? c * Math.pow(10, e) < 1e6 : c < Math.pow(10, -e));
}

// 7, 45, 700, 0,45, 0,036, 12 000 …: one digit at any place, or two digits.
function randomOperand(rng) {
  let c, e;
  do {
    c = rng() < 0.5 ? randInt(rng, 1, 9) : randInt(rng, 11, 99);
    e = randInt(rng, -3, 5);
  } while (c % 10 === 0 || !isOperand(c, e));
  return placed(c, e);
}

// Both numbers below 100 and whole is plain mental arithmetic, not place value.
function isTrivial(a, b) {
  return a.d === 0 && b.d === 0 && a.m < 100 && b.m < 100;
}

function genWords(rng) {
  const op = pick(rng, OPERATIONS);
  let a, b, answer;
  if (op.word === 'summan' || op.word === 'differensen') {
    // Numbers of different sizes; the first is the larger in a difference.
    do {
      a = randomOperand(rng);
      b = randomOperand(rng);
    } while (value(a) === value(b) || isTrivial(a, b));
    if (op.word === 'differensen' && value(a) < value(b)) [a, b] = [b, a];
    answer = op.run(a, b);
  } else if (op.word === 'produkten') {
    // A times-table fact moved to other places: 700 · 0,03 = 21.
    let c1, c2, e1, e2;
    do {
      c1 = randInt(rng, 2, 9); c2 = randInt(rng, 2, 9);
      e1 = randInt(rng, -3, 5); e2 = randInt(rng, -3, 5);
    } while (!isOperand(c1, e1) || !isOperand(c2, e2) || e1 + e2 < -3 || e1 + e2 > 5 || (e1 === 0 && e2 === 0));
    a = placed(c1, e1);
    b = placed(c2, e2);
    answer = dMul(a, b);
  } else {
    // Built backwards from a times-table fact so it comes out exactly:
    // 48 / 8 = 6 gives 480 000 / 800 = 600.
    let divisor, quotient, eDivisor, eQuotient;
    do {
      divisor = randInt(rng, 2, 9); quotient = randInt(rng, 2, 9);
      eDivisor = randInt(rng, -3, 5); eQuotient = randInt(rng, -3, 5);
    } while (!isOperand(divisor, eDivisor) || !isOperand(divisor * quotient, eDivisor + eQuotient)
      || (eDivisor === 0 && eQuotient === 0));
    a = placed(divisor * quotient, eDivisor + eQuotient);
    b = placed(divisor, eDivisor);
    answer = placed(quotient, eQuotient);
  }
  return {
    label: `Beräkna ${op.word} av ${numberWords(a)} och ${numberWords(b)}.`,
    tex: '',
    answerType: 'decimal',
    answer: answer,
    // Shown when the answer is wrong: the words turned into a calculation.
    intro: `${op.word[0].toUpperCase()}${op.word.slice(1)} av ${inline(a)} och ${inline(b)} är \\(${op.tex(a, b)}\\).`,
    ladder: op.ladder(a, b, answer),
  };
}

// ---- Abstrakta problem: a result and one part are given, the other part is asked for ----
// The point is to set up the calculation from how the words relate, so a wrong answer
// shows the relation with a box for the missing number, and then how to solve it.

// Every number is shown in digits, with at most three decimals.
function isShowable(x) {
  return x.d <= 3 && value(x) >= 0.001 && value(x) < 1e7;
}

// Two factors whose product is easy by hand, each moved to some place value: a
// times-table fact (0,9 · 0,4 = 0,36) or a friendly pair (25 · 120 = 3 000).
const FRIENDLY_PAIRS = [[25, 4], [25, 8], [25, 12], [50, 6], [20, 5], [75, 4], [125, 8]];
function friendlyFactors(rng) {
  let a, b, product;
  do {
    const [c1, c2] = rng() < 0.7 ? [randInt(rng, 2, 9), randInt(rng, 2, 9)] : pick(rng, FRIENDLY_PAIRS);
    a = placed(c1, randInt(rng, -3, 4));
    b = placed(c2, randInt(rng, -3, 4));
    product = trim(dMul(a, b));
  } while (!isShowable(a) || !isShowable(b) || !isShowable(product)
    || (a.d === 0 && b.d === 0 && a.m < 10 && b.m < 10));
  return rng() < 0.5 ? [a, b, product] : [b, a, product];
}

// A round number such as 5 000 or 0,5, and a part of it with two or three digits
// that is easy to complete by hand, such as 3 750.
function roundAndPart(rng) {
  const c = randInt(rng, 1, 9), e = randInt(rng, -1, 4);
  let k;
  do { k = randInt(rng, 11, c * 100 - 11); } while (k % 10 === 0);
  return [placed(c, e), placed(k, e - 2)];
}

// Two-digit numbers at the same place, such as 280 and 620.
function twoDigitPair(rng, e) {
  let k1, k2;
  do { k1 = randInt(rng, 11, 99); k2 = randInt(rng, 11, 99); } while (k1 % 10 === 0 || k2 % 10 === 0);
  return [placed(k1, e), placed(k2, e)];
}

// `relation` is the sentence as an equation with a box for the missing number and
// `setup` how to get the box; the ladder then works out `setup`.
function abstractProblem(label, answer, relation, setup, ladder) {
  return {
    label, tex: '', answerType: 'decimal', answer: trim(answer),
    intro: String.raw`\(${relation}\), så \(\square = ${setup}\).`,
    ladder,
  };
}

function genAbstract(rng) {
  const n = (x) => `\\(${num(x)}\\)`;
  switch (randInt(rng, 1, 7)) {
    case 1: { // Produkten av två tal är 1 200. Den ena faktorn är 40.
      const [a, b, p] = friendlyFactors(rng);
      return abstractProblem(
        `Produkten av två tal är ${n(p)}. Den ena faktorn är ${n(a)}. Vilken är den andra faktorn?`, b,
        String.raw`${num(a)} \cdot \square = ${num(p)}`,
        String.raw`\dfrac{${num(p)}}{${num(a)}}`,
        quotientLadder(p, a, b));
    }
    case 2: { // Summan av två tal är 5 000. Det ena talet är 3 750.
      const [s, a] = roundAndPart(rng);
      const terms = [[s, 1], [a, -1]];
      return abstractProblem(
        `Summan av två tal är ${n(s)}. Det ena talet är ${n(a)}. Vilket är det andra talet?`, sumOf(terms),
        String.raw`${num(a)} + \square = ${num(s)}`,
        sumTex(terms, num),
        sumLadder(terms));
    }
    case 3: { // Summan av tre tal är 10 000. Två av talen är 4 200 och 3 300.
      const c = randInt(rng, 1, 9), e = randInt(rng, -1, 4);
      const s = placed(c, e);
      let a, b;
      do { [a, b] = twoDigitPair(rng, e - 2); } while (value(dAdd(a, b)) >= value(s));
      const terms = [[s, 1], [a, -1], [b, -1]];
      return abstractProblem(
        `Summan av tre tal är ${n(s)}. Två av talen är ${n(a)} och ${n(b)}. Vilket är det tredje talet?`, sumOf(terms),
        String.raw`${num(a)} + ${num(b)} + \square = ${num(s)}`,
        sumTex(terms, num),
        sumLadder(terms));
    }
    case 4: { // Differensen mellan två tal är 620. Det större talet är 900.
      const [larger, d] = roundAndPart(rng);
      const terms = [[larger, 1], [d, -1]];
      return abstractProblem(
        `Differensen mellan två tal är ${n(d)}. Det större talet är ${n(larger)}. Vilket är det mindre talet?`, sumOf(terms),
        String.raw`${num(larger)} - \square = ${num(d)}`,
        sumTex(terms, num),
        sumLadder(terms));
    }
    case 5: { // Differensen mellan två tal är 620. Det mindre talet är 280.
      const [smaller, d] = twoDigitPair(rng, randInt(rng, -3, 2));
      const terms = [[smaller, 1], [d, 1]];
      return abstractProblem(
        `Differensen mellan två tal är ${n(d)}. Det mindre talet är ${n(smaller)}. Vilket är det större talet?`, sumOf(terms),
        String.raw`\square - ${num(smaller)} = ${num(d)}`,
        sumTex(terms, num),
        sumLadder(terms));
    }
    case 6: { // Kvoten av två tal är 25. Täljaren är 3 000. Vilken är nämnaren?
      const [denominator, quotient, numerator] = friendlyFactors(rng);
      return abstractProblem(
        `Kvoten av två tal är ${n(quotient)}. Täljaren är ${n(numerator)}. Vilken är nämnaren?`, denominator,
        String.raw`\dfrac{${num(numerator)}}{\square} = ${num(quotient)}`,
        String.raw`\dfrac{${num(numerator)}}{${num(quotient)}}`,
        quotientLadder(numerator, quotient, denominator));
    }
    default: { // Kvoten av två tal är 0,08. Nämnaren är 50. Vilken är täljaren?
      const [denominator, quotient, numerator] = friendlyFactors(rng);
      return abstractProblem(
        `Kvoten av två tal är ${n(quotient)}. Nämnaren är ${n(denominator)}. Vilken är täljaren?`, numerator,
        String.raw`\dfrac{\square}{${num(denominator)}} = ${num(quotient)}`,
        String.raw`${num(quotient)} \cdot ${num(denominator)}`,
        productLadder(quotient, denominator));
    }
  }
}

export const CATEGORIES = [
  { id: 'addsub', name: 'Addition/subtraktion', generate: genAddSub },
  { id: 'powers10', name: 'Gånger/delat med 10, 100, 1000', generate: genPowers10 },
  { id: 'powers01', name: 'Gånger/delat med 0,1; 0,01; 0,001', generate: genPowers01 },
  { id: 'muldecimal', name: 'Multiplikation', generate: genMulDecimal },
  { id: 'shortdiv', name: 'Kort division', generate: genShortDivision },
  { id: 'fraction', name: 'Bråkform', generate: genFraction },
  { id: 'comparison', name: 'Större eller mindre?', generate: genComparison },
  { id: 'scale', name: 'Skala om', generate: genScale },
  { id: 'same', name: 'Samma svar?', generate: genSameProduct },
  { id: 'words', name: 'Summa, differens, produkt, kvot', generate: genWords },
  { id: 'abstract', name: 'Abstrakta problem', generate: genAbstract },
  { id: 'order', name: 'Räkneordning', generate: genOrder },
];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id);

export function categoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}
