// DIAGNOS STd5, Linjediagram.
// Elevbladet är s. 66–70, lärarsidorna s. 64–65 och facit står på s. 65 i 6_Statistik.pdf (4 och 5 som ritade diagram).
//
// 15 kolumner på resultatblanketten (s. 71): 1a–d, 2a–d, 3a–e, 4 och 5, en skärm och en kolumn var.
// Tryckfel: bladets uppgift 1 har deluppgifterna a, c, d och e (b saknas). Facit och resultatblanketten har 1a–d, så
// skärmarna heter 1a–d.
//
// 1–3: linjediagram att läsa av (diagram, type "line") med värdena som batch F mätte ur bladen. Svaren är tal; en enhet
// efter talet ("40 °C", "40 grader") räknas bort.
// 1d: "Mellan födelsen och 1 år" i flera skrivsätt (bladets axel säger "födseln"). form "exact", så att "0–1" inte
// räknas som talet −1.
// 2b: ett klockslag (time "10.00"): "10.00", "kl. 10", "klockan tio" är rätt.
// 3b: facit "drygt 11 kg" (bladet ritar 11,1): 11 till 11,5 är rätt (range). 3d: facit "Cirka 8 månader".
// "ungefär", "cirka", "ca" och "ca." före talet räknas bort av rättningen; andra ord ("drygt 11", "över 11") läses inte
// som tal, så de vanligaste skrivsätten står i accept.
//
// 4–5: rita ett linjediagram från en tabell. Här prickar eleven in punkterna (plot med månaderna på x-axeln,
// chart.x.labels; jan = 1) och linjen mellan dem ritas inte, så texten säger "Pricka in temperaturerna i diagrammet"
// i stället för "rita ett linjediagram". Tabellen står ovanför rutnätet. 4 har y-axeln 0–30 med steg 1 (29 °C ska
// gå att pricka in; bladet har 0–35). I 5 ska eleven enligt lärarsidan själv gradera axlarna; här är axlarna givna,
// 0–30 med steg 2 (alla värden är jämna), som facits diagram ungefär.
//
// Lärarsidan: "ca 10 minuter att göra hela diagnosen" (2–3 minuter per uppgift); ingen tid att avbryta efter, så stop
// är null.

const LISA = "Skolsköterskan har ritat ett linjediagram som visar hur Lisa har vuxit under sina första 12 levnadsår.";
const LISA_LINE = {
  type: "line",
  categories: ["födseln", "1 år", "2 år", "3 år", "4 år", "5 år", "6 år", "7 år", "8 år", "9 år", "10 år", "11 år", "12 år"],
  x: { label: "Lisas ålder" },
  y: { min: 40, max: 170, step: 10, label: "längd (cm)" },
  values: [50, 76, 90, 100, 107, 113, 120, 126, 130, 138, 140, 150, 160],
};

const FEVER = "Jasmine har feber. Hennes temperatur tas varannan timma under dagen och förs in i ett diagram. Så här ser feberkurvan ut:";
const FEVER_LINE = {
  type: "line",
  categories: ["8.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", ""],
  x: { label: "klockslag" },
  y: { min: 36, max: 42, step: 1, label: "temperatur °C" },
  values: ["40,5", 41, "39,5", "38,5", 40, 40, 40, 39, 38],
};

const TWINS = "Tvillingarna Saga och Tobias vägde inte lika mycket vid födseln. Deras viktuppgång under första året har ritats in i ett gemensamt diagram.";
const TWINS_LINE = {
  type: "line",
  categories: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  x: { label: "ålder (månader)" },
  y: { min: 3, max: 13, step: 1, label: "vikt (kg)" },
  series: [
    { name: "Tobias", values: ["3,4", "4,4", "6,6", "7,3", 8, "8,8", "9,5", "9,8", 10, "10,5", "11,1", "11,6", 12] },
    { name: "Saga", values: ["3,8", 5, 6, "6,5", 7, "7,9", "8,2", "8,5", "8,9", "9,2", "9,4", "9,8", 10] },
  ],
};

