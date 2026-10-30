// DIAGNOS TAe6, Andragradsekvationer.
// Elevbladet är s. 64–65, lärarsidan s. 63 och facit står på s. 63 i 3_Talmonster.pdf.
//
// 15 kolumner på resultatblanketten (s. 66): 1a–c, 2a–c, 3a–c, 4a–c och 5a–c, en skärm och en kolumn per etikett.
// Två rutor, x₁ och x₂, på varje skärm (screen.roots): rutorna rättas ihop som en lista med rötter, så ordningen spelar
// ingen roll, en ruta får ha flera rötter ("±√5", "3 ± √2") och en tom ruta räknas bort. Skärmen säger hur rutorna fylls i
// (ROOTS_LINE i render.js), likadant på varje skärm, så att den inte avslöjar hur många rötter ekvationen har. "" i x₂:s accept: rutan får vara tom (facit visar
// x₂ = 1 för dubbelroten i 2a och x₂ = 3, den givna roten, i 5a–c).
//
// 5a–c: bladet säger "om du vet att en rot är x = 3", och facit anger bara den andra roten (1, −2, −0,5). Både den
// andra roten ensam och båda rötterna godtas.

const screen = (label, task, x1, x2) => ({
  label,
  text: label.startsWith("5") ? "Lös ekvationen om du vet att en rot är x = 3." : "Lös ekvationen.",
  rows: [task, "x₁ = [a]", "x₂ = [b]"],
  points: "one",
  roots: true,
  boxes: { a: { accept: [x1], roots: true }, b: { accept: x2, roots: true } },
});

export default {
  code: "TAe6",
  area: "Talmönster och algebra",
  sub: "TAe Ekvationer",
  title: "Andragradsekvationer",
  time: { min: 10, max: 12, stop: 20 },
  paper: false,
  symbols: false,
  variables: "x",
  notes: [],
  example: null,
  screens: [
    screen("1a", "x^2 = 4", "2", ["−2"]),
    screen("1b", "3x^2 = 27", "3", ["−3"]),
    screen("1c", "x^2 − 5 = 0", "√5", ["−√5"]),
    screen("2a", "(x − 1)^2 = 0", "1", ["1", ""]),
    screen("2b", "x(x − 1) = 0", "0", ["1"]),
    screen("2c", "x^2 − 2x = 0", "0", ["2"]),
    screen("3a", "(x − 1)^2 = 4", "3", ["−1"]),
    screen("3b", "(x − 3)^2 = 2", "3 + √2", ["3 − √2"]),
    screen("3c", "(x − 2)^2 − 1 = 0", "1", ["3"]),
    screen("4a", "x^2 + 3x − 4 = 0", "1", ["−4"]),
    screen("4b", "x^2 − 2x − 3 = 0", "−1", ["3"]),
    screen("4c", "x^2 − 5x + 6 = 0", "2", ["3"]),
    screen("5a", "x^2 − 4x + 3 = 0", "1", ["3", ""]),
    screen("5b", "x^2 − x − 6 = 0", "−2", ["3", ""]),
    screen("5c", "x^2 − 2,5x − 1,5 = 0", "−0,5", ["3", ""]),
  ],
};
