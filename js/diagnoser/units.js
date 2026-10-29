// Enheter för Mätning: längd, area, volym, massa och tid med exakta faktorer. Allt räknas med value.js, aldrig flyttal.
//
// canonicalUnit  enheten i den form som jämförs: gemener, utan punkt sist, exponenten som ² och ³ ("cm2", "cm^2" och
//                "cm²" blir "cm²") och ord som förkortning ("centimeter" blir "cm", "kvadratcentimeter" blir "cm²",
//                "kubikmeter" blir "m³", "timmar" blir "h"). Annat ("kr/tim", "procent") blir bara gemener.
// unitOf         { dimension, factor } för en känd enhet, med faktorn mot m, m², m³, g eller s; annars null.
// unitsFor       ett units-fält till en ruta: alla enheter med samma dimension och faktorn mot enheten, som text
//                ("g" ger { mg: "1/1000", g: "1", hg: "100", kg: "1000", ton: "1000000" }). Kastar för en okänd enhet.
// unitRowHolds   som rowHolds i markup.js, för en rad med enheter ("2 kg = [a] g", "[a] cm = 3 dm", "{1|2} liter = [a] cl"):
//                sant när sidorna är lika stora efter omräkning, falskt när de inte är det eller har olika dimension,
//                null när raden inte är en sådan rad (inget =, en sida utan tal eller med en enhet som inte finns här).

import { rat, mul, div, equals, isNone } from "./value.js";
import { parseExpr } from "./parse.js";
import { markupToExpr } from "./markup.js";

// Faktorn mot grundenheten som [täljare, nämnare]. mil, ton och liter finns med; ar ("a") och tum inte.
const TABLE = {
  längd: { mm: [1, 1000], cm: [1, 100], dm: [1, 10], m: [1, 1], km: [1000, 1], mil: [10000, 1] },
  area: { "mm²": [1, 1000000], "cm²": [1, 10000], "dm²": [1, 100], "m²": [1, 1], "km²": [1000000, 1], ha: [10000, 1] },
  volym: {
    "mm³": [1, 1000000000], "cm³": [1, 1000000], "dm³": [1, 1000], "m³": [1, 1],
    ml: [1, 1000000], cl: [1, 100000], dl: [1, 10000], l: [1, 1000], hl: [1, 10],
  },
  massa: { mg: [1, 1000], g: [1, 1], hg: [100, 1], kg: [1000, 1], ton: [1000000, 1] },
  tid: { s: [1, 1], min: [60, 1], h: [3600, 1], dygn: [86400, 1] },
};

const UNITS = new Map(
  Object.entries(TABLE).flatMap(([dimension, units]) => Object.entries(units).map(([unit, [n, d]]) => [unit, { dimension, factor: rat(n, d) }])),
);

// Orden och de andra förkortningarna för samma enhet.
const WORDS = {
  millimeter: "mm", centimeter: "cm", decimeter: "dm", meter: "m", kilometer: "km",
  milliliter: "ml", centiliter: "cl", deciliter: "dl", liter: "l", hektoliter: "hl",
  milligram: "mg", gram: "g", gr: "g", hekto: "hg", hektogram: "hg", kilo: "kg", kilogram: "kg",
  hektar: "ha", kvm: "m²",
  sek: "s", sekund: "s", sekunder: "s", minut: "min", minuter: "min", tim: "h", timme: "h", timma: "h", timmar: "h",
};
const LENGTHS = new Set(["mm", "cm", "dm", "m", "km"]);
const EXPONENT = { 2: "²", 3: "³", "²": "²", "³": "³" };

export function canonicalUnit(text) {
  const u = String(text ?? "").toLowerCase().trim().replace(/\.$/, "").replace(/\s+/g, " ");
  // "cm2", "cm^2" och "cm ²" är cm²; bara en längd får en exponent.
  const powered = u.match(/^(\p{L}+)(?:\^?([23])|\s*([²³]))$/u);
  if (powered) {
    const base = WORDS[powered[1]] ?? powered[1];
    return LENGTHS.has(base) ? base + EXPONENT[powered[2] ?? powered[3]] : u;
  }
  // "kvadratcentimeter" och "kubikmeter".
  const named = u.match(/^(kvadrat|kubik)(\p{L}+)$/u);
  if (named && LENGTHS.has(WORDS[named[2]])) return WORDS[named[2]] + (named[1] === "kvadrat" ? "²" : "³");
  return WORDS[u] ?? u;
}

export function unitOf(text) {
  return UNITS.get(canonicalUnit(text)) ?? null;
}

// Ett exakt värde som text för ett units-fält ("1/1000", "100").
const asText = (v) => (v.d === 1n ? String(v.n) : `${v.n}/${v.d}`);

export function unitsFor(unit) {
  const own = unitOf(unit);
  if (own === null) throw new TypeError(`Okänd enhet: ${unit}`);
  return Object.fromEntries(
    [...UNITS].filter(([, u]) => u.dimension === own.dimension).map(([name, u]) => [name, asText(div(u.factor, own.factor))]),
  );
}

// Talet och enheten sist på en sida ("2 kg", "(2000) g", "((1)/(2)) liter", "2 m^2"): värdet i grundenheten och
// dimensionen, eller null.
const SIDE = /^(.*?)\s*(\p{L}+(?:\^?[23]|\s*[²³])?)$/u;

function quantityOf(side) {
  const m = side.trim().match(SIDE);
  if (m === null || m[1] === "") return null;
  const unit = unitOf(m[2]);
  const value = parseExpr(m[1]);
  if (unit === null || value === null || isNone(value)) return null;
  return { dimension: unit.dimension, value: mul(value, unit.factor) };
}

// Kastar om en ruta saknas i fill, som rowHolds.
export function unitRowHolds(markup, fill) {
  const sides = markupToExpr(markup, fill).split("=");
  if (sides.length < 2) return null;
  const quantities = sides.map(quantityOf);
  if (quantities.some((q) => q === null)) return null;
  const [first] = quantities;
  return quantities.every((q) => q.dimension === first.dimension && equals(q.value, first.value));
}
