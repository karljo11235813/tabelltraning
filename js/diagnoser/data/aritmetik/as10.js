// DIAGNOS AS10, Skriftlig multiplikation med tal i decimalform.
// Elevbladet är s. 82, lärarsidorna s. 81–83 och facit står på s. 81 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret.
export default {
  code: "AS10",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig multiplikation med tal i decimalform",
  time: { min: 5, max: 6, stop: 12 },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "",
      points: "each",
      rows: ["27 · 0,8 = [a]"],
      boxes: { a: { accept: ["21,6"] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["8,9 · 0,6 = [a]"],
      boxes: { a: { accept: ["5,34"] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["1,42 · 2,5 = [a]"],
      boxes: { a: { accept: ["3,55"] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["26,4 · 0,15 = [a]"],
      boxes: { a: { accept: ["3,96"] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["0,045 · 26,4 = [a]"],
      boxes: { a: { accept: ["1,188"] } },
    },
  ],
};
