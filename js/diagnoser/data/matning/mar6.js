// DIAGNOS MAr6, Cirkelområdets area.
// Elevbladet är s. 72, lärarsidan s. 71 och facit står på s. 71 i 4_Matning.pdf.
//
// Fem textuppgifter (1–5) med bara Svar. Resultatblanketten (s. 73) har en kolumn per uppgift: 5 i allt. Eleven får
// ett lösblad och miniräknare (paper: true).
// 1–4 är π-rutor: det exakta värdet med π, ett närmevärde eller båda i en kedja ("25π ≈ 78,5"); units räknar om
// mellan areaenheterna. Facit: 1 25π ≈ 78,5, 2 64 − 16π ≈ 13,7, 3 54π ≈ 170, 4 24π ≈ 75, 5 144 cm² (båglängden
// · radien / 2, inget π).
// Figurerna är bladets, med de skuggade områdena som en del med hål (jämnt–udda fyllning):
//   2  kvadraten 8 cm minus den inskrivna cirkeln;
//   3  halvcirkeln med radien 12 cm minus halvcirkeln med radien 6 cm längst till höger;
//   4  cirkeln med diametern 14 cm minus cirklarna med diametrarna 8 cm (överst) och 6 cm (nederst);
//   5  sektorn med radien 12 cm och bågen 24 cm (2 radianer).
//
// Tid: lärarsidan anger ingen tid. Diagnosen "skall inte göras på tid"; läraren bedömer själv hur lång tid en elev som
// behärskar området behöver och avbryter efter ytterligare tio minuter. time är därför null, och resultatskärmen visar
// ingen riktlinje från Diamant.
import { unitsFor } from "../../units.js";

const AREA = unitsFor("cm²");

const SQUARE_MINUS_CIRCLE = {
  view: [120, 120],
  pieces: [{ path: "M10 10H110V110H10Z M60 10A50 50 0 1 0 60 110A50 50 0 1 0 60 10Z" }],
  shaded: [0],
};
const HALF_RINGS = {
  view: [260, 140],
  pieces: [{ path: "M10 130A120 120 0 0 1 250 130Z M130 130A60 60 0 0 1 250 130Z" }],
  shaded: [0],
};
const THREE_CIRCLES = {
  view: [160, 160],
  pieces: [
    {
      path: "M10 80A70 70 0 1 0 150 80A70 70 0 1 0 10 80Z M40 50A40 40 0 1 0 120 50A40 40 0 1 0 40 50Z M50 120A30 30 0 1 0 110 120A30 30 0 1 0 50 120Z",
    },
  ],
  shaded: [0],
};
const SECTOR = {
  view: [260, 145],
  pieces: [{ path: "M130 135L29 70.1A120 120 0 0 1 231 70.1Z" }],
  shaded: [0],
};

export default {
  code: "MAr6",
  area: "Mätning",
  sub: "MAr Mätning av area",
  title: "Cirkelområdets area",
  time: null,
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "En cirkel har diametern 10 cm. Bestäm cirkelområdets area.",
      points: "each",
      boxes: { a: { accept: ["25π cm² ≈ 78,5 cm²"], pi: "25π", units: AREA } },
    },
    {
      label: "2",
      text: "Bestäm den skuggade arean som ligger innanför kvadraten men utanför cirkeln. Kvadratens sida är 8 cm.",
      points: "each",
      figure: SQUARE_MINUS_CIRCLE,
      boxes: { a: { accept: ["64 − 16π cm² ≈ 13,7 cm²"], pi: "64 − 16π", units: AREA } },
    },
    {
      label: "3",
      text: "Bestäm arean av det skuggade området. Den stora cirkelns radie är 12 cm och den lilla cirkelns radie är 6 cm.",
      points: "each",
      figure: HALF_RINGS,
      boxes: { a: { accept: ["54π cm² ≈ 170 cm²"], pi: "54π", units: AREA } },
    },
    {
      label: "4",
      text: "Den stora cirkelns diameter är 14 cm och de små cirklarnas diametrar är 6 cm och 8 cm. Bestäm arean av det skuggade området.",
      points: "each",
      figure: THREE_CIRCLES,
      boxes: { a: { accept: ["24π cm² ≈ 75 cm²"], pi: "24π", units: AREA } },
    },
    {
      label: "5",
      text: "Ur en cirkel med radien 12 cm har man klippt ut en cirkelsektor. Bågens längd är 24 cm. Bestäm cirkelsektorns area.",
      points: "each",
      figure: SECTOR,
      boxes: { a: { accept: ["144"], units: AREA } },
    },
  ],
};
