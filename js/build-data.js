// Anchor-and-strategy learning path step order and metadata.
// Rationale: docs/multiplikationstabeller_sekvensering_forskningsoversikt.md
// — anchors (2, 10, 5) -> 0/1 and squares -> derive the rest via strategies.

export const BUILD_STEPS_META = [
  { kind: 'table',   addsTables: [2] },
  { kind: 'table',   addsTables: [10] },
  { kind: 'table',   addsTables: [5] },
  { kind: 'combo',   addsTables: [0, 1] },
  { kind: 'squares', addsTables: [] },
  { kind: 'table',   addsTables: [3] },
  { kind: 'table',   addsTables: [4] },
  { kind: 'table',   addsTables: [9] },
  { kind: 'table',   addsTables: [6] },
  { kind: 'table',   addsTables: [8] },
  { kind: 'table',   addsTables: [7] },
];

export const BUILD_FOCUS_LEN = 6;
export const BUILD_MIX_LEN = 10;
export const SQUARE_NUMBERS = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // all squares trained in the "Kvadrater" step

export function buildStepsUpTo(index) {
  const nums = new Set();
  let includeSquares = false;
  for (let i = 0; i <= index; i++) {
    const step = BUILD_STEPS_META[i];
    if (step.kind === 'squares') includeSquares = true;
    else step.addsTables.forEach(n => nums.add(n));
  }
  return { nums: Array.from(nums), includeSquares };
}
