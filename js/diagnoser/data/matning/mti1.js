// DIAGNOS MTi1, Analog tid.
// Elevbladet är s. 15, lärarsidan s. 14 och facit står på s. 14 i 4_Matning.pdf.
//
// 12 kolumner på resultatblanketten (s. 16): 1a–1c, 2a–2c och 3a–3f, en skärm och en kolumn var.
// 1a–c: bladets tre klockor (figure.clock) och en klockslagsruta (time). Facit godtar analog och digital tid
// ("Kvart över åtta", "8.15"), och klockan jämförs på tolv timmar, så 20.15 är också rätt.
// 2a–c: eleven sätter visarna på en tom klocka (kind "clock").
// 3a–f: textuppgifter med bara Svar; enheten efter talet ("4 kvartar") ignoreras.
//
// Lärarsidan säger "avbryta diagnosen efter cirka 7–8 minuter"; stop är 8.
// Tryckfel på bladet: 3d "Hur minuter är en kvart?" skrivs "Hur många minuter är en kvart?".
export default {
  code: "MTi1",
  area: "Mätning",
  sub: "MTi Mätning av tid",
  title: "Analog tid",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Hur mycket är klockan?",
      points: "each",
      figure: { clock: "8.15" },
      boxes: { a: { accept: ["Kvart över åtta", "15 minuter över åtta", "8.15"], time: "8.15" } },
    },
    {
      label: "1b",
      text: "Hur mycket är klockan?",
      points: "each",
      figure: { clock: "4.55" },
      boxes: { a: { accept: ["Fem minuter i fem", "4.55", "16.55"], time: "4.55" } },
    },
    {
      label: "1c",
      text: "Hur mycket är klockan?",
      points: "each",
      figure: { clock: "2.35" },
      boxes: { a: { accept: ["Fem minuter över halv tre", "25 minuter i tre", "2.35", "14.35"], time: "2.35" } },
    },
    { label: "2a", kind: "clock", text: "Rita hur visarna står när klockan är kvart över 12.", time: "12.15" },
    { label: "2b", kind: "clock", text: "Rita hur visarna står när klockan är 20 minuter i 6.", time: "5.40" },
    { label: "2c", kind: "clock", text: "Rita hur visarna står när klockan är 5 minuter i halv 9.", time: "8.25" },
    { label: "3a", text: "Hur många kvartar är en timma?", points: "each", boxes: { a: { accept: ["4"] } } },
    { label: "3b", text: "Hur många minuter är en halv timma?", points: "each", boxes: { a: { accept: ["30"] } } },
    { label: "3c", text: "Hur många sekunder är en minut?", points: "each", boxes: { a: { accept: ["60"] } } },
    { label: "3d", text: "Hur många minuter är en kvart?", points: "each", boxes: { a: { accept: ["15"] } } },
    { label: "3e", text: "Hur många minuter är en och en halv timma?", points: "each", boxes: { a: { accept: ["90"] } } },
    { label: "3f", text: "Hur många timmar är ett dygn?", points: "each", boxes: { a: { accept: ["24"] } } },
  ],
};
