// DIAGNOS TAu2, Uttrycks värde.
// Elevbladet är s. 33, lärarsidan s. 32 och facit står på s. 32 i 3_Talmonster.pdf.
//
// 6 kolumner på resultatblanketten (s. 34): 1a–3b, en skärm och en kolumn var. Lärarsidan säger "cirka 5 minuter",
// så min och max är båda 5. Varje nummers inledande text (variablernas värden) står på alla dess skärmar.
//
// Rutorna rättas på värdet (1,6 och 8/5 är samma svar). Uttrycket avskrivet ("2a · 3b") är fel.
export default {
  code: "TAu2",
  area: "Talmönster och algebra",
  sub: "TAu Algebraiska uttryck",
  title: "Uttrycks värde",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  variables: "abxy",
  screens: [
    {
      label: "1a",
      text: "Bestäm värdet av följande uttryck om a = 3 och b = 5.",
      points: "each",
      rows: ["2a · 3b = [a]"],
      boxes: { a: { accept: ["90"] } },
    },
    {
      label: "1b",
      text: "Bestäm värdet av följande uttryck om a = 3 och b = 5.",
      points: "each",
      rows: ["a + {b|5} − {6|a} = [a]"],
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "2a",
      text: "Bestäm värdet av följande uttryck om x = 0,5 och y = 0,2.",
      points: "each",
      rows: ["2x + 3y = [a]"],
      boxes: { a: { accept: ["1,6"] } },
    },
    {
      label: "2b",
      text: "Bestäm värdet av följande uttryck om x = 0,5 och y = 0,2.",
      points: "each",
      rows: ["{3|2x} − {1|5y} = [a]"],
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "3a",
      text: "Bestäm värdet av följande uttryck om a = 11 och b = 7.",
      points: "each",
      rows: ["(a − 5)(b − 5) = [a]"],
      boxes: { a: { accept: ["12"] } },
    },
    {
      label: "3b",
      text: "Bestäm värdet av följande uttryck om a = 11 och b = 7.",
      points: "each",
      rows: ["{4a|11} + {3b|7} = [a]"],
      boxes: { a: { accept: ["7"] } },
    },
  ],
};
