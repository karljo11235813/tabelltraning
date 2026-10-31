// DIAGNOS GSk1, avbildning och perspektiv. Elevbladet är s. 42, lärarsidan och facit s. 41 i 5_Geometri.pdf.
// Lärarsidan har ingen rubrik under koden; titeln är skriven efter innehållet. 1 (rita av figuren) görs på papper.
// Facit: 2 c.
import { sheet } from "./sheet.js";

export default {
  code: "GSk1",
  area: "Geometri",
  sub: "GSk Skala",
  title: "Avbildning och perspektiv",
  time: { min: 2, max: 3, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      kind: "paper",
      label: "1",
      text: "Rita en exakt likadan figur i ett rutnät som är lika stort.",
      images: [sheet("gsk1-1", 480, "Ett rutnät med sex gånger sex rutor där några rutor är färgade, och ett tomt rutnät bredvid.")],
    },
    {
      kind: "choose",
      label: "2",
      text: "På ett runt bord ligger ett klot, en pyramid och en kub. Vid bordet sitter personerna Ali (A) och Bea (B). Hur ser Bea de tre sakerna? Välj rätt bild.",
      images: [sheet("gsk1-2", 455, "Bordet sett ovanifrån med Ali och Bea, en bild av hur Ali ser sakerna, och fyra bilder a till d med sakerna i olika ordning.")],
      options: [
        { id: "a", markup: "a" },
        { id: "b", markup: "b" },
        { id: "c", markup: "c" },
        { id: "d", markup: "d" },
      ],
      accept: "c",
    },
  ],
};
