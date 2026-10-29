// Klockslag och tidsskillnader (MTi1–3). Allt räknas exakt i minuter, med heltal för klockslagen och value.js för
// tidsskillnaderna, aldrig med flyttal.
//
// parseClock     ett klockslag: digitalt ("8.15", "8:15", "08.15", "kl. 8.15", "klockan 8.15") eller med ord ("kvart över
//                åtta", "kvart i sex", "halv nio", "fem minuter i fem", "fem över halv tre", "25 minuter i tre", "tio i åtta",
//                "20 i 6"). Talen skrivs med siffror eller ord, och minuter, minut och min får stå efter talet. "Klockan är"
//                först och "prick" eller "på morgonen" (förmiddagen, eftermiddagen, kvällen, natten) sist räknas bort. Ger
//                { minutes, digital }: minuter efter midnatt (0 till 1439) och sant för siffror med punkt, kolon eller komma.
//                null när texten inte är ett klockslag.
// parseDuration  en tidsskillnad: { minutes } för en tid med enhet ("150 minuter", "150 min", "2,5 timmar", "2 h 30 min",
//                "2 timmar och 30 minuter", "två och en halv timma", "en och en halv timme", "en halvtimme", "tre kvart"),
//                { bare, fraction } för ett ensamt tal (rutans egen enhet avgör vad det är; fraction är sant för ett
//                skrivet bråk a/b), eller null.
// markTime       en ruta med time: "8.15". Utan digital jämförs svaret med 12 timmars klocka (8.15 = 20.15 = kvart över
//                åtta); med digital: true ska svaret vara digitalt och jämförs med 24 timmars klocka (MTi3: 19.50, inte 7.50).
// markDuration   en ruta med duration: "150 min" (eller "2,5 h", "35 min"): rätt när svaret är lika lång tid. Ett tal utan
//                enhet räknas i fältets enhet ("35" för "35 min"); ett skrivet bråk för ett heltal är fel som i mark.js.

import { stripDecoration, parseNumber } from "./parse.js";
import { rat, add, mul, div, equals, isInteger } from "./value.js";

// ---------- TAL SOM ORD ----------

const ENTAL = ["noll", "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio", "elva", "tolv", "tretton",
  "fjorton", "femton", "sexton", "sjutton", "arton", "nitton"];
const TIOTAL = { tjugo: 20, trettio: 30, fyrtio: 40, femtio: 50 };

// noll till femtionio som ord: "en" och "ett", "tjugofem", "trettioen". "aderton" är det äldre stavsättet.
const ORDTAL = new Map([...ENTAL.map((ord, n) => [ord, n]), ["en", 1], ["aderton", 18]]);
for (const [tio, v] of Object.entries(TIOTAL)) {
  ORDTAL.set(tio, v);
  ORDTAL.set(`${tio}en`, v + 1);
  for (let n = 1; n <= 9; n++) ORDTAL.set(tio + ENTAL[n], v + n);
}

// Ett heltal med siffror eller som ord, annars null.
const heltal = (ord) => (/^\d{1,3}$/.test(ord) ? Number(ord) : ORDTAL.get(ord) ?? null);

// Texten i gemener, med ett mellanslag mellan orden, utan "Svar:" först och skiljetecken sist.
const rensa = (text) => stripDecoration(text).toLowerCase().replace(/\s+/g, " ").trim();

const MAX_LÄNGD = 100;

// ---------- KLOCKSLAG ----------

const DYGN = 24 * 60;
const modulo = (a, n) => ((a % n) + n) % n;

const FÖRE = /^(?:klockan|kl\.?|kl:)\s*(?:är\s+)?/;
const EFTER = /(?:\s+(?:prick|på (?:morgonen|förmiddagen|eftermiddagen|kvällen|natten|dagen)))+$/;
const DIGITALT = /^(\d{1,2})\s*[.:,]\s*(\d{2})$/;
const MINUTER = "(?: minuter| minut| min\\.?)?";
const ANTAL = "((?:en )?kvart|\\S+)";

// Minuterna före "över" eller "i": 1 till 59, eller en kvart.
const minuter = (ord) => (ord === "kvart" || ord === "en kvart" ? 15 : heltal(ord));
// Timmen: 0 till 24.
const timme = (ord) => {
  const h = heltal(ord);
  return h !== null && h <= 24 ? h : null;
};

// [mönster, (delar) => minuter efter midnatt eller null]
const ORDMÖNSTER = [
  [/^(?:en )?halv (\S+)$/, ([h]) => (timme(h) === null ? null : timme(h) * 60 - 30)],
  [new RegExp(`^${ANTAL}${MINUTER} (över|i) halv (\\S+)$`), ([n, riktning, h]) => klocka(timme(h), -30, minuter(n), riktning)],
  [new RegExp(`^${ANTAL}${MINUTER} (över|i) (\\S+)$`), ([n, riktning, h]) => klocka(timme(h), 0, minuter(n), riktning)],
  [/^(\S+)$/, ([h]) => (timme(h) === null ? null : timme(h) * 60)],
];

// Timmen h plus start minuter, och n minuter efter (över) eller före (i). null när något tal saknas eller n inte är 1–59.
function klocka(h, start, n, riktning) {
  if (h === null || n === null || n < 1 || n > 59) return null;
  return h * 60 + start + (riktning === "över" ? n : -n);
}

