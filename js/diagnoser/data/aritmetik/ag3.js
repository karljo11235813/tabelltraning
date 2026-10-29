// DIAGNOS AG3, Additioner och subtraktioner inom talområdet 10–19 (med tiotalsövergång).
// Elevbladet är s. 26, lärarsidorna s. 24–27 och facit står på s. 25 i 1_Aritmetik.pdf.
//
// Åtta skärmar, en per grupp (1a–4b), med sex uppgifter var. Uppgifterna står i bladets ordning:
// vänstra kolumnen uppifrån och ned, sedan den högra. Resultatblanketten har en kolumn per grupp
// ("hur många uppgifter inom respektive gruppen som blivit korrekt lösta av de sex möjliga"), och här
// räknas varje uppgift för sig: 48 i allt.
export default {
  code: "AG3",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Additioner och subtraktioner inom talområdet 10–19",
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
      rows: ["4 + 6 = [a]", "5 + [b] = 10", "[c] + 9 = 10", "3 + 7 = [d]", "2 + [e] = 10", "[f] + 6 = 10"],
      boxes: { a: { accept: ["10"] }, b: { accept: ["5"] }, c: { accept: ["1"] }, d: { accept: ["10"] }, e: { accept: ["8"] }, f: { accept: ["4"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["10 - 6 = [a]", "10 - 1 = [b]", "10 - [c] = 5", "10 - 3 = [d]", "10 - [e] = 8", "10 - [f] = 7"],
      boxes: { a: { accept: ["4"] }, b: { accept: ["9"] }, c: { accept: ["5"] }, d: { accept: ["7"] }, e: { accept: ["2"] }, f: { accept: ["3"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["9 + 2 = [a]", "9 + 6 = [b]", "9 + 8 = [c]", "4 + 9 = [d]", "5 + 9 = [e]", "7 + 9 = [f]"],
      boxes: { a: { accept: ["11"] }, b: { accept: ["15"] }, c: { accept: ["17"] }, d: { accept: ["13"] }, e: { accept: ["14"] }, f: { accept: ["16"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["14 - 9 = [a]", "12 - 9 = [b]", "15 - 6 = [c]", "17 - 8 = [d]", "18 - 9 = [e]", "16 - 9 = [f]"],
      boxes: { a: { accept: ["5"] }, b: { accept: ["3"] }, c: { accept: ["9"] }, d: { accept: ["9"] }, e: { accept: ["9"] }, f: { accept: ["7"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["8 + 7 = [a]", "8 + 4 = [b]", "3 + 8 = [c]", "5 + 8 = [d]", "8 + 8 = [e]", "8 + 6 = [f]"],
      boxes: { a: { accept: ["15"] }, b: { accept: ["12"] }, c: { accept: ["11"] }, d: { accept: ["13"] }, e: { accept: ["16"] }, f: { accept: ["14"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["13 - 8 = [a]", "16 - 8 = [b]", "12 - 8 = [c]", "14 - 6 = [d]", "15 - 8 = [e]", "11 - 3 = [f]"],
      boxes: { a: { accept: ["5"] }, b: { accept: ["8"] }, c: { accept: ["4"] }, d: { accept: ["8"] }, e: { accept: ["7"] }, f: { accept: ["8"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["6 + 6 = [a]", "7 + 5 = [b]", "6 + 5 = [c]", "5 + 6 = [d]", "7 + 7 = [e]", "5 + 7 = [f]"],
      boxes: { a: { accept: ["12"] }, b: { accept: ["12"] }, c: { accept: ["11"] }, d: { accept: ["11"] }, e: { accept: ["14"] }, f: { accept: ["12"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["14 - 7 = [a]", "12 - 7 = [b]", "13 - 6 = [c]", "11 - 5 = [d]", "12 - 6 = [e]", "11 - 6 = [f]"],
      boxes: { a: { accept: ["7"] }, b: { accept: ["5"] }, c: { accept: ["7"] }, d: { accept: ["6"] }, e: { accept: ["6"] }, f: { accept: ["5"] } },
    },
  ],
};
