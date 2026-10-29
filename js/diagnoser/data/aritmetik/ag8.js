// DIAGNOS AG8, Divisionstabell.
// Elevbladet är s. 42, lärarsidorna s. 41–43 och facit står på s. 41 i 1_Aritmetik.pdf.
//
// Sex skärmar, en per grupp (1a–3b), med sex uppgifter var. Uppgifterna står i bladets ordning:
// vänstra kolumnen uppifrån och ned, sedan den högra (3a och 3b har en kolumn, uppifrån och ned).
// Resultatblanketten har en kolumn per grupp ("hur många uppgifter inom respektive grupp som blivit
// korrekt lösta av de sex möjliga"), och här räknas varje uppgift för sig: 36 i allt.
//
// Bladet har två luckor i 3a och 3b ("19 / 6 = __ rest __"). Här är det en ruta per uppgift där eleven
// skriver kvot och rest ("3 rest 1", också "3 r 1" och "3 (rest 1)"), så att uppgiften räknas en gång,
// som på resultatblanketten. Skärmens text säger hur svaret skrivs. Facit skriver också "3 rest 1".
export default {
  code: "AG8",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Divisionstabell",
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
      rows: ["14 / 2 = [a]", "21 / 7 = [b]", "24 / 8 = [c]", "15 / 3 = [d]", "27 / 3 = [e]", "18 / 6 = [f]"],
      boxes: { a: { accept: ["7"] }, b: { accept: ["3"] }, c: { accept: ["3"] }, d: { accept: ["5"] }, e: { accept: ["9"] }, f: { accept: ["3"] } },
    },
    {
      label: "1b",
      text: "",
      points: "each",
      rows: ["54 / 6 = [a]", "24 / 6 = [b]", "28 / 4 = [c]", "48 / 8 = [d]", "42 / 6 = [e]", "32 / 8 = [f]"],
      boxes: { a: { accept: ["9"] }, b: { accept: ["4"] }, c: { accept: ["7"] }, d: { accept: ["6"] }, e: { accept: ["7"] }, f: { accept: ["4"] } },
    },
    {
      label: "2a",
      text: "",
      points: "each",
      rows: ["30 / 6 = [a]", "35 / 5 = [b]", "45 / 5 = [c]", "45 / 9 = [d]", "20 / 5 = [e]", "40 / 8 = [f]"],
      boxes: { a: { accept: ["5"] }, b: { accept: ["7"] }, c: { accept: ["9"] }, d: { accept: ["5"] }, e: { accept: ["4"] }, f: { accept: ["5"] } },
    },
    {
      label: "2b",
      text: "",
      points: "each",
      rows: ["56 / 8 = [a]", "63 / 7 = [b]", "81 / 9 = [c]", "72 / 9 = [d]", "64 / 8 = [e]", "49 / 7 = [f]"],
      boxes: { a: { accept: ["7"] }, b: { accept: ["9"] }, c: { accept: ["9"] }, d: { accept: ["8"] }, e: { accept: ["8"] }, f: { accept: ["7"] } },
    },
    {
      label: "3a",
      text: "Skriv svaret med rest, till exempel 5 rest 2.",
      points: "each",
      rows: ["19 / 6 = [a]", "26 / 8 = [b]", "47 / 5 = [c]", "28 / 6 = [d]", "29 / 3 = [e]", "39 / 9 = [f]"],
      boxes: { a: { accept: ["3 rest 1"] }, b: { accept: ["3 rest 2"] }, c: { accept: ["9 rest 2"] }, d: { accept: ["4 rest 4"] }, e: { accept: ["9 rest 2"] }, f: { accept: ["4 rest 3"] } },
    },
    {
      label: "3b",
      text: "Skriv svaret med rest, till exempel 5 rest 2.",
      points: "each",
      rows: ["57 / 8 = [a]", "75 / 9 = [b]", "85 / 9 = [c]", "52 / 7 = [d]", "63 / 8 = [e]", "61 / 9 = [f]"],
      boxes: { a: { accept: ["7 rest 1"] }, b: { accept: ["8 rest 3"] }, c: { accept: ["9 rest 4"] }, d: { accept: ["7 rest 3"] }, e: { accept: ["7 rest 7"] }, f: { accept: ["6 rest 7"] } },
    },
  ],
};
