// Bladets figurer som bilder (images på skärmen), utklippta ur 5_Geometri.pdf med PyMuPDF (3x, WebP). Ingen diagnos;
// datafilerna i Geometri hämtar sina bilder med den. width är bildens bredd på bladet i CSS-pixlar (punkter · 4/3).
const IMG = "img/diagnoser/geometri/";

export const sheet = (name, width, alt) => ({ src: `${IMG}${name}.webp`, alt, width });

// Ett flerval där alternativen är bokstäverna i bladets bild (a, b, c …).
export const letters = (ids) => ids.map((id) => ({ id, markup: id }));
