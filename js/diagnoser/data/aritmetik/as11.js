// DIAGNOS AS11, Skriftlig division, tal i decimalform.
// Elevbladet är s. 85, lärarsidorna s. 84–86 och facit står på s. 84 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret. Bladet skriver divisionerna som stående bråk.
export default {
  code: "AS11",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig division, tal i decimalform",
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
      rows: ["{342|0,9} = [a]"],
      boxes: { a: { accept: ["380"] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["{13,6|0,8} = [a]"],
      boxes: { a: { accept: ["17"] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["{79,2|0,11} = [a]"],
      boxes: { a: { accept: ["720"] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["{0,522|0,12} = [a]"],
      boxes: { a: { accept: ["4,35"] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["{6|0,48} = [a]"],
      boxes: { a: { accept: ["12,5"] } },
    },
  ],
};
