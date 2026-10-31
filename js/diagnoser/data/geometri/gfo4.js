// DIAGNOS GFo4, Kroppar. Elevbladet är s. 22–23, lärarsidan och facit s. 21 i 5_Geometri.pdf.
// 1a–1e är ordsvar (contains: svaret ska innehålla namnet). 4a–4d är en tabellrad per föremål med en ruta per form; en tom
// ruta är 0, som på bladet. Formerna står som ord i tabellens huvud (på bladet är de bilder, som syns i bilden ovanför).
// Facit: 1 klot eller sfär, pyramid, kub, cylinder, rätblock; 2 6, 8, 12; 3 5 (4 godtas), 5, 8;
// 4a 6 kvadrater; 4b 1 rektangel och 2 cirklar; 4c 1 kvadrat och 4 trianglar (4 trianglar godtas, en triangel som bas);
// 4d 6 rektanglar (2 kvadrater och 4 rektanglar godtas). Varje ruta har sina godtagna tal, så 4d godtar också 2 kvadrater
// och 6 rektanglar; det kan rutorna inte skilja ut.
import { sheet } from "./sheet.js";

const BODIES = [sheet("gfo4-1", 580, "Fem kroppar märkta a till e.")];
const TABLE_IMAGE = [sheet("gfo4-4", 583, "Tabellen på bladet: överst en kvadrat, en rektangel, en cirkel och en triangel; till vänster kropparna a till d.")];
const name = (label, letter, answer, words) => ({
  label,
  text: `Vad kallas kroppen ${letter}?`,
  points: "each",
  images: BODIES,
  rows: [`${letter} kallas [a]`],
  boxes: { a: { accept: [answer], contains: words } },
});
const count = (label, row, answer) => ({ label, text: "Skriv hur många.", points: "each", rows: [row], boxes: { a: { accept: answer } } });
const NONE = ["0", ""];
const build = (label, letter, [square, rectangle, circle, triangle]) => ({
  label,
  text: `Vilka av formerna behöver du för att bygga föremålet ${letter} i tabellen? Skriv hur många av varje form du behöver. Lämna rutan tom om du inte behöver formen.`,
  points: "one",
  images: TABLE_IMAGE,
  table: { head: ["föremål", "kvadrat", "rektangel", "cirkel", "triangel"], rows: [[`${letter})`, "[a]", "[b]", "[c]", "[d]"]] },
  boxes: { a: { accept: square }, b: { accept: rectangle }, c: { accept: circle }, d: { accept: triangle } },
});

export default {
  code: "GFo4",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Kroppar",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    name("1a", "a", "klot", ["klot", "sfär"]),
    name("1b", "b", "pyramid", ["pyramid"]),
    name("1c", "c", "kub", ["kub"]),
    name("1d", "d", "cylinder", ["cylinder"]),
    name("1e", "e", "rätblock", ["rätblock"]),
    count("2a", "En kub har [a] sidoytor.", ["6"]),
    count("2b", "En kub har [a] hörn.", ["8"]),
    count("2c", "En kub har [a] kanter.", ["12"]),
    count("3a", "En pyramid vars basyta är en kvadrat har [a] sidoytor.", ["5", "4"]),
    count("3b", "En pyramid vars basyta är en kvadrat har [a] hörn.", ["5"]),
    count("3c", "En pyramid vars basyta är en kvadrat har [a] kanter.", ["8"]),
    build("4a", "a", [["6"], NONE, NONE, NONE]),
    build("4b", "b", [NONE, ["1"], ["2"], NONE]),
    build("4c", "c", [["1", "0", ""], NONE, NONE, ["4"]]),
    build("4d", "d", [["0", "", "2"], ["6", "4"], NONE, NONE]),
  ],
};
