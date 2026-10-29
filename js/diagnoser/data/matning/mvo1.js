// DIAGNOS MVo1, Grundläggande mätning, volym.
// Elevbladet är s. 80, lärarsidan s. 79 och facit står på s. 79 i 4_Matning.pdf.
//
// 2 kolumner på resultatblanketten (s. 81): 1 och 2, en skärm och en kolumn var. Kropparna är bladets, ritade med
// figure.cubes (x åt höger, y uppåt, z bakåt):
//   1  rätblocket 4 brett, 2 högt och 3 djupt: 24 kuber.
//   2  en trappstegspyramid av lagren 4 × 4, 3 × 3, 2 × 2 och 1: 30 kuber. På bladet står lagren ungefär mitt på
//      varandra; kuberna här står i hela rutor, så varje lager ligger i det bakre vänstra hörnet av lagret under. Från
//      framsidan syns ändå en kant av varje lager framför och till höger om nästa, som på bladet.
// Facit: 1 24 kubikcentimeter, 2 30 kubikcentimeter. units räknar om ("24 cm³" är rätt, "24 dm³" fel).
import { unitsFor } from "../../units.js";

const TEXT = "Om volymen av en liten kub är 1 kubikcentimeter, hur stor är då volymen av hela den här kroppen?";

const block = (w, h, d, [x0, y0, z0] = [0, 0, 0]) =>
  Array.from({ length: w * h * d }, (_, i) => [x0 + (i % w), y0 + (Math.floor(i / w) % h), z0 + Math.floor(i / (w * h))]);

const BOX = { cubes: block(4, 2, 3) };
const PYRAMID = { cubes: [4, 3, 2, 1].flatMap((n, layer) => block(n, 1, n, [0, layer, layer])) };

export default {
  code: "MVo1",
  area: "Mätning",
  sub: "MVo Mätning av volym",
  title: "Grundläggande mätning, volym",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: TEXT,
      points: "each",
      figure: BOX,
      rows: ["Svar: [a] kubikcentimeter."],
      boxes: { a: { accept: ["24"], units: unitsFor("cm³") } },
    },
    {
      label: "2",
      text: TEXT,
      points: "each",
      figure: PYRAMID,
      rows: ["Svar: [a] kubikcentimeter."],
      boxes: { a: { accept: ["30"], units: unitsFor("cm³") } },
    },
  ],
};
