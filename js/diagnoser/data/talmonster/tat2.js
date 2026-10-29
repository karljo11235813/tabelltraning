// DIAGNOS TAt2, Talföljder 2.
// Elevbladet är s. 12, lärarsidan s. 11 och facit står på s. 11 i 3_Talmonster.pdf.
//
// 6 kolumner på resultatblanketten (s. 13): 1–6, en skärm och en kolumn var. Varje skärm har två eller tre rutor
// (points: "one"): uppgiften är rätt när alla tal i den är rätt. Talen står med tre mellanslag emellan, som luckorna
// på bladet.
export default {
  code: "TAt2",
  area: "Talmönster och algebra",
  sub: "TAt Talföljder och talmönster",
  title: "Talföljder 2",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["1   4   5   3   1   4   5   3   1   [a]   [b]   [c]"],
      boxes: { a: { accept: ["4"] }, b: { accept: ["5"] }, c: { accept: ["3"] } },
    },
    {
      label: "2",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["0   4   8   12   16   20   [a]   [b]   [c]"],
      boxes: { a: { accept: ["24"] }, b: { accept: ["28"] }, c: { accept: ["32"] } },
    },
    {
      label: "3",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["1   6   11   16   21   26   31   [a]   [b]   [c]"],
      boxes: { a: { accept: ["36"] }, b: { accept: ["41"] }, c: { accept: ["46"] } },
    },
    {
      label: "4",
      text: "Fyll i de tal som saknas i detta talmönster.",
      points: "one",
      rows: ["2   4   8   16   [a]   [b]   128   256"],
      boxes: { a: { accept: ["32"] }, b: { accept: ["64"] } },
    },
    {
      label: "5",
      text: "Fyll i de tal som saknas i detta talmönster.",
      points: "one",
      rows: ["1   4   9   16   [a]   [b]   49   64   81   100"],
      boxes: { a: { accept: ["25"] }, b: { accept: ["36"] } },
    },
    {
      label: "6",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["1   1   2   3   5   8   13   [a]   [b]   [c]"],
      boxes: { a: { accept: ["21"] }, b: { accept: ["34"] }, c: { accept: ["55"] } },
    },
  ],
};
