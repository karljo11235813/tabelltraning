// DIAGNOS MVo7, Enhetsbyte, volym 2.
// Elevbladet är s. 100, lärarsidan s. 99 och facit står på s. 99 i 4_Matning.pdf.
//
// 18 kolumner på resultatblanketten (s. 101): 1a–1f, 2a–2f och 3a–3f, en skärm och en kolumn var. Raderna står i
// bladets ordning (a, b på första raden, c, d på andra, e, f på tredje), med texten "Byt enhet." som på bladet.
// Rutorna har ingen units: raden säger enheten, och data.test.js räknar om varje rad med enhetstabellen.
//
// Tryckfel i facit: 1e står som "15 000 000 (mm³)", men bladet frågar efter cm³ (15 m³ = [a] cm³); 15 000 000 är rätt
// för cm³. 3e och 3f står i facit med en nolla sist ("0,001250", "0,000400"); här 0,00125 och 0,0004, samma värde.
export default {
  code: "MVo7",
  area: "Mätning",
  sub: "MVo Mätning av volym",
  title: "Enhetsbyte, volym 2",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    ["1a", "2 m^3 = [a] dm^3", "2 000"],
    ["1b", "5 dm^3 = [a] cm^3", "5 000"],
    ["1c", "4 dm^3 = [a] mm^3", "4 000 000"],
    ["1d", "8 cm^3 = [a] mm^3", "8 000"],
    ["1e", "15 m^3 = [a] cm^3", "15 000 000"],
    ["1f", "21 dm^3 = [a] cm^3", "21 000"],
    ["2a", "1,5 m^3 = [a] dm^3", "1 500"],
    ["2b", "0,4 dm^3 = [a] cm^3", "400"],
    ["2c", "4,2 cm^3 = [a] mm^3", "4 200"],
    ["2d", "3,5 dm^3 = [a] mm^3", "3 500 000"],
    ["2e", "0,06 m^3 = [a] cm^3", "60 000"],
    ["2f", "5,4 dm^3 = [a] mm^3", "5 400 000"],
    ["3a", "20 cm^3 = [a] dm^3", "0,02"],
    ["3b", "80,5 dm^3 = [a] m^3", "0,0805"],
    ["3c", "62,5 mm^3 = [a] cm^3", "0,0625"],
    ["3d", "2300 cm^3 = [a] m^3", "0,0023"],
    ["3e", "1250 mm^3 = [a] dm^3", "0,00125"],
    ["3f", "400 cm^3 = [a] m^3", "0,0004"],
  ].map(([label, row, answer]) => ({ label, text: "Byt enhet.", points: "each", rows: [row], boxes: { a: { accept: [answer] } } })),
};
