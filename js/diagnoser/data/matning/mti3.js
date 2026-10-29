// DIAGNOS MTi3, Från analog till digital tid.
// Elevbladet är s. 21–22, lärarsidan s. 20 och facit står på s. 20 i 4_Matning.pdf.
//
// 9 kolumner på resultatblanketten (s. 23): 1a–1c, 2a–2d, 3a och 3b, en skärm och en kolumn var. Alla är textuppgifter
// med bara Svar, och varje nummers inledande text står på alla dess skärmar.
// 1 ("Skriv de här tiderna digitalt") och 2 ("Svara i digital tid") är klockslagsrutor med digital: true: svaret ska
// vara digitalt och jämförs på 24 timmar, så 7.50 är fel för tio minuter i åtta på kvällen (19.50).
// 3a–b är tidsskillnader (duration) i minuter: 35, "35 min" och "35 minuter" är rätt för 3a, "tre kvart" och "0,75 h"
// för 3b.
export default {
  code: "MTi3",
  area: "Mätning",
  sub: "MTi Mätning av tid",
  title: "Från analog till digital tid",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: "Skriv tiden digitalt: Kvart över sex på morgonen", points: "each", boxes: { a: { accept: ["6.15"], time: "6.15", digital: true } } },
    { label: "1b", text: "Skriv tiden digitalt: Tio minuter i åtta på kvällen", points: "each", boxes: { a: { accept: ["19.50"], time: "19.50", digital: true } } },
    { label: "1c", text: "Skriv tiden digitalt: Halv två på eftermiddagen", points: "each", boxes: { a: { accept: ["13.30"], time: "13.30", digital: true } } },
    {
      label: "2a",
      text: "Hur mycket är klockan? Svara i digital tid. Klockan är 8.15. Vad visar klockan om 20 minuter?",
      points: "each",
      boxes: { a: { accept: ["8.35"], time: "8.35", digital: true } },
    },
    {
      label: "2b",
      text: "Hur mycket är klockan? Svara i digital tid. Klockan är 14.45. Vad visar klockan om en halvtimme?",
      points: "each",
      boxes: { a: { accept: ["15.15"], time: "15.15", digital: true } },
    },
    {
      label: "2c",
      text: "Hur mycket är klockan? Svara i digital tid. Klockan är 22.40. Vad visade klockan 15 minuter tidigare?",
      points: "each",
      boxes: { a: { accept: ["22.25"], time: "22.25", digital: true } },
    },
    {
      label: "2d",
      text: "Hur mycket är klockan? Svara i digital tid. Klockan är 17.55. Vad visade klockan 20 minuter tidigare?",
      points: "each",
      boxes: { a: { accept: ["17.35"], time: "17.35", digital: true } },
    },
    {
      label: "3a",
      text: "Bestäm tidsskillnaden. Ett TV-program började klockan 18.10 och slutade 18.45. Hur länge varade programmet?",
      points: "each",
      boxes: { a: { accept: ["35 minuter"], duration: "35 min" } },
    },
    {
      label: "3b",
      text: "Bestäm tidsskillnaden. Ett annat TV-program började klockan 20.45 och slutade klockan 21.30. Hur länge varade programmet?",
      points: "each",
      boxes: { a: { accept: ["45 minuter"], duration: "45 min" } },
    },
  ],
};
