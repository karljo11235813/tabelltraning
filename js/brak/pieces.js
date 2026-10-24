// Byggstenarna i frågor och lösningar: text, tal, bråk, blandade tal, räknetecken, bilder och rutor.
// Rena objekt utan DOM. render.js ritar dem, testerna räknar på dem.
import { range } from "../representationer/random.js";
import { toMixed } from "./fractions.js";

export function text(s) {
  return { t: "text", s };
}

export function num(n) {
  return { t: "num", n };
}

// Täljare och nämnare är tal eller byggstenar, t.ex. en ruta eller texten "2 · 4".
export function fr(top, bottom) {
  return { t: "frac", top, bottom };
}

export function mixed(whole, top, bottom) {
  return { t: "mixed", whole, top, bottom };
}

// Blandat tal, men bara bråket när heltalsdelen är 0.
export function mixedOrFrac(whole, top, bottom) {
  return whole === 0 ? fr(top, bottom) : mixed(whole, top, bottom);
}

export function op(o) {
  return { t: "op", o };
}

export function pic(picture) {
  return { t: "pic", picture };
}

export function box(id) {
  return { t: "box", id };
}

export const EQ = op("=");
export const PLUS = op("+");
export const MINUS = op("−");
export const TIMES = op("·");
export const DIVIDE = op("÷");

// Ett värde i enklaste form: heltal, bråk eller blandat tal.
export function val(value) {
  const m = toMixed(value);
  if (m.num === 0) return num(m.whole);
  return mixedOrFrac(m.whole, m.num, m.den);
}

export function frv(value) {
  return fr(value.num, value.den);
}

// Det rätta innehållet i en ruta.
export function expectedPiece(b) {
  if (b.kind === "int") return num(b.expected);
  if (b.kind === "frac" || b.kind === "brakform") return frv(b.expected);
  if (b.kind === "enklaste") return val(b.expected);
  if (b.kind === "symbol") return op(b.expected);
  if (b.kind === "shade") {
    const count = (b.expected.num * b.picture.parts) / b.expected.den;
    return pic({ ...b.picture, shaded: range(0, count - 1) });
  }
  throw new Error(`Okänd ruta: ${b.kind}`);
}

function mapPiece(piece, f) {
  if (typeof piece !== "object") return piece;
  if (piece.t === "frac") return f({ ...piece, top: mapPiece(piece.top, f), bottom: mapPiece(piece.bottom, f) });
  if (piece.t === "mixed") {
    return f({ ...piece, whole: mapPiece(piece.whole, f), top: mapPiece(piece.top, f), bottom: mapPiece(piece.bottom, f) });
  }
  return f(piece);
}

// Raderna med varje ruta ersatt av sitt rätta innehåll, markerat som ifyllt.
export function fill(rows, boxes) {
  const swap = (p) => (p.t === "box" ? { t: "filled", piece: expectedPiece(boxes[p.id]) } : p);
  return rows.map((row) => row.map((p) => mapPiece(p, swap)));
}

// Rutornas id i den ordning de står i raderna.
export function boxIds(rows) {
  const ids = [];
  const visit = (p) => {
    if (p.t === "box") ids.push(p.id);
    return p;
  };
  for (const row of rows) for (const p of row) mapPiece(p, visit);
  return ids;
}
