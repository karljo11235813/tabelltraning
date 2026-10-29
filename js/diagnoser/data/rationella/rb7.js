// DIAGNOS RB7, Multiplikation och division av tal i bråkform.
// Elevbladet är s. 30, lärarsidorna s. 29 och facit står på s. 29 i 2_Rationella_tal.pdf (rubriken där är "RB 7").
//
// 12 skärmar, en per etikett (1a–4c), var och en med en rad och en ruta, a. Resultatblanketten (s. 31) har en
// kolumn per etikett: 12 i allt. Division skrivs med / på bladet ("6/5 / 3"). 1c, 2c och 3c har ett blandat tal
// i raden ({1|3|5} är 1 3/5).
//
// Uppgiften är taluppfattning och ber inte om någon form, så rutorna rättas på värdet. Facit skriver flera svar i
// två former (1b 6/4 = 1 1/2, 2a 15/6 = 2 1/2, 2b 6/20 = 3/10, 2c 12/10 = 1 1/5); båda står i accept. Ett blandat
// tal skrivs "1 1/2".
export default {
  code: "RB7",
  area: "Rationella tal",
  sub: "RB Tal i bråkform",
  title: "Multiplikation och division av tal i bråkform",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "",
      points: "each",
      rows: ["6 · {1|2} = [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["{1|4} · 6 = [a]"],
      boxes: { a: { accept: ["6/4", "1 1/2"] } },
    },
    {
      label: "1c",
      text: "",
      points: "each",
      rows: ["4 · {1|1|5} = [a]"],
      boxes: { a: { accept: ["4 4/5"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["3 · {5|6} = [a]"],
      boxes: { a: { accept: ["15/6", "2 1/2"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["{3|4} · {2|5} = [a]"],
      boxes: { a: { accept: ["6/20", "3/10"] } },
    },
    {
      label: "2c",
      text: "",
      points: "each",
      rows: ["{1|1|2} · {4|5} = [a]"],
      boxes: { a: { accept: ["12/10", "1 1/5"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["{6|5} / 3 = [a]"],
      boxes: { a: { accept: ["2/5"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["{1|3} / 4 = [a]"],
      boxes: { a: { accept: ["1/12"] } },
    },
    {
      label: "3c",
      text: "",
      points: "each",
      rows: ["{1|3|5} / 4 = [a]"],
      boxes: { a: { accept: ["2/5"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["2 / {1|3} = [a]"],
      boxes: { a: { accept: ["6"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["{3|4} / {1|4} = [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "4c",
      text: "",
      points: "each",
      rows: ["{2|5} / {3|4} = [a]"],
      boxes: { a: { accept: ["8/15"] } },
    },
  ],
};
