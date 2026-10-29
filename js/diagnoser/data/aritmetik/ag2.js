// DIAGNOS AG2, Additioner och subtraktioner inom talområdet 10–19, utan tiotalsövergång.
// Elevbladet är s. 22, lärarsidorna s. 19–23 och facit står på s. 21 i 1_Aritmetik.pdf.
//
// Åtta skärmar, en per grupp (1a–4b), med sex uppgifter var. Uppgifterna står i bladets ordning:
// vänstra kolumnen uppifrån och ned, sedan den högra. Resultatblanketten har en kolumn per grupp
// ("hur många uppgifter inom respektive grupp som blivit korrekt lösta av de sex möjliga"), och här
// räknas varje uppgift för sig: 48 i allt.
export default {
  code: "AG2",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Additioner och subtraktioner inom talområdet 10–19, utan tiotalsövergång",
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
      rows: ["10 + 7 = [a]", "4 + 10 = [b]", "10 + [c] = 13", "10 + 6 = [d]", "8 + 10 = [e]", "2 + [f] = 12"],
      boxes: { a: { accept: ["17"] }, b: { accept: ["14"] }, c: { accept: ["3"] }, d: { accept: ["16"] }, e: { accept: ["18"] }, f: { accept: ["10"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["18 - 10 = [a]", "16 - 6 = [b]", "14 - [c] = 10", "15 - 10 = [d]", "18 - 8 = [e]", "19 - [f] = 9"],
      boxes: { a: { accept: ["8"] }, b: { accept: ["10"] }, c: { accept: ["4"] }, d: { accept: ["5"] }, e: { accept: ["10"] }, f: { accept: ["10"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["17 + 1 = [a]", "12 + 5 = [b]", "1 + 16 = [c]", "15 + 2 = [d]", "11 + 8 = [e]", "2 + 14 = [f]"],
      boxes: { a: { accept: ["18"] }, b: { accept: ["17"] }, c: { accept: ["17"] }, d: { accept: ["17"] }, e: { accept: ["19"] }, f: { accept: ["16"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["19 - 1 = [a]", "17 - 12 = [b]", "19 - 18 = [c]", "18 - 2 = [d]", "16 - 11 = [e]", "18 - 16 = [f]"],
      boxes: { a: { accept: ["18"] }, b: { accept: ["5"] }, c: { accept: ["1"] }, d: { accept: ["16"] }, e: { accept: ["5"] }, f: { accept: ["2"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["14 + 3 = [a]", "3 + 13 = [b]", "14 + 5 = [c]", "13 + 5 = [d]", "5 + 14 = [e]", "4 + 13 = [f]"],
      boxes: { a: { accept: ["17"] }, b: { accept: ["16"] }, c: { accept: ["19"] }, d: { accept: ["18"] }, e: { accept: ["19"] }, f: { accept: ["17"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["19 - 4 = [a]", "17 - 4 = [b]", "18 - 14 = [c]", "16 - 3 = [d]", "19 - 15 = [e]", "17 - 12 = [f]"],
      boxes: { a: { accept: ["15"] }, b: { accept: ["13"] }, c: { accept: ["4"] }, d: { accept: ["13"] }, e: { accept: ["4"] }, f: { accept: ["5"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["14 + [a] = 19", "13 + [b] = 17", "11 + [c] = 17", "2 + [d] = 18", "5 + [e] = 18", "3 + [f] = 19"],
      boxes: { a: { accept: ["5"] }, b: { accept: ["4"] }, c: { accept: ["6"] }, d: { accept: ["16"] }, e: { accept: ["13"] }, f: { accept: ["16"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["18 = 3 + [a]", "15 = 2 + [b]", "19 = 4 + [c]", "19 = 16 + [d]", "18 = 13 + [e]", "17 = 14 + [f]"],
      boxes: { a: { accept: ["15"] }, b: { accept: ["13"] }, c: { accept: ["15"] }, d: { accept: ["3"] }, e: { accept: ["5"] }, f: { accept: ["3"] } },
    },
  ],
};
