// DIAGNOS AG6, Multiplikationstabellen.
// Elevbladet är s. 36, lärarsidorna s. 35–37 och facit står på s. 35 i 1_Aritmetik.pdf.
//
// Sex skärmar, en per grupp (1a–3b), med sex uppgifter var. Uppgifterna står i bladets ordning:
// vänstra kolumnen uppifrån och ned, sedan den högra. Resultatblanketten har en kolumn per grupp
// ("hur många uppgifter inom respektive grupp som blivit korrekt lösta av de sex möjliga"), och här
// räknas varje uppgift för sig: 36 i allt.
export default {
  code: "AG6",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Multiplikationstabellen",
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
      rows: ["2 · 7 = [a]", "2 · 5 = [b]", "2 · 8 = [c]", "9 · 2 = [d]", "6 · 2 = [e]", "4 · 2 = [f]"],
      boxes: { a: { accept: ["14"] }, b: { accept: ["10"] }, c: { accept: ["16"] }, d: { accept: ["18"] }, e: { accept: ["12"] }, f: { accept: ["8"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["4 · 5 = [a]", "4 · 8 = [b]", "4 · 4 = [c]", "7 · 4 = [d]", "9 · 4 = [e]", "4 · 6 = [f]"],
      boxes: { a: { accept: ["20"] }, b: { accept: ["32"] }, c: { accept: ["16"] }, d: { accept: ["28"] }, e: { accept: ["36"] }, f: { accept: ["24"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["3 · 5 = [a]", "3 · 7 = [b]", "3 · 4 = [c]", "8 · 3 = [d]", "6 · 3 = [e]", "9 · 3 = [f]"],
      boxes: { a: { accept: ["15"] }, b: { accept: ["21"] }, c: { accept: ["12"] }, d: { accept: ["24"] }, e: { accept: ["18"] }, f: { accept: ["27"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["6 · 5 = [a]", "6 · 9 = [b]", "6 · 4 = [c]", "7 · 6 = [d]", "6 · 6 = [e]", "8 · 6 = [f]"],
      boxes: { a: { accept: ["30"] }, b: { accept: ["54"] }, c: { accept: ["24"] }, d: { accept: ["42"] }, e: { accept: ["36"] }, f: { accept: ["48"] } },
    },
    {
      label: "3a",
      text: "",
      points: "each",
      rows: ["5 · 4 = [a]", "5 · 9 = [b]", "5 · 3 = [c]", "7 · 5 = [d]", "8 · 5 = [e]", "5 · 5 = [f]"],
      boxes: { a: { accept: ["20"] }, b: { accept: ["45"] }, c: { accept: ["15"] }, d: { accept: ["35"] }, e: { accept: ["40"] }, f: { accept: ["25"] } },
    },
    {
      label: "3b",
      text: "",
      points: "each",
      rows: ["7 · 8 = [a]", "9 · 9 = [b]", "8 · 8 = [c]", "8 · 9 = [d]", "7 · 7 = [e]", "9 · 7 = [f]"],
      boxes: { a: { accept: ["56"] }, b: { accept: ["81"] }, c: { accept: ["64"] }, d: { accept: ["72"] }, e: { accept: ["49"] }, f: { accept: ["63"] } },
    },
  ],
};
