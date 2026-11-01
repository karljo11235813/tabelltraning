// Frågor för "Längd, area eller volym?". Ett id återanvänds aldrig.
// tag "runt" är en längd runt en yta, tag "liter" en volym som mäts i liter.
// why säger varför just den här frågan gäller svaret; det står i lösningen.

export const WORD_ITEMS = [
  { id: "l1", level: 1, answer: "Längd", text: "Hur långt är det till skolan?", why: "Vägen till skolan är en sträcka." },
  { id: "l2", level: 1, answer: "Längd", text: "Hur hög är flaggstången?", why: "Flaggstångens höjd är en sträcka från marken till toppen." },
  { id: "l3", level: 1, answer: "Längd", text: "Hur lång är du?", why: "Din längd är en sträcka från golvet till huvudet." },
  { id: "l4", level: 1, answer: "Längd", text: "Hur bred är dörren?", why: "Dörrens bredd är en sträcka från ena sidan till den andra." },
  { id: "l5", level: 1, answer: "Längd", text: "Hur djup är poolen?", why: "Djupet är en sträcka från ytan ner till botten." },
  { id: "l6", level: 1, answer: "Längd", text: "Hur långt är snöret?", why: "Snöret är en sträcka från ena änden till den andra." },
  { id: "l7", level: 1, answer: "Längd", text: "Hur högt hoppade hon?", why: "Höjden är en sträcka från marken och uppåt." },
  { id: "l8", level: 1, answer: "Längd", text: "Hur lång är bron?", why: "Bron är en sträcka från ena sidan till den andra." },
  { id: "a1", level: 1, answer: "Area", text: "Hur mycket färg går åt till golvet?", why: "Färgen täcker golvet, och golvet är en yta." },
  { id: "a2", level: 1, answer: "Area", text: "Hur stor är tomten?", why: "Tomten är en yta på marken." },
  { id: "a3", level: 1, answer: "Area", text: "Hur mycket tapet behövs till väggen?", why: "Tapeten täcker väggen, och väggen är en yta." },
  { id: "a4", level: 1, answer: "Area", text: "Hur stor är fotbollsplanen?", why: "Fotbollsplanen är en yta på marken." },
  { id: "a5", level: 1, answer: "Area", text: "Hur mycket papper går åt för att slå in paketet?", why: "Pappret täcker paketets sidor, och sidorna är ytor." },
  { id: "a6", level: 1, answer: "Area", text: "Hur stor yta täcker mattan?", why: "Mattan täcker en del av golvet, och det är en yta." },
  { id: "a7", level: 1, answer: "Area", text: "Hur mycket gräsfrö behövs till gräsmattan?", why: "Fröna sprids ut över gräsmattan, och gräsmattan är en yta." },
  { id: "a8", level: 1, answer: "Area", text: "Hur stort område brann i skogsbranden?", why: "Området som brann är en yta på marken." },
  { id: "v1", level: 1, answer: "Volym", text: "Hur mycket vatten ryms i poolen?", why: "Vattnet fyller poolen." },
  { id: "v2", level: 1, answer: "Volym", text: "Hur mycket rymmer kylskåpet?", why: "Det som ryms i kylskåpet fyller det." },
  { id: "v3", level: 1, answer: "Volym", text: "Hur mycket saft finns i flaskan?", tag: "liter", why: "Saften fyller flaskan, och saft mäts i liter." },
  { id: "v4", level: 1, answer: "Volym", text: "Hur mycket sand behövs för att fylla sandlådan?", why: "Sanden fyller sandlådan." },
  { id: "v5", level: 1, answer: "Volym", text: "Hur mycket luft finns i ballongen?", why: "Luften fyller ballongen." },
  { id: "v6", level: 1, answer: "Volym", text: "Hur mycket bensin ryms i tanken?", tag: "liter", why: "Bensinen fyller tanken, och bensin mäts i liter." },
  { id: "v7", level: 1, answer: "Volym", text: "Hur mycket mjölk står det i receptet?", tag: "liter", why: "Mjölk mäts i liter eller deciliter." },
  { id: "v8", level: 1, answer: "Volym", text: "Hur mycket jord behövs för att fylla krukan?", why: "Jorden fyller krukan." },
  { id: "t1", level: 2, answer: "Längd", text: "Hur långt staket behövs runt hagen?", tag: "runt", why: "Staketet går runt hagen. Det är en sträcka längs kanten, inte en yta." },
  { id: "t2", level: 2, answer: "Längd", text: "Hur lång list behövs runt golvet?", tag: "runt", why: "Listen går runt golvet. Det är en sträcka längs kanten, inte en yta." },
  { id: "t3", level: 2, answer: "Längd", text: "Hur långt band behövs runt paketet?", tag: "runt", why: "Bandet går runt paketet. Det är en sträcka, inte en yta." },
  { id: "t4", level: 2, answer: "Längd", text: "Hur långt är det runt sjön?", tag: "runt", why: "Vägen runt sjön är en sträcka längs kanten." },
  { id: "t5", level: 2, answer: "Längd", text: "Hur lång är omkretsen av trädgården?", tag: "runt", why: "Omkretsen är en sträcka längs kanten av trädgården." },
  { id: "t6", level: 2, answer: "Area", text: "Hur mycket plast behövs för att täcka poolen?", why: "Plasten täcker poolen, så det är ytan som räknas, inte vattnet i den." },
  { id: "t7", level: 2, answer: "Area", text: "Hur stor är bottenytan i akvariet?", why: "Bottenytan är en yta, även om akvariet rymmer vatten." },
  { id: "t8", level: 2, answer: "Area", text: "Hur mycket glas går åt till akvariets sidor?", why: "Glaset täcker akvariets sidor, och sidorna är ytor." },
  { id: "t9", level: 2, answer: "Area", text: "Hur mycket mark täcker huset?", why: "Huset täcker en yta på marken." },
  { id: "t10", level: 2, answer: "Volym", text: "Hur mycket vatten avdunstar från dammen på en dag?", why: "Vattnet som försvinner är en mängd som mäts i till exempel liter." },
  { id: "t11", level: 2, answer: "Volym", text: "Hur stor plats tar lådan i flyttbilen?", why: "Lådan fyller en del av utrymmet i flyttbilen." },
  { id: "t12", level: 2, answer: "Volym", text: "Hur mycket betong behövs till husgrunden?", why: "Betongen fyller formen till husgrunden." },
];

