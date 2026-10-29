// DIAGNOS MLä3, Enhetsbyte, längd.
// Elevbladet är s. 48, lärarsidan s. 47 och facit står på s. 47 i 4_Matning.pdf.
//
// 18 kolumner på resultatblanketten (s. 49): 1a–1f, 2a–2f och 3a–3f, en skärm och en kolumn var, i etiketternas ordning.
// Raderna är bladets ("4 m = [a] cm"); data.test.js räknar om varje rad med enhetstabellen (också mil). Rutorna har
// ingen units, eftersom raden säger enheten.
//
// Lärarsidans rubrik är "Enhetsbyten längd"; titeln är delområdets (s. 38) "Enhetsbyte, längd".
const row = (label, markup, answer) => ({ label, text: "Byt enhet.", points: "each", rows: [markup], boxes: { a: { accept: [answer] } } });

export default {
  code: "MLä3",
  area: "Mätning",
  sub: "MLä Mätning av längd",
  title: "Enhetsbyte, längd",
  time: { min: 2, max: 3, stop: 7 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    row("1a", "4 m = [a] cm", "400"),
    row("1b", "3 m = [a] mm", "3000"),
    row("1c", "6 m = [a] dm", "60"),
    row("1d", "2 dm = [a] cm", "20"),
    row("1e", "5 cm = [a] mm", "50"),
    row("1f", "8 km = [a] m", "8000"),
    row("2a", "3,5 m = [a] dm", "35"),
    row("2b", "8,4 dm = [a] cm", "84"),
    row("2c", "4,5 cm = [a] mm", "45"),
    row("2d", "1,52 m = [a] cm", "152"),
    row("2e", "6,05 m = [a] mm", "6050"),
    row("2f", "7,2 mil = [a] km", "72"),
    row("3a", "37 dm = [a] m", "3,7"),
    row("3b", "250 mm = [a] dm", "2,5"),
    row("3c", "14 cm = [a] m", "0,14"),
    row("3d", "4,8 mm = [a] dm", "0,048"),
    row("3e", "0,5 m = [a] dm", "5"),
    row("3f", "54 km = [a] mil", "5,4"),
  ],
};
