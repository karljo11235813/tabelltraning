// DIAGNOS GSk3, kartor och ritningar. Elevbladet är s. 49–50, lärarsidan och facit s. 48 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. I 1 står kartans skala som en linjal i samma
// bild, så avståndet går att bestämma på skärmen: facit ca 3 mil (30 km), och rutan godtar 25–35 km (range, units).
// 2 (sjön i skala 1:20 000) och 3a–3b (skärbrädan i skala 1:5) kräver att man mäter bilden i dess riktiga storlek och
// finns inte här. Bladets "längs ned" och "hur långt är det är mellan" skrivs "längst ned" och "hur långt det är mellan".
import { unitsFor } from "../../units.js";
import { sheet } from "./sheet.js";

export default {
  code: "GSk3",
  area: "Geometri",
  sub: "GSk Skala",
  title: "Kartor och ritningar",
  time: { min: 2, max: 3, stop: 7 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "På den här kartan kan man se skalan längst ned till vänster. Använd skalan för att ta reda på ungefär hur långt det är mellan Varberg och Falkenberg i verkligheten.",
      points: "each",
      images: [sheet("gsk3-1", 491, "En karta över kusten mellan Varberg och Falkenberg med en skala från 0 till 10 km nere till vänster.")],
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["ca 30 km", "ca 3 mil"], range: { ge: "25", le: "35" }, units: unitsFor("km") } },
    },
  ],
};
