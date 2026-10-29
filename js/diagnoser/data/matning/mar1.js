// DIAGNOS MAr1, Grundläggande mätning, area.
// Elevbladet är s. 56–57, lärarsidan s. 55 och facit står på s. 55 i 4_Matning.pdf.
//
// Resultatblanketten (s. 58) har fem kolumner, 1–5. 5 är en pappersuppgift (rita en rektangel) som inte rättas,
// så 4 poängsatta kolumner.
// 1: ett val mellan bladets två rutfigurer, ritade i samma skala (a 8 × 2 rutor, b 4 × 5 rutor). Facit: figur b.
// 2: rektangeln a och parallellogrammen b har samma bas och höjd (7 × 3 enheter i figuren). Facit 21 cm².
// 3: rutnätet 7 × 5 med den skuggade parallelltrapetsen (överst 3 rutor, nederst 7). Facit 25 cm² eller 25 rutor;
//    ordet efter talet ignoreras.
// 4: facit 24 cm²; units räknar om ("2400 mm²" är rätt, "24 dm²" fel).
// 5: rutnätet 15 × 5 med den skuggade rektangeln 4 × 2, som på bladet.
//
// Facit till 1 säger "(Båda har samma omkrets.)", men bladets figurer har omkretsen 20 (a) och 18 (b). Svaret b
// påverkas inte.
import { unitsFor } from "../../units.js";

const square = (x, y, s) => ({ path: `M${x} ${y}H${x + s}V${y + s}H${x}Z` });
const grid = (x0, y0, cols, rows, s) =>
  Array.from({ length: cols * rows }, (_, i) => square(x0 + (i % cols) * s, y0 + Math.floor(i / cols) * s, s));

// 1: båda figurerna i samma view, så att rutorna är lika stora.
const FIGURE_A = { view: [100, 64], pieces: grid(2, 20, 8, 2, 12) };
const FIGURE_B = { view: [100, 64], pieces: grid(26, 2, 4, 5, 12) };

// 2: rektangeln (a) och parallellogrammen (b) med samma bas (98) och höjd (42).
const SAME_BASE = {
  view: [270, 76],
  pieces: [{ path: "M8 28H106V70H8Z" }, { path: "M136 70H234L264 28H166Z" }],
  labels: [
    { at: [57, 12], text: "a" },
    { at: [200, 12], text: "b" },
  ],
};

// 3: rutnätet 7 × 5 med parallelltrapetsen; rutnätets linjer ritas ovanpå skuggningen, som på bladet.
const gridLines = (x0, y0, cols, rows, s) => [
  ...Array.from({ length: cols + 1 }, (_, i) => `M${x0 + i * s} ${y0}V${y0 + rows * s}`),
  ...Array.from({ length: rows + 1 }, (_, j) => `M${x0} ${y0 + j * s}H${x0 + cols * s}`),
];
const TRAPEZOID = {
  view: [144, 104],
  pieces: [{ path: "M2 102H142L102 2H42Z" }],
  shaded: [0],
  lines: gridLines(2, 2, 7, 5, 20),
};

// 5: rutnätet 15 × 5 med de åtta skuggade rutorna överst till vänster (4 × 2).
const DOUBLE = {
  view: [304, 104],
  pieces: grid(2, 2, 15, 5, 20),
  shaded: [0, 1, 2, 3, 15, 16, 17, 18],
};

export default {
  code: "MAr1",
  area: "Mätning",
  sub: "MAr Mätning av area",
  title: "Grundläggande mätning, area",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      kind: "choose",
      label: "1",
      text: "Vilken figur har störst area, a eller b? Välj figuren.",
      options: [
        { id: "a", figure: FIGURE_A },
        { id: "b", figure: FIGURE_B },
      ],
      accept: "b",
    },
    {
      label: "2",
      text: "Figur a har arean 21 cm². Hur stor area har figur b?",
      points: "each",
      figure: SAME_BASE,
      rows: ["Svar: Figur b har arean [a] cm^2"],
      boxes: { a: { accept: ["21"], units: unitsFor("cm²") } },
    },
    {
      label: "3",
      text: "Hur stor area har den skuggade figuren? Varje ruta har arean 1 cm².",
      points: "each",
      figure: TRAPEZOID,
      boxes: { a: { accept: ["25"], units: unitsFor("cm²") } },
    },
    {
      label: "4",
      text: "En rektangel är 4 cm lång och 6 cm hög. Hur stor är arean?",
      points: "each",
      boxes: { a: { accept: ["24"], units: unitsFor("cm²") } },
    },
    {
      kind: "paper",
      label: "5",
      text: "Rita en rektangel som har dubbelt så stor area som den skuggade rektangeln.",
      figure: DOUBLE,
    },
  ],
};
