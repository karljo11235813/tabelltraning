// DIAGNOS TAe7, Ekvationssystem, algebraisk lösning.
// Elevbladet är s. 68, lärarsidan s. 67 och facit står på s. 67 i 3_Talmonster.pdf.
//
// 5 kolumner på resultatblanketten (s. 69): 1–5, en skärm per system med rutorna x och y. Skärmen är en kolumn: båda
// rutorna ska vara rätta (points: "one"). Bladets klammer runt systemet ritas inte; de två ekvationerna står på var sin
// rad. "x = 1" godtas i x-rutan.
//
// 5 saknar lösning (facit "Saknar lösning"; graferna är två parallella linjer): orden ska stå i x-rutan (alla ord för
// ingen lösning godtas), och y-rutan får vara tom eller ha samma ord.

const screen = (label, first, second, x, y) => ({
  label,
  text: "Lös ekvationssystemet algebraiskt.",
  rows: [first, second, "x = [a]", "y = [b]"],
  points: "one",
  boxes: { a: { accept: x }, b: { accept: y } },
});

export default {
  code: "TAe7",
  area: "Talmönster och algebra",
  sub: "TAe Ekvationer",
  title: "Ekvationssystem, algebraisk lösning",
  time: { min: 10, max: 12, stop: 20 },
  paper: false,
  symbols: false,
  variables: "xy",
  notes: [],
  example: null,
  screens: [
    screen("1", "y = 2x + 2", "y = 3x + 1", ["1"], ["4"]),
    screen("2", "y = 2x + 4", "y = x + 3", ["−1"], ["2"]),
    screen("3", "4x − 3y = 6", "x + 3y = 9", ["3"], ["2"]),
    screen("4", "5x + y − 1 = 0", "2x − 2y − 10 = 0", ["1"], ["−4"]),
    screen("5", "3x + 2y − 6 = 0", "6x + 4y − 5 = 0", ["Saknar lösning"], ["Saknar lösning", ""]),
  ],
};
