// DIAGNOS AS1, Skriftlig addition.
// Elevbladet är s. 52, lärarsidorna s. 51–53 och facit står på s. 51 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret. Diamant ber läraren titta efter fel av typen ± 1, ± 10 och ± 100
// (s. 51), och bara de visas som anteckning vid ett fel svar (notes). Bladet ställer upp talen under
// varandra ("Beräkna 67 + 86"); här står de på en rad, "67 + 86 = [a]". Facit skriver 1 207 med
// tusentalsmellanrum; svaret står som 1207 och eleven får skriva det med eller utan mellanrum.
export default {
  code: "AS1",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig addition",
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
      rows: ["67 + 86 = [a]"],
      boxes: { a: { accept: ["153"] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["264 + 83 = [a]"],
      boxes: { a: { accept: ["347"] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["429 + 156 = [a]"],
      boxes: { a: { accept: ["585"] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["347 + 288 = [a]"],
      boxes: { a: { accept: ["635"] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["739 + 468 = [a]"],
      boxes: { a: { accept: ["1207"] } },
    },
  ],
};
