// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAe5.
export default {
  "code": "TAe5",
  "parts": [
    {
      "id": "enkla",
      "title": "Enkla olikheter",
      "labels": [
        "1a",
        "1b",
        "1c",
        "1d"
      ]
    },
    {
      "id": "mer",
      "title": "Mer sammansatta olikheter",
      "labels": [
        "2a",
        "2b",
        "2c",
        "2d"
      ]
    },
    {
      "id": "andragrad-brak",
      "title": "Andragrad och bråk",
      "labels": [
        "3a",
        "3b",
        "3c",
        "3d"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tae5-enkla-e7ddcc53",
      "part": "enkla",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "-2x < 6    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x > -3"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Dela båda sidor med −2 och vänd olikheten: x > −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x < -3"
          },
          "text": "När man delar med ett negativt tal vänds olikhetstecknet: x > −3. Pröva x = 0: 0 < 6."
        }
      ]
    },
    {
      "id": "tae5-enkla-6699283d",
      "part": "enkla",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "4x < -8    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x < -2"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Dela båda sidor med 4: x < −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x > -2"
          },
          "text": "Att dela med ett positivt tal vänder inte olikheten: x < −2."
        }
      ]
    },
    {
      "id": "tae5-enkla-21f9c567",
      "part": "enkla",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "-3x > 12    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x < -4"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Dela båda sidor med −3. När man delar med ett negativt tal vänds olikheten: x < −4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x > -4"
          },
          "text": "När man delar med ett negativt tal vänds olikhetstecknet: x < −4. Pröva x = −5: 15 > 12."
        }
      ]
    },
    {
      "id": "tae5-enkla-d752c41c",
      "part": "enkla",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "x - 6 < 3x    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x > -3"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Dra bort x: −6 < 2x."
        },
        {
          "text": "Dela med 2: −3 < x, alltså x > −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x < -3"
          },
          "text": "−3 < x betyder att x är större än −3: x > −3."
        }
      ]
    },
    {
      "id": "tae5-enkla-07c22143",
      "part": "enkla",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "5x > 15    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x > 3"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Dela båda sidor med 5: x > 3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae5-enkla-46326f62",
      "part": "enkla",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "5x + 2 > 4x    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x > -2"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Dra bort 4x: x + 2 > 0."
        },
        {
          "text": "Dra bort 2: x > −2."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae5-mer-76f5df96",
      "part": "mer",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "5x - 4 ≥ 2x + 8    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x ≥ 4"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Dra bort 2x: 3x − 4 ≥ 8."
        },
        {
          "text": "Lägg till 4: 3x ≥ 12, så x ≥ 4."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae5-mer-44351fbe",
      "part": "mer",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "2(x - 3) ≤ 3x - 1    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x ≥ -5"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Multiplicera in 2: 2x − 6 ≤ 3x − 1."
        },
        {
          "text": "Dra bort 2x och lägg till 1: −5 ≤ x, alltså x ≥ −5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x ≤ -5"
          },
          "text": "−5 ≤ x betyder att x är större än eller lika med −5: x ≥ −5."
        }
      ]
    },
    {
      "id": "tae5-mer-543591f7",
      "part": "mer",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "6 - x ≤ 2x + 3    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x ≥ 1"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Lägg till x: 6 ≤ 3x + 3."
        },
        {
          "text": "Dra bort 3: 3 ≤ 3x, så x ≥ 1."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae5-mer-842cffae",
      "part": "mer",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "5 - 4x ≥ 2 - 2x    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x ≤ 1,5"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Lägg till 4x: 5 ≥ 2 + 2x."
        },
        {
          "text": "Dra bort 2: 3 ≥ 2x, så x ≤ 1,5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x ≥ 1,5"
          },
          "text": "3 ≥ 2x betyder att 2x är högst 3: x ≤ 1,5."
        }
      ]
    },
    {
      "id": "tae5-mer-fdcbddda",
      "part": "mer",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "3(x + 1) ≥ 3x + 3    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "alla x"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Multiplicera in 3: 3x + 3 ≥ 3x + 3. Sidorna är lika, så det stämmer för alla x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x ≥ 0"
          },
          "text": "Det stämmer också för negativa x: sidorna är alltid lika."
        }
      ]
    },
    {
      "id": "tae5-mer-3b8a1ea2",
      "part": "mer",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "3(x + 2) < 3x + 1    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "saknar lösning"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Multiplicera in 3: 3x + 6 < 3x + 1. Dra bort 3x: 6 < 1, och det stämmer aldrig."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "alla x"
          },
          "text": "6 < 1 stämmer aldrig, så inget x fungerar."
        }
      ]
    },
    {
      "id": "tae5-andragrad-brak-6db583bc",
      "part": "andragrad-brak",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "{x|3} > -2    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x > -6"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Multiplicera båda sidor med 3: x > −6."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae5-andragrad-brak-19d64cf8",
      "part": "andragrad-brak",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "{2|x} < 4    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x > 0,5 eller x < 0"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "För positiva x: 2 < 4x, så x > 0,5."
        },
        {
          "text": "För negativa x är 2/x negativt och alltid mindre än 4. Svaret är x > 0,5 eller x < 0."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x > 0,5"
          },
          "text": "Också negativa x fungerar: 2/(−1) = −2 < 4."
        }
      ]
    },
    {
      "id": "tae5-andragrad-brak-dfb515f1",
      "part": "andragrad-brak",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "x^2 > 25    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x < -5 eller x > 5"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "x² > 25 när x ligger längre från 0 än 5, åt något håll: x < −5 eller x > 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x > 5"
          },
          "text": "Också negativa tal fungerar: (−6)² = 36 > 25. Så x < −5 eller x > 5."
        }
      ]
    },
    {
      "id": "tae5-andragrad-brak-5c9ea4d4",
      "part": "andragrad-brak",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "(x - 2)^2 > 0    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x ≠ 2"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "En kvadrat är positiv utom när det som kvadreras är 0: x − 2 = 0 när x = 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x > 2"
          },
          "text": "Också x < 2 fungerar: (0 − 2)² = 4 > 0. Bara x = 2 ger 0."
        }
      ]
    },
    {
      "id": "tae5-andragrad-brak-c8fa6b43",
      "part": "andragrad-brak",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "{x|-2} < -3    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x > 6"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "Multiplicera båda sidor med −2 och vänd olikheten: x > 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x < 6"
          },
          "text": "När man multiplicerar med ett negativt tal vänds olikhetstecknet: x > 6."
        }
      ]
    },
    {
      "id": "tae5-andragrad-brak-85c65063",
      "part": "andragrad-brak",
      "text": "Lös olikheten.",
      "points": "each",
      "rows": [
        "x^2 < 9    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3 < x < 3"
          ],
          "inequality": "x"
        }
      },
      "solution": [
        {
          "text": "x² < 9 när x ligger närmare 0 än 3, åt båda hållen: −3 < x < 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x < 3"
          },
          "text": "Också x = −4 ger x < 3, men (−4)² = 16 är inte mindre än 9. x måste vara större än −3 också."
        }
      ]
    }
  ]
};
