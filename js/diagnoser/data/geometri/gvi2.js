// DIAGNOS GVi2, vinklar som räknas ut. Elevbladet är s. 62, lärarsidan och facit s. 61 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. Figurerna är inte skalenliga, så bladet
// säger att gradskiva inte ska användas. Facit: 1a 148°, 1b 32°, 2 75°, 3a 30°, 3b 120°.
// I bilden till 2 står ett stycke av uppgiftens text över triangeln på bladet; det är bortvitat.
import { sheet } from "./sheet.js";

const NO_PROTRACTOR = "Gradskiva ska inte användas här.";
const CROSS = [sheet("gvi2-1", 407, "Två linjer som skär varandra. En vinkel är 32°, och vinklarna a och b är utmärkta.")];
const ISOSCELES = [sheet("gvi2-3", 488, "En likbent triangel ABC med C överst.")];
const angle = (label, text, images, answer) => ({ label, text: `${NO_PROTRACTOR} ${text}`, points: "each", images, rows: ["Svar: [a] grader"], boxes: { a: { accept: [answer] } } });

export default {
  code: "GVi2",
  area: "Geometri",
  sub: "GVi Vinklar",
  title: "Beräkna vinklar",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    angle("1a", "Den givna vinkeln är 32°. Hur stor är då vinkel a?", CROSS, "148"),
    angle("1b", "Den givna vinkeln är 32°. Hur stor är då vinkel b?", CROSS, "32"),
    angle("2", "Vinkel A i en triangel är 59° och vinkel B är 46°. Hur stor är vinkel C?", [sheet("gvi2-2", 212, "Triangeln ABC med vinkeln 59° vid A och 46° vid B.")], "75"),
    angle("3a", "Den här triangeln är likbent. Vinkeln A är 30°. Hur stor är vinkel B?", ISOSCELES, "30"),
    angle("3b", "Den här triangeln är likbent. Vinkeln A är 30°. Hur stor är vinkel C?", ISOSCELES, "120"),
  ],
};
