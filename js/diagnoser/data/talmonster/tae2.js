// DIAGNOS TAe2, Ekvationer.
// Elevbladet är s. 52, lärarsidan s. 51 och facit står på s. 51 i 3_Talmonster.pdf.
//
// 7 kolumner på resultatblanketten (s. 53): 1–7, en skärm och en kolumn per uppgift. Bladet säger "Redovisa lösningen
// till höger", så eleven räknar på ett lösblad (paper: true) och skriver bara svaret. Facit skriver "x=2": talet är
// svaret, och "x = 2" godtas också. 6 har oändligt många lösningar (facit "Alla värden på x"; alla ord för alla x
// godtas) och 7 saknar lösning (facit "Lösning saknas"; alla ord för ingen lösning godtas).

export default {
  code: "TAe2",
  area: "Talmönster och algebra",
  sub: "TAe Ekvationer",
  title: "Ekvationer",
  time: { min: 5, max: 6, stop: 12 },
  paper: true,
  symbols: false,
  variables: "x",
  notes: [],
  example: null,
  screens: [
    { label: "1", text: "Lös ekvationen.", rows: ["3x + 4 = 10    Svar: [a]"], points: "each", boxes: { a: { accept: ["2"] } } },
    { label: "2", text: "Lös ekvationen.", rows: ["3 = 2x − 5    Svar: [a]"], points: "each", boxes: { a: { accept: ["4"] } } },
    { label: "3", text: "Lös ekvationen.", rows: ["2x + 3 = 4x + 3    Svar: [a]"], points: "each", boxes: { a: { accept: ["0"] } } },
    { label: "4", text: "Lös ekvationen.", rows: ["4x − 2 = x + 7    Svar: [a]"], points: "each", boxes: { a: { accept: ["3"] } } },
    { label: "5", text: "Lös ekvationen.", rows: ["4 − x = 2x + 1    Svar: [a]"], points: "each", boxes: { a: { accept: ["1"] } } },
    { label: "6", text: "Lös ekvationen.", rows: ["2x + 8 = 8 + 2x    Svar: [a]"], points: "each", boxes: { a: { accept: ["Alla värden på x"] } } },
    { label: "7", text: "Lös ekvationen.", rows: ["4x + 1 = 5 + 4x    Svar: [a]"], points: "each", boxes: { a: { accept: ["Lösning saknas"] } } },
  ],
};
