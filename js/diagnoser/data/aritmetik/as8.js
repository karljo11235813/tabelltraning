// DIAGNOS AS8, Skriftlig division, tvåsiffrig nämnare.
// Elevbladet är s. 76, lärarsidorna s. 75–77 och facit står på s. 75 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret. Bladet skriver divisionerna som stående bråk.
//
// Facit till uppgift 4 är "5,4 eller 5 rest 10"; båda står i accept. Rutan läser också "5 r 10" och
// "5 (rest 10)" som kvot och rest.
export default {
  code: "AS8",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig division, tvåsiffrig nämnare",
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
      rows: ["{460|20} = [a]"],
      boxes: { a: { accept: ["23"] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["{363|11} = [a]"],
      boxes: { a: { accept: ["33"] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["{782|23} = [a]"],
      boxes: { a: { accept: ["34"] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["{135|25} = [a]"],
      boxes: { a: { accept: ["5,4", "5 rest 10"] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["{1134|42} = [a]"],
      boxes: { a: { accept: ["27"] } },
    },
  ],
};
