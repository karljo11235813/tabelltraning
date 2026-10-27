// Gemensamt för kategorierna.

// Provar make() tills den ger något annat än null.
export function sample(make, tries = 2000) {
  for (let i = 0; i < tries; i++) {
    const x = make();
    if (x !== null) return x;
  }
  throw new Error("Hittade inga tal som passar villkoren");
}
