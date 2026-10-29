// DIAGNOS TAe3, Ekvationer, rationella tal.
// Elevbladet är s. 55, lärarsidan s. 54 och facit står på s. 54 i 3_Talmonster.pdf.
//
// 6 kolumner: en skärm och en kolumn per uppgift (1–6). Resultatblanketten (s. 56) trycker kolumnerna 1–7, men bladet
// har bara sex uppgifter. Bladet säger "Redovisa lösningen till höger", så eleven räknar på ett lösblad (paper: true)
// och skriver bara svaret. Lärarsidan säger "cirka 10 minuter" (min = max) och avbryt efter cirka 20.
//
// Facit: 1 x = −3, 2 x = 2/3, 3 x = 3/4, 4 x = 1/2, 5 x = 5, 6 x = −1 1/2. Varje lika stort tal godtas (3/4 = 0,75,
// −1 1/2 = −3/2 = −1,5), och "x = …" också.

export default {
  code: "TAe3",
  area: "Talmönster och algebra",
  sub: "TAe Ekvationer",
  title: "Ekvationer, rationella tal",
  time: { min: 10, max: 10, stop: 20 },
  paper: true,
  symbols: false,
  variables: "x",
  notes: [],
  example: null,
  screens: [
    { label: "1", text: "Lös ekvationen.", rows: ["3x + 8 = 2x + 5    Svar: [a]"], points: "each", boxes: { a: { accept: ["−3"] } } },
    { label: "2", text: "Lös ekvationen.", rows: ["4x − 6 = x − 4    Svar: [a]"], points: "each", boxes: { a: { accept: ["2/3"] } } },
    { label: "3", text: "Lös ekvationen.", rows: ["4 − {x|3} = x + 3    Svar: [a]"], points: "each", boxes: { a: { accept: ["3/4"] } } },
    { label: "4", text: "Lös ekvationen.", rows: ["2x + {1|4} = 4x − {3|4}    Svar: [a]"], points: "each", boxes: { a: { accept: ["1/2"] } } },
    { label: "5", text: "Lös ekvationen.", rows: ["{x|3} + 1 = {1|6} + {x|2}    Svar: [a]"], points: "each", boxes: { a: { accept: ["5"] } } },
    { label: "6", text: "Lös ekvationen.", rows: ["{1|4} − 2x = {1|2}(2 − 3x)    Svar: [a]"], points: "each", boxes: { a: { accept: ["−1 1/2"] } } },
  ],
};
