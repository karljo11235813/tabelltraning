// DIAGNOS AS6, Multiplikation och division, textuppgifter.
// Elevbladet är s. 68–69, lärarsidorna s. 67–70 och facit står på s. 67 i 1_Aritmetik.pdf.
//
// Sju textuppgifter, en skärm var (1–7). Resultatblanketten har en kolumn per uppgift. Skärmen har ingen
// rows: texten är uppgiften och rutan a kommer efter "Svar:". Eleven räknar på papper och skriver bara
// svaret; om också uträkningen är godkänd (S på blanketten) kan skärmen inte avgöra.
//
// accept är facits svar utan enhet ("63 km" blir "63", "23 (kulor)" blir "23", "2 274 kr" blir
// "2274"). Facit säger att ett svar med enhet ska bedömas som rätt, och rutan läser talet och slänger
// ett ord efter det.
export default {
  code: "AS6",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Multiplikation och division, textuppgifter",
  time: { min: 5, max: 6, stop: 12 },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Ola kan cykla 21 km på en timma. Hur långt kan Ola då cykla på tre timmar?",
      points: "each",
      boxes: { a: { accept: ["63"] } },
    },
    {
      label: "2",
      text: "Asha, Claudia och Lisa har tillsammans 69 kulor. Hur många kulor har Asha om alla har lika många kulor?",
      points: "each",
      boxes: { a: { accept: ["23"] } },
    },
    {
      label: "3",
      text: "I en skola finns 7 klasser med lika många elever i varje. På skolan finns det sammanlagt 154 elever. Hur många elever finns det i varje klass?",
      points: "each",
      boxes: { a: { accept: ["22"] } },
    },
    {
      label: "4",
      text: "En resa till X-köping kostar 128 kr. Hur mycket kostar det om 7 personer ska resa till X-köping?",
      points: "each",
      boxes: { a: { accept: ["896"] } },
    },
    {
      label: "5",
      text: "När Lisa hade delat ut reklam fick hon 432 kr. Hon hade då arbetat i 6 timmar. Hur mycket tjänade hon i timman?",
      points: "each",
      boxes: { a: { accept: ["72"] } },
    },
    {
      label: "6",
      text: "En tröja kostar 379 kr. Hur mycket kostar 6 sådana tröjor?",
      points: "each",
      boxes: { a: { accept: ["2274"] } },
    },
    {
      label: "7",
      text: "Kim har fått en bok som innehåller 405 sidor. Han tänker läsa nio sidor varje dag. Hur lång tid tar det då att läsa ut boken?",
      points: "each",
      boxes: { a: { accept: ["45"] } },
    },
  ],
};
