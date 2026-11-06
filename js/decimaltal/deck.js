// The order of the categories: every chosen category once in shuffled order, then
// a new shuffle, so every test has the same mix. A new round never starts with the
// category that ended the one before.

import { shuffle } from '../representationer/random.js';

export function createDeck(ids, rng) {
  let queue = [];
  let last = null;
  return {
    next() {
      if (queue.length === 0) {
        queue = shuffle(ids, rng);
        if (queue.length > 1 && queue[0] === last) {
          const j = 1 + Math.floor(rng() * (queue.length - 1));
          [queue[0], queue[j]] = [queue[j], queue[0]];
        }
      }
      last = queue.shift();
      return last;
    },
  };
}
