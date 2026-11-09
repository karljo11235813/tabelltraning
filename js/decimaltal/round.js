// One round of questions, in Öva or in a test: the question on screen, the answers
// and what they add up to. It knows no time and no DOM: the page says when to go
// on (next) and when the time is up (finish), after which nothing is recorded.

import { categoryById } from './categories.js';
import { checkDecimalAnswer } from './decimal.js';
import { createDeck } from './deck.js';

export function createRound({ categories, rng, generate = (id, r) => categoryById(id).generate(r) }) {
  const deck = createDeck(categories, rng);
  const counts = { correct: 0, wrong: 0, byCategory: {} };
  const missed = [];
  let current = null;
  let answered = false;
  let finished = false;

  function draw() {
    const category = deck.next();
    current = { category, problem: generate(category, rng) };
    answered = false;
  }
  draw();

  function record(correct, wrongAnswer) {
    const { category, problem } = current;
    answered = true;
    const own = counts.byCategory[category] || (counts.byCategory[category] = { correct: 0, wrong: 0 });
    if (correct) {
      counts.correct++;
      own.correct++;
    } else {
      counts.wrong++;
      own.wrong++;
      missed.push({ category, problem, ...wrongAnswer });
    }
  }

  return {
    current: () => current,

    // null when nothing was recorded: an empty answer, a question already
    // answered, or a round that is over.
    answer(raw) {
      const given = raw.trim();
      if (finished || answered || given === '') return null;
      const { problem } = current;
      // A choice is its button's word, a multi the picked letters in order ('ADE').
      const correct = problem.answerType === 'decimal'
        ? checkDecimalAnswer(given, problem.answer)
        : given === problem.answer;
      record(correct, { given });
      return { correct };
    },

    // Hoppa över counts as a wrong answer, so it costs a point in the test. It
    // only saves the time of guessing. null as for answer.
    skip() {
      if (finished || answered) return null;
      record(false, { given: '', skipped: true });
      return { correct: false, skipped: true };
    },

    next() {
      if (!finished) draw();
    },

    finish() {
      finished = true;
    },

    tally: () => ({
      correct: counts.correct,
      wrong: counts.wrong,
      byCategory: Object.fromEntries(Object.entries(counts.byCategory).map(([id, c]) => [id, { ...c }])),
    }),

    missed: () => missed.slice(),
  };
}
