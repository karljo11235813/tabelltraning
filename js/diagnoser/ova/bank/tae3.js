// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAe3.
export default {
  "code": "TAe3",
  "parts": [
    {
      "id": "brak-svar",
      "title": "Svaret är negativt eller ett bråk",
      "labels": [
        "1",
        "2"
      ]
    },
    {
      "id": "brak-i-ekvationen",
      "title": "Bråk i ekvationen",
      "labels": [
        "3",
        "4",
        "5",
        "6"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tae3-brak-svar-ed31057c",
      "part": "brak-svar",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "5x - 7 = 2x - 5    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/3"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 2x: 3x − 7 = −5."
        },
        {
          "text": "Lägg till 7: 3x = 2, så x = 2/3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/2"
          },
          "text": "3x = 2 ger x = 2/3: det är 2 som delas med 3."
        }
      ]
    },
    {
      "id": "tae3-brak-svar-20b92f48",
      "part": "brak-svar",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "7x - 4 = 3x - 5    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-1/4"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 3x: 4x − 4 = −5."
        },
        {
          "text": "Lägg till 4: 4x = −1, så x = −1/4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-4"
          },
          "text": "4x = −1 ger x = −1/4: det är −1 som delas med 4."
        }
      ]
    },
    {
      "id": "tae3-brak-svar-2b9a9527",
      "part": "brak-svar",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "x + 10 = 3x + 13    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3/2"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort x: 10 = 2x + 13."
        },
        {
          "text": "Dra bort 13: −3 = 2x, så x = −3/2."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae3-brak-svar-dae53b36",
      "part": "brak-svar",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "6x - 1 = x + 2    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/5"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort x: 5x − 1 = 2."
        },
        {
          "text": "Lägg till 1: 5x = 3, så x = 3/5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/3"
          },
          "text": "5x = 3 ger x = 3/5: det är 3 som delas med 5."
        }
      ]
    },
    {
      "id": "tae3-brak-svar-e3e69a8c",
      "part": "brak-svar",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "2x + 3 = 5x + 7    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-4/3"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 2x: 3 = 3x + 7."
        },
        {
          "text": "Dra bort 7: −4 = 3x, så x = −4/3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4/3"
          },
          "text": "3 − 7 = −4, så x är negativt: −4/3."
        }
      ]
    },
    {
      "id": "tae3-brak-svar-4bc1fc8c",
      "part": "brak-svar",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "4x + 9 = 3x + 5    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-4"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 3x: x + 9 = 5."
        },
        {
          "text": "Dra bort 9: x = −4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "5 − 9 är −4, inte 4."
        }
      ]
    },
    {
      "id": "tae3-brak-i-ekvationen-949b7dd4",
      "part": "brak-i-ekvationen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "6 - {x|2} = x + 3    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera båda sidor med 2, så att bråket försvinner: 12 − x = 2x + 6."
        },
        {
          "text": "Lägg till x och dra bort 6: 6 = 3x, så x = 2."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae3-brak-i-ekvationen-a92a9069",
      "part": "brak-i-ekvationen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "{x|2} + 1 = {x|3} + 2    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera båda sidor med 6, den minsta gemensamma nämnaren: 3x + 6 = 2x + 12."
        },
        {
          "text": "Dra bort 2x och 6: x = 6."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae3-brak-i-ekvationen-0044663f",
      "part": "brak-i-ekvationen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "{x|4} - {1|2} = {x|6}    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera båda sidor med 12: 3x − 6 = 2x."
        },
        {
          "text": "Dra bort 2x och lägg till 6: x = 6."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae3-brak-i-ekvationen-64a02574",
      "part": "brak-i-ekvationen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "{1|3} - x = {1|2}(1 - 4x)    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/6"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera in 1/2: 1/3 − x = 1/2 − 2x."
        },
        {
          "text": "Lägg till 2x: 1/3 + x = 1/2, så x = 1/2 − 1/3 = 1/6."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae3-brak-i-ekvationen-d041793c",
      "part": "brak-i-ekvationen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "3x + {1|3} = x + {5|3}    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/3"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort x: 2x + 1/3 = 5/3."
        },
        {
          "text": "Dra bort 1/3: 2x = 4/3, så x = 2/3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae3-brak-i-ekvationen-87b6de6b",
      "part": "brak-i-ekvationen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "{1|2}(x + 3) = 2x    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera båda sidor med 2: x + 3 = 4x."
        },
        {
          "text": "Dra bort x: 3 = 3x, så x = 1."
        }
      ],
      "mistakes": []
    }
  ]
};
