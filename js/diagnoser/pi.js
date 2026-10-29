// Svar med π (MLä4, MAr4, MAr6, MAr7, MVo5, MVo6). π är en variabel i algebra.js, så att ett exakt svar ("25π", "π · 5²",
// "16(4 − π)") jämförs för alla värden på π. Ett närmevärde jämförs med värdet för π = 3 och π = 3,1416, rationella tal och
// kvadratiska tal från surd.js, aldrig flyttal. Rättningen står i mark.js (markPi); här läses svaret.
//
// parsePi      ett uttryck i π som träd, eller null. "pi" går också, och en siffra efter π är en faktor ("π5²" är π · 5²).
//              Uttrycket ska ha π och inga andra bokstäver. Facit (box.pi) läses så.
// parsePiReadings  båda läsningarna av det eleven skrev när ett gångertecken saknas efter / ("4/3π · 4³"), som i
//              algebra.js; tom lista när ingen läsning är ett uttryck i π.
// piBounds     { low, high }: trädets värde med π = 3 och med π = 3,1416, det minsta först (64 − 16π blir mindre när π
//              växer), eller null när det inte går att räkna ut.
// piParts      delarna i en kedja ("25π ≈ 78,5 cm²", "A = 25π = 78,5", "ca 79"): texterna mellan ≈, = och ~, utan "Svar:"
//              först, en bokstav och = först och "ca", "cirka" och "ungefär" före en del. null när det inte finns någon del.
// hasPi        sant när en del har π.
// splitUnit    { body, unit }: delen utan enhet sist och enheten i gemener (ett ord, också med ² eller ³, eller % och ‰),
//              eller unit null när delen inte slutar med någon enhet.

import { stripDecoration } from "./parse.js";
import { parseAlgebra, parseAlgebraReadings, variablesOf, evaluate } from "./algebra.js";
import { rat, Unsupported, isNone } from "./value.js";
import { surd, mul, compare } from "./surd.js";
import { unitOf } from "./units.js";

const PI_LOW = surd(rat(3));
const PI_HIGH = surd(rat(31416, 10000));

// "pi" som eget ord eller direkt efter en siffra ("25pi", "25 pi"), men inte inne i ett ord ("pinnar").
const toPi = (text) => String(text ?? "").replace(/(?<!\p{L})pi(?!\p{L})/giu, "π");

export const hasPi = (part) => /π/iu.test(toPi(part));

const baraPi = (tree) => {
  const letters = variablesOf(tree);
  return letters.length === 1 && letters[0] === "π";
};

export function parsePi(text) {
  const tree = parseAlgebra(toPi(text));
  return tree !== null && baraPi(tree) ? tree : null;
}

// x och X mellan två operander är gånger, som i normalize ("25 x π", "π x 5²"): en π-ruta har inga andra bokstäver.
const xGånger = (text) => text.replace(/(?<=[\d)½²³π])\s*x\s*(?=[\d(√½π])/giu, "·");

// Båda läsningarna av det eleven skrev när ett utelämnat gångertecken står efter / ("4/3π · 4³" är både 4/(3π) · 4³ och
// (4/3)π · 4³, parseAlgebraReadings), bara de som har π och inga andra bokstäver. Facit läses med parsePi, som det skrevs.
export function parsePiReadings(text) {
  return parseAlgebraReadings(xGånger(toPi(text))).filter(baraPi);
}

export function piBounds(tree) {
  try {
    const a = evaluate(tree, { π: PI_LOW });
    const b = evaluate(tree, { π: PI_HIGH });
    if (isNone(a) || isNone(b)) return null;
    return ordning(a, b) <= 0 ? { low: a, high: b } : { low: b, high: a };
  } catch (e) {
    if (e instanceof Unsupported) return null;
    throw e;
  }
}

// compare, och för två positiva rötter med olika radikand (2√(96π) ger 24√2 och 24/25 · √1309) deras kvadrater, som är
// rationella. Annat med två olika rötter kastar Unsupported.
function ordning(a, b) {
  const positivRot = (x) => x.p.n === 0n && x.s.n > 0n;
  if (a.s.r === b.s.r || a.s.n === 0n || b.s.n === 0n || !positivRot(a) || !positivRot(b)) return compare(a, b);
  return compare(mul(a, a), mul(b, b));
}

const LEDANDE_VARIABEL = /^\p{L}\s*=(?!=)\s*/u;
const LIKHET = /\s*[≈=~≃≅]+\s*/u;
const UNGEFÄR = /^(?:ca\.?|c:a|cirka|ungefär)\s+/iu;
const MAX_LÄNGD = 200;

export function piParts(text) {
  const rå = stripDecoration(text).replace(LEDANDE_VARIABEL, "");
  if (rå.length > MAX_LÄNGD) return null;
  const parts = toPi(rå).split(LIKHET).map((part) => part.trim().replace(UNGEFÄR, "").trim()).filter((part) => part !== "");
  return parts.length === 0 ? null : parts;
}

// Ett ord sist (inte π), en längdenhet med en exponent ("cm2", "cm^2", "cm²"; som i parse.js bara efter m), eller % och ‰.
// En ensam bokstav är en enhet bara när den är en känd enhet (m, l, g, s, h): "25πr" och "25πr²" är inga svar.
const ENHET_SIST = /\s*((?:[a-zåäöéü]*m(?:\^?[23]|\s*[²³]))|[a-zåäöéü]+|[%‰])$/iu;

export function splitUnit(part) {
  const text = String(part);
  const m = text.match(ENHET_SIST);
  const unit = m === null ? null : m[1].toLowerCase();
  if (unit === null || (/^\p{L}$/u.test(unit) && unitOf(unit) === null)) return { body: text.trim(), unit: null };
  return { body: text.slice(0, m.index).trim(), unit };
}
