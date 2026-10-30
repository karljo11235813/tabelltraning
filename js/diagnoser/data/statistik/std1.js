// DIAGNOS STd1, Tabeller.
// Elevbladet är s. 37–42, lärarsidan s. 36 och facit står på s. 36 i 6_Statistik.pdf.
//
// 23 kolumner på resultatblanketten (s. 43): 1a–1d, 2, 3a–3d, 4a–4f, 5a–5d och 6a–6d, en skärm och en kolumn var.
// Varje nummers inledande text och tabell står på alla dess skärmar.
// 1: avprickningen ritas som streck i grupper om fem ("||||| |"); bladets femte, sneda streck i en grupp är här ett
//    femte lodrätt streck. Slöjd 11, Idrott 13, Svenska 3, Matematik 9, Bild 7.
// 2: leksakerna är bladets bild, utklippt ur PDF:en (images; 5 nallar, 3 fotbollar, 6 sagoböcker), och tabellens första kolumn
//    har namn i stället för bladets bilder. En kolumn (points "one"). Facit: "Man kan även svara med 5, 3 respektive
//    6 streck", så strecken står också i accept.
// 3c och 4d är mängdsvar (set): namnen eller dagarna i vilken ordning som helst.
// 3d och 4f är storleksordningar, en rad rutor och en kolumn var (points "one"). 4f har också rutan för talet i mitten
//    (bladet: "ringa in det tal som hamnat i mitten"). 4f säger inte åt vilket håll; texten har fått "Börja med den
//    lägsta temperaturen." som 3d:s "Börja med det minsta talet", eftersom rutorna rättas en och en.
// 6: busstidtabellen är bladets bild, utklippt ur PDF:en (images), med bladets text "På bilden ser du …".
//    6a–c är klockslag (time, 12 timmars klocka:
//    9.17 och 21.17 är samma, "kl. 9.17" och "sjutton minuter över nio" är rätt). 6d är ord.
// Tryckfel: bladets "ºC" skrivs "°C".
//
// Tid: lärarsidan anger bara 2–3 minuter per uppgift, ingen tid för hela diagnosen, så time är null.

// ---------- 2: leksakerna ----------

const IMG = "img/diagnoser/statistik/";
const TOYS_IMAGE = [{ src: `${IMG}std1-2-leksaker.webp`, alt: "Leksaker huller om buller: nallar, fotbollar och sagoböcker.", width: 309 }];

// ---------- tabellerna ----------

const CHOICES = {
  head: ["Elevernas val", "Antal barn som valt"],
  rows: [
    ["Slöjd", "||||| ||||| |"],
    ["Idrott", "||||| ||||| |||"],
    ["Svenska", "|||"],
    ["Matematik", "||||| ||||"],
    ["Bild", "||||| ||"],
  ],
};
const INTRO_1 =
  "Eleverna i två klasser har valt ämnen för ”elevens val”. Lärarna har prickat av deras val i en tabell som kallas frekvenstabell. Så här ser tabellen ut när de är klara.";

const VOTES = {
  head: ["Elev", "Antal röster"],
  rows: [["Ante", "15"], ["Petra", "8"], ["Ali", "17"], ["Fia", "21"], ["Tova", "9"], ["Tess", "13"], ["Tim", "10"], ["Emma", "13"], ["Mohammed", "16"]],
};
const INTRO_3 = "Eleverna på en skola har haft val till elevrådet. Så här såg resultatet ut.";

const TEMPERATURES = {
  head: ["Dag", "Temperatur °C"],
  rows: [
    ["Dag ett", "15"],
    ["Dag två", "10"],
    ["Dag tre", "11"],
    ["Dag fyra", "10"],
    ["Dag fem", "9"],
    ["Dag sex", "5"],
    ["Dag sju", "5"],
    ["Dag åtta", "10"],
    ["Dag nio", "12"],
  ],
};
const INTRO_4 = "Eleverna i Markus klass mätte temperaturen varje morgon under nio dagar. Så här såg Markus tabell ut.";

const JUMPS = {
  head: ["Namn", "Höjd (cm)", "Längd (cm)"],
  rows: [
    ["Peter", "125", "258"],
    ["Stina", "130", "190"],
    ["Tommy", "125", "230"],
    ["Emma", "115", "240"],
    ["Max", "135", "246"],
    ["Erik", "100", "270"],
    ["Mikaela", "110", "210"],
  ],
};
const INTRO_5 = "Eleverna i en klass har hoppat längdhopp och höjdhopp på friidrottsdagen. I tabellen ser du deras resultat.";

