// DIAGNOS RD5, Huvudräkning med tal i decimalform, multiplikation och division.
// Elevbladet är s. 47, lärarsidorna s. 46 och facit står på s. 46 i 2_Rationella_tal.pdf.
//
// 12 skärmar, en per etikett (1a–4c), var och en med en rad och en ruta, a. Resultatblanketten har en kolumn
// per etikett: 12 i allt. Diagnosen är huvudräkning, så paper är false. Division skrivs med / på bladet, och
// läraren ska säga det till eleverna. Läraren ber om särskild uppmärksamhet på 4b och 4c (på lärarsidan
// "uppgifterna 11 och 12"), innehållsdivision.
export default {
  code: "RD5",
  area: "Rationella tal",
  sub: "RD Tal i decimalform",
  title: "Huvudräkning med tal i decimalform, multiplikation och division",
  time: { min: 6, max: 7, stop: 15 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "",
      points: "each",
      rows: ["9 · 1,5 = [a]"],
      boxes: { a: { accept: ["13,5"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["30 · 0,04 = [a]"],
      boxes: { a: { accept: ["1,2"] } },
    },
    {
      label: "1c",
      text: "",
      points: "each",
      rows: ["0,7 · 50 = [a]"],
      boxes: { a: { accept: ["35"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["0,4 · 0,25 = [a]"],
      boxes: { a: { accept: ["0,1"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["0,5 · 1,4 = [a]"],
      boxes: { a: { accept: ["0,7"] } },
    },
    {
      label: "2c",
      text: "",
      points: "each",
      rows: ["1,1 · 2,25 = [a]"],
      boxes: { a: { accept: ["2,475"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["6,25 / 2 = [a]"],
      boxes: { a: { accept: ["3,125"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["15,6 / 3 = [a]"],
      boxes: { a: { accept: ["5,2"] } },
    },
    {
      label: "3c",
      text: "",
      points: "each",
      rows: ["10,05 / 5 = [a]"],
      boxes: { a: { accept: ["2,01"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["0,16 / 0,8 = [a]"],
      boxes: { a: { accept: ["0,2"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["0,44 / 0,4 = [a]"],
      boxes: { a: { accept: ["1,1"] } },
    },
    {
      label: "4c",
      text: "",
      points: "each",
      rows: ["0,7 / 0,01 = [a]"],
      boxes: { a: { accept: ["70"] } },
    },
  ],
};
