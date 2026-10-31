// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAu2.
export default {
  "code": "TAu2",
  "parts": [
    {
      "id": "heltal",
      "title": "Variablerna är heltal",
      "labels": [
        "1a",
        "1b",
        "3a",
        "3b"
      ]
    },
    {
      "id": "decimal",
      "title": "Variablerna är decimaltal",
      "labels": [
        "2a",
        "2b"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tau2-heltal-942c3f05",
      "part": "heltal",
      "text": "Bestäm värdet av följande uttryck om a = 12 och b = 8.",
      "points": "each",
      "rows": [
        "{3a|4} + {5b|8} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "14"
          ]
        }
      },
      "solution": [
        {
          "text": "Sätt in a = 12 och b = 8 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "{3 · 12|4} + {5 · 8|8} = 14"
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau2-heltal-867ce048",
      "part": "heltal",
      "text": "Bestäm värdet av följande uttryck om a = 4 och b = 6.",
      "points": "each",
      "rows": [
        "3a · 2b = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "144"
          ]
        }
      },
      "solution": [
        {
          "text": "Sätt in a = 4 och b = 6 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "3 · 4 · 2 · 6 = 144"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "884"
          },
          "text": "3a betyder 3 · a, inte talet 34: 3 · 4 · 2 · 6."
        }
      ]
    },
    {
      "id": "tau2-heltal-79b99dc6",
      "part": "heltal",
      "text": "Bestäm värdet av följande uttryck om a = 12 och b = 8.",
      "points": "each",
      "rows": [
        "(a - 7)(b - 5) = [a]"
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
          "text": "Sätt in a = 12 och b = 8 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "(12 - 7)(8 - 5) = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Parenteserna står bredvid varandra och ska multipliceras: 5 · 3 = 15."
        }
      ]
    },
    {
      "id": "tau2-heltal-e1658631",
      "part": "heltal",
      "text": "Bestäm värdet av följande uttryck om a = 4 och b = 6.",
      "points": "each",
      "rows": [
        "a^2 - b = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10"
          ]
        }
      },
      "solution": [
        {
          "text": "Sätt in a = 4 och b = 6 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "4^2 - 6 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "a² är a · a = 16, inte 2 · a = 8."
        }
      ]
    },
    {
      "id": "tau2-heltal-26583084",
      "part": "heltal",
      "text": "Bestäm värdet av följande uttryck om a = 12 och b = 8.",
      "points": "each",
      "rows": [
        "2(a + b) - {a|2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "34"
          ]
        }
      },
      "solution": [
        {
          "text": "Sätt in a = 12 och b = 8 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "2(12 + 8) - {12|2} = 34"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "26"
          },
          "text": "2 gånger hela parentesen: 2 · 20 = 40."
        }
      ]
    },
    {
      "id": "tau2-heltal-9eb0dbbc",
      "part": "heltal",
      "text": "Bestäm värdet av följande uttryck om a = 4 och b = 6.",
      "points": "each",
      "rows": [
        "a + {b|3} - {8|a} = [a]"
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
          "text": "Sätt in a = 4 och b = 6 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "4 + {6|3} - {8|4} = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Det är minus 8/a: 4 + 2 − 2 = 4."
        }
      ]
    },
    {
      "id": "tau2-decimal-0b490653",
      "part": "decimal",
      "text": "Bestäm värdet av följande uttryck om x = 0,25 och y = 0,5.",
      "points": "each",
      "rows": [
        "{1|x} + {1|y} = [a]"
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
          "text": "Sätt in x = 0,25 och y = 0,5 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "{1|0,25} + {1|0,5} = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,75"
          },
          "text": "1/x betyder 1 delat med x: 1/0,25 = 4 och 1/0,5 = 2."
        }
      ]
    },
    {
      "id": "tau2-decimal-2f9bb7de",
      "part": "decimal",
      "text": "Bestäm värdet av följande uttryck om x = 0,25 och y = 0,5.",
      "points": "each",
      "rows": [
        "{x|y} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Sätt in x = 0,25 och y = 0,5 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "{0,25|0,5} = 0,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Det är y/x. x/y är 0,25 delat med 0,5."
        }
      ]
    },
    {
      "id": "tau2-decimal-e9bb8ec8",
      "part": "decimal",
      "text": "Bestäm värdet av följande uttryck om x = 0,4 och y = 0,3.",
      "points": "each",
      "rows": [
        "2x + 5y = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,3"
          ]
        }
      },
      "solution": [
        {
          "text": "Sätt in x = 0,4 och y = 0,3 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "2 · 0,4 + 5 · 0,3 = 2,3"
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau2-decimal-dd2ef2d5",
      "part": "decimal",
      "text": "Bestäm värdet av följande uttryck om x = 0,25 och y = 0,5.",
      "points": "each",
      "rows": [
        "4x + 2y = [a]"
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
          "text": "Sätt in x = 0,25 och y = 0,5 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "4 · 0,25 + 2 · 0,5 = 2"
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau2-decimal-5f733021",
      "part": "decimal",
      "text": "Bestäm värdet av följande uttryck om x = 0,4 och y = 0,3.",
      "points": "each",
      "rows": [
        "10x · 10y = [a]"
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
          "text": "Sätt in x = 0,4 och y = 0,3 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "10 · 0,4 · 10 · 0,3 = 12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,12"
          },
          "text": "10x = 10 · 0,4 = 4 och 10y = 3: 4 · 3 = 12."
        }
      ]
    },
    {
      "id": "tau2-decimal-6cb3e048",
      "part": "decimal",
      "text": "Bestäm värdet av följande uttryck om x = 0,4 och y = 0,3.",
      "points": "each",
      "rows": [
        "{2|x} - {3|y} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-5"
          ]
        }
      },
      "solution": [
        {
          "text": "Sätt in x = 0,4 och y = 0,3 i uttrycket. En bokstav bredvid ett tal betyder gånger."
        },
        {
          "math": "{2|0,4} - {3|0,3} = -5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-0,1"
          },
          "text": "2/x betyder 2 delat med x: 2/0,4 = 5, och 3/0,3 = 10."
        }
      ]
    }
  ]
};
