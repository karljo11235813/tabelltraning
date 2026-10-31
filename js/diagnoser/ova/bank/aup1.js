// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AUp1.
export default {
  "code": "AUp1",
  "parts": [
    {
      "id": "berakna",
      "title": "Beräkna potenser",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "exponent-1-0",
      "title": "Exponenten 1 och 0",
      "labels": [
        "2a",
        "2b"
      ]
    },
    {
      "id": "bas-2",
      "title": "Potens med bas 2",
      "labels": [
        "3a",
        "3b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig skriva talet som en potens med bas 2."
    },
    {
      "id": "utan-heltal",
      "title": "Utan potenser, heltal",
      "labels": [
        "4a",
        "4b"
      ],
      "formNote": "Det är rätt värde, men skriv det som ett vanligt tal, utan potenser och utan onödiga nollor."
    },
    {
      "id": "utan-decimal",
      "title": "Utan potenser, decimal",
      "labels": [
        "5a",
        "5b"
      ],
      "formNote": "Det är rätt värde, men skriv det som ett vanligt tal, utan potenser och utan onödiga nollor."
    },
    {
      "id": "grund-stora",
      "title": "Grundpotensform, stora tal",
      "labels": [
        "6a",
        "6b"
      ],
      "formNote": "Det är rätt värde, men i grundpotensform ska talet före gånger vara minst 1 och mindre än 10, utan onödiga nollor."
    },
    {
      "id": "utan-negativ",
      "title": "Utan potenser, negativ exponent",
      "labels": [
        "7a",
        "7b"
      ],
      "formNote": "Det är rätt värde, men skriv det som ett vanligt tal, utan potenser och utan onödiga nollor."
    },
    {
      "id": "grund-sma",
      "title": "Grundpotensform, små tal",
      "labels": [
        "8a",
        "8b"
      ],
      "formNote": "Det är rätt värde, men i grundpotensform ska talet före gånger vara minst 1 och mindre än 10, utan onödiga nollor."
    }
  ],
  "tasks": [
    {
      "id": "aup1-berakna-aae4d1be",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^9 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "512"
          ]
        }
      },
      "solution": [
        {
          "text": "2⁹ betyder 9 faktorer 2 gånger varandra."
        },
        {
          "math": "2^9 = 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 = 512"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Du räknade 2 · 9. Men 2⁹ betyder 2 gånger sig själv, 9 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-31cf4153",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^2 = [a]"
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
          "text": "2² betyder 2 faktorer 2 gånger varandra."
        },
        {
          "math": "2^2 = 2 · 2 = 4"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup1-berakna-cc65f816",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "81"
          ]
        }
      },
      "solution": [
        {
          "text": "3⁴ betyder 4 faktorer 3 gånger varandra."
        },
        {
          "math": "3^4 = 3 · 3 · 3 · 3 = 81"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du räknade 3 · 4. Men 3⁴ betyder 3 gånger sig själv, 4 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-3f04ea7c",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "128"
          ]
        }
      },
      "solution": [
        {
          "text": "2⁷ betyder 7 faktorer 2 gånger varandra."
        },
        {
          "math": "2^7 = 2 · 2 · 2 · 2 · 2 · 2 · 2 = 128"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14"
          },
          "text": "Du räknade 2 · 7. Men 2⁷ betyder 2 gånger sig själv, 7 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-32c9e205",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "729"
          ]
        }
      },
      "solution": [
        {
          "text": "9³ betyder 3 faktorer 9 gånger varandra."
        },
        {
          "math": "9^3 = 9 · 9 · 9 = 729"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "27"
          },
          "text": "Du räknade 9 · 3. Men 9³ betyder 9 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-81b3ed69",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "64"
          ]
        }
      },
      "solution": [
        {
          "text": "8² betyder 2 faktorer 8 gånger varandra."
        },
        {
          "math": "8^2 = 8 · 8 = 64"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16"
          },
          "text": "Du räknade 8 · 2. Men 8² betyder 8 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-4066b7a0",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^3 = [a]"
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
          "text": "2³ betyder 3 faktorer 2 gånger varandra."
        },
        {
          "math": "2^3 = 2 · 2 · 2 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Du räknade 2 · 3. Men 2³ betyder 2 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-77935adb",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "343"
          ]
        }
      },
      "solution": [
        {
          "text": "7³ betyder 3 faktorer 7 gånger varandra."
        },
        {
          "math": "7^3 = 7 · 7 · 7 = 343"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "21"
          },
          "text": "Du räknade 7 · 3. Men 7³ betyder 7 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-bf9abee0",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "729"
          ]
        }
      },
      "solution": [
        {
          "text": "3⁶ betyder 6 faktorer 3 gånger varandra."
        },
        {
          "math": "3^6 = 3 · 3 · 3 · 3 · 3 · 3 = 729"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Du räknade 3 · 6. Men 3⁶ betyder 3 gånger sig själv, 6 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-5d7a6695",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "15^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "225"
          ]
        }
      },
      "solution": [
        {
          "text": "15² betyder 2 faktorer 15 gånger varandra."
        },
        {
          "math": "15^2 = 15 · 15 = 225"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Du räknade 15 · 2. Men 15² betyder 15 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-bbc3513e",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "512"
          ]
        }
      },
      "solution": [
        {
          "text": "8³ betyder 3 faktorer 8 gånger varandra."
        },
        {
          "math": "8^3 = 8 · 8 · 8 = 512"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24"
          },
          "text": "Du räknade 8 · 3. Men 8³ betyder 8 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-b6cc6fdf",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^3 = [a]"
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
          "text": "3³ betyder 3 faktorer 3 gånger varandra."
        },
        {
          "math": "3^3 = 3 · 3 · 3 = 27"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Du räknade 3 · 3. Men 3³ betyder 3 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-c442ce68",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7^2 = [a]"
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
          "text": "7² betyder 2 faktorer 7 gånger varandra."
        },
        {
          "math": "7^2 = 7 · 7 = 49"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14"
          },
          "text": "Du räknade 7 · 2. Men 7² betyder 7 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-e36daab2",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "64"
          ]
        }
      },
      "solution": [
        {
          "text": "4³ betyder 3 faktorer 4 gånger varandra."
        },
        {
          "math": "4^3 = 4 · 4 · 4 = 64"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du räknade 4 · 3. Men 4³ betyder 4 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-fe022e7a",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "100"
          ]
        }
      },
      "solution": [
        {
          "text": "10² betyder 2 faktorer 10 gånger varandra."
        },
        {
          "math": "10^2 = 10 · 10 = 100"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "20"
          },
          "text": "Du räknade 10 · 2. Men 10² betyder 10 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-320607b9",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "125"
          ]
        }
      },
      "solution": [
        {
          "text": "5³ betyder 3 faktorer 5 gånger varandra."
        },
        {
          "math": "5^3 = 5 · 5 · 5 = 125"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Du räknade 5 · 3. Men 5³ betyder 5 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-e534e79c",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "216"
          ]
        }
      },
      "solution": [
        {
          "text": "6³ betyder 3 faktorer 6 gånger varandra."
        },
        {
          "math": "6^3 = 6 · 6 · 6 = 216"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Du räknade 6 · 3. Men 6³ betyder 6 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-b5ea4db5",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1000"
          ]
        }
      },
      "solution": [
        {
          "text": "10³ betyder 3 faktorer 10 gånger varandra."
        },
        {
          "math": "10^3 = 10 · 10 · 10 = 1000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Du räknade 10 · 3. Men 10³ betyder 10 gånger sig själv, 3 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-5bb15863",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "256"
          ]
        }
      },
      "solution": [
        {
          "text": "4⁴ betyder 4 faktorer 4 gånger varandra."
        },
        {
          "math": "4^4 = 4 · 4 · 4 · 4 = 256"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16"
          },
          "text": "Du räknade 4 · 4. Men 4⁴ betyder 4 gånger sig själv, 4 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-6e9d36ce",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5^2 = [a]"
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
          "text": "5² betyder 2 faktorer 5 gånger varandra."
        },
        {
          "math": "5^2 = 5 · 5 = 25"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "Du räknade 5 · 2. Men 5² betyder 5 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-13ff8ed9",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "11^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "121"
          ]
        }
      },
      "solution": [
        {
          "text": "11² betyder 2 faktorer 11 gånger varandra."
        },
        {
          "math": "11^2 = 11 · 11 = 121"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "22"
          },
          "text": "Du räknade 11 · 2. Men 11² betyder 11 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-70d56de9",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "256"
          ]
        }
      },
      "solution": [
        {
          "text": "2⁸ betyder 8 faktorer 2 gånger varandra."
        },
        {
          "math": "2^8 = 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 = 256"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16"
          },
          "text": "Du räknade 2 · 8. Men 2⁸ betyder 2 gånger sig själv, 8 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-5bca9124",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "12^2 = [a]"
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
          "text": "12² betyder 2 faktorer 12 gånger varandra."
        },
        {
          "math": "12^2 = 12 · 12 = 144"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24"
          },
          "text": "Du räknade 12 · 2. Men 12² betyder 12 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-2631fe7b",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "13^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "169"
          ]
        }
      },
      "solution": [
        {
          "text": "13² betyder 2 faktorer 13 gånger varandra."
        },
        {
          "math": "13^2 = 13 · 13 = 169"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "26"
          },
          "text": "Du räknade 13 · 2. Men 13² betyder 13 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-4e6ab49f",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "64"
          ]
        }
      },
      "solution": [
        {
          "text": "2⁶ betyder 6 faktorer 2 gånger varandra."
        },
        {
          "math": "2^6 = 2 · 2 · 2 · 2 · 2 · 2 = 64"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du räknade 2 · 6. Men 2⁶ betyder 2 gånger sig själv, 6 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-ed9c048a",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "81"
          ]
        }
      },
      "solution": [
        {
          "text": "9² betyder 2 faktorer 9 gånger varandra."
        },
        {
          "math": "9^2 = 9 · 9 = 81"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "Du räknade 9 · 2. Men 9² betyder 9 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-9b5c9434",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "625"
          ]
        }
      },
      "solution": [
        {
          "text": "5⁴ betyder 4 faktorer 5 gånger varandra."
        },
        {
          "math": "5^4 = 5 · 5 · 5 · 5 = 625"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "20"
          },
          "text": "Du räknade 5 · 4. Men 5⁴ betyder 5 gånger sig själv, 4 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-3d7ca15d",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^4 = [a]"
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
          "text": "2⁴ betyder 4 faktorer 2 gånger varandra."
        },
        {
          "math": "2^4 = 2 · 2 · 2 · 2 = 16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Du räknade 2 · 4. Men 2⁴ betyder 2 gånger sig själv, 4 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-975f01bf",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6^2 = [a]"
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
          "text": "6² betyder 2 faktorer 6 gånger varandra."
        },
        {
          "math": "6^2 = 6 · 6 = 36"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du räknade 6 · 2. Men 6² betyder 6 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-4328d341",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "243"
          ]
        }
      },
      "solution": [
        {
          "text": "3⁵ betyder 5 faktorer 3 gånger varandra."
        },
        {
          "math": "3^5 = 3 · 3 · 3 · 3 · 3 = 243"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Du räknade 3 · 5. Men 3⁵ betyder 3 gånger sig själv, 5 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-67fc892d",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4^2 = [a]"
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
          "text": "4² betyder 2 faktorer 4 gånger varandra."
        },
        {
          "math": "4^2 = 4 · 4 = 16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Du räknade 4 · 2. Men 4² betyder 4 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-berakna-d9c4f556",
      "part": "berakna",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "14^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "196"
          ]
        }
      },
      "solution": [
        {
          "text": "14² betyder 2 faktorer 14 gånger varandra."
        },
        {
          "math": "14^2 = 14 · 14 = 196"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "28"
          },
          "text": "Du räknade 14 · 2. Men 14² betyder 14 gånger sig själv, 2 faktorer."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-2eb3a1ea",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "17^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "17"
          ]
        }
      },
      "solution": [
        {
          "text": "17¹ är en enda faktor 17."
        },
        {
          "math": "17^1 = 17"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "17¹ är inte 1. Exponenten 1 betyder en enda faktor 17."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-6ef94648",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8^1 = [a]"
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
          "text": "8¹ är en enda faktor 8."
        },
        {
          "math": "8^1 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "8¹ är inte 1. Exponenten 1 betyder en enda faktor 8."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-7614783c",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "24^1 = [a]"
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
          "text": "24¹ är en enda faktor 24."
        },
        {
          "math": "24^1 = 24"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "24¹ är inte 1. Exponenten 1 betyder en enda faktor 24."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-4d3c8bb1",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "22^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 22:"
        },
        {
          "math": "22^2 = 484"
        },
        {
          "math": "22^1 = {484|22} = 22"
        },
        {
          "math": "22^0 = {22|22} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "22⁰ är inte 0. Varje steg ned delar med 22, och 22 delat med 22 är 1."
        },
        {
          "answers": {
            "a": "22"
          },
          "text": "22⁰ är inte 22: det är 22¹ som är 22."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-8f147da9",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "13^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 13:"
        },
        {
          "math": "13^2 = 169"
        },
        {
          "math": "13^1 = {169|13} = 13"
        },
        {
          "math": "13^0 = {13|13} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "13⁰ är inte 0. Varje steg ned delar med 13, och 13 delat med 13 är 1."
        },
        {
          "answers": {
            "a": "13"
          },
          "text": "13⁰ är inte 13: det är 13¹ som är 13."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-0087d9e5",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "17^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 17:"
        },
        {
          "math": "17^2 = 289"
        },
        {
          "math": "17^1 = {289|17} = 17"
        },
        {
          "math": "17^0 = {17|17} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "17⁰ är inte 0. Varje steg ned delar med 17, och 17 delat med 17 är 1."
        },
        {
          "answers": {
            "a": "17"
          },
          "text": "17⁰ är inte 17: det är 17¹ som är 17."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-ff84b93b",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "8^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 8:"
        },
        {
          "math": "8^2 = 64"
        },
        {
          "math": "8^1 = {64|8} = 8"
        },
        {
          "math": "8^0 = {8|8} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "8⁰ är inte 0. Varje steg ned delar med 8, och 8 delat med 8 är 1."
        },
        {
          "answers": {
            "a": "8"
          },
          "text": "8⁰ är inte 8: det är 8¹ som är 8."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-f7502afd",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 6:"
        },
        {
          "math": "6^2 = 36"
        },
        {
          "math": "6^1 = {36|6} = 6"
        },
        {
          "math": "6^0 = {6|6} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "6⁰ är inte 0. Varje steg ned delar med 6, och 6 delat med 6 är 1."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "6⁰ är inte 6: det är 6¹ som är 6."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-533c1a4b",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5^1 = [a]"
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
          "text": "5¹ är en enda faktor 5."
        },
        {
          "math": "5^1 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "5¹ är inte 1. Exponenten 1 betyder en enda faktor 5."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-49c9daf3",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "20^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 20:"
        },
        {
          "math": "20^2 = 400"
        },
        {
          "math": "20^1 = {400|20} = 20"
        },
        {
          "math": "20^0 = {20|20} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "20⁰ är inte 0. Varje steg ned delar med 20, och 20 delat med 20 är 1."
        },
        {
          "answers": {
            "a": "20"
          },
          "text": "20⁰ är inte 20: det är 20¹ som är 20."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-f0e6f30a",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "12^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 12:"
        },
        {
          "math": "12^2 = 144"
        },
        {
          "math": "12^1 = {144|12} = 12"
        },
        {
          "math": "12^0 = {12|12} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "12⁰ är inte 0. Varje steg ned delar med 12, och 12 delat med 12 är 1."
        },
        {
          "answers": {
            "a": "12"
          },
          "text": "12⁰ är inte 12: det är 12¹ som är 12."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-8ac73480",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "19^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "19"
          ]
        }
      },
      "solution": [
        {
          "text": "19¹ är en enda faktor 19."
        },
        {
          "math": "19^1 = 19"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "19¹ är inte 1. Exponenten 1 betyder en enda faktor 19."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-68e43994",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "10^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 10:"
        },
        {
          "math": "10^2 = 100"
        },
        {
          "math": "10^1 = {100|10} = 10"
        },
        {
          "math": "10^0 = {10|10} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "10⁰ är inte 0. Varje steg ned delar med 10, och 10 delat med 10 är 1."
        },
        {
          "answers": {
            "a": "10"
          },
          "text": "10⁰ är inte 10: det är 10¹ som är 10."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-cbc686cd",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "23^1 = [a]"
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
          "text": "23¹ är en enda faktor 23."
        },
        {
          "math": "23^1 = 23"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "23¹ är inte 1. Exponenten 1 betyder en enda faktor 23."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-85da4151",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "16^1 = [a]"
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
          "text": "16¹ är en enda faktor 16."
        },
        {
          "math": "16^1 = 16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "16¹ är inte 1. Exponenten 1 betyder en enda faktor 16."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-272c61de",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "7^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 7:"
        },
        {
          "math": "7^2 = 49"
        },
        {
          "math": "7^1 = {49|7} = 7"
        },
        {
          "math": "7^0 = {7|7} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "7⁰ är inte 0. Varje steg ned delar med 7, och 7 delat med 7 är 1."
        },
        {
          "answers": {
            "a": "7"
          },
          "text": "7⁰ är inte 7: det är 7¹ som är 7."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-844da3e6",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "16^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 16:"
        },
        {
          "math": "16^2 = 256"
        },
        {
          "math": "16^1 = {256|16} = 16"
        },
        {
          "math": "16^0 = {16|16} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "16⁰ är inte 0. Varje steg ned delar med 16, och 16 delat med 16 är 1."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "16⁰ är inte 16: det är 16¹ som är 16."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-c3f33901",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 2:"
        },
        {
          "math": "2^2 = 4"
        },
        {
          "math": "2^1 = {4|2} = 2"
        },
        {
          "math": "2^0 = {2|2} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "2⁰ är inte 0. Varje steg ned delar med 2, och 2 delat med 2 är 1."
        },
        {
          "answers": {
            "a": "2"
          },
          "text": "2⁰ är inte 2: det är 2¹ som är 2."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-f1aecfc0",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "20^1 = [a]"
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
          "text": "20¹ är en enda faktor 20."
        },
        {
          "math": "20^1 = 20"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "20¹ är inte 1. Exponenten 1 betyder en enda faktor 20."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-080b5fef",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 4:"
        },
        {
          "math": "4^2 = 16"
        },
        {
          "math": "4^1 = {16|4} = 4"
        },
        {
          "math": "4^0 = {4|4} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "4⁰ är inte 0. Varje steg ned delar med 4, och 4 delat med 4 är 1."
        },
        {
          "answers": {
            "a": "4"
          },
          "text": "4⁰ är inte 4: det är 4¹ som är 4."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-7408e87f",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "21^1 = [a]"
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
          "text": "21¹ är en enda faktor 21."
        },
        {
          "math": "21^1 = 21"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "21¹ är inte 1. Exponenten 1 betyder en enda faktor 21."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-c952c9f7",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "10^1 = [a]"
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
          "text": "10¹ är en enda faktor 10."
        },
        {
          "math": "10^1 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "10¹ är inte 1. Exponenten 1 betyder en enda faktor 10."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-eb7bd462",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 3:"
        },
        {
          "math": "3^2 = 9"
        },
        {
          "math": "3^1 = {9|3} = 3"
        },
        {
          "math": "3^0 = {3|3} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "3⁰ är inte 0. Varje steg ned delar med 3, och 3 delat med 3 är 1."
        },
        {
          "answers": {
            "a": "3"
          },
          "text": "3⁰ är inte 3: det är 3¹ som är 3."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-41db326b",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "11^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 11:"
        },
        {
          "math": "11^2 = 121"
        },
        {
          "math": "11^1 = {121|11} = 11"
        },
        {
          "math": "11^0 = {11|11} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "11⁰ är inte 0. Varje steg ned delar med 11, och 11 delat med 11 är 1."
        },
        {
          "answers": {
            "a": "11"
          },
          "text": "11⁰ är inte 11: det är 11¹ som är 11."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-3dbdb0d2",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "23^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 23:"
        },
        {
          "math": "23^2 = 529"
        },
        {
          "math": "23^1 = {529|23} = 23"
        },
        {
          "math": "23^0 = {23|23} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "23⁰ är inte 0. Varje steg ned delar med 23, och 23 delat med 23 är 1."
        },
        {
          "answers": {
            "a": "23"
          },
          "text": "23⁰ är inte 23: det är 23¹ som är 23."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-a7e43e87",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9^1 = [a]"
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
          "text": "9¹ är en enda faktor 9."
        },
        {
          "math": "9^1 = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "9¹ är inte 1. Exponenten 1 betyder en enda faktor 9."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-83cdf7f4",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "15^1 = [a]"
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
          "text": "15¹ är en enda faktor 15."
        },
        {
          "math": "15^1 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "15¹ är inte 1. Exponenten 1 betyder en enda faktor 15."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-71c97f1c",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "18^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 18:"
        },
        {
          "math": "18^2 = 324"
        },
        {
          "math": "18^1 = {324|18} = 18"
        },
        {
          "math": "18^0 = {18|18} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "18⁰ är inte 0. Varje steg ned delar med 18, och 18 delat med 18 är 1."
        },
        {
          "answers": {
            "a": "18"
          },
          "text": "18⁰ är inte 18: det är 18¹ som är 18."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-4d305dd6",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^1 = [a]"
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
          "text": "2¹ är en enda faktor 2."
        },
        {
          "math": "2^1 = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "2¹ är inte 1. Exponenten 1 betyder en enda faktor 2."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-e769b4d7",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "15^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 15:"
        },
        {
          "math": "15^2 = 225"
        },
        {
          "math": "15^1 = {225|15} = 15"
        },
        {
          "math": "15^0 = {15|15} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "15⁰ är inte 0. Varje steg ned delar med 15, och 15 delat med 15 är 1."
        },
        {
          "answers": {
            "a": "15"
          },
          "text": "15⁰ är inte 15: det är 15¹ som är 15."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-a363f39d",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^1 = [a]"
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
          "text": "3¹ är en enda faktor 3."
        },
        {
          "math": "3^1 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "3¹ är inte 1. Exponenten 1 betyder en enda faktor 3."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-8578af5f",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "24^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 24:"
        },
        {
          "math": "24^2 = 576"
        },
        {
          "math": "24^1 = {576|24} = 24"
        },
        {
          "math": "24^0 = {24|24} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "24⁰ är inte 0. Varje steg ned delar med 24, och 24 delat med 24 är 1."
        },
        {
          "answers": {
            "a": "24"
          },
          "text": "24⁰ är inte 24: det är 24¹ som är 24."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-c923e17e",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "13^1 = [a]"
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
          "text": "13¹ är en enda faktor 13."
        },
        {
          "math": "13^1 = 13"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "13¹ är inte 1. Exponenten 1 betyder en enda faktor 13."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-bfbc5746",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "22^1 = [a]"
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
          "text": "22¹ är en enda faktor 22."
        },
        {
          "math": "22^1 = 22"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "22¹ är inte 1. Exponenten 1 betyder en enda faktor 22."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-fc3087b3",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "19^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 19:"
        },
        {
          "math": "19^2 = 361"
        },
        {
          "math": "19^1 = {361|19} = 19"
        },
        {
          "math": "19^0 = {19|19} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "19⁰ är inte 0. Varje steg ned delar med 19, och 19 delat med 19 är 1."
        },
        {
          "answers": {
            "a": "19"
          },
          "text": "19⁰ är inte 19: det är 19¹ som är 19."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-b2c1b142",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6^1 = [a]"
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
          "text": "6¹ är en enda faktor 6."
        },
        {
          "math": "6^1 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "6¹ är inte 1. Exponenten 1 betyder en enda faktor 6."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-145e5bc8",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "25^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 25:"
        },
        {
          "math": "25^2 = 625"
        },
        {
          "math": "25^1 = {625|25} = 25"
        },
        {
          "math": "25^0 = {25|25} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "25⁰ är inte 0. Varje steg ned delar med 25, och 25 delat med 25 är 1."
        },
        {
          "answers": {
            "a": "25"
          },
          "text": "25⁰ är inte 25: det är 25¹ som är 25."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-be63d8d3",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "14^1 = [a]"
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
          "text": "14¹ är en enda faktor 14."
        },
        {
          "math": "14^1 = 14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "14¹ är inte 1. Exponenten 1 betyder en enda faktor 14."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-587fa2a4",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9^0 = [a]"
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
          "text": "Varje steg ned i exponenten delar med 9:"
        },
        {
          "math": "9^2 = 81"
        },
        {
          "math": "9^1 = {81|9} = 9"
        },
        {
          "math": "9^0 = {9|9} = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "9⁰ är inte 0. Varje steg ned delar med 9, och 9 delat med 9 är 1."
        },
        {
          "answers": {
            "a": "9"
          },
          "text": "9⁰ är inte 9: det är 9¹ som är 9."
        }
      ]
    },
    {
      "id": "aup1-exponent-1-0-23f3993f",
      "part": "exponent-1-0",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "18^1 = [a]"
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
          "text": "18¹ är en enda faktor 18."
        },
        {
          "math": "18^1 = 18"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "18¹ är inte 1. Exponenten 1 betyder en enda faktor 18."
        }
      ]
    },
    {
      "id": "aup1-bas-2-b13b7eac",
      "part": "bas-2",
      "text": "Skriv som potens med bas 2",
      "points": "each",
      "rows": [
        "256 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Dela med 2 tills du kommer till 1, och räkna hur många tvåor det blev."
        },
        {
          "math": "256 = 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 = 2^8"
        },
        {
          "text": "8 tvåor gånger varandra är 2⁸."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^128"
          },
          "text": "Du delade 256 med 2. Men exponenten är antalet tvåor som multipliceras."
        }
      ]
    },
    {
      "id": "aup1-bas-2-3de5f250",
      "part": "bas-2",
      "text": "Skriv som potens med bas 2",
      "points": "each",
      "rows": [
        "128 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Dela med 2 tills du kommer till 1, och räkna hur många tvåor det blev."
        },
        {
          "math": "128 = 2 · 2 · 2 · 2 · 2 · 2 · 2 = 2^7"
        },
        {
          "text": "7 tvåor gånger varandra är 2⁷."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^64"
          },
          "text": "Du delade 128 med 2. Men exponenten är antalet tvåor som multipliceras."
        }
      ]
    },
    {
      "id": "aup1-bas-2-e823d7e1",
      "part": "bas-2",
      "text": "Skriv som potens med bas 2",
      "points": "each",
      "rows": [
        "512 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^9"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Dela med 2 tills du kommer till 1, och räkna hur många tvåor det blev."
        },
        {
          "math": "512 = 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 = 2^9"
        },
        {
          "text": "9 tvåor gånger varandra är 2⁹."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^256"
          },
          "text": "Du delade 512 med 2. Men exponenten är antalet tvåor som multipliceras."
        }
      ]
    },
    {
      "id": "aup1-bas-2-8c4b0308",
      "part": "bas-2",
      "text": "Skriv som potens med bas 2",
      "points": "each",
      "rows": [
        "16 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Dela med 2 tills du kommer till 1, och räkna hur många tvåor det blev."
        },
        {
          "math": "16 = 2 · 2 · 2 · 2 = 2^4"
        },
        {
          "text": "4 tvåor gånger varandra är 2⁴."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^8"
          },
          "text": "Du delade 16 med 2. Men exponenten är antalet tvåor som multipliceras."
        }
      ]
    },
    {
      "id": "aup1-bas-2-51c7184c",
      "part": "bas-2",
      "text": "Skriv som potens med bas 2",
      "points": "each",
      "rows": [
        "1024 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^10"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Dela med 2 tills du kommer till 1, och räkna hur många tvåor det blev."
        },
        {
          "math": "1024 = 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 · 2 = 2^10"
        },
        {
          "text": "10 tvåor gånger varandra är 2¹⁰."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^512"
          },
          "text": "Du delade 1024 med 2. Men exponenten är antalet tvåor som multipliceras."
        }
      ]
    },
    {
      "id": "aup1-bas-2-a2132566",
      "part": "bas-2",
      "text": "Skriv som potens med bas 2",
      "points": "each",
      "rows": [
        "32 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Dela med 2 tills du kommer till 1, och räkna hur många tvåor det blev."
        },
        {
          "math": "32 = 2 · 2 · 2 · 2 · 2 = 2^5"
        },
        {
          "text": "5 tvåor gånger varandra är 2⁵."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^16"
          },
          "text": "Du delade 32 med 2. Men exponenten är antalet tvåor som multipliceras."
        }
      ]
    },
    {
      "id": "aup1-bas-2-15cebd51",
      "part": "bas-2",
      "text": "Skriv som potens med bas 2",
      "points": "each",
      "rows": [
        "4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Dela med 2 tills du kommer till 1, och räkna hur många tvåor det blev."
        },
        {
          "math": "4 = 2 · 2 = 2^2"
        },
        {
          "text": "2 tvåor gånger varandra är 2²."
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup1-utan-heltal-12526896",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "70000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁴ är 1 följt av 4 nollor: 10 000."
        },
        {
          "math": "7 · 10^4 = 7 · 10 000 = 70 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7000"
          },
          "text": "En nolla för lite: 10⁴ har 4 nollor."
        },
        {
          "answers": {
            "a": "700000"
          },
          "text": "En nolla för mycket: 10⁴ har 4 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-fcb8e05f",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10³ är 1 följt av 3 nollor: 1000."
        },
        {
          "math": "7 · 10^3 = 7 · 1000 = 7000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "700"
          },
          "text": "En nolla för lite: 10³ har 3 nollor."
        },
        {
          "answers": {
            "a": "70000"
          },
          "text": "En nolla för mycket: 10³ har 3 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-014a58e3",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "400"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10² är 1 följt av 2 nollor: 100."
        },
        {
          "math": "4 · 10^2 = 4 · 100 = 400"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "En nolla för lite: 10² har 2 nollor."
        },
        {
          "answers": {
            "a": "4000"
          },
          "text": "En nolla för mycket: 10² har 2 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-891543c1",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "700000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁵ är 1 följt av 5 nollor: 100 000."
        },
        {
          "math": "7 · 10^5 = 7 · 100 000 = 700 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "70000"
          },
          "text": "En nolla för lite: 10⁵ har 5 nollor."
        },
        {
          "answers": {
            "a": "7000000"
          },
          "text": "En nolla för mycket: 10⁵ har 5 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-ada4606f",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁶ är 1 följt av 6 nollor: 1 000 000."
        },
        {
          "math": "4 · 10^6 = 4 · 1 000 000 = 4 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "400000"
          },
          "text": "En nolla för lite: 10⁶ har 6 nollor."
        },
        {
          "answers": {
            "a": "40000000"
          },
          "text": "En nolla för mycket: 10⁶ har 6 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-e950641d",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "70"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10¹ är 1 följt av 1 nolla: 10."
        },
        {
          "math": "7 · 10^1 = 7 · 10 = 70"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7"
          },
          "text": "En nolla för lite: 10¹ har 1 nolla."
        },
        {
          "answers": {
            "a": "700"
          },
          "text": "En nolla för mycket: 10¹ har 1 nolla."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-60707a4d",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "300000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁵ är 1 följt av 5 nollor: 100 000."
        },
        {
          "math": "3 · 10^5 = 3 · 100 000 = 300 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30000"
          },
          "text": "En nolla för lite: 10⁵ har 5 nollor."
        },
        {
          "answers": {
            "a": "3000000"
          },
          "text": "En nolla för mycket: 10⁵ har 5 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-ffe6f717",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "50"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10¹ är 1 följt av 1 nolla: 10."
        },
        {
          "math": "5 · 10^1 = 5 · 10 = 50"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5"
          },
          "text": "En nolla för lite: 10¹ har 1 nolla."
        },
        {
          "answers": {
            "a": "500"
          },
          "text": "En nolla för mycket: 10¹ har 1 nolla."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-8b52face",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁶ är 1 följt av 6 nollor: 1 000 000."
        },
        {
          "math": "5 · 10^6 = 5 · 1 000 000 = 5 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "500000"
          },
          "text": "En nolla för lite: 10⁶ har 6 nollor."
        },
        {
          "answers": {
            "a": "50000000"
          },
          "text": "En nolla för mycket: 10⁶ har 6 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-f29f9161",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁶ är 1 följt av 6 nollor: 1 000 000."
        },
        {
          "math": "6 · 10^6 = 6 · 1 000 000 = 6 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "600000"
          },
          "text": "En nolla för lite: 10⁶ har 6 nollor."
        },
        {
          "answers": {
            "a": "60000000"
          },
          "text": "En nolla för mycket: 10⁶ har 6 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-096a6e0c",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4 · 10^7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "40000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁷ är 1 följt av 7 nollor: 10 000 000."
        },
        {
          "math": "4 · 10^7 = 4 · 10 000 000 = 40 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4000000"
          },
          "text": "En nolla för lite: 10⁷ har 7 nollor."
        },
        {
          "answers": {
            "a": "400000000"
          },
          "text": "En nolla för mycket: 10⁷ har 7 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-8ad92d95",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁷ är 1 följt av 7 nollor: 10 000 000."
        },
        {
          "math": "1 · 10^7 = 1 · 10 000 000 = 10 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1000000"
          },
          "text": "En nolla för lite: 10⁷ har 7 nollor."
        },
        {
          "answers": {
            "a": "100000000"
          },
          "text": "En nolla för mycket: 10⁷ har 7 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-fe888b18",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "50000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁴ är 1 följt av 4 nollor: 10 000."
        },
        {
          "math": "5 · 10^4 = 5 · 10 000 = 50 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5000"
          },
          "text": "En nolla för lite: 10⁴ har 4 nollor."
        },
        {
          "answers": {
            "a": "500000"
          },
          "text": "En nolla för mycket: 10⁴ har 4 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-c3a05281",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10³ är 1 följt av 3 nollor: 1000."
        },
        {
          "math": "9 · 10^3 = 9 · 1000 = 9000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "900"
          },
          "text": "En nolla för lite: 10³ har 3 nollor."
        },
        {
          "answers": {
            "a": "90000"
          },
          "text": "En nolla för mycket: 10³ har 3 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-9dbba98e",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "100"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10² är 1 följt av 2 nollor: 100."
        },
        {
          "math": "1 · 10^2 = 1 · 100 = 100"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "En nolla för lite: 10² har 2 nollor."
        },
        {
          "answers": {
            "a": "1000"
          },
          "text": "En nolla för mycket: 10² har 2 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-4ebbcbb9",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5 · 10^7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "50000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁷ är 1 följt av 7 nollor: 10 000 000."
        },
        {
          "math": "5 · 10^7 = 5 · 10 000 000 = 50 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5000000"
          },
          "text": "En nolla för lite: 10⁷ har 7 nollor."
        },
        {
          "answers": {
            "a": "500000000"
          },
          "text": "En nolla för mycket: 10⁷ har 7 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-ab447ec6",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "800000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁵ är 1 följt av 5 nollor: 100 000."
        },
        {
          "math": "8 · 10^5 = 8 · 100 000 = 800 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "80000"
          },
          "text": "En nolla för lite: 10⁵ har 5 nollor."
        },
        {
          "answers": {
            "a": "8000000"
          },
          "text": "En nolla för mycket: 10⁵ har 5 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-14c87bd7",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "100000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁵ är 1 följt av 5 nollor: 100 000."
        },
        {
          "math": "1 · 10^5 = 1 · 100 000 = 100 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10000"
          },
          "text": "En nolla för lite: 10⁵ har 5 nollor."
        },
        {
          "answers": {
            "a": "1000000"
          },
          "text": "En nolla för mycket: 10⁵ har 5 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-317c5ad3",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "90"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10¹ är 1 följt av 1 nolla: 10."
        },
        {
          "math": "9 · 10^1 = 9 · 10 = 90"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "En nolla för lite: 10¹ har 1 nolla."
        },
        {
          "answers": {
            "a": "900"
          },
          "text": "En nolla för mycket: 10¹ har 1 nolla."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-8f8c2d40",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "20"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10¹ är 1 följt av 1 nolla: 10."
        },
        {
          "math": "2 · 10^1 = 2 · 10 = 20"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "En nolla för lite: 10¹ har 1 nolla."
        },
        {
          "answers": {
            "a": "200"
          },
          "text": "En nolla för mycket: 10¹ har 1 nolla."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-08c37b6e",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "300000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁸ är 1 följt av 8 nollor: 100 000 000."
        },
        {
          "math": "3 · 10^8 = 3 · 100 000 000 = 300 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30000000"
          },
          "text": "En nolla för lite: 10⁸ har 8 nollor."
        },
        {
          "answers": {
            "a": "3000000000"
          },
          "text": "En nolla för mycket: 10⁸ har 8 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-690c450b",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10¹ är 1 följt av 1 nolla: 10."
        },
        {
          "math": "1 · 10^1 = 1 · 10 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "En nolla för lite: 10¹ har 1 nolla."
        },
        {
          "answers": {
            "a": "100"
          },
          "text": "En nolla för mycket: 10¹ har 1 nolla."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-4b5beeac",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10³ är 1 följt av 3 nollor: 1000."
        },
        {
          "math": "8 · 10^3 = 8 · 1000 = 8000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "800"
          },
          "text": "En nolla för lite: 10³ har 3 nollor."
        },
        {
          "answers": {
            "a": "80000"
          },
          "text": "En nolla för mycket: 10³ har 3 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-5dc7e048",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9 · 10^8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "900000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁸ är 1 följt av 8 nollor: 100 000 000."
        },
        {
          "math": "9 · 10^8 = 9 · 100 000 000 = 900 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "90000000"
          },
          "text": "En nolla för lite: 10⁸ har 8 nollor."
        },
        {
          "answers": {
            "a": "9000000000"
          },
          "text": "En nolla för mycket: 10⁸ har 8 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-52cb672c",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁶ är 1 följt av 6 nollor: 1 000 000."
        },
        {
          "math": "3 · 10^6 = 3 · 1 000 000 = 3 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "300000"
          },
          "text": "En nolla för lite: 10⁶ har 6 nollor."
        },
        {
          "answers": {
            "a": "30000000"
          },
          "text": "En nolla för mycket: 10⁶ har 6 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-302b2b5a",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁶ är 1 följt av 6 nollor: 1 000 000."
        },
        {
          "math": "1 · 10^6 = 1 · 1 000 000 = 1 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "100000"
          },
          "text": "En nolla för lite: 10⁶ har 6 nollor."
        },
        {
          "answers": {
            "a": "10000000"
          },
          "text": "En nolla för mycket: 10⁶ har 6 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-3e05c103",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10³ är 1 följt av 3 nollor: 1000."
        },
        {
          "math": "3 · 10^3 = 3 · 1000 = 3000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "300"
          },
          "text": "En nolla för lite: 10³ har 3 nollor."
        },
        {
          "answers": {
            "a": "30000"
          },
          "text": "En nolla för mycket: 10³ har 3 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-91bec6d5",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10³ är 1 följt av 3 nollor: 1000."
        },
        {
          "math": "5 · 10^3 = 5 · 1000 = 5000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "500"
          },
          "text": "En nolla för lite: 10³ har 3 nollor."
        },
        {
          "answers": {
            "a": "50000"
          },
          "text": "En nolla för mycket: 10³ har 3 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-62326cb0",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "100000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁸ är 1 följt av 8 nollor: 100 000 000."
        },
        {
          "math": "1 · 10^8 = 1 · 100 000 000 = 100 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10000000"
          },
          "text": "En nolla för lite: 10⁸ har 8 nollor."
        },
        {
          "answers": {
            "a": "1000000000"
          },
          "text": "En nolla för mycket: 10⁸ har 8 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-38c4b331",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "80000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁴ är 1 följt av 4 nollor: 10 000."
        },
        {
          "math": "8 · 10^4 = 8 · 10 000 = 80 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8000"
          },
          "text": "En nolla för lite: 10⁴ har 4 nollor."
        },
        {
          "answers": {
            "a": "800000"
          },
          "text": "En nolla för mycket: 10⁴ har 4 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-b12cbef4",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁴ är 1 följt av 4 nollor: 10 000."
        },
        {
          "math": "1 · 10^4 = 1 · 10 000 = 10 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1000"
          },
          "text": "En nolla för lite: 10⁴ har 4 nollor."
        },
        {
          "answers": {
            "a": "100000"
          },
          "text": "En nolla för mycket: 10⁴ har 4 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-d267a452",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁴ är 1 följt av 4 nollor: 10 000."
        },
        {
          "math": "3 · 10^4 = 3 · 10 000 = 30 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3000"
          },
          "text": "En nolla för lite: 10⁴ har 4 nollor."
        },
        {
          "answers": {
            "a": "300000"
          },
          "text": "En nolla för mycket: 10⁴ har 4 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-ed54a93c",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "700"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10² är 1 följt av 2 nollor: 100."
        },
        {
          "math": "7 · 10^2 = 7 · 100 = 700"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "70"
          },
          "text": "En nolla för lite: 10² har 2 nollor."
        },
        {
          "answers": {
            "a": "7000"
          },
          "text": "En nolla för mycket: 10² har 2 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-4c4c6380",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "600000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁵ är 1 följt av 5 nollor: 100 000."
        },
        {
          "math": "6 · 10^5 = 6 · 100 000 = 600 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60000"
          },
          "text": "En nolla för lite: 10⁵ har 5 nollor."
        },
        {
          "answers": {
            "a": "6000000"
          },
          "text": "En nolla för mycket: 10⁵ har 5 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-05872f60",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁶ är 1 följt av 6 nollor: 1 000 000."
        },
        {
          "math": "7 · 10^6 = 7 · 1 000 000 = 7 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "700000"
          },
          "text": "En nolla för lite: 10⁶ har 6 nollor."
        },
        {
          "answers": {
            "a": "70000000"
          },
          "text": "En nolla för mycket: 10⁶ har 6 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-8906ab32",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "400000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁵ är 1 följt av 5 nollor: 100 000."
        },
        {
          "math": "4 · 10^5 = 4 · 100 000 = 400 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40000"
          },
          "text": "En nolla för lite: 10⁵ har 5 nollor."
        },
        {
          "answers": {
            "a": "4000000"
          },
          "text": "En nolla för mycket: 10⁵ har 5 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-93ad95f0",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10³ är 1 följt av 3 nollor: 1000."
        },
        {
          "math": "4 · 10^3 = 4 · 1000 = 4000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "400"
          },
          "text": "En nolla för lite: 10³ har 3 nollor."
        },
        {
          "answers": {
            "a": "40000"
          },
          "text": "En nolla för mycket: 10³ har 3 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-40342bb1",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10¹ är 1 följt av 1 nolla: 10."
        },
        {
          "math": "3 · 10^1 = 3 · 10 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "En nolla för lite: 10¹ har 1 nolla."
        },
        {
          "answers": {
            "a": "300"
          },
          "text": "En nolla för mycket: 10¹ har 1 nolla."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-6687bd10",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "300"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10² är 1 följt av 2 nollor: 100."
        },
        {
          "math": "3 · 10^2 = 3 · 100 = 300"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "En nolla för lite: 10² har 2 nollor."
        },
        {
          "answers": {
            "a": "3000"
          },
          "text": "En nolla för mycket: 10² har 2 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-heltal-5665a0db",
      "part": "utan-heltal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2 · 10^8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "200000000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁸ är 1 följt av 8 nollor: 100 000 000."
        },
        {
          "math": "2 · 10^8 = 2 · 100 000 000 = 200 000 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "20000000"
          },
          "text": "En nolla för lite: 10⁸ har 8 nollor."
        },
        {
          "answers": {
            "a": "2000000000"
          },
          "text": "En nolla för mycket: 10⁸ har 8 nollor."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-5a647a14",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,041 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9041"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "9,041 · 10^3 = 9,041 · 1000 = 9041"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "904,1"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "90410"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-cc0244f1",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,41 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2410"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "2,41 · 10^3 = 2,41 · 1000 = 2410"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "241"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "24100"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-b2777f45",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1,9 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "19000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁴ flyttar decimaltecknet 4 steg åt höger."
        },
        {
          "math": "1,9 · 10^4 = 1,9 · 10 000 = 19 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1900"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        },
        {
          "answers": {
            "a": "190000"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-c242f8d8",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,6 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "960"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10² flyttar decimaltecknet 2 steg åt höger."
        },
        {
          "math": "9,6 · 10^2 = 9,6 · 100 = 960"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "96"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        },
        {
          "answers": {
            "a": "9600"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-0b4ff0db",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,67 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "267000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "2,67 · 10^5 = 2,67 · 100 000 = 267 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "26700"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "2670000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-8b915145",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,3 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "930"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10² flyttar decimaltecknet 2 steg åt höger."
        },
        {
          "math": "9,3 · 10^2 = 9,3 · 100 = 930"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "93"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        },
        {
          "answers": {
            "a": "9300"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-dd31a6d0",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,399 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "739900"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "7,399 · 10^5 = 7,399 · 100 000 = 739 900"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "73990"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "7399000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-b1457ee4",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,3 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "93"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10¹ flyttar decimaltecknet 1 steg åt höger."
        },
        {
          "math": "9,3 · 10^1 = 9,3 · 10 = 93"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,3"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        },
        {
          "answers": {
            "a": "930"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-05b9c3d3",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,26 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "926000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "9,26 · 10^5 = 9,26 · 100 000 = 926 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "92600"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "9260000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-a6317b44",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,1 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "710000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "7,1 · 10^5 = 7,1 · 100 000 = 710 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "71000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "7100000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-7819c7ab",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,96 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "296000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "2,96 · 10^5 = 2,96 · 100 000 = 296 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "29600"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "2960000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-d273336d",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4,061 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "40,61"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10¹ flyttar decimaltecknet 1 steg åt höger."
        },
        {
          "math": "4,061 · 10^1 = 4,061 · 10 = 40,61"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,061"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        },
        {
          "answers": {
            "a": "406,1"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-5aef86f6",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,265 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "22650"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁴ flyttar decimaltecknet 4 steg åt höger."
        },
        {
          "math": "2,265 · 10^4 = 2,265 · 10 000 = 22 650"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2265"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        },
        {
          "answers": {
            "a": "226500"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-ce8f7f89",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8,027 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8027"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "8,027 · 10^3 = 8,027 · 1000 = 8027"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "802,7"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "80270"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-bbfb0354",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,04 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2040"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "2,04 · 10^3 = 2,04 · 1000 = 2040"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "204"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "20400"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-883870b3",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,581 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "95,81"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10¹ flyttar decimaltecknet 1 steg åt höger."
        },
        {
          "math": "9,581 · 10^1 = 9,581 · 10 = 95,81"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,581"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        },
        {
          "answers": {
            "a": "958,1"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-08869b2c",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6,958 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6958"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "6,958 · 10^3 = 6,958 · 1000 = 6958"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "695,8"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "69580"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-1a3f98d1",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,85 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2850"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "2,85 · 10^3 = 2,85 · 1000 = 2850"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "285"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "28500"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-781c005e",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,95 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7950000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁶ flyttar decimaltecknet 6 steg åt höger."
        },
        {
          "math": "7,95 · 10^6 = 7,95 · 1 000 000 = 7 950 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "795000"
          },
          "text": "Decimaltecknet ska flyttas 6 steg, ett steg för varje nolla i 10⁶."
        },
        {
          "answers": {
            "a": "79500000"
          },
          "text": "Decimaltecknet ska flyttas 6 steg, ett steg för varje nolla i 10⁶."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-3387bdef",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8,86 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "886"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10² flyttar decimaltecknet 2 steg åt höger."
        },
        {
          "math": "8,86 · 10^2 = 8,86 · 100 = 886"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "88,6"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        },
        {
          "answers": {
            "a": "8860"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-818de518",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5,05 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5050"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "5,05 · 10^3 = 5,05 · 1000 = 5050"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "505"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "50500"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-9cc825a4",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1,37 · 10^6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1370000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁶ flyttar decimaltecknet 6 steg åt höger."
        },
        {
          "math": "1,37 · 10^6 = 1,37 · 1 000 000 = 1 370 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "137000"
          },
          "text": "Decimaltecknet ska flyttas 6 steg, ett steg för varje nolla i 10⁶."
        },
        {
          "answers": {
            "a": "13700000"
          },
          "text": "Decimaltecknet ska flyttas 6 steg, ett steg för varje nolla i 10⁶."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-1ebb5c7e",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,021 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "70,21"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10¹ flyttar decimaltecknet 1 steg åt höger."
        },
        {
          "math": "7,021 · 10^1 = 7,021 · 10 = 70,21"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,021"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        },
        {
          "answers": {
            "a": "702,1"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-c2c39f0d",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6,834 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "683400"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "6,834 · 10^5 = 6,834 · 100 000 = 683 400"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "68340"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "6834000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-239a1f73",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,2 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "72"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10¹ flyttar decimaltecknet 1 steg åt höger."
        },
        {
          "math": "7,2 · 10^1 = 7,2 · 10 = 72"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,2"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        },
        {
          "answers": {
            "a": "720"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-6f11f04c",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3,63 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "363000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "3,63 · 10^5 = 3,63 · 100 000 = 363 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36300"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "3630000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-e4f380e5",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,2 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "22000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁴ flyttar decimaltecknet 4 steg åt höger."
        },
        {
          "math": "2,2 · 10^4 = 2,2 · 10 000 = 22 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2200"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        },
        {
          "answers": {
            "a": "220000"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-4c6bedd9",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,926 · 10^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "292600"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁵ flyttar decimaltecknet 5 steg åt höger."
        },
        {
          "math": "2,926 · 10^5 = 2,926 · 100 000 = 292 600"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "29260"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        },
        {
          "answers": {
            "a": "2926000"
          },
          "text": "Decimaltecknet ska flyttas 5 steg, ett steg för varje nolla i 10⁵."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-0cdc5206",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4,1 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "410"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10² flyttar decimaltecknet 2 steg åt höger."
        },
        {
          "math": "4,1 · 10^2 = 4,1 · 100 = 410"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "41"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        },
        {
          "answers": {
            "a": "4100"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-f6009337",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,82 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "78,2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10¹ flyttar decimaltecknet 1 steg åt höger."
        },
        {
          "math": "7,82 · 10^1 = 7,82 · 10 = 78,2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,82"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        },
        {
          "answers": {
            "a": "782"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-06caa065",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8,8 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "88000"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁴ flyttar decimaltecknet 4 steg åt höger."
        },
        {
          "math": "8,8 · 10^4 = 8,8 · 10 000 = 88 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8800"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        },
        {
          "answers": {
            "a": "880000"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-74c8760d",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,88 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9880"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "9,88 · 10^3 = 9,88 · 1000 = 9880"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "988"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "98800"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-1e379d7c",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6,2 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6200"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "6,2 · 10^3 = 6,2 · 1000 = 6200"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "620"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "62000"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-3c8b7248",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1,37 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "137"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10² flyttar decimaltecknet 2 steg åt höger."
        },
        {
          "math": "1,37 · 10^2 = 1,37 · 100 = 137"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13,7"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        },
        {
          "answers": {
            "a": "1370"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-96ea88b2",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6,365 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6365"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "6,365 · 10^3 = 6,365 · 1000 = 6365"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "636,5"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "63650"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-12428c7e",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1,29 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1290"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10³ flyttar decimaltecknet 3 steg åt höger."
        },
        {
          "math": "1,29 · 10^3 = 1,29 · 1000 = 1290"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "129"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        },
        {
          "answers": {
            "a": "12900"
          },
          "text": "Decimaltecknet ska flyttas 3 steg, ett steg för varje nolla i 10³."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-412cde3a",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,25 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "22500"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁴ flyttar decimaltecknet 4 steg åt höger."
        },
        {
          "math": "2,25 · 10^4 = 2,25 · 10 000 = 22 500"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2250"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        },
        {
          "answers": {
            "a": "225000"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-d1d71ef8",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3,99 · 10^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "39900"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10⁴ flyttar decimaltecknet 4 steg åt höger."
        },
        {
          "math": "3,99 · 10^4 = 3,99 · 10 000 = 39 900"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3990"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        },
        {
          "answers": {
            "a": "399000"
          },
          "text": "Decimaltecknet ska flyttas 4 steg, ett steg för varje nolla i 10⁴."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-257e1560",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,9 · 10^1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "79"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10¹ flyttar decimaltecknet 1 steg åt höger."
        },
        {
          "math": "7,9 · 10^1 = 7,9 · 10 = 79"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,9"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        },
        {
          "answers": {
            "a": "790"
          },
          "text": "Decimaltecknet ska flyttas 1 steg, ett steg för varje nolla i 10¹."
        }
      ]
    },
    {
      "id": "aup1-utan-decimal-1076766b",
      "part": "utan-decimal",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3,3 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "330"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Gånger 10² flyttar decimaltecknet 2 steg åt höger."
        },
        {
          "math": "3,3 · 10^2 = 3,3 · 100 = 330"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "33"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        },
        {
          "answers": {
            "a": "3300"
          },
          "text": "Decimaltecknet ska flyttas 2 steg, ett steg för varje nolla i 10²."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-2c8b8de3",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "9 500 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9,5·10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "9 500 000 = 9,5 · 1 000 000 = 9,5 · 10^6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg, så exponenten är 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,5·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 9,5 till 9 500 000."
        },
        {
          "answers": {
            "a": "9,5·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 9,5 till 9 500 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-30465c7c",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "37 900 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,79·10^4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "37 900 = 3,79 · 10 000 = 3,79 · 10^4"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg, så exponenten är 4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,79·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 3,79 till 37 900."
        },
        {
          "answers": {
            "a": "3,79·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 3,79 till 37 900."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-ea103959",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "48 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,8·10^4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "48 000 = 4,8 · 10 000 = 4,8 · 10^4"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg, så exponenten är 4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,8·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 4,8 till 48 000."
        },
        {
          "answers": {
            "a": "4,8·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 4,8 till 48 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-31c36c8c",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "70 000 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7·10^7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "70 000 000 = 7 · 10 000 000 = 7 · 10^7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg, så exponenten är 7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 7 till 70 000 000."
        },
        {
          "answers": {
            "a": "7·10^8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 7 till 70 000 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-b1aca3b6",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "5000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "5000 = 5 · 1000 = 5 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5 till 5000."
        },
        {
          "answers": {
            "a": "5·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5 till 5000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-0049bb93",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "6 800 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,8·10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "6 800 000 = 6,8 · 1 000 000 = 6,8 · 10^6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg, så exponenten är 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,8·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 6,8 till 6 800 000."
        },
        {
          "answers": {
            "a": "6,8·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 6,8 till 6 800 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-29d5f645",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "9 380 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9,38·10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "9 380 000 = 9,38 · 1 000 000 = 9,38 · 10^6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg, så exponenten är 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,38·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 9,38 till 9 380 000."
        },
        {
          "answers": {
            "a": "9,38·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 9,38 till 9 380 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-4c68a8ad",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "730 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7,3·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "730 000 = 7,3 · 100 000 = 7,3 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,3·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 7,3 till 730 000."
        },
        {
          "answers": {
            "a": "7,3·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 7,3 till 730 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-df7849c2",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "298 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,98·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "298 000 = 2,98 · 100 000 = 2,98 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,98·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 2,98 till 298 000."
        },
        {
          "answers": {
            "a": "2,98·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 2,98 till 298 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-95d13457",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "903 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9,03·10^2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "903 = 9,03 · 100 = 9,03 · 10^2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg, så exponenten är 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,03·10^1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 9,03 till 903."
        },
        {
          "answers": {
            "a": "9,03·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 9,03 till 903."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-30c0bd9e",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "32 800 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,28·10^7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "32 800 000 = 3,28 · 10 000 000 = 3,28 · 10^7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg, så exponenten är 7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,28·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 3,28 till 32 800 000."
        },
        {
          "answers": {
            "a": "3,28·10^8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 3,28 till 32 800 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-8ef0838d",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "1690 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,69·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "1690 = 1,69 · 1000 = 1,69 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,69·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 1,69 till 1690."
        },
        {
          "answers": {
            "a": "1,69·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 1,69 till 1690."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-69f8fcda",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "90 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9·10^4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "90 000 = 9 · 10 000 = 9 · 10^4"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg, så exponenten är 4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 9 till 90 000."
        },
        {
          "answers": {
            "a": "9·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 9 till 90 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-f5e15d09",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "141 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,41·10^2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "141 = 1,41 · 100 = 1,41 · 10^2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg, så exponenten är 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,41·10^1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 1,41 till 141."
        },
        {
          "answers": {
            "a": "1,41·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 1,41 till 141."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-596469b5",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "112 000 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,12·10^8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "112 000 000 = 1,12 · 100 000 000 = 1,12 · 10^8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg, så exponenten är 8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,12·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg från 1,12 till 112 000 000."
        },
        {
          "answers": {
            "a": "1,12·10^9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg från 1,12 till 112 000 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-b42da1df",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "800 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "800 000 = 8 · 100 000 = 8 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 8 till 800 000."
        },
        {
          "answers": {
            "a": "8·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 8 till 800 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-ef4b200b",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "5300 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5,3·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "5300 = 5,3 · 1000 = 5,3 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5,3·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5,3 till 5300."
        },
        {
          "answers": {
            "a": "5,3·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5,3 till 5300."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-c2e07285",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "790 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7,9·10^2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "790 = 7,9 · 100 = 7,9 · 10^2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg, så exponenten är 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,9·10^1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 7,9 till 790."
        },
        {
          "answers": {
            "a": "7,9·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 7,9 till 790."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-922a7cd3",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "806 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8,06·10^2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "806 = 8,06 · 100 = 8,06 · 10^2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg, så exponenten är 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8,06·10^1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 8,06 till 806."
        },
        {
          "answers": {
            "a": "8,06·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 8,06 till 806."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-0dcc4b39",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "5 300 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5,3·10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "5 300 000 = 5,3 · 1 000 000 = 5,3 · 10^6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg, så exponenten är 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5,3·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 5,3 till 5 300 000."
        },
        {
          "answers": {
            "a": "5,3·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 5,3 till 5 300 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-d5f653f2",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "830 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8,3·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "830 000 = 8,3 · 100 000 = 8,3 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8,3·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 8,3 till 830 000."
        },
        {
          "answers": {
            "a": "8,3·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 8,3 till 830 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-9a0d3386",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "5 000 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5·10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "5 000 000 = 5 · 1 000 000 = 5 · 10^6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg, så exponenten är 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 5 till 5 000 000."
        },
        {
          "answers": {
            "a": "5·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 5 till 5 000 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-01c6f2bc",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "920 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9,2·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "920 000 = 9,2 · 100 000 = 9,2 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,2·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 9,2 till 920 000."
        },
        {
          "answers": {
            "a": "9,2·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 9,2 till 920 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-53ce5864",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "160 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,6·10^2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "160 = 1,6 · 100 = 1,6 · 10^2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg, så exponenten är 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,6·10^1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 1,6 till 160."
        },
        {
          "answers": {
            "a": "1,6·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg från 1,6 till 160."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-420dbd00",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "41 000 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,1·10^7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "41 000 000 = 4,1 · 10 000 000 = 4,1 · 10^7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg, så exponenten är 7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,1·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 4,1 till 41 000 000."
        },
        {
          "answers": {
            "a": "4,1·10^8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 4,1 till 41 000 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-b3caabe2",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "1800 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,8·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "1800 = 1,8 · 1000 = 1,8 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,8·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 1,8 till 1800."
        },
        {
          "answers": {
            "a": "1,8·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 1,8 till 1800."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-e197e28b",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "330 000 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,3·10^8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "330 000 000 = 3,3 · 100 000 000 = 3,3 · 10^8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg, så exponenten är 8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,3·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg från 3,3 till 330 000 000."
        },
        {
          "answers": {
            "a": "3,3·10^9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg från 3,3 till 330 000 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-bf02fbf0",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "4250 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,25·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "4250 = 4,25 · 1000 = 4,25 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,25·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 4,25 till 4250."
        },
        {
          "answers": {
            "a": "4,25·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 4,25 till 4250."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-98b96e53",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "400 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "400 000 = 4 · 100 000 = 4 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 4 till 400 000."
        },
        {
          "answers": {
            "a": "4·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 4 till 400 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-9e53a6a8",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "4900 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,9·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "4900 = 4,9 · 1000 = 4,9 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,9·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 4,9 till 4900."
        },
        {
          "answers": {
            "a": "4,9·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 4,9 till 4900."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-2f2dd10c",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "300 000 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3·10^8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "300 000 000 = 3 · 100 000 000 = 3 · 10^8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg, så exponenten är 8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg från 3 till 300 000 000."
        },
        {
          "answers": {
            "a": "3·10^9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg från 3 till 300 000 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-cf89e18d",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "3 500 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,5·10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "3 500 000 = 3,5 · 1 000 000 = 3,5 · 10^6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg, så exponenten är 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,5·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 3,5 till 3 500 000."
        },
        {
          "answers": {
            "a": "3,5·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 3,5 till 3 500 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-8b0c430f",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "220 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,2·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "220 000 = 2,2 · 100 000 = 2,2 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,2·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 2,2 till 220 000."
        },
        {
          "answers": {
            "a": "2,2·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 2,2 till 220 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-3d7d581a",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "302 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,02·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "302 000 = 3,02 · 100 000 = 3,02 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,02·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 3,02 till 302 000."
        },
        {
          "answers": {
            "a": "3,02·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 3,02 till 302 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-e42d7e0b",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "40 000 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4·10^7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "40 000 000 = 4 · 10 000 000 = 4 · 10^7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg, så exponenten är 7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 4 till 40 000 000."
        },
        {
          "answers": {
            "a": "4·10^8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg från 4 till 40 000 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-ce87dc46",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "5390 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5,39·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "5390 = 5,39 · 1000 = 5,39 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5,39·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5,39 till 5390."
        },
        {
          "answers": {
            "a": "5,39·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5,39 till 5390."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-58fb2656",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "6 900 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,9·10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "6 900 000 = 6,9 · 1 000 000 = 6,9 · 10^6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg, så exponenten är 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,9·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 6,9 till 6 900 000."
        },
        {
          "answers": {
            "a": "6,9·10^7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg från 6,9 till 6 900 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-13a2387c",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "5020 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5,02·10^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "5020 = 5,02 · 1000 = 5,02 · 10^3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg, så exponenten är 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5,02·10^2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5,02 till 5020."
        },
        {
          "answers": {
            "a": "5,02·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg från 5,02 till 5020."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-3a4c310d",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "200 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2·10^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "200 000 = 2 · 100 000 = 2 · 10^5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg, så exponenten är 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2·10^4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 2 till 200 000."
        },
        {
          "answers": {
            "a": "2·10^6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg från 2 till 200 000."
        }
      ]
    },
    {
      "id": "aup1-grund-stora-d3654301",
      "part": "grund-stora",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "84 000 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8,4·10^4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "84 000 = 8,4 · 10 000 = 8,4 · 10^4"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg, så exponenten är 4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8,4·10^3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 8,4 till 84 000."
        },
        {
          "answers": {
            "a": "8,4·10^5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg från 8,4 till 84 000."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-7fb0b0d7",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5,87 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,587"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "5,87 · 10^-1 = 5,87 · 0,1 = 0,587"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5,87"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0587"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "58,7"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 5,87: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-0d9c61aa",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6,3 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,63"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "6,3 · 10^-1 = 6,3 · 0,1 = 0,63"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,3"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,063"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "63"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 6,3: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-13a81676",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4,7 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0047"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "4,7 · 10^-3 = 4,7 · 0,001 = 0,0047"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,047"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00047"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "4700"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 4,7: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-8a742641",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9,37 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00000937"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "9,37 · 10^-6 = 9,37 · 0,000 001 = 0,000 009 37"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0000937"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000000937"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "9370000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 9,37: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-6467eef7",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8,1 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0000081"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "8,1 · 10^-6 = 8,1 · 0,000 001 = 0,000 008 1"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,000081"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00000081"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "8100000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 8,1: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-3e628081",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,4 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0024"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "2,4 · 10^-3 = 2,4 · 0,001 = 0,0024"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,024"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00024"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "2400"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 2,4: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-6036aeae",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,000006"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "6 · 10^-6 = 6 · 0,000 001 = 0,000 006"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00006"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0000006"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "6000000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 6: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-5ec1fe64",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,000008"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "8 · 10^-6 = 8 · 0,000 001 = 0,000 008"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00008"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0000008"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "8000000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 8: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-e7d4d20e",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,7 · 10^-4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00077"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁴ är 1 delat med 10⁴: 0,0001."
        },
        {
          "math": "7,7 · 10^-4 = 7,7 · 0,0001 = 0,000 77"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0077"
          },
          "text": "Decimaltecknet ska flyttas 4 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000077"
          },
          "text": "Decimaltecknet ska flyttas 4 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "77000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 7,7: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-918cb9fb",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,008"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "8 · 10^-3 = 8 · 0,001 = 0,008"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,08"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0008"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "8000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 8: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-6c7d14a9",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4,46 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,446"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "4,46 · 10^-1 = 4,46 · 0,1 = 0,446"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,46"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0446"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "44,6"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 4,46: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-21280021",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,000003"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "3 · 10^-6 = 3 · 0,000 001 = 0,000 003"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00003"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0000003"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "3000000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 3: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-d51335e6",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4 · 10^-4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0004"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁴ är 1 delat med 10⁴: 0,0001."
        },
        {
          "math": "4 · 10^-4 = 4 · 0,0001 = 0,0004"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,004"
          },
          "text": "Decimaltecknet ska flyttas 4 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00004"
          },
          "text": "Decimaltecknet ska flyttas 4 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "40000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 4: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-1eca671e",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,7 · 10^-5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,000027"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁵ är 1 delat med 10⁵: 0,000 01."
        },
        {
          "math": "2,7 · 10^-5 = 2,7 · 0,000 01 = 0,000 027"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00027"
          },
          "text": "Decimaltecknet ska flyttas 5 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0000027"
          },
          "text": "Decimaltecknet ska flyttas 5 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "270000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 2,7: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-390dd0c5",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8 · 10^-5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00008"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁵ är 1 delat med 10⁵: 0,000 01."
        },
        {
          "math": "8 · 10^-5 = 8 · 0,000 01 = 0,000 08"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0008"
          },
          "text": "Decimaltecknet ska flyttas 5 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000008"
          },
          "text": "Decimaltecknet ska flyttas 5 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "800000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 8: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-d245487c",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4,9 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0049"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "4,9 · 10^-3 = 4,9 · 0,001 = 0,0049"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,049"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00049"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "4900"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 4,9: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-cdf10c63",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6,08 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00608"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "6,08 · 10^-3 = 6,08 · 0,001 = 0,006 08"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0608"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000608"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "6080"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 6,08: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-31577fce",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3,9 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0000039"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "3,9 · 10^-6 = 3,9 · 0,000 001 = 0,000 003 9"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,000039"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00000039"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "3900000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 3,9: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-4a9d2677",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "6 · 10^-1 = 6 · 0,1 = 0,6"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,06"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "60"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 6: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-70d2b59e",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,007"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "7 · 10^-3 = 7 · 0,001 = 0,007"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,07"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0007"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "7000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 7: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-e53a2908",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8 · 10^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,08"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻² är 1 delat med 10²: 0,01."
        },
        {
          "math": "8 · 10^-2 = 8 · 0,01 = 0,08"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,8"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,008"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "800"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 8: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-4b4f8add",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,83 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00000283"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "2,83 · 10^-6 = 2,83 · 0,000 001 = 0,000 002 83"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0000283"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000000283"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "2830000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 2,83: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-66656ed0",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3,55 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00355"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "3,55 · 10^-3 = 3,55 · 0,001 = 0,003 55"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0355"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000355"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "3550"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 3,55: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-1c39fb05",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "8,46 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,846"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "8,46 · 10^-1 = 8,46 · 0,1 = 0,846"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8,46"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0846"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "84,6"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 8,46: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-cdc56b04",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1,41 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00000141"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "1,41 · 10^-6 = 1,41 · 0,000 001 = 0,000 001 41"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0000141"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000000141"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "1410000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 1,41: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-bbc3cdf0",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5,91 · 10^-5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0000591"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁵ är 1 delat med 10⁵: 0,000 01."
        },
        {
          "math": "5,91 · 10^-5 = 5,91 · 0,000 01 = 0,000 059 1"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,000591"
          },
          "text": "Decimaltecknet ska flyttas 5 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00000591"
          },
          "text": "Decimaltecknet ska flyttas 5 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "591000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 5,91: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-61bcc9e5",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7 · 10^-6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,000007"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻⁶ är 1 delat med 10⁶: 0,000 001."
        },
        {
          "math": "7 · 10^-6 = 7 · 0,000 001 = 0,000 007"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00007"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0000007"
          },
          "text": "Decimaltecknet ska flyttas 6 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "7000000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 7: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-dd13b69a",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "3,9 · 10^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,039"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻² är 1 delat med 10²: 0,01."
        },
        {
          "math": "3,9 · 10^-2 = 3,9 · 0,01 = 0,039"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,39"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0039"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "390"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 3,9: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-b117bb9b",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "7,56 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,756"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "7,56 · 10^-1 = 7,56 · 0,1 = 0,756"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,56"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0756"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "75,6"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 7,56: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-da04910f",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,01"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻² är 1 delat med 10²: 0,01."
        },
        {
          "math": "1 · 10^-2 = 1 · 0,01 = 0,01"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,1"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,001"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "100"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 1: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-3b29645e",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2 · 10^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,02"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻² är 1 delat med 10²: 0,01."
        },
        {
          "math": "2 · 10^-2 = 2 · 0,01 = 0,02"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,2"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,002"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "200"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 2: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-97df1ac3",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "5,04 · 10^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,0504"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻² är 1 delat med 10²: 0,01."
        },
        {
          "math": "5,04 · 10^-2 = 5,04 · 0,01 = 0,0504"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,504"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,00504"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "504"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 5,04: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-43b9f4af",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "4,26 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,426"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "4,26 · 10^-1 = 4,26 · 0,1 = 0,426"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,26"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0426"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "42,6"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 4,26: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-52c105e3",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1,94 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,194"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "1,94 · 10^-1 = 1,94 · 0,1 = 0,194"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,94"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0194"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "19,4"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 1,94: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-7f4c8afa",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "6 · 10^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,06"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻² är 1 delat med 10²: 0,01."
        },
        {
          "math": "6 · 10^-2 = 6 · 0,01 = 0,06"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,6"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,006"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "600"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 6: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-6c4b6c81",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,1 · 10^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,021"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻² är 1 delat med 10²: 0,01."
        },
        {
          "math": "2,1 · 10^-2 = 2,1 · 0,01 = 0,021"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,21"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0021"
          },
          "text": "Decimaltecknet ska flyttas 2 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "210"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 2,1: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-512d3052",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,1"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "1 · 10^-1 = 1 · 0,1 = 0,1"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,01"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "10"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 1: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-6699f258",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "2,9 · 10^-1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,29"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻¹ är 1 delat med 10¹: 0,1."
        },
        {
          "math": "2,9 · 10^-1 = 2,9 · 0,1 = 0,29"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,9"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,029"
          },
          "text": "Decimaltecknet ska flyttas 1 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "29"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 2,9: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-1cb95094",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "9 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,009"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "9 · 10^-3 = 9 · 0,001 = 0,009"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,09"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,0009"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "9000"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 9: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-utan-negativ-4be00468",
      "part": "utan-negativ",
      "text": "Skriv utan potenser",
      "points": "each",
      "rows": [
        "1,75 · 10^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,00175"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10⁻³ är 1 delat med 10³: 0,001."
        },
        {
          "math": "1,75 · 10^-3 = 1,75 · 0,001 = 0,001 75"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt vänster."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0175"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "0,000175"
          },
          "text": "Decimaltecknet ska flyttas 3 steg åt vänster, ett steg för varje tiopotens."
        },
        {
          "answers": {
            "a": "1750"
          },
          "text": "Exponenten är negativ, så talet blir mindre än 1,75: flytta decimaltecknet åt vänster."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-b50cf406",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,089 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8,9·10^-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,089 = 8,9 · 0,01 = 8,9 · 10^-2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt höger för att komma till 8,9, så exponenten är −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8,9·10^2"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "8,9·10^-1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        },
        {
          "answers": {
            "a": "8,9·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-90223428",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3·10^-1"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,3 = 3 · 0,1 = 3 · 10^-1"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt höger för att komma till 3, så exponenten är −1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3·10^1"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "3·10^-2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 1 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-81b4d503",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,0462 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,62·10^-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,0462 = 4,62 · 0,01 = 4,62 · 10^-2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt höger för att komma till 4,62, så exponenten är −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,62·10^2"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "4,62·10^-1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        },
        {
          "answers": {
            "a": "4,62·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-1e6a2f84",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 061 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,1·10^-8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 061 = 6,1 · 0,000 000 01 = 6,1 · 10^-8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg åt höger för att komma till 6,1, så exponenten är −8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,1·10^8"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "6,1·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        },
        {
          "answers": {
            "a": "6,1·10^-9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-355c8dea",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 25 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,5·10^-7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 25 = 2,5 · 0,000 000 1 = 2,5 · 10^-7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg åt höger för att komma till 2,5, så exponenten är −7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,5·10^7"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "2,5·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        },
        {
          "answers": {
            "a": "2,5·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-221d25f8",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 03 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3·10^-5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 03 = 3 · 0,000 01 = 3 · 10^-5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg åt höger för att komma till 3, så exponenten är −5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3·10^5"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "3·10^-4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        },
        {
          "answers": {
            "a": "3·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-039b9c5b",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 008 8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8,8·10^-9"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 008 8 = 8,8 · 0,000 000 001 = 8,8 · 10^-9"
        },
        {
          "text": "Decimaltecknet flyttas 9 steg åt höger för att komma till 8,8, så exponenten är −9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8,8·10^9"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "8,8·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        },
        {
          "answers": {
            "a": "8,8·10^-10"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-16e0c108",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 09 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9·10^-8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 09 = 9 · 0,000 000 01 = 9 · 10^-8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg åt höger för att komma till 9, så exponenten är −8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9·10^8"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "9·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        },
        {
          "answers": {
            "a": "9·10^-9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-be0ca74a",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 007 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7·10^-6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 007 = 7 · 0,000 001 = 7 · 10^-6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt höger för att komma till 7, så exponenten är −6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7·10^6"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "7·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        },
        {
          "answers": {
            "a": "7·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-6f3b40e5",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 062 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,2·10^-8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 062 = 6,2 · 0,000 000 01 = 6,2 · 10^-8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg åt höger för att komma till 6,2, så exponenten är −8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,2·10^8"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "6,2·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        },
        {
          "answers": {
            "a": "6,2·10^-9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-1e8524f9",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,031 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,1·10^-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,031 = 3,1 · 0,01 = 3,1 · 10^-2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt höger för att komma till 3,1, så exponenten är −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,1·10^2"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "3,1·10^-1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        },
        {
          "answers": {
            "a": "3,1·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-e3f5dbe5",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4·10^-1"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,4 = 4 · 0,1 = 4 · 10^-1"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt höger för att komma till 4, så exponenten är −1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4·10^1"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "4·10^-2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 1 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-c4a5d8f5",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,06 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6·10^-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,06 = 6 · 0,01 = 6 · 10^-2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt höger för att komma till 6, så exponenten är −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6·10^2"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "6·10^-1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        },
        {
          "answers": {
            "a": "6·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-721ba2c2",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 008 7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8,7·10^-9"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 008 7 = 8,7 · 0,000 000 001 = 8,7 · 10^-9"
        },
        {
          "text": "Decimaltecknet flyttas 9 steg åt höger för att komma till 8,7, så exponenten är −9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8,7·10^9"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "8,7·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        },
        {
          "answers": {
            "a": "8,7·10^-10"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-2566e3e1",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8·10^-1"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,8 = 8 · 0,1 = 8 · 10^-1"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt höger för att komma till 8, så exponenten är −1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8·10^1"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "8·10^-2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 1 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-084f7edc",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 744 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7,44·10^-7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 744 = 7,44 · 0,000 000 1 = 7,44 · 10^-7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg åt höger för att komma till 7,44, så exponenten är −7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,44·10^7"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "7,44·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        },
        {
          "answers": {
            "a": "7,44·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-249d3727",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 093 6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9,36·10^-5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 093 6 = 9,36 · 0,000 01 = 9,36 · 10^-5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg åt höger för att komma till 9,36, så exponenten är −5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9,36·10^5"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "9,36·10^-4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        },
        {
          "answers": {
            "a": "9,36·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-569e6f39",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,003 69 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,69·10^-3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,003 69 = 3,69 · 0,001 = 3,69 · 10^-3"
        },
        {
          "text": "Decimaltecknet flyttas 3 steg åt höger för att komma till 3,69, så exponenten är −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,69·10^3"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "3,69·10^-2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg."
        },
        {
          "answers": {
            "a": "3,69·10^-4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 3 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-6d307909",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 006 4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,4·10^-9"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 006 4 = 6,4 · 0,000 000 001 = 6,4 · 10^-9"
        },
        {
          "text": "Decimaltecknet flyttas 9 steg åt höger för att komma till 6,4, så exponenten är −9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,4·10^9"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "6,4·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        },
        {
          "answers": {
            "a": "6,4·10^-10"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-e32b60af",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 006 51 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,51·10^-6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 006 51 = 6,51 · 0,000 001 = 6,51 · 10^-6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt höger för att komma till 6,51, så exponenten är −6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,51·10^6"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "6,51·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        },
        {
          "answers": {
            "a": "6,51·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-632be2f1",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 08 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8·10^-5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 08 = 8 · 0,000 01 = 8 · 10^-5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg åt höger för att komma till 8, så exponenten är −5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8·10^5"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "8·10^-4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        },
        {
          "answers": {
            "a": "8·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-f36f71ba",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,07 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7·10^-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,07 = 7 · 0,01 = 7 · 10^-2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt höger för att komma till 7, så exponenten är −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7·10^2"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "7·10^-1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        },
        {
          "answers": {
            "a": "7·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-8bedebda",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,041 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,1·10^-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,041 = 4,1 · 0,01 = 4,1 · 10^-2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt höger för att komma till 4,1, så exponenten är −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,1·10^2"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "4,1·10^-1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        },
        {
          "answers": {
            "a": "4,1·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-1c05e335",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 04 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4·10^-5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 04 = 4 · 0,000 01 = 4 · 10^-5"
        },
        {
          "text": "Decimaltecknet flyttas 5 steg åt höger för att komma till 4, så exponenten är −5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4·10^5"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "4·10^-4"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        },
        {
          "answers": {
            "a": "4·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 5 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-f8731164",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 007 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7·10^-9"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 007 = 7 · 0,000 000 001 = 7 · 10^-9"
        },
        {
          "text": "Decimaltecknet flyttas 9 steg åt höger för att komma till 7, så exponenten är −9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7·10^9"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "7·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        },
        {
          "answers": {
            "a": "7·10^-10"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 9 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-c157990e",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 54 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5,4·10^-7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 54 = 5,4 · 0,000 000 1 = 5,4 · 10^-7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg åt höger för att komma till 5,4, så exponenten är −7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5,4·10^7"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "5,4·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        },
        {
          "answers": {
            "a": "5,4·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-ff4ce204",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 476 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,76·10^-7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 476 = 4,76 · 0,000 000 1 = 4,76 · 10^-7"
        },
        {
          "text": "Decimaltecknet flyttas 7 steg åt höger för att komma till 4,76, så exponenten är −7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,76·10^7"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "4,76·10^-6"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        },
        {
          "answers": {
            "a": "4,76·10^-8"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 7 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-8319c493",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 008 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8·10^-6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 008 = 8 · 0,000 001 = 8 · 10^-6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt höger för att komma till 8, så exponenten är −6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8·10^6"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "8·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        },
        {
          "answers": {
            "a": "8·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-feab50fe",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 003 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3·10^-6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 003 = 3 · 0,000 001 = 3 · 10^-6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt höger för att komma till 3, så exponenten är −6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3·10^6"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "3·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        },
        {
          "answers": {
            "a": "3·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-a4b67109",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 029 7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,97·10^-8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 029 7 = 2,97 · 0,000 000 01 = 2,97 · 10^-8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg åt höger för att komma till 2,97, så exponenten är −8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,97·10^8"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "2,97·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        },
        {
          "answers": {
            "a": "2,97·10^-9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-b205f21c",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 002 72 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,72·10^-6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 002 72 = 2,72 · 0,000 001 = 2,72 · 10^-6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt höger för att komma till 2,72, så exponenten är −6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,72·10^6"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "2,72·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        },
        {
          "answers": {
            "a": "2,72·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-9324ca84",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7·10^-1"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,7 = 7 · 0,1 = 7 · 10^-1"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt höger för att komma till 7, så exponenten är −1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7·10^1"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "7·10^-2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 1 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-5592b9ce",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 784 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7,84·10^-4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 784 = 7,84 · 0,0001 = 7,84 · 10^-4"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg åt höger för att komma till 7,84, så exponenten är −4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,84·10^4"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "7,84·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg."
        },
        {
          "answers": {
            "a": "7,84·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-32a2cacc",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,708 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7,08·10^-1"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,708 = 7,08 · 0,1 = 7,08 · 10^-1"
        },
        {
          "text": "Decimaltecknet flyttas 1 steg åt höger för att komma till 7,08, så exponenten är −1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,08·10^1"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "7,08·10^-2"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 1 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-d9922ca4",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,025 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,5·10^-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,025 = 2,5 · 0,01 = 2,5 · 10^-2"
        },
        {
          "text": "Decimaltecknet flyttas 2 steg åt höger för att komma till 2,5, så exponenten är −2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,5·10^2"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "2,5·10^-1"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        },
        {
          "answers": {
            "a": "2,5·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 2 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-d9b02b2e",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 124 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,24·10^-4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 124 = 1,24 · 0,0001 = 1,24 · 10^-4"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg åt höger för att komma till 1,24, så exponenten är −4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,24·10^4"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "1,24·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg."
        },
        {
          "answers": {
            "a": "1,24·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-fc03af0c",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 69 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6,9·10^-4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 69 = 6,9 · 0,0001 = 6,9 · 10^-4"
        },
        {
          "text": "Decimaltecknet flyttas 4 steg åt höger för att komma till 6,9, så exponenten är −4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6,9·10^4"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "6,9·10^-3"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg."
        },
        {
          "answers": {
            "a": "6,9·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 4 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-9bb01504",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 003 59 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,59·10^-6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 003 59 = 3,59 · 0,000 001 = 3,59 · 10^-6"
        },
        {
          "text": "Decimaltecknet flyttas 6 steg åt höger för att komma till 3,59, så exponenten är −6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,59·10^6"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "3,59·10^-5"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        },
        {
          "answers": {
            "a": "3,59·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 6 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-3351145c",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 053 5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5,35·10^-8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 053 5 = 5,35 · 0,000 000 01 = 5,35 · 10^-8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg åt höger för att komma till 5,35, så exponenten är −8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5,35·10^8"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "5,35·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        },
        {
          "answers": {
            "a": "5,35·10^-9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        }
      ]
    },
    {
      "id": "aup1-grund-sma-09a984df",
      "part": "grund-sma",
      "text": "Skriv i grundpotensform",
      "points": "each",
      "rows": [
        "0,000 000 04 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4·10^-8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Grundpotensform är ett tal från 1 till under 10, gånger en tiopotens."
        },
        {
          "math": "0,000 000 04 = 4 · 0,000 000 01 = 4 · 10^-8"
        },
        {
          "text": "Decimaltecknet flyttas 8 steg åt höger för att komma till 4, så exponenten är −8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4·10^8"
          },
          "text": "Talet är mindre än 1, så exponenten ska vara negativ."
        },
        {
          "answers": {
            "a": "4·10^-7"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        },
        {
          "answers": {
            "a": "4·10^-9"
          },
          "text": "Räkna stegen: decimaltecknet flyttas 8 steg."
        }
      ]
    }
  ]
};
