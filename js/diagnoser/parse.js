// Läser det eleven skrev. Allt blir exakta värden från value.js, aldrig flyttal.
//
// normalize  gör att knapparnas och tangentbordets former blir samma sträng.
// parseNumber läser ett enkelt tal (heltal, decimal, bråk, blandat tal, rot).
// parseExpr  läser ett uttryck med räknesätt, potenser och rötter.
// parseAnswer avgör vad ett svar är: tomt, "saknar lösning", rest, tal (med enhet efter) eller annat.
// parseFractionWord läser ett svenskt bråkord ("en halv", "tre fjärdedelar") som ett tal.
// parseFractionParts läser ett skrivet bråk eller bråkord som täljare och nämnare, oförkortade ("4/10", "fyra tiondelar").
// stripDecoration tar bort "Svar:" först och skiljetecken sist, så att "Svar: 8." läses som "8".

import { rat, neg, add, sub, mul, div, pow, sqrt, Unsupported } from "./value.js";

const SUPERSCRIPT = {
  "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-",
};

// Största exponenten (till beloppet) som parseExpr läser. pow i value.js har ingen gräns,
// och 2^99999999 skulle hänga sidan.
const MAX_EXPONENT = 100n;

// Strängen som alla jämförelser av exakta svar görs på. Samma sträng för det eleven
// klickar ihop med knapparna och det eleven skriver med tangentbordet.
export function normalize(text) {
  let s = String(text ?? "").toLowerCase().trim();

  s = s.replace(/[‐-—−]/g, "-"); // − – — och andra streck blir -
  s = s.replace(/[÷:]/g, "/");
  s = s.replace(/[×*]/g, "·");
  s = s.replace(/(?<=[\d)½])\s*x\s*(?=[\d(√,½-])/g, "·"); // x är gånger bara mellan två operander
  s = s.replace(/(\d)\.(\d)/g, "$1,$2");

  // Upphöjda siffror: "10⁻⁸" blir "10^-8", "5¹²" blir "5^12".
  s = s.replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => "^" + [...m].map((c) => SUPERSCRIPT[c]).join(""));
  s = s.replace(/\^\(\s*(-?\d+)\s*\)/g, "^$1");

  // Tusentalsavgränsare: mellanslag före exakt tre siffror ("57 000").
  s = s.replace(/(?<=\d)\s+(?=\d{3}(?!\d))/g, "");

  // Blandat tal: avgränsaren blir _ innan mellanslagen försvinner ("-10 1/2" och "-10½" blir "-10_1/2").
  s = s.replace(/(\d)\s+(\d+\/\d+)/g, "$1_$2");
  s = s.replace(/(\d)\s*½/g, "$1_1/2");
  s = s.replace(/½/g, "1/2");

  s = s.replace(/\s+/g, "");

  // "4·√2" är "4√2". Inte efter en exponent: "2^3·√2" ska behålla sin multiplikation.
  s = s.replace(/(\d+(?:,\d+)?(?:_\d+\/\d+)?)·√/g, (m, tal, plats) => {
    const före = s[plats - 1];
    const medExponent = före === "^" || (före === "-" && s[plats - 2] === "^");
    return medExponent ? m : `${tal}√`;
  });

  s = s.replace(/^\+/, "");
  s = s.replace(/^\(([+-]?[\d,_/√]+)\)$/, "$1"); // ett par parenteser runt ett helt tal
  s = s.replace(/^\+/, "");
  return s;
}

const decimal = (text) => {
  const [hel, bråkdel = ""] = text.split(",");
  return rat(BigInt(hel + bråkdel), 10n ** BigInt(bråkdel.length));
};

const TAL = /^(-?)(\d+(?:,\d+)?)$/;
const BRÅK = /^(-?)(\d+)\/(\d+)$/;
const BLANDAT = /^(-?)(\d+)_(\d+)\/(\d+)$/;
// Tecken, faktor (decimal eller bråk, båda valfria), rot och valfri nämnare efter roten.
const ROT = /^(-?)(?:(\d+(?:,\d+)?)|(\d+)\/(\d+))?√(?:(\d+)|\((\d+)\))(?:\/(\d+))?$/;

