// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till RB7.
export default {
  "code": "RB7",
  "parts": [
    {
      "id": "heltal-gange-brak",
      "title": "Ett heltal gånger ett bråk",
      "labels": [
        "1a",
        "1b",
        "1c"
      ]
    },
    {
      "id": "brak-gange-brak",
      "title": "Bråk gånger bråk",
      "labels": [
        "2a",
        "2b",
        "2c"
      ]
    },
    {
      "id": "delat-med-heltal",
      "title": "Ett bråk delat med ett heltal",
      "labels": [
        "3a",
        "3b",
        "3c"
      ]
    },
    {
      "id": "delat-med-brak",
      "title": "Delat med ett bråk",
      "labels": [
        "4a",
        "4b",
        "4c"
      ]
    }
  ],
  "tasks": [
    {
      "id": "rb7-heltal-gange-brak-6ee9b406",
      "part": "heltal-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "2 · {1|2|3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10/3",
            "3 1/3"
          ]
        }
      },
      "solution": [
        {
          "text": "1 2/3 är 1 hel och 2/3. 2 gånger det är 2 hela och 2 · 2/3 = 4/3."
        },
        {
          "math": "2 · {1|2|3} = {3|1|3}"
        }
      ],
      "mistakes": []
    },
    {
      "id": "rb7-heltal-gange-brak-89cc9435",
      "part": "heltal-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "3 · {1|1|4} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "15/4",
            "3 3/4"
          ]
        }
      },
      "solution": [
        {
          "text": "1 1/4 är 1 hel och 1/4. 3 gånger det är 3 hela och 3 · 1/4 = 3/4."
        },
        {
          "math": "3 · {1|1|4} = {3|3|4}"
        }
      ],
      "mistakes": []
    },
    {
      "id": "rb7-heltal-gange-brak-fd26ada6",
      "part": "heltal-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "5 · {2|3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10/3",
            "3 1/3"
          ]
        }
      },
      "solution": [
        {
          "text": "5 gånger två tredjedelar är 10 tredjedelar."
        },
        {
          "math": "5 · {2|3} = {3|1|3}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/3"
          },
          "text": "Du multiplicerade både täljaren och nämnaren. Det är bara antalet delar, täljaren, som blir fler."
        }
      ]
    },
    {
      "id": "rb7-heltal-gange-brak-3fd42cfd",
      "part": "heltal-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{1|3} · 9 = [a]"
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
          "text": "9 gånger en tredjedel är 9 tredjedelar."
        },
        {
          "math": "{1|3} · 9 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "Du multiplicerade både täljaren och nämnaren. Det är bara antalet delar, täljaren, som blir fler."
        }
      ]
    },
    {
      "id": "rb7-heltal-gange-brak-6ed9a37b",
      "part": "heltal-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "4 · {1|2} = [a]"
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
          "text": "4 gånger en halv är 4 halvor."
        },
        {
          "math": "4 · {1|2} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/2"
          },
          "text": "Du multiplicerade både täljaren och nämnaren. Det är bara antalet delar, täljaren, som blir fler."
        }
      ]
    },
    {
      "id": "rb7-heltal-gange-brak-f8df50b9",
      "part": "heltal-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{1|5} · 10 = [a]"
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
          "text": "10 gånger en femtedel är 10 femtedelar."
        },
        {
          "math": "{1|5} · 10 = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/5"
          },
          "text": "Du multiplicerade både täljaren och nämnaren. Det är bara antalet delar, täljaren, som blir fler."
        }
      ]
    },
    {
      "id": "rb7-brak-gange-brak-c67c81de",
      "part": "brak-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{1|1|3} · {3|4} = [a]"
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
          "text": "1 1/3 · 3/4 är 1 1/3 av 3/4."
        },
        {
          "text": "Täljarna multipliceras med varandra och nämnarna med varandra, efter att 1 1/3 har skrivits som 4/3."
        },
        {
          "math": "{1|1|3} · {3|4} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "25/12"
          },
          "text": "Du lade ihop bråken. Det står gånger."
        }
      ]
    },
    {
      "id": "rb7-brak-gange-brak-b329f5c2",
      "part": "brak-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{1|2} · {2|5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/5"
          ]
        }
      },
      "solution": [
        {
          "text": "1/2 · 2/5 är 1/2 av 2/5."
        },
        {
          "text": "Täljarna multipliceras med varandra och nämnarna med varandra."
        },
        {
          "math": "{1|2} · {2|5} = {1|5}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9/10"
          },
          "text": "Du lade ihop bråken. Det står gånger."
        }
      ]
    },
    {
      "id": "rb7-brak-gange-brak-41486adc",
      "part": "brak-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{2|7} · {1|2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/7"
          ]
        }
      },
      "solution": [
        {
          "text": "2/7 · 1/2 är 2/7 av 1/2."
        },
        {
          "text": "Täljarna multipliceras med varandra och nämnarna med varandra."
        },
        {
          "math": "{2|7} · {1|2} = {1|7}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11/14"
          },
          "text": "Du lade ihop bråken. Det står gånger."
        }
      ]
    },
    {
      "id": "rb7-brak-gange-brak-a3a3c8ae",
      "part": "brak-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{3|5} · {1|3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/5"
          ]
        }
      },
      "solution": [
        {
          "text": "3/5 · 1/3 är 3/5 av 1/3."
        },
        {
          "text": "Täljarna multipliceras med varandra och nämnarna med varandra."
        },
        {
          "math": "{3|5} · {1|3} = {1|5}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14/15"
          },
          "text": "Du lade ihop bråken. Det står gånger."
        }
      ]
    },
    {
      "id": "rb7-brak-gange-brak-40212f04",
      "part": "brak-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{2|3} · {3|4} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/2"
          ]
        }
      },
      "solution": [
        {
          "text": "2/3 · 3/4 är 2/3 av 3/4."
        },
        {
          "text": "Täljarna multipliceras med varandra och nämnarna med varandra."
        },
        {
          "math": "{2|3} · {3|4} = {1|2}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "17/12"
          },
          "text": "Du lade ihop bråken. Det står gånger."
        }
      ]
    },
    {
      "id": "rb7-brak-gange-brak-2cce6a41",
      "part": "brak-gange-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{1|1|2} · {2|3} = [a]"
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
          "text": "1 1/2 · 2/3 är 1 1/2 av 2/3."
        },
        {
          "text": "Täljarna multipliceras med varandra och nämnarna med varandra, efter att 1 1/2 har skrivits som 3/2."
        },
        {
          "math": "{1|1|2} · {2|3} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13/6"
          },
          "text": "Du lade ihop bråken. Det står gånger."
        }
      ]
    },
    {
      "id": "rb7-delat-med-heltal-46820dc3",
      "part": "delat-med-heltal",
      "text": "",
      "points": "each",
      "rows": [
        "{2|5} / 4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/10"
          ]
        }
      },
      "solution": [
        {
          "text": "2 femtedelar går inte att dela jämnt i 4. Dela varje del i 4: 2/5 = 8/20, och delat i 4 är det 2 tjugondelar i varje."
        },
        {
          "math": "{2|5} / 4 = {1|10}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8/5"
          },
          "text": "Du multiplicerade. Att dela i lika stora delar gör varje del mindre."
        }
      ]
    },
    {
      "id": "rb7-delat-med-heltal-89475325",
      "part": "delat-med-heltal",
      "text": "",
      "points": "each",
      "rows": [
        "{3|4} / 2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/8"
          ]
        }
      },
      "solution": [
        {
          "text": "3 fjärdedelar går inte att dela jämnt i 2. Dela varje del i 2: 3/4 = 6/8, och delat i 2 är det 3 åttondelar i varje."
        },
        {
          "math": "{3|4} / 2 = {3|8}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/2"
          },
          "text": "Du multiplicerade. Att dela i lika stora delar gör varje del mindre."
        }
      ]
    },
    {
      "id": "rb7-delat-med-heltal-872dd0b5",
      "part": "delat-med-heltal",
      "text": "",
      "points": "each",
      "rows": [
        "{4|3} / 2 = [a]"
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
          "text": "4/3 är 4 tredjedelar. Delat i 2 lika stora delar blir det 2 tredjedelar i varje."
        },
        {
          "math": "{4|3} / 2 = {2|3}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8/3"
          },
          "text": "Du multiplicerade. Att dela i lika stora delar gör varje del mindre."
        }
      ]
    },
    {
      "id": "rb7-delat-med-heltal-afe99503",
      "part": "delat-med-heltal",
      "text": "",
      "points": "each",
      "rows": [
        "{1|1|2} / 3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/2"
          ]
        }
      },
      "solution": [
        {
          "text": "1 1/2 är 3 halvor. Delat i 3 lika stora delar blir det en halv i varje."
        },
        {
          "math": "{1|1|2} / 3 = {1|2}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9/2"
          },
          "text": "Du multiplicerade. Att dela i lika stora delar gör varje del mindre."
        }
      ]
    },
    {
      "id": "rb7-delat-med-heltal-7688645b",
      "part": "delat-med-heltal",
      "text": "",
      "points": "each",
      "rows": [
        "{2|2|3} / 4 = [a]"
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
          "text": "2 2/3 är 8 tredjedelar. Delat i 4 lika stora delar blir det 2 tredjedelar i varje."
        },
        {
          "math": "{2|2|3} / 4 = {2|3}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "32/3"
          },
          "text": "Du multiplicerade. Att dela i lika stora delar gör varje del mindre."
        }
      ]
    },
    {
      "id": "rb7-delat-med-heltal-ca39eb4e",
      "part": "delat-med-heltal",
      "text": "",
      "points": "each",
      "rows": [
        "{1|2} / 3 = [a]"
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
          "text": "En halv går inte att dela jämnt i 3. Dela varje del i 3: 1/2 = 3/6, och delat i 3 är det en sjättedel i varje."
        },
        {
          "math": "{1|2} / 3 = {1|6}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/2"
          },
          "text": "Du multiplicerade. Att dela i lika stora delar gör varje del mindre."
        }
      ]
    },
    {
      "id": "rb7-delat-med-brak-e863f029",
      "part": "delat-med-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{2|3} / {1|3} = [a]"
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
          "text": "Frågan är hur många 1/3 det går på 2/3."
        },
        {
          "text": "Det går 3 stycken 1/3 på 1 hel, så det är samma sak som att multiplicera med 3."
        },
        {
          "math": "{2|3} / {1|3} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/9"
          },
          "text": "Du multiplicerade. Frågan är hur många 1/3 det går på 2/3."
        }
      ]
    },
    {
      "id": "rb7-delat-med-brak-4363e012",
      "part": "delat-med-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{3|4} / {1|2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/2",
            "1 1/2"
          ]
        }
      },
      "solution": [
        {
          "text": "Frågan är hur många 1/2 det går på 3/4."
        },
        {
          "text": "Det går 2 stycken 1/2 på 1 hel, så det är samma sak som att multiplicera med 2."
        },
        {
          "math": "{3|4} / {1|2} = {1|1|2}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/8"
          },
          "text": "Du multiplicerade. Frågan är hur många 1/2 det går på 3/4."
        }
      ]
    },
    {
      "id": "rb7-delat-med-brak-0c209ba2",
      "part": "delat-med-brak",
      "text": "",
      "points": "each",
      "rows": [
        "1 / {2|3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/2",
            "1 1/2"
          ]
        }
      },
      "solution": [
        {
          "text": "Frågan är hur många 2/3 det går på 1."
        },
        {
          "text": "Det går 3/2 stycken 2/3 på 1 hel, så det är samma sak som att multiplicera med 3/2."
        },
        {
          "math": "1 / {2|3} = {1|1|2}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/3"
          },
          "text": "Du multiplicerade. Frågan är hur många 2/3 det går på 1."
        }
      ]
    },
    {
      "id": "rb7-delat-med-brak-482d302f",
      "part": "delat-med-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{5|6} / {1|3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5/2",
            "2 1/2"
          ]
        }
      },
      "solution": [
        {
          "text": "Frågan är hur många 1/3 det går på 5/6."
        },
        {
          "text": "Det går 3 stycken 1/3 på 1 hel, så det är samma sak som att multiplicera med 3."
        },
        {
          "math": "{5|6} / {1|3} = {2|1|2}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/18"
          },
          "text": "Du multiplicerade. Frågan är hur många 1/3 det går på 5/6."
        }
      ]
    },
    {
      "id": "rb7-delat-med-brak-8f706936",
      "part": "delat-med-brak",
      "text": "",
      "points": "each",
      "rows": [
        "{4|5} / {2|3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6/5",
            "1 1/5"
          ]
        }
      },
      "solution": [
        {
          "text": "Frågan är hur många 2/3 det går på 4/5."
        },
        {
          "text": "Det går 3/2 stycken 2/3 på 1 hel, så det är samma sak som att multiplicera med 3/2."
        },
        {
          "math": "{4|5} / {2|3} = {1|1|5}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8/15"
          },
          "text": "Du multiplicerade. Frågan är hur många 2/3 det går på 4/5."
        }
      ]
    },
    {
      "id": "rb7-delat-med-brak-e63b3d1a",
      "part": "delat-med-brak",
      "text": "",
      "points": "each",
      "rows": [
        "3 / {1|2} = [a]"
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
          "text": "Frågan är hur många 1/2 det går på 3."
        },
        {
          "text": "Det går 2 stycken 1/2 på 1 hel, så det är samma sak som att multiplicera med 2."
        },
        {
          "math": "3 / {1|2} = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/2"
          },
          "text": "Du multiplicerade. Frågan är hur många 1/2 det går på 3."
        }
      ]
    }
  ]
};
