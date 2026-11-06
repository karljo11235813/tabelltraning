// The finished full tests saved in this browser, oldest first:
// { ts, seconds, correct, wrong, byCategory: { <id>: { correct, wrong } } }.
// Only full tests are kept (all categories, the set length), so every run in the
// graph was done under the same conditions. The page never clears the list.

import { CATEGORY_IDS } from './categories.js';
import { TEST_SECONDS } from './settings.js';

export const RUNS_KEY = 'decimaltal.testRuns';

function isCount(n) {
  return Number.isInteger(n) && n >= 0;
}

function isRun(run) {
  return Boolean(run) && Number.isFinite(run.ts) && isCount(run.seconds) && run.seconds > 0
    && isCount(run.correct) && isCount(run.wrong) && typeof run.byCategory === 'object' && run.byCategory !== null;
}

export function isFullTest({ categories, seconds }) {
  return seconds === TEST_SECONDS && CATEGORY_IDS.every((id) => categories.includes(id));
}

export function shouldSave({ categories, seconds, tally }) {
  return isFullTest({ categories, seconds }) && tally.correct + tally.wrong > 0;
}

export function makeRun({ ts, seconds, tally }) {
  return { ts, seconds, correct: tally.correct, wrong: tally.wrong, byCategory: tally.byCategory };
}

export function loadRuns(store) {
  const saved = store.get(RUNS_KEY);
  return Array.isArray(saved) ? saved.filter(isRun) : [];
}

// false when the browser would not save it (private window, blocked storage).
export function saveRun(store, run) {
  return store.set(RUNS_KEY, [...loadRuns(store), run]);
}

// After a change of TEST_SECONDS the old runs stay saved but are not shown.
export function shownRuns(runs, seconds = TEST_SECONDS) {
  return runs.filter((run) => run.seconds === seconds);
}