function talet(s) {
  let m;
  if ((m = s.match(TAL))) {
    const v = decimal(m[2]);
    return m[1] ? neg(v) : v;
  }
  if ((m = s.match(BRÅK))) {
    const v = rat(BigInt(m[2]), BigInt(m[3]));
    return m[1] ? neg(v) : v;
  }
  if ((m = s.match(BLANDAT))) {
    const v = add(rat(BigInt(m[2])), rat(BigInt(m[3]), BigInt(m[4])));
    return m[1] ? neg(v) : v;
  }
  if ((m = s.match(ROT))) {
    const [, tecken, decimalfaktor, bråktäljare, bråknämnare, radikand, radikandIParentes, nämnare] = m;
    if (bråktäljare !== undefined && nämnare !== undefined) return null; // både bråkfaktor och nämnare är inget enkelt tal
    let faktor = rat(1);
    if (decimalfaktor !== undefined) faktor = decimal(decimalfaktor);
    if (bråktäljare !== undefined) faktor = rat(BigInt(bråktäljare), BigInt(bråknämnare));
    let v = mul(faktor, sqrt(rat(BigInt(radikand ?? radikandIParentes))));
    if (nämnare !== undefined) v = div(v, rat(BigInt(nämnare)));
    return tecken ? neg(v) : v;
  }
  return null;
}

// Bara tal: heltal, decimaltal, a/b, blandat tal och rot med valfri faktor.
// null för allt annat, och för det som inte går att skriva exakt.
export function parseNumber(text) {
  try {
    return talet(normalize(text));
  } catch (e) {
    if (e instanceof Unsupported || e instanceof RangeError) return null;
    throw e;
  }
}

class Syntaxfel extends Error {}

// expr  = term (("+"|"-") term)*
// term  = unary (("·"|"/") unary | implicit)*
// unary = "-" unary | power
// power = atom ("^" signed-int)?
// atom  = number | "(" expr ")" | "√" atom
// Implicit multiplikation är ett tal direkt följt av "√" eller "(", och räknas från vänster som · och /.
function läsUttryck(s) {
  let i = 0;
  let talSlut = -1; // Där senaste talet slutade, för att veta om "√" eller "(" följer direkt på ett tal.

  const fel = () => {
    throw new Syntaxfel();
  };
  const siffror = () => {
    const start = i;
    while (i < s.length && s[i] >= "0" && s[i] <= "9") i++;
    if (i === start) fel();
    return s.slice(start, i);
  };

  function tal() {
    const hel = siffror();
    let v;
    if (s[i] === ",") {
      i++;
      v = decimal(`${hel},${siffror()}`);
    } else if (s[i] === "_") {
      i++;
      const täljare = siffror();
      if (s[i] !== "/") fel();
      i++;
      v = add(rat(BigInt(hel)), rat(BigInt(täljare), BigInt(siffror())));
    } else v = rat(BigInt(hel));
    talSlut = i;
    return v;
  }

  function atom() {
    if (s[i] === "(") {
      i++;
      const v = uttryck();
      if (s[i] !== ")") fel();
      i++;
      return v;
    }
    if (s[i] === "√") {
      i++;
      return sqrt(atom());
    }
    return tal();
  }

  function potens() {
    const bas = atom();
    if (s[i] !== "^") return bas;
    i++;
    let negativ = false;
    if (s[i] === "-") {
      negativ = true;
      i++;
    }
    const e = BigInt(siffror());
    if (e > MAX_EXPONENT) fel();
    return pow(bas, negativ ? -e : e);
  }

  function unary() {
    if (s[i] === "-") {
      i++;
      return neg(unary());
    }
    return potens();
  }

  function term() {
    let v = unary();
    for (;;) {
      const c = s[i];
      if (c === "·") {
        i++;
        v = mul(v, unary());
      } else if (c === "/") {
        i++;
        v = div(v, unary());
      } else if ((c === "√" || c === "(") && talSlut === i) v = mul(v, potens());
      else return v;
    }
  }

  function uttryck() {
    let v = term();
    for (;;) {
      const c = s[i];
      if (c === "+") {
        i++;
        v = add(v, term());
      } else if (c === "-") {
        i++;
        v = sub(v, term());
      } else return v;
    }
  }

  const v = uttryck();
  if (i !== s.length) fel();
  return v;
}

// Värde, NONE (t.ex. √(-3)) eller null vid syntaxfel, för stor exponent och det som inte går att skriva exakt.
export function parseExpr(text) {
  try {
    return läsUttryck(normalize(text));
  } catch (e) {
    if (e instanceof Syntaxfel || e instanceof Unsupported || e instanceof RangeError) return null;
    throw e;
  }
}

// Orden för "det finns ingen reell lösning" som räknas, i den form de har efter skrivsättsutjämningen
// (se saknarLösning). Listan är medvetet kort: "ingen aning" ska fortfarande vara fel.
const SAKNAR_LÖSNING = new Set([
  "saknar reell lösning",
  "saknar lösning",
  "ingen lösning",
  "ingen reell lösning",
  "finns ingen lösning",
  "finns ingen reell lösning",
  "finns inte",
  "går inte",
  "odefinierat",
  "inte definierat",
]);

