// DIAGNOS TAu3, Förenkling av uttryck.
// Elevbladet är s. 36–37, lärarsidan s. 35 och facit står på s. 35 i 3_Talmonster.pdf.
//
// 14 kolumner på resultatblanketten (s. 38): 1a–7b, en skärm och en kolumn var. Lärarsidan säger "cirka 5 minuter",
// så min och max är båda 5.
//
// Alla rutor är "Förenkla" (algebra: "simplified"): facits form och omskrivningar av den (annan ordning, 1/6 · x, 4x^-1)
// är rätt, men ett uttryck som inte är förenklat (x + 2x, 2(x + 3) i stället för 2x + 6) är fel.
//
// Tryckfel i facit (s. 35), rättade efter bladet (s. 36–37):
//   1a: facit "3x – 1", men 5x + 4 – 2x – 3 = 3x + 1.
//   5a: facit "3x² – 1", men 2x² + x(x − 1) = 3x² − x.
// Bladets "2x+ 4" i 1b skrivs med mellanslag.
export default {
  code: "TAu3",
  area: "Talmönster och algebra",
  sub: "TAu Algebraiska uttryck",
  title: "Förenkling av uttryck",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  variables: "abxy",
  screens: [
    {
      label: "1a",
      text: "Förenkla",
      points: "each",
      rows: ["5x + 4 − 2x − 3 = [a]"],
      boxes: { a: { accept: ["3x + 1"], algebra: "simplified" } },
    },
    {
      label: "1b",
      text: "Förenkla",
      points: "each",
      rows: ["2x + 4 − 5x + 3 = [a]"],
      boxes: { a: { accept: ["7 − 3x"], algebra: "simplified" } },
    },
    {
      label: "2a",
      text: "Förenkla",
      points: "each",
      rows: ["3 − (2x + 3) = [a]"],
      boxes: { a: { accept: ["−2x"], algebra: "simplified" } },
    },
    {
      label: "2b",
      text: "Förenkla",
      points: "each",
      rows: ["2x − (4 − x) = [a]"],
      boxes: { a: { accept: ["3x − 4"], algebra: "simplified" } },
    },
    {
      label: "3a",
      text: "Förenkla",
      points: "each",
      rows: ["3 + 2(x + 4) + x = [a]"],
      boxes: { a: { accept: ["3x + 11"], algebra: "simplified" } },
    },
    {
      label: "3b",
      text: "Förenkla",
      points: "each",
      rows: ["6x − 2(3 − x) = [a]"],
      boxes: { a: { accept: ["8x − 6"], algebra: "simplified" } },
    },
    {
      label: "4a",
      text: "Förenkla",
      points: "each",
      rows: ["2x^2 + 3 − x^2 − 4 + 3x^2 − 1 = [a]"],
      boxes: { a: { accept: ["4x² − 2"], algebra: "simplified" } },
    },
    {
      label: "4b",
      text: "Förenkla",
      points: "each",
      rows: ["2x^3 + 5x^3 − x^3 = [a]"],
      boxes: { a: { accept: ["6x³"], algebra: "simplified" } },
    },
    {
      label: "5a",
      text: "Förenkla",
      points: "each",
      rows: ["2x^2 + x(x − 1) = [a]"],
      boxes: { a: { accept: ["3x² − x"], algebra: "simplified" } },
    },
    {
      label: "5b",
      text: "Förenkla",
      points: "each",
      rows: ["1 − 2(2x − 5) = [a]"],
      boxes: { a: { accept: ["11 − 4x"], algebra: "simplified" } },
    },
    {
      label: "6a",
      text: "Förenkla",
      points: "each",
      rows: ["3a^2 · 2a = [a]"],
      boxes: { a: { accept: ["6a³"], algebra: "simplified" } },
    },
    {
      label: "6b",
      text: "Förenkla",
      points: "each",
      rows: ["3ab · b^2 − a · b^3 = [a]"],
      boxes: { a: { accept: ["2ab³"], algebra: "simplified" } },
    },
    {
      label: "7a",
      text: "Förenkla",
      points: "each",
      rows: ["{x|6} + {y|3} = [a]"],
      boxes: { a: { accept: ["(x + 2y)/6"], algebra: "simplified" } },
    },
    {
      label: "7b",
      text: "Förenkla",
      points: "each",
      rows: ["{1|x} + {3|x} = [a]"],
      boxes: { a: { accept: ["4/x"], algebra: "simplified" } },
    },
  ],
};
