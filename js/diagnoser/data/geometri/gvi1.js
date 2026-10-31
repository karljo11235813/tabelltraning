// DIAGNOS GVi1, Mäta och rita givna vinklar. Elevbladet är s. 58–59, lärarsidan och facit s. 57 i 5_Geometri.pdf.
// 1a–1c är flerval med vinklarna A–F, en kolumn var. 2a–2c (mät vinklarna med gradskiva) kräver bladets riktiga storlek
// och finns inte här. 3 (rita vinklar med gradskiva) görs på papper.
// Facit: 1a C, 1b D, 1c A, B, E och F.
import { sheet } from "./sheet.js";

const ANGLES = [sheet("gvi1-1", 528, "Två trianglar, ABC och DEF, med vinklarna A till F i hörnen.")];
const ITEMS = ["A", "B", "C", "D", "E", "F"].map((markup) => ({ id: markup.toLowerCase(), markup }));
const kind = (label, what, accept) => ({
  kind: "pick",
  label,
  text: `Vilken eller vilka av vinklarna A–F är ${what}? Markera dem.`,
  images: ANGLES,
  items: ITEMS,
  accept,
  points: "one",
});

export default {
  code: "GVi1",
  area: "Geometri",
  sub: "GVi Vinklar",
  title: "Mäta och rita givna vinklar",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    kind("1a", "räta", ["c"]),
    kind("1b", "trubbiga", ["d"]),
    kind("1c", "spetsiga", ["a", "b", "e", "f"]),
    {
      kind: "paper",
      label: "3",
      text: "Rita med hjälp av gradskiva tre vinklar: a) 45 grader, b) 120 grader och c) 270 grader. Markera varje vinkel med en båge.",
    },
  ],
};
