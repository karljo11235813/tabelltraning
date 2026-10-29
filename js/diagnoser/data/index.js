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

export const DIAGNOSES = [ag1, ag2, ag3, ag4, ag5, ag6, ag7, ag8, ag9, as1, as2, as3, as4, as5, as6, as7, as8, as9, as10, as11, aun1, aun2, aun3, aun4, aup1, aup2, aup3, aup4, aup5];

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
