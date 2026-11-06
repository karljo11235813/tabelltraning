// The numbers to tweak once you have seen how hard the test is.
//
// TEST_SECONDS is the length of the test. LEVELS are reached with at least
// minCorrect right AND at most maxWrong wrong, and each level must be at least as
// hard as the one below. Levels are worked out when a result is shown, never
// saved, so old tests are graded by the numbers here. Changing TEST_SECONDS hides
// the tests of the old length from the graph (they stay saved); change the levels
// with it.

export const TEST_SECONDS = 120;

export const LEVELS = [
  { id: 'almost', minCorrect: 10, maxWrong: 4 },
  { id: 'acceptable', minCorrect: 15, maxWrong: 3 },
  { id: 'more', minCorrect: 22, maxWrong: 2 },
  { id: 'pro', minCorrect: 30, maxWrong: 1 },
];

// This level and the ones above it count as acceptable.
export const ACCEPTABLE_ID = 'acceptable';
