// DIAGNOS MLä1, Grundläggande mätning, längd.
// Elevbladet är s. 41–42, lärarsidan s. 40 och facit står på s. 40 i 4_Matning.pdf.
//
// 13 kolumner på resultatblanketten (s. 43): 1a, 1b, 2a, 2b, 3, 4, 5 och 6a–6f, en skärm per etikett. 4 och 5 (rita en
// sträcka på 6 cm och 32 mm) är pappersuppgifter och ger ingen poäng, så COLUMNS är 13 − 2 = 11.
//
// Eleven kan inte mäta skärmen med en linjal, så 1–3 har en ritad linjal (figure.rulers) i samma skala som det som
// mäts, och texten säger att eleven läser av på den. Pennorna och pennvässarna börjar vid linjalens 0, som när eleven
// lägger sin linjal rätt. Längderna är bladets och facits: pennorna 13 och 8 cm (en cm-linjal på 15 cm med halva
// centimetrar), pennvässarna 24 och 15 mm (en cm-linjal på 4 cm med millimeterstreck) och pennan på den avbrutna
// tumstocken från 7 till 11 tum (4 tum). Bladets "En tum är så här lång:" och den ritade tumsträckan står inte med:
// tumstocken i figuren visar en tum mellan varje tal.
// 1–3 har ingen units: frågan säger enheten ("Svara i hela cm", "Svara i mm").
// 6a–f: enhetsord, rättas som text (förkortningen eller ordet: "dm", "decimeter").
const PENCIL_RULER = { from: [15, 40], to: [325, 40], length: 15, minor: 2 };
const CM = 310 / 15; // en cm i figuren

// En penna från linjalens 0, length cm lång, ovanför linjalens kant (y = 40).
function pencil(length) {
  const end = 15 + length * CM;
  const tip = end - 26;
  const r = (v) => Math.round(v * 10) / 10;
  return {
    view: [340, 80],
    pieces: [{ path: `M15 20H${r(tip)}V38H15Z` }, { path: `M${r(tip)} 20L${r(end)} 29L${r(tip)} 38Z` }],
    lines: [`M15 26H${r(tip)}M15 32H${r(tip)}`],
    rulers: [PENCIL_RULER],
  };
}

// En pennvässare från linjalens 0, mm millimeter lång (60 enheter per cm), ovanför linjalens kant (y = 60).
function sharpener(mm, height) {
  const end = 20 + mm * 6;
  const top = 58 - height;
  return {
    view: [280, 100],
    pieces: [{ path: `M20 ${top}H${end}V58H20Z` }, { circle: [(20 + end) / 2, 58 - height / 2, 5] }],
    lines: [`M24 ${top + 8}H${end - 4}`],
    rulers: [{ from: [20, 60], to: [260, 60], length: 4, minor: 10 }],
  };
}

const TUMSTOCK = {
  view: [330, 80],
  pieces: [{ path: "M30 10H213V28H30Z" }, { path: "M213 10L238 19L213 28Z" }],
  lines: ["M30 16H213M30 22H213"],
  rulers: [{ from: [30, 30], to: [290, 30], length: 5, start: 7, unit: "tum", broken: true }],
};

const CM_WORD = ["cm", "centimeter"];
const DM = ["dm", "decimeter"];
const MM = ["mm", "millimeter"];
const M = ["m", "meter"];
const KM = ["km", "kilometer"];
const UNIT_TEXT = "Skriv rätt enhet efter talet (mm, cm, dm, m eller km).";

export default {
  code: "MLä1",
  area: "Mätning",
  sub: "MLä Mätning av längd",
  title: "Grundläggande mätning, längd",
  time: { min: 3, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Hur lång är pennan? Läs av på linjalen. Svara i hela cm.",
      points: "each",
      figure: pencil(13),
      rows: ["Svar: Pennan är [a] cm lång."],
      boxes: { a: { accept: ["13"] } },
    },
    {
      label: "1b",
      text: "Hur lång är pennan? Läs av på linjalen. Svara i hela cm.",
      points: "each",
      figure: pencil(8),
      rows: ["Svar: Pennan är [a] cm lång."],
      boxes: { a: { accept: ["8"] } },
    },
    {
      label: "2a",
      text: "Hur lång är pennvässaren? Läs av på linjalen. Svara i mm.",
      points: "each",
      figure: sharpener(24, 44),
      rows: ["Svar: Pennvässaren är [a] mm lång."],
      boxes: { a: { accept: ["24"] } },
    },
    {
      label: "2b",
      text: "Hur lång är pennvässaren? Läs av på linjalen. Svara i mm.",
      points: "each",
      figure: sharpener(15, 30),
      rows: ["Svar: Pennvässaren är [a] mm lång."],
      boxes: { a: { accept: ["15"] } },
    },
    {
      label: "3",
      text: "Förr i tiden använde man längdenheten 1 tum och mätte med tumstock. Din tumstock är trasig. Kan du ändå mäta hur lång pennan är, mätt i tum?",
      points: "each",
      figure: TUMSTOCK,
      rows: ["Svar: [a] tum."],
      boxes: { a: { accept: ["4"] } },
    },
    { label: "4", kind: "paper", text: "Rita med din linjal en sträcka som är 6 cm lång." },
    { label: "5", kind: "paper", text: "Rita med din linjal en sträcka som är 32 mm lång." },
    { label: "6a", text: UNIT_TEXT, points: "each", rows: ["Mias suddgummi är 3 [a] långt."], boxes: { a: { accept: CM_WORD } } },
    { label: "6b", text: UNIT_TEXT, points: "each", rows: ["Pappas sko är 3 [a] lång."], boxes: { a: { accept: DM } } },
    { label: "6c", text: UNIT_TEXT, points: "each", rows: ["En nyckelpiga är 6 [a] lång."], boxes: { a: { accept: MM } } },
    { label: "6d", text: UNIT_TEXT, points: "each", rows: ["Ett trevåningshus är 10 [a] högt."], boxes: { a: { accept: M } } },
    { label: "6e", text: UNIT_TEXT, points: "each", rows: ["Avståndet mellan Göteborg och Stockholm är 500 [a]."], boxes: { a: { accept: KM } } },
    { label: "6f", text: UNIT_TEXT, points: "each", rows: ["Ett rum kan vara 4 [a] brett."], boxes: { a: { accept: M } } },
  ],
};
