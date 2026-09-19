// MathViz — dependency-free rectangle/array visualizations for multiplication
// and division facts, meant to be dropped into any page as an optional help.
//
// Not an ES module on purpose: some pages that want this (textuppgifter.html,
// decimaltal.html) are plain inline-script pages, not module pages. Include it
// with a plain <script src="js/visualize.js"></script> BEFORE any script that
// calls it, and it attaches itself as `window.MathViz`.
//
// Colors are read from the host page's own CSS custom properties
// (--accent, --success, --border, --text, ...) via getComputedStyle, so the
// visualization automatically matches whichever page/theme it's placed in
// instead of carrying its own hardcoded palette.
//
// API:
//   MathViz.renderMultiplication(target, a, b)
//     Draws a single a-row by b-column rectangle of unit squares — the
//     array model for a × b.
//
//   MathViz.renderDivision(target, dividend, divisor)
//     For a fact like 56 ÷ 7, draws ONE (dividend/divisor)-row by
//     divisor-column rectangle for the dividend (with the row boundaries
//     emphasized), and — below a fraction bar — ONE 1-row by divisor-column
//     strip for the divisor. Both share the same column width, so a student
//     can see directly how many times the bottom strip "fits" into the top
//     rectangle: that count is the quotient (innehållsdivision).
//
// `target` is a DOM element or an element id string. Both functions clear
// the target and render a self-contained, responsive SVG into it.

(function (global) {
  'use strict';

  function themeColor(varName, fallback) {
    try {
      const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      return v || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function svgEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const key in attrs) el.setAttribute(key, attrs[key]);
    return el;
  }

  function resolveTarget(target) {
    return typeof target === 'string' ? document.getElementById(target) : target;
  }

  const MAX_CELL = 26;
  const MIN_CELL = 12;
  const MAX_SPAN = 300; // px budget for the longer grid dimension

  function cellSizeFor(cols, rows) {
    const maxDim = Math.max(cols, rows, 1);
    return Math.max(MIN_CELL, Math.min(MAX_CELL, Math.floor(MAX_SPAN / maxDim)));
  }

  // Draws a rows×cols block as individual unit-square boxes at (x0, y0) —
  // each cell is its own <rect>, not a single rect sliced by lines — plus a
  // strong outer border around the whole block.
  // `boldRowLines`: draw the boundary between each row heavier than the
  // individual cell borders, so each row visually reads as its own group.
  function drawCells(svg, x0, y0, rows, cols, cell, colors, boldRowLines) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        svg.appendChild(svgEl('rect', {
          x: x0 + c * cell, y: y0 + r * cell, width: cell, height: cell,
          fill: colors.fill, stroke: colors.line, 'stroke-width': 1,
        }));
      }
    }
    svg.appendChild(svgEl('rect', {
      x: x0, y: y0, width: cols * cell, height: rows * cell,
      fill: 'none', stroke: colors.strong, 'stroke-width': 2, rx: 3,
    }));
    if (boldRowLines) {
      for (let r = 1; r < rows; r++) {
        svg.appendChild(svgEl('line', {
          x1: x0, y1: y0 + r * cell, x2: x0 + cols * cell, y2: y0 + r * cell,
          stroke: colors.strong, 'stroke-width': 2,
        }));
      }
    }
  }

  function caption(svg, cx, y, str, fill) {
    const t = svgEl('text', {
      x: cx, y: y, 'text-anchor': 'middle',
      'font-family': '"Baloo 2", sans-serif', 'font-size': 15, 'font-weight': 700, fill: fill,
    });
    t.textContent = str;
    svg.appendChild(t);
  }

  function baseSvg(w, h, label) {
    return svgEl('svg', {
      viewBox: '0 0 ' + w + ' ' + h, style: 'width:100%;height:auto;display:block',
      role: 'img', 'aria-label': label,
    });
  }

  function renderMultiplication(target, a, b) {
    const el = resolveTarget(target);
    a = Math.round(a); b = Math.round(b);
    if (!el || !(a > 0) || !(b > 0)) return;
    el.innerHTML = '';

    const colors = {
      fill: themeColor('--accent-soft', '#ece0f5'),
      strong: themeColor('--accent', '#7a4a8c'),
      line: themeColor('--border', '#d8cfe0'),
    };
    const text = themeColor('--text', '#221b28');

    const rows = a, cols = b;
    const cell = cellSizeFor(cols, rows);
    const pad = 20;
    const w = cols * cell + pad * 2;
    const h = pad + rows * cell + 32;

    const svg = baseSvg(w, h, a + ' gånger ' + b);
    drawCells(svg, pad, pad, rows, cols, cell, colors, false);
    caption(svg, w / 2, h - 8, a + ' × ' + b, text);
    el.appendChild(svg);
  }

  function renderDivision(target, dividend, divisor) {
    const el = resolveTarget(target);
    dividend = Math.round(dividend); divisor = Math.round(divisor);
    if (!el || !(divisor > 0)) return;
    const quotient = dividend / divisor;
    if (!Number.isInteger(quotient) || quotient <= 0) { el.innerHTML = ''; return; }
    el.innerHTML = '';

    const numColors = {
      fill: themeColor('--accent-soft', '#ece0f5'),
      strong: themeColor('--accent', '#7a4a8c'),
      line: themeColor('--border', '#d8cfe0'),
    };
    const denColors = {
      fill: themeColor('--success-soft', '#e6f5ef'),
      strong: themeColor('--success', '#2f8f6f'),
      line: themeColor('--border', '#d8cfe0'),
    };
    const text = themeColor('--text', '#221b28');
    const textMuted = themeColor('--text-muted', '#6f6478');

    const cols = divisor, rows = quotient;
    const cell = cellSizeFor(cols, rows);
    const labelGutter = String(rows).length * 8 + 10;
    const pad = 20;
    const gridW = cols * cell;
    const gridH = rows * cell;
    const barGap = 10;
    const stripH = cell;

    const w = pad + labelGutter + gridW + pad;
    const h = pad + gridH + barGap + 4 + barGap + stripH + 32;

    const svg = baseSvg(w, h, dividend + ' delat med ' + divisor);
    const gx = pad + labelGutter;

    drawCells(svg, gx, pad, rows, cols, cell, numColors, true);

    // Row numbers 1..quotient beside the numerator, one per row-group.
    for (let r = 0; r < rows; r++) {
      const t = svgEl('text', {
        x: gx - 8, y: pad + r * cell + cell / 2 + 4, 'text-anchor': 'end',
        'font-family': '"Nunito Sans", sans-serif', 'font-size': 11, fill: textMuted,
      });
      t.textContent = String(r + 1);
      svg.appendChild(t);
    }

    const barY = pad + gridH + barGap;
    svg.appendChild(svgEl('line', {
      x1: gx - 6, y1: barY, x2: gx + gridW + 6, y2: barY,
      stroke: text, 'stroke-width': 3, 'stroke-linecap': 'round',
    }));

    const stripY = barY + barGap;
    drawCells(svg, gx, stripY, 1, cols, cell, denColors, false);

    caption(svg, w / 2, h - 8, dividend + ' ÷ ' + divisor, text);
    el.appendChild(svg);
  }

  global.MathViz = {
    renderMultiplication: renderMultiplication,
    renderDivision: renderDivision,
  };
})(window);
