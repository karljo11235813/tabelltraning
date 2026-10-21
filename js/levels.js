// Self-marking levels for the 1-minute test: a level is reached with at least
// minCorrect right AND at most maxWrong wrong. Each level is at least as hard as
// the one below, so reached levels always form an unbroken run from the start.
export const LEVELS = [
  { id: 'almost', minCorrect: 20, maxWrong: 5 },
  { id: 'acceptable', minCorrect: 25, maxWrong: 3 },
  { id: 'more', minCorrect: 40, maxWrong: 2 },
  { id: 'pro', minCorrect: 60, maxWrong: 0 },
  { id: 'god', minCorrect: 80, maxWrong: 0 },
  { id: 'record', minCorrect: 216, maxWrong: 0 },
];

export function assessLevels({ correct, wrong }) {
  const reached = LEVELS.map(l => correct >= l.minCorrect && wrong <= l.maxWrong);
  const highest = reached.lastIndexOf(true);
  return { correct, wrong, reached, highest };
}

function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k]));
}

export function levelRequirement(level, s) {
  return fill(level.maxWrong === 0 ? s.levelReqNoWrong : s.levelReq, { n: level.minCorrect, m: level.maxWrong });
}

// What is missing for the next level: more right answers, fewer wrong, or both.
export function levelHint({ correct, wrong, highest }, s) {
  const index = highest + 1;
  if (index >= LEVELS.length) return s.levelTop;
  const level = LEVELS[index];
  const values = { name: s.levelNames[index], n: level.minCorrect - correct, m: level.maxWrong, w: wrong };
  const needMore = correct < level.minCorrect;
  const tooManyWrong = wrong > level.maxWrong;
  if (needMore && tooManyWrong) return fill(s.levelNextBoth, values);
  if (tooManyWrong) return fill(s.levelNextWrong, values);
  return fill(s.levelNextCorrect, values);
}
