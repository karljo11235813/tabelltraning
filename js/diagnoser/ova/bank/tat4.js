// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAt4.
export default {
  "code": "TAt4",
  "parts": [
    {
      "id": "handskakningar",
      "title": "Handskakningar",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "cirklar",
      "title": "Cirklar i ett mönster",
      "labels": [
        "2a",
        "2b"
      ]
    },
    {
      "id": "trappor",
      "title": "Kvadrater i en trappa",
      "labels": [
        "3a",
        "3b"
      ]
    },
    {
      "id": "serie",
      "title": "Summan av en oändlig talföljd",
      "labels": [
        "4"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tat4-handskakningar-3431dcb5",
      "part": "handskakningar",
      "text": "Om två personer skakar hand blir det 1 handskakning, tre personer blir 3 handskakningar och fyra personer 6 handskakningar. I en turnering spelar 12 lag en match mot vart och ett av de andra lagen. Hur många matcher blir det?",
      "points": "each",
      "rows": [
        "Svar: [a] matcher"
      ],
      "boxes": {
        "a": {
          "accept": [
            "66"
          ]
        }
      },
      "solution": [
        {
          "text": "Varje lag möter de 11 andra: 12 · 11 = 132."
        },
        {
          "text": "Men då räknas varje match två gånger, en gång för var och en av de två: 132 / 2 = 66."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "132"
          },
          "text": "Du räknade varje match två gånger: när A möter B är det samma match som när B möter A."
        }
      ]
    },
    {
      "id": "tat4-handskakningar-7b1f6883",
      "part": "handskakningar",
      "text": "Om två personer skakar hand blir det 1 handskakning, tre personer blir 3 handskakningar och fyra personer 6 handskakningar. I en turnering spelar 9 lag en match mot vart och ett av de andra lagen. Hur många matcher blir det?",
      "points": "each",
      "rows": [
        "Svar: [a] matcher"
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
          "text": "Det första laget möter de 8 andra, det andra möter 7 nya, det tredje möter 6 nya, och så vidare."
        },
        {
          "math": "8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "72"
          },
          "text": "Du räknade varje match två gånger: när A möter B är det samma match som när B möter A."
        }
      ]
    },
    {
      "id": "tat4-handskakningar-b470db58",
      "part": "handskakningar",
      "text": "Om två personer skakar hand blir det 1 handskakning, tre personer blir 3 handskakningar och fyra personer 6 handskakningar. Hur många handskakningar blir det om tio personer ska skaka hand med varandra?",
      "points": "each",
      "rows": [
        "Svar: [a] handskakningar"
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
          "text": "Den första skakar hand med de 9 andra, den andra skakar hand med 8 nya, den tredje skakar hand med 7 nya, och så vidare."
        },
        {
          "math": "9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "90"
          },
          "text": "Du räknade varje handskakning två gånger: när A skakar hand med B är det samma handskakning som när B skakar hand med A."
        }
      ]
    },
    {
      "id": "tat4-handskakningar-8b09950b",
      "part": "handskakningar",
      "text": "Om två personer skakar hand blir det 1 handskakning, tre personer blir 3 handskakningar och fyra personer 6 handskakningar. I en klass med 20 elever ska alla skaka hand med varandra. Hur många handskakningar blir det?",
      "points": "each",
      "rows": [
        "Svar: [a] handskakningar"
      ],
      "boxes": {
        "a": {
          "accept": [
            "190"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en skakar hand med de 19 andra: 20 · 19 = 380."
        },
        {
          "text": "Men då räknas varje handskakning två gånger, en gång för var och en av de två: 380 / 2 = 190."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "380"
          },
          "text": "Du räknade varje handskakning två gånger: när A skakar hand med B är det samma handskakning som när B skakar hand med A."
        }
      ]
    },
    {
      "id": "tat4-handskakningar-46a7cb50",
      "part": "handskakningar",
      "text": "Om två personer skakar hand blir det 1 handskakning, tre personer blir 3 handskakningar och fyra personer 6 handskakningar. Hur många handskakningar blir det om åtta personer ska skaka hand med varandra?",
      "points": "each",
      "rows": [
        "Svar: [a] handskakningar"
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
          "text": "Den första skakar hand med de 7 andra, den andra skakar hand med 6 nya, den tredje skakar hand med 5 nya, och så vidare."
        },
        {
          "math": "7 + 6 + 5 + 4 + 3 + 2 + 1 = 28"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "56"
          },
          "text": "Du räknade varje handskakning två gånger: när A skakar hand med B är det samma handskakning som när B skakar hand med A."
        }
      ]
    },
    {
      "id": "tat4-handskakningar-627d962c",
      "part": "handskakningar",
      "text": "Om två personer skakar hand blir det 1 handskakning, tre personer blir 3 handskakningar och fyra personer 6 handskakningar. Hur många handskakningar blir det om sju personer ska skaka hand med varandra?",
      "points": "each",
      "rows": [
        "Svar: [a] handskakningar"
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
          "text": "Den första skakar hand med de 6 andra, den andra skakar hand med 5 nya, den tredje skakar hand med 4 nya, och så vidare."
        },
        {
          "math": "6 + 5 + 4 + 3 + 2 + 1 = 21"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "42"
          },
          "text": "Du räknade varje handskakning två gånger: när A skakar hand med B är det samma handskakning som när B skakar hand med A."
        }
      ]
    },
    {
      "id": "tat4-cirklar-0dbcec3f",
      "part": "cirklar",
      "text": "I mönstret är varje skuggad cirkel omgiven av sex vita cirklar. Till 3 skuggade cirklar behövs det 14 vita cirklar. Hur många vita cirklar behöver man till 20 skuggade cirklar?",
      "points": "each",
      "rows": [
        "Svar: [a] vita cirklar"
      ],
      "boxes": {
        "a": {
          "accept": [
            "82"
          ]
        }
      },
      "solution": [
        {
          "text": "Till 1 skuggad cirkel behövs 6 vita. Varje ny skuggad cirkel behöver bara 4 nya vita: två av de sex delas med grannen."
        },
        {
          "math": "6 + 4 · 19 = 82"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "120"
          },
          "text": "Varje skuggad cirkel har sex vita runt sig, men två grannar delar på två av dem."
        }
      ],
      "figure": {
        "view": [
          128,
          64
        ],
        "pieces": [
          {
            "circle": [
              12,
              22,
              10
            ]
          },
          {
            "circle": [
              12,
              42,
              10
            ]
          },
          {
            "circle": [
              46.6,
              22,
              10
            ]
          },
          {
            "circle": [
              46.6,
              42,
              10
            ]
          },
          {
            "circle": [
              81.3,
              22,
              10
            ]
          },
          {
            "circle": [
              81.3,
              42,
              10
            ]
          },
          {
            "circle": [
              115.9,
              22,
              10
            ]
          },
          {
            "circle": [
              115.9,
              42,
              10
            ]
          },
          {
            "circle": [
              29.3,
              12,
              10
            ]
          },
          {
            "circle": [
              29.3,
              52,
              10
            ]
          },
          {
            "circle": [
              64,
              12,
              10
            ]
          },
          {
            "circle": [
              64,
              52,
              10
            ]
          },
          {
            "circle": [
              98.6,
              12,
              10
            ]
          },
          {
            "circle": [
              98.6,
              52,
              10
            ]
          },
          {
            "circle": [
              29.3,
              32,
              10
            ]
          },
          {
            "circle": [
              64,
              32,
              10
            ]
          },
          {
            "circle": [
              98.6,
              32,
              10
            ]
          }
        ],
        "shaded": [
          14,
          15,
          16
        ]
      }
    },
    {
      "id": "tat4-cirklar-3247aa08",
      "part": "cirklar",
      "text": "I mönstret är varje skuggad cirkel omgiven av sex vita cirklar. Till 3 skuggade cirklar behövs det 14 vita cirklar. Hur många vita cirklar behöver man till 5 skuggade cirklar?",
      "points": "each",
      "rows": [
        "Svar: [a] vita cirklar"
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
          "text": "Till 1 skuggad cirkel behövs 6 vita. Varje ny skuggad cirkel behöver bara 4 nya vita: två av de sex delas med grannen."
        },
        {
          "math": "6 + 4 · 4 = 22"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Varje skuggad cirkel har sex vita runt sig, men två grannar delar på två av dem."
        }
      ],
      "figure": {
        "view": [
          128,
          64
        ],
        "pieces": [
          {
            "circle": [
              12,
              22,
              10
            ]
          },
          {
            "circle": [
              12,
              42,
              10
            ]
          },
          {
            "circle": [
              46.6,
              22,
              10
            ]
          },
          {
            "circle": [
              46.6,
              42,
              10
            ]
          },
          {
            "circle": [
              81.3,
              22,
              10
            ]
          },
          {
            "circle": [
              81.3,
              42,
              10
            ]
          },
          {
            "circle": [
              115.9,
              22,
              10
            ]
          },
          {
            "circle": [
              115.9,
              42,
              10
            ]
          },
          {
            "circle": [
              29.3,
              12,
              10
            ]
          },
          {
            "circle": [
              29.3,
              52,
              10
            ]
          },
          {
            "circle": [
              64,
              12,
              10
            ]
          },
          {
            "circle": [
              64,
              52,
              10
            ]
          },
          {
            "circle": [
              98.6,
              12,
              10
            ]
          },
          {
            "circle": [
              98.6,
              52,
              10
            ]
          },
          {
            "circle": [
              29.3,
              32,
              10
            ]
          },
          {
            "circle": [
              64,
              32,
              10
            ]
          },
          {
            "circle": [
              98.6,
              32,
              10
            ]
          }
        ],
        "shaded": [
          14,
          15,
          16
        ]
      }
    },
    {
      "id": "tat4-cirklar-90bd19d7",
      "part": "cirklar",
      "text": "I mönstret är varje skuggad cirkel omgiven av sex vita cirklar. Till 3 skuggade cirklar behövs det 14 vita cirklar. Hur många vita cirklar behöver man till 8 skuggade cirklar?",
      "points": "each",
      "rows": [
        "Svar: [a] vita cirklar"
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
          "text": "Till 1 skuggad cirkel behövs 6 vita. Varje ny skuggad cirkel behöver bara 4 nya vita: två av de sex delas med grannen."
        },
        {
          "math": "6 + 4 · 7 = 34"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "48"
          },
          "text": "Varje skuggad cirkel har sex vita runt sig, men två grannar delar på två av dem."
        }
      ],
      "figure": {
        "view": [
          128,
          64
        ],
        "pieces": [
          {
            "circle": [
              12,
              22,
              10
            ]
          },
          {
            "circle": [
              12,
              42,
              10
            ]
          },
          {
            "circle": [
              46.6,
              22,
              10
            ]
          },
          {
            "circle": [
              46.6,
              42,
              10
            ]
          },
          {
            "circle": [
              81.3,
              22,
              10
            ]
          },
          {
            "circle": [
              81.3,
              42,
              10
            ]
          },
          {
            "circle": [
              115.9,
              22,
              10
            ]
          },
          {
            "circle": [
              115.9,
              42,
              10
            ]
          },
          {
            "circle": [
              29.3,
              12,
              10
            ]
          },
          {
            "circle": [
              29.3,
              52,
              10
            ]
          },
          {
            "circle": [
              64,
              12,
              10
            ]
          },
          {
            "circle": [
              64,
              52,
              10
            ]
          },
          {
            "circle": [
              98.6,
              12,
              10
            ]
          },
          {
            "circle": [
              98.6,
              52,
              10
            ]
          },
          {
            "circle": [
              29.3,
              32,
              10
            ]
          },
          {
            "circle": [
              64,
              32,
              10
            ]
          },
          {
            "circle": [
              98.6,
              32,
              10
            ]
          }
        ],
        "shaded": [
          14,
          15,
          16
        ]
      }
    },
    {
      "id": "tat4-cirklar-882dbf66",
      "part": "cirklar",
      "text": "I mönstret är varje skuggad cirkel omgiven av sex vita cirklar. Till 3 skuggade cirklar behövs det 14 vita cirklar. Hur många vita cirklar behöver man till 12 skuggade cirklar?",
      "points": "each",
      "rows": [
        "Svar: [a] vita cirklar"
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
          "text": "Till 1 skuggad cirkel behövs 6 vita. Varje ny skuggad cirkel behöver bara 4 nya vita: två av de sex delas med grannen."
        },
        {
          "math": "6 + 4 · 11 = 50"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "72"
          },
          "text": "Varje skuggad cirkel har sex vita runt sig, men två grannar delar på två av dem."
        }
      ],
      "figure": {
        "view": [
          128,
          64
        ],
        "pieces": [
          {
            "circle": [
              12,
              22,
              10
            ]
          },
          {
            "circle": [
              12,
              42,
              10
            ]
          },
          {
            "circle": [
              46.6,
              22,
              10
            ]
          },
          {
            "circle": [
              46.6,
              42,
              10
            ]
          },
          {
            "circle": [
              81.3,
              22,
              10
            ]
          },
          {
            "circle": [
              81.3,
              42,
              10
            ]
          },
          {
            "circle": [
              115.9,
              22,
              10
            ]
          },
          {
            "circle": [
              115.9,
              42,
              10
            ]
          },
          {
            "circle": [
              29.3,
              12,
              10
            ]
          },
          {
            "circle": [
              29.3,
              52,
              10
            ]
          },
          {
            "circle": [
              64,
              12,
              10
            ]
          },
          {
            "circle": [
              64,
              52,
              10
            ]
          },
          {
            "circle": [
              98.6,
              12,
              10
            ]
          },
          {
            "circle": [
              98.6,
              52,
              10
            ]
          },
          {
            "circle": [
              29.3,
              32,
              10
            ]
          },
          {
            "circle": [
              64,
              32,
              10
            ]
          },
          {
            "circle": [
              98.6,
              32,
              10
            ]
          }
        ],
        "shaded": [
          14,
          15,
          16
        ]
      }
    },
    {
      "id": "tat4-cirklar-eb03b6d8",
      "part": "cirklar",
      "text": "I mönstret är varje skuggad cirkel omgiven av sex vita cirklar. Till 3 skuggade cirklar behövs det 14 vita cirklar. Hur många vita cirklar behöver man till 10 skuggade cirklar?",
      "points": "each",
      "rows": [
        "Svar: [a] vita cirklar"
      ],
      "boxes": {
        "a": {
          "accept": [
            "42"
          ]
        }
      },
      "solution": [
        {
          "text": "Till 1 skuggad cirkel behövs 6 vita. Varje ny skuggad cirkel behöver bara 4 nya vita: två av de sex delas med grannen."
        },
        {
          "math": "6 + 4 · 9 = 42"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60"
          },
          "text": "Varje skuggad cirkel har sex vita runt sig, men två grannar delar på två av dem."
        }
      ],
      "figure": {
        "view": [
          128,
          64
        ],
        "pieces": [
          {
            "circle": [
              12,
              22,
              10
            ]
          },
          {
            "circle": [
              12,
              42,
              10
            ]
          },
          {
            "circle": [
              46.6,
              22,
              10
            ]
          },
          {
            "circle": [
              46.6,
              42,
              10
            ]
          },
          {
            "circle": [
              81.3,
              22,
              10
            ]
          },
          {
            "circle": [
              81.3,
              42,
              10
            ]
          },
          {
            "circle": [
              115.9,
              22,
              10
            ]
          },
          {
            "circle": [
              115.9,
              42,
              10
            ]
          },
          {
            "circle": [
              29.3,
              12,
              10
            ]
          },
          {
            "circle": [
              29.3,
              52,
              10
            ]
          },
          {
            "circle": [
              64,
              12,
              10
            ]
          },
          {
            "circle": [
              64,
              52,
              10
            ]
          },
          {
            "circle": [
              98.6,
              12,
              10
            ]
          },
          {
            "circle": [
              98.6,
              52,
              10
            ]
          },
          {
            "circle": [
              29.3,
              32,
              10
            ]
          },
          {
            "circle": [
              64,
              32,
              10
            ]
          },
          {
            "circle": [
              98.6,
              32,
              10
            ]
          }
        ],
        "shaded": [
          14,
          15,
          16
        ]
      }
    },
    {
      "id": "tat4-cirklar-51ed7e96",
      "part": "cirklar",
      "text": "I mönstret är varje skuggad cirkel omgiven av sex vita cirklar. Till 3 skuggade cirklar behövs det 14 vita cirklar. Hur många vita cirklar behöver man till 7 skuggade cirklar?",
      "points": "each",
      "rows": [
        "Svar: [a] vita cirklar"
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
          "text": "Till 1 skuggad cirkel behövs 6 vita. Varje ny skuggad cirkel behöver bara 4 nya vita: två av de sex delas med grannen."
        },
        {
          "math": "6 + 4 · 6 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "42"
          },
          "text": "Varje skuggad cirkel har sex vita runt sig, men två grannar delar på två av dem."
        }
      ],
      "figure": {
        "view": [
          128,
          64
        ],
        "pieces": [
          {
            "circle": [
              12,
              22,
              10
            ]
          },
          {
            "circle": [
              12,
              42,
              10
            ]
          },
          {
            "circle": [
              46.6,
              22,
              10
            ]
          },
          {
            "circle": [
              46.6,
              42,
              10
            ]
          },
          {
            "circle": [
              81.3,
              22,
              10
            ]
          },
          {
            "circle": [
              81.3,
              42,
              10
            ]
          },
          {
            "circle": [
              115.9,
              22,
              10
            ]
          },
          {
            "circle": [
              115.9,
              42,
              10
            ]
          },
          {
            "circle": [
              29.3,
              12,
              10
            ]
          },
          {
            "circle": [
              29.3,
              52,
              10
            ]
          },
          {
            "circle": [
              64,
              12,
              10
            ]
          },
          {
            "circle": [
              64,
              52,
              10
            ]
          },
          {
            "circle": [
              98.6,
              12,
              10
            ]
          },
          {
            "circle": [
              98.6,
              52,
              10
            ]
          },
          {
            "circle": [
              29.3,
              32,
              10
            ]
          },
          {
            "circle": [
              64,
              32,
              10
            ]
          },
          {
            "circle": [
              98.6,
              32,
              10
            ]
          }
        ],
        "shaded": [
          14,
          15,
          16
        ]
      }
    },
    {
      "id": "tat4-trappor-f0c56537",
      "part": "trappor",
      "text": "I figuren ser du två trappmönster. När mönstret är 2 kvadrater högt består det av 4 kvadrater, och när det är 4 kvadrater högt av 16 kvadrater. Hur många kvadrater behövs det om mönstret är 20 kvadrater högt?",
      "points": "each",
      "rows": [
        "Svar: [a] kvadrater"
      ],
      "boxes": {
        "a": {
          "accept": [
            "400",
            "20²"
          ]
        }
      },
      "solution": [
        {
          "text": "Raderna har 1, 3, 5, 7 … kvadrater uppifrån. 2 högt: 1 + 3 = 4 = 2 · 2. 4 högt: 1 + 3 + 5 + 7 = 16 = 4 · 4."
        },
        {
          "text": "Så 20 högt ger 20 · 20 = 400 kvadrater."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "210"
          },
          "text": "Raderna ökar med 2 kvadrater, inte med 1: 1, 3, 5, 7 …"
        }
      ],
      "figure": {
        "view": [
          114,
          44
        ],
        "pieces": [
          {
            "path": "M2 32H12V42H2Z"
          },
          {
            "path": "M12 32H22V42H12Z"
          },
          {
            "path": "M22 32H32V42H22Z"
          },
          {
            "path": "M12 22H22V32H12Z"
          },
          {
            "path": "M42 32H52V42H42Z"
          },
          {
            "path": "M52 32H62V42H52Z"
          },
          {
            "path": "M62 32H72V42H62Z"
          },
          {
            "path": "M72 32H82V42H72Z"
          },
          {
            "path": "M82 32H92V42H82Z"
          },
          {
            "path": "M92 32H102V42H92Z"
          },
          {
            "path": "M102 32H112V42H102Z"
          },
          {
            "path": "M52 22H62V32H52Z"
          },
          {
            "path": "M62 22H72V32H62Z"
          },
          {
            "path": "M72 22H82V32H72Z"
          },
          {
            "path": "M82 22H92V32H82Z"
          },
          {
            "path": "M92 22H102V32H92Z"
          },
          {
            "path": "M62 12H72V22H62Z"
          },
          {
            "path": "M72 12H82V22H72Z"
          },
          {
            "path": "M82 12H92V22H82Z"
          },
          {
            "path": "M72 2H82V12H72Z"
          }
        ]
      }
    },
    {
      "id": "tat4-trappor-fa3dfe2e",
      "part": "trappor",
      "text": "I figuren ser du två trappmönster. När mönstret är 2 kvadrater högt består det av 4 kvadrater, och när det är 4 kvadrater högt av 16 kvadrater. Hur många kvadrater behövs det om mönstret är 12 kvadrater högt?",
      "points": "each",
      "rows": [
        "Svar: [a] kvadrater"
      ],
      "boxes": {
        "a": {
          "accept": [
            "144",
            "12²"
          ]
        }
      },
      "solution": [
        {
          "text": "Raderna har 1, 3, 5, 7 … kvadrater uppifrån. 2 högt: 1 + 3 = 4 = 2 · 2. 4 högt: 1 + 3 + 5 + 7 = 16 = 4 · 4."
        },
        {
          "text": "Så 12 högt ger 12 · 12 = 144 kvadrater."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "78"
          },
          "text": "Raderna ökar med 2 kvadrater, inte med 1: 1, 3, 5, 7 …"
        }
      ],
      "figure": {
        "view": [
          114,
          44
        ],
        "pieces": [
          {
            "path": "M2 32H12V42H2Z"
          },
          {
            "path": "M12 32H22V42H12Z"
          },
          {
            "path": "M22 32H32V42H22Z"
          },
          {
            "path": "M12 22H22V32H12Z"
          },
          {
            "path": "M42 32H52V42H42Z"
          },
          {
            "path": "M52 32H62V42H52Z"
          },
          {
            "path": "M62 32H72V42H62Z"
          },
          {
            "path": "M72 32H82V42H72Z"
          },
          {
            "path": "M82 32H92V42H82Z"
          },
          {
            "path": "M92 32H102V42H92Z"
          },
          {
            "path": "M102 32H112V42H102Z"
          },
          {
            "path": "M52 22H62V32H52Z"
          },
          {
            "path": "M62 22H72V32H62Z"
          },
          {
            "path": "M72 22H82V32H72Z"
          },
          {
            "path": "M82 22H92V32H82Z"
          },
          {
            "path": "M92 22H102V32H92Z"
          },
          {
            "path": "M62 12H72V22H62Z"
          },
          {
            "path": "M72 12H82V22H72Z"
          },
          {
            "path": "M82 12H92V22H82Z"
          },
          {
            "path": "M72 2H82V12H72Z"
          }
        ]
      }
    },
    {
      "id": "tat4-trappor-35de53cd",
      "part": "trappor",
      "text": "I figuren ser du två trappmönster. När mönstret är 2 kvadrater högt består det av 4 kvadrater, och när det är 4 kvadrater högt av 16 kvadrater. Hur många kvadrater behövs det om mönstret är 6 kvadrater högt?",
      "points": "each",
      "rows": [
        "Svar: [a] kvadrater"
      ],
      "boxes": {
        "a": {
          "accept": [
            "36",
            "6²"
          ]
        }
      },
      "solution": [
        {
          "text": "Raderna har 1, 3, 5, 7 … kvadrater uppifrån. 2 högt: 1 + 3 = 4 = 2 · 2. 4 högt: 1 + 3 + 5 + 7 = 16 = 4 · 4."
        },
        {
          "text": "Så 6 högt ger 6 · 6 = 36 kvadrater."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "21"
          },
          "text": "Raderna ökar med 2 kvadrater, inte med 1: 1, 3, 5, 7 …"
        }
      ],
      "figure": {
        "view": [
          114,
          44
        ],
        "pieces": [
          {
            "path": "M2 32H12V42H2Z"
          },
          {
            "path": "M12 32H22V42H12Z"
          },
          {
            "path": "M22 32H32V42H22Z"
          },
          {
            "path": "M12 22H22V32H12Z"
          },
          {
            "path": "M42 32H52V42H42Z"
          },
          {
            "path": "M52 32H62V42H52Z"
          },
          {
            "path": "M62 32H72V42H62Z"
          },
          {
            "path": "M72 32H82V42H72Z"
          },
          {
            "path": "M82 32H92V42H82Z"
          },
          {
            "path": "M92 32H102V42H92Z"
          },
          {
            "path": "M102 32H112V42H102Z"
          },
          {
            "path": "M52 22H62V32H52Z"
          },
          {
            "path": "M62 22H72V32H62Z"
          },
          {
            "path": "M72 22H82V32H72Z"
          },
          {
            "path": "M82 22H92V32H82Z"
          },
          {
            "path": "M92 22H102V32H92Z"
          },
          {
            "path": "M62 12H72V22H62Z"
          },
          {
            "path": "M72 12H82V22H72Z"
          },
          {
            "path": "M82 12H92V22H82Z"
          },
          {
            "path": "M72 2H82V12H72Z"
          }
        ]
      }
    },
    {
      "id": "tat4-trappor-3c4a6ad7",
      "part": "trappor",
      "text": "I figuren ser du två trappmönster. När mönstret är 2 kvadrater högt består det av 4 kvadrater, och när det är 4 kvadrater högt av 16 kvadrater. Hur många kvadrater behövs det om mönstret är 8 kvadrater högt?",
      "points": "each",
      "rows": [
        "Svar: [a] kvadrater"
      ],
      "boxes": {
        "a": {
          "accept": [
            "64",
            "8²"
          ]
        }
      },
      "solution": [
        {
          "text": "Raderna har 1, 3, 5, 7 … kvadrater uppifrån. 2 högt: 1 + 3 = 4 = 2 · 2. 4 högt: 1 + 3 + 5 + 7 = 16 = 4 · 4."
        },
        {
          "text": "Så 8 högt ger 8 · 8 = 64 kvadrater."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Raderna ökar med 2 kvadrater, inte med 1: 1, 3, 5, 7 …"
        }
      ],
      "figure": {
        "view": [
          114,
          44
        ],
        "pieces": [
          {
            "path": "M2 32H12V42H2Z"
          },
          {
            "path": "M12 32H22V42H12Z"
          },
          {
            "path": "M22 32H32V42H22Z"
          },
          {
            "path": "M12 22H22V32H12Z"
          },
          {
            "path": "M42 32H52V42H42Z"
          },
          {
            "path": "M52 32H62V42H52Z"
          },
          {
            "path": "M62 32H72V42H62Z"
          },
          {
            "path": "M72 32H82V42H72Z"
          },
          {
            "path": "M82 32H92V42H82Z"
          },
          {
            "path": "M92 32H102V42H92Z"
          },
          {
            "path": "M102 32H112V42H102Z"
          },
          {
            "path": "M52 22H62V32H52Z"
          },
          {
            "path": "M62 22H72V32H62Z"
          },
          {
            "path": "M72 22H82V32H72Z"
          },
          {
            "path": "M82 22H92V32H82Z"
          },
          {
            "path": "M92 22H102V32H92Z"
          },
          {
            "path": "M62 12H72V22H62Z"
          },
          {
            "path": "M72 12H82V22H72Z"
          },
          {
            "path": "M82 12H92V22H82Z"
          },
          {
            "path": "M72 2H82V12H72Z"
          }
        ]
      }
    },
    {
      "id": "tat4-trappor-4778a0aa",
      "part": "trappor",
      "text": "I figuren ser du två trappmönster. När mönstret är 2 kvadrater högt består det av 4 kvadrater, och när det är 4 kvadrater högt av 16 kvadrater. Hur många kvadrater behövs det om mönstret är 3 kvadrater högt?",
      "points": "each",
      "rows": [
        "Svar: [a] kvadrater"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9",
            "3²"
          ]
        }
      },
      "solution": [
        {
          "text": "Raderna har 1, 3, 5, 7 … kvadrater uppifrån. 2 högt: 1 + 3 = 4 = 2 · 2. 4 högt: 1 + 3 + 5 + 7 = 16 = 4 · 4."
        },
        {
          "text": "Så 3 högt ger 3 · 3 = 9 kvadrater."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Raderna ökar med 2 kvadrater, inte med 1: 1, 3, 5, 7 …"
        }
      ],
      "figure": {
        "view": [
          114,
          44
        ],
        "pieces": [
          {
            "path": "M2 32H12V42H2Z"
          },
          {
            "path": "M12 32H22V42H12Z"
          },
          {
            "path": "M22 32H32V42H22Z"
          },
          {
            "path": "M12 22H22V32H12Z"
          },
          {
            "path": "M42 32H52V42H42Z"
          },
          {
            "path": "M52 32H62V42H52Z"
          },
          {
            "path": "M62 32H72V42H62Z"
          },
          {
            "path": "M72 32H82V42H72Z"
          },
          {
            "path": "M82 32H92V42H82Z"
          },
          {
            "path": "M92 32H102V42H92Z"
          },
          {
            "path": "M102 32H112V42H102Z"
          },
          {
            "path": "M52 22H62V32H52Z"
          },
          {
            "path": "M62 22H72V32H62Z"
          },
          {
            "path": "M72 22H82V32H72Z"
          },
          {
            "path": "M82 22H92V32H82Z"
          },
          {
            "path": "M92 22H102V32H92Z"
          },
          {
            "path": "M62 12H72V22H62Z"
          },
          {
            "path": "M72 12H82V22H72Z"
          },
          {
            "path": "M82 12H92V22H82Z"
          },
          {
            "path": "M72 2H82V12H72Z"
          }
        ]
      }
    },
    {
      "id": "tat4-trappor-390983ae",
      "part": "trappor",
      "text": "I figuren ser du två trappmönster. När mönstret är 2 kvadrater högt består det av 4 kvadrater, och när det är 4 kvadrater högt av 16 kvadrater. Hur många kvadrater behövs det om mönstret är 7 kvadrater högt?",
      "points": "each",
      "rows": [
        "Svar: [a] kvadrater"
      ],
      "boxes": {
        "a": {
          "accept": [
            "49",
            "7²"
          ]
        }
      },
      "solution": [
        {
          "text": "Raderna har 1, 3, 5, 7 … kvadrater uppifrån. 2 högt: 1 + 3 = 4 = 2 · 2. 4 högt: 1 + 3 + 5 + 7 = 16 = 4 · 4."
        },
        {
          "text": "Så 7 högt ger 7 · 7 = 49 kvadrater."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "28"
          },
          "text": "Raderna ökar med 2 kvadrater, inte med 1: 1, 3, 5, 7 …"
        }
      ],
      "figure": {
        "view": [
          114,
          44
        ],
        "pieces": [
          {
            "path": "M2 32H12V42H2Z"
          },
          {
            "path": "M12 32H22V42H12Z"
          },
          {
            "path": "M22 32H32V42H22Z"
          },
          {
            "path": "M12 22H22V32H12Z"
          },
          {
            "path": "M42 32H52V42H42Z"
          },
          {
            "path": "M52 32H62V42H52Z"
          },
          {
            "path": "M62 32H72V42H62Z"
          },
          {
            "path": "M72 32H82V42H72Z"
          },
          {
            "path": "M82 32H92V42H82Z"
          },
          {
            "path": "M92 32H102V42H92Z"
          },
          {
            "path": "M102 32H112V42H102Z"
          },
          {
            "path": "M52 22H62V32H52Z"
          },
          {
            "path": "M62 22H72V32H62Z"
          },
          {
            "path": "M72 22H82V32H72Z"
          },
          {
            "path": "M82 22H92V32H82Z"
          },
          {
            "path": "M92 22H102V32H92Z"
          },
          {
            "path": "M62 12H72V22H62Z"
          },
          {
            "path": "M72 12H82V22H72Z"
          },
          {
            "path": "M82 12H92V22H82Z"
          },
          {
            "path": "M72 2H82V12H72Z"
          }
        ]
      }
    },
    {
      "id": "tat4-serie-774c2482",
      "part": "serie",
      "text": "Här ser du tre summor: 1 + 1/2 + 1/4 + 1/8 + … = 2, 1 + 1/3 + 1/9 + 1/27 + … = 3/2 och 1 + 1/4 + 1/16 + 1/64 + … = 4/3. Vad blir summan 1 + 1/6 + 1/36 + 1/216 + …?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6/5"
          ]
        }
      },
      "solution": [
        {
          "text": "Summorna är 2/1, 3/2 och 4/3. Nämnaren i det andra talet (2, 3, 4) blir summans täljare, och summans nämnare är ett mindre."
        },
        {
          "text": "Med 1/6 blir summan 6/5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7/6"
          },
          "text": "Nämnaren är ett mindre än täljaren: 2/1, 3/2, 4/3, och här 6/5."
        }
      ]
    },
    {
      "id": "tat4-serie-4bec0cbb",
      "part": "serie",
      "text": "Här ser du tre summor: 1 + 1/2 + 1/4 + 1/8 + … = 2, 1 + 1/3 + 1/9 + 1/27 + … = 3/2 och 1 + 1/4 + 1/16 + 1/64 + … = 4/3. Vad blir summan 1 + 1/10 + 1/100 + 1/1000 + …?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10/9"
          ]
        }
      },
      "solution": [
        {
          "text": "Summorna är 2/1, 3/2 och 4/3. Nämnaren i det andra talet (2, 3, 4) blir summans täljare, och summans nämnare är ett mindre."
        },
        {
          "text": "Med 1/10 blir summan 10/9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11/10"
          },
          "text": "Nämnaren är ett mindre än täljaren: 2/1, 3/2, 4/3, och här 10/9."
        }
      ]
    },
    {
      "id": "tat4-serie-e3bcbb68",
      "part": "serie",
      "text": "Här ser du tre summor: 1 + 1/2 + 1/4 + 1/8 + … = 2, 1 + 1/3 + 1/9 + 1/27 + … = 3/2 och 1 + 1/4 + 1/16 + 1/64 + … = 4/3. Vad blir summan 1 + 1/12 + 1/144 + 1/1728 + …?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12/11"
          ]
        }
      },
      "solution": [
        {
          "text": "Summorna är 2/1, 3/2 och 4/3. Nämnaren i det andra talet (2, 3, 4) blir summans täljare, och summans nämnare är ett mindre."
        },
        {
          "text": "Med 1/12 blir summan 12/11."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13/12"
          },
          "text": "Nämnaren är ett mindre än täljaren: 2/1, 3/2, 4/3, och här 12/11."
        }
      ]
    },
    {
      "id": "tat4-serie-a9556ada",
      "part": "serie",
      "text": "Här ser du tre summor: 1 + 1/2 + 1/4 + 1/8 + … = 2, 1 + 1/3 + 1/9 + 1/27 + … = 3/2 och 1 + 1/4 + 1/16 + 1/64 + … = 4/3. Vad blir summan 1 + 1/8 + 1/64 + 1/512 + …?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8/7"
          ]
        }
      },
      "solution": [
        {
          "text": "Summorna är 2/1, 3/2 och 4/3. Nämnaren i det andra talet (2, 3, 4) blir summans täljare, och summans nämnare är ett mindre."
        },
        {
          "text": "Med 1/8 blir summan 8/7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9/8"
          },
          "text": "Nämnaren är ett mindre än täljaren: 2/1, 3/2, 4/3, och här 8/7."
        }
      ]
    },
    {
      "id": "tat4-serie-7b960d80",
      "part": "serie",
      "text": "Här ser du tre summor: 1 + 1/2 + 1/4 + 1/8 + … = 2, 1 + 1/3 + 1/9 + 1/27 + … = 3/2 och 1 + 1/4 + 1/16 + 1/64 + … = 4/3. Vad blir summan 1 + 1/7 + 1/49 + 1/343 + …?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7/6"
          ]
        }
      },
      "solution": [
        {
          "text": "Summorna är 2/1, 3/2 och 4/3. Nämnaren i det andra talet (2, 3, 4) blir summans täljare, och summans nämnare är ett mindre."
        },
        {
          "text": "Med 1/7 blir summan 7/6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8/7"
          },
          "text": "Nämnaren är ett mindre än täljaren: 2/1, 3/2, 4/3, och här 7/6."
        }
      ]
    },
    {
      "id": "tat4-serie-5aeffd96",
      "part": "serie",
      "text": "Här ser du tre summor: 1 + 1/2 + 1/4 + 1/8 + … = 2, 1 + 1/3 + 1/9 + 1/27 + … = 3/2 och 1 + 1/4 + 1/16 + 1/64 + … = 4/3. Vad blir summan 1 + 1/9 + 1/81 + 1/729 + …?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9/8"
          ]
        }
      },
      "solution": [
        {
          "text": "Summorna är 2/1, 3/2 och 4/3. Nämnaren i det andra talet (2, 3, 4) blir summans täljare, och summans nämnare är ett mindre."
        },
        {
          "text": "Med 1/9 blir summan 9/8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10/9"
          },
          "text": "Nämnaren är ett mindre än täljaren: 2/1, 3/2, 4/3, och här 9/8."
        }
      ]
    }
  ]
};
