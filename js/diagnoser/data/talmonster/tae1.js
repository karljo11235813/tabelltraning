// DIAGNOS TAe1, Enkla ekvationer.
// Elevbladet är s. 49, lärarsidan s. 48 och facit står på s. 48 i 3_Talmonster.pdf.
//
// 8 kolumner på resultatblanketten (s. 50): 1a–d och 2a–d, en skärm och en kolumn per etikett. Eleven ska hitta talet
// som står i stället för x (1) eller a (2); rutan står efter "Svar:" som på bladet. Facit skriver "x = 4" och "a = 1":
// talet är svaret, och "x = 4" godtas också (ett inledande "x =" ignoreras).

export default {
  code: "TAe1",
  area: "Talmönster och algebra",
  sub: "TAe Ekvationer",
  title: "Enkla ekvationer",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  variables: "ax",
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: "Vilket tal ska stå istället för x?", rows: ["4 + x = 8    Svar: [a]"], points: "each", boxes: { a: { accept: ["4"] } } },
    { label: "1b", text: "Vilket tal ska stå istället för x?", rows: ["12 = 20 − x    Svar: [a]"], points: "each", boxes: { a: { accept: ["8"] } } },
    { label: "1c", text: "Vilket tal ska stå istället för x?", rows: ["3 · x = 6    Svar: [a]"], points: "each", boxes: { a: { accept: ["2"] } } },
    { label: "1d", text: "Vilket tal ska stå istället för x?", rows: ["4 = {x|3}    Svar: [a]"], points: "each", boxes: { a: { accept: ["12"] } } },
    { label: "2a", text: "Vilket tal ska stå istället för a?", rows: ["5 + a = 7 − a    Svar: [a]"], points: "each", boxes: { a: { accept: ["1"] } } },
    { label: "2b", text: "Vilket tal ska stå istället för a?", rows: ["2 · a = 5 + a    Svar: [a]"], points: "each", boxes: { a: { accept: ["5"] } } },
    { label: "2c", text: "Vilket tal ska stå istället för a?", rows: ["{a|5} = 4    Svar: [a]"], points: "each", boxes: { a: { accept: ["20"] } } },
    { label: "2d", text: "Vilket tal ska stå istället för a?", rows: ["a + 3a = 20    Svar: [a]"], points: "each", boxes: { a: { accept: ["5"] } } },
  ],
};
