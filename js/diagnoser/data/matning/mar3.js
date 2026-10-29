// DIAGNOS MAr3, Enkel areaberäkning.
// Elevbladet är s. 63, lärarsidan s. 62 och facit står på s. 62 i 4_Matning.pdf.
//
// Bladets uppgift 2 är "Uppgiften borttagen" (facit: "Uppgift 2 borttagen") och finns inte här. Resultatblanketten
// (s. 64) har ändå kolumnerna 1, 2, 3 och 4; de poängsatta är 1, 3 och 4, så 3 kolumner och etiketterna 1, 3, 4.
// Figurerna är bladets, med måtten som beteckningar: rektangeln 7 × 4 cm, den rätvinkliga triangeln med kateterna
// 8 och 6 cm och hypotenusan 10 cm som bas (rät vinkel markerad i toppen), och fyrhörningen med de lodräta sidorna
// 8 och 5 cm och basen 10 cm.
// Facit: 1 28 cm², 3 24 cm², 4 65 cm². units räknar om ("0,28 dm²" är rätt för 28, "28 m²" fel).
//
// Bladets "Beräna arean av triangeln" (3) skrivs "Beräkna".
import { unitsFor } from "../../units.js";

const RECTANGLE = {
  view: [210, 120],
  pieces: [{ path: "M30 22H170V102H30Z" }],
  labels: [
    { at: [100, 10], text: "7 cm" },
    { at: [190, 62], text: "4 cm" },
  ],
};

// Hypotenusan 10 cm från (20, 120) till (220, 120), räta vinkeln i (148, 24), 20 enheter per cm.
const TRIANGLE = {
  view: [240, 145],
  pieces: [{ path: "M20 120H220L148 24Z" }],
  lines: ["M141.6 28.8L146.4 35.2L152.8 30.4"],
  labels: [
    { at: [72, 60], text: "8 cm" },
    { at: [200, 62], text: "6 cm" },
    { at: [120, 136], text: "10 cm" },
  ],
};

// Basen 10 cm, vänster sida 8 cm och höger sida 5 cm, 14 enheter per cm.
const QUADRILATERAL = {
  view: [225, 155],
  pieces: [{ path: "M45 130H185V60L45 18Z" }],
  labels: [
    { at: [22, 74], text: "8 cm" },
    { at: [205, 95], text: "5 cm" },
    { at: [115, 145], text: "10 cm" },
  ],
};

export default {
  code: "MAr3",
  area: "Mätning",
  sub: "MAr Mätning av area",
  title: "Enkel areaberäkning",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Beräkna arean av rektangeln i figuren.",
      points: "each",
      figure: RECTANGLE,
      rows: ["Svar: Arean är [a]"],
      boxes: { a: { accept: ["28"], units: unitsFor("cm²") } },
    },
    {
      label: "3",
      text: "Beräkna arean av triangeln.",
      points: "each",
      figure: TRIANGLE,
      rows: ["Svar: Arean är [a]"],
      boxes: { a: { accept: ["24"], units: unitsFor("cm²") } },
    },
    {
      label: "4",
      text: "Beräkna arean av fyrhörningen i figuren.",
      points: "each",
      figure: QUADRILATERAL,
      rows: ["Svar: Arean är [a]"],
      boxes: { a: { accept: ["65"], units: unitsFor("cm²") } },
    },
  ],
};
