// DIAGNOS SA5, Sannolikhet.
// Elevbladet är s. 27–28, lärarsidan s. 26 och facit står på s. 26 i 6_Statistik.pdf.
//
// 16 kolumner på resultatblanketten (s. 29): 1a–d, 2a–c, 3a–b, 4a–b, 5a–c och 6a–b, en skärm och en kolumn var.
// Eleven får ett lösblad att rita träddiagram på (paper: true).
//
// Sannolikheter: accept[0] är facits bråk, och varje lika stort tal är rätt (33/36 = 11/12). units läser procent och
// promille ("16 %", "160 ‰"); ett tal utan % är en andel, så "16" är fel. Facit skriver själv avrundade procentsatser
// (5a 26,5 %, 5b 53 %, 5c 15,2 %), och lärarsidan säger att ett exakt bråk "kan vara att föredra framför en avrundad
// procentsats": där värdet inte går jämnt upp står procentsatsen avrundad till hela procent, en och två decimaler i
// accept, som andel (35/132 ≈ 27 %, 26,5 %, 26,52 % är "0,27", "0,265", "0,2652").
//
// 1: tabellen över de 36 utfallen är en figur (streck och texter), eftersom en vanlig tabell med sju kolumner inte får
//    plats på en mobil. Den står som på bladet, med tärning 1 överst och tärning 2 till vänster, men rubrikerna är
//    siffror i stället för ord (ett, två …).
// 2: bladets "1/3" är ett bråk i texten. 6: bladets "a) En pojke …" och "b) En flicka …" står med liten bokstav, eftersom
//    de är slutet på frågan. Facit 6a och 6b är 6/25 (24 %): könet och intresset räknas som oberoende, 0,6 · 0,4 och
//    0,4 · 0,6.
//
// Lärarsidan: "kan … ta något längre tid (20–25 min)"; ingen tid att avbryta efter, så stop är null.
const P = { "%": "1/100", procent: "1/100", "‰": "1/1000", promille: "1/1000" };

// Rutnätet: en rubrikkolumn 27 enheter bred och sex kolumner à 53,5, sju rader à 36 (rubrikraden först).
const SIX = [1, 2, 3, 4, 5, 6];
const colX = (c) => 28 + 53.5 * (c - 1) + 26.75; // mitten av kolumn c (tärning 1)
const rowY = (r) => 1 + 36 * r + 18; // mitten av rad r (tärning 2); rad 0 är rubrikraden
const OUTCOMES = {
  view: [350, 254],
  lines: [
    "M1 1 H349 V253 H1 Z",
    ...SIX.map((r) => `M1 ${1 + 36 * r} H349`),
    ...[0, ...SIX.slice(0, 5)].map((c) => `M${28 + 53.5 * c} 1 V253`),
  ],
  labels: [
    ...SIX.map((c) => ({ at: [colX(c), rowY(0)], text: String(c) })),
    ...SIX.flatMap((r) => [{ at: [14.5, rowY(r)], text: String(r) }, ...SIX.map((c) => ({ at: [colX(c), rowY(r)], text: `(${r};${c})` }))]),
  ],
};
const DICE =
  "Om du kastar två tärningar kan du få 36 olika utfall (resultat). Dessa visas i tabellen (tärning 1 överst, tärning 2 till vänster). Bestäm med hjälp av tabellen, sannolikheten för att få";
const COLOUR_DIE =
  "På en tärning är två sidor gula, två sidor röda och två sidor blåa. Sannolikheten att få en av färgerna är alltså 1/3. Du kastar två sådana tärningar. Hur stor är sannolikheten att få";
const COINS = "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Du kastar tre mynt.";
const PIN = "När man kastar ett häftstift är sannolikheten att det ska landa med spetsen upp 40 %. Du kastar ett häftstift två gånger. Hur stor är sannolikheten att";
const BAG = "I en påse ligger 5 röda och 7 gröna kulor. Du drar två kulor utan återläggning. Hur stor är sannolikheten att du drar";
const SCHOOL =
  "På en skola finns det 300 pojkar och 200 flickor. 40 % av eleverna är intresserade av matematik. Hur stor är sannolikheten för att en slumpvis vald elev är";

const dice = (label, text, accept) => ({ label, text, figure: OUTCOMES, points: "each", boxes: { a: { accept, units: P } } });
const IMG = "img/diagnoser/statistik/";
const COIN_IMAGE = [{ src: `${IMG}sa5-3-mynt.webp`, alt: "En enkrona från båda sidor: klave med kungens bild och krona med en krona.", width: 169 }];
const screen = (label, text, accept, images) => ({ label, text, ...(images && { images }), points: "each", boxes: { a: { accept, units: P } } });

export default {
  code: "SA5",
  area: "Sannolikhet och statistik",
  sub: "SA Sannolikhet",
  title: "Sannolikhet",
  time: { min: 20, max: 25, stop: null },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    dice("1a", `${DICE} summan två?`, ["1/36", "0,03", "0,028", "0,0278"]),
    dice("1b", `${DICE} summan sex?`, ["5/36", "0,14", "0,139", "0,1389"]),
    dice("1c", `${DICE} summan tio eller mindre?`, ["33/36", "0,92", "0,917", "0,9167"]),
    dice("1d", `${DICE} samma värde på båda tärningarna?`, ["6/36", "0,17", "0,167", "0,1667"]),
    screen("2a", `${COLOUR_DIE} gult på enbart en av tärningarna?`, ["4/9", "0,44", "0,444", "0,4444"]),
    screen("2b", `${COLOUR_DIE} blått på minst en av tärningarna?`, ["5/9", "0,56", "0,556", "0,5556"]),
    screen("2c", `${COLOUR_DIE} samma färg på båda tärningarna?`, ["3/9", "0,33", "0,333", "0,3333"]),
    screen("3a", `${COINS} Hur stor är sannolikheten att det blir tre kronor?`, ["1/8"], COIN_IMAGE),
    screen("3b", `${COINS} Hur stor är sannolikheten att få endast en krona?`, ["3/8"], COIN_IMAGE),
    screen("4a", `${PIN} få spetsen upp exakt två gånger?`, ["16 %", "0,16"]),
    screen("4b", `${PIN} inte få spetsen upp någon gång?`, ["36 %", "0,36"]),
    screen("5a", `${BAG} först en röd och därefter en grön kula?`, ["35/132", "0,27", "0,265", "0,2652"]),
    screen("5b", `${BAG} två kulor av olika färg?`, ["70/132", "0,53", "0,5303"]),
    screen("5c", `${BAG} två röda kulor?`, ["20/132", "0,15", "0,152", "0,1515"]),
    screen("6a", `${SCHOOL} en pojke som är intresserad av matematik?`, ["6/25"]),
    screen("6b", `${SCHOOL} en flicka som inte är intresserad av matematik?`, ["6/25"]),
  ],
};
