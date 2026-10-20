// Kapitel, tillåtna ämnen per kapitel och svarsalternativ för sant/falskt-banken.
// Ett ämne som inte står här gör att påståendet hoppas över vid laddning.
export const CHAPTERS = {
  1: {
    name: "Tal och räkning",
    topics: [
      "talmängder",
      "räknebegrepp",
      "bråk",
      "decimaltal & avrundning",
      "potenser & grundpotensform",
      "kvadratrötter",
      "multiplikation & division",
    ],
  },
  2: {
    name: "Samband och förändring",
    topics: [
      "andel",
      "förändringsfaktor",
      "räkna baklänges",
      "upprepad förändring",
      "procentenheter",
      "blandat",
    ],
  },
  3: { name: "Algebra", topics: [] },
  4: { name: "Geometri", topics: [] },
};

// Samma ordning som knapparna och arbetsbladens kolumner.
export const ANSWERS = ["sant", "beror", "falskt"];

export const ANSWER_LABELS = { sant: "Sant", beror: "Beror på", falskt: "Falskt" };
