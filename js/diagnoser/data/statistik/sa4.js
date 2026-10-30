// DIAGNOS SA4, Experimentell sannolikhet.
// Elevbladet är s. 23–24, lärarsidan s. 22 och facit står på s. 22 i 6_Statistik.pdf.
//
// 9 kolumner på resultatblanketten (s. 25): 1a–c, 2a–c, 3, 4 och 5, en skärm och en kolumn var. 2a är en kolumn
// med sex rutor i tabellen (points: "one", allt rätt eller inget). Eleven får ett lösblad (paper: true).
//
// 1: bladets tabell är en streckräkning; här står antalen (blå 40, röd 10, gul 13, vit 15, svart 22, summa 100).
//    1a och 1b är färger och rättas som text (Blå, Röd). 1c facit 100.
// 2: bladets tabell står liggande (antal kast i kolumnerna); här står den stående, med en rad per antal kast och korta
//    rubriker ("Spetsen upp", "Andel" i stället för "Antal kast med spetsen upp" …), så att den får plats på en mobil. 2a:
//    andelarna 8/10, 15/20, 32/50, 63/100, 124/200 och 302/500; varje lika stort tal är rätt, också i procent (80 %).
//    2b och 2c (facit "cirka 60 %" och "cirka 40 %") är intervall: 0,58–0,62 och 0,38–0,42 (60,4 % och 62 % är
//    andelen efter 500 och 200 kast). Intervallet räknas om med units som en värderuta, så "60 %", "0,6", "0,604" och
//    "3/5" är rätt, men "60" utan % är fel (som i SA3 och SA5). "cirka", "ca" och "ungefär" före svaret räknas bort.
// 3: tabellen står också stående (en rad per antal kast). Facit "50 % (2/4)": sannolikheten är 1/2, i vilken form som
//    helst; försökets egen andel 149/300 (49,7 %) är fel.
// 4: 180/400 av 20 000 = 9 000. 5: 60 · 50/10 = 300.
//
// Resultatblanketten har fel rubrik: "Grundläggande aritmetik | DIAGNOS SA4". Bladets 1b börjar med liten bokstav
// ("vilken färg"); här står "Vilken".
//
// Lärarsidan: "tar det ca 15–20 minuter"; ingen tid att avbryta efter, så stop är null.
const P = { "%": "1/100", procent: "1/100", "‰": "1/1000", promille: "1/1000" };

const BEADS =
  "Carlos blundar och stoppar ner handen i en stor burk med 1 000 pärlor. Han drar 100 stycken pärlor ur burken och antecknar i tabellen vilken färg de har.";
const COLOURS = {
  head: ["Färg", "Antal"],
  rows: [["Blå", "40"], ["Röd", "10"], ["Gul", "13"], ["Vit", "15"], ["Svart", "22"]],
};

const PIN =
  "Om man kastar ett häftstift kan man få spetsen upp eller spetsen ner. Tabellen beskriver resultatet av ett försök där man kastat ett häftstift.";
const THROWS = [["10", "8"], ["20", "15"], ["50", "32"], ["100", "63"], ["200", "124"], ["500", "302"]];
const PIN_TABLE = { head: ["Antal kast", "Spetsen upp"], rows: THROWS };

const COINS =
  "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Om man kastar två mynt så kan man få tre olika utfall (resultat): en krona och en klave; två kronor; 2 klavar. Vid ett försök kastade man två mynt och fick det här resultatet.";

const IMG = "img/diagnoser/statistik/";
const COIN_IMAGE = [{ src: `${IMG}sa4-3-mynt.webp`, alt: "En enkrona från båda sidor: klave med kungens bild och krona med en krona.", width: 165 }];

export default {
  code: "SA4",
  area: "Sannolikhet och statistik",
  sub: "SA Sannolikhet",
  title: "Experimentell sannolikhet",
  time: { min: 15, max: 20, stop: null },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: `${BEADS} Vilken färg bör det enligt försöket vara störst sannolikhet att få, om en pärla dras?`,
      points: "each",
      table: COLOURS,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Blå", "blå pärla", "blå pärlor", "en blå", "en blå pärla", "blått", "blåa", "blåa pärlor"] } },
    },
    {
      label: "1b",
      text: `${BEADS} Vilken färg bör det enligt försöket vara minst sannolikt att få?`,
      points: "each",
      table: COLOURS,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Röd", "röd pärla", "röda pärlor", "en röd", "en röd pärla", "rött", "röda"] } },
    },
    {
      label: "1c",
      text: `${BEADS} Ungefär hur många av alla 1 000 pärlor i burken bör vara röda?`,
      points: "each",
      table: COLOURS,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["100"] } },
    },
    {
      label: "2a",
      text: `${PIN} Fyll i andelen kast med spetsen upp.`,
      points: "one",
      table: {
        head: ["Antal kast", "Spetsen upp", "Andel"],
        rows: THROWS.map((row, i) => [...row, `[${"abcdef"[i]}]`]),
      },
      boxes: {
        a: { accept: ["8/10"], units: P },
        b: { accept: ["15/20"], units: P },
        c: { accept: ["32/50"], units: P },
        d: { accept: ["63/100"], units: P },
        e: { accept: ["124/200"], units: P },
        f: { accept: ["302/500"], units: P },
      },
    },
    {
      label: "2b",
      text: `${PIN} Ungefär hur stor är sannolikheten att spetsen hamnar upp?`,
      points: "each",
      table: PIN_TABLE,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["cirka 60 %"], range: { ge: "0,58", le: "0,62" }, units: P } },
    },
    {
      label: "2c",
      text: `${PIN} Ungefär hur stor är sannolikheten att spetsen hamnar ner?`,
      points: "each",
      table: PIN_TABLE,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["cirka 40 %"], range: { ge: "0,38", le: "0,42" }, units: P } },
    },
    {
      label: "3",
      text: `${COINS} Hur stor är sannolikheten för att få utfallet en krona och en klave?`,
      images: COIN_IMAGE,
      points: "each",
      table: {
        head: ["Antal kast", "Två kronor", "En krona och en klave", "Två klavar"],
        rows: [["10", "3", "4", "3"], ["50", "14", "23", "13"], ["100", "27", "48", "25"], ["300", "73", "149", "78"]],
      },
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["2/4"], units: P } },
    },
    {
      label: "4",
      text: "I en säck har man blandat ca 20 000 vita och bruna bönor. Ur säcken tar man slumpvis upp 400 bönor. Av dem är 220 bruna och 180 vita. Ungefär hur många vita bönor bör finnas i säcken?",
      points: "each",
      boxes: { a: { accept: ["9 000"] } },
    },
    {
      label: "5",
      text: "För att räkna hur många bin det finns i en bikupa samlar man in och märker 60 bin, som sedan släpps in i kupan igen. När man sedan fångar in 50 bin av alla i kupan är 10 av dem märkta. Hur många bin bör det sannolikt finnas i bikupan?",
      points: "each",
      boxes: { a: { accept: ["300"] } },
    },
  ],
};
