// Vilka översättningar ett värde får förekomma i. Enda stället där reglerna finns:
// generatorn, omfrågorna och testerna använder alla isAllowed.
import { reduce, isTerminating } from "./rational.js";
import { hasPicture } from "./models.js";

export const SOURCES = ["brak", "decimal", "procent", "bild", "ord"];
export const TARGETS = ["brak", "decimal", "procent", "bild"];
export const DIRECTIONS = SOURCES.flatMap((source) =>
  TARGETS.filter((target) => target !== source).map((target) => ({ source, target })),
);

const NUMERIC = ["decimal", "procent"];

export function isAllowed(value, source, target) {
  if (!SOURCES.includes(source) || !TARGETS.includes(target) || source === target) return false;
  const reduced = reduce(value);
  // Ett upprepande tal går inte att skriva exakt, så det får aldrig vara svaret.
  if (!isTerminating(reduced) && NUMERIC.includes(target)) return false;
  // 0,285714… känner man inte igen utan miniräknare.
  if (reduced.den % 7 === 0 && NUMERIC.includes(source)) return false;
  if ((source === "bild" || target === "bild") && !hasPicture(reduced)) return false;
  return true;
}
