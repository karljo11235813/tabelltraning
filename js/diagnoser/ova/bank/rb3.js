// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till RB3.
export default {
  "code": "RB3",
  "parts": [
    {
      "id": "andel",
      "title": "Hur stor andel är skuggad?",
      "labels": [
        "1a",
        "1b",
        "1c"
      ]
    },
    {
      "id": "skugga",
      "title": "Skugga en andel av cirklarna",
      "labels": [
        "2a",
        "2b",
        "2c"
      ]
    },
    {
      "id": "en-del",
      "title": "En del av ett antal",
      "labels": [
        "3a",
        "3b",
        "3c",
        "3d"
      ]
    },
    {
      "id": "flera-delar",
      "title": "Flera delar av ett antal",
      "labels": [
        "4a",
        "4b",
        "4c",
        "4d"
      ]
    },
    {
      "id": "berattelser",
      "title": "Del av ett antal i en berättelse",
      "labels": [
        "5",
        "6"
      ]
    }
  ],
  "tasks": [
    {
      "id": "rb3-andel-daea8683",
      "part": "andel",
      "text": "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/9"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Det finns 9 cirklar, och 2 av dem är skuggade."
        },
        {
          "text": "Nämnaren är hur många cirklar det finns, 9, och täljaren hur många som är skuggade, 2: 2/9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/7"
          },
          "text": "Du jämförde de skuggade med de oskuggade. Nämnaren är alla cirklarna: 9."
        },
        {
          "answers": {
            "a": "7/9"
          },
          "text": "Det är den del som inte är skuggad."
        }
      ],
      "figure": {
        "view": [
          120,
          120
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              20,
              100,
              15
            ]
          },
          {
            "circle": [
              60,
              100,
              15
            ]
          },
          {
            "circle": [
              100,
              100,
              15
            ]
          }
        ],
        "shaded": [
          1,
          7
        ]
      }
    },
    {
      "id": "rb3-andel-caf21d05",
      "part": "andel",
      "text": "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5/12"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Det finns 12 cirklar, och 5 av dem är skuggade."
        },
        {
          "text": "Nämnaren är hur många cirklar det finns, 12, och täljaren hur många som är skuggade, 5: 5/12."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/7"
          },
          "text": "Du jämförde de skuggade med de oskuggade. Nämnaren är alla cirklarna: 12."
        },
        {
          "answers": {
            "a": "7/12"
          },
          "text": "Det är den del som inte är skuggad."
        }
      ],
      "figure": {
        "view": [
          160,
          120
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          },
          {
            "circle": [
              20,
              100,
              15
            ]
          },
          {
            "circle": [
              60,
              100,
              15
            ]
          },
          {
            "circle": [
              100,
              100,
              15
            ]
          },
          {
            "circle": [
              140,
              100,
              15
            ]
          }
        ],
        "shaded": [
          0,
          3,
          5,
          6,
          11
        ]
      }
    },
    {
      "id": "rb3-andel-514f1cee",
      "part": "andel",
      "text": "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6/8",
            "3/4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Det finns 8 cirklar, och 6 av dem är skuggade."
        },
        {
          "text": "Nämnaren är hur många cirklar det finns, 8, och täljaren hur många som är skuggade, 6: 6/8, och det är samma sak som 3/4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6/2"
          },
          "text": "Du jämförde de skuggade med de oskuggade. Nämnaren är alla cirklarna: 8."
        },
        {
          "answers": {
            "a": "2/8"
          },
          "text": "Det är den del som inte är skuggad."
        }
      ],
      "figure": {
        "view": [
          160,
          80
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          }
        ],
        "shaded": [
          0,
          1,
          2,
          4,
          5,
          6
        ]
      }
    },
    {
      "id": "rb3-andel-4b3eaee0",
      "part": "andel",
      "text": "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4/6",
            "2/3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Det finns 6 cirklar, och 4 av dem är skuggade."
        },
        {
          "text": "Nämnaren är hur många cirklar det finns, 6, och täljaren hur många som är skuggade, 4: 4/6, och det är samma sak som 2/3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4/2"
          },
          "text": "Du jämförde de skuggade med de oskuggade. Nämnaren är alla cirklarna: 6."
        },
        {
          "answers": {
            "a": "2/6"
          },
          "text": "Det är den del som inte är skuggad."
        }
      ],
      "figure": {
        "view": [
          120,
          80
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          }
        ],
        "shaded": [
          0,
          2,
          3,
          5
        ]
      }
    },
    {
      "id": "rb3-andel-952f944e",
      "part": "andel",
      "text": "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/10"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Det finns 10 cirklar, och 3 av dem är skuggade."
        },
        {
          "text": "Nämnaren är hur många cirklar det finns, 10, och täljaren hur många som är skuggade, 3: 3/10."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/7"
          },
          "text": "Du jämförde de skuggade med de oskuggade. Nämnaren är alla cirklarna: 10."
        },
        {
          "answers": {
            "a": "7/10"
          },
          "text": "Det är den del som inte är skuggad."
        }
      ],
      "figure": {
        "view": [
          200,
          80
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              180,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          },
          {
            "circle": [
              180,
              60,
              15
            ]
          }
        ],
        "shaded": [
          1,
          4,
          8
        ]
      }
    },
    {
      "id": "rb3-andel-f0373fad",
      "part": "andel",
      "text": "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4/16",
            "1/4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Det finns 16 cirklar, och 4 av dem är skuggade."
        },
        {
          "text": "Nämnaren är hur många cirklar det finns, 16, och täljaren hur många som är skuggade, 4: 4/16, och det är samma sak som 1/4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4/12"
          },
          "text": "Du jämförde de skuggade med de oskuggade. Nämnaren är alla cirklarna: 16."
        },
        {
          "answers": {
            "a": "12/16"
          },
          "text": "Det är den del som inte är skuggad."
        }
      ],
      "figure": {
        "view": [
          160,
          160
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          },
          {
            "circle": [
              20,
              100,
              15
            ]
          },
          {
            "circle": [
              60,
              100,
              15
            ]
          },
          {
            "circle": [
              100,
              100,
              15
            ]
          },
          {
            "circle": [
              140,
              100,
              15
            ]
          },
          {
            "circle": [
              20,
              140,
              15
            ]
          },
          {
            "circle": [
              60,
              140,
              15
            ]
          },
          {
            "circle": [
              100,
              140,
              15
            ]
          },
          {
            "circle": [
              140,
              140,
              15
            ]
          }
        ],
        "shaded": [
          0,
          5,
          10,
          15
        ]
      }
    },
    {
      "id": "rb3-skugga-8aa1a0cb",
      "part": "skugga",
      "kind": "shade",
      "text": "Skugga 3/4 av cirklarna. Klicka på cirklarna.",
      "figure": {
        "view": [
          160,
          160
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          },
          {
            "circle": [
              20,
              100,
              15
            ]
          },
          {
            "circle": [
              60,
              100,
              15
            ]
          },
          {
            "circle": [
              100,
              100,
              15
            ]
          },
          {
            "circle": [
              140,
              100,
              15
            ]
          },
          {
            "circle": [
              20,
              140,
              15
            ]
          },
          {
            "circle": [
              60,
              140,
              15
            ]
          },
          {
            "circle": [
              100,
              140,
              15
            ]
          },
          {
            "circle": [
              140,
              140,
              15
            ]
          }
        ]
      },
      "target": "3/4",
      "facit": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
      ],
      "solution": [
        {
          "text": "Figuren har 16 lika stora cirklar. 3/4 betyder 3 av 4 lika stora delar, så dela 16 cirklar i 4 lika stora grupper."
        },
        {
          "text": "Varje grupp är 4 cirklar, och 3 grupper är 12 cirklar. Vilka cirklar det är spelar ingen roll."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "pieces": "0,1,2"
          },
          "text": "Figuren har 16 cirklar, inte 4. 3/4 av 16 cirklar är 12 cirklar."
        }
      ]
    },
    {
      "id": "rb3-skugga-9fd0099f",
      "part": "skugga",
      "kind": "shade",
      "text": "Skugga 1/2 av cirklarna. Klicka på cirklarna.",
      "figure": {
        "view": [
          200,
          80
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              180,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          },
          {
            "circle": [
              180,
              60,
              15
            ]
          }
        ]
      },
      "target": "1/2",
      "facit": [
        0,
        1,
        2,
        3,
        4
      ],
      "solution": [
        {
          "text": "Figuren har 10 lika stora cirklar. 1/2 betyder 1 av 2 lika stora delar, så dela 10 cirklar i 2 lika stora grupper."
        },
        {
          "text": "Varje grupp är 5 cirklar. Vilka cirklar det är spelar ingen roll."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "pieces": "0"
          },
          "text": "Figuren har 10 cirklar, inte 2. 1/2 av 10 cirklar är 5 cirklar."
        }
      ]
    },
    {
      "id": "rb3-skugga-cd940670",
      "part": "skugga",
      "kind": "shade",
      "text": "Skugga 1/4 av cirklarna. Klicka på cirklarna.",
      "figure": {
        "view": [
          160,
          80
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          }
        ]
      },
      "target": "1/4",
      "facit": [
        0,
        1
      ],
      "solution": [
        {
          "text": "Figuren har 8 lika stora cirklar. 1/4 betyder 1 av 4 lika stora delar, så dela 8 cirklar i 4 lika stora grupper."
        },
        {
          "text": "Varje grupp är 2 cirklar. Vilka cirklar det är spelar ingen roll."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "pieces": "0"
          },
          "text": "Figuren har 8 cirklar, inte 4. 1/4 av 8 cirklar är 2 cirklar."
        }
      ]
    },
    {
      "id": "rb3-skugga-387fd01c",
      "part": "skugga",
      "kind": "shade",
      "text": "Skugga 3/5 av cirklarna. Klicka på cirklarna.",
      "figure": {
        "view": [
          200,
          80
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              180,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          },
          {
            "circle": [
              180,
              60,
              15
            ]
          }
        ]
      },
      "target": "3/5",
      "facit": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "solution": [
        {
          "text": "Figuren har 10 lika stora cirklar. 3/5 betyder 3 av 5 lika stora delar, så dela 10 cirklar i 5 lika stora grupper."
        },
        {
          "text": "Varje grupp är 2 cirklar, och 3 grupper är 6 cirklar. Vilka cirklar det är spelar ingen roll."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "pieces": "0,1,2"
          },
          "text": "Figuren har 10 cirklar, inte 5. 3/5 av 10 cirklar är 6 cirklar."
        }
      ]
    },
    {
      "id": "rb3-skugga-03b14b57",
      "part": "skugga",
      "kind": "shade",
      "text": "Skugga 2/3 av cirklarna. Klicka på cirklarna.",
      "figure": {
        "view": [
          160,
          120
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              140,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              140,
              60,
              15
            ]
          },
          {
            "circle": [
              20,
              100,
              15
            ]
          },
          {
            "circle": [
              60,
              100,
              15
            ]
          },
          {
            "circle": [
              100,
              100,
              15
            ]
          },
          {
            "circle": [
              140,
              100,
              15
            ]
          }
        ]
      },
      "target": "2/3",
      "facit": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "solution": [
        {
          "text": "Figuren har 12 lika stora cirklar. 2/3 betyder 2 av 3 lika stora delar, så dela 12 cirklar i 3 lika stora grupper."
        },
        {
          "text": "Varje grupp är 4 cirklar, och 2 grupper är 8 cirklar. Vilka cirklar det är spelar ingen roll."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "pieces": "0,1"
          },
          "text": "Figuren har 12 cirklar, inte 3. 2/3 av 12 cirklar är 8 cirklar."
        }
      ]
    },
    {
      "id": "rb3-skugga-545dcb4b",
      "part": "skugga",
      "kind": "shade",
      "text": "Skugga 2/3 av cirklarna. Klicka på cirklarna.",
      "figure": {
        "view": [
          120,
          120
        ],
        "pieces": [
          {
            "circle": [
              20,
              20,
              15
            ]
          },
          {
            "circle": [
              60,
              20,
              15
            ]
          },
          {
            "circle": [
              100,
              20,
              15
            ]
          },
          {
            "circle": [
              20,
              60,
              15
            ]
          },
          {
            "circle": [
              60,
              60,
              15
            ]
          },
          {
            "circle": [
              100,
              60,
              15
            ]
          },
          {
            "circle": [
              20,
              100,
              15
            ]
          },
          {
            "circle": [
              60,
              100,
              15
            ]
          },
          {
            "circle": [
              100,
              100,
              15
            ]
          }
        ]
      },
      "target": "2/3",
      "facit": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "solution": [
        {
          "text": "Figuren har 9 lika stora cirklar. 2/3 betyder 2 av 3 lika stora delar, så dela 9 cirklar i 3 lika stora grupper."
        },
        {
          "text": "Varje grupp är 3 cirklar, och 2 grupper är 6 cirklar. Vilka cirklar det är spelar ingen roll."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "pieces": "0,1"
          },
          "text": "Figuren har 9 cirklar, inte 3. 2/3 av 9 cirklar är 6 cirklar."
        }
      ]
    },
    {
      "id": "rb3-en-del-4a7157ff",
      "part": "en-del",
      "text": "Hur mycket är en halv av 18?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En halv av 18 är 18 delat i 2 lika stora delar."
        },
        {
          "math": "{18|2} = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "2 är antalet delar. En halv av 18 är en av 2 lika stora delar: 9."
        }
      ]
    },
    {
      "id": "rb3-en-del-d9f208e9",
      "part": "en-del",
      "text": "Hur mycket är en fjärdedel av 24?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En fjärdedel av 24 är 24 delat i 4 lika stora delar."
        },
        {
          "math": "{24|4} = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "4 är antalet delar. En fjärdedel av 24 är en av 4 lika stora delar: 6."
        }
      ]
    },
    {
      "id": "rb3-en-del-5a22d477",
      "part": "en-del",
      "text": "Hur mycket är en tredjedel av 21?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En tredjedel av 21 är 21 delat i 3 lika stora delar."
        },
        {
          "math": "{21|3} = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "3 är antalet delar. En tredjedel av 21 är en av 3 lika stora delar: 7."
        }
      ]
    },
    {
      "id": "rb3-en-del-209ca175",
      "part": "en-del",
      "text": "Hur mycket är en tredjedel av 27?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En tredjedel av 27 är 27 delat i 3 lika stora delar."
        },
        {
          "math": "{27|3} = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "3 är antalet delar. En tredjedel av 27 är en av 3 lika stora delar: 9."
        }
      ]
    },
    {
      "id": "rb3-en-del-ac2d3fee",
      "part": "en-del",
      "text": "Hur mycket är en femtedel av 30?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En femtedel av 30 är 30 delat i 5 lika stora delar."
        },
        {
          "math": "{30|5} = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5"
          },
          "text": "5 är antalet delar. En femtedel av 30 är en av 5 lika stora delar: 6."
        }
      ]
    },
    {
      "id": "rb3-en-del-4f4a57d7",
      "part": "en-del",
      "text": "Hur mycket är en sjättedel av 18?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En sjättedel av 18 är 18 delat i 6 lika stora delar."
        },
        {
          "math": "{18|6} = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "6 är antalet delar. En sjättedel av 18 är en av 6 lika stora delar: 3."
        }
      ]
    },
    {
      "id": "rb3-flera-delar-9987ceec",
      "part": "flera-delar",
      "text": "Hur mycket är tre åttondelar av 16?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En åttondel av 16 är 2. Tre åttondelar är 3 sådana delar."
        },
        {
          "math": "3 · {16|8} = 3 · 2 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Det är en åttondel. Tre åttondelar är 3 sådana: 3 · 2 = 6."
        }
      ]
    },
    {
      "id": "rb3-flera-delar-2985caa5",
      "part": "flera-delar",
      "text": "Hur mycket är fem sjättedelar av 18?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En sjättedel av 18 är 3. Fem sjättedelar är 5 sådana delar."
        },
        {
          "math": "5 · {18|6} = 5 · 3 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Det är en sjättedel. Fem sjättedelar är 5 sådana: 5 · 3 = 15."
        }
      ]
    },
    {
      "id": "rb3-flera-delar-22f5c46e",
      "part": "flera-delar",
      "text": "Hur mycket är tre fjärdedelar av 20?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En fjärdedel av 20 är 5. Tre fjärdedelar är 3 sådana delar."
        },
        {
          "math": "3 · {20|4} = 3 · 5 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5"
          },
          "text": "Det är en fjärdedel. Tre fjärdedelar är 3 sådana: 3 · 5 = 15."
        }
      ]
    },
    {
      "id": "rb3-flera-delar-ca467eae",
      "part": "flera-delar",
      "text": "Hur mycket är tre femtedelar av 20?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En femtedel av 20 är 4. Tre femtedelar är 3 sådana delar."
        },
        {
          "math": "3 · {20|5} = 3 · 4 = 12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Det är en femtedel. Tre femtedelar är 3 sådana: 3 · 4 = 12."
        }
      ]
    },
    {
      "id": "rb3-flera-delar-60773faa",
      "part": "flera-delar",
      "text": "Hur mycket är två femtedelar av 15?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En femtedel av 15 är 3. Två femtedelar är 2 sådana delar."
        },
        {
          "math": "2 · {15|5} = 2 · 3 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Det är en femtedel. Två femtedelar är 2 sådana: 2 · 3 = 6."
        }
      ]
    },
    {
      "id": "rb3-flera-delar-f197a81e",
      "part": "flera-delar",
      "text": "Hur mycket är två tredjedelar av 12?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "En tredjedel av 12 är 4. Två tredjedelar är 2 sådana delar."
        },
        {
          "math": "2 · {12|3} = 2 · 4 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Det är en tredjedel. Två tredjedelar är 2 sådana: 2 · 4 = 8."
        }
      ]
    },
    {
      "id": "rb3-berattelser-a09e87f2",
      "part": "berattelser",
      "text": "En tårta är delad i 8 bitar. Ella åt en fjärdedel av tårtan. Hur många bitar åt Ella?",
      "points": "each",
      "rows": [
        "Svar: [a] bitar"
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
          "text": "En fjärdedel av tårtan är en av 4 lika stora delar. 8 bitar i 4 lika stora delar är 2 bitar i varje."
        },
        {
          "math": "{8|4} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "4 är antalet lika stora delar. Tårtan har 8 bitar, så en fjärdedel är 8 / 4 = 2 bitar."
        }
      ]
    },
    {
      "id": "rb3-berattelser-b40c7be2",
      "part": "berattelser",
      "text": "I en låda låg det 18 kulor. Först tog Ida en tredjedel av kulorna. Sedan tog Adam hälften av de kulor som var kvar. Hur många kulor låg det sedan i lådan?",
      "points": "each",
      "rows": [
        "Svar: [a] kulor"
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
          "text": "En tredjedel av 18 är 6, så 18 − 6 = 12 kulor var kvar."
        },
        {
          "text": "Hälften av de 12 som var kvar är 6, så 12 − 6 = 6 låg kvar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Adam tog hälften av de som var kvar, alltså av 12, inte av 18."
        }
      ]
    },
    {
      "id": "rb3-berattelser-ab9e1d24",
      "part": "berattelser",
      "text": "En chokladkaka har 12 rutor. Leo åt en tredjedel av chokladkakan. Hur många rutor åt Leo?",
      "points": "each",
      "rows": [
        "Svar: [a] rutor"
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
          "text": "En tredjedel av chokladkakan är en av 3 lika stora delar: 12 rutor delat i 3 lika delar."
        },
        {
          "math": "{12|3} = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "3 är antalet lika stora delar. En tredjedel av 12 rutor är 12 / 3 = 4 rutor."
        }
      ]
    },
    {
      "id": "rb3-berattelser-c17ef3ea",
      "part": "berattelser",
      "text": "I en korg låg det 30 äpplen. Först åt familjen upp en femtedel av äpplena. Sedan gjorde de mos av en tredjedel av de äpplen som var kvar. Hur många äpplen låg det sedan i korgen?",
      "points": "each",
      "rows": [
        "Svar: [a] äpplen"
      ],
      "boxes": {
        "a": {
          "accept": [
            "16"
          ]
        }
      },
      "solution": [
        {
          "text": "En femtedel av 30 är 6, så 30 − 6 = 24 äpplen var kvar."
        },
        {
          "text": "En tredjedel av de 24 som var kvar är 8, så 24 − 8 = 16 låg kvar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14"
          },
          "text": "Mosen gjordes av en tredjedel av de som var kvar, alltså av 24, inte av 30."
        }
      ]
    },
    {
      "id": "rb3-berattelser-2233e84c",
      "part": "berattelser",
      "text": "En pizza är delad i 10 bitar. Mia åt två femtedelar av pizzan. Hur många bitar åt Mia?",
      "points": "each",
      "rows": [
        "Svar: [a] bitar"
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
          "text": "En femtedel av pizzan är 10 / 5 = 2 bitar. Två femtedelar är två sådana delar."
        },
        {
          "math": "2 · {10|5} = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Det är en femtedel. Två femtedelar är två sådana delar: 2 · 2 = 4."
        }
      ]
    },
    {
      "id": "rb3-berattelser-0d44d852",
      "part": "berattelser",
      "text": "I en skål låg det 24 jordgubbar. Först åt Sam upp en fjärdedel av jordgubbarna. Sedan åt Noor upp hälften av de jordgubbar som var kvar. Hur många jordgubbar låg det sedan i skålen?",
      "points": "each",
      "rows": [
        "Svar: [a] jordgubbar"
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
          "text": "En fjärdedel av 24 är 6, så 24 − 6 = 18 jordgubbar var kvar."
        },
        {
          "text": "Hälften av de 18 som var kvar är 9, så 18 − 9 = 9 låg kvar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Noor åt hälften av de som var kvar, alltså av 18, inte av 24."
        }
      ]
    }
  ]
};
