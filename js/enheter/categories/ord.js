// Frågor för "Längd, area eller volym?". Ett id återanvänds aldrig.
// tag "runt" är en längd runt en yta, tag "liter" en volym som mäts i liter.

export const WORD_ITEMS = [
  { id: "l1", level: 1, answer: "Längd", text: "Hur långt är det till skolan?" },
  { id: "l2", level: 1, answer: "Längd", text: "Hur hög är flaggstången?" },
  { id: "l3", level: 1, answer: "Längd", text: "Hur lång är du?" },
  { id: "l4", level: 1, answer: "Längd", text: "Hur bred är dörren?" },
  { id: "l5", level: 1, answer: "Längd", text: "Hur djup är poolen?" },
  { id: "l6", level: 1, answer: "Längd", text: "Hur långt är snöret?" },
  { id: "l7", level: 1, answer: "Längd", text: "Hur högt hoppade hon?" },
  { id: "l8", level: 1, answer: "Längd", text: "Hur lång är bron?" },
  { id: "a1", level: 1, answer: "Area", text: "Hur mycket färg går åt till golvet?" },
  { id: "a2", level: 1, answer: "Area", text: "Hur stor är tomten?" },
  { id: "a3", level: 1, answer: "Area", text: "Hur mycket tapet behövs till väggen?" },
  { id: "a4", level: 1, answer: "Area", text: "Hur stor är fotbollsplanen?" },
  { id: "a5", level: 1, answer: "Area", text: "Hur mycket papper går åt för att slå in paketet?" },
  { id: "a6", level: 1, answer: "Area", text: "Hur stor yta täcker mattan?" },
  { id: "a7", level: 1, answer: "Area", text: "Hur mycket gräsfrö behövs till gräsmattan?" },
  { id: "a8", level: 1, answer: "Area", text: "Hur stort område brann i skogsbranden?" },
  { id: "v1", level: 1, answer: "Volym", text: "Hur mycket vatten ryms i poolen?" },
  { id: "v2", level: 1, answer: "Volym", text: "Hur mycket rymmer kylskåpet?" },
  { id: "v3", level: 1, answer: "Volym", text: "Hur mycket saft finns i flaskan?", tag: "liter" },
  { id: "v4", level: 1, answer: "Volym", text: "Hur mycket sand behövs för att fylla sandlådan?" },
  { id: "v5", level: 1, answer: "Volym", text: "Hur mycket luft finns i ballongen?" },
  { id: "v6", level: 1, answer: "Volym", text: "Hur mycket bensin ryms i tanken?", tag: "liter" },
  { id: "v7", level: 1, answer: "Volym", text: "Hur mycket mjölk står det i receptet?", tag: "liter" },
  { id: "v8", level: 1, answer: "Volym", text: "Hur mycket jord behövs för att fylla krukan?" },
  { id: "t1", level: 2, answer: "Längd", text: "Hur långt staket behövs runt hagen?", tag: "runt" },
  { id: "t2", level: 2, answer: "Längd", text: "Hur lång list behövs runt golvet?", tag: "runt" },
  { id: "t3", level: 2, answer: "Längd", text: "Hur långt band behövs runt paketet?", tag: "runt" },
  { id: "t4", level: 2, answer: "Längd", text: "Hur långt är det runt sjön?", tag: "runt" },
  { id: "t5", level: 2, answer: "Längd", text: "Hur lång är omkretsen av trädgården?", tag: "runt" },
  { id: "t6", level: 2, answer: "Area", text: "Hur mycket plast behövs för att täcka poolen?" },
  { id: "t7", level: 2, answer: "Area", text: "Hur stor är bottenytan i akvariet?" },
  { id: "t8", level: 2, answer: "Area", text: "Hur mycket glas går åt till akvariets sidor?" },
  { id: "t9", level: 2, answer: "Area", text: "Hur mycket mark täcker huset?" },
  { id: "t10", level: 2, answer: "Volym", text: "Hur mycket vatten avdunstar från dammen på en dag?" },
  { id: "t11", level: 2, answer: "Volym", text: "Hur stor plats tar lådan i flyttbilen?" },
  { id: "t12", level: 2, answer: "Volym", text: "Hur mycket betong behövs till husgrunden?" },
];

// Ett föremål, tre frågor: bilden är densamma, bara frågan ändras.
export const OBJECT_SETS = [
  {
    object: "pool",
    items: [
      { text: "Hur långt simmar du om du simmar längs poolen?", answer: "Längd" },
      { text: "Hur stort skydd behövs för att täcka poolen?", answer: "Area" },
      { text: "Hur mycket vatten rymmer poolen?", answer: "Volym" },
    ],
  },
  {
    object: "akvarium",
    items: [
      { text: "Hur högt är akvariet?", answer: "Längd" },
      { text: "Hur mycket glas behövs till framsidan?", answer: "Area" },
      { text: "Hur mycket vatten rymmer akvariet?", answer: "Volym" },
    ],
  },
  {
    object: "rum",
    items: [
      { text: "Hur lång list behövs längs ena väggen?", answer: "Längd" },
      { text: "Hur mycket golvmatta behövs?", answer: "Area" },
      { text: "Hur mycket luft finns i rummet?", answer: "Volym" },
    ],
  },
];

export const UNIT_ITEMS = ["cm", "km", "mil", "m²", "cm²", "ha", "km²", "m³", "cm³", "l", "dl", "ml"];
