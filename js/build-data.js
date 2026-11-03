// Anchor-and-strategy learning path step order and metadata.
// Rationale: docs/multiplikationstabeller_sekvensering_forskningsoversikt.md
// — anchors (2, 10, 5) -> 0/1 and squares -> derive the rest via strategies.

export const BUILD_STEPS_META = [
  { kind: 'table',   addsTables: [2] },
  { kind: 'table',   addsTables: [10] },
  { kind: 'table',   addsTables: [5] },
  { kind: 'table',   addsTables: [11] },
  { kind: 'combo',   addsTables: [0, 1] },
  { kind: 'squares', addsTables: [] },
  { kind: 'table',   addsTables: [3] },
  { kind: 'table',   addsTables: [4] },
  { kind: 'table',   addsTables: [9] },
  { kind: 'table',   addsTables: [6] },
  { kind: 'table',   addsTables: [12] },
  { kind: 'table',   addsTables: [8] },
  { kind: 'table',   addsTables: [7] },
];

// The rounds of every step, in order: × in order, × shuffled with every fact twice, ÷ in order, ÷ shuffled once, and
// the mix with earlier steps (× and ÷).
export const BUILD_PHASES = ['order', 'shuffle2', 'divOrder', 'divShuffle', 'mix'];
export const BUILD_MIX_LEN = 20;
export const SQUARE_NUMBERS = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // all squares trained in the "Kvadrater" step

function shuffle(items, rng) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// count facts from pool, each once before any comes back.
function draw(pool, count, rng) {
  const out = [];
  while (out.length < count) out.push(...shuffle(pool, rng));
  return out.slice(0, count);
}

// The division for the fact [a, b], where a is the table: divide by the table (24 ÷ 2 = 12). Nothing can be divided
// by 0, so the 0 table's divisions are 0 ÷ n = 0.
export function divisionFact(a, b) {
  return a === 0 ? { dividend: 0, divisor: b, quotient: 0 } : { dividend: a * b, divisor: a, quotient: b };
}

// Every fact the steps before this one introduced, each once.
export function previousFactPairs(index, maxTable) {
  const seen = new Set();
  const pairs = [];
  for (let i = 0; i < index; i++) {
    for (const [a, b] of stepFactPairs(BUILD_STEPS_META[i], maxTable)) {
      if (seen.has(a + 'x' + b)) continue;
      seen.add(a + 'x' + b);
      pairs.push([a, b]);
    }
  }
  return pairs;
}

// The mix round: BUILD_MIX_LEN problems taking turns between this step and the steps before it (new, old, new, old …),
// with half × and half ÷ among the new and among the old. The first step has nothing before it, so all of it is new.
export function mixPlan(index, maxTable, rng = Math.random) {
  const group = (pool, count) => {
    const ops = shuffle(Array.from({ length: count }, (_, i) => (i < count / 2 ? 'mul' : 'div')), rng);
    return draw(pool, count, rng).map(([a, b], i) => ({ a, b, op: ops[i] }));
  };
  const fresh = stepFactPairs(BUILD_STEPS_META[index], maxTable);
  const old = previousFactPairs(index, maxTable);
  if (old.length === 0) return group(fresh, BUILD_MIX_LEN);
  const half = BUILD_MIX_LEN / 2;
  const olds = group(old, half);
  return group(fresh, half).flatMap((item, i) => [item, olds[i]]);
}

// The problems of one round as { a, b, op }, where op is 'mul' or 'div' and a is the table.
export function phasePlan(phase, index, maxTable, rng = Math.random) {
  const pairs = stepFactPairs(BUILD_STEPS_META[index], maxTable);
  const as = (op) => ([a, b]) => ({ a, b, op });
  if (phase === 'order') return pairs.map(as('mul'));
  if (phase === 'shuffle2') return shuffle(pairs.concat(pairs), rng).map(as('mul'));
  if (phase === 'divOrder') return pairs.map(as('div'));
  if (phase === 'divShuffle') return shuffle(pairs, rng).map(as('div'));
  return mixPlan(index, maxTable, rng);
}

// Every fact this step introduces, as [a, b] pairs, in a fixed canonical
// order (table by table, factor 1..maxTable; squares in SQUARE_NUMBERS
// order) — used to drive the "in order" and "shuffled, twice" rounds.
export function stepFactPairs(step, maxTable) {
  if (step.kind === 'squares') {
    return SQUARE_NUMBERS.map(n => [n, n]);
  }
  const pairs = [];
  for (const table of step.addsTables) {
    for (let n = 1; n <= maxTable; n++) pairs.push([table, n]);
  }
  return pairs;
}

// The whole table on the step's intro screen, as columns of [a, b] pairs: one column per table when the step has two
// (0:or och 1:or), otherwise the facts split in two columns with the first half on the left.
export function stepTableColumns(step, maxTable) {
  const pairs = stepFactPairs(step, maxTable);
  if (step.addsTables.length > 1) return step.addsTables.map((table) => pairs.filter(([a]) => a === table));
  const half = Math.ceil(pairs.length / 2);
  return [pairs.slice(0, half), pairs.slice(half)];
}
