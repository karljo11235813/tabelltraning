// Bråktrappans kategorier i ordning. Ordningen är ett förslag: alla kategorier är öppna från kartan.
import { mulberry32 } from "../../representationer/random.js";
import { DEL1 } from "./del1.js";
import { DEL2 } from "./del2.js";
import { DEL3 } from "./del3.js";
import { DEL4 } from "./del4.js";

export const PARTS = [
  { part: 1, title: "Bråk som tal" },
  { part: 2, title: "Addition och subtraktion" },
  { part: 3, title: "Multiplikation" },
  { part: 4, title: "Division" },
];

export const CATEGORIES = [...DEL1, ...DEL2, ...DEL3, ...DEL4];

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id) ?? null;
}

// Nivån är sviten (0–2). En ny fråga har inte samma tal som den förra.
export function generateQuestion(category, rng, level, previous = null) {
  let question = category.generate(rng, level);
  for (let i = 0; i < 50 && previous && question.key === previous.key; i++) question = category.generate(rng, level);
  return { ...question, level };
}

// Exemplet är samma nivå 1-fråga för alla.
export function exampleQuestion(category) {
  return generateQuestion(category, mulberry32(category.exampleSeed), 1);
}
