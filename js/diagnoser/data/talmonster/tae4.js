// DIAGNOS TAe4, Ekvationer med och utan lösning.
// Elevbladet är s. 58, lärarsidan s. 57 och facit står på s. 57 i 3_Talmonster.pdf.
//
// 10 kolumner på resultatblanketten (s. 59): 1–10, en skärm och en kolumn per uppgift. Bladet är en tabell där eleven
// kryssar i en av tre rutor per ekvation; här är varje ekvation ett val (choose) med tre alternativ: a "ingen lösning",
// b "lösning", c "oändligt många lösningar". Ett val kan inte rita en rad, så ekvationen står i uppgiftens text (x² med
// upphöjd tvåa).
//
// Tryckfel i facit: 4 är "3x + 2 = 3x + 2 − 4", som ger 0 = −4 och alltså saknar lösning. Facit säger "Har oändligt
// många lösningar" (det skulle gälla t.ex. 3x + 2 = 3x − 2 + 4). Ekvationen står kvar som på bladet och svaret är det
// som stämmer för den: ingen lösning (a), som RP2 1c rättar facit efter uppgiften.

const OPTIONS = [
  { id: "a", markup: "Ekvationen har ingen lösning" },
  { id: "b", markup: "Ekvationen har lösning" },
  { id: "c", markup: "Ekvationen har oändligt många lösningar" },
];

const screen = (label, equation, accept) => ({
  kind: "choose",
  label,
  text: `Vad gäller för ekvationen ${equation}?`,
  options: OPTIONS,
  accept,
});

export default {
  code: "TAe4",
  area: "Talmönster och algebra",
  sub: "TAe Ekvationer",
  title: "Ekvationer med och utan lösning",
  time: { min: 10, max: 12, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    screen("1", "x − 3 = 0", "b"),
    screen("2", "2x + 1 = 2(x + 1)", "a"),
    screen("3", "2x + 3 = 4x + 3", "b"),
    screen("4", "3x + 2 = 3x + 2 − 4", "a"),
    screen("5", "x² − 4 = 0", "b"),
    screen("6", "(x + 1)(x − 1) = x² − 1", "c"),
    screen("7", "(x + 1)² + 3 = 0", "a"),
    screen("8", "x(x + 1) = 0", "b"),
    screen("9", "(x + 4)² − 1 = 0", "b"),
    screen("10", "x² = (x + 1)²", "b"),
  ],
};
