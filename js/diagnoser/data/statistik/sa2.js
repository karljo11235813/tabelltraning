// DIAGNOS SA2, Kombinatorik.
// Elevbladet är s. 16, lärarsidan s. 15 och facit står på s. 15 i 6_Statistik.pdf.
//
// Sex textuppgifter (1–6) med bara Svar. Resultatblanketten (s. 17) har en kolumn per uppgift: 6 i allt. Eleven får
// ett lösblad att rita och visa sina lösningar på (paper: true).
// Facit: 1 24, 2 72, 3 210, 4 15, 5 9, 6 3.
//
// Lärarsidan: "tar det cirka 20 minuter … avbryta diagnosen efter cirka 30 minuter".
export default {
  code: "SA2",
  area: "Sannolikhet och statistik",
  sub: "SA Sannolikhet",
  title: "Kombinatorik",
  time: { min: 20, max: 20, stop: 30 },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Hur många olika danspar (flicka-pojke) kan man bilda av 4 pojkar och 6 flickor?",
      points: "each",
      boxes: { a: { accept: ["24"] } },
    },
    {
      label: "2",
      text: "Hur många tvåsiffriga tal kan man skriva med siffrorna 1, 2, 3, 4, 5, 6, 7, 8, 9 om talet inte får innehålla två likadana siffror?",
      points: "each",
      boxes: { a: { accept: ["72"] } },
    },
    {
      label: "3",
      text: "I skolan skall man spela teater. Bland 7 kandidater skall man först välja ut en som spelar Nalle Puh, därefter en som spelar Nasse och slutligen en som spelar Ior. På hur många olika sätt kan det ske?",
      points: "each",
      boxes: { a: { accept: ["210"] } },
    },
    {
      label: "4",
      text: "6 personer ska skaka hand med varandra. Hur många handskakningar blir det?",
      points: "each",
      boxes: { a: { accept: ["15"] } },
    },
    {
      label: "5",
      text: "Hur många diagonaler kan man dra i en sexhörning?",
      points: "each",
      boxes: { a: { accept: ["9"] } },
    },
    {
      label: "6",
      text: "I ett mörkt rum ligger det 4 blå och 6 svarta strumpor. Hur många strumpor måste du ta med dig för att vara säker på att få ett par med samma färg?",
      points: "each",
      boxes: { a: { accept: ["3"] } },
    },
  ],
};
