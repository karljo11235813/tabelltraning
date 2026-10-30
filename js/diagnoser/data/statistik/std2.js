// DIAGNOS STd2, Stapeldiagram.
// Elevbladet är s. 45–49, lärarsidan s. 44 och facit står på s. 44 i 6_Statistik.pdf.
//
// 19 kolumner på resultatblanketten (s. 50): 1a–1d, 2a–2d, 3a–3e, 4a–4e och 5, en skärm och en kolumn var. Varje
// nummers inledande text och diagram står på alla dess skärmar.
// Diagrammen (diagram) är mätta ur PDF:ens vektorformer:
//   1  bilddiagram: bladets bild, utklippt ur PDF:en (images). Äpple 3, päron 2, apelsin 1, vindruvor 2, banan 4.
//   2  katt 5, hund 3, fiskar 2, hamster 3, häst 1.
//   3  liggande staplar: kyckling 9, korv 18, pizza 15,5, pannkakor 35, tacos 32, spagetti 25 ("spagetti" som på
//      bladet). 3c: facit "18 elever (± 1 elev)", ett intervall 17–19 med heltal (range, decimals 0). Facits exempel
//      är 18; "ca 18" och "19 elever" är också rätt.
//   4  grupperade staplar: pojkarna är ljusgröna på bladet (randiga här), flickorna svarta (fyllda).
// 2c och 3d är mängdsvar (set): djuren eller maträtterna i vilken ordning som helst.
// 5 ritar eleven (kind "bars"). Bladets tabell har ingen rubrik över namnen; här står "Namn". Bladets rutnät har
// inga siffror på axeln; skärmen ger axeln 0–10, och facit säger att valet av axlar inte diagnostiseras här.
//
// Tid: lärarsidan anger bara 2–3 minuter per uppgift, ingen tid för hela diagnosen, så time är null.

const IMG = "img/diagnoser/statistik/";
const FRUIT = [{ src: `${IMG}std2-1-frukt.webp`, alt: "Bilddiagram: varje barn har satt en bild av sin frukt ovanför äpple, päron, apelsin, vindruvor eller banan.", width: 507 }];
const INTRO_1 = "Barnen på fritids väljer vilken frukt de vill ha till mellanmål. Varje barn har satt en bild av sin frukt i diagrammet.";

const PETS = { type: "bar", categories: ["katt", "hund", "fiskar", "hamster", "häst"], y: { max: 6, step: 1, label: "Antal" }, values: [5, 3, 2, 3, 1] };
const INTRO_2 = "Barnen i en klass har fått frågan vilket husdjur de tycker bäst om. Resultatet ser du i det här diagrammet.";

const FOOD = {
  type: "bar",
  horizontal: true,
  categories: ["kyckling", "korv", "pizza", "pannkakor", "tacos", "spagetti"],
  y: { max: 35, step: 5, label: "Antal elevröster" },
  values: [9, 18, "15,5", 35, 32, 25],
};
const INTRO_3 =
  "Elevrådet på Backaskolan vill vara med och bestämma vilken mat som ska serveras i matsalen. Varje elev fick därför rösta på sin favoriträtt. Var och en fick bara lämna en röst. Resultatet ser du i diagrammet.";

const SPORTS = {
  type: "bar",
  categories: ["fotboll", "innebandy", "tennis", "ridning"],
  y: { max: 8, step: 1 },
  series: [
    { name: "pojkar", values: [5, 6, 7, 5], fill: "randig" },
    { name: "flickor", values: [5, 3, 2, 7], fill: "fylld" },
  ],
};
const INTRO_4 =
  "Eleverna i en klass i Solängsskolan har svarat på en enkät om vilka idrotter de håller på med på sin fritid. Staplarna visar hur många pojkar och hur många flickor som håller på med de olika idrotterna.";

