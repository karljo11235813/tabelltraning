// DIAGNOS TAe6, Andragradsekvationer.
// Elevbladet är s. 64–65, lärarsidan s. 63 och facit står på s. 63 i 3_Talmonster.pdf.
//
// 15 kolumner på resultatblanketten (s. 66): 1a–c, 2a–c, 3a–c, 4a–c och 5a–c, en skärm och en kolumn per etikett.
// Rutorna är rotrutor (roots: true): svaret är en lista med rötter ("2 och −2", "±√5", "3 ± √2", "x = 1, x = 3") och
// är rätt när mängden är facits. 2a är en dubbelrot, 1 (får skrivas en eller två gånger).
//
// 5a–c: bladet säger "om du vet att en rot är x = 3", och facit anger bara den andra roten (1, −2, −0,5). Både den
// andra roten ensam och båda rötterna godtas.

const screen = (label, task, ...accept) => ({
  label,
  text: label.startsWith("5") ? "Lös ekvationen om du vet att en rot är x = 3." : "Lös ekvationen.",
  rows: [`${task}    Svar: [a]`],
  points: "each",
  boxes: { a: { accept, roots: true } },
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
    screen("1a", "x^2 = 4", "2 och −2"),
    screen("1b", "3x^2 = 27", "3 och −3"),
    screen("1c", "x^2 − 5 = 0", "±√5"),
    screen("2a", "(x − 1)^2 = 0", "1"),
    screen("2b", "x(x − 1) = 0", "0 och 1"),
    screen("2c", "x^2 − 2x = 0", "0 och 2"),
    screen("3a", "(x − 1)^2 = 4", "3 och −1"),
    screen("3b", "(x − 3)^2 = 2", "3 ± √2"),
    screen("3c", "(x − 2)^2 − 1 = 0", "1 och 3"),
    screen("4a", "x^2 + 3x − 4 = 0", "1 och −4"),
    screen("4b", "x^2 − 2x − 3 = 0", "−1 och 3"),
    screen("4c", "x^2 − 5x + 6 = 0", "2 och 3"),
    screen("5a", "x^2 − 4x + 3 = 0", "1", "1 och 3"),
    screen("5b", "x^2 − x − 6 = 0", "−2", "−2 och 3"),
    screen("5c", "x^2 − 2,5x − 1,5 = 0", "−0,5", "−0,5 och 3"),
  ],
};
