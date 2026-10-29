// DIAGNOS MVo3, Enhetsbyte, volym 1.
// Elevbladet är s. 87, lärarsidan s. 86 och facit står på s. 86 i 4_Matning.pdf.
//
// 18 kolumner på resultatblanketten (s. 88): 1a–1f, 2a–2f och 3a–3f, en skärm och en kolumn var. Raderna står i
// bladets ordning (a, b på första raden, c, d på andra, e, f på tredje). Bladet har "Byt enhet:" över 1 och 2; texten
// står på alla skärmar. Rutorna har ingen units: raden säger enheten, och data.test.js räknar om varje rad med
// enhetstabellen. Bladets ½ skrivs som bråk ({1|2}), och 2e:s "2,30 liter" står som på bladet.
//
// Titeln är strukturschemats (s. 77), "Enhetsbyte, volym 1", som hör ihop med MVo7 "Enhetsbyte, volym 2";
// lärarsidans rubrik säger "Enhetsbyten, volym".
export default {
  code: "MVo3",
  area: "Mätning",
  sub: "MVo Mätning av volym",
  title: "Enhetsbyte, volym 1",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    ["1a", "4 liter = [a] dl", "40"],
    ["1b", "200 dl = [a] liter", "20"],
    ["1c", "5 liter = [a] cl", "500"],
    ["1d", "600 ml = [a] dl", "6"],
    ["1e", "3 dl = [a] cl", "30"],
    ["1f", "600 ml = [a] cl", "60"],
    ["2a", "{1|2} liter = [a] cl", "50"],
    ["2b", "{1|2} liter = [a] dl", "5"],
    ["2c", "3,4 dl = [a] cl", "34"],
    ["2d", "1,5 liter = [a] cl", "150"],
    ["2e", "2,30 liter = [a] ml", "2300"],
    ["2f", "4,5 cl = [a] ml", "45"],
    ["3a", "4 dl = [a] liter", "0,4"],
    ["3b", "54 dl = [a] liter", "5,4"],
    ["3c", "3 500 ml = [a] liter", "3,5"],
    ["3d", "27 cl = [a] dl", "2,7"],
    ["3e", "23 ml = [a] cl", "2,3"],
    ["3f", "3,8 cl = [a] dl", "0,38"],
  ].map(([label, row, answer]) => ({ label, text: "Byt enhet.", points: "each", rows: [row], boxes: { a: { accept: [answer] } } })),
};