export default {
  code: "STd2",
  area: "Sannolikhet och statistik",
  sub: "STd Statistik Diagram",
  title: "Stapeldiagram",
  time: null,
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: `${INTRO_1} Vilken frukt valdes av flest barn?`, points: "each", images: FRUIT, rows: ["Svar: [a]"], boxes: { a: { accept: ["Banan", "Bananer", "Bananen"] } } },
    { label: "1b", text: `${INTRO_1} Hur många barn valde päron?`, points: "each", images: FRUIT, rows: ["Svar: [a]"], boxes: { a: { accept: ["2"] } } },
    { label: "1c", text: `${INTRO_1} Vilken frukt valdes av tre barn?`, points: "each", images: FRUIT, rows: ["Svar: [a]"], boxes: { a: { accept: ["Äpple", "Äpplen", "Äpplet"] } } },
    { label: "1d", text: `${INTRO_1} Hur många barn var det sammanlagt i gruppen?`, points: "each", images: FRUIT, rows: ["Svar: [a]"], boxes: { a: { accept: ["12"] } } },
    { label: "2a", text: `${INTRO_2} Vilket husdjur tyckte flest barn om?`, points: "each", diagram: PETS, rows: ["Svar: [a]"], boxes: { a: { accept: ["Katt", "Katter", "Katten", "Katterna"] } } },
    { label: "2b", text: `${INTRO_2} Hur många av barnen tyckte bäst om hundar?`, points: "each", diagram: PETS, rows: ["Svar: [a]"], boxes: { a: { accept: ["3"] } } },
    {
      label: "2c",
      text: `${INTRO_2} Vilka två djur var lika omtyckta?`,
      points: "each",
      diagram: PETS,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Hund och hamster"], set: [["hund", "hundar", "hunden"], ["hamster", "hamstrar", "hamstern"]] } },
    },
    { label: "2d", text: `${INTRO_2} Hur många barn var det sammanlagt i klassen?`, points: "each", diagram: PETS, rows: ["Svar: [a]"], boxes: { a: { accept: ["14"] } } },
    {
      label: "3a",
      text: `${INTRO_3} Vilken maträtt fick flest röster?`,
      points: "each",
      diagram: FOOD,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Pannkakor", "Pannkaka", "Pannkakorna"] } },
    },
    { label: "3b", text: `${INTRO_3} Hur många röstade på spagetti?`, points: "each", diagram: FOOD, rows: ["Svar: [a]"], boxes: { a: { accept: ["25"] } } },
    { label: "3c", text: `${INTRO_3} Hur många röstade på korv?`, points: "each", diagram: FOOD, rows: ["Svar: [a]"], boxes: { a: { accept: ["18"], range: { ge: "17", le: "19", decimals: 0 } } } },
    {
      label: "3d",
      text: `${INTRO_3} Vilka maträtter fick fler än 30 röster?`,
      points: "each",
      diagram: FOOD,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Pannkakor och tacos"], set: [["pannkakor", "pannkaka"], ["tacos", "taco"]] } },
    },
    { label: "3e", text: `${INTRO_3} Vilken maträtt fick 32 röster?`, points: "each", diagram: FOOD, rows: ["Svar: [a]"], boxes: { a: { accept: ["Tacos", "Taco"] } } },
    { label: "4a", text: `${INTRO_4} Hur många pojkar på Solängsskolan spelar innebandy?`, points: "each", diagram: SPORTS, rows: ["Svar: [a]"], boxes: { a: { accept: ["6"] } } },
    { label: "4b", text: `${INTRO_4} Hur många flickor på Solängsskolan spelar fotboll?`, points: "each", diagram: SPORTS, rows: ["Svar: [a]"], boxes: { a: { accept: ["5"] } } },
    { label: "4c", text: `${INTRO_4} Vilken idrott är vanligast bland pojkarna på Solängsskolan?`, points: "each", diagram: SPORTS, rows: ["Svar: [a]"], boxes: { a: { accept: ["Tennis"] } } },
    {
      label: "4d",
      text: `${INTRO_4} Vilken idrott är vanligast bland flickorna på Solängsskolan?`,
      points: "each",
      diagram: SPORTS,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Ridning", "Rida"] } },
    },
    {
      label: "4e",
      text: `${INTRO_4} Vilken idrott håller flest elever på med på Solängsskolan?`,
      points: "each",
      diagram: SPORTS,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Ridning", "Rida"] } },
    },
    {
      label: "5",
      kind: "bars",
      text: "Under en bilresa gissar familjen gåtor. Linus prickar av vem som gissat rätt. När resan är klar ser resultatet ut så här. Rita ett stapeldiagram som beskriver resultatet.",
      table: { head: ["Namn", "Antal rätt"], rows: [["Mamma", "9"], ["Pappa", "4"], ["Emma", "3"], ["Linus", "6"]] },
      categories: ["Mamma", "Pappa", "Emma", "Linus"],
      y: { min: 0, max: 10, step: 1, label: "Antal rätt" },
      values: [9, 4, 3, 6],
    },
  ],
};
