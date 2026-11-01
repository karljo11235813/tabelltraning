// The finished 1-minute tests saved in this browser, oldest first:
// { ts, correct, wrong }. Only full tests are kept, so every run in the history
// was done under the same conditions. Unlike the per-fact statistics this list
// is never cleared from the app: it is the student's record of their progress.

import { isFullTest } from './result-scope.js';

const KEY = 'tabelltraning_test_runs';

function isCount(n) {
  return Number.isInteger(n) && n >= 0;
}

function isRun(run) {
  return Boolean(run) && Number.isFinite(run.ts) && isCount(run.correct) && isCount(run.wrong);
}

export function isProgressRun(run, { correct, wrong }) {
  return run.mode === 'time' && isFullTest(run) && correct + wrong > 0;
}

export function loadRuns(store) {
  const saved = store.get(KEY);
  return Array.isArray(saved) ? saved.filter(isRun) : [];
}

export function saveRun(store, run) {
  store.set(KEY, [...loadRuns(store), run]);
}
