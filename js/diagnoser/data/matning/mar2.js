// DIAGNOS MAr2, Enhetsbyte, area.
// Elevbladet är s. 60, lärarsidan s. 59 och facit står på s. 59 i 4_Matning.pdf.
//
// 18 kolumner på resultatblanketten (s. 61): 1a–1f, 2a–2f och 3a–3f, en skärm och en kolumn var. Raderna står i
// bladets ordning (a, b på första raden, c, d på andra, e, f på tredje), med texten "Byt enhet." som på bladet.
// Rutorna har ingen units: raden säger enheten, och data.test.js räknar om varje rad med enhetstabellen.
export default {
  code: "MAr2",
  area: "Mätning",
  sub: "MAr Mätning av area",
  title: "Enhetsbyte, area",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    ["1a", "2 m^2 = [a] dm^2", "200"],
    ["1b", "4 dm^2 = [a] cm^2", "400"],
    ["1c", "5 dm^2 = [a] mm^2", "50 000"],
    ["1d", "3 m^2 = [a] cm^2", "30 000"],
    ["1e", "12 cm^2 = [a] mm^2", "1 200"],
    ["1f", "25 m^2 = [a] cm^2", "250 000"],
    ["2a", "3,2 m^2 = [a] dm^2", "320"],
    ["2b", "0,6 dm^2 = [a] mm^2", "6 000"],
    ["2c", "1,6 dm^2 = [a] cm^2", "160"],
    ["2d", "4,5 cm^2 = [a] mm^2", "450"],
    ["2e", "12,5 m^2 = [a] cm^2", "125 000"],
    ["2f", "1,5 m^2 = [a] cm^2", "15 000"],
    ["3a", "5 dm^2 = [a] m^2", "0,05"],
    ["3b", "3 cm^2 = [a] dm^2", "0,03"],
    ["3c", "80 mm^2 = [a] dm^2", "0,008"],
    ["3d", "12 cm^2 = [a] m^2", "0,0012"],
    ["3e", "102 cm^2 = [a] dm^2", "1,02"],
    ["3f", "465 mm^2 = [a] m^2", "0,000465"],
  ].map(([label, row, answer]) => ({ label, text: "Byt enhet.", points: "each", rows: [row], boxes: { a: { accept: [answer] } } })),
};
