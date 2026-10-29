// DIAGNOS AS2, Skriftlig subtraktion.
// Elevbladet är s. 55, lärarsidorna s. 54–56 och facit står på s. 54 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret. Diamant ber läraren titta efter fel av typen ± 1, ± 10 och ± 100
// (s. 54), och bara de visas som anteckning vid ett fel svar (notes).
export default {
  code: "AS2",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig subtraktion",
  time: { min: 3, max: 4, stop: 8 },
  paper: true,
  symbols: false,
  notes: [1, 10, 100],
  example: null,
  screens: [
    {
      label: "1",
      text: "",
      points: "each",
      rows: ["82 - 47 = [a]"],
      boxes: { a: { accept: ["35"] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["146 - 69 = [a]"],
      boxes: { a: { accept: ["77"] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["632 - 427 = [a]"],
      boxes: { a: { accept: ["205"] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["541 - 275 = [a]"],
      boxes: { a: { accept: ["266"] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["703 - 256 = [a]"],
      boxes: { a: { accept: ["447"] } },
    },
  ],
};