const TIMETABLE = [
  { src: `${IMG}std1-6-tidtabell.webp`, alt: "Busstidtabell för linje 178, Västertorp – Österlänga – Valla: avgångstider måndag–fredag och fredag.", width: 612 },
];
const INTRO_6 =
  "På bilden ser du en del av busstidtabellen för linje 178. Med hjälp av tabellen ska du svara på följande frågor.";

export default {
  code: "STd1",
  area: "Sannolikhet och statistik",
  sub: "STd Statistik Diagram",
  title: "Tabeller",
  time: null,
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: `${INTRO_1} Hur många elever har valt matematik?`, points: "each", table: CHOICES, rows: ["Svar: [a]"], boxes: { a: { accept: ["9"] } } },
    { label: "1b", text: `${INTRO_1} Vilket ämne har flest elever valt?`, points: "each", table: CHOICES, rows: ["Svar: [a]"], boxes: { a: { accept: ["Idrott"] } } },
    { label: "1c", text: `${INTRO_1} Hur många fler elever har valt idrott än svenska?`, points: "each", table: CHOICES, rows: ["Svar: [a]"], boxes: { a: { accept: ["10"] } } },
    {
      label: "1d",
      text: `${INTRO_1} Hur många elever är det sammanlagt i de två klasserna?`,
      points: "each",
      table: CHOICES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["43"] } },
    },
    {
      label: "2",
      text: "Eleverna i en klass har tagit fram leksaker ur ett förråd: nallar, fotbollar och sagoböcker. Du kan se alla leksakerna här nedanför. Nu ska du ta reda på hur många leksaker det finns av varje sort och fylla i tabellen (frekvenstabellen).",
      points: "one",
      images: TOYS_IMAGE,
      table: { head: ["Leksak", "Antal"], rows: [["Nalle", "[a]"], ["Fotboll", "[b]"], ["Sagobok", "[c]"]] },
      boxes: {
        a: { accept: ["5", "|||||", "IIIII"] },
        b: { accept: ["3", "|||", "III"] },
        c: { accept: ["6", "||||| |", "IIIII I", "||||||", "IIIIII"] },
      },
    },
    { label: "3a", text: `${INTRO_3} Vem fick flest röster?`, points: "each", table: VOTES, rows: ["Svar: [a]"], boxes: { a: { accept: ["Fia"] } } },
    { label: "3b", text: `${INTRO_3} Vem fick minst antal röster?`, points: "each", table: VOTES, rows: ["Svar: [a]"], boxes: { a: { accept: ["Petra"] } } },
    {
      label: "3c",
      text: `${INTRO_3} Vilka fick lika många röster?`,
      points: "each",
      table: VOTES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Tess och Emma"], set: [["Tess"], ["Emma"]] } },
    },
    {
      label: "3d",
      text: `${INTRO_3} Skriv talen i tabellen i ordning. Börja med det minsta talet.`,
      points: "one",
      table: VOTES,
      rows: ["[a]  [b]  [c]  [d]  [e]  [f]  [g]  [h]  [i]"],
      boxes: {
        a: { accept: ["8"] },
        b: { accept: ["9"] },
        c: { accept: ["10"] },
        d: { accept: ["13"] },
        e: { accept: ["13"] },
        f: { accept: ["15"] },
        g: { accept: ["16"] },
        h: { accept: ["17"] },
        i: { accept: ["21"] },
      },
    },
    { label: "4a", text: `${INTRO_4} Vilken var den högsta temperaturen?`, points: "each", table: TEMPERATURES, rows: ["Svar: [a]"], boxes: { a: { accept: ["15"] } } },
    {
      label: "4b",
      text: `${INTRO_4} Vilken dag var temperaturen högst?`,
      points: "each",
      table: TEMPERATURES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Dag 1", "Dag ett", "1", "Dag nr 1", "Dag nummer 1", "Första dagen", "Den första dagen"] } },
    },
    { label: "4c", text: `${INTRO_4} Vilken var den lägsta temperaturen?`, points: "each", table: TEMPERATURES, rows: ["Svar: [a]"], boxes: { a: { accept: ["5"] } } },
    {
      label: "4d",
      text: `${INTRO_4} Vilka dagar var temperaturen mer än 10 grader?`,
      points: "each",
      table: TEMPERATURES,
      rows: ["Svar: [a]"],
      boxes: {
        a: {
          accept: ["Dag 1, 3 och 9"],
          set: [
            ["dag 1", "dag ett", "dag1", "1", "ett"],
            ["dag 3", "dag tre", "dag3", "3", "tre"],
            ["dag 9", "dag nio", "dag9", "9", "nio"],
          ],
        },
      },
    },
    {
      label: "4e",
      text: `${INTRO_4} Hur många gånger förekommer temperaturen 10 °C?`,
      points: "each",
      table: TEMPERATURES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "4f",
      text: `${INTRO_4} Ordna temperaturerna i storleksordning och skriv det tal som hamnat i mitten. Börja med den lägsta temperaturen.`,
      points: "one",
      table: TEMPERATURES,
      rows: ["[a]  [b]  [c]  [d]  [e]  [f]  [g]  [h]  [i]", "Talet i mitten: [j]"],
      boxes: {
        a: { accept: ["5"] },
        b: { accept: ["5"] },
        c: { accept: ["9"] },
        d: { accept: ["10"] },
        e: { accept: ["10"] },
        f: { accept: ["10"] },
        g: { accept: ["11"] },
        h: { accept: ["12"] },
        i: { accept: ["15"] },
        j: { accept: ["10"] },
      },
    },
    { label: "5a", text: `${INTRO_5} Vem hoppade längst?`, points: "each", table: JUMPS, rows: ["Svar: [a]"], boxes: { a: { accept: ["Erik"] } } },
    { label: "5b", text: `${INTRO_5} Vem hoppade högst?`, points: "each", table: JUMPS, rows: ["Svar: [a]"], boxes: { a: { accept: ["Max"] } } },
    { label: "5c", text: `${INTRO_5} Hur många elever hoppade högre än 120 cm?`, points: "each", table: JUMPS, rows: ["Svar: [a]"], boxes: { a: { accept: ["4"] } } },
    { label: "5d", text: `${INTRO_5} Hur många elever hoppade längre än 245 cm?`, points: "each", table: JUMPS, rows: ["Svar: [a]"], boxes: { a: { accept: ["3"] } } },
    {
      label: "6a",
      text: `${INTRO_6} Du tar bussen från Västertorp kyrka klockan 08.48. När kommer du till torget i Valla?`,
      points: "each",
      images: TIMETABLE,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["9.17"], time: "9.17" } },
    },
    {
      label: "6b",
      text: `${INTRO_6} Du stiger på bussen vid Österlänga skola klockan 14.56. När kommer du till Valla resecentrum?`,
      points: "each",
      images: TIMETABLE,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["15.15"], time: "15.15" } },
    },
    {
      label: "6c",
      text: `${INTRO_6} Du vill komma till Sjöparken klockan 19.00. När ska du då ta bussen från Västertorp kyrka?`,
      points: "each",
      images: TIMETABLE,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["18.48"], time: "18.48" } },
    },
    {
      label: "6d",
      text: `${INTRO_6} Hur ofta går det en buss från Västertorp kyrka till Valla mellan 08.00 och 16.00?`,
      points: "each",
      images: TIMETABLE,
      rows: ["Svar: [a]"],
      boxes: {
        a: {
          accept: [
            "En gång i timman",
            "En gång i timmen",
            "En gång per timme",
            "En gång varje timme",
            "1 gång i timman",
            "1 gång i timmen",
            "1 gång per timme",
            "1 gång varje timme",
            "1 gång/timme",
            "1 gång/h",
            "En buss i timmen",
            "En buss i timman",
            "En buss per timme",
            "En buss varje timme",
            "1 buss i timmen",
            "1 buss per timme",
            "1 buss varje timme",
            "1 buss/timme",
            "Varje timme",
            "Var timme",
            "Varje hel timme",
            "En gång i timmen, 48 över",
            "Varje timme, 48 minuter över",
            "48 minuter över varje timme",
            "Var 60:e minut",
            "Var 60:e min",
            "Varje 60:e minut",
            "Var sextionde minut",
            "Varje 60 minuter",
            "Var 60 minut",
            "En gång per timma",
            "1 gång per timma",
            "En gång i timmen (48 över)",
            "Varje timma",
            "Var timma",
          ],
        },
      },
    },
  ],
};
