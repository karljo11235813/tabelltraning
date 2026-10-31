// DIAGNOS GFo6, likformighet i problem. Elevbladet är s. 30, lärarsidan och facit s. 29 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. Diagnosen görs inte på tid (time: null).
// Facit: 1 35 cm, 2 3 cm, 3 4,8 cm, 4 EF/FA = 1/2. 4 är ett ordsvar (contains): förhållandet 1:2 eller 2:1, med kolon,
// snedstreck eller "till". Bladets "Sträckan AE" skrivs "sträckan AE".
import { unitsFor } from "../../units.js";
import { sheet } from "./sheet.js";

const CM = unitsFor("cm");
const problem = (label, text, image, alt, width, answer) => ({
  label,
  text,
  points: "each",
  images: [sheet(image, width, alt)],
  rows: ["Svar: [a] cm"],
  boxes: { a: { accept: [answer], units: CM } },
});

export default {
  code: "GFo6",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Likformighet, problem",
  time: null,
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    problem("1", "I figuren är AB parallell med CD. AE = 30 cm, EC = 60 cm och DC = 70 cm. Bestäm längden av AB.", "gfo6-1", "Sträckorna AC och BD skär varandra i E; AB nedtill och DC upptill.", 213, "35"),
    problem("2", "I figuren är vinkeln B = vinkeln C. Alltså är ABE likformig med DEC. Bestäm längden av AB om CD är 12 cm, AE är 2 cm och DE är 8 cm.", "gfo6-2", "En cirkel med punkterna A, B, C och D på randen; kordorna AC och BD skär varandra i E.", 195, "3"),
    problem("3", "I den rätvinkliga triangeln ABC är sidorna 6 cm, 8 cm och 10 cm. AD är vinkelrät mot BC. Bestäm längden av AD.", "gfo6-3", "En rätvinklig triangel ABC med den räta vinkeln i A och sträckan AD vinkelrät mot BC.", 231, "4,8"),
    {
      label: "4",
      text: "I triangeln ABC dras medianerna från A och B. De skär sidorna AC och BC i deras mittpunkter D och E. I vilket förhållande delar punkten F sträckan AE?",
      points: "each",
      images: [sheet("gfo6-4", 231, "Triangeln ABC med medianerna AE och BD, som skär varandra i F, och sträckan DE.")],
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["1:2"], contains: ["1:2", "2:1", "1 : 2", "2 : 1", "1/2", "2/1", "1 till 2", "2 till 1"] } },
    },
  ],
};
