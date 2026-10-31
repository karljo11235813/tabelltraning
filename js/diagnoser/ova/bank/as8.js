// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AS8.
export default {
  "code": "AS8",
  "parts": [
    {
      "id": "jamnt",
      "title": "Går jämnt upp",
      "labels": [
        "1",
        "2",
        "3",
        "5"
      ]
    },
    {
      "id": "rest",
      "title": "Med rest eller decimaler",
      "labels": [
        "4"
      ]
    }
  ],
  "tasks": [
    {
      "id": "as8-jamnt-e3f9ae99",
      "part": "jamnt",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{440|20} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "22"
          ]
        }
      },
      "solution": [
        {
          "text": "Dela upp 440 i delar som går jämnt upp med 20: 440 = 400 + 40."
        },
        {
          "math": "{440|20} = {400|20} + {40|20} = 20 + 2 = 22"
        },
        {
          "text": "Kontrollera: 22 · 20 = 440."
        }
      ],
      "mistakes": []
    },
    {
      "id": "as8-jamnt-95facfe5",
      "part": "jamnt",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{825|25} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "33"
          ]
        }
      },
      "solution": [
        {
          "text": "Dela upp 825 i delar som går jämnt upp med 25: 825 = 750 + 75."
        },
        {
          "math": "{825|25} = {750|25} + {75|25} = 30 + 3 = 33"
        },
        {
          "text": "Kontrollera: 33 · 25 = 825."
        }
      ],
      "mistakes": []
    },
    {
      "id": "as8-jamnt-ee4a1ed4",
      "part": "jamnt",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{918|34} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "27"
          ]
        }
      },
      "solution": [
        {
          "text": "Dela upp 918 i delar som går jämnt upp med 34: 918 = 680 + 238."
        },
        {
          "math": "{918|34} = {680|34} + {238|34} = 20 + 7 = 27"
        },
        {
          "text": "Kontrollera: 27 · 34 = 918."
        }
      ],
      "mistakes": []
    },
    {
      "id": "as8-jamnt-e143b118",
      "part": "jamnt",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{1248|48} = [a]"
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
          "text": "Dela upp 1248 i delar som går jämnt upp med 48: 1248 = 960 + 288."
        },
        {
          "math": "{1248|48} = {960|48} + {288|48} = 20 + 6 = 26"
        },
        {
          "text": "Kontrollera: 26 · 48 = 1248."
        }
      ],
      "mistakes": []
    },
    {
      "id": "as8-jamnt-870b8917",
      "part": "jamnt",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{352|11} = [a]"
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
          "text": "Dela upp 352 i delar som går jämnt upp med 11: 352 = 330 + 22."
        },
        {
          "math": "{352|11} = {330|11} + {22|11} = 30 + 2 = 32"
        },
        {
          "text": "Kontrollera: 32 · 11 = 352."
        }
      ],
      "mistakes": []
    },
    {
      "id": "as8-jamnt-066f4828",
      "part": "jamnt",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{736|32} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "23"
          ]
        }
      },
      "solution": [
        {
          "text": "Dela upp 736 i delar som går jämnt upp med 32: 736 = 640 + 96."
        },
        {
          "math": "{736|32} = {640|32} + {96|32} = 20 + 3 = 23"
        },
        {
          "text": "Kontrollera: 23 · 32 = 736."
        }
      ],
      "mistakes": []
    },
    {
      "id": "as8-rest-3b238e9d",
      "part": "rest",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{230|25} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9,2",
            "9 rest 5"
          ]
        }
      },
      "solution": [
        {
          "text": "25 går 9 gånger i 230: 9 · 25 = 225, och 5 blir över."
        },
        {
          "text": "Som decimaltal: 5 / 25 = 0,2, så svaret är 9,2 eller 9 rest 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,5"
          },
          "text": "Resten är inga decimaler: 9 rest 5 är 9 + 5/25 = 9,2."
        }
      ]
    },
    {
      "id": "as8-rest-ef3e946c",
      "part": "rest",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{222|12} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "18,5",
            "18 rest 6"
          ]
        }
      },
      "solution": [
        {
          "text": "12 går 18 gånger i 222: 18 · 12 = 216, och 6 blir över."
        },
        {
          "text": "Som decimaltal: 6 / 12 = 0,5, så svaret är 18,5 eller 18 rest 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18,6"
          },
          "text": "Resten är inga decimaler: 18 rest 6 är 18 + 6/12 = 18,5."
        }
      ]
    },
    {
      "id": "as8-rest-2ffcbcf4",
      "part": "rest",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{188|40} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,7",
            "4 rest 28"
          ]
        }
      },
      "solution": [
        {
          "text": "40 går 4 gånger i 188: 4 · 40 = 160, och 28 blir över."
        },
        {
          "text": "Som decimaltal: 28 / 40 = 0,7, så svaret är 4,7 eller 4 rest 28."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,28"
          },
          "text": "Resten är inga decimaler: 4 rest 28 är 4 + 28/40 = 4,7."
        }
      ]
    },
    {
      "id": "as8-rest-5b6ffb32",
      "part": "rest",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{96|15} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,4",
            "6 rest 6"
          ]
        }
      },
      "solution": [
        {
          "text": "15 går 6 gånger i 96: 6 · 15 = 90, och 6 blir över."
        },
        {
          "text": "Som decimaltal: 6 / 15 = 0,4, så svaret är 6,4 eller 6 rest 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,6"
          },
          "text": "Resten är inga decimaler: 6 rest 6 är 6 + 6/15 = 6,4."
        }
      ]
    },
    {
      "id": "as8-rest-68616ebe",
      "part": "rest",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{110|25} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,4",
            "4 rest 10"
          ]
        }
      },
      "solution": [
        {
          "text": "25 går 4 gånger i 110: 4 · 25 = 100, och 10 blir över."
        },
        {
          "text": "Som decimaltal: 10 / 25 = 0,4, så svaret är 4,4 eller 4 rest 10."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,10"
          },
          "text": "Resten är inga decimaler: 4 rest 10 är 4 + 10/25 = 4,4."
        }
      ]
    },
    {
      "id": "as8-rest-2dabdfbe",
      "part": "rest",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "{165|25} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,6",
            "6 rest 15"
          ]
        }
      },
      "solution": [
        {
          "text": "25 går 6 gånger i 165: 6 · 25 = 150, och 15 blir över."
        },
        {
          "text": "Som decimaltal: 15 / 25 = 0,6, så svaret är 6,6 eller 6 rest 15."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,15"
          },
          "text": "Resten är inga decimaler: 6 rest 15 är 6 + 15/25 = 6,6."
        }
      ]
    }
  ]
};
