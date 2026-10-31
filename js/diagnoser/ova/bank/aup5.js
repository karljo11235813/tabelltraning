// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AUp5.
export default {
  "code": "AUp5",
  "parts": [
    {
      "id": "potens-plus",
      "title": "Potens och addition",
      "labels": [
        "1a",
        "1b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    },
    {
      "id": "potens-tecken",
      "title": "Potenser med negativ bas",
      "labels": [
        "2a",
        "2b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    },
    {
      "id": "samma-termer",
      "title": "Samma potens i täljare och nämnare",
      "labels": [
        "3a",
        "3b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    },
    {
      "id": "forkorta-tecken",
      "title": "Förkorta och räkna ut tecknet",
      "labels": [
        "4a",
        "4b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla så långt som möjligt."
    },
    {
      "id": "rot-och-tecken",
      "title": "Roten ur en kvadrat med minustecken",
      "labels": [
        "5a",
        "5b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla så långt som möjligt."
    },
    {
      "id": "rot-i-kvadrat",
      "title": "Kvadraten på en rot med minustecken",
      "labels": [
        "6a",
        "6b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla så långt som möjligt."
    },
    {
      "id": "rot-produkt",
      "title": "Produkten av två rötter",
      "labels": [
        "7a",
        "7b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla så långt som möjligt."
    }
  ],
  "tasks": [
    {
      "id": "aup5-potens-plus-e3c17029",
      "part": "potens-plus",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "3^4 + 8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "89"
          ]
        }
      },
      "solution": [
        {
          "text": "Potensen räknas först, sedan additionen."
        },
        {
          "math": "3^4 + 8 = 81 + 8 = 89"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14641"
          },
          "text": "Du lade ihop först. Exponenten hör bara till 3, så 3⁴ räknas först."
        },
        {
          "answers": {
            "a": "20"
          },
          "text": "3⁴ är 4 faktorer 3, inte 3 · 4."
        }
      ]
    },
    {
      "id": "aup5-potens-plus-4b52c044",
      "part": "potens-plus",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "4 + 3^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "31"
          ]
        }
      },
      "solution": [
        {
          "text": "Potensen räknas först, sedan additionen."
        },
        {
          "math": "4 + 3^3 = 4 + 27 = 31"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "343"
          },
          "text": "Du lade ihop först. Exponenten hör bara till 3, så 3³ räknas först."
        },
        {
          "answers": {
            "a": "13"
          },
          "text": "3³ är 3 faktorer 3, inte 3 · 3."
        }
      ]
    },
    {
      "id": "aup5-potens-plus-5249e5b0",
      "part": "potens-plus",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "2^5 + 7 = [a]"
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
          "text": "Potensen räknas först, sedan additionen."
        },
        {
          "math": "2^5 + 7 = 32 + 7 = 39"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "59049"
          },
          "text": "Du lade ihop först. Exponenten hör bara till 2, så 2⁵ räknas först."
        },
        {
          "answers": {
            "a": "17"
          },
          "text": "2⁵ är 5 faktorer 2, inte 2 · 5."
        }
      ]
    },
    {
      "id": "aup5-potens-plus-3199dc83",
      "part": "potens-plus",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "6 + 2^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "38"
          ]
        }
      },
      "solution": [
        {
          "text": "Potensen räknas först, sedan additionen."
        },
        {
          "math": "6 + 2^5 = 6 + 32 = 38"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "32768"
          },
          "text": "Du lade ihop först. Exponenten hör bara till 2, så 2⁵ räknas först."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "2⁵ är 5 faktorer 2, inte 2 · 5."
        }
      ]
    },
    {
      "id": "aup5-potens-plus-30e775a2",
      "part": "potens-plus",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "9 + 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "109"
          ]
        }
      },
      "solution": [
        {
          "text": "Potensen räknas först, sedan additionen."
        },
        {
          "math": "9 + 10^2 = 9 + 100 = 109"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "361"
          },
          "text": "Du lade ihop först. Exponenten hör bara till 10, så 10² räknas först."
        },
        {
          "answers": {
            "a": "29"
          },
          "text": "10² är 2 faktorer 10, inte 10 · 2."
        }
      ]
    },
    {
      "id": "aup5-potens-plus-73b88067",
      "part": "potens-plus",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "5^2 + 6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "31"
          ]
        }
      },
      "solution": [
        {
          "text": "Potensen räknas först, sedan additionen."
        },
        {
          "math": "5^2 + 6 = 25 + 6 = 31"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "121"
          },
          "text": "Du lade ihop först. Exponenten hör bara till 5, så 5² räknas först."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "5² är 2 faktorer 5, inte 5 · 2."
        }
      ]
    },
    {
      "id": "aup5-potens-tecken-091a219c",
      "part": "potens-tecken",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4)^3 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-6400"
          ]
        }
      },
      "solution": [
        {
          "text": "(−4)³ är negativt: 3 faktorer −4. Sedan multipliceras med 100."
        },
        {
          "math": "(-4)^3 · 10^2 = -64 · 100 = -6400"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6400"
          },
          "text": "Tecknet: 3 faktorer −4 ger ett negativt tal."
        },
        {
          "answers": {
            "a": "-1200"
          },
          "text": "(−4)³ är 3 faktorer −4, inte (−4) · 3."
        }
      ]
    },
    {
      "id": "aup5-potens-tecken-9b4806bb",
      "part": "potens-tecken",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-3)^2 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9000"
          ]
        }
      },
      "solution": [
        {
          "text": "(−3)² är positivt: 2 faktorer −3. Sedan multipliceras med 1000."
        },
        {
          "math": "(-3)^2 · 10^3 = 9 · 1000 = 9000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-9000"
          },
          "text": "Tecknet: 2 faktorer −3 ger ett positivt tal."
        },
        {
          "answers": {
            "a": "-6000"
          },
          "text": "(−3)² är 2 faktorer −3, inte (−3) · 2."
        }
      ]
    },
    {
      "id": "aup5-potens-tecken-4d4c8a57",
      "part": "potens-tecken",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-5)^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/25"
          ]
        }
      },
      "solution": [
        {
          "text": "(−5)⁻² är 1 delat med (−5)², och (−5)² är positivt."
        },
        {
          "math": "(-5)^-2 = {1|(-5)^2} = {1|25}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1/25"
          },
          "text": "Tecknet: 2 faktorer −5 ger ett positivt tal."
        },
        {
          "answers": {
            "a": "25"
          },
          "text": "Det är (−5)². Den negativa exponenten betyder 1 delat med det."
        }
      ]
    },
    {
      "id": "aup5-potens-tecken-59bb75f2",
      "part": "potens-tecken",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)^3 · 10^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-800"
          ]
        }
      },
      "solution": [
        {
          "text": "(−2)³ är negativt: 3 faktorer −2. Sedan multipliceras med 100."
        },
        {
          "math": "(-2)^3 · 10^2 = -8 · 100 = -800"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "800"
          },
          "text": "Tecknet: 3 faktorer −2 ger ett negativt tal."
        },
        {
          "answers": {
            "a": "-600"
          },
          "text": "(−2)³ är 3 faktorer −2, inte (−2) · 3."
        }
      ]
    },
    {
      "id": "aup5-potens-tecken-59715971",
      "part": "potens-tecken",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-2)^-3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-1/8"
          ]
        }
      },
      "solution": [
        {
          "text": "(−2)⁻³ är 1 delat med (−2)³, och (−2)³ är negativt."
        },
        {
          "math": "(-2)^-3 = {1|(-2)^3} = -{1|8}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/8"
          },
          "text": "Tecknet: 3 faktorer −2 ger ett negativt tal."
        },
        {
          "answers": {
            "a": "-8"
          },
          "text": "Det är (−2)³. Den negativa exponenten betyder 1 delat med det."
        }
      ]
    },
    {
      "id": "aup5-potens-tecken-9853952c",
      "part": "potens-tecken",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "(-4)^-2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/16"
          ]
        }
      },
      "solution": [
        {
          "text": "(−4)⁻² är 1 delat med (−4)², och (−4)² är positivt."
        },
        {
          "math": "(-4)^-2 = {1|(-4)^2} = {1|16}"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-1/16"
          },
          "text": "Tecknet: 2 faktorer −4 ger ett positivt tal."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "Det är (−4)². Den negativa exponenten betyder 1 delat med det."
        }
      ]
    },
    {
      "id": "aup5-samma-termer-8074cec1",
      "part": "samma-termer",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{2^-6 + 2^-6 + 2^-6|2^-6} = [a]"
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
          "text": "Täljaren är 3 stycken 2⁻⁶, och de delas med 2⁻⁶. Potensen behöver inte räknas ut."
        },
        {
          "math": "{2^-6 + 2^-6 + 2^-6|2^-6} = {3 · 2^-6|2^-6} = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Du strök en av termerna. Alla tre termerna räknas: täljaren är 3 · 2⁻⁶."
        }
      ]
    },
    {
      "id": "aup5-samma-termer-eaf0c4e3",
      "part": "samma-termer",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{7^4 + 7^4|7^4} = [a]"
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
          "text": "Täljaren är 2 stycken 7⁴, och de delas med 7⁴. Potensen behöver inte räknas ut."
        },
        {
          "math": "{7^4 + 7^4|7^4} = {2 · 7^4|7^4} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Du strök en av termerna. Båda termerna räknas: täljaren är 2 · 7⁴."
        },
        {
          "answers": {
            "a": "7^4"
          },
          "text": "Du strök en term i täljaren mot nämnaren. Men täljaren är en summa: 7⁴ + 7⁴ = 2 · 7⁴."
        }
      ]
    },
    {
      "id": "aup5-samma-termer-8edc8b7d",
      "part": "samma-termer",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{3^6 + 3^6|3^6} = [a]"
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
          "text": "Täljaren är 2 stycken 3⁶, och de delas med 3⁶. Potensen behöver inte räknas ut."
        },
        {
          "math": "{3^6 + 3^6|3^6} = {2 · 3^6|3^6} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Du strök en av termerna. Båda termerna räknas: täljaren är 2 · 3⁶."
        },
        {
          "answers": {
            "a": "3^6"
          },
          "text": "Du strök en term i täljaren mot nämnaren. Men täljaren är en summa: 3⁶ + 3⁶ = 2 · 3⁶."
        }
      ]
    },
    {
      "id": "aup5-samma-termer-31dad1ad",
      "part": "samma-termer",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{6^-3 + 6^-3 + 6^-3|6^-3} = [a]"
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
          "text": "Täljaren är 3 stycken 6⁻³, och de delas med 6⁻³. Potensen behöver inte räknas ut."
        },
        {
          "math": "{6^-3 + 6^-3 + 6^-3|6^-3} = {3 · 6^-3|6^-3} = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Du strök en av termerna. Alla tre termerna räknas: täljaren är 3 · 6⁻³."
        }
      ]
    },
    {
      "id": "aup5-samma-termer-caaa3f34",
      "part": "samma-termer",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{2^-9 + 2^-9|2^-9} = [a]"
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
          "text": "Täljaren är 2 stycken 2⁻⁹, och de delas med 2⁻⁹. Potensen behöver inte räknas ut."
        },
        {
          "math": "{2^-9 + 2^-9|2^-9} = {2 · 2^-9|2^-9} = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1"
          },
          "text": "Du strök en av termerna. Båda termerna räknas: täljaren är 2 · 2⁻⁹."
        },
        {
          "answers": {
            "a": "2^-9"
          },
          "text": "Du strök en term i täljaren mot nämnaren. Men täljaren är en summa: 2⁻⁹ + 2⁻⁹ = 2 · 2⁻⁹."
        }
      ]
    },
    {
      "id": "aup5-samma-termer-30e01f33",
      "part": "samma-termer",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{5^3 + 5^3 + 5^3|5^3} = [a]"
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
          "text": "Täljaren är 3 stycken 5³, och de delas med 5³. Potensen behöver inte räknas ut."
        },
        {
          "math": "{5^3 + 5^3 + 5^3|5^3} = {3 · 5^3|5^3} = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Du strök en av termerna. Alla tre termerna räknas: täljaren är 3 · 5³."
        }
      ]
    },
    {
      "id": "aup5-forkorta-tecken-17f1f735",
      "part": "forkorta-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{4^3 · 2^5|(-2)^9} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "4 = 2², så 4³ = 2⁶ och täljaren har 6 + 5 = 11 faktorer 2."
        },
        {
          "text": "Tecknet för sig: (−2)⁹ är negativt, så kvoten är negativ."
        },
        {
          "math": "{4^3 · 2^5|(-2)^9} = {2^11|-2^9} = -4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Tecknet: (−2)⁹ är negativt, så kvoten är negativ."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "4 är inte basen: skriv om 4³ som 2⁶ först."
        }
      ]
    },
    {
      "id": "aup5-forkorta-tecken-b9f3cb99",
      "part": "forkorta-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{4^2 · (-2)^5|(-2)^8} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "4 = 2², så 4² = 2⁴ och täljaren har 4 + 5 = 9 faktorer 2."
        },
        {
          "text": "Tecknet för sig: (−2)⁵ är negativt och (−2)⁸ är positivt, så kvoten är negativ."
        },
        {
          "math": "{4^2 · (-2)^5|(-2)^8} = {-2^9|2^8} = -2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Tecknet: (−2)⁵ är negativt och (−2)⁸ är positivt, så kvoten är negativ."
        },
        {
          "answers": {
            "a": "4"
          },
          "text": "4 är inte basen: skriv om 4² som 2⁴ först."
        }
      ]
    },
    {
      "id": "aup5-forkorta-tecken-74da4459",
      "part": "forkorta-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{9^3 · (-3)^3|(-3)^8} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "9 = 3², så 9³ = 3⁶ och täljaren har 6 + 3 = 9 faktorer 3."
        },
        {
          "text": "Tecknet för sig: (−3)³ är negativt och (−3)⁸ är positivt, så kvoten är negativ."
        },
        {
          "math": "{9^3 · (-3)^3|(-3)^8} = {-3^9|3^8} = -3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Tecknet: (−3)³ är negativt och (−3)⁸ är positivt, så kvoten är negativ."
        },
        {
          "answers": {
            "a": "9"
          },
          "text": "9 är inte basen: skriv om 9³ som 3⁶ först."
        }
      ]
    },
    {
      "id": "aup5-forkorta-tecken-ef9241c7",
      "part": "forkorta-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{4^4 · 2^3|(-2)^8} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "4 = 2², så 4⁴ = 2⁸ och täljaren har 8 + 3 = 11 faktorer 2."
        },
        {
          "text": "Tecknet för sig: (−2)⁸ är positivt, så kvoten är positiv."
        },
        {
          "math": "{4^4 · 2^3|(-2)^8} = {2^11|2^8} = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-8"
          },
          "text": "Tecknet: (−2)⁸ är positivt, så kvoten är positiv."
        },
        {
          "answers": {
            "a": "64"
          },
          "text": "4 är inte basen: skriv om 4⁴ som 2⁸ först."
        }
      ]
    },
    {
      "id": "aup5-forkorta-tecken-334c4c84",
      "part": "forkorta-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{9^2 · 3^3|(-3)^6} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "9 = 3², så 9² = 3⁴ och täljaren har 4 + 3 = 7 faktorer 3."
        },
        {
          "text": "Tecknet för sig: (−3)⁶ är positivt, så kvoten är positiv."
        },
        {
          "math": "{9^2 · 3^3|(-3)^6} = {3^7|3^6} = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-3"
          },
          "text": "Tecknet: (−3)⁶ är positivt, så kvoten är positiv."
        },
        {
          "answers": {
            "a": "9"
          },
          "text": "9 är inte basen: skriv om 9² som 3⁴ först."
        }
      ]
    },
    {
      "id": "aup5-forkorta-tecken-497333be",
      "part": "forkorta-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{4^3 · (-2)^7|(-2)^11} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "4 = 2², så 4³ = 2⁶ och täljaren har 6 + 7 = 13 faktorer 2."
        },
        {
          "text": "Tecknet för sig: (−2)⁷ är negativt och (−2)¹¹ är negativt, så kvoten är positiv."
        },
        {
          "math": "{4^3 · (-2)^7|(-2)^11} = {-2^13|-2^11} = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-4"
          },
          "text": "Tecknet: (−2)⁷ är negativt och (−2)¹¹ är negativt, så kvoten är positiv."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "4 är inte basen: skriv om 4³ som 2⁶ först."
        }
      ]
    },
    {
      "id": "aup5-rot-och-tecken-ddd51052",
      "part": "rot-och-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "√{-(5)^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Kvadraten räknas först och minustecknet sedan: under roten står −25."
        },
        {
          "text": "Inget reellt tal gånger sig självt ger ett negativt tal, så roten finns inte bland de reella talen."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Då skulle (−5) · (−5) vara −25, men det är 25."
        },
        {
          "answers": {
            "a": "5"
          },
          "text": "Då skulle 5 · 5 vara −25, men det är 25. Minustecknet står utanför parentesen, under roten."
        }
      ]
    },
    {
      "id": "aup5-rot-och-tecken-b00ad4d3",
      "part": "rot-och-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "√{-(6)^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Kvadraten räknas först och minustecknet sedan: under roten står −36."
        },
        {
          "text": "Inget reellt tal gånger sig självt ger ett negativt tal, så roten finns inte bland de reella talen."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Då skulle (−6) · (−6) vara −36, men det är 36."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "Då skulle 6 · 6 vara −36, men det är 36. Minustecknet står utanför parentesen, under roten."
        }
      ]
    },
    {
      "id": "aup5-rot-och-tecken-4b6333cf",
      "part": "rot-och-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "√{(-4)^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Under roten står (−4)², och två negativa faktorer ger ett positivt tal."
        },
        {
          "math": "√{(-4)^2} = √16 = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-4"
          },
          "text": "√16 är det positiva talet. Kvadraten har redan tagit bort minustecknet."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "Det är (−4)². Roten är kvar: √16 = 4."
        }
      ]
    },
    {
      "id": "aup5-rot-och-tecken-dd44dec0",
      "part": "rot-och-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "√{(-10)^2} = [a]"
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
          "text": "Under roten står (−10)², och två negativa faktorer ger ett positivt tal."
        },
        {
          "math": "√{(-10)^2} = √100 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "√100 är det positiva talet. Kvadraten har redan tagit bort minustecknet."
        },
        {
          "answers": {
            "a": "100"
          },
          "text": "Det är (−10)². Roten är kvar: √100 = 10."
        }
      ]
    },
    {
      "id": "aup5-rot-och-tecken-37a23d0e",
      "part": "rot-och-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "√{(-7)^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Under roten står (−7)², och två negativa faktorer ger ett positivt tal."
        },
        {
          "math": "√{(-7)^2} = √49 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-7"
          },
          "text": "√49 är det positiva talet. Kvadraten har redan tagit bort minustecknet."
        },
        {
          "answers": {
            "a": "49"
          },
          "text": "Det är (−7)². Roten är kvar: √49 = 7."
        }
      ]
    },
    {
      "id": "aup5-rot-och-tecken-eccaffcf",
      "part": "rot-och-tecken",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "√{-(2)^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Kvadraten räknas först och minustecknet sedan: under roten står −4."
        },
        {
          "text": "Inget reellt tal gånger sig självt ger ett negativt tal, så roten finns inte bland de reella talen."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2"
          },
          "text": "Då skulle (−2) · (−2) vara −4, men det är 4."
        },
        {
          "answers": {
            "a": "2"
          },
          "text": "Då skulle 2 · 2 vara −4, men det är 4. Minustecknet står utanför parentesen, under roten."
        }
      ]
    },
    {
      "id": "aup5-rot-i-kvadrat-f5a53bba",
      "part": "rot-i-kvadrat",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "(-√10)^2 = [a]"
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
          "text": "(−√10)² är (−√10) · (−√10). Två negativa faktorer ger ett positivt tal."
        },
        {
          "math": "(-√10)^2 = √10 · √10 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-10"
          },
          "text": "Minustecknet står inne i parentesen, så det kvadreras också: (−√10) · (−√10) är positivt."
        }
      ]
    },
    {
      "id": "aup5-rot-i-kvadrat-83c4b278",
      "part": "rot-i-kvadrat",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "(-√5)^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "(−√5)² är (−√5) · (−√5). Två negativa faktorer ger ett positivt tal."
        },
        {
          "math": "(-√5)^2 = √5 · √5 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Minustecknet står inne i parentesen, så det kvadreras också: (−√5) · (−√5) är positivt."
        }
      ]
    },
    {
      "id": "aup5-rot-i-kvadrat-14c724c3",
      "part": "rot-i-kvadrat",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "(√{(-7)})^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√(−7) finns inte bland de reella talen: inget reellt tal gånger sig självt är negativt."
        },
        {
          "text": "Då finns inte heller dess kvadrat. Parentesen räknas först, så det går inte att ta bort roten med kvadraten."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-7"
          },
          "text": "Regeln (√a)² = a gäller bara när roten finns, och √(−7) finns inte bland de reella talen."
        },
        {
          "answers": {
            "a": "7"
          },
          "text": "Roten finns inte bland de reella talen, så det finns inget att kvadrera."
        }
      ]
    },
    {
      "id": "aup5-rot-i-kvadrat-8a7e12a6",
      "part": "rot-i-kvadrat",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "(√{(-2)})^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√(−2) finns inte bland de reella talen: inget reellt tal gånger sig självt är negativt."
        },
        {
          "text": "Då finns inte heller dess kvadrat. Parentesen räknas först, så det går inte att ta bort roten med kvadraten."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2"
          },
          "text": "Regeln (√a)² = a gäller bara när roten finns, och √(−2) finns inte bland de reella talen."
        },
        {
          "answers": {
            "a": "2"
          },
          "text": "Roten finns inte bland de reella talen, så det finns inget att kvadrera."
        }
      ]
    },
    {
      "id": "aup5-rot-i-kvadrat-25574251",
      "part": "rot-i-kvadrat",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "(√{(-5)})^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√(−5) finns inte bland de reella talen: inget reellt tal gånger sig självt är negativt."
        },
        {
          "text": "Då finns inte heller dess kvadrat. Parentesen räknas först, så det går inte att ta bort roten med kvadraten."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-5"
          },
          "text": "Regeln (√a)² = a gäller bara när roten finns, och √(−5) finns inte bland de reella talen."
        },
        {
          "answers": {
            "a": "5"
          },
          "text": "Roten finns inte bland de reella talen, så det finns inget att kvadrera."
        }
      ]
    },
    {
      "id": "aup5-rot-i-kvadrat-4ce718f3",
      "part": "rot-i-kvadrat",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "(-√6)^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "(−√6)² är (−√6) · (−√6). Två negativa faktorer ger ett positivt tal."
        },
        {
          "math": "(-√6)^2 = √6 · √6 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Minustecknet står inne i parentesen, så det kvadreras också: (−√6) · (−√6) är positivt."
        }
      ]
    },
    {
      "id": "aup5-rot-produkt-c55e479c",
      "part": "rot-produkt",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "4√{-5} · √{-5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√(−5) finns inte bland de reella talen, så produkten har inget reellt värde."
        },
        {
          "text": "Regeln √a · √a = a gäller bara när a inte är negativt."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-20"
          },
          "text": "Det ser ut som 4 · (−5), men √(−5) finns inte bland de reella talen, så regeln går inte att använda."
        },
        {
          "answers": {
            "a": "20"
          },
          "text": "√(−5) finns inte bland de reella talen, så det går inte att räkna med den."
        }
      ]
    },
    {
      "id": "aup5-rot-produkt-21b54961",
      "part": "rot-produkt",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "3√2 · √2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√2 · √2 = 2, så det som är kvar är 3 · 2."
        },
        {
          "math": "3√2 · √2 = 3 · 2 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3√2"
          },
          "text": "√2 · √2 är 2, inte √2."
        },
        {
          "answers": {
            "a": "12"
          },
          "text": "√2 · √2 är 2, inte 4."
        }
      ]
    },
    {
      "id": "aup5-rot-produkt-0ec22fd0",
      "part": "rot-produkt",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "4√5 · √5 = [a]"
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
          "text": "√5 · √5 = 5, så det som är kvar är 4 · 5."
        },
        {
          "math": "4√5 · √5 = 4 · 5 = 20"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4√5"
          },
          "text": "√5 · √5 är 5, inte √5."
        },
        {
          "answers": {
            "a": "100"
          },
          "text": "√5 · √5 är 5, inte 25."
        }
      ]
    },
    {
      "id": "aup5-rot-produkt-c3b7f19b",
      "part": "rot-produkt",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "3√{-2} · √{-2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√(−2) finns inte bland de reella talen, så produkten har inget reellt värde."
        },
        {
          "text": "Regeln √a · √a = a gäller bara när a inte är negativt."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-6"
          },
          "text": "Det ser ut som 3 · (−2), men √(−2) finns inte bland de reella talen, så regeln går inte att använda."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "√(−2) finns inte bland de reella talen, så det går inte att räkna med den."
        }
      ]
    },
    {
      "id": "aup5-rot-produkt-a0969b72",
      "part": "rot-produkt",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "2√{-7} · √{-7} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Saknar reell lösning"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√(−7) finns inte bland de reella talen, så produkten har inget reellt värde."
        },
        {
          "text": "Regeln √a · √a = a gäller bara när a inte är negativt."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-14"
          },
          "text": "Det ser ut som 2 · (−7), men √(−7) finns inte bland de reella talen, så regeln går inte att använda."
        },
        {
          "answers": {
            "a": "14"
          },
          "text": "√(−7) finns inte bland de reella talen, så det går inte att räkna med den."
        }
      ]
    },
    {
      "id": "aup5-rot-produkt-a9b67eb5",
      "part": "rot-produkt",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "5√3 · √3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "15"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "√3 · √3 = 3, så det som är kvar är 5 · 3."
        },
        {
          "math": "5√3 · √3 = 5 · 3 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5√3"
          },
          "text": "√3 · √3 är 3, inte √3."
        },
        {
          "answers": {
            "a": "45"
          },
          "text": "√3 · √3 är 3, inte 9."
        }
      ]
    }
  ]
};
