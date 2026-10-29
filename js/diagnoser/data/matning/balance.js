// En balansvåg som figur (MMa1 1, MMa2 1): bom, stolpe, fot och två vågskålar med det som ligger i dem. Ingen diagnos;
// datafilerna i Mätning av massa bygger sina figurer med den.
//
// balance({ tilt, left, right, labels }) ger { view, pieces, lines, labels } (se figures.js).
//   tilt    hur mycket den vänstra skålen hänger lägre än den högra (0 = jämvikt, positivt = vänster är tyngst).
//   left, right  det som ligger i skålen: { box: [bredd, höjd] }, { ball: radie } eller { weight: [bredd, höjd] }
//           (en vikt med ring), med dx (förskjutning från skålens mitt, standard 0).
//   labels  texter under skålarna: { side: "left" | "right", dx, text } ("5 kg").

const VIEW = [420, 215];
const PIVOT = [210, 40];
const ARM = 112;
const PAN_DROP = 100; // från bommen ner till skålens kant
const PAN_HALF = 92;

const r1 = (v) => Math.round(v * 10) / 10;

function item(thing, cx, y) {
  const x = cx + (thing.dx ?? 0);
  if (thing.box) {
    const [w, h] = thing.box;
    return [{ path: `M${r1(x - w / 2)} ${r1(y - h)}H${r1(x + w / 2)}V${r1(y)}H${r1(x - w / 2)}Z` }];
  }
  if (thing.ball) return [{ circle: [r1(x), r1(y - thing.ball), thing.ball] }];
  const [w, h] = thing.weight;
  const top = w * 0.36; // vikten smalnar uppåt
  const ring = Math.max(3, Math.round(w / 7));
  return [
    { path: `M${r1(x - w / 2)} ${r1(y)}L${r1(x - top)} ${r1(y - h)}H${r1(x + top)}L${r1(x + w / 2)} ${r1(y)}Z` },
    { circle: [r1(x), r1(y - h - ring), ring] },
  ];
}

export function balance({ tilt = 0, left = [], right = [], labels = [] }) {
  const [px, py] = PIVOT;
  const ends = { left: [px - ARM, py + tilt], right: [px + ARM, py - tilt] };
  const pans = { left: ends.left[1] + PAN_DROP, right: ends.right[1] + PAN_DROP };
  const pieces = [
    { path: `M${ends.left[0]} ${ends.left[1] - 3}L${ends.right[0]} ${ends.right[1] - 3}L${ends.right[0]} ${ends.right[1] + 3}L${ends.left[0]} ${ends.left[1] + 3}Z` },
    { path: `M${px - 4} ${py + 6}H${px + 4}V190H${px - 4}Z` },
    { path: `M${px - 40} 205Q${px} 180 ${px + 40} 205Z` },
    { circle: [px, py, 6] },
  ];
  const lines = [];
  for (const side of ["left", "right"]) {
    const [ex, ey] = ends[side];
    const y = pans[side];
    pieces.push({ path: `M${ex - PAN_HALF} ${y}H${ex + PAN_HALF}Q${ex} ${y + 35} ${ex - PAN_HALF} ${y}Z` });
    lines.push(`M${ex} ${ey + 3}L${ex - PAN_HALF + 5} ${y}M${ex} ${ey + 3}L${ex + PAN_HALF - 5} ${y}`);
    for (const thing of side === "left" ? left : right) pieces.push(...item(thing, ex, y));
  }
  return {
    view: VIEW,
    pieces,
    lines,
    labels: labels.map(({ side, dx = 0, text }) => ({ at: [ends[side][0] + dx, pans[side] + 45], text })),
  };
}
