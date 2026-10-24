// Bygger frågor: ett värde i en form som ska översättas till en annan.
// Riktningen väljs först (jämnt över alla 16), sedan ett värde som är tillåtet för den.
import { DIRECTIONS, isAllowed } from "./directions.js";
import { pickValue } from "./values.js";
import { equal, formatDecimal, formatPercent } from "./rational.js";
import { fractionWords, wordForm } from "./words.js";
import { choosePicture, shadeForQuestion, shadedCount } from "./models.js";
import { pick } from "./random.js";

const ASK = { brak: "som bråk i enklaste form", decimal: "i decimalform", procent: "i procent" };

export function pictureNoun(picture) {
  if (picture.model === "hundraruta") return "hundrarutan";
  if (picture.model === "cirkel") return "cirkeln";
  if (picture.model === "prickar") return "prickarna";
  return picture.rows > 1 ? "rektangeln" : "remsan";
}

// Instruktionen under det stora talet/bilden. Säger alltid i vilken form svaret ska skrivas.
export function promptFor(source, target) {
  if (target.kind === "bild") return `Färga lika stor del av ${pictureNoun(target.picture)}.`;
  if (source.kind === "bild") return `Hur stor del är färgad? Svara ${ASK[target.kind]}.`;
  return `Skriv ${ASK[target.kind]}.`;
}

function buildSource(rng, value, kind) {
  if (kind === "brak") return { kind, num: value.num, den: value.den };
  if (kind === "decimal") return { kind, text: formatDecimal(value) };
  if (kind === "procent") return { kind, text: formatPercent(value) };
  if (kind === "ord") {
    const words = wordForm(rng, value);
    return { kind, text: fractionWords(words.num, words.den) };
  }
  const picture = choosePicture(rng, value);
  return { kind, picture: { ...picture, shaded: shadeForQuestion(rng, picture, shadedCount(value, picture.parts)) } };
}

function buildTarget(rng, value, kind) {
  return kind === "bild" ? { kind, picture: choosePicture(rng, value) } : { kind };
}

export function buildQuestion(rng, value, direction) {
  const source = buildSource(rng, value, direction.source);
  const target = buildTarget(rng, value, direction.target);
  return {
    value: { num: value.num, den: value.den },
    direction: { source: direction.source, target: direction.target },
    source,
    target,
    prompt: promptFor(source, target),
    hasEllipsis: typeof source.text === "string" && source.text.includes("…"),
  };
}

// Varken värdet eller riktningen får vara samma som i frågan som visades nyss.
export function generateQuestion(rng, previous) {
  const directions = previous
    ? DIRECTIONS.filter((d) => d.source !== previous.direction.source || d.target !== previous.direction.target)
    : DIRECTIONS;
  const direction = pick(rng, directions);
  const value = pickValue(
    rng,
    (v) => isAllowed(v, direction.source, direction.target) && !(previous && equal(v, previous.value)),
  );
  return buildQuestion(rng, value, direction);
}

export function createGenerator(rng) {
  return {
    next: (previous = null) => generateQuestion(rng, previous),
    reroll: (question) => buildQuestion(rng, question.value, question.direction),
  };
}
