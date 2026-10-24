// Värdepoolen: förkortade bråk 0 < a/b < 1 med "snälla" nämnare, viktade mot de lätta.
import { gcd } from "./rational.js";
import { pick, pickWeighted, range } from "./random.js";

export const GROUPS = [
  { name: "easy", weight: 50, dens: [2, 3, 4, 5, 10] },
  { name: "medium", weight: 35, dens: [6, 8, 9, 20, 25] },
  { name: "harder", weight: 15, dens: [7, 50, 100] },
];

export function valuesWithDen(den) {
  return range(1, den - 1)
    .filter((num) => gcd(num, den) === 1)
    .map((num) => ({ num, den }));
}

export const ALL_VALUES = GROUPS.flatMap((g) => g.dens.flatMap(valuesWithDen));

// Grupp efter vikt, sedan nämnare, sedan täljare — bara bland värden som accept godkänner.
export function pickValue(rng, accept = () => true) {
  const groups = GROUPS.map((g) => ({
    weight: g.weight,
    byDen: g.dens.map((den) => valuesWithDen(den).filter(accept)).filter((values) => values.length > 0),
  })).filter((g) => g.byDen.length > 0);
  if (groups.length === 0) return null;
  return pick(rng, pick(rng, pickWeighted(rng, groups).byDen));
}
