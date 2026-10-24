// Slumptal som kan återskapas med ett frö, så att testerna alltid ser samma frågor.

export function mulberry32(seed) {
  let s = seed | 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function range(lo, hi) {
  return Array.from({ length: Math.max(0, hi - lo + 1) }, (_, i) => lo + i);
}

export function randInt(rng, lo, hi) {
  return lo + Math.floor(rng() * (hi - lo + 1));
}

export function pick(rng, items) {
  return items[Math.floor(rng() * items.length)];
}

// items: [{ weight, … }]
export function pickWeighted(rng, items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let r = rng() * total;
  for (const item of items) {
    r -= item.weight;
    if (r < 0) return item;
  }
  return items[items.length - 1];
}

export function shuffle(items, rng) {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
