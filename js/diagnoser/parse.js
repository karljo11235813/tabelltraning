// Läser det eleven skrev. Allt blir exakta värden från value.js, aldrig flyttal.
//
// normalize  gör att knapparnas och tangentbordets former blir samma sträng.
// parseNumber läser ett enkelt tal (heltal, decimal, bråk, blandat tal, rot).
// parseExpr  läser ett uttryck med räknesätt, potenser och rötter.
// parseAnswer avgör vad ett svar är: tomt, "saknar lösning", rest, tal (med enhet efter) eller annat.
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
const MAX_SVAR = 200; // längre text är aldrig ett tal med enhet

// Talet före en enhet ("22 elever per klass" ger "22"), eller null. Enheten ska vara det sista i texten,
// bestå av ord och skiljetecken, ha minst en bokstav och inget av x, r och rest (x är gånger, de andra
// hör till resten). Den längsta enheten som lämnar ett tal kvar vinner.
function talFöreEnhet(rå) {
  if (rå.length > MAX_SVAR) return null;
  for (let i = rå.search(ENHETSTECKEN); i > 0 && i < rå.length; i++) {
    const enhet = rå.slice(i);
    const ord = enhet.match(/\p{L}+/gu);
    if (!ord || !BARA_ENHETSTECKEN.test(enhet) || ord.some((o) => INTE_ENHET.has(o.toLowerCase()))) continue;
    const tal = rå.slice(0, i).trim();
    if (tal !== "" && parseNumber(tal)) return tal;
  }
  return null;
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
// som det skrevs, utan enhet) och fraction (true för ett skrivet bråk a/b). Ord och skiljetecken efter
// talet räknas bort som enhet.
export function parseAnswer(text) {
  if (String(text ?? "").trim() === "") return { kind: "empty" };
  const rå = stripDecoration(text);

  if (saknarLösning(rå.toLowerCase().replace(/\s+/g, " "))) return { kind: "none" };

  const rest = rå.match(REST);
  if (rest) return { kind: "rest", q: BigInt(rest[1]), r: BigInt(rest[2] ?? rest[3]) };

  const värde = parseNumber(rå);
  if (värde) return { kind: "number", value: värde, text: rå, fraction: ärBråk(rå) };

  const tal = talFöreEnhet(rå);
  if (tal !== null) return { kind: "number", value: parseNumber(tal), text: tal, fraction: ärBråk(tal) };
  return { kind: "other" };
}
