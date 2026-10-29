// DIAGNOS TAt1, Talföljder 1.
// Elevbladet är s. 9, lärarsidan s. 8 och facit står på s. 8 i 3_Talmonster.pdf.
//
// 8 kolumner på resultatblanketten (s. 10): 1–8, en skärm och en kolumn var. Varje skärm har två eller tre rutor
// (points: "one"): uppgiften är rätt när alla tal i den är rätt. Talen står med tre mellanslag emellan, som luckorna
// på bladet.
export default {
  code: "TAt1",
  area: "Talmönster och algebra",
  sub: "TAt Talföljder och talmönster",
  title: "Talföljder 1",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["1   3   5   7   9   11   13   [a]   [b]   [c]"],
      boxes: { a: { accept: ["15"] }, b: { accept: ["17"] }, c: { accept: ["19"] } },
    },
    {
      label: "2",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["2   4   6   8   10   12   14   [a]   [b]   [c]"],
      boxes: { a: { accept: ["16"] }, b: { accept: ["18"] }, c: { accept: ["20"] } },
    },
    {
      label: "3",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["10   20   30   40   50   [a]   [b]   [c]"],
      boxes: { a: { accept: ["60"] }, b: { accept: ["70"] }, c: { accept: ["80"] } },
    },
    {
      label: "4",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["5   10   15   20   25   30   [a]   [b]   [c]"],
      boxes: { a: { accept: ["35"] }, b: { accept: ["40"] }, c: { accept: ["45"] } },
    },
    {
      label: "5",
      text: "Fyll i de tal som saknas i detta talmönster.",
      points: "one",
      rows: ["3   6   9   12   [a]   [b]   21   24   27"],
      boxes: { a: { accept: ["15"] }, b: { accept: ["18"] } },
    },
    {
      label: "6",
      text: "Fyll i de tal som saknas i detta talmönster.",
      points: "one",
      rows: ["20   18   16   [a]   [b]   10   8   6"],
      boxes: { a: { accept: ["14"] }, b: { accept: ["12"] } },
    },
    {
      label: "7",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["2   12   22   32   42   [a]   [b]   [c]"],
      boxes: { a: { accept: ["52"] }, b: { accept: ["62"] }, c: { accept: ["72"] } },
    },
    {
      label: "8",
      text: "Fortsätt talmönstret och fyll i tre nya tal.",
      points: "one",
      rows: ["68   58   48   38   [a]   [b]   [c]"],
      boxes: { a: { accept: ["28"] }, b: { accept: ["18"] }, c: { accept: ["8"] } },
    },
  ],
};