const MONTHS = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
const MONTH_LABELS = ["", "jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const ALICE = [30, 29, 25, 20, 15, 10, 10, 15, 20, 25, 29, 30];
const BEACH = [0, 0, 4, 8, 12, 18, 22, 26, 18, 10, 6, 4];
const tableOf = (head, temps) => ({ head: ["Månad", head], rows: MONTHS.map((m, i) => [m, String(temps[i])]) });
const pointsOf = (temps) => temps.map((t, i) => [i + 1, t]);

const screen = (label, text, diagram, accept, extra = {}) => ({
  label,
  text,
  diagram,
  points: "each",
  rows: ["Svar: [a]"],
  boxes: { a: { accept, ...extra } },
});

export default {
  code: "STd5",
  area: "Sannolikhet och statistik",
  sub: "STd Statistik Diagram",
  title: "Linjediagram",
  time: { min: 10, max: 10, stop: null },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    screen("1a", `${LISA} Hur lång var Lisa när hon föddes?`, LISA_LINE, ["50"]),
    screen("1b", `${LISA} Hur lång var Lisa när hon fyllde 8 år?`, LISA_LINE, ["130"]),
    screen("1c", `${LISA} Hur gammal var Lisa när hon var 140 cm lång?`, LISA_LINE, ["10"]),
    screen("1d", `${LISA} Mellan vilka år växte Lisa mest?`, LISA_LINE, [
      "Mellan födelsen och 1 år", "Mellan födseln och 1 år", "Födelsen och 1 år", "Födseln och 1 år",
      "Mellan födelsen och ett år", "Mellan födseln och ett år", "Från födelsen till 1 år", "Från födseln till 1 år",
      "Mellan 0 och 1 år", "Mellan 0 år och 1 år", "Mellan 0 och 1", "0 och 1 år", "0 och 1", "0–1 år", "0–1",
      "Första året", "Under första året", "Det första året",
    ], { form: "exact" }),
    screen("2a", `${FEVER} Vilken temperatur hade Jasmine klockan 16.00?`, FEVER_LINE, ["40"]),
    screen("2b", `${FEVER} När på dagen var Jasmines temperatur högst?`, FEVER_LINE, ["kl. 10.00"], { time: "10.00" }),
    screen("2c", `${FEVER} Vilken temperatur hade Jasmine klockan 14.00?`, FEVER_LINE, ["38,5"]),
    screen("2d", `${FEVER} Med hur många grader sjönk Jasmines temperatur mellan klockan 10.00 och klockan 14.00?`, FEVER_LINE, ["2,5"]),
    screen("3a", `${TWINS} Hur mycket vägde Saga när hon var 4 månader?`, TWINS_LINE, ["7"]),
    screen("3b", `${TWINS} Hur mycket vägde Tobias när han var 10 månader?`, TWINS_LINE, [
      "11", "drygt 11", "drygt 11 kg", "lite mer än 11", "lite mer än 11 kg", "lite över 11", "lite över 11 kg", "över 11", "över 11 kg",
    ], { range: { ge: 11, le: "11,5" } }),
    screen("3c", `${TWINS} Hur mycket ökade Sagas vikt från 4:e till 12:e månaden?`, TWINS_LINE, ["3"]),
    screen("3d", `${TWINS} Hur gammal var Tobias när han vägde 10 kg?`, TWINS_LINE, ["8"]),
    screen("3e", `${TWINS} Hur mycket tyngre var Tobias än Saga när de var 4 månader gamla?`, TWINS_LINE, ["1"]),
    {
      kind: "plot",
      label: "4",
      text: "I tabellen ser du medeltemperaturen varje månad under ett år i staden Alice Springs i Australien. Pricka in temperaturerna i det tomma diagrammet. Klicka på skärningarna i rutnätet.",
      table: tableOf("Temp. °C", ALICE),
      chart: {
        x: { min: 0, max: 12, step: 1, label: "månad", labels: MONTH_LABELS },
        y: { min: 0, max: 30, step: 1, label: "°C" },
      },
      points: pointsOf(ALICE),
    },
    {
      kind: "plot",
      label: "5",
      text: "Vid en badplats har eleverna mätt vattentemperaturen en gång varje månad. Mätningarna gjordes mitt på dagen den första i varje månad. I tabellen ser du deras mätresultat. Pricka in temperaturerna i diagrammet. Klicka på skärningarna i rutnätet.",
      table: tableOf("Temp. °C", BEACH),
      chart: {
        x: { min: 0, max: 12, step: 1, label: "månad", labels: MONTH_LABELS },
        y: { min: 0, max: 30, step: 2, label: "°C" },
      },
      points: pointsOf(BEACH),
    },
  ],
};
