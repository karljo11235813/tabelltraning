// DIAGNOS STl1, Grundläggande lägesmått.
// Elevbladet är s. 78–81, lärarsidan s. 77 och facit står på s. 77 i 6_Statistik.pdf.
//
// 11 kolumner på resultatblanketten (s. 82): 1a–c, 2a–c, 3a–b och 4a–c, en skärm och en kolumn var.
// 1b: bladets tabell har räknestreck (fem i en grupp, fyra lodräta och ett snett). Här står de som grupper om fem
// lodräta streck: Slöjd 11, Idrott 13, Svenska 3, Matematik 9, Bild 7.
// 1a och 2a: talen står i texten med kommatecken emellan (bladet har dem på en egen rad).
// 1c: stapeldiagram (diagram, type "bar"), samma diagram som STd2 2.
// 2b: ordna åldrarna i fem rutor och skriv medianen i en sjätte, en kolumn (points "one"). Bladet säger "ringa in
// medianen"; här står "skriv medianen".
// 4: svaren är tal; en enhet efter talet ("11 °C", "11 grader") räknas bort.
//
// Lärarsidan: "ca 10 minuter att genomföra diagnosen" och "avbryta diagnosen efter cirka 20 minuter".

const TALLY = {
  head: ["Elevernas val", "Antal barn"],
  rows: [
    ["Slöjd", "|||||   |||||   |"],
    ["Idrott", "|||||   |||||   |||"],
    ["Svenska", "|||"],
    ["Matematik", "|||||   ||||"],
    ["Bild", "|||||   ||"],
  ],
};

const PETS_BAR = {
  type: "bar",
  categories: ["katt", "hund", "fiskar", "hamster", "häst"],
  y: { max: 6, step: 1, label: "Antal" },
  values: [5, 3, 2, 3, 1],
};

const VOTES = {
  head: ["Elev", "Antal röster"],
  rows: [["Ann", "15"], ["Petra", "8"], ["Sofie", "17"], ["Mohammed", "21"], ["Tova", "9"], ["Tess", "13"], ["Linus", "10"], ["Emma", "13"], ["Eleine", "16"]],
};

const MILK =
  "Kalle skrev upp hur många glas mjölk han drack varje dag i skolan. Efter en vecka räknade han ut medelvärdet, alltså hur många glas mjölk han drack i genomsnitt varje dag i skolan. Det här är Kalles noteringar: Måndag: 3 glas, Tisdag: 2 glas, Onsdag: 4 glas, Torsdag: 5 glas, Fredag: 1 glas. Beräkna hur många glas mjölk Kalle drack i genomsnitt per dag.";
const SCOUTS =
  "Scouterna i patrullen Örnarna var inte lika gamla. Lisa var 10 år, Nadja var 12 år, Christian var 11 år, Fia var 13 år, Mitra var 13 år och Jan var 13 år. Beräkna medelvärdet för ”Örnarnas” ålder.";
const WEATHER =
  "Eleverna vid Säteriskolan mätte temperaturen klockan 12.00 varje dag under en vecka. Resultatet blev så här: 13 °C, 11 °C, 12 °C, 12 °C och 7 °C. Man kan sammanfatta veckans temperatur på tre olika sätt: med ett medelvärde, en median eller ett typvärde.";

export default {
  code: "STl1",
  area: "Sannolikhet och statistik",
  sub: "STl Lägesmått",
  title: "Grundläggande lägesmått",
  time: { min: 10, max: 10, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Ange typvärdet till följande material: 7, 9, 11, 15, 13, 11, 15, 11, 21.",
      points: "each",
      rows: ["Typvärdet är: [a]"],
      boxes: { a: { accept: ["11"] } },
    },
    {
      label: "1b",
      text: "Ange typvärdet till följande material:",
      table: TALLY,
      points: "each",
      rows: ["Typvärdet är: [a]"],
      boxes: { a: { accept: ["idrott"] } },
    },
    {
      label: "1c",
      text: "Ange typvärdet till följande material:",
      diagram: PETS_BAR,
      points: "each",
      rows: ["Typvärdet är: [a]"],
      boxes: { a: { accept: ["katt", "katter"] } },
    },
    {
      label: "2a",
      text: "Ange medianen till följande material: 4, 4, 9, 11, 15, 27, 38.",
      points: "each",
      rows: ["Medianen är: [a]"],
      boxes: { a: { accept: ["11"] } },
    },
    {
      label: "2b",
      text: "Det var fem lärare i arbetslaget: Sven som var 34 år, Hans som var 28 år, Lisa som var 53 år, Susanne som var 27 år och Aline som var 38 år. Ordna lärarnas åldrar i storleksordning med det minsta talet först och skriv medianen.",
      points: "one",
      rows: ["[a]  [b]  [c]  [d]  [e]", "Medianen är: [f]"],
      boxes: {
        a: { accept: ["27"] },
        b: { accept: ["28"] },
        c: { accept: ["34"] },
        d: { accept: ["38"] },
        e: { accept: ["53"] },
        f: { accept: ["34"] },
      },
    },
    {
      label: "2c",
      text: "Vid valet till elevrådet fick eleverna följande antal röster. Vilket värde är medianen?",
      table: VOTES,
      points: "each",
      rows: ["Medianen är: [a]"],
      boxes: { a: { accept: ["13"] } },
    },
    {
      label: "3a",
      text: `Ange medelvärdet till följande material: ${MILK}`,
      points: "each",
      rows: ["Medelvärdet var: [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "3b",
      text: `Ange medelvärdet till följande material: ${SCOUTS}`,
      points: "each",
      rows: ["Medelvärdet var: [a]"],
      boxes: { a: { accept: ["12"] } },
    },
    {
      label: "4a",
      text: WEATHER,
      points: "each",
      rows: ["Medelvärdet var: [a]"],
      boxes: { a: { accept: ["11"] } },
    },
    {
      label: "4b",
      text: WEATHER,
      points: "each",
      rows: ["Medianen var: [a]"],
      boxes: { a: { accept: ["12"] } },
    },
    {
      label: "4c",
      text: WEATHER,
      points: "each",
      rows: ["Typvärdet var: [a]"],
      boxes: { a: { accept: ["12"] } },
    },
  ],
};
