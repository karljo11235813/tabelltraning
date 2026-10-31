// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAe2.
export default {
  "code": "TAe2",
  "parts": [
    {
      "id": "en-losning",
      "title": "Ekvationer med en lösning",
      "labels": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    {
      "id": "alla-eller-ingen",
      "title": "Alla x eller ingen lösning",
      "labels": [
        "6",
        "7"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tae2-en-losning-fa32c2c6",
      "part": "en-losning",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "2x - 3 = x + 4    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort x från båda sidor: x − 3 = 4."
        },
        {
          "text": "Lägg till 3: x = 7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Lägg till 3 på båda sidor: x = 4 + 3."
        }
      ]
    },
    {
      "id": "tae2-en-losning-b52b5138",
      "part": "en-losning",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "3x + 6 = x + 6    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 6 från båda sidor: 3x = x."
        },
        {
          "text": "Dra bort x: 2x = 0, så x = 0."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae2-en-losning-b2a440c7",
      "part": "en-losning",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "5x + 2 = 17    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 2 från båda sidor: 5x = 15."
        },
        {
          "text": "Dela båda sidor med 5: x = 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,8"
          },
          "text": "Dra bort 2 först: 5x = 15, och sedan delat med 5."
        }
      ]
    },
    {
      "id": "tae2-en-losning-1244b7f4",
      "part": "en-losning",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "7 = 3x - 8    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5"
          ]
        }
      },
      "solution": [
        {
          "text": "Lägg till 8 på båda sidor: 15 = 3x."
        },
        {
          "text": "Dela med 3: x = 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "Lägg till 8 på båda sidor, inte dra bort: 15 = 3x."
        }
      ]
    },
    {
      "id": "tae2-en-losning-b07eea63",
      "part": "en-losning",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "5x - 1 = 2x + 8    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 2x från båda sidor: 3x − 1 = 8."
        },
        {
          "text": "Lägg till 1: 3x = 9, så x = 3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae2-en-losning-55aaa4a5",
      "part": "en-losning",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "10 - x = 3x + 2    Svar: [a]"
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
          "text": "Lägg till x på båda sidor: 10 = 4x + 2."
        },
        {
          "text": "Dra bort 2: 8 = 4x, så x = 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Lägg till x på båda sidor: 10 = 4x + 2, inte 2x + 2."
        }
      ]
    },
    {
      "id": "tae2-alla-eller-ingen-e9b6f831",
      "part": "alla-eller-ingen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "3x + 5 = 5 + 3x    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Alla värden på x"
          ]
        }
      },
      "solution": [
        {
          "text": "Båda sidorna är samma uttryck i olika ordning."
        },
        {
          "text": "Ekvationen stämmer för alla x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "x = 0 stämmer, men det gör alla andra x också: sidorna är samma uttryck."
        }
      ]
    },
    {
      "id": "tae2-alla-eller-ingen-bc4b39d0",
      "part": "alla-eller-ingen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "5x - 2 = 5x + 1    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Lösning saknas"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort 5x från båda sidor: −2 = 1, och det stämmer aldrig."
        },
        {
          "text": "Inget x gör sidorna lika."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "Om x = 0 blir det −2 = 1, och det stämmer inte. Inget x fungerar."
        }
      ]
    },
    {
      "id": "tae2-alla-eller-ingen-016b2a1d",
      "part": "alla-eller-ingen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "2x + 4 = 2(x + 1)    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Lösning saknas"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera in 2: höger sida är 2x + 2. Då är det 2x + 4 = 2x + 2, alltså 4 = 2."
        },
        {
          "text": "Det stämmer aldrig, så ekvationen saknar lösning."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "Om x = 0 blir det 4 = 2, och det stämmer inte. Inget x fungerar."
        }
      ]
    },
    {
      "id": "tae2-alla-eller-ingen-d6f661dc",
      "part": "alla-eller-ingen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "x + 4 = x + 7    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Lösning saknas"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra bort x från båda sidor: 4 = 7, och det stämmer aldrig."
        },
        {
          "text": "Inget x gör sidorna lika."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "Om x = 0 blir det 4 = 7, och det stämmer inte. Inget x fungerar."
        }
      ]
    },
    {
      "id": "tae2-alla-eller-ingen-82da7592",
      "part": "alla-eller-ingen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "3(x - 1) = 3x - 3    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Alla värden på x"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera in 3: vänster sida är 3x − 3, samma som höger."
        },
        {
          "text": "Ekvationen stämmer för alla x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "x = 1 stämmer, men det gör alla andra x också: 3(x − 1) = 3x − 3."
        }
      ]
    },
    {
      "id": "tae2-alla-eller-ingen-5e5d5cbd",
      "part": "alla-eller-ingen",
      "text": "Lös ekvationen.",
      "points": "each",
      "rows": [
        "2(x + 3) = 2x + 6    Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Alla värden på x"
          ]
        }
      },
      "solution": [
        {
          "text": "Multiplicera in 2: vänster sida är 2x + 6, samma som höger."
        },
        {
          "text": "Ekvationen stämmer för alla x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "x = 0 stämmer, men det gör alla andra x också: 2(x + 3) = 2x + 6."
        }
      ]
    }
  ]
};
