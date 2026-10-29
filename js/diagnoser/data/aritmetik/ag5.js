// DIAGNOS AG5, Räknesättens innebörd, addition och subtraktion.
// Elevbladet är s. 32–33, lärarsidorna s. 31–34 och facit står på s. 31 i 1_Aritmetik.pdf.
//
// Åtta textuppgifter, en skärm var. Resultatblanketten har en kolumn per uppgift (1–8). Bladet börjar med
// ett exempel (Pia och bollarna) som Diamant säger att läraren ska gå igenom först; det visas utan poäng.
//
// facit är facits räkning och accept facits svar utan enhet ("Svar: 9 år" blir "9", "Svar: 6 (plommon)"
// blir "6"). numbers är talen i uppgiftstexten. Facit nämner att 6 + 3 = 9 och 6 + 2 = 8 också är rätt
// på uppgifterna 2, 3, 4, 6 och 8: varje sann likhet med talen och svaret godkänns.
export default {
  code: "AG5",
  area: "Aritmetik",
  sub: "AG Grundläggande aritmetik",
  title: "Räknesättens innebörd, addition och subtraktion",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: { text: "Pia har 7 bollar. 3 bollar är röda och resten är gula. Hur många bollar är gula?", calc: "7 - 3 = 4", answer: "4 (bollar)" },
  screens: [
    {
      label: "1",
      kind: "word",
      text: "Fatima är 5 år. Hur gammal är Fatima om 4 år?",
      numbers: [5, 4],
      accept: ["9"],
      facit: "5 + 4 = 9",
      wholeQuotient: false,
    },
    {
      label: "2",
      kind: "word",
      text: "Tobias är 9 år. Hur gammal var Tobias för 6 år sedan?",
      numbers: [9, 6],
      accept: ["3"],
      facit: "9 - 6 = 3",
      wholeQuotient: false,
    },
    {
      label: "3",
      kind: "word",
      text: "Sofia är 8 år och Markus är 6 år. Hur mycket äldre är Sofia än Markus?",
      numbers: [8, 6],
      accept: ["2"],
      facit: "8 - 6 = 2",
      wholeQuotient: false,
    },
    {
      label: "4",
      kind: "word",
      text: "En glass kostar 14 kr. Reza har 9 kr. Hur mycket pengar fattas det för att Reza ska kunna köpa glassen?",
      numbers: [14, 9],
      accept: ["5"],
      facit: "14 - 9 = 5",
      wholeQuotient: false,
    },
    {
      label: "5",
      kind: "word",
      text: "Maria får 8 kr av sin mamma och 7 kr av sin pappa. Hur mycket är det tillsammans?",
      numbers: [8, 7],
      accept: ["15"],
      facit: "8 + 7 = 15",
      wholeQuotient: false,
    },
    {
      label: "6",
      kind: "word",
      text: "My hade 13 plommon. Hon gav 7 plommon till Ivan. Hur många plommon har hon då kvar?",
      numbers: [13, 7],
      accept: ["6"],
      facit: "13 - 7 = 6",
      wholeQuotient: false,
    },
    {
      label: "7",
      kind: "word",
      text: "Evelina hade 3 katter. Katterna fick tillsammans 9 ungar. Hur många katter hade hon då?",
      numbers: [3, 9],
      accept: ["12"],
      facit: "3 + 9 = 12",
      wholeQuotient: false,
    },
    {
      label: "8",
      kind: "word",
      text: "Elin är 17 år och Johan är 15 år. Hur mycket äldre är Elin än Johan?",
      numbers: [17, 15],
      accept: ["2"],
      facit: "17 - 15 = 2",
      wholeQuotient: false,
    },
  ],
};
