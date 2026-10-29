// DIAGNOS AUn3, Negativa tal, multiplikation och division.
// Elevbladet är s. 98, lärarsidorna s. 97–99 och facit står på s. 97 i 1_Aritmetik.pdf.
//
// 12 skärmar, en per etikett på bladet (1a, 1b, …, 6b), var och en med en ruta, a. Resultatblanketten har en
// kolumn per etikett: 12 i allt. Divisionerna är stående bråk på
// bladet; att skriva av dem som bråk ("-4/2") är inget svar. På bladet står mellanrum i några paranteser,
// "(− 1)" och "(− 8)"; här står de utan mellanrum.
export default {
  code: "AUn3",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Negativa tal, multiplikation och division",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: true,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Beräkna",
      points: "each",
      rows: ["2 · (-1) = [a]"],
      boxes: { a: { accept: ["-2"] } },
    },
    {
      label: "1b",
      text: "Beräkna",
      points: "each",
      rows: ["(-2) · 3 = [a]"],
      boxes: { a: { accept: ["-6"] } },
    },
    {
      label: "2a",
      text: "Beräkna",
      points: "each",
      rows: ["(-3) · (-1) = [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "2b",
      text: "Beräkna",
      points: "each",
      rows: ["(-6) · (-5) = [a]"],
      boxes: { a: { accept: ["30"] } },
    },
    {
      label: "3a",
      text: "Beräkna",
      points: "each",
      rows: ["(-7) · 9 = [a]"],
      boxes: { a: { accept: ["-63"] } },
    },
    {
      label: "3b",
      text: "Beräkna",
      points: "each",
      rows: ["(-9) · (-8) = [a]"],
      boxes: { a: { accept: ["72"] } },
    },
    {
      label: "4a",
      text: "Beräkna",
      points: "each",
      rows: ["{(-4)|2} = [a]"],
      boxes: { a: { accept: ["-2"] } },
    },
    {
      label: "4b",
      text: "Beräkna",
      points: "each",
      rows: ["{2|(-1)} = [a]"],
      boxes: { a: { accept: ["-2"] } },
    },
    {
      label: "5a",
      text: "Beräkna",
      points: "each",
      rows: ["{(-4)|(-2)} = [a]"],
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "5b",
      text: "Beräkna",
      points: "each",
      rows: ["{(-5)|(-1)} = [a]"],
      boxes: { a: { accept: ["5"] } },
    },
    {
      label: "6a",
      text: "Beräkna",
      points: "each",
      rows: ["{8|(-2)} = [a]"],
      boxes: { a: { accept: ["-4"] } },
    },
    {
      label: "6b",
      text: "Beräkna",
      points: "each",
      rows: ["{(-9)|(-3)} = [a]"],
      boxes: { a: { accept: ["3"] } },
    },
  ],
};
