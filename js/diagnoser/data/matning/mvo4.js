// DIAGNOS MVo4, Enkel volymberäkning.
// Elevbladet är s. 90, lärarsidan s. 89 och facit står på s. 89 i 4_Matning.pdf.
//
// 4 kolumner på resultatblanketten (s. 91): 1, 2, 3a och 3b, en skärm och en kolumn var. Textuppgifter med bladets
// svarsrad ("Svar: Volymen är …"). 3:s inledning ("En kub har sidan 3 cm.") står på båda skärmarna.
// Facit: 1 120 cm³, 2 20 m³, 3a 27 cm³, 3b 216 cm³. units räknar om mellan volymenheterna, också liter
// ("20 000 liter" är rätt för 20 m³, "120 dm³" fel för 120 cm³).
import { unitsFor } from "../../units.js";

export default {
  code: "MVo4",
  area: "Mätning",
  sub: "MVo Mätning av volym",
  title: "Enkel volymberäkning",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Ett rätblock har sidorna 4 cm, 5 cm och 6 cm. Bestäm rätblockets volym.",
      points: "each",
      rows: ["Svar: Volymen är [a]"],
      boxes: { a: { accept: ["120"], units: unitsFor("cm³") } },
    },
    {
      label: "2",
      text: "En mur är 20 m lång, 2 m hög och 0,5 m tjock. Hur mycket betong gick det åt för att gjuta muren?",
      points: "each",
      rows: ["Svar: Det gick åt [a]"],
      boxes: { a: { accept: ["20"], units: unitsFor("m³") } },
    },
    {
      label: "3a",
      text: "En kub har sidan 3 cm. Hur stor volym har kuben?",
      points: "each",
      boxes: { a: { accept: ["27"], units: unitsFor("cm³") } },
    },
    {
      label: "3b",
      text: "En kub har sidan 3 cm. Hur stor volym har en kub med dubbelt så stor sida?",
      points: "each",
      boxes: { a: { accept: ["216"], units: unitsFor("cm³") } },
    },
  ],
};
