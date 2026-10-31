// DIAGNOS GVi3, vinklar i månghörningar. Elevbladet är s. 65, lärarsidan och facit s. 64 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. Facit: 1 120°, 2 A = C = 60° och
// B = D = 120° (står inte i facit: A + B = 180° och B = 2A), 3 36°, 4 135°, 5 36°. 2 har två rutor och en kolumn.
// Bladets "vinklara", "Hur stora är vinkel A?", "3 ggr" och "en pentagram" skrivs "vinklarna", "Hur stor är vinkel A?", "3 gånger" och
// "ett pentagram".
import { sheet } from "./sheet.js";

const task = (label, text, answer, image) => ({
  label,
  text,
  points: "each",
  ...(image ? { images: [image] } : {}),
  rows: ["Svar: [a] grader"],
  boxes: { a: { accept: [answer] } },
});

export default {
  code: "GVi3",
  area: "Geometri",
  sub: "GVi Vinklar",
  title: "Vinklar i månghörningar",
  time: { min: 6, max: 8, stop: 15 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    task("1", "I en femhörning är vinklarna A och B räta. De tre övriga vinklarna är lika stora. Hur stora är vinklarna C, D och E?", "120", sheet("gvi3-1", 212, "En femhörning ABCDE med AB nederst och D överst.")),
    {
      label: "2",
      text: "I en parallellogram ABCD är vinkeln A hälften så stor som vinkel B. Bestäm alla vinklarna.",
      points: "one",
      images: [sheet("gvi3-2", 272, "Parallellogrammen ABCD.")],
      rows: ["Vinklarna A och C är [a] grader.", "Vinklarna B och D är [b] grader."],
      boxes: { a: { accept: ["60"] }, b: { accept: ["120"] } },
    },
    task("3", "I en fyrhörning är vinkeln D dubbelt så stor som vinkeln C och vinkeln C dubbelt så stor som vinkeln A. Vinkeln B är 3 gånger så stor som vinkeln A. Hur stor är vinkel A?", "36"),
    task("4", "Hur stora är vinklarna i en regelbunden åttahörning?", "135"),
    task("5", "Bestäm vinklarna A, B, C, D och E i ett pentagram.", "36", sheet("gvi3-5", 237, "Ett pentagram, en femuddig stjärna, med spetsarna A till E.")),
  ],
};
