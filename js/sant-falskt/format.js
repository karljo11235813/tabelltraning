// Små formateringshjälpare för klocka, poäng och försök.

export function formatClock(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function formatScore(n) {
  return n < 0 ? `−${-n}` : String(n);
}

// Siffrorna i resultatrutorna som syns under hela omgången.
export function scoreTiles(state) {
  return { score: formatScore(state.score), correct: String(state.correct), wrong: String(state.wrong) };
}

const ORDINALS = ["", "första", "andra", "tredje", "fjärde", "femte", "sjätte", "sjunde", "åttonde", "nionde", "tionde"];

export function attemptLabel(n) {
  if (n <= 1) return "";
  return n < ORDINALS.length ? `Rätt på ${ORDINALS[n]} försöket` : `Rätt på försök ${n}`;
}
