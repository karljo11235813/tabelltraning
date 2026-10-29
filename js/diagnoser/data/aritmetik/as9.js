// DIAGNOS AS9, Skriftlig addition och subtraktion, tal i decimalform.
// Elevbladet är s. 79, lärarsidorna s. 78–80 och facit står på s. 78 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret.
export default {
  code: "AS9",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig addition och subtraktion, tal i decimalform",
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
      rows: ["3,26 + 8,37 = [a]"],
      boxes: { a: { accept: ["11,63"] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["6,052 + 5,659 = [a]"],
      boxes: { a: { accept: ["11,711"] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["13,62 - 5,41 = [a]"],
      boxes: { a: { accept: ["8,21"] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["6,27 - 5,84 = [a]"],
      boxes: { a: { accept: ["0,43"] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["13,345 - 8,267 = [a]"],
      boxes: { a: { accept: ["5,078"] } },
    },
  ],
};
