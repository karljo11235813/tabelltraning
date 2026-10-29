// Visartavlor och klockor: figure.dial och figure.clock (ritas här, anropas av figures.js) och skärmtypen clock, där
// eleven ställer visarna (MTi1 2a–c). Inget här rör `document` när modulen laddas; allt som ritar görs först när en
// funktion anropas.
//
// En visartavla (figure.dial) är { center: [x, y], radius, ticks, major, labels, sweep?, labelRadius?, hands? }:
//   ticks        antal steg mellan strecken: runt en hel tavla blir det ticks streck, längs en båge ticks + 1
//   major        vart major:e streck, räknat från början, är långt och får nästa text ur labels
//   labels       texterna vid de långa strecken i ordning (["12", "1", …, "11"]) eller { from, to, step } ({ from: 0,
//                to: 10, step: 1 } ger 0, 1, …, 10, decimaler med komma)
//   sweep        bågen [från, till] i grader medurs från klockan tolv, som en vågs skala ([-40, 40]); utan sweep en hel
//                urtavla med en cirkel runt
//   labelRadius  var texternas mitt står, i delar av radien; standard just innanför strecken, över 1 utanför bågen
//   hands        visare { value, of, length?, width? }: value av of längs bågen (7 av 10 på vågen, 15 av 60 för en
//                minutvisare), length i delar av radien (standard 0,8) och width i figurens enheter (standard radien/30)
// figure.clock: "8.15" är en vanlig klocka (clockDial): 60 streck, vart femte långt, 12, 1, …, 11, en kort och tjock
// timvisare och en lång och smal minutvisare. Tiden skrivs t.mm med 0–23 timmar; 20.15 ritas som 8.15.
//
// Skärmtypen clock: { kind: "clock", label, text, time: "5.40" }. Eleven väljer visare med två knappar och klickar
// eller drar på urtavlan (eller flyttar den valda visaren med piltangenterna); båda visarna hoppar till de 60
// minutstrecken. Svaret är { minute: "40", hour: "5,6" }: minutvisarens streck (0–59) och timvisarens läge i timmar
// från tolv (0 till 11,8, var 0,2 timme), "" för en visare som inte är satt.
//
// Rena funktioner (rättningen, mark.js):
//   parseClockTime  "5.40" som { h: 5, m: 40 }; null när det inte är en tid.
//   isClockRight    rätt när minutvisaren står på rätt minut och timvisaren mellan rätt timstreck, på den halva som
//                   ligger närmast rätt timme (5.40: mellan 5 och 6 och närmare 6, alltså 5,6 eller 5,8 men inte på 6;
//                   kvart över 12: 12,2 eller 12,4 men inte på 12). Står den rätta timvisaren högst ett halvt
//                   minutstreck från ett timstreck (8.03, 6.00) får den stå på strecket; halv nio får stå var som helst
//                   mellan 8 och 9. Saknas en visare är det fel.
//   clockFacit      facits svar för en tid: minuten och timvisaren på närmaste streck.
//   markClock       skärmens rättning för mark.js: { mark, right, wrong }.

import { el, svgEl, detailLine } from "./dom.js";

// ---------- TIDEN OCH RÄTTNINGEN ----------

// Timvisarens läge räknas i heltal: en timme är 3000 enheter, så att både en minut (50) och en tusendels timme (3) är
// hela enheter. Ingen flyttalsjämförelse.
const HOUR = 3000;
const TURN = 12 * HOUR;
const MINUTE = HOUR / 60;
const HALF_MARK = HOUR / 10; // ett halvt minutstreck (sex minuter) för timvisaren

export function parseClockTime(text) {
  const match = /^\s*(\d{1,2})[.:](\d{2})\s*$/.exec(String(text ?? ""));
  if (!match) return null;
  const [h, m] = [Number(match[1]), Number(match[2])];
  return h <= 23 && m <= 59 ? { h, m } : null;
}

// Minutvisarens streck ur svaret ("40"), eller null.
function minuteOf(raw) {
  const text = String(raw ?? "").trim();
  return /^\d{1,2}$/.test(text) && Number(text) <= 59 ? Number(text) : null;
}

