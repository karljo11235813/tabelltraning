// DIAGNOS RD6, Närmevärden.
// Elevbladet är s. 50–51, lärarsidorna s. 49 och facit står på s. 49 i 2_Rationella_tal.pdf.
//
// 17 skärmar, en per etikett (1a–d, 2a–d, 3a, 3b, 4, 5, 6, 7a–c, 8). Resultatblanketten (s. 52) har en kolumn per
// etikett: 17 i allt. 1–3 har ett tal och en ruta efter, som bladet; 4–8 är textuppgifter med bara Svar. Varje
// nummers inledande text står på alla dess skärmar.
//
// Facit använder regeln "en 5:a höjer": 65 blir 70 (1c) och 250 blir 300 (2d).
//
// 4 är ett intervall (D4, range): "Flera svar är möjliga, exempelvis 8,34". Rätt är ett tal med precis två decimaler
// från 8,25 till 8,34, alltså ge 8,25 och lt 8,35 med decimals: 2; 8,3 och 8,345 är fel. accept[0] är facits exempel.
//
// 5 och 6: enheten (cm, km) efter svaret ignoreras. 7a–c och 8 är gällande siffror och rättas på värdet, så 2 300
// och 2 300,0 är samma svar (lite för snällt: 2 300,0 har fler gällande siffror). Mellanrum som tusentalsavskiljare
// ("2 320") läser parse.js som vanligt.
//
// Tryckfel i facit (D13): anmärkningen till 8 säger "23,4 har tre gällande siffror", men bladet har 23,6 (och
// 23,6 · 12 = 283,2). Svaret 280 gäller.
export default {
  code: "RD6",
  area: "Rationella tal",
  sub: "RD Tal i decimalform",
  title: "Närmevärden",
  time: { min: 5, max: 6, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Avrunda till närmaste tiotal:",
      points: "each",
      rows: ["11 [a]"],
      boxes: { a: { accept: ["10"] } },
    },
    {
      label: "1b",
      text: "Avrunda till närmaste tiotal:",
      points: "each",
      rows: ["28 [a]"],
      boxes: { a: { accept: ["30"] } },
    },
    {
      label: "1c",
      text: "Avrunda till närmaste tiotal:",
      points: "each",
      rows: ["65 [a]"],
      boxes: { a: { accept: ["70"] } },
    },
    {
      label: "1d",
      text: "Avrunda till närmaste tiotal:",
      points: "each",
      rows: ["134 [a]"],
      boxes: { a: { accept: ["130"] } },
    },
    {
      label: "2a",
      text: "Avrunda till närmaste hundratal:",
      points: "each",
      rows: ["203 [a]"],
      boxes: { a: { accept: ["200"] } },
    },
    {
      label: "2b",
      text: "Avrunda till närmaste hundratal:",
      points: "each",
      rows: ["426 [a]"],
      boxes: { a: { accept: ["400"] } },
    },
    {
      label: "2c",
      text: "Avrunda till närmaste hundratal:",
      points: "each",
      rows: ["367 [a]"],
      boxes: { a: { accept: ["400"] } },
    },
    {
      label: "2d",
      text: "Avrunda till närmaste hundratal:",
      points: "each",
      rows: ["250 [a]"],
      boxes: { a: { accept: ["300"] } },
    },
    {
      label: "3a",
      text: "Avrunda till två decimaler:",
      points: "each",
      rows: ["3,141 [a]"],
      boxes: { a: { accept: ["3,14"] } },
    },
    {
      label: "3b",
      text: "Avrunda till två decimaler:",
      points: "each",
      rows: ["9,8052 [a]"],
      boxes: { a: { accept: ["9,81"] } },
    },
    {
      label: "4",
      text: "Ange ett tal med två decimaler som blir 8,3 om det avrundas till en decimal.",
      points: "each",
      boxes: { a: { accept: ["8,34"], range: { ge: "8,25", lt: "8,35", decimals: 2 } } },
    },
    {
      label: "5",
      text: "David mäter längden på sin säng och får mätetalet 1 958 mm. Avrunda mätetalet till centimeter och svara med ett heltal.",
      points: "each",
      boxes: { a: { accept: ["196"] } },
    },
    {
      label: "6",
      text: "Tova mätte upp en träningsrunda med sin GPS. Hon fick då värdet 2 351 meter. Avrunda värdet till kilometer och svara med en decimal.",
      points: "each",
      boxes: { a: { accept: ["2,4"] } },
    },
    {
      label: "7a",
      text: "Skriv talet 2 318 med tre gällande siffror.",
      points: "each",
      boxes: { a: { accept: ["2 320"] } },
    },
    {
      label: "7b",
      text: "Skriv talet 2 318 med två gällande siffror.",
      points: "each",
      boxes: { a: { accept: ["2 300"] } },
    },
    {
      label: "7c",
      text: "Skriv talet 2 318 med en gällande siffra.",
      points: "each",
      boxes: { a: { accept: ["2 000"] } },
    },
    {
      label: "8",
      text: "Två mätningar ger talen 23,6 och 12. Produkten av dessa tal är 283,2. Skriv produkten med ett lämpligt antal gällande siffror.",
      points: "each",
      boxes: { a: { accept: ["280"] } },
    },
  ],
};
