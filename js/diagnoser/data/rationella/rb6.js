// DIAGNOS RB6, Addition och subtraktion av tal i bråkform.
// Elevbladet är s. 27, lärarsidorna s. 26 och facit står på s. 26 i 2_Rationella_tal.pdf.
//
// 12 skärmar, en per etikett (1a–4c), var och en med en rad och en ruta, a. Resultatblanketten (s. 28) har en
// kolumn per etikett: 12 i allt. 3c och 4c har ett blandat tal i raden ({1|3|5} är 1 3/5).
//
// Uppgiften är taluppfattning och ber inte om någon form, så rutorna rättas på värdet. Facit skriver några svar i
// två former (1c 4/3 = 1 1/3, 2c 22/15 = 1 7/15, 3a 2/4 = 1/2); båda står i accept, och varje annat lika stort tal
// godtas ändå. Ett blandat tal skrivs "1 1/3".
export default {
  code: "RB6",
  area: "Rationella tal",
  sub: "RB Tal i bråkform",
  title: "Addition och subtraktion av tal i bråkform",
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
      rows: ["{1|5} + {3|5} = [a]"],
      boxes: { a: { accept: ["4/5"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["{5|9} + {3|9} = [a]"],
      boxes: { a: { accept: ["8/9"] } },
    },
    {
      label: "1c",
      text: "",
      points: "each",
      rows: ["{2|3} + {2|3} = [a]"],
      boxes: { a: { accept: ["4/3", "1 1/3"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["{3|4} + {1|8} = [a]"],
      boxes: { a: { accept: ["7/8"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["{1|3} + {1|4} = [a]"],
      boxes: { a: { accept: ["7/12"] } },
    },
    {
      label: "2c",
      text: "",
      points: "each",
      rows: ["{4|5} + {2|3} = [a]"],
      boxes: { a: { accept: ["22/15", "1 7/15"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["{3|4} - {1|4} = [a]"],
      boxes: { a: { accept: ["2/4", "1/2"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["{5|7} - {3|7} = [a]"],
      boxes: { a: { accept: ["2/7"] } },
    },
    {
      label: "3c",
      text: "",
      points: "each",
      rows: ["{1|3|5} - {4|5} = [a]"],
      boxes: { a: { accept: ["4/5"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["{3|4} - {1|2} = [a]"],
      boxes: { a: { accept: ["1/4"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["{3|5} - {1|3} = [a]"],
      boxes: { a: { accept: ["4/15"] } },
    },
    {
      label: "4c",
      text: "",
      points: "each",
      rows: ["{2|2|3} - {3|4} = [a]"],
      boxes: { a: { accept: ["1 11/12"] } },
    },
  ],
};
