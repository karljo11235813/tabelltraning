// Öva på det du missade, after a Test: the run's weakest facts, the order they
// are practised in and when the practice is over. Pure and tested; the screens
// are in app.js and the HTML in missed-panel.js.
//
// The facts are every wrong one first and then the slowest right ones, up to
// PRACTICE_FACTS. Each comes TIMES_PER_FACT times as its whole family (7 × 8,
// 8 × 7, 56 ÷ 7, 56 ÷ 8) in a mixed order, never twice in a row. Only the first
// try at a question counts: after a miss the right answer has to be typed, but
// that is copying, so a fact whose latest first try was wrong comes back at the
// end, after SPACING other questions, until it is right on the first try.

import { factKey } from './mastery.js';
import { pick, shuffle } from './representationer/random.js';

export const PRACTICE_FACTS = 5;
export const TIMES_PER_FACT = 4;
export const SPACING = 2; // other questions before a missed fact comes back at the end

// answers: the run's answers in order, { a, b, text, given, answer, correct, ms },
// where a and b are the fact's numbers and given is what was typed.
export function pickFacts(answers, n = PRACTICE_FACTS) {
  const facts = new Map(); // in the order they were first seen
  answers.forEach((x) => {
    const key = factKey(x.a, x.b);
    if (!facts.has(key)) facts.set(key, { key, misses: [], wrongCount: 0, slowest: null });
    const f = facts.get(key);
    if (!x.correct) {
      f.wrongCount++;
      const same = f.misses.find(m => m.text === x.text);
      if (same) same.given.push(x.given);
      else f.misses.push({ text: x.text, given: [x.given], answer: x.answer });
    } else if (!f.slowest || x.ms > f.slowest.ms) {
      f.slowest = { key, text: x.text, answer: x.answer, ms: x.ms };
    }
  });
  const all = [...facts.values()];
  // The sort is stable, so facts missed equally often keep the order they came in.
  const wrong = all.filter(f => f.wrongCount > 0).sort((x, y) => y.wrongCount - x.wrongCount);
  const slow = all.filter(f => f.wrongCount === 0).map(f => f.slowest)
    .sort((x, y) => y.ms - x.ms)
    .slice(0, Math.max(0, n - wrong.length));
  return {
    wrong: wrong.map(({ key, misses }) => ({ key, misses })),
    slow,
    keys: [...wrong.slice(0, n).map(f => f.key), ...slow.map(f => f.key)],
  };
}

// ops is the run's operation: 'mul', 'div' or 'mix'. Nothing is divided by 0.
export function familyOf(a, b, ops) {
  const key = factKey(a, b);
  const product = a * b;
  const forms = [];
  const add = (text, answer) => {
    if (!forms.some(f => f.text === text)) forms.push({ key, text, answer });
  };
  if (ops !== 'div') {
    add(a + ' × ' + b + ' =', product);
    add(b + ' × ' + a + ' =', product);
  }
  if (ops !== 'mul') {
    if (a !== 0) add(product + ' ÷ ' + a + ' =', b);
    if (b !== 0) add(product + ' ÷ ' + b + ' =', a);
  }
  return forms;
}

const familyOfKey = (key, ops) => familyOf(...key.split('x').map(Number), ops);

export function practicePlan(keys, ops, rng = Math.random) {
  const forms = {};
  const left = {};
  keys.forEach(key => {
    const family = shuffle(familyOfKey(key, ops), rng);
    forms[key] = Array.from({ length: TIMES_PER_FACT }, (_, i) => ({ ...family[i % family.length] }));
    left[key] = TIMES_PER_FACT;
  });
  // After taking a fact, the rest must still fit with no fact twice in a row: the
  // next question can't be the same fact, so it may have at most half of what is
  // left, and every other fact at most half rounded up.
  const fits = (key, rest) => keys.every(other => other === key
    ? left[other] - 1 <= Math.floor(rest / 2)
    : left[other] <= Math.ceil(rest / 2));
  const plan = [];
  let last = null;
  for (let n = keys.length * TIMES_PER_FACT; n > 0; n--) {
    const open = keys.filter(k => left[k] > 0 && k !== last);
    const safe = open.filter(k => fits(k, n - 1));
    const key = pick(rng, safe.length ? safe : open.length ? open : keys.filter(k => left[k] > 0));
    plan.push(forms[key][TIMES_PER_FACT - left[key]]);
    left[key]--;
    last = key;
  }
  return plan;
}

export function createSession(plan, ops, rng = Math.random) {
  const queue = plan.slice();
  const keys = [...new Set(plan.map(f => f.key))];
  const lastTryRight = {};
  const missedAt = {};
  const recent = [];
  const results = [];
  let current = queue.shift() || null;
  let shown = current ? 1 : 0;
  let retyping = false;

  const pending = () => keys.filter(k => lastTryRight[k] === false);

  // The oldest miss comes back first, once SPACING other questions have passed;
  // until then a fact that is already right goes in between. With too few facts
  // for that, the gap gets shorter.
  function nextKey() {
    const waiting = pending().sort((x, y) => missedAt[x] - missedAt[y]);
    if (waiting.length === 0) return null;
    for (let gap = SPACING; gap >= 0; gap--) {
      const near = gap > 0 ? recent.slice(-gap) : [];
      const ready = waiting.filter(k => !near.includes(k));
      if (ready.length) return ready[0];
      const spacers = keys.filter(k => !waiting.includes(k) && !near.includes(k));
      if (spacers.length) return pick(rng, spacers);
    }
    return waiting[0];
  }

  function advance() {
    recent.push(current.key);
    const key = queue.length ? null : nextKey();
    current = queue.length ? queue.shift() : key ? { ...pick(rng, familyOfKey(key, ops)) } : null;
    if (current) shown++;
  }

  return {
    get current() { return current; },
    get retyping() { return retyping; },
    get done() { return current === null; },
    get results() { return results; },
    get left() { return pending().length; },
    get position() { return { index: shown, total: plan.length, extra: shown > plan.length }; },
    submit(value, ms) {
      if (!current) return { correct: false, counted: false };
      const correct = value === current.answer;
      if (retyping) {
        if (correct) {
          retyping = false;
          advance();
        }
        return { correct, counted: false };
      }
      results.push({ key: current.key, correct, ms });
      lastTryRight[current.key] = correct;
      if (correct) {
        advance();
      } else {
        missedAt[current.key] = shown;
        retyping = true;
      }
      return { correct, counted: true };
    },
  };
}

function median(values) {
  if (values.length === 0) return null;
  const sorted = values.slice().sort((x, y) => x - y);
  const mid = sorted.length >> 1;
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Per fact: first tries, how many were right and the typical time of the right ones.
export function summarize(keys, results) {
  return keys.map(key => {
    const mine = results.filter(r => r.key === key);
    const right = mine.filter(r => r.correct);
    return { key, tries: mine.length, right: right.length, typicalMs: median(right.map(r => r.ms)) };
  });
}
