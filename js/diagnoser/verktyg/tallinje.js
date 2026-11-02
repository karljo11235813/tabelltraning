// Tallinjen bland tankeverktygen: eleven klickar på talet som räkningen börjar på och går sedan ett steg i taget. Varje steg ritas
// som ett hopp, så att eleven kan räkna hoppen och se åt vilket håll det gick. Verktyget räknar ingenting åt eleven: svaret läses
// av på linjen.
//
// Tillståndet är { start, hops }, där hops är +1 och -1 i den ordning de gjordes. Allt utom renderNumberLine är rent och testat, och
// DOM-koden rör `document` först när den anropas.
//
// Linjen rullar aldrig och står alltid på en rad. Ritningen är i bildpunkter efter panelens bredd, och alla streck finns kvar på varje
// bredd. Får talen inte plats visas i stället vartannat, vart femte eller vart tionde, så att de aldrig krockar (layoutFor), och talet
// man står på visas alltid (shownNumbers).
import { el, svgEl } from "../dom.js";

export const startAt = (start) => ({ start, hops: [] });
export const position = (state) => state.hops.reduce((sum, hop) => sum + hop, state.start);

// Ett steg åt höger (1) eller vänster (-1). Utanför linjen händer ingenting.
export function step(state, direction, { min, max }) {
  const next = position(state) + direction;
  return next < min || next > max ? state : { ...state, hops: [...state.hops, direction] };
}

// Talet som det står på linjen, med typografiskt minus.
export const numberText = (n) => (n < 0 ? `−${-n}` : String(n));

// Hoppen ihop till sträckor: 1, 1, -1 ger två steg åt höger och ett åt vänster.
export function legs(state) {
  const list = [];
  for (const direction of state.hops) {
    const last = list[list.length - 1];
    if (last?.direction === direction) last.count += 1;
    else list.push({ direction, count: 1 });
  }
  return list;
}

export function describe(state) {
  const parts = legs(state).map(({ direction, count }) => `${count} steg åt ${direction > 0 ? "höger" : "vänster"}`);
  return parts.length === 0 ? `Start ${numberText(state.start)}` : `Från ${numberText(state.start)}: ${parts.join(", ")}`;
}

// Hoppen som bågar. level är hur många hopp som redan gått över samma sträcka, så att en väg fram och tillbaka inte ritas ovanpå sig själv.
export function arcs(state) {
  const crossed = new Map();
  let at = state.start;
  return state.hops.map((direction) => {
    const from = at;
    at += direction;
    const segment = Math.min(from, at);
    const level = crossed.get(segment) ?? 0;
    crossed.set(segment, level + 1);
    return { from, to: at, direction, level };
  });
}

// Måtten i bildpunkter. PITCH är det minsta avstånd två tal bredvid varandra får ha för att inte läsas ihop.
const PAD = 14;
const PITCH = 25;
const INTERVALS = [1, 2, 5, 10];
const ROOM = 30; // höjden för bågarna ovanför linjen
const AXIS = ROOM + 3;
const MAX_LEVEL = 2;
const LABEL_GAP = 1.5;

const clamp = (value, low, high) => Math.min(high, Math.max(low, value));

// Formen för en linje i bredden width: step är avståndet mellan två streck och interval hur tätt talen står (1, 2, 5 eller 10). Talen
// står på multiplerna av interval, så att 0 och ändarna på en linje från −20 till 20 alltid är med.
export function layoutFor(width, { min, max }) {
  const step = (width - 2 * PAD) / (max - min);
  const interval = INTERVALS.find((candidate) => candidate * step >= PITCH) ?? INTERVALS[INTERVALS.length - 1];
  const font = clamp((interval * step) / 2.05, 11, interval > 2 ? 14 : 16);
  const number = AXIS + 6 + font;
  return { width, min, max, step, interval, font, number, height: number + 0.6 * font + 1 };
}

export const xOf = (layout, n) => PAD + (n - layout.min) * layout.step;

// Talet närmast en punkt på ritningen. Motsatsen till xOf.
export const numberAt = (layout, x) => clamp(layout.min + Math.round((x - PAD) / layout.step), layout.min, layout.max);

// Ringen runt ett tal. Den är smal runt en ensam siffra, också med minustecken, så att 0 får stå kvar när man står två steg från den på en telefon.
const dotRadius = (n, font) => (Math.abs(n) < 10 ? 0.68 : 0.95) * font;

// Talen som står utskrivna just nu. Talet man står på går först, sedan start och 0 och sist de vanliga multiplerna, och ett tal som
// skulle krocka med ett tal före sig visas inte. Ett tal med en ring eller en prick runt sig tar ringens bredd.
export function shownNumbers(layout, state) {
  const { min, max, step, interval, font } = layout;
  const here = position(state);
  const textHalf = (n) => 0.3 * font * numberText(n).length;
  const halfWidth = (n) => (n === here || n === state.start ? Math.max(dotRadius(n, font), textHalf(n)) : textHalf(n));
  const regular = Array.from({ length: max - min + 1 }, (_, i) => min + i).filter((n) => n % interval === 0);
  const shown = new Set();
  for (const n of [here, state.start, 0, ...regular]) {
    if ([...shown].every((m) => m !== n && Math.abs(n - m) * step >= halfWidth(n) + halfWidth(m) + LABEL_GAP)) shown.add(n);
  }
  return shown;
}