// Timvisarens läge ur svaret ("5,6", högst tre decimaler, 12 är samma som 0) i enheter, eller null.
function hourOf(raw) {
  const match = /^(\d{1,2})(?:[,.](\d{1,3}))?$/.exec(String(raw ?? "").trim());
  if (!match) return null;
  const units = Number(match[1]) * HOUR + Number((match[2] ?? "").padEnd(3, "0")) * 3;
  return units <= TURN ? units % TURN : null;
}

// Ett läge minus ett annat, runt urtavlan: från −6 timmar (inte med) till 6 timmar.
const around = (units) => ((((units + TURN / 2) % TURN) + TURN) % TURN) - TURN / 2;

// Står timvisaren (läget i enheter) rätt för tiden?
export function isHourHandRight({ h, m }, hour) {
  const base = (h % 12) * HOUR;
  if (m === 30) {
    const d = around(hour - base);
    return d > 0 && d < HOUR;
  }
  const mark = m < 30 ? base : base + HOUR; // timstrecket som den rätta timvisaren står närmast
  const e = (m < 30 ? m : m - 60) * MINUTE; // den rätta timvisaren från det strecket
  const d = around(hour - mark);
  if (Math.abs(d) > HOUR / 2) return false;
  if (d === 0) return Math.abs(e) <= HALF_MARK;
  return Math.sign(d) === Math.sign(e);
}

export function isClockRight(screen, answers) {
  const time = parseClockTime(screen.time);
  const minute = minuteOf(answers?.minute);
  const hour = hourOf(answers?.hour);
  if (time === null || minute === null || hour === null) return false;
  return minute === time.m && isHourHandRight(time, hour);
}

// Timvisarens streck (0–59) som svarstext: 28 är "5,6" och 0 är "0".
export const hourText = (mark) => `${Math.floor(mark / 5)}${mark % 5 === 0 ? "" : `,${(mark % 5) * 2}`}`;

// Facits svar: minuten och timvisaren på strecket närmast det exakta läget (halvvägs avrundas framåt).
export function clockFacit(time) {
  const t = typeof time === "string" ? parseClockTime(time) : time;
  if (t === null) return { minute: "", hour: "" };
  const mark = Math.round((((t.h % 12) * 60 + t.m) / 12)) % 60;
  return { minute: String(t.m), hour: hourText(mark) };
}

// Svaret i ord för resultatets reservrad (när skärmen inte längre finns i diagnosen).
const answerText = (answers) => `lång visare ${answers?.minute || "–"}, kort visare ${answers?.hour || "–"}`;

export function markClock(screen, answers) {
  const right = isClockRight(screen, answers);
  return { mark: right ? "right" : "wrong", right: Number(right), wrong: right ? [] : [{ id: "hands", given: answerText(answers), expected: screen.time, note: null }] };
}

// ---------- VISARTAVLAN ----------

const CLOCK_LABELS = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
export const CLOCK_VIEW = [200, 200];

// En vanlig klocka som visartavla, mitt i view. time är en tid ("8.15") eller null för en tom klocka.
export function clockDial(time, view = CLOCK_VIEW) {
  const radius = Math.min(view[0], view[1]) / 2 - 3;
  const dial = { center: [view[0] / 2, view[1] / 2], radius, ticks: 60, major: 5, labels: CLOCK_LABELS, hands: [] };
  const t = typeof time === "string" ? parseClockTime(time) : time;
  if (t) dial.hands = clockHands(radius, ((t.h % 12) * 60 + t.m) / 12, t.m);
  return dial;
}

// Timvisaren och minutvisaren, med timvisaren som streck (0–60, får vara ett bråk) och minutvisaren som minut.
// null för en visare som inte ska ritas.
export function clockHands(radius, hourMark, minute) {
  return [
    ...(hourMark === null ? [] : [{ value: hourMark, of: 60, length: 0.5, width: radius / 14, kind: "hour" }]),
    ...(minute === null ? [] : [{ value: minute, of: 60, length: 0.86, width: radius / 28, kind: "minute" }]),
  ];
}

const sweepOf = (dial) => dial.sweep ?? [0, 360];
const isFull = (dial) => dial.sweep === undefined;
const rad = (deg) => (deg * Math.PI) / 180;

// Vinkeln i grader medurs från klockan tolv för en del (0–1) av bågen.
export function dialAngle(dial, fraction) {
  const [from, to] = sweepOf(dial);
  return from + fraction * (to - from);
}

// En punkt på avståndet rho från mitten, i vinkeln angle (grader medurs från tolv).
export function dialPoint(dial, angle, rho) {
  const [cx, cy] = dial.center;
  return [cx + rho * Math.sin(rad(angle)), cy - rho * Math.cos(rad(angle))];
}

