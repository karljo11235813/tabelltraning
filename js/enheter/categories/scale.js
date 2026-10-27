// Skala skrivs alltid bild : verklighet och förkortas till 1 : n (förminskning) eller n : 1 (förstoring).
// Tabellen bild | verklighet med pilen · n eller / n står i varje lösning.
import { pick } from "../../representationer/random.js";
import { dec, formatDecimal } from "../decimal.js";

export const REDUCTIONS = [2, 4, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000, 20000, 25000, 50000, 100000, 200000, 250000, 500000, 1000000, 2500000];
export const ENLARGEMENTS = [2, 5, 10, 20, 50, 100, 200, 500, 1000, 5000];

export const NO_UNIT_LINE = "Skalan har ingen enhet. Den gäller bara när båda längderna har samma enhet.";

const int = (n) => formatDecimal(dec(n));

export const isReduction = ([a]) => a === 1;
export const scaleFactor = ([a, b]) => Math.max(a, b);

// L0 bara förminskningar, sedan förstoring varannan gång. Kategorier som provar om tills talen
// passar väljer enlarge innan de provar, så att andelen förstoringar inte snedvrids.
export function pickScale(rng, level, { maxN = Infinity, minN = 2, enlarge = level > 0 && rng() < 0.5 } = {}) {
  const n = pick(rng, (enlarge ? ENLARGEMENTS : REDUCTIONS).filter((x) => x >= minN && x <= maxN));
  return enlarge ? [n, 1] : [1, n];
}

export function scaleText([a, b]) {
  return `${int(a)} : ${int(b)}`;
}

export function scaleTableModel({ scale, known = null, answer = null, unit = null }) {
  const n = scaleFactor(scale);
  const red = isReduction(scale);
  let bottom = [null, null];
  if (known) bottom = known.side === "bild" ? [known.amount, answer] : [answer, known.amount];
  return {
    columns: ["bild", "verklighet"],
    top: scale,
    bottom,
    unit: unit ?? known?.unit ?? null,
    toReal: `${red ? "·" : "/"} ${int(n)}`,
    toImage: `${red ? "/" : "·"} ${int(n)}`,
  };
}

export function directionSentence(scale, from) {
  const n = int(scaleFactor(scale));
  const multiply = (from === "bild") === isReduction(scale);
  return from === "bild"
    ? `Från bild till verklighet: ${multiply ? "multiplicera" : "dela"} med ${n}.`
    : `Från verklighet till bild: ${multiply ? "multiplicera" : "dela"} med ${n}.`;
}