// Utjämnar det som bara är ett annat skrivsätt av samma ord: inledande "det", "ej" som "inte", "-ad" som "-at"
// ("odefinierad") och "reel" som "reell". Därefter ska hela meningen finnas i SAKNAR_LÖSNING.
function saknarLösning(mening) {
  const jämnad = mening
    .replace(/^det(?!\p{L})\s*/u, "")
    .replace(/(?<!\p{L})ej(?!\p{L})/gu, "inte")
    .replace(/(?<!\p{L})reel(?!\p{L})/gu, "reell")
    .replace(/(?<!\p{L})(\p{L}*definierad)(?!\p{L})/gu, (_, ord) => `${ord.slice(0, -1)}t`);
  return SAKNAR_LÖSNING.has(jämnad);
}

const REST = /^(\d+)\s*(?:\(\s*(?:rest|r)\s*(\d+)\s*\)|(?:rest|r)\s*(\d+))$/i;
const INTE_ENHET = new Set(["x", "r", "rest"]);
// Det som får stå efter talet som enhet: bokstäver (också åäö), mellanslag, "/", "." och parenteser,
// "kr/tim", "elever per klass", "(dagar)". En siffra hör inte dit: "5 kr 4" är inget svar.
const ENHETSTECKEN = /[\p{L}\s/.()]*$/u;
const BARA_ENHETSTECKEN = /^[\p{L}\s/.()]*$/u;
// % och ‰ är enheter utan bokstav. De gäller bara ensamma direkt efter talet: "25 %" men inte "25 % kr".
const PROCENTTECKEN = /^(.*\S)\s*([%‰])$/su;
const MAX_SVAR = 200; // längre text är aldrig ett tal med enhet

// Enheten efter ett tal, i gemener med ett mellanslag mellan orden och utan parenteser runt det hela
// ("(dagar)" ger "dagar"), eller null när texten inte kan vara en enhet. Den ska bestå av ord och skiljetecken,
// ha minst en bokstav och inget av x, r och rest (x är gånger, de andra hör till resten).
function enhetAv(text) {
  const enhet = text.trim();
  const ord = enhet.match(/\p{L}+/gu);
  if (!ord || !BARA_ENHETSTECKEN.test(enhet) || ord.some((o) => INTE_ENHET.has(o.toLowerCase()))) return null;
  return enhet.toLowerCase().replace(/\s+/g, " ").replace(/^\(([^()]*)\)$/, "$1").trim();
}

// Talet och enheten ("22 elever per klass" ger { tal: "22", enhet: "elever per klass" }), eller null. Enheten ska vara
// det sista i texten (eller ett ensamt % eller ‰). Den längsta enheten som lämnar ett tal kvar vinner.
function talFöreEnhet(rå) {
  if (rå.length > MAX_SVAR) return null;
  const tecken = rå.match(PROCENTTECKEN);
  if (tecken) return parseNumber(tecken[1]) ? { tal: tecken[1], enhet: tecken[2] } : null;
  for (let i = rå.search(ENHETSTECKEN); i > 0 && i < rå.length; i++) {
    const enhet = enhetAv(rå.slice(i));
    if (enhet === null) continue;
    const tal = rå.slice(0, i).trim();
    if (tal !== "" && parseNumber(tal)) return { tal, enhet };
  }
  return null;
}

// Svenska bråkord: täljaren som ord (en, ett, två … tio) eller siffror, nämnaren halv … tiondel. Böjningen
// (en femtedelar, två tredjedel) får vara fel: det är matematiken som rättas.
const TÄLJARORD = new Map(Object.entries({ en: 1n, ett: 1n, två: 2n, tre: 3n, fyra: 4n, fem: 5n, sex: 6n, sju: 7n, åtta: 8n, nio: 9n, tio: 10n }));
const NÄMNARORD = new Map(Object.entries({
  halv: 2n, halva: 2n, halvor: 2n, halvt: 2n,
  tredjedel: 3n, tredjedelar: 3n, fjärdedel: 4n, fjärdedelar: 4n, femtedel: 5n, femtedelar: 5n,
  sjättedel: 6n, sjättedelar: 6n, sjundedel: 7n, sjundedelar: 7n, åttondel: 8n, åttondelar: 8n,
  niondel: 9n, niondelar: 9n, tiondel: 10n, tiondelar: 10n,
}));
const BRÅKORD = /^(\p{L}+|\d+) (\p{L}+)(?: (.+))?$/u;

