// DIAGNOS GFo7, Pythagoras sats. Elevbladet är s. 33, lärarsidan och facit s. 32 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. Facit: 1 13 m, 2 5 längdenheter,
// 3 √244 cm = 2√61 ≈ 15,6 cm (intervall som MAr7 5), 4 30 cm², 5 dubbelt så stor. Bladets "Bestäm längden av diagonalen"
// får en punkt.
import { unitsFor } from "../../units.js";
import { sheet } from "./sheet.js";

export default {
  code: "GFo7",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Pythagoras sats",
  time: { min: 10, max: 10, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "En rektangel har sidorna 5 m och 12 m. Bestäm längden av diagonalen.",
      points: "each",
      images: [sheet("gfo7-1", 216, "En rektangel med en diagonal.")],
      rows: ["Svar: [a] m"],
      boxes: { a: { accept: ["13"], units: unitsFor("m") } },
    },
    {
      label: "2",
      text: "Hur långt är det från punkten (2, 7) till punkten (5, 11) i ett vanligt rätvinkligt koordinatsystem?",
      points: "each",
      images: [sheet("gfo7-2", 181, "Ett koordinatsystem med punkterna (2, 7) och (5, 11).")],
      rows: ["Svar: [a] längdenheter"],
      boxes: { a: { accept: ["5"] } },
    },
    {
      label: "3",
      text: "I ett rätblock är kanterna 6 cm, 8 cm och 12 cm. Hur lång är rymddiagonalen?",
      points: "each",
      images: [sheet("gfo7-3", 217, "Ett rätblock med kanterna 12 cm, 6 cm och 8 cm och rymddiagonalen streckad.")],
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["2√61", "√244", "2√61 ≈ 15,6", "√244 cm ≈ 15,6 cm"], range: { ge: "15,6", le: "15,7" } } },
    },
    {
      label: "4",
      text: "Bestäm arean av parallelltrapetset ABCD. AB är 9 cm, BC är 5 cm och CD 6 cm. Vinklarna A och D är räta.",
      points: "each",
      images: [sheet("gfo7-4", 243, "Parallelltrapetset ABCD med räta vinklar i A och D.")],
      rows: ["Svar: [a] cm^2"],
      boxes: { a: { accept: ["30"], units: unitsFor("cm²") } },
    },
    {
      label: "5",
      text: "Hur många gånger större är den omskrivna kvadratens area än den inskrivna kvadratens area?",
      points: "each",
      images: [sheet("gfo7-5", 169, "En cirkel med en kvadrat runt sig och en kvadrat inuti, med hörnen på cirkeln.")],
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["2", "2 gånger", "2 ggr", "dubbelt", "dubbelt så stor"] } },
    },
  ],
};
