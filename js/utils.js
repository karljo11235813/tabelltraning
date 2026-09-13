// Small, stateless math helpers shared across problem generation.

export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffled(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