// { value, text, rest } för ett bråkord först i texten (rest är det som står efter), annars null.
function bråkord(text) {
  if (text.length > MAX_SVAR) return null;
  const m = text.toLowerCase().replace(/\s+/g, " ").trim().match(BRÅKORD);
  if (!m) return null;
  const [, täljarord, nämnarord, rest = ""] = m;
  const täljare = /^\d+$/.test(täljarord) ? BigInt(täljarord) : TÄLJARORD.get(täljarord);
  const nämnare = NÄMNARORD.get(nämnarord);
  if (täljare === undefined || nämnare === undefined) return null;
  return { value: rat(täljare, nämnare), num: täljare, den: nämnare, text: `${täljarord} ${nämnarord}`, rest };
}

// Värdet av ett helt bråkord ("tre fjärdedelar" ger 3/4), annars null. Inga ord efter.
export function parseFractionWord(text) {
  const ord = bråkord(String(text ?? ""));
  return ord !== null && ord.rest === "" ? ord.value : null;
}

// { num, den } som eleven skrev dem, oförkortade, för ett bråk a/b eller ett bråkord ("4/10", "4 tiondelar", "fyra
// tiondelar" ger 4 och 10; "2/4" ger 2 och 4, inte 1/2). En enhet efter bråkordet ("4 tiondelar av figuren") räknas
// bort som i parseAnswer. null för allt annat, också ett blandat tal, ett decimaltal och ett heltal.
export function parseFractionParts(text) {
  const rå = stripDecoration(text);
  const m = normalize(rå).match(/^(\d+)\/(\d+)$/);
  if (m !== null) return BigInt(m[2]) === 0n ? null : { num: BigInt(m[1]), den: BigInt(m[2]) };
  const ord = bråkord(rå);
  if (ord === null || (ord.rest !== "" && enhetEfterBråkord(ord.rest) === null)) return null;
  return { num: ord.num, den: ord.den };
}

// Enheten efter ett bråkord ("en halv liter"), eller null. Ett nytt bråkord efter det första ("tre fjärdedelar
// och en halv") är ingen enhet.
function enhetEfterBråkord(rest) {
  const enhet = enhetAv(rest);
  return enhet !== null && !enhet.split(" ").some((o) => NÄMNARORD.has(o)) ? enhet : null;
}

// Ett bråk a/b av heltal (b skilt från 1), skrivet som tal: "69/3". Heltal, decimaltal och blandade tal är det inte.
function ärBråk(text) {
  const m = normalize(text).match(/^-?\d+\/(\d+)$/);
  return m !== null && BigInt(m[1]) !== 1n;
}

// "Svar:" först och skiljetecken sist ("Svar: 8", "8.", "5 rest 10!") är bara utsmyckning och räknas bort.
// Ett ord som börjar på svar ("svaret 8") är inte utsmyckning. Hela texten kan bli tom ("Svar:", ".").
const SVAR_FÖRE = /^svar(?!\p{L})\s*[:=]?\s*/iu;
const SLUTTECKEN = /[\s.!?,;:]+$/;

export function stripDecoration(text) {
  return String(text ?? "").trim().replace(SVAR_FÖRE, "").replace(SLUTTECKEN, "");
}

// Vad eleven svarade: tomt, "saknar lösning", rest, ett tal eller annat. Ett tal ger value, text (talet
// som det skrevs, utan enhet), fraction (true för ett skrivet bråk a/b eller ett bråkord) och unit (enheten
// efter talet i gemener, "%" och "‰" också, eller null). Ord och skiljetecken efter talet räknas bort som enhet.
export function parseAnswer(text) {
  if (String(text ?? "").trim() === "") return { kind: "empty" };
  const rå = stripDecoration(text);

  if (saknarLösning(rå.toLowerCase().replace(/\s+/g, " "))) return { kind: "none" };

  const rest = rå.match(REST);
  if (rest) return { kind: "rest", q: BigInt(rest[1]), r: BigInt(rest[2] ?? rest[3]) };

  const värde = parseNumber(rå);
  if (värde) return { kind: "number", value: värde, text: rå, fraction: ärBråk(rå), unit: null };

  // Före enheten: "3 fjärdedelar" är 3/4, inte talet 3 med enheten fjärdedelar.
  const ord = bråkord(rå);
  if (ord) {
    const unit = ord.rest === "" ? null : enhetEfterBråkord(ord.rest);
    if (ord.rest !== "" && unit === null) return { kind: "other" };
    return { kind: "number", value: ord.value, text: ord.text, fraction: true, unit };
  }

  const före = talFöreEnhet(rå);
  if (före !== null) return { kind: "number", value: parseNumber(före.tal), text: före.tal, fraction: ärBråk(före.tal), unit: före.enhet };
  return { kind: "other" };
}
