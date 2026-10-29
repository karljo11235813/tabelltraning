// DIAGNOS RP6, Förändringsfaktor.
// Elevbladet är s. 73–74, lärarsidorna s. 72 och facit står på s. 72 i 2_Rationella_tal.pdf.
//
// 6 kolumner på resultatblanketten (s. 75): 1–6, en skärm och en kolumn var. Läraren anger "ca 15" minuter (inget
// spann), så min och max är båda 15. Eleven ska inte räkna ut uppgifterna, bara visa vilka uttryck som ger rätt svar.
//
// 1–4 är val (pick, D6) med points: "one": en kolumn per uppgift, rätt när precis facits uttryck är markerade
// (1 c; 2 a och d; 3 b och d; 4 b och d). Bladet säger "Kryssa i"; här markeras uttrycken.
//
// 5 och 6 ber eleven formulera ett uttryck (D5, expression): rätt när det som skrivs är ett uttryck med räknesätt och
// exakt lika stort som facits (250 · 0,8 · 0,7 = 250 · 0,56 = 140; 28 000 · 1,07 · 1,03 = 30 858,8). Ett färdigt tal
// ("140") är fel. Facit säger "lämpligt uttryck är till exempel", så varje uttryck med rätt värde godtas.
//
// Bladets tryckfel: 2b behåller bladets räknesätt (2000 + 1.03 + 1,03, s. 73) och dess "1.03" med decimalpunkt, som är
// Diamants egen (b är fel hur som helst och står som tryckt). 3b står som "0,7 ·0,7" och skrivs med mellanslag på båda
// sidor. I 3 står "prissäkning" (tryckfel på bladet) och skrivs "prissänkning". I 3 saknas ett komma i texten
// ("rea med 30 % sedan annonseras"); det skrivs som "rea med 30 %, sedan annonseras".

export default {
  code: "RP6",
  area: "Rationella tal",
  sub: "RP Proportionalitet och procent",
  title: "Förändringsfaktor",
  time: { min: 15, max: 15, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      kind: "pick",
      label: "1",
      text: "Priset på en jacka är 250 kr. Först höjs priset med 20 % och sedan sänks det med 10 %. Vad blir det slutliga priset? Markera alla uttryck som ger korrekt svar på uppgiften.",
      items: [
        { id: "a", markup: "250 + 20 - 10" },
        { id: "b", markup: "0,2 · 250 · 0,1" },
        { id: "c", markup: "250 · 1,2 · 0,9" },
        { id: "d", markup: "250 + 1,20 - 0,9" },
      ],
      accept: ["c"],
      points: "one",
    },
    {
      kind: "pick",
      label: "2",
      text: "Carin har 2 000 kronor på ett bankkonto som ger 3 % ränta. Hur mycket har Carin på kontot efter två år om hon inte rör pengarna? Markera alla uttryck som ger korrekt svar på uppgiften.",
      items: [
        { id: "a", markup: "2000 · 1,03 · 1,03" },
        { id: "b", markup: "2000 + 1.03 + 1,03" },
        { id: "c", markup: "2000 · 1,06" },
        { id: "d", markup: "2000 · 1,03^2" },
      ],
      accept: ["a", "d"],
      points: "one",
    },
    {
      kind: "pick",
      label: "3",
      text: "En prissänkning i en möbelaffär genomförs i två steg. Först är det rea med 30 %, sedan annonseras ny rea med 30 % på reapriset. Vad kostar en soffa efter den andra sänkningen om ursprungspriset på soffan är 6 500 kr? Markera alla uttryck som ger korrekt svar på uppgiften.",
      items: [
        { id: "a", markup: "6500 · 1,30 · 1,30" },
        { id: "b", markup: "6500 · 0,7 · 0,7" },
        { id: "c", markup: "6500 - (0,6 · 650)" },
        { id: "d", markup: "6500 · 0,49" },
      ],
      accept: ["b", "d"],
      points: "one",
    },
    {
      kind: "pick",
      label: "4",
      text: "Carlos har en månadspeng på 700 kronor i månaden. Efter förhandling med sina föräldrar får han en höjning med 15 % och sedan får han en ytterligare höjning på den nya månadspengen med 10 % varje månad om han dammsuger lägenheten en gång i veckan. Markera alla uttryck som visar Carlos månadspeng för en månad när han dammsugit varje vecka.",
      items: [
        { id: "a", markup: "700 + 0,15 · 700 + 0,10 · 700" },
        { id: "b", markup: "700 · 1,15 · 1,10" },
        { id: "c", markup: "700 · 1,25" },
        { id: "d", markup: "(700 + 0,15 · 700) · 1,10" },
      ],
      accept: ["b", "d"],
      points: "one",
    },
    {
      label: "5",
      text: "Formulera ett uttryck som visar hur man beräknar det slutliga priset för en bok som först kostar 250 kronor och sedan sänks med 20 % och därefter sänks med 30 %. (OBS! du ska inte räkna ut uppgiften).",
      points: "each",
      boxes: { a: { accept: ["250 · 0,8 · 0,7", "250 · 0,56"], expression: true } },
    },
    {
      label: "6",
      text: "Formulera ett uttryck som visar hur man beräknar den slutliga lönen som först är på 28 000 kr/mån och sedan höjs med 7 % för att därefter höjas med ytterligare 3 %.",
      points: "each",
      boxes: { a: { accept: ["28 000 · 1,07 · 1,03"], expression: true } },
    },
  ],
};
