// What a finished round covered, for the "what was tested" block on the result
// screen: badge, operation, format and a 1–12 strip of included tables.
// The gold test look needs a run started from Test AND full coverage, so a
// partial run can never be shown off as a full test.

const MAX_TABLE = 12;

export function describeScope({ origin, operation, tables, mode }, s) {
  const chosen = new Set(tables);
  const strip = Array.from({ length: MAX_TABLE }, (_, i) => ({ n: i + 1, included: chosen.has(i + 1) }));
  const fullCoverage = strip.every((t) => t.included) && operation === 'mix';
  const isTest = origin === 'test' && fullCoverage;

  const operationText = operation === 'mul' ? s.scopeOpMul : operation === 'div' ? s.scopeOpDiv : s.scopeOpMix;

  return {
    isTest,
    badge: isTest ? s.scopeBadgeTest : s.scopeBadgePractice,
    band: isTest ? s.scopeTestBand : null,
    operationText,
    formatText: mode === 'time' ? s.mode1min : s.mode100,
    tables: strip,
  };
}

// Test score: one point per right answer, minus one per wrong. Only test runs
// are scored this way; practice returns null so no points are shown.
export function testPoints({ origin, correct, wrong }) {
  return origin === 'test' ? correct - wrong : null;
}

export function formatPoints(n) {
  return n < 0 ? '−' + (-n) : String(n);
}
