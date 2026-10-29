// DIAGNOS TAe5, Olikheter.
// Elevbladet är s. 61, lärarsidan s. 60 och facit står på s. 60 i 3_Talmonster.pdf.
//
// 12 kolumner på resultatblanketten (s. 62): 1a–d, 2a–d och 3a–d, en skärm och en kolumn per etikett. Rutorna är
// olikhetsrutor (inequality: "x"): svaret är rätt när det beskriver samma tal som facit, hur det än skrivs (x > 4,
// 4 < x, x > 0,5 eller x < 0 …). 2c gäller alla x (facit "alla x"; alla ord för alla x godtas).

const screen = (label, task, accept) => ({
  label,
  text: "Lös olikheten.",
  rows: [`${task}    Svar: [a]`],
  points: "each",
  boxes: { a: { accept: [accept], inequality: "x" } },
});

export default {
  code: "TAe5",
  area: "Talmönster och algebra",
  sub: "TAe Ekvationer",
  title: "Olikheter",
  time: { min: 10, max: 12, stop: 20 },
  paper: false,
  symbols: false,
  variables: "x",
  notes: [],
  example: null,
  screens: [
    screen("1a", "3x > 12", "x > 4"),
    screen("1b", "2x < −6", "x < −3"),
    screen("1c", "4x + 3 > 3x", "x > −3"),
    screen("1d", "x − 4 < 2x", "x > −4"),
    screen("2a", "4x − 5 ≥ x + 7", "x ≥ 4"),
    screen("2b", "3(x − 4) ≤ 4x − 8", "x ≥ −4"),
    screen("2c", "2(x − 3) ≤ 2x − 6", "alla x"),
    screen("2d", "4 − 6x ≥ 1 − 4x", "x ≤ 1,5"),
    screen("3a", "x^2 < 16", "−4 < x < 4"),
    screen("3b", "(x − 3)^2 > 0", "x ≠ 3"),
    screen("3c", "{x|−4} < −1", "x > 4"),
    screen("3d", "{3|x} < 6", "x > 0,5 eller x < 0"),
  ],
};
