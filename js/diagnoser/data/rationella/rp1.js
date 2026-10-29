// DIAGNOS RP1, Grundläggande proportionalitet.
// Elevbladet är s. 56, lärarsidorna s. 55 och facit står på s. 55 i 2_Rationella_tal.pdf.
//
// 11 skärmar, en per etikett (1a–5b), alla textuppgifter med bara Svar: texten är uppgiften och rutan a kommer
// efter "Svar:". Resultatblanketten har en kolumn per etikett: 11 i allt. Varje nummers inledande text står på
// båda dess skärmar.
//
// Svar med enhet (D1): facit skriver 2a som "800 g (0,8 kg)", 2c som "1 200 g (1,2 kg)" och 5b som "16 dl
// (1,6 liter)". accept är talet i huvudenheten (800, 1 200, 16) och units räknar om: 800, 800 g och 0,8 kg är
// rätt, men 800 kg och 0,8 är fel. 2b har samma enheter, eftersom 0,2 kg är lika rätt som 200 g.
//
// Enhetsfamiljerna (MASS, VOLUME) listar alla enheter och synonymer med rätt faktor mot huvudenheten (g respektive dl),
// så att "0,8 kilogram" är rätt men "800 hg" är fel. En enhet som inte står i listan ignoreras av rättningen, så alla
// vanliga ska stå här. 1a, 1b och 5a (dl) har volymenheterna, så att 0,4 l är rätt för 4 dl.
//
// Facit kommenterar 5b: 4 dl vatten och 1 dl koncentrerad saft ger 5 dl (0,5 liter) blandad saft.
// Faktorn är relativ talet i accept[0]: 800 g, så 1 kg = 1000.
const MASS = {
  mg: "1/1000", milligram: "1/1000",
  g: 1, gram: 1, gr: 1,
  hg: 100, hektogram: 100,
  kg: 1000, kilo: 1000, kilogram: 1000,
};
// Huvudenhet dl.
const VOLUME = {
  ml: "1/100", milliliter: "1/100",
  cl: "1/10", centiliter: "1/10",
  dl: 1, deciliter: 1,
  l: 10, liter: 10,
  hl: 1000, hektoliter: 1000,
};

export default {
  code: "RP1",
  area: "Rationella tal",
  sub: "RP Proportionalitet och procent",
  title: "Grundläggande proportionalitet",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "När man gör pannkakssmet ska man ha dubbelt så mycket mjölk som mjöl. Hur mycket mjölk ska man ta om man tar 2 dl mjöl?",
      points: "each",
      boxes: { a: { accept: ["4"], units: VOLUME } },
    },
    {
      label: "1b",
      text: "När man gör pannkakssmet ska man ha dubbelt så mycket mjölk som mjöl. Hur mycket mjöl ska man ta om man tar 6 dl mjölk?",
      points: "each",
      boxes: { a: { accept: ["3"], units: VOLUME } },
    },
    {
      label: "2a",
      text: "I ett recept på köttbullar ska det vara 400 gram köttfärs till 4 portioner. Hur många gram köttfärs ska man ta om det ska räcka till dubbelt så många portioner?",
      points: "each",
      boxes: { a: { accept: ["800"], units: MASS } },
    },
    {
      label: "2b",
      text: "I ett recept på köttbullar ska det vara 400 gram köttfärs till 4 portioner. Hur många gram köttfärs ska man ta om det ska räcka till hälften så många portioner?",
      points: "each",
      boxes: { a: { accept: ["200"], units: MASS } },
    },
    {
      label: "2c",
      text: "I ett recept på köttbullar ska det vara 400 gram köttfärs till 4 portioner. Hur många gram köttfärs ska man ta om det ska räcka till 12 portioner?",
      points: "each",
      boxes: { a: { accept: ["1 200"], units: MASS } },
    },
    {
      label: "3a",
      text: "Elin och Elsa köper lördagsgodis. De köper lösgodis som kostar 5 kr / hg. Elin köper 2 hg. Hur mycket ska hon betala?",
      points: "each",
      boxes: { a: { accept: ["10"] } },
    },
    {
      label: "3b",
      text: "Elin och Elsa köper lördagsgodis. De köper lösgodis som kostar 5 kr / hg. Elsa köper dubbelt så mycket som Elin. Hur mycket ska Elsa betala?",
      points: "each",
      boxes: { a: { accept: ["20"] } },
    },
    {
      label: "4a",
      text: "Anders och Amanda köper en lott ihop. Anders betalar dubbelt så mycket som Amanda av lottpriset. De vinner 300 kronor på lotten. Vinsten ska delas efter hur mycket de betalade för lotten. Hur mycket av vinsten får Anders?",
      points: "each",
      boxes: { a: { accept: ["200"] } },
    },
    {
      label: "4b",
      text: "Anders och Amanda köper en lott ihop. Anders betalar dubbelt så mycket som Amanda av lottpriset. De vinner 300 kronor på lotten. Vinsten ska delas efter hur mycket de betalade för lotten. Hur mycket av vinsten får Amanda?",
      points: "each",
      boxes: { a: { accept: ["100"] } },
    },
    {
      label: "5a",
      text: "När man blandar saft ska man ta 4 dl vatten till 1 dl koncentrerad saft. Hur mycket koncentrerad saft ska man ta till 8 dl vatten?",
      points: "each",
      boxes: { a: { accept: ["2"], units: VOLUME } },
    },
    {
      label: "5b",
      text: "När man blandar saft ska man ta 4 dl vatten till 1 dl koncentrerad saft. Hur mycket vatten ska man ta om man vill ha 2 liter färdigblandad saft?",
      points: "each",
      boxes: { a: { accept: ["16"], units: VOLUME } },
    },
  ],
};
