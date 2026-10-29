// DIAGNOS RD4, Huvudräkning med tal i decimalform, addition och subtraktion.
// Elevbladet är s. 44, lärarsidorna s. 43 och facit står på s. 43 i 2_Rationella_tal.pdf.
//
// 12 skärmar, en per etikett (1a–4c), var och en med en rad och en ruta, a. Resultatblanketten har en kolumn
// per etikett: 12 i allt. Diagnosen är huvudräkning, så paper är false. Facit skriver 3c som "1,2 (0)", alltså
// 1,20; rutan läser 1,2 och 1,20 som samma tal.
export default {
  code: "RD4",
  area: "Rationella tal",
  sub: "RD Tal i decimalform",
  title: "Huvudräkning med tal i decimalform, addition och subtraktion",
  time: { min: 5, max: 6, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "",
      points: "each",
      rows: ["4 + 2,15 = [a]"],
      boxes: { a: { accept: ["6,15"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["4,4 + 5,6 = [a]"],
      boxes: { a: { accept: ["10"] } },
    },
    {
      label: "1c",
      text: "",
      points: "each",
      rows: ["2,3 + 1,8 = [a]"],
      boxes: { a: { accept: ["4,1"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["1,07 + 0,20 = [a]"],
      boxes: { a: { accept: ["1,27"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["0,54 + 0,52 = [a]"],
      boxes: { a: { accept: ["1,06"] } },
    },
    {
      label: "2c",
      text: "",
      points: "each",
      rows: ["7,2 + 7,9 = [a]"],
      boxes: { a: { accept: ["15,1"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["5,9 - 2,7 = [a]"],
      boxes: { a: { accept: ["3,2"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["7,2 - 3,9 = [a]"],
      boxes: { a: { accept: ["3,3"] } },
    },
    {
      label: "3c",
      text: "",
      points: "each",
      rows: ["4,65 - 3,45 = [a]"],
      boxes: { a: { accept: ["1,2"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["8,24 - 3,98 = [a]"],
      boxes: { a: { accept: ["4,26"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["1,6 - 0,65 = [a]"],
      boxes: { a: { accept: ["0,95"] } },
    },
    {
      label: "4c",
      text: "",
      points: "each",
      rows: ["1,56 - 0,57 = [a]"],
      boxes: { a: { accept: ["0,99"] } },
    },
  ],
};
