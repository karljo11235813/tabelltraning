// Diagnoserna i Diamants ordning. Varje datafil lägger sin diagnos här.
import ag1 from "./aritmetik/ag1.js";
import ag2 from "./aritmetik/ag2.js";
import ag3 from "./aritmetik/ag3.js";
import ag4 from "./aritmetik/ag4.js";
import ag5 from "./aritmetik/ag5.js";
import ag6 from "./aritmetik/ag6.js";
import ag7 from "./aritmetik/ag7.js";
import ag8 from "./aritmetik/ag8.js";
import ag9 from "./aritmetik/ag9.js";
import as1 from "./aritmetik/as1.js";
import as2 from "./aritmetik/as2.js";
import as3 from "./aritmetik/as3.js";
import as4 from "./aritmetik/as4.js";
import as5 from "./aritmetik/as5.js";
import as6 from "./aritmetik/as6.js";
import as7 from "./aritmetik/as7.js";
import as8 from "./aritmetik/as8.js";
import as9 from "./aritmetik/as9.js";
import as10 from "./aritmetik/as10.js";
import as11 from "./aritmetik/as11.js";
import aun1 from "./aritmetik/aun1.js";
import aun2 from "./aritmetik/aun2.js";
import aun3 from "./aritmetik/aun3.js";
import aun4 from "./aritmetik/aun4.js";
import aup1 from "./aritmetik/aup1.js";
import aup2 from "./aritmetik/aup2.js";
import aup3 from "./aritmetik/aup3.js";
import aup4 from "./aritmetik/aup4.js";
import aup5 from "./aritmetik/aup5.js";
import rb1 from "./rationella/rb1.js";
import rb2 from "./rationella/rb2.js";
import rb3 from "./rationella/rb3.js";
import rb4 from "./rationella/rb4.js";
import rb5 from "./rationella/rb5.js";
import rb6 from "./rationella/rb6.js";
import rb7 from "./rationella/rb7.js";
import rd1 from "./rationella/rd1.js";
import rd2 from "./rationella/rd2.js";
import rd3 from "./rationella/rd3.js";
import rd4 from "./rationella/rd4.js";
import rd5 from "./rationella/rd5.js";
import rd6 from "./rationella/rd6.js";
import rp1 from "./rationella/rp1.js";
import rp2 from "./rationella/rp2.js";
import rp3 from "./rationella/rp3.js";
import rp4 from "./rationella/rp4.js";
import rp5 from "./rationella/rp5.js";
import rp6 from "./rationella/rp6.js";
import rp7 from "./rationella/rp7.js";

export const DIAGNOSES = [ag1, ag2, ag3, ag4, ag5, ag6, ag7, ag8, ag9, as1, as2, as3, as4, as5, as6, as7, as8, as9, as10, as11, aun1, aun2, aun3, aun4, aup1, aup2, aup3, aup4, aup5, rb1, rb2, rb3, rb4, rb5, rb6, rb7, rd1, rd2, rd3, rd4, rd5, rd6, rp1, rp2, rp3, rp4, rp5, rp6, rp7];

export function getDiagnosis(code) {
  return DIAGNOSES.find((d) => d.code === code);
}

// Startsidans grupper: [{ area, subs: [{ sub, codes }] }]. Områdena och delområdena kommer i den ordning
// de först förekommer i DIAGNOSES; områden utan diagnoser finns inte med.
export const AREAS = DIAGNOSES.reduce((areas, d) => {
  let area = areas.find((a) => a.area === d.area);
  if (!area) areas.push((area = { area: d.area, subs: [] }));
  let sub = area.subs.find((s) => s.sub === d.sub);
  if (!sub) area.subs.push((sub = { sub: d.sub, codes: [] }));
  sub.codes.push(d.code);
  return areas;
}, []);
