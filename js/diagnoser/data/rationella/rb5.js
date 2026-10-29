// DIAGNOS RB5, Taluppfattning av bråk.
// Elevbladet är s. 24, lärarsidorna s. 23 och facit står på s. 23 i 2_Rationella_tal.pdf.
//
// 15 skärmar, en per etikett (1a–5c), var och en med en rad och en ruta, a. Resultatblanketten har en kolumn
// per etikett: 15 i allt. Division skrivs med / på bladet ("2/3 / 2"), och läraren ska säga det till eleverna.
//
// Uppgiften är taluppfattning och ber inte om någon form, så rutorna rättas på värdet: 2/3 och 4/6 är lika rätta.
// 3c har två facitsvar, 4/3 och 1 1/3.
export default {
  code: "RB5",
  area: "Rationella tal",
  sub: "RB Tal i bråkform",
  title: "Taluppfattning av bråk",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "",
      points: "each",
      rows: ["{1|3} + {1|3} = [a]"],
      boxes: { a: { accept: ["2/3"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["{1|5} + {1|5} + {1|5} = [a]"],
      boxes: { a: { accept: ["3/5"] } },
    },
    {
      label: "1c",
      text: "",
      points: "each",
      rows: ["{2|5} + {2|5} = [a]"],
      boxes: { a: { accept: ["4/5"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["{2|3} - {1|3} = [a]"],
      boxes: { a: { accept: ["1/3"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["{4|5} - {2|5} = [a]"],
      boxes: { a: { accept: ["2/5"] } },
    },
    {
      label: "2c",
      text: "",
      points: "each",
      rows: ["1 - {3|4} = [a]"],
      boxes: { a: { accept: ["1/4"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["3 · {1|5} = [a]"],
      boxes: { a: { accept: ["3/5"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["2 · {2|5} = [a]"],
      boxes: { a: { accept: ["4/5"] } },
    },
    {
      label: "3c",
      text: "",
      points: "each",
      rows: ["4 · {1|3} = [a]"],
      boxes: { a: { accept: ["4/3", "1 1/3"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["{2|3} / 2 = [a]"],
      boxes: { a: { accept: ["1/3"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["{4|5} / 2 = [a]"],
      boxes: { a: { accept: ["2/5"] } },
    },
    {
      label: "4c",
      text: "",
      points: "each",
      rows: ["{3|4} / 3 = [a]"],
      boxes: { a: { accept: ["1/4"] } },
    },
    {
      label: "5a",
      text: "",
      points: "each",
      rows: ["1 / {1|2} = [a]"],
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "5b",
      text: "",
      points: "each",
      rows: ["1 / {1|3} = [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "5c",
      text: "",
      points: "each",
      rows: ["{2|3} / {1|3} = [a]"],
      boxes: { a: { accept: ["2"] } },
    },
  ],
};
