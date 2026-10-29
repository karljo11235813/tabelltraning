// DIAGNOS AG9, Räknesättens innebörd, multiplikation och division.
// Elevbladet är s. 45–46, lärarsidorna s. 44–47 och facit står på s. 44 i 1_Aritmetik.pdf.
//
// Åtta textuppgifter, en skärm var. Resultatblanketten har en kolumn per uppgift (1–8). Bladet börjar med
// ett exempel (cd-skivorna) som Diamant säger att läraren ska gå igenom först; det visas utan poäng.
//
// facit är facits räkning och accept facits svar utan enhet ("Svar: 21 (dagar)" blir "21", "Svar: 34 kr"
// blir "34"). numbers är talen som räkningen ska innehålla, också de som står i ord ("sju", "sex", "fyra").
// Utanför numbers står orden som inte är något att räkna med: "Ett kg" och "en kasse" i uppgift 3, och
// "tre kamrater" i uppgift 6 (facit räknar 32 / 4 = 8, med tallrikarna och inte kamraterna).
// Facit nämner att 6 · __ = 48, 4 · __ = 32 och 4 · __ = 28 också är rätta tecknanden av 5, 6 och 7.
// Uppgift 8: facit skriver "50 / 7 = 7 (rest 1)"; svaret är heltalskvoten 7, så wholeQuotient gäller.
export default {
  code: "AG9",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Räknesättens innebörd, multiplikation och division",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: { text: "Antonia, Boris, Cecilia och David har sex cd-skivor var. Hur många cd-skivor har de tillsammans?", calc: "4 · 6 = 24", answer: "24 st" },
  screens: [
    {
      label: "1",
      kind: "word",
      text: "En vecka har sju dagar. Hur många dagar går det på 3 veckor?",
      numbers: [7, 3],
      accept: ["21"],
      facit: "3 · 7 = 21",
      wholeQuotient: false,
    },
    {
      label: "2",
      kind: "word",
      text: "En äggkartong innehåller 6 ägg. Hur många ägg finns det i 8 äggkartonger?",
      numbers: [6, 8],
      accept: ["48"],
      facit: "8 · 6 = 48",
      wholeQuotient: false,
    },
    {
      label: "3",
      kind: "word",
      text: "Ett kg potatis kostar 8 kr. Moa köper 4 kg potatis och en kasse för 2 kr. Hur mycket ska hon betala?",
      numbers: [8, 4, 2],
      accept: ["34"],
      facit: "4 · 8 + 2 = 34",
      wholeQuotient: false,
    },
    {
      label: "4",
      kind: "word",
      text: "Markus får 90 kr i timman för att rensa ogräs. Hur mycket tjänar han om han arbetar 6 timmar?",
      numbers: [90, 6],
      accept: ["540"],
      facit: "6 · 90 = 540",
      wholeQuotient: false,
    },
    {
      label: "5",
      kind: "word",
      text: "Teresia räknar sex matteuppgifter varje dag. Efter hur många dagar har hon räknat 48 matteuppgifter?",
      numbers: [6, 48],
      accept: ["8"],
      facit: "48 / 6 = 8",
      wholeQuotient: false,
    },
    {
      label: "6",
      kind: "word",
      text: "Lisa ska bjuda tre kamrater på plommon. Hon har 32 plommon och ska dela upp plommonen på 4 tallrikar. Hur många plommon blir det på varje tallrik?",
      numbers: [32, 4],
      accept: ["8"],
      facit: "32 / 4 = 8",
      wholeQuotient: false,
    },
    {
      label: "7",
      kind: "word",
      text: "Under lektionen i idrott är det 28 elever närvarande. De ställer upp sig i fyra rader med lika många i varje rad. Hur många elever är det då i varje rad?",
      numbers: [28, 4],
      accept: ["7"],
      facit: "28 / 4 = 7",
      wholeQuotient: false,
    },
    {
      label: "8",
      kind: "word",
      text: "En bulle kostar 7 kr. Karin har 50 kr. Hur många bullar kan hon köpa?",
      numbers: [50, 7],
      accept: ["7"],
      facit: "50 / 7 = 7 (rest 1)",
      wholeQuotient: true,
    },
  ],
};
