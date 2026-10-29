// DIAGNOS TAt3, Talmönster 1.
// Elevbladet är s. 15–16, lärarsidan s. 14 och facit står på s. 14 i 3_Talmonster.pdf.
//
// 19 kolumner på resultatblanketten (s. 17): 1a–d, 2a–d, 3a–c, 4a–c, 5a–c, 6a och 6b, en skärm och en kolumn var.
// Varje nummers inledande text står på alla dess skärmar.
//
// 3–5 är val (choose), ett per bokstav: bladet säger "Sätt ett kryss i rätt ruta" vid "udda tal" och "jämnt tal";
// här väljs ett av två alternativ som har hela meningen ("15 + 2 ger ett udda tal").
//
// 6: facit skriver 0,444444 och 0,777777, med sex decimaler som bladets 1/9 ≈ 0,111111. Det är mönstret som prövas,
// så samma siffra upprepad med 3–8 decimaler godtas också, och för 7/9 dessutom det avrundade 0,777778. Andra
// närmevärden (0,44, 0,45) är fel.
export default {
  code: "TAt3",
  area: "Talmönster och algebra",
  sub: "TAt Talföljder och talmönster",
  title: "Talmönster 1",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Du vet att 7 + 2 = 9. Då är",
      points: "each",
      rows: ["17 + 2 = [a]"],
      boxes: { a: { accept: ["19"] } },
    },
    {
      label: "1b",
      text: "Du vet att 7 + 2 = 9. Då är",
      points: "each",
      rows: ["37 + 2 = [a]"],
      boxes: { a: { accept: ["39"] } },
    },
    {
      label: "1c",
      text: "Du vet att 7 + 2 = 9. Då är",
      points: "each",
      rows: ["70 + 20 = [a]"],
      boxes: { a: { accept: ["90"] } },
    },
    {
      label: "1d",
      text: "Du vet att 7 + 2 = 9. Då är",
      points: "each",
      rows: ["700 + 200 = [a]"],
      boxes: { a: { accept: ["900"] } },
    },
    {
      label: "2a",
      text: "Du vet att 9 − 5 = 4. Då är",
      points: "each",
      rows: ["19 − 5 = [a]"],
      boxes: { a: { accept: ["14"] } },
    },
    {
      label: "2b",
      text: "Du vet att 9 − 5 = 4. Då är",
      points: "each",
      rows: ["59 − 5 = [a]"],
      boxes: { a: { accept: ["54"] } },
    },
    {
      label: "2c",
      text: "Du vet att 9 − 5 = 4. Då är",
      points: "each",
      rows: ["90 − 50 = [a]"],
      boxes: { a: { accept: ["40"] } },
    },
    {
      label: "2d",
      text: "Du vet att 9 − 5 = 4. Då är",
      points: "each",
      rows: ["900 − 500 = [a]"],
      boxes: { a: { accept: ["400"] } },
    },
    {
      kind: "choose",
      label: "3a",
      text: "Ger de här additionerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "15 + 2 ger ett udda tal" },
        { id: "j", markup: "15 + 2 ger ett jämnt tal" },
      ],
      accept: "u",
    },
    {
      kind: "choose",
      label: "3b",
      text: "Ger de här additionerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "37 + 21 ger ett udda tal" },
        { id: "j", markup: "37 + 21 ger ett jämnt tal" },
      ],
      accept: "j",
    },
    {
      kind: "choose",
      label: "3c",
      text: "Ger de här additionerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "632 + 511 ger ett udda tal" },
        { id: "j", markup: "632 + 511 ger ett jämnt tal" },
      ],
      accept: "u",
    },
    {
      kind: "choose",
      label: "4a",
      text: "Ger de här subtraktionerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "17 − 9 ger ett udda tal" },
        { id: "j", markup: "17 − 9 ger ett jämnt tal" },
      ],
      accept: "j",
    },
    {
      kind: "choose",
      label: "4b",
      text: "Ger de här subtraktionerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "46 − 7 ger ett udda tal" },
        { id: "j", markup: "46 − 7 ger ett jämnt tal" },
      ],
      accept: "u",
    },
    {
      kind: "choose",
      label: "4c",
      text: "Ger de här subtraktionerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "437 − 159 ger ett udda tal" },
        { id: "j", markup: "437 − 159 ger ett jämnt tal" },
      ],
      accept: "j",
    },
    {
      kind: "choose",
      label: "5a",
      text: "Ger de här multiplikationerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "9 · 11 ger ett udda tal" },
        { id: "j", markup: "9 · 11 ger ett jämnt tal" },
      ],
      accept: "u",
    },
    {
      kind: "choose",
      label: "5b",
      text: "Ger de här multiplikationerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "35 · 64 ger ett udda tal" },
        { id: "j", markup: "35 · 64 ger ett jämnt tal" },
      ],
      accept: "j",
    },
    {
      kind: "choose",
      label: "5c",
      text: "Ger de här multiplikationerna ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      options: [
        { id: "u", markup: "163 · 261 ger ett udda tal" },
        { id: "j", markup: "163 · 261 ger ett jämnt tal" },
      ],
      accept: "u",
    },
    {
      label: "6a",
      text: "Om du vet att 1/9 ≈ 0,111111 och att 2/9 = 2 · 1/9 ≈ 0,222222. Hur kan man då skriva de här bråken i decimalform?",
      points: "each",
      rows: ["{4|9} ≈ [a]"],
      boxes: { a: { accept: ["0,444444", "0,444", "0,4444", "0,44444", "0,4444444", "0,44444444"] } },
    },
    {
      label: "6b",
      text: "Om du vet att 1/9 ≈ 0,111111 och att 2/9 = 2 · 1/9 ≈ 0,222222. Hur kan man då skriva de här bråken i decimalform?",
      points: "each",
      rows: ["{7|9} ≈ [a]"],
      boxes: { a: { accept: ["0,777777", "0,777778", "0,777", "0,7777", "0,77777", "0,7777777", "0,77777777"] } },
    },
  ],
};
