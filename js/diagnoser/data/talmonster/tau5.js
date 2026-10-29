// DIAGNOS TAu5, Förenkling av rationella uttryck.
// Elevbladet är s. 43–44, lärarsidan s. 42 och facit står på s. 42 i 3_Talmonster.pdf.
//
// 14 kolumner på resultatblanketten (s. 45): 1a–7b, en skärm och en kolumn var. Lärarsidan säger "cirka 5 minuter",
// så min och max är båda 5.
//
// Alla rutor är "Förenkla så långt som möjligt" (algebra: "simplified"). accept[0] är facits form; omskrivningar av
// den (annan ordning, 3y³x^-2) är rätt. Lärarsidan säger att svaret ska ha "ett gemensamt bråkstreck". Där facits
// faktoriserade täljare eller nämnare lika gärna kan skrivas utvecklad står de formerna också i accept:
//   2a (1 − x)(1 + x)/x²; 3b och 5a utvecklad täljare; 4a och 4b utvecklad täljare och/eller nämnare;
//   6b nämnaren x² − x; 7a nämnaren (x − 1)(x + 1).
// Facit skriver en del täljare och nämnare inom parentes ((y + 2)/xy); svaret skrivs med parentes runt en nämnare
// som är en produkt eller summa: (y + 2)/(xy). 7b:s facit 1 är ett tal och rättas på värdet.
export default {
  code: "TAu5",
  area: "Talmönster och algebra",
  sub: "TAu Algebraiska uttryck",
  title: "Förenkling av rationella uttryck",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  variables: "abxy",
  screens: [
    {
      label: "1a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{3x^2 · y^5|x^4 · y^2} = [a]"],
      boxes: { a: { accept: ["3y³/x²"], algebra: "simplified" } },
    },
    {
      label: "1b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{4a^6 · 3b^5|a^4 · b^7} = [a]"],
      boxes: { a: { accept: ["12a²/b²"], algebra: "simplified" } },
    },
    {
      label: "2a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{1|x^2} − 1 = [a]"],
      boxes: { a: { accept: ["(1 − x²)/x²", "(1 − x)(1 + x)/x²"], algebra: "simplified" } },
    },
    {
      label: "2b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{3|x} − {x|2} = [a]"],
      boxes: { a: { accept: ["(6 − x²)/(2x)"], algebra: "simplified" } },
    },
    {
      label: "3a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{(2x^2)^3 · (3y)^4|4x^4 · 9y^2} = [a]"],
      boxes: { a: { accept: ["18x²y²"], algebra: "simplified" } },
    },
    {
      label: "3b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{2a^5 · (a − b)^3|6a^2 · (a − b)} = [a]"],
      boxes: { a: { accept: ["a³(a − b)²/3", "(a⁵ − 2a⁴b + a³b²)/3"], algebra: "simplified" } },
    },
    {
      label: "4a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{2ab(a − b)^2|8b^2 · (a^2 − b^2)} = [a]"],
      boxes: { a: { accept: ["a(a − b)/(4b(a + b))", "(a² − ab)/(4b(a + b))", "a(a − b)/(4ab + 4b²)", "(a² − ab)/(4ab + 4b²)"], algebra: "simplified" } },
    },
    {
      label: "4b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{(x + 2y)^3|4(x^2 − 4y^2)} = [a]"],
      boxes: { a: { accept: ["(x + 2y)²/(4(x − 2y))", "(x + 2y)²/(4x − 8y)", "(x² + 4xy + 4y²)/(4(x − 2y))", "(x² + 4xy + 4y²)/(4x − 8y)"], algebra: "simplified" } },
    },
    {
      label: "5a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{4(a − b)^3 · (a + b)|6(a^2 − b^2)} = [a]"],
      boxes: { a: { accept: ["2(a − b)²/3", "(2a² − 4ab + 2b²)/3"], algebra: "simplified" } },
    },
    {
      label: "5b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{(a^2 − b^2)^3|(a + b)^2 · (a − b)^4} = [a]"],
      boxes: { a: { accept: ["(a + b)/(a − b)"], algebra: "simplified" } },
    },
    {
      label: "6a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{1|x} + {2|xy} = [a]"],
      boxes: { a: { accept: ["(y + 2)/(xy)"], algebra: "simplified" } },
    },
    {
      label: "6b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{1|x − 1} + {1|x} = [a]"],
      boxes: { a: { accept: ["(2x − 1)/(x(x − 1))", "(2x − 1)/(x² − x)"], algebra: "simplified" } },
    },
    {
      label: "7a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{x + 1|x − 1} − {x − 1|x + 1} = [a]"],
      boxes: { a: { accept: ["4x/(x² − 1)", "4x/((x − 1)(x + 1))"], algebra: "simplified" } },
    },
    {
      label: "7b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{x|x + y} + {y|x + y} = [a]"],
      boxes: { a: { accept: ["1"], algebra: "simplified" } },
    },
  ],
};
