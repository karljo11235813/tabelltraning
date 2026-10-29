// DIAGNOS AG7, Generaliserad multiplikationstabell.
// Elevbladet är s. 39, lärarsidorna s. 38–40 och facit står på s. 38 i 1_Aritmetik.pdf.
//
// Sex skärmar, en per grupp (1a–3b), med sex uppgifter var. Uppgifterna står i bladets ordning:
// vänstra kolumnen uppifrån och ned, sedan den högra. Resultatblanketten har en kolumn per grupp
// ("hur många uppgifter inom respektive grupp som blivit korrekt lösta av de sex möjliga"), och här
// räknas varje uppgift för sig: 36 i allt. Bladet skriver "6 · 6 +7" utan mellanslag; det står
// "6 · 6 + 7" här.
export default {
  code: "AG7",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Generaliserad multiplikationstabell",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "",
      points: "each",
      rows: ["2 · 8 + 3 = [a]", "8 · 3 + 5 = [b]", "7 · 8 + 3 = [c]", "9 · 4 + 2 = [d]", "6 · 9 + 4 = [e]", "9 · 7 + 6 = [f]"],
      boxes: { a: { accept: ["19"] }, b: { accept: ["29"] }, c: { accept: ["59"] }, d: { accept: ["38"] }, e: { accept: ["58"] }, f: { accept: ["69"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["7 · 4 + 5 = [a]", "6 · 8 + 4 = [b]", "3 · 6 + 8 = [c]", "9 · 3 + 6 = [d]", "7 · 7 + 4 = [e]", "6 · 6 + 7 = [f]"],
      boxes: { a: { accept: ["33"] }, b: { accept: ["52"] }, c: { accept: ["26"] }, d: { accept: ["33"] }, e: { accept: ["53"] }, f: { accept: ["43"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["3 · 50 = [a]", "30 · 4 = [b]", "3 · 80 = [c]", "6 · 30 = [d]", "40 · 5 = [e]", "90 · 3 = [f]"],
      boxes: { a: { accept: ["150"] }, b: { accept: ["120"] }, c: { accept: ["240"] }, d: { accept: ["180"] }, e: { accept: ["200"] }, f: { accept: ["270"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["6 · 80 = [a]", "60 · 9 = [b]", "7 · 70 = [c]", "7 · 60 = [d]", "80 · 6 = [e]", "90 · 8 = [f]"],
      boxes: { a: { accept: ["480"] }, b: { accept: ["540"] }, c: { accept: ["490"] }, d: { accept: ["420"] }, e: { accept: ["480"] }, f: { accept: ["720"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["2 · [a] = 18", "9 · [b] = 36", "8 · [c] = 24", "4 · [d] = 32", "4 · [e] = 28", "5 · [f] = 40"],
      boxes: { a: { accept: ["9"] }, b: { accept: ["4"] }, c: { accept: ["3"] }, d: { accept: ["8"] }, e: { accept: ["7"] }, f: { accept: ["8"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["7 · [a] = 42", "9 · [b] = 54", "8 · [c] = 72", "6 · [d] = 54", "7 · [e] = 49", "9 · [f] = 63"],
      boxes: { a: { accept: ["6"] }, b: { accept: ["6"] }, c: { accept: ["9"] }, d: { accept: ["9"] }, e: { accept: ["7"] }, f: { accept: ["7"] } },
    },
  ],
};
