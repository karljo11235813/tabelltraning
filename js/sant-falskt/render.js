// Lägger in HTML i ett element och renderar LaTeX med KaTeX om det har laddats.
// Utan KaTeX (t.ex. utan internet) syns råtexten, men sidan fungerar.
const DELIMITERS = [
  { left: "\\[", right: "\\]", display: true },
  { left: "\\(", right: "\\)", display: false },
];

export function renderInto(element, html) {
  element.innerHTML = html;
  if (typeof window.renderMathInElement === "function") {
    window.renderMathInElement(element, { delimiters: DELIMITERS, throwOnError: false });
  }
}
