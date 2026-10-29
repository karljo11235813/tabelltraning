// DIAGNOS AG4, Additioner och subtraktioner inom talområdet 20–99, generalisering.
// Elevbladet är s. 29, lärarsidorna s. 28–30 och facit står på s. 28 i 1_Aritmetik.pdf.
//
// Åtta skärmar, en per grupp (1a–4b), med sex uppgifter var. Uppgifterna står i bladets ordning:
// vänstra kolumnen uppifrån och ned, sedan den högra. Resultatblanketten har en kolumn per grupp
// ("hur många uppgifter inom respektive grupp som blivit korrekt lösta av de sex möjliga"), och här
// räknas varje uppgift för sig: 48 i allt. Bladet skriver "72 +6" utan mellanslag; det står "72 + 6" här.
export default {
  code: "AG4",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Additioner och subtraktioner inom talområdet 20–99, generalisering",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "",
      points: "each",
      rows: ["40 + 30 = [a]", "50 + [b] = 90", "[c] + 30 = 80", "20 + 70 = [d]", "60 + [e] = 80", "[f] + 40 = 90"],
      boxes: { a: { accept: ["70"] }, b: { accept: ["40"] }, c: { accept: ["50"] }, d: { accept: ["90"] }, e: { accept: ["20"] }, f: { accept: ["50"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["90 - 60 = [a]", "70 - 20 = [b]", "90 - [c] = 50", "80 - 30 = [d]", "60 - [e] = 40", "70 - [f] = 30"],
      boxes: { a: { accept: ["30"] }, b: { accept: ["50"] }, c: { accept: ["40"] }, d: { accept: ["50"] }, e: { accept: ["20"] }, f: { accept: ["40"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["40 + 7 = [a]", "30 + [b] = 38", "[c] + 6 = 36", "60 + 8 = [d]", "70 + [e] = 74", "[f] + 40 = 49"],
      boxes: { a: { accept: ["47"] }, b: { accept: ["8"] }, c: { accept: ["30"] }, d: { accept: ["68"] }, e: { accept: ["4"] }, f: { accept: ["9"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["95 - 5 = [a]", "56 - [b] = 50", "[c] - 3 = 90", "68 - 8 = [d]", "84 - [e] = 80", "[f] - 9 = 70"],
      boxes: { a: { accept: ["90"] }, b: { accept: ["6"] }, c: { accept: ["93"] }, d: { accept: ["60"] }, e: { accept: ["4"] }, f: { accept: ["79"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["27 + 1 = [a]", "5 + 42 = [b]", "72 + 6 = [c]", "24 + 2 = [d]", "6 + 62 = [e]", "81 + 8 = [f]"],
      boxes: { a: { accept: ["28"] }, b: { accept: ["47"] }, c: { accept: ["78"] }, d: { accept: ["26"] }, e: { accept: ["68"] }, f: { accept: ["89"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["38 - 2 = [a]", "77 - 75 = [b]", "89 - 7 = [c]", "57 - 5 = [d]", "58 - 57 = [e]", "65 - 4 = [f]"],
      boxes: { a: { accept: ["36"] }, b: { accept: ["2"] }, c: { accept: ["82"] }, d: { accept: ["52"] }, e: { accept: ["1"] }, f: { accept: ["61"] } },
    },
    {
      label: "4a",
      text: "",
      points: "each",
      rows: ["84 + 9 = [a]", "7 + 65 = [b]", "63 + 8 = [c]", "75 + 8 = [d]", "6 + 78 = [e]", "58 + 6 = [f]"],
      boxes: { a: { accept: ["93"] }, b: { accept: ["72"] }, c: { accept: ["71"] }, d: { accept: ["83"] }, e: { accept: ["84"] }, f: { accept: ["64"] } },
    },
    {
      label: "4b",
      text: "",
      points: "each",
      rows: ["63 - 8 = [a]", "51 - 49 = [b]", "72 - 8 = [c]", "54 - 6 = [d]", "91 - 89 = [e]", "81 - 3 = [f]"],
      boxes: { a: { accept: ["55"] }, b: { accept: ["2"] }, c: { accept: ["64"] }, d: { accept: ["48"] }, e: { accept: ["2"] }, f: { accept: ["78"] } },
    },
  ],
};
