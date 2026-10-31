// DIAGNOS GSk4, längd-, area- och volymskala. Elevbladet är s. 53, lärarsidan och facit s. 52 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. Lärarsidan ber om ett lösblad för
// lösningarna (paper: true). Uppgift 7 är borttagen på bladet och finns inte här.
// Facit: 1 63 cm², 2 640 cm², 3 7 200 m², 4 8 cm³, 5 200 cm³, 6 9 m. Bladets "förminskade prismat." får ett frågetecken.
import { unitsFor } from "../../units.js";

const task = (label, text, answer, unit) => ({ label, text, points: "each", rows: ["Svar: [a]"], boxes: { a: { accept: [answer], units: unitsFor(unit) } } });

export default {
  code: "GSk4",
  area: "Geometri",
  sub: "GSk Skala",
  title: "Längd-, area- och volymskala",
  time: { min: 10, max: 10, stop: 15 },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    task("1", "En triangel har arean 7 cm². Triangeln förstoras i skala 3:1. Bestäm den nya triangelns area.", "63 cm²", "cm²"),
    task("2", "En papperslåda, med formen av ett rätblock, har begränsningsarean 80 cm². Hur mycket mer papper går det åt om du ska tillverka en kartong med tre gånger så långa kanter? (svara i cm²)", "640 cm²", "cm²"),
    task("3", "En rektangulär tomt avbildas på en karta med längdskalan 1:3 000. Hur stor är tomtens area om tomten är 8,0 cm² på kartan? (svara i m²)", "7 200 m²", "m²"),
    task("4", "Ett prisma har volymen 64 cm³. Prismat förminskas i skala 1:2. Hur stor är volymen på det förminskade prismat?", "8 cm³", "cm³"),
    task("5", "En cylinder har volymen 25 cm³. Man förstorar cylindern i skala 2:1. Hur stor volym har den nya cylindern?", "200 cm³", "cm³"),
    task("6", "En bassäng har volymen 200 m³. En annan bassäng har tre gånger så långa kantlängder (längd, bredd och djup). Beräkna den större bassängens djup om dess bottenarea är 600 m².", "9 m", "m"),
  ],
};
