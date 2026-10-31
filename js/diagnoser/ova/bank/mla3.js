// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till MLä3.
export default {
  "code": "MLä3",
  "parts": [
    {
      "id": "heltal",
      "title": "Byt enhet, hela tal",
      "labels": [
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f"
      ]
    },
    {
      "id": "decimal",
      "title": "Byt enhet, decimaltal",
      "labels": [
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f"
      ]
    },
    {
      "id": "ger-decimal",
      "title": "Byt enhet, svaret är ett decimaltal",
      "labels": [
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f"
      ]
    }
  ],
  "tasks": [
    {
      "id": "mla3-heltal-db6556cd",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "7 m = [a] mm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7000"
          ]
        }
      },
      "solution": [
        {
          "text": "1 m är 1000 mm, så 7 m är 7 · 1000 = 7000 mm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,007"
          },
          "text": "Du räknade åt fel håll. mm är en mindre enhet än m, så det blir fler mm."
        }
      ]
    },
    {
      "id": "mla3-heltal-f4d268e4",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "6 dm = [a] cm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "60"
          ]
        }
      },
      "solution": [
        {
          "text": "1 dm är 10 cm, så 6 dm är 6 · 10 = 60 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,6"
          },
          "text": "Du räknade åt fel håll. cm är en mindre enhet än dm, så det blir fler cm."
        }
      ]
    },
    {
      "id": "mla3-heltal-df672c9c",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "3 m = [a] dm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30"
          ]
        }
      },
      "solution": [
        {
          "text": "1 m är 10 dm, så 3 m är 3 · 10 = 30 dm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,3"
          },
          "text": "Du räknade åt fel håll. dm är en mindre enhet än m, så det blir fler dm."
        }
      ]
    },
    {
      "id": "mla3-heltal-714b1f3d",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "5 m = [a] cm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "500"
          ]
        }
      },
      "solution": [
        {
          "text": "1 m är 100 cm, så 5 m är 5 · 100 = 500 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,05"
          },
          "text": "Du räknade åt fel håll. cm är en mindre enhet än m, så det blir fler cm."
        }
      ]
    },
    {
      "id": "mla3-heltal-a13480bc",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "9 cm = [a] mm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "90"
          ]
        }
      },
      "solution": [
        {
          "text": "1 cm är 10 mm, så 9 cm är 9 · 10 = 90 mm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,9"
          },
          "text": "Du räknade åt fel håll. mm är en mindre enhet än cm, så det blir fler mm."
        }
      ]
    },
    {
      "id": "mla3-heltal-686b9380",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "4 km = [a] m"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4000"
          ]
        }
      },
      "solution": [
        {
          "text": "1 km är 1000 m, så 4 km är 4 · 1000 = 4000 m."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,004"
          },
          "text": "Du räknade åt fel håll. m är en mindre enhet än km, så det blir fler m."
        }
      ]
    },
    {
      "id": "mla3-decimal-86662361",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "3,5 cm = [a] mm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "35"
          ]
        }
      },
      "solution": [
        {
          "text": "1 cm är 10 mm, så 3,5 cm är 3,5 · 10 = 35 mm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,35"
          },
          "text": "Du räknade åt fel håll. mm är en mindre enhet än cm, så det blir fler mm."
        }
      ]
    },
    {
      "id": "mla3-decimal-3beb41ec",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "3,6 mil = [a] km"
      ],
      "boxes": {
        "a": {
          "accept": [
            "36"
          ]
        }
      },
      "solution": [
        {
          "text": "1 mil är 10 km, så 3,6 mil är 3,6 · 10 = 36 km."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,36"
          },
          "text": "Du räknade åt fel håll. km är en mindre enhet än mil, så det blir fler km."
        }
      ]
    },
    {
      "id": "mla3-decimal-b892d2af",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "4,07 m = [a] mm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4070"
          ]
        }
      },
      "solution": [
        {
          "text": "1 m är 1000 mm, så 4,07 m är 4,07 · 1000 = 4070 mm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00407"
          },
          "text": "Du räknade åt fel håll. mm är en mindre enhet än m, så det blir fler mm."
        }
      ]
    },
    {
      "id": "mla3-decimal-9c54916c",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "2,48 m = [a] cm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "248"
          ]
        }
      },
      "solution": [
        {
          "text": "1 m är 100 cm, så 2,48 m är 2,48 · 100 = 248 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0248"
          },
          "text": "Du räknade åt fel håll. cm är en mindre enhet än m, så det blir fler cm."
        }
      ]
    },
    {
      "id": "mla3-decimal-2d1ac1e4",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "2,5 m = [a] dm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "25"
          ]
        }
      },
      "solution": [
        {
          "text": "1 m är 10 dm, så 2,5 m är 2,5 · 10 = 25 dm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,25"
          },
          "text": "Du räknade åt fel håll. dm är en mindre enhet än m, så det blir fler dm."
        }
      ]
    },
    {
      "id": "mla3-decimal-a0f6c26d",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "6,3 dm = [a] cm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "63"
          ]
        }
      },
      "solution": [
        {
          "text": "1 dm är 10 cm, så 6,3 dm är 6,3 · 10 = 63 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,63"
          },
          "text": "Du räknade åt fel håll. cm är en mindre enhet än dm, så det blir fler cm."
        }
      ]
    },
    {
      "id": "mla3-ger-decimal-70830e2d",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "6,5 mm = [a] dm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,065"
          ]
        }
      },
      "solution": [
        {
          "text": "100 mm är 1 dm, så 6,5 mm är 6,5 / 100 = 0,065 dm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "650"
          },
          "text": "Du räknade åt fel håll. dm är en större enhet än mm, så det blir färre dm."
        }
      ]
    },
    {
      "id": "mla3-ger-decimal-254692b0",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "350 mm = [a] dm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,5"
          ]
        }
      },
      "solution": [
        {
          "text": "100 mm är 1 dm, så 350 mm är 350 / 100 = 3,5 dm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "35 000"
          },
          "text": "Du räknade åt fel håll. dm är en större enhet än mm, så det blir färre dm."
        }
      ]
    },
    {
      "id": "mla3-ger-decimal-47b41cae",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "45 dm = [a] m"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,5"
          ]
        }
      },
      "solution": [
        {
          "text": "10 dm är 1 m, så 45 dm är 45 / 10 = 4,5 m."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "450"
          },
          "text": "Du räknade åt fel håll. m är en större enhet än dm, så det blir färre m."
        }
      ]
    },
    {
      "id": "mla3-ger-decimal-8ed8dae4",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "72 km = [a] mil"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7,2"
          ]
        }
      },
      "solution": [
        {
          "text": "10 km är 1 mil, så 72 km är 72 / 10 = 7,2 mil."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "720"
          },
          "text": "Du räknade åt fel håll. mil är en större enhet än km, så det blir färre mil."
        }
      ]
    },
    {
      "id": "mla3-ger-decimal-9f04bfbb",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "0,4 m = [a] dm"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4"
          ]
        }
      },
      "solution": [
        {
          "text": "1 m är 10 dm, så 0,4 m är 0,4 · 10 = 4 dm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,04"
          },
          "text": "Du räknade åt fel håll. dm är en mindre enhet än m, så det blir fler dm."
        }
      ]
    },
    {
      "id": "mla3-ger-decimal-87fff874",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "28 cm = [a] m"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,28"
          ]
        }
      },
      "solution": [
        {
          "text": "100 cm är 1 m, så 28 cm är 28 / 100 = 0,28 m."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2800"
          },
          "text": "Du räknade åt fel håll. m är en större enhet än cm, så det blir färre m."
        }
      ]
    }
  ]
};
