// DIAGNOS MVo6, Volymberäkning 2.
// Elevbladet är s. 96–97, lärarsidan s. 95 och facit står på s. 95 i 4_Matning.pdf.
//
// Sex textuppgifter (1–6) med bara Svar. Resultatblanketten (s. 98) har en kolumn per uppgift: 6 i allt. Eleven får
// ett lösblad och miniräknare (paper: true). units räknar om mellan volymenheterna.
// Bara 4 har figuren från bladet (rörens längder står bara där). I 1, 2, 3, 5 och 6 säger texten allt; 6:s figur
// skriver dessutom "6 dm" där texten säger 6 m.
// 1, 3, 4 och 6 är π-rutor: det exakta värdet med π, ett närmevärde eller båda i en kedja. 3 frågar efter procent:
// π/6 ≈ 52 %, och units listar % och procent, så "52", "52 %" och "π/6" är rätt.
// 2: facit "Halvklotets volym = 2 ggr konens volym"; svaret är talet 2 ("2 gånger", "2 ggr" och "dubbelt" är också rätt).
// 1: bladets "Vattendroppen i figuren" blir "Vattendroppen" med en mening om hur konen står, eftersom figuren inte
//    ritas här.
//
// Tryckfel i facit:
//   1  "42π mm³ ≈ 132 mm³" räknar med konens höjd 8 mm. Bladet säger att hela höjden är 8 mm (pilen går från konens
//      spets till halvklotets botten), så konen är 8 − 3 = 5 mm hög: 18π + 15π = 33π ≈ 103,7 mm³. Rutan godtar 33π.
//   4  "10π dm³ ≈ 31,4 dm³" räknar med radien 1 dm, men bladet säger "Rören har radien 1 cm". Med figurens längder
//      (6 dm från botten till rörets ovansida, 6 dm från innerhörnet till rörets ände) är mittlinjen 59 + 61 = 120 cm,
//      så volymen är π · 1² · 120 = 120π cm³ ≈ 377 cm³ (0,12π dm³). Rutan godtar 120π cm³; den som räknar 60 + 58 cm
//      (118π ≈ 371) ligger också inom π-rutans intervall.
//
// Tid: lärarsidan anger ingen tid. Diagnosen "skall inte göras på tid"; läraren bedömer själv hur lång tid en elev som
// behärskar området behöver och avbryter efter ytterligare tio minuter. time är därför null, och resultatskärmen visar
// ingen riktlinje från Diamant.
import { unitsFor } from "../../units.js";

// 4: de två rören i 90° vinkel (mittlinjen sned i hörnet, streckad), med bladets två mått "6 dm".
const PIPES = {
  view: [320, 210],
  pieces: [
    { path: "M68 24H298A6 28 0 0 1 298 80H124V192A28 6 0 0 1 68 192Z" },
    { path: "M292 52A6 28 0 1 0 304 52A6 28 0 1 0 292 52Z" },
    { path: "M68 192A28 6 0 1 0 124 192A28 6 0 1 0 68 192Z" },
  ],
  shaded: [1, 2],
  lines: [
    "M68 24L74 30M80 36L86 42M92 48L98 54M104 60L110 66M116 72L124 80",
    "M30 24V82M30 118V198M26 32L30 24L34 32M26 190L30 198L34 190",
    "M124 104H178M242 104H298M132 100L124 104L132 108M290 100L298 104L290 108",
  ],
  labels: [
    { at: [30, 100], text: "6 dm" },
    { at: [210, 104], text: "6 dm" },
  ],
};

export default {
  code: "MVo6",
  area: "Mätning",
  sub: "MVo Mätning av volym",
  title: "Volymberäkning 2",
  time: null,
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Vattendroppen består av ett halvklot och en kon (konen står med spetsen uppåt på halvklotet). Klotets radie är 3 mm och hela höjden 8 mm. Bestäm vattendroppens volym.",
      points: "each",
      boxes: { a: { accept: ["33π mm³ ≈ 103,7 mm³"], pi: "33π", units: unitsFor("mm³") } },
    },
    {
      label: "2",
      text: "En kon och ett halvt klot har samma basarea och samma höjd. Hur många gånger större volym har halvklotet?",
      points: "each",
      boxes: { a: { accept: ["2", "2 gånger", "2 ggr", "dubbelt", "dubbelt så stor"] } },
    },
    {
      label: "3",
      text: "En kub har kanten 6 cm. I kuben skriver man in ett klot. Hur många procent av kubens volym upptas av klotet?",
      points: "each",
      boxes: { a: { accept: ["π/6 ≈ 52 %"], pi: "π/6", units: { "%": "1/100", procent: "1/100" } } },
    },
    {
      label: "4",
      text: "Två rör har sammanfogats i 90° vinkel. Rören har radien 1 cm. Hur stor volym har den här kroppen?",
      points: "each",
      figure: PIPES,
      boxes: { a: { accept: ["120π cm³ ≈ 377 cm³"], pi: "120π", units: unitsFor("cm³") } },
    },
    {
      label: "5",
      text: "En pyramid är inskriven i en kub med kanten 6 cm. Bestäm pyramidens volym.",
      points: "each",
      boxes: { a: { accept: ["72"], units: unitsFor("cm³") } },
    },
    {
      label: "6",
      text: "Ett cirkustält är uppbyggt som en kon ovanpå en cylinder. Cylindern är 2 m hög och har radien 6 m. Hela tältet är 6 m högt. Bestäm tältets volym.",
      points: "each",
      boxes: { a: { accept: ["120π m³"], pi: "120π", units: unitsFor("m³") } },
    },
  ],
};
