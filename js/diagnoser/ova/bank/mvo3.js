// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till MVo3.
export default {
  "code": "MVo3",
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
      "title": "Byt enhet, decimaltal och bråk",
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
      "title": "Byt till en större enhet",
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
      "id": "mvo3-heltal-3f72b2b7",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "800 ml = [a] cl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "80"
          ]
        }
      },
      "solution": [
        {
          "text": "10 ml är 1 cl, så 800 ml är 800 / 10 = 80 cl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8000"
          },
          "text": "Du räknade åt fel håll. cl är en större enhet än ml, så det blir färre cl."
        }
      ]
    },
    {
      "id": "mvo3-heltal-2c682dc4",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "400 ml = [a] dl"
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
          "text": "100 ml är 1 dl, så 400 ml är 400 / 100 = 4 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40 000"
          },
          "text": "Du räknade åt fel håll. dl är en större enhet än ml, så det blir färre dl."
        }
      ]
    },
    {
      "id": "mvo3-heltal-61c5f9b7",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "7 dl = [a] cl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "70"
          ]
        }
      },
      "solution": [
        {
          "text": "1 dl är 10 cl, så 7 dl är 7 · 10 = 70 cl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,7"
          },
          "text": "Du räknade åt fel håll. cl är en mindre enhet än dl, så det blir fler cl."
        }
      ]
    },
    {
      "id": "mvo3-heltal-bd98fa0f",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "150 dl = [a] liter"
      ],
      "boxes": {
        "a": {
          "accept": [
            "15"
          ]
        }
      },
      "solution": [
        {
          "text": "10 dl är 1 liter, så 150 dl är 150 / 10 = 15 liter."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1500"
          },
          "text": "Du räknade åt fel håll. liter är en större enhet än dl, så det blir färre liter."
        }
      ]
    },
    {
      "id": "mvo3-heltal-2af121ec",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "2 liter = [a] cl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "200"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter är 100 cl, så 2 liter är 2 · 100 = 200 cl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,02"
          },
          "text": "Du räknade åt fel håll. cl är en mindre enhet än liter, så det blir fler cl."
        }
      ]
    },
    {
      "id": "mvo3-heltal-d877b0fa",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "3 liter = [a] dl"
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
          "text": "1 liter är 10 dl, så 3 liter är 3 · 10 = 30 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,3"
          },
          "text": "Du räknade åt fel håll. dl är en mindre enhet än liter, så det blir fler dl."
        }
      ]
    },
    {
      "id": "mvo3-decimal-6d27ba0d",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "1,75 liter = [a] ml"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1750"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter är 1000 ml, så 1,75 liter är 1,75 · 1000 = 1750 ml."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00175"
          },
          "text": "Du räknade åt fel håll. ml är en mindre enhet än liter, så det blir fler ml."
        }
      ]
    },
    {
      "id": "mvo3-decimal-100a82f2",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "2,5 liter = [a] dl"
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
          "text": "1 liter är 10 dl, så 2,5 liter är 2,5 · 10 = 25 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,25"
          },
          "text": "Du räknade åt fel håll. dl är en mindre enhet än liter, så det blir fler dl."
        }
      ]
    },
    {
      "id": "mvo3-decimal-2f33406a",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "6,5 cl = [a] ml"
      ],
      "boxes": {
        "a": {
          "accept": [
            "65"
          ]
        }
      },
      "solution": [
        {
          "text": "1 cl är 10 ml, så 6,5 cl är 6,5 · 10 = 65 ml."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,65"
          },
          "text": "Du räknade åt fel håll. ml är en mindre enhet än cl, så det blir fler ml."
        }
      ]
    },
    {
      "id": "mvo3-decimal-d4aa5d47",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "{1|4} liter = [a] cl"
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
          "text": "1 liter är 100 cl, så 1/4 liter är 1/4 · 100 = 25 cl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0025"
          },
          "text": "Du räknade åt fel håll. cl är en mindre enhet än liter, så det blir fler cl."
        }
      ]
    },
    {
      "id": "mvo3-decimal-175e6934",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "4,6 dl = [a] cl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "46"
          ]
        }
      },
      "solution": [
        {
          "text": "1 dl är 10 cl, så 4,6 dl är 4,6 · 10 = 46 cl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,46"
          },
          "text": "Du räknade åt fel håll. cl är en mindre enhet än dl, så det blir fler cl."
        }
      ]
    },
    {
      "id": "mvo3-decimal-11ff4d25",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "2,5 liter = [a] cl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "250"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter är 100 cl, så 2,5 liter är 2,5 · 100 = 250 cl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,025"
          },
          "text": "Du räknade åt fel håll. cl är en mindre enhet än liter, så det blir fler cl."
        }
      ]
    },
    {
      "id": "mvo3-ger-decimal-65501743",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "35 dl = [a] liter"
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
          "text": "10 dl är 1 liter, så 35 dl är 35 / 10 = 3,5 liter."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "350"
          },
          "text": "Du räknade åt fel håll. liter är en större enhet än dl, så det blir färre liter."
        }
      ]
    },
    {
      "id": "mvo3-ger-decimal-6b92b968",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "6,4 cl = [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,64"
          ]
        }
      },
      "solution": [
        {
          "text": "10 cl är 1 dl, så 6,4 cl är 6,4 / 10 = 0,64 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "64"
          },
          "text": "Du räknade åt fel håll. dl är en större enhet än cl, så det blir färre dl."
        }
      ]
    },
    {
      "id": "mvo3-ger-decimal-9ada9e3f",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "45 cl = [a] dl"
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
          "text": "10 cl är 1 dl, så 45 cl är 45 / 10 = 4,5 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "450"
          },
          "text": "Du räknade åt fel håll. dl är en större enhet än cl, så det blir färre dl."
        }
      ]
    },
    {
      "id": "mvo3-ger-decimal-201345c7",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "6 dl = [a] liter"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,6"
          ]
        }
      },
      "solution": [
        {
          "text": "10 dl är 1 liter, så 6 dl är 6 / 10 = 0,6 liter."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60"
          },
          "text": "Du räknade åt fel håll. liter är en större enhet än dl, så det blir färre liter."
        }
      ]
    },
    {
      "id": "mvo3-ger-decimal-782d66c7",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "2500 ml = [a] liter"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,5"
          ]
        }
      },
      "solution": [
        {
          "text": "1000 ml är 1 liter, så 2500 ml är 2500 / 1000 = 2,5 liter."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2 500 000"
          },
          "text": "Du räknade åt fel håll. liter är en större enhet än ml, så det blir färre liter."
        }
      ]
    },
    {
      "id": "mvo3-ger-decimal-8fbb73d0",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "18 ml = [a] cl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,8"
          ]
        }
      },
      "solution": [
        {
          "text": "10 ml är 1 cl, så 18 ml är 18 / 10 = 1,8 cl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "180"
          },
          "text": "Du räknade åt fel håll. cl är en större enhet än ml, så det blir färre cl."
        }
      ]
    }
  ]
};
