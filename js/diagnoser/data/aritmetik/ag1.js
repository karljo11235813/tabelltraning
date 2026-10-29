// DIAGNOS AG1, Grundläggande aritmetik: additioner och subtraktioner inom talområdet 1–9.
// Elevbladet är s. 17, lärarsidorna s. 15–18 och facit står på s. 16 i 1_Aritmetik.pdf.
//
// Sex skärmar, en per grupp (1a–3b), med sex uppgifter var. Uppgifterna står i bladets ordning:
// vänstra kolumnen uppifrån och ned, sedan den högra. Resultatblanketten har en kolumn per grupp
// ("hur många uppgifter inom respektive grupp som blivit korrekt lösta av de sex möjliga"), och här
// räknas varje uppgift för sig: 36 i allt.
export default {
  code: "AG1",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Additioner och subtraktioner inom talområdet 1–9",
  time: { min: 2, max: 3, stop: 6 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "",
      points: "each",
      rows: ["6 + 1 = [a]", "4 + 2 = [b]", "1 + 7 = [c]", "6 + 2 = [d]", "8 + 1 = [e]", "2 + 7 = [f]"],
      boxes: { a: { accept: ["7"] }, b: { accept: ["6"] }, c: { accept: ["8"] }, d: { accept: ["8"] }, e: { accept: ["9"] }, f: { accept: ["9"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["9 - 1 = [a]", "7 - 2 = [b]", "9 - 8 = [c]", "8 - 2 = [d]", "6 - 1 = [e]", "8 - 6 = [f]"],
      boxes: { a: { accept: ["8"] }, b: { accept: ["5"] }, c: { accept: ["1"] }, d: { accept: ["6"] }, e: { accept: ["5"] }, f: { accept: ["2"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["4 + 4 = [a]", "3 + 3 = [b]", "4 + 5 = [c]", "3 + 5 = [d]", "5 + 4 = [e]", "4 + 3 = [f]"],
      boxes: { a: { accept: ["8"] }, b: { accept: ["6"] }, c: { accept: ["9"] }, d: { accept: ["8"] }, e: { accept: ["9"] }, f: { accept: ["7"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["9 - 4 = [a]", "7 - 4 = [b]", "8 - 4 = [c]", "6 - 3 = [d]", "9 - 5 = [e]", "7 - 3 = [f]"],
      boxes: { a: { accept: ["5"] }, b: { accept: ["3"] }, c: { accept: ["4"] }, d: { accept: ["3"] }, e: { accept: ["4"] }, f: { accept: ["4"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["4 + [a] = 9", "3 + [b] = 7", "1 + [c] = 7", "2 + [d] = 8", "5 + [e] = 8", "3 + [f] = 9"],
      boxes: { a: { accept: ["5"] }, b: { accept: ["4"] }, c: { accept: ["6"] }, d: { accept: ["6"] }, e: { accept: ["3"] }, f: { accept: ["6"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["8 = 2 + [a]", "7 = 2 + [b]", "9 = 3 + [c]", "9 = 7 + [d]", "9 = 5 + [e]", "7 = 4 + [f]"],
      boxes: { a: { accept: ["6"] }, b: { accept: ["5"] }, c: { accept: ["6"] }, d: { accept: ["2"] }, e: { accept: ["4"] }, f: { accept: ["3"] } },
    },
  ],
};