export function parseClock(text) {
  const s = rensa(text).replace(FÖRE, "").replace(EFTER, "").trim();
  if (s === "" || s.length > MAX_LÄNGD) return null;
  const digitalt = s.match(DIGITALT);
  if (digitalt) {
    const [h, m] = [Number(digitalt[1]), Number(digitalt[2])];
    return h <= 24 && m <= 59 ? { minutes: modulo(h * 60 + m, DYGN), digital: true } : null;
  }
  for (const [mönster, värde] of ORDMÖNSTER) {
    const m = s.match(mönster);
    if (m === null) continue;
    const minutes = värde(m.slice(1));
    return minutes === null ? null : { minutes: modulo(minutes, DYGN), digital: false };
  }
  return null;
}

export function markTime(box, raw) {
  const target = parseClock(box.time);
  const given = parseClock(raw);
  if (target === null || given === null || (box.digital && !given.digital)) return "wrong";
  const varv = box.digital ? DYGN : DYGN / 2;
  return modulo(given.minutes - target.minutes, varv) === 0 ? "right" : "wrong";
}

// ---------- TIDSSKILLNADER ----------

// Minuter per enhet. kvart och halvtimme är enheter: "tre kvart" är 3 · 15, "en halvtimme" 1 · 30, "kvart" ensamt 15.
const TIMME = ["h", "tim", "timme", "timmar", "timma", "timmen", "timmes"];
const KVART = ["kvart", "kvarts", "kvartar"];
const PER = new Map([
  ...TIMME.map((u) => [u, rat(60)]),
  ...["min", "minut", "minuter", "minuten"].map((u) => [u, rat(1)]),
  ...["s", "sek", "sekund", "sekunder"].map((u) => [u, rat(1, 60)]),
  ...KVART.map((u) => [u, rat(15)]),
  ...["halvtimme", "halvtimma", "halvtimmen", "halvtimmes"].map((u) => [u, rat(30)]),
]);
const HALV = rat(1, 2);
const BRÅKORD = /^(?:\d+\/\d+|½)$/;

// Orden i en tidsskillnad: siffror och bokstäver isär ("2h30min" blir "2 h 30 min"), punkt efter ett ord bort ("min.").
function ordIn(text) {
  return rensa(text)
    .replace(/(?<=[\d½])(?=\p{L})|(?<=\p{L})(?=\d)/gu, " ")
    .replace(/(?<=\p{L})[.,]/gu, " ")
    .split(" ")
    .filter((ord) => ord !== "");
}

// "en" och "ett" före "halv" (en halv timme), annars som tal. null när ordet inte är något antal.
function antal(ord, i) {
  if ((ord[i] === "en" || ord[i] === "ett") && ord[i + 1] === "halv") return { v: HALV, i: i + 2 };
  if (ord[i] === "halv") return { v: HALV, i: i + 1 };
  const siffror = /[\d½]/.test(ord[i] ?? "") ? parseNumber(ord[i]) : null;
  if (siffror !== null) {
    // Ett blandat tal i två ord ("1 1/2 timme").
    if (BRÅKORD.test(ord[i + 1] ?? "") && /^\d+$/.test(ord[i])) return { v: add(siffror, parseNumber(ord[i + 1])), i: i + 2 };
    return { v: siffror, i: i + 1 };
  }
  const n = ORDTAL.get(ord[i]);
  return n === undefined ? null : { v: rat(n), i: i + 1 };
}

export function parseDuration(text) {
  const ord = ordIn(text);
  if (ord.length === 0 || ord.length > 20) return null;
  let minutes = rat(0);
  let delar = 0;
  let i = 0;
  while (i < ord.length) {
    if (ord[i] === "och" && delar > 0) {
      i++;
      continue;
    }
    let mängd = antal(ord, i);
    if (mängd !== null) {
      i = mängd.i;
      // "två och en halv timma", "en och en halv timme"
      if (ord[i] === "och" && (ord[i + 1] === "en" || ord[i + 1] === "ett") && ord[i + 2] === "halv") {
        mängd = { v: add(mängd.v, HALV) };
        i += 3;
      }
    }
    const per = PER.get(ord[i]);
    if (per === undefined) {
      // Ett ensamt tal utan enhet.
      if (mängd !== null && delar === 0 && i === ord.length && /\d/.test(ord[0])) return { bare: mängd.v, fraction: /^\d+\/\d+$/.test(ord[0]) && ord.length === 1 };
      return null;
    }
    i++;
    // "tre kvarts timme" är tre kvart: timme efter kvart är ingen timme till.
    if (KVART.includes(ord[i - 1]) && TIMME.includes(ord[i])) i++;
    minutes = add(minutes, mul(mängd?.v ?? rat(1), per));
    delar++;
  }
  return delar === 0 ? null : { minutes };
}

// Fältet duration: ett tal och en enhet ("150 min", "2,5 h", "35 min"). Ger tiden i minuter och enhetens minuter, eller null.
const FÄLT = /^(\d+(?:,\d+)?) (h|min|s)$/;
export function durationField(field) {
  const m = String(field ?? "").match(FÄLT);
  if (m === null) return null;
  const per = PER.get(m[2]);
  return { minutes: mul(parseNumber(m[1]), per), per };
}

export function markDuration(box, raw) {
  const field = durationField(box.duration);
  const given = parseDuration(raw);
  if (field === null || given === null) return "wrong";
  if (given.bare === undefined) return equals(given.minutes, field.minutes) ? "right" : "wrong";
  // Ett ensamt tal räknas i fältets enhet. "105/3" för 35 minuter är en avskriven division, inte svaret.
  if (given.fraction && isInteger(div(field.minutes, field.per))) return "wrong";
  return equals(mul(given.bare, field.per), field.minutes) ? "right" : "wrong";
}
