// DIAGNOS TAu1, Enkla uttryck.
// Elevbladet är s. 29–30, lärarsidan s. 28 och facit står på s. 28 i 3_Talmonster.pdf.
//
// 9 kolumner på resultatblanketten (s. 31): 1a–4b och 5. 5 är en pappersuppgift (rita en figur; facit: en rätvinklig
// triangel med kateterna a och b och hypotenusan c), som inte ger poäng på sidan, så de rättade kolumnerna är 8
// (COLUMNS i data.test.js). Lärarsidan säger "cirka 5 minuter", så min och max är båda 5.
//
// 1a–4b ber om ett uttryck (algebra: "equivalent"): varje uttryck som är lika med facits för alla värden på
// bokstäverna är rätt, så s + s + s + s, 2b + 2h och bh/2 är också rätt. Ett tal är fel.
//
// 1–3 har bladets figurer med beteckningarna (s, b, h); 4 har ingen figur på bladet och får ingen här.
//
// Bladets tryckfel: 3 säger "En parallellogram …" men frågar efter "rombens omkrets" och "rombens area"; facit
// (2(b + s), b · h) gäller parallellogrammen, så frågorna skrivs "parallellogrammens".
const SQUARE = {
  view: [100, 76],
  pieces: [{ path: "M20 8H80V68H20Z" }],
  labels: [{ at: [90, 38], text: "s" }],
};

const RECTANGLE = {
  view: [160, 84],
  pieces: [{ path: "M10 8H140V64H10Z" }],
  labels: [{ at: [150, 36], text: "h" }, { at: [75, 77], text: "b" }],
};

const PARALLELOGRAM = {
  view: [180, 84],
  pieces: [{ path: "M10 64L46 8H170L134 64Z" }],
  lines: ["M46 8V64"],
  labels: [{ at: [56, 36], text: "h" }, { at: [162, 36], text: "s" }, { at: [72, 77], text: "b" }],
};

export default {
  code: "TAu1",
  area: "Talmönster och algebra",
  sub: "TAu Algebraiska uttryck",
  title: "Enkla uttryck",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  variables: "abchs",
  screens: [
    {
      label: "1a",
      text: "Detta är en kvadrat med sidan s. Skriv ett uttryck för kvadratens omkrets.",
      points: "each",
      figure: SQUARE,
      boxes: { a: { accept: ["4s"], algebra: "equivalent" } },
    },
    {
      label: "1b",
      text: "Detta är en kvadrat med sidan s. Skriv ett uttryck för kvadratens area.",
      points: "each",
      figure: SQUARE,
      boxes: { a: { accept: ["s²"], algebra: "equivalent" } },
    },
    {
      label: "2a",
      text: "En rektangel har basen b och höjden h. Skriv ett uttryck för rektangelns omkrets.",
      points: "each",
      figure: RECTANGLE,
      boxes: { a: { accept: ["2(b + h)"], algebra: "equivalent" } },
    },
    {
      label: "2b",
      text: "En rektangel har basen b och höjden h. Skriv ett uttryck för rektangelns area.",
      points: "each",
      figure: RECTANGLE,
      boxes: { a: { accept: ["b · h"], algebra: "equivalent" } },
    },
    {
      label: "3a",
      text: "En parallellogram har basen b, sidan s och höjden h. Skriv ett uttryck för parallellogrammens omkrets.",
      points: "each",
      figure: PARALLELOGRAM,
      boxes: { a: { accept: ["2(b + s)"], algebra: "equivalent" } },
    },
    {
      label: "3b",
      text: "En parallellogram har basen b, sidan s och höjden h. Skriv ett uttryck för parallellogrammens area.",
      points: "each",
      figure: PARALLELOGRAM,
      boxes: { a: { accept: ["b · h"], algebra: "equivalent" } },
    },
    {
      label: "4a",
      text: "En triangel har sidorna a, b och c, där b är triangelns bas. Den har höjden h. Skriv ett uttryck för triangelns omkrets.",
      points: "each",
      boxes: { a: { accept: ["a + b + c"], algebra: "equivalent" } },
    },
    {
      label: "4b",
      text: "En triangel har sidorna a, b och c, där b är triangelns bas. Den har höjden h. Skriv ett uttryck för triangelns area.",
      points: "each",
      boxes: { a: { accept: ["b · h/2"], algebra: "equivalent" } },
    },
    {
      kind: "paper",
      label: "5",
      text: "Rita en figur som har omkretsen a + b + c och arean a · b/2.",
    },
  ],
};
