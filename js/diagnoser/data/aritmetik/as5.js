// DIAGNOS AS5, Skriftlig division.
// Elevbladet är s. 65, lärarsidorna s. 64–66 och facit står på s. 64 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret. Bladet skriver divisionerna som stående bråk, och det gör raderna
// här också.
export default {
  code: "AS5",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig division",
  time: { min: 4, max: 5, stop: 10 },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "",
      points: "each",
      rows: ["{69|3} = [a]"],
      boxes: { a: { accept: ["23"] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["{84|7} = [a]"],
      boxes: { a: { accept: ["12"] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["{176|4} = [a]"],
      boxes: { a: { accept: ["44"] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["{864|8} = [a]"],
      boxes: { a: { accept: ["108"] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["{1026|9} = [a]"],
      boxes: { a: { accept: ["114"] } },
    },
  ],
};
