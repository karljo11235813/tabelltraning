// Enheterna: vilken storhet de mäter, var de står i prefixrutnätet och hur stora de är.
// mil, ton och ha är egna enheter, inga prefix. De översätts först till en enhet med prefix.
import { d, shift } from "./decimal.js";

const MICRO = "µ";

// pos är prefixets tiopotens (k = 3, c = −2). exp = pos · dim + offset är enhetens tiopotens
// i storhetens grundenhet (m, m², m³, g, W). Liter räknas i m³: 1 l = 10⁻³ m³.
// Enheter med false står bara som rutor i rutnätet, aldrig i frågor.
const FAMILIES = {
  m: { quantity: "längd", dim: 1, offset: 0, units: [["km", 3], ["hm", 2, false], ["dam", 1, false], ["m", 0], ["dm", -1], ["cm", -2], ["mm", -3], [`${MICRO}m`, -6]] },
  m2: { quantity: "area", dim: 2, offset: 0, units: [["km²", 3], ["hm²", 2, false], ["dam²", 1, false], ["m²", 0], ["dm²", -1], ["cm²", -2], ["mm²", -3]] },
  m3: { quantity: "volym", dim: 3, offset: 0, units: [["m³", 0], ["dm³", -1], ["cm³", -2], ["mm³", -3]] },
  l: { quantity: "volym", dim: 1, offset: -3, units: [["kl", 3], ["hl", 2, false], ["dal", 1, false], ["l", 0], ["dl", -1], ["cl", -2], ["ml", -3]] },
  g: { quantity: "vikt", dim: 1, offset: 0, units: [["kg", 3], ["hg", 2], ["dag", 1, false], ["g", 0], ["dg", -1], ["cg", -2, false], ["mg", -3], [`${MICRO}g`, -6]] },
  W: { quantity: "effekt", dim: 1, offset: 0, units: [["GW", 9], ["MW", 6], ["kW", 3], ["W", 0]] },
};

const NON_PREFIX = [
  { id: "mil", family: "m", exp: 4, to: "km", factor: "10" },
  { id: "ton", family: "g", exp: 6, to: "kg", factor: "1000" },
  { id: "ha", family: "m2", exp: 4, to: "m²", factor: "10000" },
];

export const UNITS = {};
for (const [family, { quantity, dim, offset, units }] of Object.entries(FAMILIES)) {
  for (const [id, pos, inQuestions = true] of units) {
    UNITS[id] = { id, family, quantity, pos, exp: pos * dim + offset, prefix: true, inQuestions };
  }
}
for (const { id, family, exp } of NON_PREFIX) {
  UNITS[id] = { id, family, quantity: FAMILIES[family].quantity, pos: null, exp, prefix: false, inQuestions: true };
}

// Bytet mellan m³-enheter och liter sker alltid vid 1 dm³ = 1 l.
export const SWITCH = { m3: "dm³", l: "l" };

export function unit(id) {
  const u = UNITS[id];
  if (!u) throw new Error(`Okänd enhet: ${id}`);
  return u;
}

export function toBase(amount, id) {
  return shift(amount, unit(id).exp);
}

export function convert(amount, from, to) {
  const a = unit(from);
  const b = unit(to);
  if (a.quantity !== b.quantity) throw new Error(`${from} och ${to} mäter olika saker`);
  return shift(amount, a.exp - b.exp);
}

export function translation(id) {
  const t = NON_PREFIX.find((n) => n.id === id);
  return t ? { to: t.to, factor: d(t.factor) } : null;
}

// Familjens enheter, största först.
export function unitsOf(family, { inQuestions = true, prefixOnly = false } = {}) {
  return Object.values(UNITS)
    .filter((u) => u.family === family && (!inQuestions || u.inQuestions) && (!prefixOnly || u.prefix))
    .sort((a, b) => b.exp - a.exp)
    .map((u) => u.id);
}
