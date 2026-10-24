// En omgång: frågor från generatorn, omfrågor för fel svar, poäng och rätt per svarsform.
// Ingen DOM här, så logiken kan testas i Node.
import { check } from "./check.js";
import { randInt } from "./random.js";

export function createSession({ mode, generator, rng = Math.random, now = () => Date.now() }) {
  const startedAt = now();
  const history = []; // { target, correct, reason }
  let retries = []; // { question, dueIn } — dueIn = antal visningar kvar tills frågan kommer igen
  let current = null;
  let answered = true;
  let correct = 0;
  let wrong = 0;

  function draw() {
    for (const r of retries) r.dueIn -= 1;
    const due = retries.findIndex((r) => r.dueIn <= 0);
    if (due !== -1) {
      const [r] = retries.splice(due, 1);
      return generator.reroll(r.question);
    }
    return generator.next(current);
  }

  function state() {
    const byTarget = {};
    for (const h of history) {
      byTarget[h.target] ??= { correct: 0, total: 0 };
      byTarget[h.target].total += 1;
      if (h.correct) byTarget[h.target].correct += 1;
    }
    const s = { correct, wrong, answered: history.length, elapsedMs: now() - startedAt, byTarget };
    s.score = mode.score(s);
    return s;
  }

  return {
    next() {
      if (mode.isOver(state())) {
        current = null;
        return null;
      }
      current = draw();
      answered = false;
      return current;
    },
    answer(answer) {
      if (!current || answered) return null;
      const result = check(current, answer);
      if (!result.scored) return result;
      answered = true;
      history.push({ target: current.target.kind, correct: result.correct, reason: result.reason });
      if (result.correct) {
        correct += 1;
      } else {
        wrong += 1;
        // dueIn 4–6 ger 3–5 andra frågor emellan.
        if (mode.retryWrong) retries.push({ question: current, dueIn: randInt(rng, 4, 6) });
      }
      return result;
    },
    question: () => current,
    state,
  };
}
