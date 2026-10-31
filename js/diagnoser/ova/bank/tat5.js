// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAt5.
export default {
  "code": "TAt5",
  "parts": [
    {
      "id": "diagonaler",
      "title": "Diagonaler i en månghörning",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "triangeltal",
      "title": "Triangeltal",
      "labels": [
        "2a",
        "2b",
        "2c"
      ]
    },
    {
      "id": "vinkelsumma",
      "title": "Vinkelsumman i en månghörning",
      "labels": [
        "3a",
        "3b",
        "3c"
      ]
    },
    {
      "id": "uttryck",
      "title": "Skriv ett uttryck",
      "labels": [
        "1c",
        "3d"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tat5-diagonaler-b5cfcce4",
      "part": "diagonaler",
      "text": "I en kvadrat kan man dra två diagonaler. I en pentagon kan man dra fem diagonaler. Hur många diagonaler kan man dra i en 20-hörning?",
      "points": "each",
      "rows": [
        "Svar: [a] diagonaler"
      ],
      "boxes": {
        "a": {
          "accept": [
            "170"
          ]
        }
      },
      "solution": [
        {
          "text": "Från varje hörn går det en diagonal till alla hörn utom hörnet självt och dess två grannar: 20 − 3 = 17."
        },
        {
          "text": "20 hörn · 17 = 340, men då räknas varje diagonal två gånger, en gång från varje ände: 340 / 2 = 170."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "340"
          },
          "text": "Du räknade varje diagonal två gånger, en gång från varje ände."
        }
      ],
      "figure": {
        "view": [
          132,
          58
        ],
        "pieces": [
          {
            "path": "M4 6H52V54H4Z"
          },
          {
            "path": "M100 3L126.63 22.35L116.46 53.65L83.54 53.65L73.37 22.35Z"
          }
        ],
        "lines": [
          "M4 6L52 54M52 6L4 54",
          "M100 3L116.46 53.65L73.37 22.35L126.63 22.35L83.54 53.65Z"
        ]
      }
    },
    {
      "id": "tat5-diagonaler-e5c6a1f3",
      "part": "diagonaler",
      "text": "I en kvadrat kan man dra två diagonaler. I en pentagon kan man dra fem diagonaler. Hur många diagonaler kan man dra i en åttahörning?",
      "points": "each",
      "rows": [
        "Svar: [a] diagonaler"
      ],
      "boxes": {
        "a": {
          "accept": [
            "20"
          ]
        }
      },
      "solution": [
        {
          "text": "Från varje hörn går det en diagonal till alla hörn utom hörnet självt och dess två grannar: 8 − 3 = 5."
        },
        {
          "text": "8 hörn · 5 = 40, men då räknas varje diagonal två gånger, en gång från varje ände: 40 / 2 = 20."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "Du räknade varje diagonal två gånger, en gång från varje ände."
        }
      ],
      "figure": {
        "view": [
          132,
          58
        ],
        "pieces": [
          {
            "path": "M4 6H52V54H4Z"
          },
          {
            "path": "M100 3L126.63 22.35L116.46 53.65L83.54 53.65L73.37 22.35Z"
          }
        ],
        "lines": [
          "M4 6L52 54M52 6L4 54",
          "M100 3L116.46 53.65L73.37 22.35L126.63 22.35L83.54 53.65Z"
        ]
      }
    },
    {
      "id": "tat5-diagonaler-6977ae43",
      "part": "diagonaler",
      "text": "I en kvadrat kan man dra två diagonaler. I en pentagon kan man dra fem diagonaler. Hur många diagonaler kan man dra i en 12-hörning?",
      "points": "each",
      "rows": [
        "Svar: [a] diagonaler"
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
          "text": "Från varje hörn går det en diagonal till alla hörn utom hörnet självt och dess två grannar: 12 − 3 = 9."
        },
        {
          "text": "12 hörn · 9 = 108, men då räknas varje diagonal två gånger, en gång från varje ände: 108 / 2 = 54."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "108"
          },
          "text": "Du räknade varje diagonal två gånger, en gång från varje ände."
        }
      ],
      "figure": {
        "view": [
          132,
          58
        ],
        "pieces": [
          {
            "path": "M4 6H52V54H4Z"
          },
          {
            "path": "M100 3L126.63 22.35L116.46 53.65L83.54 53.65L73.37 22.35Z"
          }
        ],
        "lines": [
          "M4 6L52 54M52 6L4 54",
          "M100 3L116.46 53.65L73.37 22.35L126.63 22.35L83.54 53.65Z"
        ]
      }
    },
    {
      "id": "tat5-diagonaler-da40b23b",
      "part": "diagonaler",
      "text": "I en kvadrat kan man dra två diagonaler. I en pentagon kan man dra fem diagonaler. Hur många diagonaler kan man dra i en niohörning?",
      "points": "each",
      "rows": [
        "Svar: [a] diagonaler"
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
          "text": "Från varje hörn går det en diagonal till alla hörn utom hörnet självt och dess två grannar: 9 − 3 = 6."
        },
        {
          "text": "9 hörn · 6 = 54, men då räknas varje diagonal två gånger, en gång från varje ände: 54 / 2 = 27."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "54"
          },
          "text": "Du räknade varje diagonal två gånger, en gång från varje ände."
        }
      ],
      "figure": {
        "view": [
          132,
          58
        ],
        "pieces": [
          {
            "path": "M4 6H52V54H4Z"
          },
          {
            "path": "M100 3L126.63 22.35L116.46 53.65L83.54 53.65L73.37 22.35Z"
          }
        ],
        "lines": [
          "M4 6L52 54M52 6L4 54",
          "M100 3L116.46 53.65L73.37 22.35L126.63 22.35L83.54 53.65Z"
        ]
      }
    },
    {
      "id": "tat5-diagonaler-9cecdf8d",
      "part": "diagonaler",
      "text": "I en kvadrat kan man dra två diagonaler. I en pentagon kan man dra fem diagonaler. Hur många diagonaler kan man dra i en sjuhörning?",
      "points": "each",
      "rows": [
        "Svar: [a] diagonaler"
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
          "text": "Från varje hörn går det en diagonal till alla hörn utom hörnet självt och dess två grannar: 7 − 3 = 4."
        },
        {
          "text": "7 hörn · 4 = 28, men då räknas varje diagonal två gånger, en gång från varje ände: 28 / 2 = 14."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "28"
          },
          "text": "Du räknade varje diagonal två gånger, en gång från varje ände."
        }
      ],
      "figure": {
        "view": [
          132,
          58
        ],
        "pieces": [
          {
            "path": "M4 6H52V54H4Z"
          },
          {
            "path": "M100 3L126.63 22.35L116.46 53.65L83.54 53.65L73.37 22.35Z"
          }
        ],
        "lines": [
          "M4 6L52 54M52 6L4 54",
          "M100 3L116.46 53.65L73.37 22.35L126.63 22.35L83.54 53.65Z"
        ]
      }
    },
    {
      "id": "tat5-diagonaler-fca8bd74",
      "part": "diagonaler",
      "text": "I en kvadrat kan man dra två diagonaler. I en pentagon kan man dra fem diagonaler. Hur många diagonaler kan man dra i en 15-hörning?",
      "points": "each",
      "rows": [
        "Svar: [a] diagonaler"
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
          "text": "Från varje hörn går det en diagonal till alla hörn utom hörnet självt och dess två grannar: 15 − 3 = 12."
        },
        {
          "text": "15 hörn · 12 = 180, men då räknas varje diagonal två gånger, en gång från varje ände: 180 / 2 = 90."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "180"
          },
          "text": "Du räknade varje diagonal två gånger, en gång från varje ände."
        }
      ],
      "figure": {
        "view": [
          132,
          58
        ],
        "pieces": [
          {
            "path": "M4 6H52V54H4Z"
          },
          {
            "path": "M100 3L126.63 22.35L116.46 53.65L83.54 53.65L73.37 22.35Z"
          }
        ],
        "lines": [
          "M4 6L52 54M52 6L4 54",
          "M100 3L116.46 53.65L73.37 22.35L126.63 22.35L83.54 53.65Z"
        ]
      }
    },
    {
      "id": "tat5-triangeltal-9d2f1651",
      "part": "triangeltal",
      "text": "Tal som kan bilda trianglar kallas för triangeltal. De första fyra triangeltalen är 1, 3, 6 och 10. Vilket är det tionde triangeltalet?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "55"
          ]
        }
      },
      "solution": [
        {
          "text": "Varje triangel får en ny rad som är en längre: 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10 …"
        },
        {
          "math": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "45"
          },
          "text": "Det är triangeltal nummer 9. Det första är 1, så räkna med det."
        }
      ],
      "figure": {
        "view": [
          122,
          34
        ],
        "pieces": [
          {
            "circle": [
              7,
              29,
              3
            ]
          },
          {
            "circle": [
              27,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              21,
              3
            ]
          },
          {
            "circle": [
              55,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              29,
              3
            ]
          },
          {
            "circle": [
              71,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              13,
              3
            ]
          },
          {
            "circle": [
              91,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              29,
              3
            ]
          },
          {
            "circle": [
              107,
              29,
              3
            ]
          },
          {
            "circle": [
              115,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              21,
              3
            ]
          },
          {
            "circle": [
              115,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              5,
              3
            ]
          }
        ]
      }
    },
    {
      "id": "tat5-triangeltal-3245f04d",
      "part": "triangeltal",
      "text": "Tal som kan bilda trianglar kallas för triangeltal. De första fyra triangeltalen är 1, 3, 6 och 10. Vilket är det sjunde triangeltalet?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Varje triangel får en ny rad som är en längre: 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10 …"
        },
        {
          "math": "1 + 2 + 3 + 4 + 5 + 6 + 7 = 28"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "21"
          },
          "text": "Det är triangeltal nummer 6. Det första är 1, så räkna med det."
        }
      ],
      "figure": {
        "view": [
          122,
          34
        ],
        "pieces": [
          {
            "circle": [
              7,
              29,
              3
            ]
          },
          {
            "circle": [
              27,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              21,
              3
            ]
          },
          {
            "circle": [
              55,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              29,
              3
            ]
          },
          {
            "circle": [
              71,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              13,
              3
            ]
          },
          {
            "circle": [
              91,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              29,
              3
            ]
          },
          {
            "circle": [
              107,
              29,
              3
            ]
          },
          {
            "circle": [
              115,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              21,
              3
            ]
          },
          {
            "circle": [
              115,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              5,
              3
            ]
          }
        ]
      }
    },
    {
      "id": "tat5-triangeltal-a20e35c1",
      "part": "triangeltal",
      "text": "Tal som kan bilda trianglar kallas för triangeltal. De första fyra triangeltalen är 1, 3, 6 och 10. Vad är summan av det fjärde och det femte triangeltalet?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Triangeltal nummer 4 är 10 och nummer 5 är 15: 10 + 15 = 25."
        },
        {
          "text": "Två triangeltal i rad bildar tillsammans en kvadrat: 5 · 5 = 25."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16"
          },
          "text": "Det är triangeltal nummer 3 och 4. Det första triangeltalet är 1."
        }
      ],
      "figure": {
        "view": [
          122,
          34
        ],
        "pieces": [
          {
            "circle": [
              7,
              29,
              3
            ]
          },
          {
            "circle": [
              27,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              21,
              3
            ]
          },
          {
            "circle": [
              55,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              29,
              3
            ]
          },
          {
            "circle": [
              71,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              13,
              3
            ]
          },
          {
            "circle": [
              91,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              29,
              3
            ]
          },
          {
            "circle": [
              107,
              29,
              3
            ]
          },
          {
            "circle": [
              115,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              21,
              3
            ]
          },
          {
            "circle": [
              115,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              5,
              3
            ]
          }
        ]
      }
    },
    {
      "id": "tat5-triangeltal-b3c0b6ac",
      "part": "triangeltal",
      "text": "Tal som kan bilda trianglar kallas för triangeltal. De första fyra triangeltalen är 1, 3, 6 och 10. Vad är summan av det sjätte och det sjunde triangeltalet?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "49"
          ]
        }
      },
      "solution": [
        {
          "text": "Triangeltal nummer 6 är 21 och nummer 7 är 28: 21 + 28 = 49."
        },
        {
          "text": "Två triangeltal i rad bildar tillsammans en kvadrat: 7 · 7 = 49."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Det är triangeltal nummer 5 och 6. Det första triangeltalet är 1."
        }
      ],
      "figure": {
        "view": [
          122,
          34
        ],
        "pieces": [
          {
            "circle": [
              7,
              29,
              3
            ]
          },
          {
            "circle": [
              27,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              21,
              3
            ]
          },
          {
            "circle": [
              55,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              29,
              3
            ]
          },
          {
            "circle": [
              71,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              13,
              3
            ]
          },
          {
            "circle": [
              91,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              29,
              3
            ]
          },
          {
            "circle": [
              107,
              29,
              3
            ]
          },
          {
            "circle": [
              115,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              21,
              3
            ]
          },
          {
            "circle": [
              115,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              5,
              3
            ]
          }
        ]
      }
    },
    {
      "id": "tat5-triangeltal-a6b8264a",
      "part": "triangeltal",
      "text": "Tal som kan bilda trianglar kallas för triangeltal. De första fyra triangeltalen är 1, 3, 6 och 10. Vilket är det tolfte triangeltalet?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "78"
          ]
        }
      },
      "solution": [
        {
          "text": "Varje triangel får en ny rad som är en längre: 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10 …"
        },
        {
          "math": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 = 78"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "66"
          },
          "text": "Det är triangeltal nummer 11. Det första är 1, så räkna med det."
        }
      ],
      "figure": {
        "view": [
          122,
          34
        ],
        "pieces": [
          {
            "circle": [
              7,
              29,
              3
            ]
          },
          {
            "circle": [
              27,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              21,
              3
            ]
          },
          {
            "circle": [
              55,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              29,
              3
            ]
          },
          {
            "circle": [
              71,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              13,
              3
            ]
          },
          {
            "circle": [
              91,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              29,
              3
            ]
          },
          {
            "circle": [
              107,
              29,
              3
            ]
          },
          {
            "circle": [
              115,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              21,
              3
            ]
          },
          {
            "circle": [
              115,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              5,
              3
            ]
          }
        ]
      }
    },
    {
      "id": "tat5-triangeltal-b55d2310",
      "part": "triangeltal",
      "text": "Tal som kan bilda trianglar kallas för triangeltal. De första fyra triangeltalen är 1, 3, 6 och 10. Vilket är det sjätte triangeltalet?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "21"
          ]
        }
      },
      "solution": [
        {
          "text": "Varje triangel får en ny rad som är en längre: 1, 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10 …"
        },
        {
          "math": "1 + 2 + 3 + 4 + 5 + 6 = 21"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Det är triangeltal nummer 5. Det första är 1, så räkna med det."
        }
      ],
      "figure": {
        "view": [
          122,
          34
        ],
        "pieces": [
          {
            "circle": [
              7,
              29,
              3
            ]
          },
          {
            "circle": [
              27,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              29,
              3
            ]
          },
          {
            "circle": [
              35,
              21,
              3
            ]
          },
          {
            "circle": [
              55,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              29,
              3
            ]
          },
          {
            "circle": [
              71,
              29,
              3
            ]
          },
          {
            "circle": [
              63,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              21,
              3
            ]
          },
          {
            "circle": [
              71,
              13,
              3
            ]
          },
          {
            "circle": [
              91,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              29,
              3
            ]
          },
          {
            "circle": [
              107,
              29,
              3
            ]
          },
          {
            "circle": [
              115,
              29,
              3
            ]
          },
          {
            "circle": [
              99,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              21,
              3
            ]
          },
          {
            "circle": [
              115,
              21,
              3
            ]
          },
          {
            "circle": [
              107,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              13,
              3
            ]
          },
          {
            "circle": [
              115,
              5,
              3
            ]
          }
        ]
      }
    },
    {
      "id": "tat5-vinkelsumma-9258b9aa",
      "part": "vinkelsumma",
      "text": "Vinkelsumman i en triangel är 180°. Hur stor är vinkelsumman i en åttahörning?",
      "points": "each",
      "rows": [
        "Svar: [a] grader"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1080"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra diagonaler från ett hörn: de delar åttahörningen i 8 − 2 = 6 trianglar."
        },
        {
          "math": "6 · 180 = 1080"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1440"
          },
          "text": "En månghörning med 8 hörn delas i 6 trianglar, inte 8."
        }
      ]
    },
    {
      "id": "tat5-vinkelsumma-17726fe2",
      "part": "vinkelsumma",
      "text": "Vinkelsumman i en triangel är 180°. Hur stor är vinkelsumman i en tiohörning?",
      "points": "each",
      "rows": [
        "Svar: [a] grader"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1440"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra diagonaler från ett hörn: de delar tiohörningen i 10 − 2 = 8 trianglar."
        },
        {
          "math": "8 · 180 = 1440"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1800"
          },
          "text": "En månghörning med 10 hörn delas i 8 trianglar, inte 10."
        }
      ]
    },
    {
      "id": "tat5-vinkelsumma-792d3152",
      "part": "vinkelsumma",
      "text": "Vinkelsumman i en triangel är 180°. Hur stor är vinkelsumman i en sjuhörning?",
      "points": "each",
      "rows": [
        "Svar: [a] grader"
      ],
      "boxes": {
        "a": {
          "accept": [
            "900"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra diagonaler från ett hörn: de delar sjuhörningen i 7 − 2 = 5 trianglar."
        },
        {
          "math": "5 · 180 = 900"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1260"
          },
          "text": "En månghörning med 7 hörn delas i 5 trianglar, inte 7."
        }
      ]
    },
    {
      "id": "tat5-vinkelsumma-c0db82c4",
      "part": "vinkelsumma",
      "text": "Vinkelsumman i en triangel är 180°. Hur stor är varje vinkel i en regelbunden åttahörning?",
      "points": "each",
      "rows": [
        "Svar: [a] grader"
      ],
      "boxes": {
        "a": {
          "accept": [
            "135"
          ]
        }
      },
      "solution": [
        {
          "text": "En åttahörning delas i 8 − 2 = 6 trianglar: vinkelsumman är 6 · 180° = 1080°."
        },
        {
          "text": "Alla 8 vinklar är lika stora i en regelbunden åttahörning: 1080° / 8 = 135°."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1080"
          },
          "text": "Det är vinkelsumman. Varje vinkel är den delat i 8 lika stora vinklar."
        }
      ]
    },
    {
      "id": "tat5-vinkelsumma-49111f04",
      "part": "vinkelsumma",
      "text": "Vinkelsumman i en triangel är 180°. Hur stor är vinkelsumman i en 12-hörning?",
      "points": "each",
      "rows": [
        "Svar: [a] grader"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1800"
          ]
        }
      },
      "solution": [
        {
          "text": "Dra diagonaler från ett hörn: de delar 12-hörningen i 12 − 2 = 10 trianglar."
        },
        {
          "math": "10 · 180 = 1800"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2160"
          },
          "text": "En månghörning med 12 hörn delas i 10 trianglar, inte 12."
        }
      ]
    },
    {
      "id": "tat5-vinkelsumma-cdf6c105",
      "part": "vinkelsumma",
      "text": "Vinkelsumman i en triangel är 180°. En månghörning har vinkelsumman 1260°. Hur många hörn har den?",
      "points": "each",
      "rows": [
        "Svar: [a] hörn"
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
          "text": "1260 / 180 = 7, så månghörningen delas i 7 trianglar."
        },
        {
          "text": "Antalet trianglar är två färre än antalet hörn: 7 + 2 = 9 hörn."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7"
          },
          "text": "7 är antalet trianglar. Hörnen är två fler än trianglarna."
        }
      ]
    },
    {
      "id": "tat5-uttryck-7beace90",
      "part": "uttryck",
      "text": "Diagonalerna från ett hörn delar en n-hörning i trianglar. Hur många trianglar blir det? Skriv ett uttryck.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "n - 2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Från ett hörn går det n − 3 diagonaler, och de delar n-hörningen i en triangel mer än så: n − 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "n - 3"
          },
          "text": "Det är antalet diagonaler. De delar in n-hörningen i en triangel mer: n − 2."
        }
      ]
    },
    {
      "id": "tat5-uttryck-b6e2ae7d",
      "part": "uttryck",
      "text": "Hur stor är varje vinkel i en regelbunden n-hörning? Skriv ett uttryck.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(n - 2) · 180/n"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Vinkelsumman är (n − 2) · 180°, och i en regelbunden n-hörning är alla n vinklar lika stora."
        },
        {
          "text": "Varje vinkel är vinkelsumman delat med n: (n − 2) · 180/n."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(n - 2) · 180"
          },
          "text": "Det är hela vinkelsumman. Varje vinkel är den delat med n."
        }
      ]
    },
    {
      "id": "tat5-uttryck-e36d77c3",
      "part": "uttryck",
      "text": "Hur många sidor och diagonaler har en n-hörning tillsammans? Skriv ett uttryck.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "n(n - 1)/2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Varje hörn är förbundet med alla n − 1 andra hörn, med en sida eller en diagonal."
        },
        {
          "text": "n(n − 1) räknar varje sträcka två gånger, en gång från varje ände: n(n − 1)/2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "n(n - 3)/2"
          },
          "text": "Det är bara diagonalerna. Sidorna är n till: n(n − 3)/2 + n = n(n − 1)/2."
        }
      ]
    },
    {
      "id": "tat5-uttryck-2848a3a4",
      "part": "uttryck",
      "text": "Skriv ett uttryck för det n:te triangeltalet.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "n(n + 1)/2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Det n:te triangeltalet är 1 + 2 + … + n."
        },
        {
          "text": "Två sådana trianglar bildar en rektangel med n rader och n + 1 kolumner, så triangeln är hälften: n(n + 1)/2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "n(n - 1)/2"
          },
          "text": "Det är triangeltalet före. Prova med n = 1: det första triangeltalet är 1."
        }
      ]
    },
    {
      "id": "tat5-uttryck-0479e9ae",
      "part": "uttryck",
      "text": "Hur många diagonaler går det från ett hörn i en n-hörning? Skriv ett uttryck.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "n - 3"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Från ett hörn går det en diagonal till alla andra hörn utom de två grannarna, som det redan finns sidor till."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "n - 1"
          },
          "text": "Till grannarna går det sidor, inte diagonaler: det är n − 3."
        }
      ]
    },
    {
      "id": "tat5-uttryck-c6dfb1ff",
      "part": "uttryck",
      "text": "Skriv ett uttryck för summan av det n:te och det (n + 1):te triangeltalet.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(n + 1)^2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Två triangeltal i rad bildar tillsammans en kvadrat: 1 + 3 = 4, 3 + 6 = 9, 6 + 10 = 16."
        },
        {
          "text": "Kvadraten har sidan n + 1: (n + 1)²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "n^2"
          },
          "text": "Prova med n = 1: 1 + 3 = 4 = 2². Kvadraten har sidan n + 1."
        }
      ]
    }
  ]
};
