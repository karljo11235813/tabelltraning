// Bråk i ord: "tre fjärdedelar". Ord visas bara som fråga, eleven skriver aldrig ord.
import { reduce } from "./rational.js";
import { pick } from "./random.js";

const ONES = [
  "", "en", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio",
  "elva", "tolv", "tretton", "fjorton", "femton", "sexton", "sjutton", "arton", "nitton",
];
const TENS = ["", "", "tjugo", "trettio", "fyrtio", "femtio", "sextio", "sjuttio", "åttio", "nittio"];

// 1–99. "en" (inte "ett") eftersom det alltid står före en -del.
export function numberWord(n) {
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + ONES[n % 10];
}

export const DEN_WORDS = {
  2: ["halv", "halvor"],
  3: ["tredjedel", "tredjedelar"],
  4: ["fjärdedel", "fjärdedelar"],
  5: ["femtedel", "femtedelar"],
  6: ["sjättedel", "sjättedelar"],
  7: ["sjundedel", "sjundedelar"],
  8: ["åttondel", "åttondelar"],
  9: ["niondel", "niondelar"],
  10: ["tiondel", "tiondelar"],
  12: ["tolftedel", "tolftedelar"],
  20: ["tjugondel", "tjugondelar"],
  25: ["tjugofemtedel", "tjugofemtedelar"],
  50: ["femtiondel", "femtiondelar"],
  100: ["hundradel", "hundradelar"],
};

export function fractionWords(num, den) {
  const [one, many] = DEN_WORDS[den];
  return `${numberWord(num)} ${num === 1 ? one : many}`;
}

// Ibland oförkortat ("sex åttondelar" för 3/4), så att eleven måste förkorta själv.
export function wordForm(rng, value) {
  const r = reduce(value);
  if (rng() >= 1 / 3) return r;
  const factors = [];
  for (let k = 2; k * r.den <= 100; k++) if (DEN_WORDS[k * r.den]) factors.push(k);
  if (factors.length === 0) return r;
  const k = pick(rng, factors);
  return { num: r.num * k, den: r.den * k };
}
