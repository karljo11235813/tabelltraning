// Små DOM-hjälpare som figurkoden (figures.js) och grafkoden (graph.js) delar. Inget här rör `document` när
// modulen laddas, så att node kan importera den för testerna.
//
// el          ett HTML-element med klass och text.
// svgEl       ett SVG-element med attribut.
// detailLine  en rad på resultatskärmen: en fet etikett och sedan innehållet.

const SVG_NS = "http://www.w3.org/2000/svg";

export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

export function svgEl(tag, attrs = {}, text) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  if (text != null) node.textContent = text;
  return node;
}

export function detailLine(label, ...nodes) {
  const line = el("p", "dg-detail-line");
  line.append(el("span", "dg-detail-label", `${label} `), ...nodes);
  return line;
}
