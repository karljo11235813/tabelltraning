// DIAGNOS MTi5, Tidsdifferens i dagar m.m.
// Elevbladet är s. 28, lärarsidan s. 27 och facit står på s. 27 i 4_Matning.pdf.
//
// 9 kolumner på resultatblanketten (s. 29): 1a, 1b, 2a–2c, 3, 4, 5 och 6, en skärm och en kolumn var.
// 1a–b (veckodagar) och 3 (ett datum) rättas som text med form: "exact", så att bara orden räknas: annars skulle
// "19/4" läsas som talet 4,75. 2, 4 och 6 är tal; enheten efter ("31 dagar", "3 år") ignoreras. 5 har två rutor
// (månader och dagar) och en kolumn på blanketten, så points: "one".
//
// Facit har flera rätta svar (lärarsidan: "man kan tolka tidsdifferenser på olika sätt"):
//   2c 28 dagar, eller 29 när det är skottår: accept[0] är "28 eller 29", och 28 och 29 är rätt.
//   3  19 april (om första dagen är den 6 april) eller 20 april.
//   4  7 dagar (från och med den 28 mars till den 4 april) eller 6 (dagarna emellan).
// Bladets "Nästa match spelas den 4 april?" (4) skrivs med punkt.
export default {
  code: "MTi5",
  area: "Mätning",
  sub: "MTi Mätning av tid",
  title: "Tidsdifferens i dagar m.m.",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: "Vilken dag kommer före söndag?", points: "each", boxes: { a: { accept: ["lördag", "lördagen"], form: "exact" } } },
    { label: "1b", text: "Vilken dag kommer efter onsdag?", points: "each", boxes: { a: { accept: ["torsdag", "torsdagen"], form: "exact" } } },
    { label: "2a", text: "Hur många dagar har augusti?", points: "each", boxes: { a: { accept: ["31"] } } },
    { label: "2b", text: "Hur många dagar har november?", points: "each", boxes: { a: { accept: ["30"] } } },
    { label: "2c", text: "Hur många dagar har februari?", points: "each", boxes: { a: { accept: ["28 eller 29", "28", "29"] } } },
    {
      label: "3",
      text: "När Marko blev sjuk den 6 april fick han en medicin som han skulle ta i två veckor. Vilket datum slutade Marko ta sin medicin?",
      points: "each",
      boxes: {
        a: {
          accept: ["19 april", "den 19 april", "19/4", "19 apr", "20 april", "den 20 april", "20/4", "20 apr"],
          form: "exact",
        },
      },
    },
    {
      label: "4",
      text: "Anton spelar handbollsmatch den 28 mars. Nästa match spelas den 4 april. Hur många dagar är det däremellan?",
      points: "each",
      rows: ["Svar: [a] dagar."],
      boxes: { a: { accept: ["7", "6"] } },
    },
    {
      label: "5",
      text: "Idag är det den 5 mars. Hur långt är det kvar till Carlos födelsedag som är den 19 maj?",
      points: "one",
      rows: ["Svar: [a] månader och [b] dagar."],
      boxes: { a: { accept: ["2"] }, b: { accept: ["14"] } },
    },
    {
      label: "6",
      text: "Alma föddes 1991. Hennes kusin Ellen föddes år 2000. Hur gammal var Ellen när Alma var 12 år?",
      points: "each",
      rows: ["Svar: Då var Ellen [a] år."],
      boxes: { a: { accept: ["3"] } },
    },
  ],
};