// Ett föremål, tre frågor: bilden är densamma, bara frågan ändras.
export const OBJECT_SETS = [
  {
    object: "pool",
    items: [
      { text: "Hur långt simmar du om du simmar längs poolen?", answer: "Längd", why: "Du simmar en sträcka längs poolen." },
      { text: "Hur stort skydd behövs för att täcka poolen?", answer: "Area", why: "Skyddet täcker poolen, så det är ytan som räknas." },
      { text: "Hur mycket vatten rymmer poolen?", answer: "Volym", why: "Vattnet fyller poolen." },
    ],
  },
  {
    object: "akvarium",
    items: [
      { text: "Hur högt är akvariet?", answer: "Längd", why: "Höjden är en sträcka från botten till toppen." },
      { text: "Hur mycket glas behövs till framsidan?", answer: "Area", why: "Glaset täcker framsidan, och framsidan är en yta." },
      { text: "Hur mycket vatten rymmer akvariet?", answer: "Volym", why: "Vattnet fyller akvariet." },
    ],
  },
  {
    object: "rum",
    items: [
      { text: "Hur lång list behövs längs ena väggen?", answer: "Längd", why: "Listen går längs väggen, och det är en sträcka." },
      { text: "Hur mycket golvmatta behövs?", answer: "Area", why: "Golvmattan täcker golvet, och golvet är en yta." },
      { text: "Hur mycket luft finns i rummet?", answer: "Volym", why: "Luften fyller rummet." },
    ],
  },
];

export const UNIT_ITEMS = ["cm", "km", "mil", "m²", "cm²", "ha", "km²", "m³", "cm³", "l", "dl", "ml"];
