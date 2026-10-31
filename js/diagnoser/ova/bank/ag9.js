// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AG9.
export default {
  "code": "AG9",
  "parts": [
    {
      "id": "tabellen",
      "title": "Multiplikationstabellen",
      "labels": [
        "1",
        "2"
      ]
    },
    {
      "id": "generaliserad",
      "title": "Större tal och flera steg",
      "labels": [
        "3",
        "4"
      ]
    },
    {
      "id": "division",
      "title": "Division",
      "labels": [
        "5",
        "6",
        "7"
      ]
    },
    {
      "id": "rest",
      "title": "Division med rest",
      "labels": [
        "8"
      ]
    }
  ],
  "tasks": [
    {
      "id": "ag9-tabellen-de935139",
      "part": "tabellen",
      "text": "En förpackning har 6 yoghurtar. Hur många yoghurtar finns det i 9 förpackningar?",
      "points": "each",
      "rows": [
        "Svar: [a] yoghurtar"
      ],
      "boxes": {
        "a": {
          "accept": [
            "54"
          ]
        }
      },
      "solution": [
        {
          "text": "9 förpackningar med 6 i varje: 9 gånger 6."
        },
        {
          "math": "9 · 6 = 54"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Det är 6 i varje förpackning, 9 gånger: 9 · 6."
        }
      ]
    },
    {
      "id": "ag9-tabellen-7e89a8be",
      "part": "tabellen",
      "text": "Ett bord har 4 ben. Hur många ben har 8 bord?",
      "points": "each",
      "rows": [
        "Svar: [a] ben"
      ],
      "boxes": {
        "a": {
          "accept": [
            "32"
          ]
        }
      },
      "solution": [
        {
          "text": "8 bord med 4 ben på varje: 8 gånger 4."
        },
        {
          "math": "8 · 4 = 32"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Det är 4 ben på varje bord, 8 gånger: 8 · 4."
        }
      ]
    },
    {
      "id": "ag9-tabellen-f3aaa5ee",
      "part": "tabellen",
      "text": "En bil har 4 hjul. Hur många hjul har 7 bilar?",
      "points": "each",
      "rows": [
        "Svar: [a] hjul"
      ],
      "boxes": {
        "a": {
          "accept": [
            "28"
          ]
        }
      },
      "solution": [
        {
          "text": "Varje bil har lika många hjul, 4. 7 bilar är 7 gånger 4."
        },
        {
          "math": "7 · 4 = 28"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Det är 4 hjul på varje bil, 7 gånger: 7 · 4."
        }
      ]
    },
    {
      "id": "ag9-tabellen-8f39cafd",
      "part": "tabellen",
      "text": "En spindel har 8 ben. Hur många ben har 3 spindlar?",
      "points": "each",
      "rows": [
        "Svar: [a] ben"
      ],
      "boxes": {
        "a": {
          "accept": [
            "24"
          ]
        }
      },
      "solution": [
        {
          "text": "3 spindlar med 8 ben var: 3 gånger 8."
        },
        {
          "math": "3 · 8 = 24"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Det är 8 ben på varje spindel, 3 gånger: 3 · 8."
        }
      ]
    },
    {
      "id": "ag9-tabellen-020b3642",
      "part": "tabellen",
      "text": "En biljett kostar 9 kr. Hur mycket kostar 6 biljetter?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "54"
          ]
        }
      },
      "solution": [
        {
          "text": "6 biljetter som kostar 9 kr var: 6 gånger 9."
        },
        {
          "math": "6 · 9 = 54"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Varje biljett kostar 9 kr, 6 gånger: 6 · 9."
        }
      ]
    },
    {
      "id": "ag9-tabellen-b31f13b8",
      "part": "tabellen",
      "text": "En hand har 5 fingrar. Hur många fingrar har 9 händer?",
      "points": "each",
      "rows": [
        "Svar: [a] fingrar"
      ],
      "boxes": {
        "a": {
          "accept": [
            "45"
          ]
        }
      },
      "solution": [
        {
          "text": "9 händer med 5 fingrar på varje: 9 gånger 5."
        },
        {
          "math": "9 · 5 = 45"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14"
          },
          "text": "Det är 5 fingrar på varje hand, 9 gånger: 9 · 5."
        }
      ]
    },
    {
      "id": "ag9-generaliserad-ea9a7c40",
      "part": "generaliserad",
      "text": "Nora får 80 kr i timmen för att passa barn. Hur mycket tjänar hon på 4 timmar?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "320"
          ]
        }
      },
      "solution": [
        {
          "text": "4 timmar med 80 kr varje timme: 4 gånger 80, alltså 4 · 8 tiotal = 32 tiotal."
        },
        {
          "math": "4 · 80 = 320"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "84"
          },
          "text": "Hon får 80 kr varje timme, 4 gånger: 4 · 80."
        }
      ]
    },
    {
      "id": "ag9-generaliserad-a167b024",
      "part": "generaliserad",
      "text": "Ett kg äpplen kostar 6 kr. Oskar köper 8 kg äpplen och en kasse för 2 kr. Hur mycket ska han betala?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "50"
          ]
        }
      },
      "solution": [
        {
          "text": "Äpplena kostar 8 gånger 6 kr. Sedan kommer kassen till."
        },
        {
          "math": "8 · 6 + 2 = 50"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "48"
          },
          "text": "Kassen ska också betalas: 8 · 6 + 2."
        }
      ]
    },
    {
      "id": "ag9-generaliserad-5b4110b8",
      "part": "generaliserad",
      "text": "En biobiljett kostar 60 kr. Hur mycket kostar 7 biljetter?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "420"
          ]
        }
      },
      "solution": [
        {
          "text": "7 biljetter som kostar 60 kr var: 7 · 6 tiotal = 42 tiotal."
        },
        {
          "math": "7 · 60 = 420"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "42"
          },
          "text": "60 är 6 tiotal, så svaret är 42 tiotal: 420."
        }
      ]
    },
    {
      "id": "ag9-generaliserad-49f1be1c",
      "part": "generaliserad",
      "text": "En glass kostar 7 kr. Ella köper 3 glassar och en tidning för 5 kr. Hur mycket ska hon betala?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "26"
          ]
        }
      },
      "solution": [
        {
          "text": "Glassarna kostar 3 gånger 7 kr. Sedan kommer tidningen till."
        },
        {
          "math": "3 · 7 + 5 = 26"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "21"
          },
          "text": "Tidningen ska också betalas: 3 · 7 + 5."
        }
      ]
    },
    {
      "id": "ag9-generaliserad-28983d83",
      "part": "generaliserad",
      "text": "Ett paket kakor kostar 9 kr. Liam köper 4 paket och en påse för 3 kr. Hur mycket ska han betala?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "39"
          ]
        }
      },
      "solution": [
        {
          "text": "Kakorna kostar 4 gånger 9 kr. Sedan kommer påsen till."
        },
        {
          "math": "4 · 9 + 3 = 39"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Påsen ska också betalas: 4 · 9 + 3."
        }
      ]
    },
    {
      "id": "ag9-generaliserad-cca47b86",
      "part": "generaliserad",
      "text": "En bok kostar 50 kr. Hur mycket kostar 6 böcker?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "300"
          ]
        }
      },
      "solution": [
        {
          "text": "6 böcker som kostar 50 kr var: 6 · 5 tiotal = 30 tiotal."
        },
        {
          "math": "6 · 50 = 300"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "50 är 5 tiotal, så svaret är 30 tiotal: 300."
        }
      ]
    },
    {
      "id": "ag9-division-938f286d",
      "part": "division",
      "text": "En klass har 30 elever. De delas i grupper med 5 elever i varje. Hur många grupper blir det?",
      "points": "each",
      "rows": [
        "Svar: [a] grupper"
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
          "text": "Frågan är hur många gånger 5 elever ryms i 30."
        },
        {
          "math": "30 / 5 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "25"
          },
          "text": "Det är grupper med 5 elever i varje: hur många gånger 5 är 30?"
        }
      ]
    },
    {
      "id": "ag9-division-80eda63f",
      "part": "division",
      "text": "Mia delar 36 kulor lika mellan 4 vänner. Hur många kulor får varje vän?",
      "points": "each",
      "rows": [
        "Svar: [a] kulor"
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
          "text": "36 kulor delas i 4 lika stora högar."
        },
        {
          "math": "36 / 4 = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "32"
          },
          "text": "Kulorna delas lika: 36 i 4 lika stora delar."
        }
      ]
    },
    {
      "id": "ag9-division-e11efc35",
      "part": "division",
      "text": "24 elever ställer upp sig i 3 lika långa rader. Hur många elever står i varje rad?",
      "points": "each",
      "rows": [
        "Svar: [a] elever"
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
          "text": "24 elever delas i 3 lika stora rader."
        },
        {
          "math": "24 / 3 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "21"
          },
          "text": "Eleverna delas i 3 lika stora rader: 24 / 3."
        }
      ]
    },
    {
      "id": "ag9-division-0ecc8190",
      "part": "division",
      "text": "Sam har 45 kr. Ett paket tuggummi kostar 9 kr. Hur många paket kan han köpa?",
      "points": "each",
      "rows": [
        "Svar: [a] paket"
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
          "text": "Frågan är hur många gånger 9 kr ryms i 45 kr."
        },
        {
          "math": "45 / 9 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Det är paket som kostar 9 kr: hur många gånger 9 är 45?"
        }
      ]
    },
    {
      "id": "ag9-division-cc74120c",
      "part": "division",
      "text": "Ali läser 7 sidor varje dag. Efter hur många dagar har han läst 42 sidor?",
      "points": "each",
      "rows": [
        "Svar: [a] dagar"
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
          "text": "Frågan är hur många gånger 7 sidor ryms i 42 sidor."
        },
        {
          "math": "42 / 7 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "49"
          },
          "text": "Han har läst 42 sidor sammanlagt. Hur många gånger 7 är 42?"
        }
      ]
    },
    {
      "id": "ag9-division-b0851c72",
      "part": "division",
      "text": "Ett rep som är 56 m långt klipps i 8 lika långa bitar. Hur lång blir varje bit?",
      "points": "each",
      "rows": [
        "Svar: [a] m"
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
          "text": "56 m delas i 8 lika långa delar."
        },
        {
          "math": "56 / 8 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "48"
          },
          "text": "Repet delas i 8 lika långa bitar: 56 / 8."
        }
      ]
    },
    {
      "id": "ag9-rest-ff1bec2e",
      "part": "rest",
      "text": "Ett paket kex kostar 7 kr. Hur många paket kan Ida köpa för 45 kr?",
      "points": "each",
      "rows": [
        "Svar: [a] paket"
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
          "text": "6 paket kostar 42 kr. 7 paket skulle kosta 49 kr, och det har hon inte."
        },
        {
          "math": "45 / 7 ≈ 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7"
          },
          "text": "7 paket kostar 49 kr, och Ida har bara 45 kr."
        }
      ]
    },
    {
      "id": "ag9-rest-df0a1d6b",
      "part": "rest",
      "text": "En tröja kostar 90 kr. Hur många tröjor kan man köpa för 400 kr?",
      "points": "each",
      "rows": [
        "Svar: [a] tröjor"
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
          "text": "4 tröjor kostar 360 kr. 5 tröjor skulle kosta 450 kr, och det räcker inte."
        },
        {
          "math": "400 / 90 ≈ 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5"
          },
          "text": "5 tröjor kostar 450 kr, och det är mer än 400 kr."
        }
      ]
    },
    {
      "id": "ag9-rest-c558e927",
      "part": "rest",
      "text": "En plåt rymmer 9 bullar. Hur många plåtar blir helt fulla med 40 bullar?",
      "points": "each",
      "rows": [
        "Svar: [a] plåtar"
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
          "text": "4 plåtar tar 36 bullar, och 4 bullar blir över. De fyller inte en plåt."
        },
        {
          "math": "40 / 9 ≈ 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5"
          },
          "text": "Den femte plåten får bara 4 bullar, och den är inte full."
        }
      ]
    },
    {
      "id": "ag9-rest-bc24dfc6",
      "part": "rest",
      "text": "En bil har plats för 4 personer. Hur många bilar behövs för att 22 personer ska komma med?",
      "points": "each",
      "rows": [
        "Svar: [a] bilar"
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
          "text": "5 bilar tar 20 personer, och 2 blir över. De behöver en bil till."
        },
        {
          "math": "22 / 4 ≈ 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5"
          },
          "text": "5 bilar räcker inte: 2 personer blir över, och de behöver en bil till."
        }
      ]
    },
    {
      "id": "ag9-rest-73f179d8",
      "part": "rest",
      "text": "En glass kostar 8 kr. Leo har 30 kr. Hur många glassar kan han köpa?",
      "points": "each",
      "rows": [
        "Svar: [a] glassar"
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
          "text": "3 glassar kostar 24 kr. 4 glassar skulle kosta 32 kr, och det har han inte."
        },
        {
          "math": "30 / 8 ≈ 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "4 glassar kostar 32 kr, och Leo har bara 30 kr."
        }
      ]
    },
    {
      "id": "ag9-rest-776cdd0b",
      "part": "rest",
      "text": "En båt tar 6 personer. Hur många turer måste båten göra för att 27 personer ska komma över sjön?",
      "points": "each",
      "rows": [
        "Svar: [a] turer"
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
          "text": "4 turer tar 24 personer, och 3 blir över. De behöver en tur till."
        },
        {
          "math": "27 / 6 ≈ 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "4 turer räcker inte: 3 personer blir över, och de behöver en tur till."
        }
      ]
    }
  ]
};
