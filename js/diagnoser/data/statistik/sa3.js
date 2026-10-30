// DIAGNOS SA3, Grundläggande sannolikhet.
// Elevbladet är s. 19–20, lärarsidan s. 18 och facit står på s. 18 i 6_Statistik.pdf.
//
// 17 kolumner på resultatblanketten (s. 21): 1a–b, 2a–c, 3a–b, 4a–b, 5a–c och 6a–e, en skärm och en kolumn var.
// Eleven får ett lösblad att rita och visa sina lösningar på (paper: true).
//
// Sannolikheter: accept[0] är facits bråk, och varje lika stort tal är rätt (13/52 = 1/4 = 0,25). units läser procent
// och promille ("25 %", "250 ‰"); ett tal utan % är en andel, så "25" är fel. Lärarsidan ber läraren säga om bråk ska
// vara förkortade och säger att "ett exakt svar i bråkform kan vara att föredra framför en avrundad procentsats": en
// avrundad procentsats är alltså rätt. Där värdet inte går jämnt upp står procentsatsen avrundad till hela procent, en
// och två decimaler i accept (som andel: 4/9 ≈ 44 %, 44,4 %, 44,44 % är "0,44", "0,444", "0,4444").
//
// Uppgift 4 säger "samma kulpåse som i uppgiften ovan"; på skärmen står "som i uppgift 3 (6 vita och 4 blå kulor)",
// eftersom uppgift 3 inte syns längre.
//
// Lärarsidan: "tar det ca 15 minuter"; ingen tid att avbryta efter, så stop är null.
const P = { "%": "1/100", procent: "1/100", "‰": "1/1000", promille: "1/1000" };

const COIN = "En enkrona har två sidor. Dessa kallas ”Klave” och ”Krona”.";
const CARDS =
  "I en kortlek finns det 52 kort. Lika många spader, ruter, klöver och hjärter. Du drar ett kort i en blandad kortlek. Hur stor är sannolikheten att kortet är";
const BAG = "I en kulpåse ligger 6 vita och 4 blå kulor. Du stoppar ner handen och tar upp en kula. Hur stor är sannolikheten att du får upp";
const AGAIN =
  "Du drar en vit kula ur samma kulpåse som i uppgift 3 (6 vita och 4 blå kulor). Sedan drar du en kula till utan att lägga tillbaka den första kulan. Hur stor är sannolikheten att";
const BAG3 = "I en påse ligger 3 röda, 4 gröna och 5 blå kulor. Du drar en kula ur påsen. Bestäm sannolikheten att";
const DIE = "Hur stor är sannolikheten att vid ett kast med en tärning";

const IMG = "img/diagnoser/statistik/";
const COIN_IMAGE = [{ src: `${IMG}sa3-1-mynt.webp`, alt: "En enkrona från båda sidor: klave med kungens bild och krona med en krona.", width: 159 }];
const CARDS_IMAGE = [{ src: `${IMG}sa3-2-kortlek.webp`, alt: "En kortlek.", width: 193 }];
const screen = (label, text, accept, images) => ({ label, text, ...(images && { images }), points: "each", boxes: { a: { accept, units: P } } });

export default {
  code: "SA3",
  area: "Sannolikhet och statistik",
  sub: "SA Sannolikhet",
  title: "Grundläggande sannolikhet",
  time: { min: 15, max: 15, stop: null },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    screen("1a", `${COIN} Hur stor är sannolikheten att det blir ”Krona” om jag kastar ett mynt en gång?`, ["1/2"], COIN_IMAGE),
    screen("1b", `${COIN} Om jag först gör ett kast och får ”Krona” hur stor är sannolikheten att det blir ”Krona” i nästa kast?`, ["1/2"], COIN_IMAGE),
    screen("2a", `${CARDS} ett spaderkort?`, ["13/52"], CARDS_IMAGE),
    screen("2b", `${CARDS} ett rött kort (hjärter eller ruter)?`, ["26/52"], CARDS_IMAGE),
    screen("2c", `${CARDS} ett ess?`, ["4/52", "0,08", "0,077", "0,0769"], CARDS_IMAGE),
    screen("3a", `${BAG} en blå kula?`, ["4/10"]),
    screen("3b", `${BAG} en vit kula?`, ["6/10"]),
    screen("4a", `${AGAIN} du nu får en blå kula?`, ["4/9", "0,44", "0,444", "0,4444"]),
    screen("4b", `${AGAIN} du nu får en vit kula?`, ["5/9", "0,56", "0,556", "0,5556"]),
    screen("5a", `${BAG3} dra en röd kula.`, ["3/12"]),
    screen("5b", `${BAG3} dra en blå kula.`, ["5/12", "0,42", "0,417", "0,4167"]),
    screen("5c", `${BAG3} dra en kula som inte är grön.`, ["8/12", "0,67", "0,667", "0,6667"]),
    screen("6a", `${DIE} få ett udda antal prickar?`, ["3/6"]),
    screen("6b", `${DIE} få tre prickar?`, ["1/6", "0,17", "0,167", "0,1667"]),
    screen("6c", `${DIE} få minst tre prickar?`, ["4/6", "0,67", "0,667", "0,6667"]),
    screen("6d", `${DIE} få högst fyra prickar?`, ["4/6", "0,67", "0,667", "0,6667"]),
    screen("6e", `${DIE} inte få en prick?`, ["5/6", "0,83", "0,833", "0,8333"]),
  ],
};