// Strecken: [{ fraction, major }] längs bågen. En hel tavla har ticks streck (det sista vore det första igen).
export function dialTicks(dial) {
  const count = isFull(dial) ? dial.ticks : dial.ticks + 1;
  const major = dial.major ?? 1;
  return Array.from({ length: Math.max(0, count) }, (_, i) => ({ fraction: i / dial.ticks, major: i % major === 0 }));
}

// Texten för ett tal i labels: { from, to, step } med decimalkomma.
const numberText = (x) => String(Math.round(x * 1e6) / 1e6).replace(".", ",").replace("-", "−");

// Texterna vid de långa strecken: [{ fraction, text }]. Fler texter än långa streck ritas inte.
export function dialLabels(dial) {
  const majors = dialTicks(dial).filter((t) => t.major);
  let texts = [];
  if (Array.isArray(dial.labels)) texts = dial.labels.map(String);
  else if (dial.labels && typeof dial.labels === "object") {
    const { from, to, step } = dial.labels;
    const count = Math.round((to - from) / step);
    if (Number.isFinite(count) && count >= 0) texts = Array.from({ length: count + 1 }, (_, i) => numberText(from + i * step));
  }
  return majors.slice(0, texts.length).map((t, i) => ({ fraction: t.fraction, text: texts[i] }));
}

// Mått som följer tavlans storlek: texterna får plats mellan de långa strecken, och strecken följer texten.
export function dialSizes(dial) {
  const majors = Math.max(1, Math.round(dial.ticks / (dial.major ?? 1)));
  const [from, to] = sweepOf(dial);
  const gap = dial.radius * rad(Math.abs(to - from) / majors); // bågen mellan två långa streck
  const font = Math.min(0.18 * dial.radius, 0.75 * gap);
  const long = 0.6 * font;
  const short = 0.35 * font;
  const labelRadius = dial.labelRadius ?? 1 - (long + 1.3 * font) / dial.radius; // en ring fri för visarspetsen
  return { font, long, short, labelRadius };
}

const round = (v) => Math.round(v * 100) / 100;

// En visare som ett streck från mitten och en pilspets. className bestämmer hur den ser ut (dg-dial-hand).
function drawHand(dial, hand, className) {
  const angle = dialAngle(dial, hand.value / hand.of);
  const length = (hand.length ?? 0.8) * dial.radius;
  const width = hand.width ?? dial.radius / 30;
  const tip = dialPoint(dial, angle, length);
  const head = Math.min(3 * width, 0.28 * length); // pilspetsen följer visarens bredd
  const half = 1.3 * width;
  const base = dialPoint(dial, angle, length - head);
  const [px, py] = [Math.cos(rad(angle)) * half, Math.sin(rad(angle)) * half]; // vinkelrätt mot visaren
  const g = svgEl("g", { class: className });
  if (hand.kind) g.dataset.hand = hand.kind;
  g.append(
    svgEl("line", { x1: round(dial.center[0]), y1: round(dial.center[1]), x2: round(base[0]), y2: round(base[1]), "stroke-width": round(width) }),
    svgEl("polygon", { points: [tip, [base[0] + px, base[1] + py], [base[0] - px, base[1] - py]].map((p) => p.map(round).join(",")).join(" ") }),
  );
  return g;
}


