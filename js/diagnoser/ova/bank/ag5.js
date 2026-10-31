// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AG5.
export default {
  "code": "AG5",
  "parts": [
    {
      "id": "ett-till-nio",
      "title": "Addition och subtraktion, talområdet 1–9",
      "labels": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "id": "tio-till-nitton",
      "title": "Addition och subtraktion, talområdet 10–19",
      "labels": [
        "4",
        "5",
        "6",
        "7",
        "8"
      ]
    }
  ],
  "tasks": [
    {
      "id": "ag5-ett-till-nio-ca33be88",
      "part": "ett-till-nio",
      "text": "Noah är 7 år och Ella är 4 år. Hur mycket äldre är Noah än Ella?",
      "points": "each",
      "rows": [
        "Svar: [a] år"
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
          "text": "Frågan är skillnaden mellan åldrarna: från 4 till 7 är det 3."
        },
        {
          "math": "7 - 4 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Frågan är skillnaden mellan åldrarna, inte hur gamla de är tillsammans."
        }
      ]
    },
    {
      "id": "ag5-ett-till-nio-644a1f3b",
      "part": "ett-till-nio",
      "text": "Elsa är 6 år. Hur gammal är Elsa om 3 år?",
      "points": "each",
      "rows": [
        "Svar: [a] år"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9"
          ]
        }
      },
      "solution": [
        {
          "text": "Om 3 år har Elsa blivit 3 år äldre, så det läggs till."
        },
        {
          "math": "6 + 3 = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Om 3 år är Elsa äldre än nu, så åren läggs till: 6 + 3."
        }
      ]
    },
    {
      "id": "ag5-ett-till-nio-e81e4519",
      "part": "ett-till-nio",
      "text": "Leo är 8 år. Hur gammal var Leo för 5 år sedan?",
      "points": "each",
      "rows": [
        "Svar: [a] år"
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
          "text": "För 5 år sedan var Leo 5 år yngre, så det dras bort."
        },
        {
          "math": "8 - 5 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13"
          },
          "text": "För 5 år sedan var Leo yngre än nu, så åren dras bort: 8 − 5."
        }
      ]
    },
    {
      "id": "ag5-ett-till-nio-594e6d05",
      "part": "ett-till-nio",
      "text": "Alma har 3 kulor och Sam har 8 kulor. Hur många fler kulor har Sam än Alma?",
      "points": "each",
      "rows": [
        "Svar: [a] kulor"
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
          "text": "Frågan är skillnaden: från 3 till 8 är det 5."
        },
        {
          "math": "8 - 3 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Frågan är hur många fler, alltså skillnaden: 8 − 3."
        }
      ]
    },
    {
      "id": "ag5-ett-till-nio-3d2444bc",
      "part": "ett-till-nio",
      "text": "Ali har 2 kr. Han får 6 kr till. Hur mycket pengar har han nu?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8"
          ]
        }
      },
      "solution": [
        {
          "text": "Han får mer, så det läggs till. Börja med det större talet: 6 + 2."
        },
        {
          "math": "2 + 6 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Ali får pengar, så det blir mer: 2 + 6."
        }
      ]
    },
    {
      "id": "ag5-ett-till-nio-bc0de65c",
      "part": "ett-till-nio",
      "text": "Det ligger 9 äpplen i en skål. Sara äter upp 4 av dem. Hur många äpplen ligger kvar?",
      "points": "each",
      "rows": [
        "Svar: [a] äpplen"
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
          "text": "Några äts upp, så det blir färre: 4 dras bort."
        },
        {
          "math": "9 - 4 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13"
          },
          "text": "Äpplena som äts upp är inte kvar: 9 − 4."
        }
      ]
    },
    {
      "id": "ag5-tio-till-nitton-ec083fba",
      "part": "tio-till-nitton",
      "text": "Lina hade 4 kaniner. Kaninerna fick tillsammans 8 ungar. Hur många kaniner hade hon då?",
      "points": "each",
      "rows": [
        "Svar: [a] kaniner"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12"
          ]
        }
      },
      "solution": [
        {
          "text": "Ungarna är också kaniner, så de läggs till de 4."
        },
        {
          "math": "4 + 8 = 12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Ungarna är också kaniner, och de 4 finns kvar: 4 + 8."
        }
      ]
    },
    {
      "id": "ag5-tio-till-nitton-76de0360",
      "part": "tio-till-nitton",
      "text": "Moa är 16 år och Adam är 13 år. Hur mycket äldre är Moa än Adam?",
      "points": "each",
      "rows": [
        "Svar: [a] år"
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
          "text": "Frågan är skillnaden mellan åldrarna: från 13 till 16 är det 3."
        },
        {
          "math": "16 - 13 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "29"
          },
          "text": "Frågan är skillnaden mellan åldrarna, inte hur gamla de är tillsammans."
        }
      ]
    },
    {
      "id": "ag5-tio-till-nitton-b145b17b",
      "part": "tio-till-nitton",
      "text": "Hugo hade 15 pärlor. Han gav 8 pärlor till Nora. Hur många pärlor har han kvar?",
      "points": "each",
      "rows": [
        "Svar: [a] pärlor"
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
          "text": "De pärlor han ger bort har han inte kvar, så de dras bort."
        },
        {
          "math": "15 - 8 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "23"
          },
          "text": "Pärlorna han ger bort försvinner från honom: 15 − 8."
        }
      ]
    },
    {
      "id": "ag5-tio-till-nitton-5589361a",
      "part": "tio-till-nitton",
      "text": "Wilma får 9 kr av sin moster och 6 kr av sin morbror. Hur mycket pengar är det tillsammans?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
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
          "text": "Tillsammans betyder att beloppen läggs ihop."
        },
        {
          "math": "9 + 6 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Tillsammans betyder att det läggs ihop: 9 + 6."
        }
      ]
    },
    {
      "id": "ag5-tio-till-nitton-e0102cbc",
      "part": "tio-till-nitton",
      "text": "Det sitter 7 fåglar i ett träd. Det kommer 6 fåglar till. Hur många fåglar sitter i trädet nu?",
      "points": "each",
      "rows": [
        "Svar: [a] fåglar"
      ],
      "boxes": {
        "a": {
          "accept": [
            "13"
          ]
        }
      },
      "solution": [
        {
          "text": "Det kommer fler, så det läggs till."
        },
        {
          "math": "7 + 6 = 13"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Det kommer fler fåglar, så det blir mer: 7 + 6."
        }
      ]
    },
    {
      "id": "ag5-tio-till-nitton-6ba99272",
      "part": "tio-till-nitton",
      "text": "En bok kostar 16 kr. Omar har 9 kr. Hur mycket pengar fattas för att Omar ska kunna köpa boken?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
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
          "text": "Det som fattas är skillnaden mellan 9 och 16: 9 + 7 = 16."
        },
        {
          "math": "16 - 9 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "25"
          },
          "text": "Det som fattas är skillnaden mellan priset och pengarna han har: 16 − 9."
        }
      ]
    }
  ]
};
