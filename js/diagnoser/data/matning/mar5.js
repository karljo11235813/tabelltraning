// DIAGNOS MAr5, Enkel begränsningsarea.
// Elevbladet är s. 69, lärarsidan s. 68 och facit står på s. 68 i 4_Matning.pdf.
//
// 3 kolumner på resultatblanketten (s. 70): 1, 2 och 3, en skärm och en kolumn var. Bladets inledning ("Alla kroppar
// i diagnosen är uppbyggda av centikuber.") står på alla skärmar. Lärarsidan ber läraren förklara att "Ange" betyder
// arean i cm² när varje ruta är 1 cm²; det står i texten här, eftersom ingen lärare läser upp det på skärmen.
// Kropparna är bladets, ritade med figure.cubes (x åt höger, y uppåt, z bakåt):
//   1  rätblocket 5 × 3 × 3 (5 brett, 3 högt, 3 djupt): 2 · (15 + 15 + 9) = 78.
//   2  ett block 3 brett, 2 högt och 3 djupt med ett block 2 brett, 1 högt och 3 djupt ovanpå till vänster.
//   3  en ring av åtta kuber i ett lager (3 × 3 utan mitten): 8 + 8 + 12 + 4 = 32.
//
// Tryckfel i facit: 2 säger 54 cm², men bladets kropp (24 kuber) har begränsningsarean 52 cm²: framsidan och baksidan
// 8 rutor var, vänster, höger, ovansida och undersida 9 var. 54 är arean av en hel kub 3 × 3 × 3; facit har glömt att
// trappsteget tar bort en ruta på framsidan och en på baksidan. Rutan godtar 52.
import { unitsFor } from "../../units.js";

const INTRO = "Alla kroppar i diagnosen är uppbyggda av centikuber. Varje kubsida är 1 cm².";

const block = (w, h, d, [x0, y0, z0] = [0, 0, 0]) =>
  Array.from({ length: w * h * d }, (_, i) => [x0 + (i % w), y0 + (Math.floor(i / w) % h), z0 + Math.floor(i / (w * h))]);

const BOX = { cubes: block(5, 3, 3) };
const STEP = { cubes: [...block(3, 2, 3), ...block(2, 1, 3, [0, 2, 0])] };
const RING = { cubes: block(3, 1, 3).filter(([x, , z]) => !(x === 1 && z === 1)) };

const screen = (label, question, figure, answer) => ({
  label,
  text: `${INTRO} ${question}`,
  points: "each",
  figure,
  rows: ["Svar: [a] cm^2"],
  boxes: { a: { accept: [answer], units: unitsFor("cm²") } },
});

export default {
  code: "MAr5",
  area: "Mätning",
  sub: "MAr Mätning av area",
  title: "Enkel begränsningsarea",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    screen("1", "Ange begränsningsarean av rätblocket.", BOX, "78"),
    screen("2", "Ange begränsningsarean av kroppen nedan.", STEP, "52"),
    screen("3", "Denna kropp är uppbyggd av åtta kuber. Ange begränsningsarean.", RING, "32"),
  ],
};
