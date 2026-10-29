// DIAGNOS MLä4, Mätning, cirkeln.
// Elevbladet är s. 51, lärarsidan s. 50 och facit står på s. 50 i 4_Matning.pdf.
//
// 6 kolumner på resultatblanketten (s. 52): 1–6, en skärm och en kolumn var. Bladets rad "På den här diagnosen kan du
// räkna med 3 som ett närmevärde på π." står först i texten på 2–6.
// 1: "Sätt X för alla sanna påståenden" är en pick med points: "one" (en kolumn), facit c och d.
// 2–5: π-rutor (pi, det exakta värdet): 12 är rätt för 4π, och så är "4π", 12,56 och 13 (4π med π ≈ 3,14 avrundat).
// 5: bladets figur, en cirkel där en fjärdedel är borttagen (3/4 · π · 4² = 12π ≈ 36).
//
// 6 och facit: bladet (s. 51, kontrollerat på bilden) frågar "En halvcirkel har arean 48 cm². Bestäm omkretsen av hela
// cirkeln.", men facit säger 16 cm. Det stämmer inte: hela cirkeln har arean 96, så r² = 96/π (32 med π = 3) och
// omkretsen är 2πr = 24√2 ≈ 33,9 med π = 3, eller 8√(6π) ≈ 34,7 med π = 3,14. (16 är r² för en hel cirkel med arean
// 48.) Här gäller bladets fråga: rutan är ett intervall (range) från 33,5 till 35, så 34, 33,9, 34,7 och 35 är rätt.
// Det exakta värdet har √π och går inte att skriva som en π-ruta; "24√2" och "6√32" (π = 3) står i accept.
const PI3 = "På den här diagnosen kan du räkna med 3 som ett närmevärde på π.";

const THREE_QUARTERS = {
  view: [200, 200],
  pieces: [{ path: "M100 100V20A80 80 0 1 0 180 100Z" }],
  shaded: [0],
};

export default {
  code: "MLä4",
  area: "Mätning",
  sub: "MLä Mätning av längd",
  title: "Mätning, cirkeln",
  time: { min: 2, max: 3, stop: 7 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      kind: "pick",
      label: "1",
      text: "Markera alla sanna påståenden.",
      items: [
        { id: "a", markup: "π är ett mått på en cirkels area." },
        { id: "b", markup: "π är förhållandet mellan en cirkels omkrets och dess radie." },
        { id: "c", markup: "π är förhållandet mellan en cirkels omkrets och dess diameter." },
        { id: "d", markup: "π är förhållandet mellan en cirkels area och dess radie i kvadrat." },
      ],
      accept: ["c", "d"],
      points: "one",
    },
    {
      label: "2",
      text: `${PI3} En cirkel har radien 2 cm. Bestäm cirkelns omkrets.`,
      points: "each",
      boxes: { a: { accept: ["12 cm"], pi: "4π" } },
    },
    {
      label: "3",
      text: `${PI3} En cirkel har omkretsen 30 cm. Bestäm cirkelns radie.`,
      points: "each",
      boxes: { a: { accept: ["5 cm"], pi: "15/π" } },
    },
    {
      label: "4",
      text: `${PI3} En cirkel har radien 10 cm. Bestäm cirkelns area.`,
      points: "each",
      boxes: { a: { accept: ["300 cm²"], pi: "100π" } },
    },
    {
      label: "5",
      text: `${PI3} Vilken area har följande figur om cirkelns radie är 4 cm?`,
      points: "each",
      figure: THREE_QUARTERS,
      boxes: { a: { accept: ["36 cm²"], pi: "12π" } },
    },
    {
      label: "6",
      text: `${PI3} En halvcirkel har arean 48 cm². Bestäm omkretsen av hela cirkeln.`,
      points: "each",
      boxes: { a: { accept: ["34 cm", "24√2", "6√32"], range: { ge: "33,5", le: "35" } } },
    },
  ],
};
