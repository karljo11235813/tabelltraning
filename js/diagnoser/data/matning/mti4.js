// DIAGNOS MTi4, Delar av sekund.
// Elevbladet är s. 25, lärarsidan s. 24 och facit står på s. 24 i 4_Matning.pdf.
//
// 4 kolumner på resultatblanketten (s. 26): 1–4, en skärm och en kolumn var. Bladets inledande text står på alla
// skärmar, och de fem tiderna står i en tabell ovanför svarsraden.
// 1: ett namn, rättas som text ("Karl", också "Karl sprang snabbast").
// 2–4: tidsskillnader i sekunder. Facit "0,40 s (eller 40 hundradels sekund)": units räknar om hundradelar, så 0,4,
// "0,40 s", "0,4 sekunder" och "40 hundradels sekund" är rätt, men 40 och "40 s" fel. 3:s "1 s och 27 hundradels
// sekund" (facits egen skrivning) står i accept.
//
// Lärarsidan säger "avbryta diagnosen efter cirka 7–8 minuter"; stop är 8.
const INTRO =
  "Klass 5 B har sprungit 60 meter. Deras lärare har tagit tid på dem med ett tidtagarur som visar både tiondels- och hundradels sekunder. Här ser du tiderna för fem av eleverna.";

const TIMES = {
  head: ["Namn", "Tid"],
  rows: [["Ali", "9,65 s"], ["Karl", "8,73 s"], ["Angelo", "10,00 s"], ["Linn", "9,50 s"], ["Pontus", "9,90 s"]],
};

// Hundradelar av en sekund, som eleven kan skriva dem.
const HUNDREDTHS = {
  s: "1",
  hundradels: "1/100",
  hundradel: "1/100",
  hundradelar: "1/100",
  hundradelssekund: "1/100",
  hundradelssekunder: "1/100",
};

export default {
  code: "MTi4",
  area: "Mätning",
  sub: "MTi Mätning av tid",
  title: "Delar av sekund",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: `${INTRO} Vem sprang snabbast?`,
      points: "each",
      table: TIMES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Karl", "Karl sprang snabbast"] } },
    },
    {
      label: "2",
      text: `${INTRO} Hur mycket snabbare sprang Linn än Pontus?`,
      points: "each",
      table: TIMES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["0,40"], units: HUNDREDTHS } },
    },
    {
      label: "3",
      text: `${INTRO} Hur stor skillnad var det i tid mellan den snabbaste och den långsammaste?`,
      points: "each",
      table: TIMES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["1,27", "1 s och 27 hundradels sekund"], units: HUNDREDTHS } },
    },
    {
      label: "4",
      text: `${INTRO} Hur mycket snabbare var Karl än Linn?`,
      points: "each",
      table: TIMES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["0,77"], units: HUNDREDTHS } },
    },
  ],
};
