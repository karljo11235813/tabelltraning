// Byggstenarna i frågor och lösningar: text, tal, storheter, räknetecken, rutor, tabeller,
// rutnät, skaltabeller och bilder. Rena objekt utan DOM. render.js ritar dem, testerna räknar på dem.
import { dec } from "./decimal.js";

export function text(s) {
  return { t: "text", s };
}

// Ett tal utan enhet. Tar ett decimaltal eller ett heltal.
export function num(x) {
  return { t: "num", x: typeof x === "number" ? dec(x) : x };
}

// Ett tal med enhet, t.ex. 3,5 m.
export function qty(amount, unit) {
  return { t: "qty", x: amount, unit };
}

// En enhet ensam, t.ex. efter en ruta: [ ] cm.
export function unitLabel(unit) {
  return { t: "unit", unit };
}

export function op(o) {
  return { t: "op", o };
}

export const EQ = op("=");
export const LT = op("<");
export const GT = op(">");
export const PLUS = op("+");
export const MINUS = op("−");
export const TIMES = op("·");
export const DIVIDE = op("/");
export const ARROW = op("→");

export function box(id) {
  return { t: "box", id };
}

export function ratioPiece(a, b) {
  return { t: "ratio", a, b };
}

// rows: rad → cell → byggstenar.
export function table({ head, rows }) {
  return { t: "table", head, rows };
}

export function grid(model) {
  return { t: "grid", model };
}

export function scaleTable(model) {
  return { t: "scaletable", model };
}

export function pic(picture) {
  return { t: "pic", picture };
}

export function tilesPiece(tiles, marked) {
  return { t: "tiles", tiles, marked };
}

// Det rätta innehållet i en ruta.
export function expectedPiece(b) {
  if (b.kind === "int" || b.kind === "decimal") return num(b.expected);
  if (b.kind === "symbol") return op(b.expected);
  if (b.kind === "choice") return text(b.expected);
  if (b.kind === "ratio") return ratioPiece(b.expected[0], b.expected[1]);
  if (b.kind === "pick") return tilesPiece(b.tiles, b.expected);
  throw new Error(`Okänd ruta: ${b.kind}`);
}

function mapPiece(piece, f) {
  if (piece && piece.t === "table") {
    return f({ ...piece, rows: piece.rows.map((row) => row.map((cell) => cell.map((p) => mapPiece(p, f)))) });
  }
  return f(piece);
}

// Raderna med varje ruta ersatt av sitt rätta innehåll, markerat som ifyllt.
export function fill(rows, boxes) {
  const swap = (p) => (p.t === "box" ? { t: "filled", piece: expectedPiece(boxes[p.id]) } : p);
  return rows.map((row) => row.map((p) => mapPiece(p, swap)));
}

// Rutornas id i den ordning de står i raderna, också inne i tabeller.
export function boxIds(rows) {
  const ids = [];
  const visit = (p) => {
    if (p.t === "box") ids.push(p.id);
    return p;
  };
  for (const row of rows) for (const p of row) mapPiece(p, visit);
  return ids;
}
