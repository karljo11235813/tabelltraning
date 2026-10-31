// DIAGNOS GSk2, förstoring och förminskning. Elevbladet är s. 45–46, lärarsidan och facit s. 44 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. I 1 och 2 står förlagan och bilden i samma
// bild, så förhållandet mellan dem är bladets också på skärmen. 3 (rita i skala 3:1) görs på papper. 4a och 4b (hur långa
// djuren är i verkligheten) kräver att man mäter bilden i dess riktiga storlek och finns inte här.
// Facit: 1 skala 2:1, 2 skala 1:3.
import { sheet } from "./sheet.js";

export default {
  code: "GSk2",
  area: "Geometri",
  sub: "GSk Skala",
  title: "Förstoring och förminskning",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Bilden till vänster visar föremålet i naturlig storlek (skala 1:1). Bilden till höger är förstorad. Vilken skala är bilden till höger ritad i?",
      points: "each",
      images: [sheet("gsk2-1", 535, "Två trianglar med samma form, en liten till vänster och en stor till höger.")],
      rows: ["Svar: Bild i skala [a] : 1"],
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "2",
      text: "Bilden till vänster visar föremålet i naturlig storlek (skala 1:1). Bilden till höger är förminskad. Vilken skala är bilden till höger ritad i?",
      points: "each",
      images: [sheet("gsk2-2", 491, "En stor cirkel till vänster och en liten cirkel till höger.")],
      rows: ["Svar: Bild i skala 1 : [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      kind: "paper",
      label: "3",
      text: "Rita en bild av figuren i skala 3:1 på rutat papper.",
      images: [sheet("gsk2-3", 623, "En figur av fem rutor i form av ett kors på rutat papper.")],
    },
  ],
};
