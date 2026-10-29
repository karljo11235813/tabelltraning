// DIAGNOS TAu4, Multiplikation av binom.
// Elevbladet är s. 40, lärarsidan s. 39 och facit står på s. 39 i 3_Talmonster.pdf.
//
// 12 kolumner på resultatblanketten (s. 41): 1a–3d, en skärm och en kolumn var (bladet har a och b, c och d
// bredvid varandra). Lärarsidan säger "cirka 5 minuter", så min och max är båda 5.
//
// Alla rutor är "Utveckla" (algebra: "simplified"): facits utvecklade och sammanslagna form, i vilken ordning som helst
// (x² − 6xy + 9y² är samma som facits x² + 9y² − 6xy) och med 1/4 eller 0,25, är rätt. Ett svar som inte är
// utvecklat eller där termerna inte är sammanslagna (x² + 3x − 3x − 9) är fel.
export default {
  code: "TAu4",
  area: "Talmönster och algebra",
  sub: "TAu Algebraiska uttryck",
  title: "Multiplikation av binom",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  variables: "xy",
  screens: [
    {
      label: "1a",
      text: "Utveckla",
      points: "each",
      rows: ["(x + 2)(x + 1) = [a]"],
      boxes: { a: { accept: ["x² + 3x + 2"], algebra: "simplified" } },
    },
    {
      label: "1b",
      text: "Utveckla",
      points: "each",
      rows: ["(3x + 2)(2x − 4) = [a]"],
      boxes: { a: { accept: ["6x² − 8x − 8"], algebra: "simplified" } },
    },
    {
      label: "1c",
      text: "Utveckla",
      points: "each",
      rows: ["(x − 2)(x − 3) = [a]"],
      boxes: { a: { accept: ["x² − 5x + 6"], algebra: "simplified" } },
    },
    {
      label: "1d",
      text: "Utveckla",
      points: "each",
      rows: ["(x − 3)(x + 1) = [a]"],
      boxes: { a: { accept: ["x² − 2x − 3"], algebra: "simplified" } },
    },
    {
      label: "2a",
      text: "Utveckla",
      points: "each",
      rows: ["(x + 3)(x − 3) = [a]"],
      boxes: { a: { accept: ["x² − 9"], algebra: "simplified" } },
    },
    {
      label: "2b",
      text: "Utveckla",
      points: "each",
      rows: ["(2x − 1)(2x + 1) = [a]"],
      boxes: { a: { accept: ["4x² − 1"], algebra: "simplified" } },
    },
    {
      label: "2c",
      text: "Utveckla",
      points: "each",
      rows: ["(x + {1|2})(x − {1|2}) = [a]"],
      boxes: { a: { accept: ["x² − 1/4"], algebra: "simplified" } },
    },
    {
      label: "2d",
      text: "Utveckla",
      points: "each",
      rows: ["(4x − √{3})(4x + √{3}) = [a]"],
      boxes: { a: { accept: ["16x² − 3"], algebra: "simplified" } },
    },
    {
      label: "3a",
      text: "Utveckla",
      points: "each",
      rows: ["(2x + 1)^2 = [a]"],
      boxes: { a: { accept: ["4x² + 4x + 1"], algebra: "simplified" } },
    },
    {
      label: "3b",
      text: "Utveckla",
      points: "each",
      rows: ["(x − 3y)^2 = [a]"],
      boxes: { a: { accept: ["x² + 9y² − 6xy"], algebra: "simplified" } },
    },
    {
      label: "3c",
      text: "Utveckla",
      points: "each",
      rows: ["(3x − 4)^2 = [a]"],
      boxes: { a: { accept: ["9x² − 24x + 16"], algebra: "simplified" } },
    },
    {
      label: "3d",
      text: "Utveckla",
      points: "each",
      rows: ["(x + {1|2})^2 = [a]"],
      boxes: { a: { accept: ["x² + x + 1/4"], algebra: "simplified" } },
    },
  ],
};
