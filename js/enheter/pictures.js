// Figurerna i Del 4: rektanglar och L-former på rutat papper, lådor av kuber, föremål och 1 dm².
// Rena modeller; render.js ritar dem som SVG.

export const rect = (w, h) => ({ type: "rect", w, h });
export const lShape = (w, h, cutW, cutH) => ({ type: "L", w, h, cutW, cutH });
export const cubes = (w, d, layers) => ({ type: "cubes", w, d, layers });
export const object = (name) => ({ type: "object", object: name });
export const DM2 = { type: "dm2" };

// Antal rutor på 1 cm · 1 cm. L-formen är en rektangel där ett hörn saknas.
export function areaOf(s) {
  if (s.type === "rect") return s.w * s.h;
  if (s.type === "L") return s.w * s.h - s.cutW * s.cutH;
  throw new Error(`Ingen area för ${s.type}`);
}

// Kanten runt om. Hörnet som saknas i L-formen ändrar inte omkretsen.
export function perimeterOf(s) {
  if (s.type === "rect" || s.type === "L") return 2 * (s.w + s.h);
  throw new Error(`Ingen omkrets för ${s.type}`);
}

export function layerOf(s) {
  return s.w * s.d;
}

export function volumeOf(s) {
  return s.w * s.d * s.layers;
}
