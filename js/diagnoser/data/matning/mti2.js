// DIAGNOS MTi2, Tidsdifferens, analog tid.
// Elevbladet är s. 18, lärarsidan s. 17 och facit står på s. 17 i 4_Matning.pdf.
//
// 4 kolumner på resultatblanketten (s. 19): 1–4, en skärm och en kolumn var. Alla är textuppgifter med bara Svar.
// 1–3 är klockslagsrutor (time): eleven får svara med analog eller digital tid, och klockan jämförs på tolv timmar
// (facit "Kvart i sex eller 17.45"; 5.45 är också rätt). 4 är en tidsskillnad (duration) i minuter: 150, "150 minuter",
// "2,5 timmar" och "två och en halv timme" är rätt.
//
// Lärarsidans rubrik är "Tidsdifferens analog tid"; titeln får kommat från delområdets lista (s. 12).
export default {
  code: "MTi2",
  area: "Mätning",
  sub: "MTi Mätning av tid",
  title: "Tidsdifferens, analog tid",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Jasmines väckarklocka ringer klockan sju på morgonen. En och en halv timma senare går hon till skolan. Vad är klockan då?",
      points: "each",
      boxes: { a: { accept: ["Halv nio", "8.30"], time: "8.30" } },
    },
    {
      label: "2",
      text: "Stina äter middag klockan fem på eftermiddagen. Det tar tre kvart för Stina att äta upp maten. Vad är klockan när hon är klar?",
      points: "each",
      boxes: { a: { accept: ["Kvart i sex", "17.45"], time: "17.45" } },
    },
    {
      label: "3",
      text: "Lisa vill se ett TV-program som börjar klockan kvart i sju på kvällen. Det får hon om hon först städar sitt rum. Det tar 30 minuter att städa rummet. När måste Lisa börja städa?",
      points: "each",
      boxes: { a: { accept: ["Kvart över sex", "18.15"], time: "18.15" } },
    },
    {
      label: "4",
      text: "Angela har barnkalas. Kalaset börjar klockan tre på eftermiddagen och är slut halv sex. Hur länge håller kalaset på?",
      points: "each",
      boxes: { a: { accept: ["Två och en halv timma", "150 minuter"], duration: "150 min" } },
    },
  ],
};
