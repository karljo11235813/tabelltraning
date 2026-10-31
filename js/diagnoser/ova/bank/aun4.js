// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AUn4.
export default {
  "code": "AUn4",
  "parts": [
    {
      "id": "parentes",
      "title": "Parenteser med hela tal",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "faktor-parentes",
      "title": "Faktor framför parentes",
      "labels": [
        "2a",
        "2b"
      ]
    },
    {
      "id": "tre-tal",
      "title": "Tre tal med minus",
      "labels": [
        "3a",
        "3b"
      ]
    },
    {
      "id": "alla-raknesatt",
      "title": "Alla räknesätt, bråk och decimal",
      "labels": [
        "4a",
        "4b"
      ]
    }
  ],
  "tasks": [
    {
      "id": "aun4-parentes-343cff9b",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6 - (8 - 5) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - 5 = 3"
        },
        {
          "math": "6 - (8 - 5) = 6 - 3 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-7"
          },
          "text": "Du räknade 6 − 8 − 5. Men parentesen (8 − 5) är 3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-ad487b96",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8 - (2 - 4) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - 4 = -2"
        },
        {
          "text": "Att subtrahera −2 är att addera 2."
        },
        {
          "math": "8 - (2 - 4) = 8 - (-2) = 8 + 2 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Du räknade 8 − 2 − 4. Men parentesen (2 − 4) är −2, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-2d8e79ec",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3 + (2 - 1) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - 1 = 1"
        },
        {
          "math": "3 + (2 - 1) = 3 + 1 = 4"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-ba9f4a2c",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7 + (8 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - 3 = 5"
        },
        {
          "math": "7 + (8 - 3) = 7 + 5 = 12"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-32be5533",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3 - (5 - 7) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "5 - 7 = -2"
        },
        {
          "text": "Att subtrahera −2 är att addera 2."
        },
        {
          "math": "3 - (5 - 7) = 3 - (-2) = 3 + 2 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9"
          },
          "text": "Du räknade 3 − 5 − 7. Men parentesen (5 − 7) är −2, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-c32846d9",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4 - (3 - 6) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 6 = -3"
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "4 - (3 - 6) = 4 - (-3) = 4 + 3 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Du räknade 4 − 3 − 6. Men parentesen (3 − 6) är −3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-93f4f017",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6 + (5 - 2) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "5 - 2 = 3"
        },
        {
          "math": "6 + (5 - 2) = 6 + 3 = 9"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-ea131c69",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5 - (4 - 2) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 2 = 2"
        },
        {
          "math": "5 - (4 - 2) = 5 - 2 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1"
          },
          "text": "Du räknade 5 − 4 − 2. Men parentesen (4 − 2) är 2, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-c9c430f8",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3 - (1 - 4) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 4 = -3"
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "3 - (1 - 4) = 3 - (-3) = 3 + 3 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2"
          },
          "text": "Du räknade 3 − 1 − 4. Men parentesen (1 − 4) är −3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-b8206976",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5 + (4 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 3 = 1"
        },
        {
          "math": "5 + (4 - 3) = 5 + 1 = 6"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-423d64d1",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "1 - (3 - 9) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 9 = -6"
        },
        {
          "text": "Att subtrahera −6 är att addera 6."
        },
        {
          "math": "1 - (3 - 9) = 1 - (-6) = 1 + 6 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-11"
          },
          "text": "Du räknade 1 − 3 − 9. Men parentesen (3 − 9) är −6, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-40e2deb4",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7 - (5 - 8) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "5 - 8 = -3"
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "7 - (5 - 8) = 7 - (-3) = 7 + 3 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du räknade 7 − 5 − 8. Men parentesen (5 − 8) är −3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-345e08ae",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3 - (7 - 4) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 4 = 3"
        },
        {
          "math": "3 - (7 - 4) = 3 - 3 = 0"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-8"
          },
          "text": "Du räknade 3 − 7 − 4. Men parentesen (7 − 4) är 3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-18773c68",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7 - (4 - 1) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 1 = 3"
        },
        {
          "math": "7 - (4 - 1) = 7 - 3 = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Du räknade 7 − 4 − 1. Men parentesen (4 − 1) är 3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-667a3da4",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2 - (1 - 7) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 7 = -6"
        },
        {
          "text": "Att subtrahera −6 är att addera 6."
        },
        {
          "math": "2 - (1 - 7) = 2 - (-6) = 2 + 6 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du räknade 2 − 1 − 7. Men parentesen (1 − 7) är −6, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-57bb84a9",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2 + (1 - 8) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 8 = -7"
        },
        {
          "math": "2 + (1 - 8) = 2 + (-7) = -5"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-c5435f41",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5 - (1 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 3 = -2"
        },
        {
          "text": "Att subtrahera −2 är att addera 2."
        },
        {
          "math": "5 - (1 - 3) = 5 - (-2) = 5 + 2 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Du räknade 5 − 1 − 3. Men parentesen (1 − 3) är −2, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-2814e93a",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5 + (4 - 7) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 7 = -3"
        },
        {
          "math": "5 + (4 - 7) = 5 + (-3) = 2"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-f6887009",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "1 - (4 - 6) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 6 = -2"
        },
        {
          "text": "Att subtrahera −2 är att addera 2."
        },
        {
          "math": "1 - (4 - 6) = 1 - (-2) = 1 + 2 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9"
          },
          "text": "Du räknade 1 − 4 − 6. Men parentesen (4 − 6) är −2, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-ab839dce",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5 - (4 - 9) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 9 = -5"
        },
        {
          "text": "Att subtrahera −5 är att addera 5."
        },
        {
          "math": "5 - (4 - 9) = 5 - (-5) = 5 + 5 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-8"
          },
          "text": "Du räknade 5 − 4 − 9. Men parentesen (4 − 9) är −5, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-4ca42b3c",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3 - (6 - 7) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "6 - 7 = -1"
        },
        {
          "text": "Att subtrahera −1 är att addera 1."
        },
        {
          "math": "3 - (6 - 7) = 3 - (-1) = 3 + 1 = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du räknade 3 − 6 − 7. Men parentesen (6 − 7) är −1, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-57411aaa",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4 + (9 - 5) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - 5 = 4"
        },
        {
          "math": "4 + (9 - 5) = 4 + 4 = 8"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-17f95596",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7 - (4 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 3 = 1"
        },
        {
          "math": "7 - (4 - 3) = 7 - 1 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "Du räknade 7 − 4 − 3. Men parentesen (4 − 3) är 1, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-dbc57784",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9 - (2 - 9) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - 9 = -7"
        },
        {
          "text": "Att subtrahera −7 är att addera 7."
        },
        {
          "math": "9 - (2 - 9) = 9 - (-7) = 9 + 7 = 16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2"
          },
          "text": "Du räknade 9 − 2 − 9. Men parentesen (2 − 9) är −7, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-b7d11274",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8 - (8 - 4) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - 4 = 4"
        },
        {
          "math": "8 - (8 - 4) = 8 - 4 = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-4"
          },
          "text": "Du räknade 8 − 8 − 4. Men parentesen (8 − 4) är 4, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-9fefcbcc",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2 + (5 - 9) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "5 - 9 = -4"
        },
        {
          "math": "2 + (5 - 9) = 2 + (-4) = -2"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-d082d61a",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7 + (3 - 2) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 2 = 1"
        },
        {
          "math": "7 + (3 - 2) = 7 + 1 = 8"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-9df08a41",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6 + (8 - 9) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - 9 = -1"
        },
        {
          "math": "6 + (8 - 9) = 6 + (-1) = 5"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-cd08b88d",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2 - (4 - 7) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 7 = -3"
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "2 - (4 - 7) = 2 - (-3) = 2 + 3 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9"
          },
          "text": "Du räknade 2 − 4 − 7. Men parentesen (4 − 7) är −3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-9c803cbc",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4 - (5 - 9) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "5 - 9 = -4"
        },
        {
          "text": "Att subtrahera −4 är att addera 4."
        },
        {
          "math": "4 - (5 - 9) = 4 - (-4) = 4 + 4 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du räknade 4 − 5 − 9. Men parentesen (5 − 9) är −4, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-2b11b8a2",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "1 - (7 - 2) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 2 = 5"
        },
        {
          "math": "1 - (7 - 2) = 1 - 5 = -4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-8"
          },
          "text": "Du räknade 1 − 7 − 2. Men parentesen (7 − 2) är 5, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-7f7702c2",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3 + (4 - 1) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 1 = 3"
        },
        {
          "math": "3 + (4 - 1) = 3 + 3 = 6"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-ca34f80d",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8 - (1 - 8) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 8 = -7"
        },
        {
          "text": "Att subtrahera −7 är att addera 7."
        },
        {
          "math": "8 - (1 - 8) = 8 - (-7) = 8 + 7 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1"
          },
          "text": "Du räknade 8 − 1 − 8. Men parentesen (1 − 8) är −7, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-ec1171f7",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4 - (7 - 8) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 8 = -1"
        },
        {
          "text": "Att subtrahera −1 är att addera 1."
        },
        {
          "math": "4 - (7 - 8) = 4 - (-1) = 4 + 1 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-11"
          },
          "text": "Du räknade 4 − 7 − 8. Men parentesen (7 − 8) är −1, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-97731e80",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5 + (7 - 2) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 2 = 5"
        },
        {
          "math": "5 + (7 - 2) = 5 + 5 = 10"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-71461acb",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7 - (6 - 8) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "6 - 8 = -2"
        },
        {
          "text": "Att subtrahera −2 är att addera 2."
        },
        {
          "math": "7 - (6 - 8) = 7 - (-2) = 7 + 2 = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-7"
          },
          "text": "Du räknade 7 − 6 − 8. Men parentesen (6 − 8) är −2, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-d5a1e148",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3 - (6 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "6 - 3 = 3"
        },
        {
          "math": "3 - (6 - 3) = 3 - 3 = 0"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du räknade 3 − 6 − 3. Men parentesen (6 − 3) är 3, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-8fe83531",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8 + (9 - 6) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "11"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - 6 = 3"
        },
        {
          "math": "8 + (9 - 6) = 8 + 3 = 11"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-parentes-c907d534",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9 - (1 - 2) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 2 = -1"
        },
        {
          "text": "Att subtrahera −1 är att addera 1."
        },
        {
          "math": "9 - (1 - 2) = 9 - (-1) = 9 + 1 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Du räknade 9 − 1 − 2. Men parentesen (1 − 2) är −1, och det är den som ska subtraheras."
        }
      ]
    },
    {
      "id": "aun4-parentes-9613a39a",
      "part": "parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6 + (1 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 3 = -2"
        },
        {
          "math": "6 + (1 - 3) = 6 + (-2) = 4"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aun4-faktor-parentes-a203f7b9",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(3 - 6) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 6 = -3"
        },
        {
          "math": "(-3)(3 - 6) = (-3) · (-3) = 9"
        },
        {
          "text": "Två negativa faktorer ger ett positivt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-f69686d2",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(6 - 7) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "6 - 7 = -1"
        },
        {
          "math": "4(6 - 7) = 4 · (-1) = -4"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-719ecf78",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3(7 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 3 = 4"
        },
        {
          "math": "3(7 - 3) = 3 · 4 = 12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-12"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-b62e2279",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(7 - 9) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 9 = -2"
        },
        {
          "math": "(-2)(7 - 9) = (-2) · (-2) = 4"
        },
        {
          "text": "Två negativa faktorer ger ett positivt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-4"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-4072f587",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6(2 - 8) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-36"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - 8 = -6"
        },
        {
          "math": "6(2 - 8) = 6 · (-6) = -36"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-bddea9b1",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(9 - (-4)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-39"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - (-4) = 9 + 4 = 13"
        },
        {
          "math": "(-3)(9 - (-4)) = (-3) · 13 = -39"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "39"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-a2aafdcd",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5(8 - 3) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - 3 = 5"
        },
        {
          "math": "5(8 - 3) = 5 · 5 = 25"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-25"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-703a1b81",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(8 - (-3)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-55"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - (-3) = 8 + 3 = 11"
        },
        {
          "math": "(-5)(8 - (-3)) = (-5) · 11 = -55"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "55"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-6897f2be",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(8 - (-8)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-48"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - (-8) = 8 + 8 = 16"
        },
        {
          "math": "(-3)(8 - (-8)) = (-3) · 16 = -48"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "48"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-70b9a95a",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3(3 - 9) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-18"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 9 = -6"
        },
        {
          "math": "3(3 - 9) = 3 · (-6) = -18"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-bad0a3dd",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(1 - 3) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-8"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - 3 = -2"
        },
        {
          "math": "4(1 - 3) = 4 · (-2) = -8"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-f52b628a",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4)(2 - 1) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - 1 = 1"
        },
        {
          "math": "(-4)(2 - 1) = (-4) · 1 = -4"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-8edd3a93",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5(2 - 7) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-25"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - 7 = -5"
        },
        {
          "math": "5(2 - 7) = 5 · (-5) = -25"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "25"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-8c4b7864",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5(3 - 9) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-30"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 9 = -6"
        },
        {
          "math": "5(3 - 9) = 5 · (-6) = -30"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-f7091286",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6(8 - 7) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - 7 = 1"
        },
        {
          "math": "6(8 - 7) = 6 · 1 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-78b56d81",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6(9 - 1) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "48"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - 1 = 8"
        },
        {
          "math": "6(9 - 1) = 6 · 8 = 48"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-48"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-78f58eec",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(3 - 9) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 9 = -6"
        },
        {
          "math": "(-5)(3 - 9) = (-5) · (-6) = 30"
        },
        {
          "text": "Två negativa faktorer ger ett positivt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-30"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-35144f42",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(4 - (-6)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-50"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - (-6) = 4 + 6 = 10"
        },
        {
          "math": "(-5)(4 - (-6)) = (-5) · 10 = -50"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "50"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-39857f64",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3(6 - 2) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "6 - 2 = 4"
        },
        {
          "math": "3(6 - 2) = 3 · 4 = 12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-12"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-0c8e33c0",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-6)(9 - 6) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-18"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - 6 = 3"
        },
        {
          "math": "(-6)(9 - 6) = (-6) · 3 = -18"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-d8383d1d",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(3 - (-1)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-8"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - (-1) = 3 + 1 = 4"
        },
        {
          "math": "(-2)(3 - (-1)) = (-2) · 4 = -8"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-45737a60",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-6)(7 - 4) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-18"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 4 = 3"
        },
        {
          "math": "(-6)(7 - 4) = (-6) · 3 = -18"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-ad8f24a5",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(7 - (-6)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-39"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - (-6) = 7 + 6 = 13"
        },
        {
          "math": "(-3)(7 - (-6)) = (-3) · 13 = -39"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "39"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-d985f13c",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2(3 - 6) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-6"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "3 - 6 = -3"
        },
        {
          "math": "2(3 - 6) = 2 · (-3) = -6"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-15a8b38d",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4)(1 - (-9)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-40"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - (-9) = 1 + 9 = 10"
        },
        {
          "math": "(-4)(1 - (-9)) = (-4) · 10 = -40"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-ee3a6540",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(2 - (-4)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-18"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - (-4) = 2 + 4 = 6"
        },
        {
          "math": "(-3)(2 - (-4)) = (-3) · 6 = -18"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-b7d4af6c",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(6 - (-2)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-40"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "6 - (-2) = 6 + 2 = 8"
        },
        {
          "math": "(-5)(6 - (-2)) = (-5) · 8 = -40"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-c79da3ff",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-6)(1 - (-1)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-12"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "1 - (-1) = 1 + 1 = 2"
        },
        {
          "math": "(-6)(1 - (-1)) = (-6) · 2 = -12"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-d27c5acd",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(4 - (-6)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-20"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - (-6) = 4 + 6 = 10"
        },
        {
          "math": "(-2)(4 - (-6)) = (-2) · 10 = -20"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "20"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-2ec24716",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2(6 - 9) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-6"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "6 - 9 = -3"
        },
        {
          "math": "2(6 - 9) = 2 · (-3) = -6"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-9b70f510",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-6)(2 - 5) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "18"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - 5 = -3"
        },
        {
          "math": "(-6)(2 - 5) = (-6) · (-3) = 18"
        },
        {
          "text": "Två negativa faktorer ger ett positivt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-18"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-c7c96be6",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(8 - 5) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-6"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "8 - 5 = 3"
        },
        {
          "math": "(-2)(8 - 5) = (-2) · 3 = -6"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-59fb4cef",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-6)(7 - (-7)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-84"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - (-7) = 7 + 7 = 14"
        },
        {
          "math": "(-6)(7 - (-7)) = (-6) · 14 = -84"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "84"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-1dbaa538",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(4 - 3) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "4 - 3 = 1"
        },
        {
          "math": "(-2)(4 - 3) = (-2) · 1 = -2"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-70f8b643",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(2 - (-2)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-8"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - (-2) = 2 + 2 = 4"
        },
        {
          "math": "(-2)(2 - (-2)) = (-2) · 4 = -8"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-3ca8f438",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2(9 - 4) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - 4 = 5"
        },
        {
          "math": "2(9 - 4) = 2 · 5 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-b8442541",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5(9 - 2) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "35"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - 2 = 7"
        },
        {
          "math": "5(9 - 2) = 5 · 7 = 35"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-35"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-8d343bee",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(9 - 8) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "9 - 8 = 1"
        },
        {
          "math": "(-2)(9 - 8) = (-2) · 1 = -2"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-2101c72b",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(2 - (-7)) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-45"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna parentesen först."
        },
        {
          "math": "2 - (-7) = 2 + 7 = 9"
        },
        {
          "math": "(-5)(2 - (-7)) = (-5) · 9 = -45"
        },
        {
          "text": "Olika tecken ger ett negativt svar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "45"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-faktor-parentes-3f00d2c1",
      "part": "faktor-parentes",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(7 - 5) = [a]"
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
          "text": "Räkna parentesen först."
        },
        {
          "math": "7 - 5 = 2"
        },
        {
          "math": "4(7 - 5) = 4 · 2 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-8"
          },
          "text": "Fel tecken. Vilket tecken har parentesen, och vilket har faktorn framför?"
        }
      ]
    },
    {
      "id": "aun4-tre-tal-3e7e153d",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2) - (-3) + (-1) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "(-2) - (-3) + (-1) = 1 + (-1) = 0"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du räknade − (−3) som − 3. Att subtrahera −3 är att addera 3."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-dbc9738b",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2) + (-2) - (-4) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −4 är att addera 4."
        },
        {
          "math": "(-2) + (-2) - (-4) = (-4) - (-4) = 0"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-8"
          },
          "text": "Du räknade − (−4) som − 4. Att subtrahera −4 är att addera 4."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-473628d4",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3) + (-5) - (-7) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-1"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −7 är att addera 7."
        },
        {
          "math": "(-3) + (-5) - (-7) = (-8) - (-7) = -1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-15"
          },
          "text": "Du räknade − (−7) som − 7. Att subtrahera −7 är att addera 7."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-9edfe2f6",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5) + (-7) - 5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-17"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-5) + (-7) - 5 = (-12) - 5 = -17"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-7"
          },
          "text": "Du räknade − 5 som + 5. Här står − 5 utan parentes: det är att ta bort 5."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-5e5ca66b",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-6) - (-8) + (-6) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −8 är att addera 8."
        },
        {
          "math": "(-6) - (-8) + (-6) = 2 + (-6) = -4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-20"
          },
          "text": "Du räknade − (−8) som − 8. Att subtrahera −8 är att addera 8."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-6f41a423",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) + (-6) - 7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-20"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-7) + (-6) - 7 = (-13) - 7 = -20"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du räknade − 7 som + 7. Här står − 7 utan parentes: det är att ta bort 7."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-3a5034ee",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-9) + (-1) - 3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-13"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-9) + (-1) - 3 = (-10) - 3 = -13"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-7"
          },
          "text": "Du räknade − 3 som + 3. Här står − 3 utan parentes: det är att ta bort 3."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-c190c916",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) + (-1) - 9 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-17"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-7) + (-1) - 9 = (-8) - 9 = -17"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Du räknade − 9 som + 9. Här står − 9 utan parentes: det är att ta bort 9."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-0f170c8c",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3) + (-8) - (-8) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −8 är att addera 8."
        },
        {
          "math": "(-3) + (-8) - (-8) = (-11) - (-8) = -3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-19"
          },
          "text": "Du räknade − (−8) som − 8. Att subtrahera −8 är att addera 8."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-75310ab7",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2) - (-7) + (-3) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −7 är att addera 7."
        },
        {
          "math": "(-2) - (-7) + (-3) = 5 + (-3) = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-12"
          },
          "text": "Du räknade − (−7) som − 7. Att subtrahera −7 är att addera 7."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-bf5c95ce",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-8) + (-4) - (-9) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −9 är att addera 9."
        },
        {
          "math": "(-8) + (-4) - (-9) = (-12) - (-9) = -3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-21"
          },
          "text": "Du räknade − (−9) som − 9. Att subtrahera −9 är att addera 9."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-d1acf98a",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-9) + (-5) - (-7) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-7"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −7 är att addera 7."
        },
        {
          "math": "(-9) + (-5) - (-7) = (-14) - (-7) = -7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-21"
          },
          "text": "Du räknade − (−7) som − 7. Att subtrahera −7 är att addera 7."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-fb727120",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2) + (-4) - 1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-7"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-2) + (-4) - 1 = (-6) - 1 = -7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Du räknade − 1 som + 1. Här står − 1 utan parentes: det är att ta bort 1."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-81769de4",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4) + (-7) - (-6) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −6 är att addera 6."
        },
        {
          "math": "(-4) + (-7) - (-6) = (-11) - (-6) = -5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-17"
          },
          "text": "Du räknade − (−6) som − 6. Att subtrahera −6 är att addera 6."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-ee8d11f8",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5) + (-5) - 9 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-19"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-5) + (-5) - 9 = (-10) - 9 = -19"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1"
          },
          "text": "Du räknade − 9 som + 9. Här står − 9 utan parentes: det är att ta bort 9."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-bd9ed583",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-8) + (-4) - 2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-14"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-8) + (-4) - 2 = (-12) - 2 = -14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du räknade − 2 som + 2. Här står − 2 utan parentes: det är att ta bort 2."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-567d5abf",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-9) + (-2) - 1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-12"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-9) + (-2) - 1 = (-11) - 1 = -12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du räknade − 1 som + 1. Här står − 1 utan parentes: det är att ta bort 1."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-84743644",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-1) - (-8) + (-6) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −8 är att addera 8."
        },
        {
          "math": "(-1) - (-8) + (-6) = 7 + (-6) = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-15"
          },
          "text": "Du räknade − (−8) som − 8. Att subtrahera −8 är att addera 8."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-0a391865",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-6) + (-3) - (-9) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −9 är att addera 9."
        },
        {
          "math": "(-6) + (-3) - (-9) = (-9) - (-9) = 0"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-18"
          },
          "text": "Du räknade − (−9) som − 9. Att subtrahera −9 är att addera 9."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-eec1808e",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) + (-8) - 2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-17"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-7) + (-8) - 2 = (-15) - 2 = -17"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-13"
          },
          "text": "Du räknade − 2 som + 2. Här står − 2 utan parentes: det är att ta bort 2."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-c28cdf72",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3) + (-4) - 6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-13"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-3) + (-4) - 6 = (-7) - 6 = -13"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1"
          },
          "text": "Du räknade − 6 som + 6. Här står − 6 utan parentes: det är att ta bort 6."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-5ec2a549",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) - (-1) + (-2) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-8"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −1 är att addera 1."
        },
        {
          "math": "(-7) - (-1) + (-2) = (-6) + (-2) = -8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du räknade − (−1) som − 1. Att subtrahera −1 är att addera 1."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-025b0e93",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) + (-9) - 2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-18"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-7) + (-9) - 2 = (-16) - 2 = -18"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-14"
          },
          "text": "Du räknade − 2 som + 2. Här står − 2 utan parentes: det är att ta bort 2."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-388136e9",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) + (-8) - (-1) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-14"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −1 är att addera 1."
        },
        {
          "math": "(-7) + (-8) - (-1) = (-15) - (-1) = -14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-16"
          },
          "text": "Du räknade − (−1) som − 1. Att subtrahera −1 är att addera 1."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-2ec8b870",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5) - (-3) + (-3) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "(-5) - (-3) + (-3) = (-2) + (-3) = -5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-11"
          },
          "text": "Du räknade − (−3) som − 3. Att subtrahera −3 är att addera 3."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-25f08bfc",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-9) + (-3) - (-3) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-9"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "(-9) + (-3) - (-3) = (-12) - (-3) = -9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-15"
          },
          "text": "Du räknade − (−3) som − 3. Att subtrahera −3 är att addera 3."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-72a2c641",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-1) - (-8) + (-3) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −8 är att addera 8."
        },
        {
          "math": "(-1) - (-8) + (-3) = 7 + (-3) = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-12"
          },
          "text": "Du räknade − (−8) som − 8. Att subtrahera −8 är att addera 8."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-81c55efc",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4) + (-3) - 6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-13"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-4) + (-3) - 6 = (-7) - 6 = -13"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1"
          },
          "text": "Du räknade − 6 som + 6. Här står − 6 utan parentes: det är att ta bort 6."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-38bea643",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3) - (-2) + (-5) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-6"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −2 är att addera 2."
        },
        {
          "math": "(-3) - (-2) + (-5) = (-1) + (-5) = -6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du räknade − (−2) som − 2. Att subtrahera −2 är att addera 2."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-02d93cb0",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) - (-8) + (-8) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-7"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −8 är att addera 8."
        },
        {
          "math": "(-7) - (-8) + (-8) = 1 + (-8) = -7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-23"
          },
          "text": "Du räknade − (−8) som − 8. Att subtrahera −8 är att addera 8."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-1ef3876d",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4) + (-7) - 1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-12"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-4) + (-7) - 1 = (-11) - 1 = -12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du räknade − 1 som + 1. Här står − 1 utan parentes: det är att ta bort 1."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-5a05122a",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2) + (-5) - (-4) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −4 är att addera 4."
        },
        {
          "math": "(-2) + (-5) - (-4) = (-7) - (-4) = -3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-11"
          },
          "text": "Du räknade − (−4) som − 4. Att subtrahera −4 är att addera 4."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-11e66aa0",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-8) + (-1) - (-4) = [a]"
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
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −4 är att addera 4."
        },
        {
          "math": "(-8) + (-1) - (-4) = (-9) - (-4) = -5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-13"
          },
          "text": "Du räknade − (−4) som − 4. Att subtrahera −4 är att addera 4."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-cdf54745",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2) + (-7) - 3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-12"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-2) + (-7) - 3 = (-9) - 3 = -12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du räknade − 3 som + 3. Här står − 3 utan parentes: det är att ta bort 3."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-99507ccd",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-9) + (-3) - (-2) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-10"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −2 är att addera 2."
        },
        {
          "math": "(-9) + (-3) - (-2) = (-12) - (-2) = -10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-14"
          },
          "text": "Du räknade − (−2) som − 2. Att subtrahera −2 är att addera 2."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-8496ea47",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-7) + (-1) - 6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-14"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-7) + (-1) - 6 = (-8) - 6 = -14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2"
          },
          "text": "Du räknade − 6 som + 6. Här står − 6 utan parentes: det är att ta bort 6."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-a73390f5",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-9) - (-3) + (-2) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-8"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −3 är att addera 3."
        },
        {
          "math": "(-9) - (-3) + (-2) = (-6) + (-2) = -8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-14"
          },
          "text": "Du räknade − (−3) som − 3. Att subtrahera −3 är att addera 3."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-8f996354",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5) + (-9) - 9 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-23"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-5) + (-9) - 9 = (-14) - 9 = -23"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Du räknade − 9 som + 9. Här står − 9 utan parentes: det är att ta bort 9."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-5fc750cd",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5) + (-9) - 2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-16"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "math": "(-5) + (-9) - 2 = (-14) - 2 = -16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-12"
          },
          "text": "Du räknade − 2 som + 2. Här står − 2 utan parentes: det är att ta bort 2."
        }
      ]
    },
    {
      "id": "aun4-tre-tal-3c986166",
      "part": "tre-tal",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4) + (-5) - (-6) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3"
          ]
        }
      },
      "solution": [
        {
          "text": "Ett steg i taget, från vänster."
        },
        {
          "text": "Att subtrahera −6 är att addera 6."
        },
        {
          "math": "(-4) + (-5) - (-6) = (-9) - (-6) = -3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-15"
          },
          "text": "Du räknade − (−6) som − 6. Att subtrahera −6 är att addera 6."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-ee81a672",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(5 + {9|(-2)}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{9|(-2)} = -4,5"
        },
        {
          "math": "5 + (-4,5) = 0,5"
        },
        {
          "math": "(-5) · 0,5 = -2,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-47,5"
          },
          "text": "9 delat med −2 är −4,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-1893e0de",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4)(4 + {7|(-2)}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{7|(-2)} = -3,5"
        },
        {
          "math": "4 + (-3,5) = 0,5"
        },
        {
          "math": "(-4) · 0,5 = -2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-30"
          },
          "text": "7 delat med −2 är −3,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-778a69b1",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4)(5 + {7|(-2)}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-6"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{7|(-2)} = -3,5"
        },
        {
          "math": "5 + (-3,5) = 1,5"
        },
        {
          "math": "(-4) · 1,5 = -6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-34"
          },
          "text": "7 delat med −2 är −3,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-8534601d",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(3 + {3|(-2)}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{3|(-2)} = -1,5"
        },
        {
          "math": "3 + (-1,5) = 1,5"
        },
        {
          "math": "4 · 1,5 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "18"
          },
          "text": "3 delat med −2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-96481e20",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,2)(3 + (-4) - {(-1,5)|0,5}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-0,4"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1,5)|0,5} = -3"
        },
        {
          "math": "3 + (-4) - (-3) = (-1) - (-3) = (-1) + 3 = 2"
        },
        {
          "math": "(-0,2) · 2 = -0,4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,4"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-0510f0ab",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(3 - {7|(-2)}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-13"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{7|(-2)} = -3,5"
        },
        {
          "math": "3 - (-3,5) = 3 + 3,5 = 6,5"
        },
        {
          "math": "(-2) · 6,5 = -13"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "1"
          },
          "text": "7 delat med −2 är −3,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-66bda3a7",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(1 - {5|(-2)}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{5|(-2)} = -2,5"
        },
        {
          "math": "1 - (-2,5) = 1 + 2,5 = 3,5"
        },
        {
          "math": "4 · 3,5 = 14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-14"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-6"
          },
          "text": "5 delat med −2 är −2,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-ed60c1d1",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5(4 + {(-9)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-9)|2} = -4,5"
        },
        {
          "math": "4 + (-4,5) = -0,5"
        },
        {
          "math": "5 · (-0,5) = -2,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "42,5"
          },
          "text": "−9 delat med 2 är −4,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-0d956754",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(5 + {(-3)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-17,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-3)|2} = -1,5"
        },
        {
          "math": "5 + (-1,5) = 3,5"
        },
        {
          "math": "(-5) · 3,5 = -17,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "17,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-32,5"
          },
          "text": "−3 delat med 2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-97e9007b",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,5)(2 + (-4) - {(-0,6)|0,2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-0,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,6)|0,2} = -3"
        },
        {
          "math": "2 + (-4) - (-3) = (-2) - (-3) = (-2) + 3 = 1"
        },
        {
          "math": "(-0,5) · 1 = -0,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-54d5ff97",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2(1 - {3|(-2)}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{3|(-2)} = -1,5"
        },
        {
          "math": "1 - (-1,5) = 1 + 1,5 = 2,5"
        },
        {
          "math": "2 · 2,5 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-1"
          },
          "text": "3 delat med −2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-4fe91f9f",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(1 - {(-5)|2}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-5)|2} = -2,5"
        },
        {
          "math": "1 - (-2,5) = 1 + 2,5 = 3,5"
        },
        {
          "math": "4 · 3,5 = 14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-14"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-6"
          },
          "text": "−5 delat med 2 är −2,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-443759d4",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "0,5(5 + (-4) - {(-0,9)|0,3}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,9)|0,3} = -3"
        },
        {
          "math": "5 + (-4) - (-3) = 1 - (-3) = 1 + 3 = 4"
        },
        {
          "math": "0,5 · 4 = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-067c40fe",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)(3 - {(-1)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-17,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1)|2} = -0,5"
        },
        {
          "math": "3 - (-0,5) = 3 + 0,5 = 3,5"
        },
        {
          "math": "(-5) · 3,5 = -17,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "17,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-12,5"
          },
          "text": "−1 delat med 2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-1d12fd90",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(4 + {(-7)|2}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-7)|2} = -3,5"
        },
        {
          "math": "4 + (-3,5) = 0,5"
        },
        {
          "math": "4 · 0,5 = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "30"
          },
          "text": "−7 delat med 2 är −3,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-ec29989b",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(1 - {(-1)|2}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1)|2} = -0,5"
        },
        {
          "math": "1 - (-0,5) = 1 + 0,5 = 1,5"
        },
        {
          "math": "4 · 1,5 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "2"
          },
          "text": "−1 delat med 2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-b7c0b8f3",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(4 + {1|(-2)}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-10,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{1|(-2)} = -0,5"
        },
        {
          "math": "4 + (-0,5) = 3,5"
        },
        {
          "math": "(-3) · 3,5 = -10,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-13,5"
          },
          "text": "1 delat med −2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-ccaf5242",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(5 + {(-3)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-10,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-3)|2} = -1,5"
        },
        {
          "math": "5 + (-1,5) = 3,5"
        },
        {
          "math": "(-3) · 3,5 = -10,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-19,5"
          },
          "text": "−3 delat med 2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-da509b8c",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,2)(1 + (-2) - {(-0,6)|0,3}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-0,2"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,6)|0,3} = -2"
        },
        {
          "math": "1 + (-2) - (-2) = (-1) - (-2) = (-1) + 2 = 1"
        },
        {
          "math": "(-0,2) · 1 = -0,2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,2"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-21943e29",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2(3 - {3|(-2)}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{3|(-2)} = -1,5"
        },
        {
          "math": "3 - (-1,5) = 3 + 1,5 = 4,5"
        },
        {
          "math": "2 · 4,5 = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "3"
          },
          "text": "3 delat med −2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-f6e8c2f6",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5(3 - {(-1)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "17,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1)|2} = -0,5"
        },
        {
          "math": "3 - (-0,5) = 3 + 0,5 = 3,5"
        },
        {
          "math": "5 · 3,5 = 17,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-17,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "12,5"
          },
          "text": "−1 delat med 2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-c87964d2",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5(3 - {1|(-2)}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "17,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{1|(-2)} = -0,5"
        },
        {
          "math": "3 - (-0,5) = 3 + 0,5 = 3,5"
        },
        {
          "math": "5 · 3,5 = 17,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-17,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "12,5"
          },
          "text": "1 delat med −2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-5247fa4a",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,5)(1 + (-4) - {(-0,4)|0,2}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,4)|0,2} = -2"
        },
        {
          "math": "1 + (-4) - (-2) = (-3) - (-2) = (-3) + 2 = -1"
        },
        {
          "math": "(-0,5) · (-1) = 0,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-0,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-ac14f349",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4(3 + {(-3)|2}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-3)|2} = -1,5"
        },
        {
          "math": "3 + (-1,5) = 1,5"
        },
        {
          "math": "4 · 1,5 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "18"
          },
          "text": "−3 delat med 2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-c168d6e1",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(1 + {1|(-2)}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-1"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{1|(-2)} = -0,5"
        },
        {
          "math": "1 + (-0,5) = 0,5"
        },
        {
          "math": "(-2) · 0,5 = -1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-3"
          },
          "text": "1 delat med −2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-c19febd7",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)(3 + {9|(-2)}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{9|(-2)} = -4,5"
        },
        {
          "math": "3 + (-4,5) = -1,5"
        },
        {
          "math": "(-2) · (-1,5) = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-3"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-15"
          },
          "text": "9 delat med −2 är −4,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-f62e7e7c",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3(5 - {(-3)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "19,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-3)|2} = -1,5"
        },
        {
          "math": "5 - (-1,5) = 5 + 1,5 = 6,5"
        },
        {
          "math": "3 · 6,5 = 19,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-19,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "10,5"
          },
          "text": "−3 delat med 2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-27ce051a",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2(4 + {3|(-2)}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{3|(-2)} = -1,5"
        },
        {
          "math": "4 + (-1,5) = 2,5"
        },
        {
          "math": "2 · 2,5 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "11"
          },
          "text": "3 delat med −2 är −1,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-5eb378e3",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,2)(4 + (-3) - {(-0,9)|0,3}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-0,8"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,9)|0,3} = -3"
        },
        {
          "math": "4 + (-3) - (-3) = 1 - (-3) = 1 + 3 = 4"
        },
        {
          "math": "(-0,2) · 4 = -0,8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,8"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-d2eda6af",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3(2 - {(-1)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1)|2} = -0,5"
        },
        {
          "math": "2 - (-0,5) = 2 + 0,5 = 2,5"
        },
        {
          "math": "3 · 2,5 = 7,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-7,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "4,5"
          },
          "text": "−1 delat med 2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-7a9f18c9",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,5)(2 + (-1) - {(-1,2)|0,4}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1,2)|0,4} = -3"
        },
        {
          "math": "2 + (-1) - (-3) = 1 - (-3) = 1 + 3 = 4"
        },
        {
          "math": "(-0,5) · 4 = -2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-89883bad",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,5)(3 + (-4) - {(-0,6)|0,3}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-0,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,6)|0,3} = -2"
        },
        {
          "math": "3 + (-4) - (-2) = (-1) - (-2) = (-1) + 2 = 1"
        },
        {
          "math": "(-0,5) · 1 = -0,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-bbe8186d",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(4 - {(-1)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-13,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1)|2} = -0,5"
        },
        {
          "math": "4 - (-0,5) = 4 + 0,5 = 4,5"
        },
        {
          "math": "(-3) · 4,5 = -13,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-10,5"
          },
          "text": "−1 delat med 2 är −0,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-fdedb43d",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "0,5(3 + (-4) - {(-0,6)|0,3}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,6)|0,3} = -2"
        },
        {
          "math": "3 + (-4) - (-2) = (-1) - (-2) = (-1) + 2 = 1"
        },
        {
          "math": "0,5 · 1 = 0,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-0,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-b689582b",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "0,5(3 + (-1) - {(-0,9)|0,3}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,9)|0,3} = -3"
        },
        {
          "math": "3 + (-1) - (-3) = 2 - (-3) = 2 + 3 = 5"
        },
        {
          "math": "0,5 · 5 = 2,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-e6dbcd0b",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,2)(5 + (-4) - {(-0,8)|0,2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-1"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,8)|0,2} = -4"
        },
        {
          "math": "5 + (-4) - (-4) = 1 - (-4) = 1 + 4 = 5"
        },
        {
          "math": "(-0,2) · 5 = -1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-1a33cb48",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,2)(3 + (-1) - {(-0,4)|0,2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-0,8"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-0,4)|0,2} = -2"
        },
        {
          "math": "3 + (-1) - (-2) = 2 - (-2) = 2 + 2 = 4"
        },
        {
          "math": "(-0,2) · 4 = -0,8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,8"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-e4e50687",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-0,5)(3 + (-2) - {(-1,5)|0,5}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-1,5)|0,5} = -3"
        },
        {
          "math": "3 + (-2) - (-3) = 1 - (-3) = 1 + 3 = 4"
        },
        {
          "math": "(-0,5) · 4 = -2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-1378d605",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)(2 + {(-5)|2}) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{(-5)|2} = -2,5"
        },
        {
          "math": "2 + (-2,5) = -0,5"
        },
        {
          "math": "(-3) · (-0,5) = 1,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1,5"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-13,5"
          },
          "text": "−5 delat med 2 är −2,5."
        }
      ]
    },
    {
      "id": "aun4-alla-raknesatt-f60b0283",
      "part": "alla-raknesatt",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4)(1 + {5|(-2)}) = [a]"
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
          "text": "Räkna det stående bråket först, sedan parentesen och sist multiplikationen."
        },
        {
          "math": "{5|(-2)} = -2,5"
        },
        {
          "math": "1 + (-2,5) = -1,5"
        },
        {
          "math": "(-4) · (-1,5) = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Fel tecken. Gå igenom stegen ett i taget och kontrollera tecknet efter varje steg."
        },
        {
          "answers": {
            "a": "-14"
          },
          "text": "5 delat med −2 är −2,5."
        }
      ]
    }
  ]
};