// Bågen från x1 till x2 ovanför linjen, med en pil som pekar längs bågens slut.
function arcNodes(x1, x2, level, left) {
  const span = Math.abs(x2 - x1);
  const lift = 2 * (Math.min(1.1 * span, 0.45 * ROOM) + (ROOM / 5) * Math.min(level, MAX_LEVEL));
  const middle = (x1 + x2) / 2;
  const base = AXIS - 3;
  const tip = x2 + (left ? 1 : -1);
  const size = Math.max(3.5, Math.min(0.42 * span, 8));
  const length = Math.hypot(tip - middle, lift);
  const [ux, uy] = [(tip - middle) / length, lift / length];
  const corner = (side) => `${tip - size * ux + side * 0.55 * size * uy} ${base - size * uy - side * 0.55 * size * ux}`;
  return [
    svgEl("path", { class: `dg-nl-hop${left ? " is-left" : ""}`, d: `M${x1} ${base} Q${middle} ${base - lift} ${tip} ${base}` }),
    svgEl("path", { class: "dg-nl-arrow", d: `M${tip} ${base} L${corner(1)} L${corner(-1)} Z` }),
  ];
}

// Ritar linjen från min till max i host. Ett klick på ett streck gör det till start, och fingret eller musen kan dras längs linjen,
// eftersom ett finger är bredare än avståndet mellan två streck på en telefon. Pilarna flyttar ett steg, och Rensa tar bort hoppen men
// står kvar, så att man med tangentbordet kan välja start.
export function renderNumberLine(host, range) {
  const { min, max } = range;
  let state = startAt(0);
  let layout = null;
  const numbers = new Map();

  const svg = svgEl("svg", { class: "dg-nl", role: "slider", tabindex: "0", "aria-label": "Tallinje", "aria-valuemin": min, "aria-valuemax": max });
  const hops = svgEl("g");

  // Bygger ritningen för bredden. Körs igen när panelens bredd ändras, till exempel när telefonen vrids.
  function build(width) {
    layout = layoutFor(width, range);
    svg.setAttribute("viewBox", `0 0 ${width} ${layout.height}`);
    const nodes = [svgEl("line", { class: "dg-nl-axis", x1: 0, x2: width, y1: AXIS, y2: AXIS })];
    numbers.clear();
    for (let n = min; n <= max; n++) {
      const x = xOf(layout, n);
      const tall = n === 0 ? 8 : n % 5 === 0 ? 6 : 4;
      const size = n === 0 ? 1.12 * layout.font : layout.font;
      const dot = svgEl("circle", { class: "dg-nl-dot", cx: x, cy: layout.number - 0.35 * layout.font, r: dotRadius(n, layout.font) });
      const text = svgEl("text", { class: `dg-nl-number${n === 0 ? " is-zero" : ""}`, x, y: layout.number, "text-anchor": "middle", "font-size": size }, numberText(n));
      numbers.set(n, { text, dot });
      nodes.push(svgEl("line", { class: "dg-nl-tick", x1: x, x2: x, y1: AXIS - tall, y2: AXIS + tall }), dot, text);
    }
    svg.replaceChildren(...nodes, hops);
  }

  const box = el("div", "dg-nl-box");
  box.append(svg);
  const status = el("span", "dg-nl-status");
  status.setAttribute("aria-live", "polite");
  const stepButton = (text, label, direction) => {
    const node = el("button", "bt-small-btn dg-nl-step", text);
    node.type = "button";
    node.setAttribute("aria-label", label);
    node.addEventListener("click", () => move(direction));
    return node;
  };
  const left = stepButton("← 1 steg", "Ett steg åt vänster", -1);
  const right = stepButton("1 steg →", "Ett steg åt höger", 1);
  const clear = el("button", "bt-small-btn", "Rensa");
  clear.type = "button";
  clear.addEventListener("click", () => {
    state = startAt(position(state));
    draw();
  });
  const controls = el("div", "dg-nl-controls");
  controls.append(left, right, clear, status);
  host.replaceChildren(controls, box);
  // Pilarna fungerar var fokus än står i verktyget, och når aldrig sidan (Öva går annars till nästa uppgift).
  host.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    move(e.key === "ArrowLeft" ? -1 : 1);
  });

  const pick = (e) => {
    if (layout === null) return;
    const n = numberAt(layout, e.clientX - svg.getBoundingClientRect().left);
    if (n === state.start && state.hops.length === 0) return;
    state = startAt(n);
    draw();
  };
  svg.addEventListener("pointerdown", pick);
  svg.addEventListener("pointermove", (e) => {
    if (e.buttons) pick(e);
  });

  function move(direction) {
    state = step(state, direction, range);
    draw();
  }

  function draw() {
    const here = position(state);
    if (layout !== null) {
      const shown = shownNumbers(layout, state);
      for (const [n, { text, dot }] of numbers) {
        text.classList.toggle("is-off", !shown.has(n));
        text.classList.toggle("is-here", n === here);
        dot.classList.toggle("is-here", n === here);
        dot.classList.toggle("is-start", n === state.start && n !== here && shown.has(n));
      }
      hops.replaceChildren(...arcs(state).flatMap(({ from, to, direction, level }) => arcNodes(xOf(layout, from), xOf(layout, to), level, direction < 0)));
    }
    svg.setAttribute("aria-valuenow", here);
    svg.setAttribute("aria-valuetext", numberText(here));
    status.textContent = describe(state);
    left.disabled = here <= min;
    right.disabled = here >= max;
  }

  new ResizeObserver(([entry]) => {
    const { width } = entry.contentRect;
    if (width === 0 || width === layout?.width) return;
    build(width);
    draw();
  }).observe(box);
  draw();
}
