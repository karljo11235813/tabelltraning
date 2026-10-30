// DIAGNOS SA1, Grundläggande kombinatorik.
// Elevbladet är s. 12–13, lärarsidan s. 11 och facit står på s. 11 i 6_Statistik.pdf.
//
// 4 kolumner: resultatblanketten (s. 14) har 1, 2, 3, 4a, 4b och 5, men 3 (rita ett träddiagram) och 5 (skriv ner
// alla kombinationer) är pappersuppgifter som inte rättas. Eleven får ett lösblad att rita på (paper: true).
// Bladets bilder (tröjor, byxor, strumpor, träddiagrammet i 2, glassen och kulorna) är utklippta ur PDF:en (images,
// img/diagnoser/statistik/); texten säger också med ord vad de visar.
//
// Facit: 1 6, 2 12, 4a 6, 4b 4 ("Ytterligare 4 (PP, VV, BB, JJ), det vill säga totalt 10": frågan är hur många
// fler, så 4 är svaret och 10 är fel). 5: två vita, två svarta eller en vit och en svart.
//
// Lärarsidan: "tar det cirka 15 minuter … avbryta efter ca 20 minuter".
const IMG = "img/diagnoser/statistik/";
const CLOTHES = [{ src: `${IMG}sa1-1-klader.webp`, alt: "Två tröjor, en blå och en gul, och tre par byxor: grå, gröna och blå.", width: 227 }];
const CLOTHES_2 = [
  { src: `${IMG}sa1-2-klader.webp`, alt: "Två tröjor (blå och gul), två par strumpor (svarta och randiga) och tre par byxor (grå, gröna och blå).", width: 523 },
  { src: `${IMG}sa1-2-trad.webp`, alt: "Träddiagrammet Klädval: från varje tröja går en gren till var och en av de tre byxorna, och från varje par byxor en gren till vart och ett av de två paren strumpor.", width: 483 },
];
const ICE_IMAGE = [{ src: `${IMG}sa1-4-glass.webp`, alt: "Glasskulor i olika färger.", width: 137 }];
const BALLS = [{ src: `${IMG}sa1-5-kulor.webp`, alt: "Fem kulor i en låda: två vita och tre svarta.", width: 187 }];

const ICE = "I en glasskiosk finns det fyra smaker: Päron, vanilj, blåbär och jordgubbe.";

export default {
  code: "SA1",
  area: "Sannolikhet och statistik",
  sub: "SA Sannolikhet",
  title: "Grundläggande kombinatorik",
  time: { min: 15, max: 15, stop: 20 },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "I en byrålåda finns två olika tröjor (en blå och en gul) och tre par olika byxor (grå, gröna och blå). När Oskar ska gå ut väljer han ett par byxor och en tröja. På hur många olika sätt kan Oskar kombinera ett par byxor och en tröja?",
      images: CLOTHES,
      points: "each",
      boxes: { a: { accept: ["6"] } },
    },
    {
      label: "2",
      text: "I en byrålåda finns två olika tröjor (en blå och en gul), två olika par strumpor (ett svart och ett randigt) och tre par olika byxor (grå, gröna och blå). Träddiagrammet visar alla olika sätt man kan kombinera en tröja, ett par byxor och ett par strumpor: först väljer man tröja, sedan byxor och sist strumpor. Hur många olika sätt finns det?",
      images: CLOTHES_2,
      points: "each",
      boxes: { a: { accept: ["12"] } },
    },
    {
      label: "3",
      kind: "paper",
      text: "I en burk ligger gula, röda och blå pärlor (flera av varje färg). Rita ett träddiagram som visar alla färgkombinationer du kan få upp om du först tar en pärla och sedan en pärla till.",
    },
    {
      label: "4a",
      text: `${ICE} Hur många olika glasstrutar kan du skapa om du väljer två kulor glass och du måste välja olika smaker? (OBS! att ordningen inte spelar roll. Till exempel är ”vanilj – päron” samma glass som ”päron – vanilj”).`,
      images: ICE_IMAGE,
      points: "each",
      boxes: { a: { accept: ["6"] } },
    },
    {
      label: "4b",
      text: `${ICE} Hur många fler glassar kan du göra om du även får välja två kulor med samma smak?`,
      images: ICE_IMAGE,
      points: "each",
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "5",
      kind: "paper",
      text: "I en låda ligger fem kulor, två är vita och tre är svarta. Elsa blundar, stoppar ner handen i lådan och tar två kulor. Vilka färger kan de två kulorna ha? Skriv ner alla olika kombinationer som det kan bli.",
      images: BALLS,
    },
  ],
};
