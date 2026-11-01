// What a finished round covered, for the "what was tested" block on the result
// screen: badge, operation, format and a 1–12 strip of included tables.
// The gold test look needs a run started from Test AND full coverage, so a
// partial run can never be shown off as a full test.

const MAX_TABLE = 12;

function tableStrip(tables) {
  const chosen = new Set(tables);
  return Array.from({ length: MAX_TABLE }, (_, i) => ({ n: i + 1, included: chosen.has(i + 1) }));
}

export function isFullTest({ origin, operation, tables }) {
  return origin === 'test' && operation === 'mix' && tableStrip(tables).every((t) => t.included);
}

export function describeScope({ origin, operation, tables, mode }, s) {
  const strip = tableStrip(tables);
  const isTest = isFullTest({ origin, operation, tables });

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

// Round score for both Test and Öva: one point per right answer, minus one per wrong.
export function roundPoints({ correct, wrong }) {
  return correct - wrong;
}

export function formatPoints(n) {
  return n < 0 ? '−' + (-n) : String(n);
}
