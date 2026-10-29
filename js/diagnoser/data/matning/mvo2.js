// DIAGNOS MVo2, Volym i vardagen.
// Elevbladet är s. 83–84, lärarsidan s. 82 och facit står på s. 82 i 4_Matning.pdf.
//
// 18 kolumner på resultatblanketten (s. 85): 1a, 1b, 2a–2i och 3a–3g, en skärm och en kolumn var.
// 1: receptet står på båda skärmarna. Svaret är i dl; units räknar om ("0,9 liter" är rätt för 9 dl, "9 liter" fel).
// 2: bladets tabell med bilder (kastrullen 6 liter, kannan 2 liter och kannan ½ liter överst; måtten 1 dl, muggen
//    5 dl och koppen 2 ½ dl i raderna) blir en fråga per ruta i text, utan bilder: a–c med 1 dl, d–f med 5 dl och
//    g–i med 2 ½ dl, i kärlen 6 liter, 2 liter och ½ liter.
// 3: enhetsord med form: "exact", så att bara orden räknas. Förkortningen och hela ordet godtas (dl och deciliter,
//    liter och l, tsk och tesked, msk och matsked). 3g har två svar i facit: tsk eller msk. Meningen står som rad med
//    rutan där bladet har strecket; 3d:s första mening ("Farmor har bakat två tårtor.") står i texten, så att raden
//    blir kort.
import { unitsFor } from "../../units.js";

const RECIPE =
  "Det här receptet på pannkakor är lagom till 4 personer: 3 ägg, 3 dl mjöl, 6 dl mjölk, 1 tsk salt, 1 msk socker.";

const fill = (label, measure, vessel, answer) => ({
  label,
  text: `Hur många ${measure}-mått behövs för att fylla ett kärl på ${vessel}?`,
  points: "each",
  boxes: { a: { accept: [answer] } },
});

const UNITS = "Fyll i lämplig enhet. Välj mellan liter, dl, msk (matsked) och tsk (tesked).";
const WORDS = {
  dl: ["dl", "deciliter"],
  liter: ["liter", "l"],
  tsk: ["tsk", "tesked", "teskedar"],
  msk: ["msk", "matsked", "matskedar"],
};
const unit = (label, sentence, answers, before = "") => ({
  label,
  text: before ? `${UNITS} ${before}` : UNITS,
  points: "each",
  rows: [sentence],
  boxes: { a: { accept: answers.flatMap((w) => WORDS[w]), form: "exact" } },
});

export default {
  code: "MVo2",
  area: "Mätning",
  sub: "MVo Mätning av volym",
  title: "Volym i vardagen",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: `${RECIPE} Hur mycket mjöl behöver man om man ska laga pannkakor till 12 personer?`,
      points: "each",
      boxes: { a: { accept: ["9"], units: unitsFor("dl") } },
    },
    {
      label: "1b",
      text: `${RECIPE} Hur mycket mjölk behöver man om man ska laga pannkakor till 12 personer?`,
      points: "each",
      boxes: { a: { accept: ["18"], units: unitsFor("dl") } },
    },
    fill("2a", "1 dl", "6 liter", "60"),
    fill("2b", "1 dl", "2 liter", "20"),
    fill("2c", "1 dl", "½ liter", "5"),
    fill("2d", "5 dl", "6 liter", "12"),
    fill("2e", "5 dl", "2 liter", "4"),
    fill("2f", "5 dl", "½ liter", "1"),
    fill("2g", "2 ½ dl", "6 liter", "24"),
    fill("2h", "2 ½ dl", "2 liter", "8"),
    fill("2i", "2 ½ dl", "½ liter", "2"),
    unit("3a", "En tallrik soppa innehåller 3 [a].", ["dl"]),
    unit("3b", "I en saftkanna får det plats 1 [a].", ["liter"]),
    unit("3c", "I ett saftglas får det plats 2 [a].", ["dl"]),
    unit("3d", "Hon vispar 5 [a] grädde till dem.", ["dl"], "Farmor har bakat två tårtor."),
    unit("3e", "I sockerkaksreceptet står det 2 [a] bakpulver.", ["tsk"]),
    unit("3f", "Bilens tank rymmer 55 [a] bensin.", ["liter"]),
    unit("3g", "Anna måste ta 1 [a] hostmedicin varje morgon och kväll.", ["tsk", "msk"]),
  ],
};
