// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AUp3.
export default {
  "code": "AUp3",
  "parts": [
    {
      "id": "negativ-bas",
      "title": "Potens med negativ bas",
      "labels": [
        "1a",
        "1b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    },
    {
      "id": "negativ-exponent",
      "title": "Potens med negativ exponent",
      "labels": [
        "2a",
        "2b",
        "3a",
        "3b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    },
    {
      "id": "bas-2",
      "title": "Skriv som potens med basen 2",
      "labels": [
        "4a",
        "4b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber om en potens med basen 2."
    },
    {
      "id": "forenkla",
      "title": "Förenkla med negativa exponenter",
      "labels": [
        "5a",
        "5b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla till en potens."
    },
    {
      "id": "dela",
      "title": "Dela med en negativ exponent",
      "labels": [
        "6a",
        "6b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    }
  ],
  "tasks": [
    {
      "id": "aup3-negativ-bas-b97e82fe",
      "part": "negativ-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)^4 = [a]"
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
          "text": "(−3)⁴ är 4 faktorer −3."
        },
        {
          "text": "Två negativa faktorer ger ett positivt tal. De 4 faktorerna går att para ihop, så svaret är positivt."
        },
        {
          "math": "(-3)^4 = (-3) · (-3) · (-3) · (-3) = 81"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-81"
          },
          "text": "Parentesen gör att minustecknet hör till basen, så alla faktorer i (−3)⁴ är negativa. Ett jämnt antal negativa faktorer ger ett positivt svar."
        },
        {
          "answers": {
            "a": "-12"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger hur många faktorer det är."
        }
      ]
    },
    {
      "id": "aup3-negativ-bas-9397a906",
      "part": "negativ-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-1)^15 = [a]"
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
          "text": "(−1)¹⁵ är 15 faktorer −1, och (−1) · (−1) = 1."
        },
        {
          "text": "När de 15 faktorerna paras ihop blir en −1 över, så svaret är −1."
        },
        {
          "math": "(-1)^15 = -1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Ett udda antal negativa faktorer ger ett negativt svar: när de paras ihop blir en över."
        },
        {
          "answers": {
            "a": "-15"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger hur många faktorer det är."
        }
      ]
    },
    {
      "id": "aup3-negativ-bas-58280b0d",
      "part": "negativ-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-1)^10 = [a]"
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
          "text": "(−1)¹⁰ är 10 faktorer −1, och (−1) · (−1) = 1."
        },
        {
          "text": "De 10 faktorerna går att para ihop, så svaret är 1."
        },
        {
          "math": "(-1)^10 = 1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1"
          },
          "text": "Parentesen gör att minustecknet hör till basen, så alla faktorer i (−1)¹⁰ är negativa. Ett jämnt antal negativa faktorer ger ett positivt svar."
        },
        {
          "answers": {
            "a": "-10"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger hur många faktorer det är."
        }
      ]
    },
    {
      "id": "aup3-negativ-bas-7f6f1f29",
      "part": "negativ-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-243"
          ]
        }
      },
      "solution": [
        {
          "text": "(−3)⁵ är 5 faktorer −3."
        },
        {
          "text": "Två negativa faktorer ger ett positivt tal. När de 5 faktorerna paras ihop blir en över, så svaret är negativt."
        },
        {
          "math": "(-3)^5 = (-3) · (-3) · (-3) · (-3) · (-3) = -243"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "243"
          },
          "text": "Ett udda antal negativa faktorer ger ett negativt svar: när de paras ihop blir en över."
        },
        {
          "answers": {
            "a": "-15"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger hur många faktorer det är."
        }
      ]
    },
    {
      "id": "aup3-negativ-bas-e3c1e464",
      "part": "negativ-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)^2 = [a]"
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
          "text": "(−3)² är 2 faktorer −3."
        },
        {
          "text": "Två negativa faktorer ger ett positivt tal. De 2 faktorerna går att para ihop, så svaret är positivt."
        },
        {
          "math": "(-3)^2 = (-3) · (-3) = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9"
          },
          "text": "Parentesen gör att minustecknet hör till basen, så alla faktorer i (−3)² är negativa. Ett jämnt antal negativa faktorer ger ett positivt svar."
        },
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger hur många faktorer det är."
        }
      ]
    },
    {
      "id": "aup3-negativ-bas-5c31c2c4",
      "part": "negativ-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-8)^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-512"
          ]
        }
      },
      "solution": [
        {
          "text": "(−8)³ är 3 faktorer −8."
        },
        {
          "text": "Två negativa faktorer ger ett positivt tal. När de 3 faktorerna paras ihop blir en över, så svaret är negativt."
        },
        {
          "math": "(-8)^3 = (-8) · (-8) · (-8) = -512"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "512"
          },
          "text": "Ett udda antal negativa faktorer ger ett negativt svar: när de paras ihop blir en över."
        },
        {
          "answers": {
            "a": "-24"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger hur många faktorer det är."
        }
      ]
    },
    {
      "id": "aup3-negativ-exponent-0c6fcc5e",
      "part": "negativ-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "10^-1 = [a]"
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
          "text": "Varje gång exponenten minskar med 1 delar man med 10: 10¹ = 10, 10⁰ = 1, 10⁻¹ = 1/10."
        },
        {
          "math": "10^-1 = {1|10}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "En negativ exponent gör inte talet negativt. Den betyder 1 delat med potensen."
        },
        {
          "answers": {
            "a": "10"
          },
          "text": "Du tog bort minustecknet. Men 10⁻¹ är 1 delat med 10¹."
        }
      ]
    },
    {
      "id": "aup3-negativ-exponent-e9b0cd74",
      "part": "negativ-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-1/125"
          ]
        }
      },
      "solution": [
        {
          "text": "(−5)⁻³ är 1 delat med (−5)³."
        },
        {
          "text": "Ett udda antal faktorer −5 ger ett negativt tal."
        },
        {
          "math": "(-5)^-3 = {1|(-5)^3} = -{1|125}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/125"
          },
          "text": "Tecknet: (−5)³ är negativt, eftersom antalet negativa faktorer är udda."
        },
        {
          "answers": {
            "a": "-125"
          },
          "text": "Du räknade ut (−5)³. Den negativa exponenten betyder 1 delat med det."
        }
      ]
    },
    {
      "id": "aup3-negativ-exponent-ce69fb06",
      "part": "negativ-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/4"
          ]
        }
      },
      "solution": [
        {
          "text": "(−2)⁻² är 1 delat med (−2)²."
        },
        {
          "text": "Ett jämnt antal faktorer −2 ger ett positivt tal."
        },
        {
          "math": "(-2)^-2 = {1|(-2)^2} = {1|4}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1/4"
          },
          "text": "Tecknet: (−2)² är positivt, eftersom antalet negativa faktorer är jämnt."
        },
        {
          "answers": {
            "a": "4"
          },
          "text": "Du räknade ut (−2)². Den negativa exponenten betyder 1 delat med det."
        }
      ]
    },
    {
      "id": "aup3-negativ-exponent-00680bcb",
      "part": "negativ-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/81"
          ]
        }
      },
      "solution": [
        {
          "text": "Varje gång exponenten minskar med 1 delar man med 9: 9¹ = 9, 9⁰ = 1, 9⁻¹ = 1/9, 9⁻² = 1/81."
        },
        {
          "math": "9^-2 = {1|9^2} = {1|81}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-81"
          },
          "text": "En negativ exponent gör inte talet negativt. Den betyder 1 delat med potensen."
        },
        {
          "answers": {
            "a": "81"
          },
          "text": "Du tog bort minustecknet. Men 9⁻² är 1 delat med 9²."
        },
        {
          "answers": {
            "a": "-18"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger inte att något ska multipliceras med den."
        }
      ]
    },
    {
      "id": "aup3-negativ-exponent-d1cf8aae",
      "part": "negativ-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-1)^-9 = [a]"
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
          "text": "(−1)⁻⁹ är 1 delat med (−1)⁹, och (−1)⁹ = −1."
        },
        {
          "math": "(-1)^-9 = {1|(-1)^9} = -1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Tecknet: antalet negativa faktorer är udda, så (−1)⁹ = −1."
        }
      ]
    },
    {
      "id": "aup3-negativ-exponent-8d6eafc9",
      "part": "negativ-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/9"
          ]
        }
      },
      "solution": [
        {
          "text": "Varje gång exponenten minskar med 1 delar man med 3: 3¹ = 3, 3⁰ = 1, 3⁻¹ = 1/3, 3⁻² = 1/9."
        },
        {
          "math": "3^-2 = {1|3^2} = {1|9}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9"
          },
          "text": "En negativ exponent gör inte talet negativt. Den betyder 1 delat med potensen."
        },
        {
          "answers": {
            "a": "9"
          },
          "text": "Du tog bort minustecknet. Men 3⁻² är 1 delat med 3²."
        },
        {
          "answers": {
            "a": "-6"
          },
          "text": "Du multiplicerade basen med exponenten. Men exponenten säger inte att något ska multipliceras med den."
        }
      ]
    },
    {
      "id": "aup3-bas-2-3d831d42",
      "part": "bas-2",
      "text": "Skriv i potensform med basen 2",
      "points": "each",
      "rows": [
        "{1|4} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^-2",
            "2^(-2)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "4 = 2², så 1/4 är 1 delat med 2²."
        },
        {
          "text": "1 delat med en potens är samma potens med negativ exponent."
        },
        {
          "math": "{1|4} = {1|2^2} = 2^-2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^2"
          },
          "text": "2² är 4, inte 1/4. Ett tal mellan 0 och 1 har en negativ exponent."
        },
        {
          "answers": {
            "a": "2^-4"
          },
          "text": "Exponenten är inte nämnaren. Den säger hur många faktorer 2 nämnaren är: 4 = 2²."
        }
      ]
    },
    {
      "id": "aup3-bas-2-ac29e65f",
      "part": "bas-2",
      "text": "Skriv i potensform med basen 2",
      "points": "each",
      "rows": [
        "{1|32} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^-5",
            "2^(-5)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "32 = 2⁵, så 1/32 är 1 delat med 2⁵."
        },
        {
          "text": "1 delat med en potens är samma potens med negativ exponent."
        },
        {
          "math": "{1|32} = {1|2^5} = 2^-5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^5"
          },
          "text": "2⁵ är 32, inte 1/32. Ett tal mellan 0 och 1 har en negativ exponent."
        },
        {
          "answers": {
            "a": "2^-32"
          },
          "text": "Exponenten är inte nämnaren. Den säger hur många faktorer 2 nämnaren är: 32 = 2⁵."
        }
      ]
    },
    {
      "id": "aup3-bas-2-a4443351",
      "part": "bas-2",
      "text": "Skriv i potensform med basen 2",
      "points": "each",
      "rows": [
        "{1|16} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^-4",
            "2^(-4)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "16 = 2⁴, så 1/16 är 1 delat med 2⁴."
        },
        {
          "text": "1 delat med en potens är samma potens med negativ exponent."
        },
        {
          "math": "{1|16} = {1|2^4} = 2^-4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^4"
          },
          "text": "2⁴ är 16, inte 1/16. Ett tal mellan 0 och 1 har en negativ exponent."
        },
        {
          "answers": {
            "a": "2^-16"
          },
          "text": "Exponenten är inte nämnaren. Den säger hur många faktorer 2 nämnaren är: 16 = 2⁴."
        }
      ]
    },
    {
      "id": "aup3-bas-2-7e00f3cd",
      "part": "bas-2",
      "text": "Skriv i potensform med basen 2",
      "points": "each",
      "rows": [
        "{1|128} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^-7",
            "2^(-7)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "128 = 2⁷, så 1/128 är 1 delat med 2⁷."
        },
        {
          "text": "1 delat med en potens är samma potens med negativ exponent."
        },
        {
          "math": "{1|128} = {1|2^7} = 2^-7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^7"
          },
          "text": "2⁷ är 128, inte 1/128. Ett tal mellan 0 och 1 har en negativ exponent."
        },
        {
          "answers": {
            "a": "2^-128"
          },
          "text": "Exponenten är inte nämnaren. Den säger hur många faktorer 2 nämnaren är: 128 = 2⁷."
        }
      ]
    },
    {
      "id": "aup3-bas-2-f5b19cfd",
      "part": "bas-2",
      "text": "Skriv i potensform med basen 2",
      "points": "each",
      "rows": [
        "{1|256} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^-8",
            "2^(-8)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "256 = 2⁸, så 1/256 är 1 delat med 2⁸."
        },
        {
          "text": "1 delat med en potens är samma potens med negativ exponent."
        },
        {
          "math": "{1|256} = {1|2^8} = 2^-8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^8"
          },
          "text": "2⁸ är 256, inte 1/256. Ett tal mellan 0 och 1 har en negativ exponent."
        },
        {
          "answers": {
            "a": "2^-256"
          },
          "text": "Exponenten är inte nämnaren. Den säger hur många faktorer 2 nämnaren är: 256 = 2⁸."
        }
      ]
    },
    {
      "id": "aup3-bas-2-f35b576e",
      "part": "bas-2",
      "text": "Skriv i potensform med basen 2",
      "points": "each",
      "rows": [
        "{1|64} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^-6",
            "2^(-6)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "64 = 2⁶, så 1/64 är 1 delat med 2⁶."
        },
        {
          "text": "1 delat med en potens är samma potens med negativ exponent."
        },
        {
          "math": "{1|64} = {1|2^6} = 2^-6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2^6"
          },
          "text": "2⁶ är 64, inte 1/64. Ett tal mellan 0 och 1 har en negativ exponent."
        },
        {
          "answers": {
            "a": "2^-64"
          },
          "text": "Exponenten är inte nämnaren. Den säger hur många faktorer 2 nämnaren är: 64 = 2⁶."
        }
      ]
    },
    {
      "id": "aup3-forenkla-ce3d6d21",
      "part": "forenkla",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2^-2 · 2^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^-5",
            "2^(-5)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "2⁻² och 2⁻³ är 1 delat med 2² och 1 delat med 2³, så produkten är 1 delat med 2⁵."
        },
        {
          "text": "Exponenterna läggs ihop som förut, också när någon är negativ: (−2) + (−3) = −5."
        },
        {
          "math": "2^-2 · 2^-3 = 2^-5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(2·2)^-5"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 2."
        },
        {
          "answers": {
            "a": "2^6"
          },
          "text": "Du multiplicerade exponenterna. Vid multiplikation läggs de ihop: (−2) + (−3) = −5."
        },
        {
          "answers": {
            "a": "2^5"
          },
          "text": "Båda exponenterna är negativa, så summan är också negativ: (−2) + (−3) = −5."
        }
      ]
    },
    {
      "id": "aup3-forenkla-179f8e68",
      "part": "forenkla",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "7^8 · 7^-5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "7⁻⁵ är 1 delat med 7⁵, så 5 faktorer 7 förkortas bort."
        },
        {
          "text": "Exponenterna läggs ihop som förut, också när någon är negativ: 8 + (−5) = 3."
        },
        {
          "math": "7^8 · 7^-5 = 7^3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(7·7)^3"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 7."
        },
        {
          "answers": {
            "a": "7^-40"
          },
          "text": "Du multiplicerade exponenterna. Vid multiplikation läggs de ihop: 8 + (−5) = 3."
        },
        {
          "answers": {
            "a": "7^13"
          },
          "text": "Du lade ihop exponenterna utan minustecknet. 7⁻⁵ har en negativ exponent, så summan är 8 + (−5) = 3."
        }
      ]
    },
    {
      "id": "aup3-forenkla-c25b107a",
      "part": "forenkla",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "9^2 · 9^-9 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9^-7",
            "9^(-7)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "9⁻⁹ är 1 delat med 9⁹, så 9 faktorer 9 förkortas bort."
        },
        {
          "text": "Exponenterna läggs ihop som förut, också när någon är negativ: 2 + (−9) = −7."
        },
        {
          "math": "9^2 · 9^-9 = 9^-7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(9·9)^-7"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 9."
        },
        {
          "answers": {
            "a": "9^-18"
          },
          "text": "Du multiplicerade exponenterna. Vid multiplikation läggs de ihop: 2 + (−9) = −7."
        },
        {
          "answers": {
            "a": "9^11"
          },
          "text": "Du lade ihop exponenterna utan minustecknet. 9⁻⁹ har en negativ exponent, så summan är 2 + (−9) = −7."
        }
      ]
    },
    {
      "id": "aup3-forenkla-b3d76211",
      "part": "forenkla",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "4^-6 · 4^-7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4^-13",
            "4^(-13)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "4⁻⁶ och 4⁻⁷ är 1 delat med 4⁶ och 1 delat med 4⁷, så produkten är 1 delat med 4¹³."
        },
        {
          "text": "Exponenterna läggs ihop som förut, också när någon är negativ: (−6) + (−7) = −13."
        },
        {
          "math": "4^-6 · 4^-7 = 4^-13"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(4·4)^-13"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 4."
        },
        {
          "answers": {
            "a": "4^42"
          },
          "text": "Du multiplicerade exponenterna. Vid multiplikation läggs de ihop: (−6) + (−7) = −13."
        },
        {
          "answers": {
            "a": "4^13"
          },
          "text": "Båda exponenterna är negativa, så summan är också negativ: (−6) + (−7) = −13."
        }
      ]
    },
    {
      "id": "aup3-forenkla-e6f87ca8",
      "part": "forenkla",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "6^-4 · 6^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6^-1",
            "6^(-1)"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "6⁻⁴ är 1 delat med 6⁴, så 4 faktorer 6 förkortas bort."
        },
        {
          "text": "Exponenterna läggs ihop som förut, också när någon är negativ: (−4) + 3 = −1."
        },
        {
          "math": "6^-4 · 6^3 = 6^-1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(6·6)^-1"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 6."
        },
        {
          "answers": {
            "a": "6^-12"
          },
          "text": "Du multiplicerade exponenterna. Vid multiplikation läggs de ihop: (−4) + 3 = −1."
        },
        {
          "answers": {
            "a": "6^7"
          },
          "text": "Du lade ihop exponenterna utan minustecknet. 6⁻⁴ har en negativ exponent, så summan är (−4) + 3 = −1."
        }
      ]
    },
    {
      "id": "aup3-forenkla-c2e45584",
      "part": "forenkla",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "5^7 · 5^-4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "5⁻⁴ är 1 delat med 5⁴, så 4 faktorer 5 förkortas bort."
        },
        {
          "text": "Exponenterna läggs ihop som förut, också när någon är negativ: 7 + (−4) = 3."
        },
        {
          "math": "5^7 · 5^-4 = 5^3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(5·5)^3"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 5."
        },
        {
          "answers": {
            "a": "5^-28"
          },
          "text": "Du multiplicerade exponenterna. Vid multiplikation läggs de ihop: 7 + (−4) = 3."
        },
        {
          "answers": {
            "a": "5^11"
          },
          "text": "Du lade ihop exponenterna utan minustecknet. 5⁻⁴ har en negativ exponent, så summan är 7 + (−4) = 3."
        }
      ]
    },
    {
      "id": "aup3-dela-23c08baa",
      "part": "dela",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{1|2^-1} = [a]"
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
          "text": "2⁻¹ är 1/2."
        },
        {
          "text": "Det går 2 stycken 1/2 på en hel, så 1 delat med 1/2 är 2."
        },
        {
          "math": "{1|2^-1} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/2"
          },
          "text": "Det är 2⁻¹. Uppgiften är 1 delat med det talet."
        },
        {
          "answers": {
            "a": "-2"
          },
          "text": "En negativ exponent gör inte talet negativt, och 1 delat med ett positivt tal är positivt."
        }
      ]
    },
    {
      "id": "aup3-dela-fcc90166",
      "part": "dela",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{1|6^-1} = [a]"
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
          "text": "6⁻¹ är 1/6."
        },
        {
          "text": "Det går 6 stycken 1/6 på en hel, så 1 delat med 1/6 är 6."
        },
        {
          "math": "{1|6^-1} = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/6"
          },
          "text": "Det är 6⁻¹. Uppgiften är 1 delat med det talet."
        },
        {
          "answers": {
            "a": "-6"
          },
          "text": "En negativ exponent gör inte talet negativt, och 1 delat med ett positivt tal är positivt."
        }
      ]
    },
    {
      "id": "aup3-dela-06797f57",
      "part": "dela",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{3^-3|3^-1} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/9"
          ]
        }
      },
      "solution": [
        {
          "text": "Vid division subtraheras exponenterna, också när de är negativa: −3 − (−1) = −3 + 1 = −2."
        },
        {
          "math": "{3^-3|3^-1} = 3^-2 = {1|9}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Du räknade nämnaren minus täljaren. Täljarens exponent kommer först: −3 − (−1) = −2."
        },
        {
          "answers": {
            "a": "1/81"
          },
          "text": "Exponenterna ska subtraheras, och −(−1) blir +1."
        }
      ]
    },
    {
      "id": "aup3-dela-6c322644",
      "part": "dela",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{2^-4|2^-5} = [a]"
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
          "text": "Vid division subtraheras exponenterna, också när de är negativa: −4 − (−5) = −4 + 5 = 1."
        },
        {
          "math": "{2^-4|2^-5} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/2"
          },
          "text": "Du räknade nämnaren minus täljaren. Täljarens exponent kommer först: −4 − (−5) = 1."
        },
        {
          "answers": {
            "a": "1/512"
          },
          "text": "Exponenterna ska subtraheras, och −(−5) blir +5."
        }
      ]
    },
    {
      "id": "aup3-dela-eaa66929",
      "part": "dela",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{1|6^-2} = [a]"
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
          "text": "6⁻² är 1/36."
        },
        {
          "text": "Det går 36 stycken 1/36 på en hel, så 1 delat med 1/36 är 36."
        },
        {
          "math": "{1|6^-2} = 6^2 = 36"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/36"
          },
          "text": "Det är 6⁻². Uppgiften är 1 delat med det talet."
        },
        {
          "answers": {
            "a": "-36"
          },
          "text": "En negativ exponent gör inte talet negativt, och 1 delat med ett positivt tal är positivt."
        }
      ]
    },
    {
      "id": "aup3-dela-9b009b7e",
      "part": "dela",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{4^-5|4^-4} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/4"
          ]
        }
      },
      "solution": [
        {
          "text": "Vid division subtraheras exponenterna, också när de är negativa: −5 − (−4) = −5 + 4 = −1."
        },
        {
          "math": "{4^-5|4^-4} = 4^-1 = {1|4}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Du räknade nämnaren minus täljaren. Täljarens exponent kommer först: −5 − (−4) = −1."
        }
      ]
    }
  ]
};
