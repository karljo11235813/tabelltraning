// DIAGNOS RB4, Bråk som tal.
// Elevbladet är s. 21, lärarsidorna s. 20 och facit står på s. 20 i 2_Rationella_tal.pdf.
//
// 15 kolumner på resultatblanketten (s. 22): 1a, 1b, 2a, 2b, 3a–c, 4a–d och 5a–d. Tallinjerna 1 och 2 räknar en
// kolumn per bokstav (D14), som AUn1.
//
// 1 och 2 är tallinjer med bråkstreck (kind "place"): 1 har streck var fjärdedel (fem streck, 0 och 1 utskrivna),
// 2 har streck var sjättedel (sju streck, 0 och 1 utskrivna). Bokstävernas värden är bråk (1/2, 1/4, 1/3, 5/6).
//
// 3a–c är val (choose, D6): det större av två bråk. Facit anger bråket, inte en bokstav; alternativen är a (det första)
// och b (det andra): 3a 1/2, 3b 1/4, 3c 3/4. 4a–d är val bland lika stora tal (pick, en kolumn per uppgift): Nej, Ja,
// Nej, Ja. Bladet säger "Ringa in"; här markeras uppgifterna.
//
// 5a–d har nämnaren tryckt under rutan (bladets egen ledtråd, D14): rutan är täljaren, två rutor per rad, och raden är
// en kolumn där båda rutorna ska vara rätta (points: "one"). 5d börjar med heltalet 1.

export default {
  code: "RB4",
  area: "Rationella tal",
  sub: "RB Tal i bråkform",
  title: "Bråk som tal",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      kind: "place",
      label: "1",
      text: "Sätt ett a vid talet 1/2 på tallinjen och ett b vid talet 1/4 på tallinjen.",
      line: { min: 0, max: 1, step: "1/4", labels: [0, 1] },
      letters: { a: "1/2", b: "1/4" },
    },
    {
      kind: "place",
      label: "2",
      text: "Sätt ett a vid talet 1/3 på tallinjen och ett b vid talet 5/6 på tallinjen.",
      line: { min: 0, max: 1, step: "1/6", labels: [0, 1] },
      letters: { a: "1/3", b: "5/6" },
    },
    {
      kind: "choose",
      label: "3a",
      text: "Vilket av de två talen är störst? Välj det största talet.",
      options: [
        { id: "a", markup: "{1|2}" },
        { id: "b", markup: "{1|3}" },
      ],
      accept: "a",
    },
    {
      kind: "choose",
      label: "3b",
      text: "Vilket av de två talen är störst? Välj det största talet.",
      options: [
        { id: "a", markup: "{1|7}" },
        { id: "b", markup: "{1|4}" },
      ],
      accept: "b",
    },
    {
      kind: "choose",
      label: "3c",
      text: "Vilket av de två talen är störst? Välj det största talet.",
      options: [
        { id: "a", markup: "{3|4}" },
        { id: "b", markup: "{3|5}" },
      ],
      accept: "a",
    },
    {
      kind: "pick",
      label: "4",
      text: "Jämför de båda talen i uppgifterna. Markera de uppgifter där båda talen är lika stora.",
      items: [
        { id: "a", markup: "{1|2} = {1|6}" },
        { id: "b", markup: "{1|4} = {2|8}" },
        { id: "c", markup: "{2|3} = {2|4}" },
        { id: "d", markup: "{1|2} = {3|6}" },
      ],
      accept: ["b", "d"],
      points: "each",
    },
    {
      label: "5a",
      text: "Fyll i rätt siffror så att alla tal i raden blir lika stora.",
      points: "one",
      rows: ["{1|2} = {3|6} = {[a]|8} = {[b]|12}"],
      boxes: { a: { accept: ["4"] }, b: { accept: ["6"] } },
    },
    {
      label: "5b",
      text: "Fyll i rätt siffror så att alla tal i raden blir lika stora.",
      points: "one",
      rows: ["{1|3} = {2|6} = {[a]|9} = {[b]|12}"],
      boxes: { a: { accept: ["3"] }, b: { accept: ["4"] } },
    },
    {
      label: "5c",
      text: "Fyll i rätt siffror så att alla tal i raden blir lika stora.",
      points: "one",
      rows: ["{2|3} = {4|6} = {[a]|15} = {[b]|18}"],
      boxes: { a: { accept: ["10"] }, b: { accept: ["12"] } },
    },
    {
      label: "5d",
      text: "Fyll i rätt siffror så att alla tal i raden blir lika stora.",
      points: "one",
      rows: ["1 = {2|2} = {[a]|4} = {[b]|7}"],
      boxes: { a: { accept: ["4"] }, b: { accept: ["7"] } },
    },
  ],
};
