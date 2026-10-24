// Bildmodellerna utan DOM: hur många delar en bild får ha, hur de ligger och vilka som är färgade.
// Delarnas index går radvis (rutnät, prickar) eller medurs från kl. 12 (cirkel).
import { reduce } from "./rational.js";
import { pick, range, shuffle } from "./random.js";

export const MODELS = {
  hundraruta: [100],
  cirkel: range(2, 12),
  remsa: [...range(2, 10), 12, 20, 25],
  prickar: range(4, 25),
};
export const MODEL_IDS = Object.keys(MODELS);

const REMSA_GRIDS = { 12: { rows: 3, cols: 4 }, 20: { rows: 4, cols: 5 }, 25: { rows: 5, cols: 5 } };

export function partsOptions(model, den) {
  return MODELS[model].filter((n) => n % den === 0);
}

export function modelsFor(value) {
  const { den } = reduce(value);
  return MODEL_IDS.filter((model) => partsOptions(model, den).length > 0);
}

export function hasPicture(value) {
  return modelsFor(value).length > 0;
}

// Oftast lika många delar som nämnaren, var tredje gång en större multipel (3/4 på 8 delar).
export function chooseParts(rng, model, den) {
  const options = partsOptions(model, den);
  if (!options.includes(den)) return pick(rng, options);
  const larger = options.filter((n) => n > den);
  return larger.length > 0 && rng() >= 2 / 3 ? pick(rng, larger) : den;
}

export function layoutFor(rng, model, parts) {
  if (model === "hundraruta") return { rows: 10, cols: 10 };
  if (model === "cirkel") return { rows: 0, cols: 0 };
  if (model === "prickar") {
    const rows = Math.ceil(parts / 6);
    return { rows, cols: Math.ceil(parts / rows) };
  }
  if (parts === 9 && rng() < 0.5) return { rows: 3, cols: 3 };
  if (parts <= 10) return { rows: 1, cols: parts };
  return { ...REMSA_GRIDS[parts] };
}

export function choosePicture(rng, value) {
  const { den } = reduce(value);
  const model = pick(rng, modelsFor(value));
  const parts = chooseParts(rng, model, den);
  return { model, parts, ...layoutFor(rng, model, parts) };
}

export function shadedCount(value, parts) {
  const { num, den } = reduce(value);
  return (num * parts) / den;
}

// När bilden är frågan: rutnät och prickar är ibland utspridda, cirkel och remsa fylls från början.
export function shadeForQuestion(rng, picture, count) {
  const scatterable =
    picture.model === "hundraruta" || picture.model === "prickar" || (picture.model === "remsa" && picture.rows > 1);
  if (scatterable && rng() < 1 / 3) {
    return shuffle(range(0, picture.parts - 1), rng).slice(0, count).sort((a, b) => a - b);
  }
  return range(0, count - 1);
}

// Bilden på översättningskortet. Samma modell som frågan om den hade en bild.
export function cardPicture(value, questionPicture) {
  const { den } = reduce(value);
  let picture;
  if (questionPicture) {
    const { model, parts, rows, cols } = questionPicture;
    picture = { model, parts, rows, cols };
  } else if (100 % den === 0 && den >= 20) {
    picture = { model: "hundraruta", parts: 100, rows: 10, cols: 10 };
  } else {
    picture = { model: "cirkel", parts: den, rows: 0, cols: 0 };
  }
  return { ...picture, shaded: range(0, shadedCount(value, picture.parts) - 1) };
}