// Visartavlan som en SVG-grupp: urtavlan eller bågen, strecken, texterna och visarna. ghost är visare som ritas
// streckade i en grupp som syns först med "Visa rätt svar" (dg-ghost). Ger { el, hands } där hands är gruppen med
// visarna (buildClock ritar om dem där).
export function drawDial(dial, { ghost = [] } = {}) {
  const g = svgEl("g", { class: "dg-dial" });
  const { font, long, short, labelRadius } = dialSizes(dial);
  const [from, to] = sweepOf(dial);
  if (isFull(dial)) g.append(svgEl("circle", { class: "dg-dial-face", cx: dial.center[0], cy: dial.center[1], r: dial.radius }));
  else {
    const [a, b] = [dialPoint(dial, from, dial.radius), dialPoint(dial, to, dial.radius)];
    const large = Math.abs(to - from) > 180 ? 1 : 0;
    const clockwise = to > from ? 1 : 0;
    g.append(svgEl("path", { class: "dg-dial-arc", d: `M${round(a[0])} ${round(a[1])}A${round(dial.radius)} ${round(dial.radius)} 0 ${large} ${clockwise} ${round(b[0])} ${round(b[1])}` }));
  }
  for (const tick of dialTicks(dial)) {
    const angle = dialAngle(dial, tick.fraction);
    const [x1, y1] = dialPoint(dial, angle, dial.radius);
    const [x2, y2] = dialPoint(dial, angle, dial.radius - (tick.major ? long : short));
    g.append(svgEl("line", { class: `dg-dial-tick${tick.major ? " is-major" : ""}`, x1: round(x1), y1: round(y1), x2: round(x2), y2: round(y2) }));
  }
  if (ghost.length > 0) {
    const ghosts = svgEl("g", { class: "dg-ghost" });
    for (const hand of ghost) ghosts.append(drawHand(dial, hand, "dg-dial-hand dg-ghost-hand"));
    g.append(ghosts);
  }
  const hands = svgEl("g", { class: "dg-dial-hands" });
  for (const hand of dial.hands ?? []) hands.append(drawHand(dial, hand, handClass(hand)));
  g.append(hands);
  // Texterna efter visarna, med en kant i bakgrundens färg: en lång visare som pekar på en siffra går under den.
  for (const label of dialLabels(dial)) {
    const [x, y] = dialPoint(dial, dialAngle(dial, label.fraction), labelRadius * dial.radius);
    g.append(svgEl("text", { class: "dg-dial-label", x: round(x), y: round(y), "text-anchor": "middle", "dominant-baseline": "central", "font-size": round(font) }, label.text));
  }
  const widest = Math.max(0, ...(dial.hands ?? []).map((hand) => hand.width ?? dial.radius / 30));
  const pivot = isFull(dial) ? 0.05 * dial.radius : Math.max(1.3 * widest, 2);
  if (isFull(dial) || widest > 0) g.append(svgEl("circle", { class: "dg-dial-pivot", cx: dial.center[0], cy: dial.center[1], r: round(pivot) }));
  return { el: g, hands };
}

const handClass = (hand, selected = null) => `dg-dial-hand${hand.kind ? ` is-${hand.kind}` : ""}${hand.kind && hand.kind === selected ? " is-selected" : ""}`;

// En klocka som egen SVG (skärmen clock och resultatet), med visarna hands och ghost (clockHands).
function clockSvg({ hands = [], ghost = [], label = "Klocka", interactive = false } = {}) {
  const [width, height] = CLOCK_VIEW;
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, class: `dg-fig dg-clock${interactive ? " is-interactive" : ""}`, role: interactive ? "group" : "img", "aria-label": label });
  const dial = { ...clockDial(null), hands };
  const drawn = drawDial(dial, { ghost });
  svg.append(drawn.el);
  return { svg, dial, hands: drawn.hands };
}

function clockStage(svg) {
  const stage = el("div", "dg-fig-stage dg-clock-stage");
  stage.append(svg);
  return stage;
}

const RADIUS = clockDial(null).radius;
const MARK = HOUR / 5; // ett minutstreck för timvisaren, i enheter

// Visarna ur ett svar ({ minute, hour }); en visare som saknas ritas inte.
function handsOfAnswer(answers) {
  const hour = hourOf(answers?.hour);
  return clockHands(RADIUS, hour === null ? null : hour / MARK, minuteOf(answers?.minute));
}

// Facits visare på exakt rätt ställe (timvisaren mellan strecken för 5.40).
function exactHands(time) {
  const t = parseClockTime(time);
  return t === null ? [] : clockHands(RADIUS, ((t.h % 12) * 60 + t.m) / 12, t.m);
}

// ---------- SKÄRMEN ----------

export const CLOCK_HINT = "Välj visare och klicka på klockan där den ska peka.";
const HAND_NAMES = [["minute", "Lång visare"], ["hour", "Kort visare"]];

// Strecket (0–59) närmast en vinkel i grader medurs från tolv.
export const markAt = (angle) => (((Math.round(angle / 6) % 60) + 60) % 60);

// Skärmen för clock: två knappar som väljer visare (lång först) och en klocka utan visare. Ett klick eller drag på
// urtavlan sätter den valda visaren på närmaste streck; piltangenterna flyttar den ett streck. Den valda visaren har
// accentfärg. Svaret är { minute, hour } med "" för en visare som inte är satt; tomt är ett svar och fel (keepBlank).
// Fokus går till klockan, inte till Nästa (ett vanemässigt Enter skulle skicka in ett tomt svar).
export function buildClock(screen, root) {
  const set = { minute: null, hour: null }; // streck 0–59
  let selected = "minute";
  const { svg, dial, hands: layer } = clockSvg({ interactive: true, label: "Ställ visarna" });
  svg.setAttribute("tabindex", "0");

  const buttons = HAND_NAMES.map(([kind, name]) => {
    const button = el("button", "bt-symbol-btn dg-symbol-btn dg-hand-btn", name);
    button.type = "button";
    button.addEventListener("click", () => {
      selected = kind;
      paint();
    });
    return { kind, button };
  });

  let drawn = [];
  function paint() {
    for (const { kind, button } of buttons) button.setAttribute("aria-pressed", String(kind === selected));
    for (const node of drawn) node.remove();
    drawn = clockHands(dial.radius, set.hour, set.minute).map((hand) => drawHand(dial, hand, handClass(hand, selected)));
    layer.append(...drawn);
    const text = (kind) => (set[kind] === null ? "inte satt" : kind === "minute" ? `vid ${set.minute} minuter` : `vid ${hourText(set.hour).replace(",", " komma ")}`);
    svg.setAttribute("aria-label", `Ställ visarna. Lång visare ${text("minute")}, kort visare ${text("hour")}.`);
  }

  // Vinkeln (grader medurs från tolv) där pekaren är, eller null mitt i klockan där ingen riktning finns.
  const angleAt = (event) => {
    const rect = svg.getBoundingClientRect();
    const scale = CLOCK_VIEW[0] / rect.width;
    const x = (event.clientX - rect.left) * scale - dial.center[0];
    const y = (event.clientY - rect.top) * scale - dial.center[1];
    if (Math.hypot(x, y) < 0.08 * dial.radius) return null;
    return (Math.atan2(x, -y) * 180) / Math.PI;
  };
  const place = (event) => {
    const angle = angleAt(event);
    if (angle === null) return;
    set[selected] = markAt(angle);
    paint();
  };
  let dragging = false;
  svg.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    dragging = true;
    place(event);
    try {
      svg.setPointerCapture?.(event.pointerId); // draget fortsätter utanför klockan
    } catch {
      // en pekare som redan är släppt kan inte fångas; klicket räknas ändå
    }
  });
  svg.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    if (event.buttons === 0) return void (dragging = false); // knappen släpptes utanför sidan
    place(event);
  });
  const stop = () => {
    dragging = false;
  };
  for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) svg.addEventListener(type, stop);
  svg.addEventListener("keydown", (event) => {
    const step = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[event.key];
    if (step === undefined) return;
    event.preventDefault();
    set[selected] = ((((set[selected] ?? 0) + step) % 60) + 60) % 60;
    paint();
  });

  paint();
  const row = el("div", "dg-symbols dg-hand-btns");
  row.append(...buttons.map((b) => b.button));
  root.append(el("p", "dg-chart-hint", CLOCK_HINT), row, clockStage(svg));
  const read = () => ({ minute: set.minute === null ? "" : String(set.minute), hour: set.hour === null ? "" : hourText(set.hour) });
  return { read, focusFirst: () => svg.focus({ preventScroll: true }), keepBlank: true };
}

// ---------- RESULTATSKÄRMEN ----------

const textLine = (screen) => (screen.text ? [el("p", "dg-word-text", screen.text)] : []);

// Elevens visare; facits visare (på exakt rätt ställe) är streckade och syns först med "Visa rätt svar".
export function clockDetail(screen, row) {
  const hands = handsOfAnswer(row.answers);
  const { svg } = clockSvg({ hands, ghost: exactHands(screen.time), label: "Elevens visare" });
  const title = hands.length === 0 ? "Inga visare satta:" : hands.length === 1 ? "Bara en visare satt:" : "Elevens visare:";
  return [...textLine(screen), detailLine(title, clockStage(svg))];
}

// En överhoppad skärm: uppgiften och facits visare, som läggs i det dolda facitblocket.
export function clockSkipped(screen) {
  return [...textLine(screen), detailLine("Rätt:", clockStage(clockSvg({ hands: exactHands(screen.time), label: "Rätt tid" }).svg))];
}
