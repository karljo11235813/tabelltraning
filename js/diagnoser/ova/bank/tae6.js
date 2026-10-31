// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAe6.
export default {
  "code": "TAe6",
  "parts": [
    {
      "id": "kvadrat",
      "title": "x² är ett tal",
      "labels": [
        "1a",
        "1b",
        "1c"
      ]
    },
    {
      "id": "produkt",
      "title": "En produkt är 0",
      "labels": [
        "2a",
        "2b",
        "2c"
      ]
    },
    {
      "id": "byte",
      "title": "En parentes i kvadrat",
      "labels": [
        "3a",
        "3b",
        "3c"
      ]
    },
    {
      "id": "gissa",
      "title": "Gissa och pröva",
      "labels": [
        "4a",
        "4b",
        "4c"
      ]
    },
    {
      "id": "en-rot-kand",
      "title": "En rot är känd",
      "labels": [
        "5a",
        "5b",
        "5c"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tae6-kvadrat-70cf11c6",
      "part": "kvadrat",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 - 3 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "√3"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-√3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Lägg till 3: x² = 3. Lösningarna är √3 och −√3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "√3",
            "b": ""
          },
          "text": "Också (−√3)² = 3: ekvationen har två lösningar."
        }
      ]
    },
    {
      "id": "tae6-kvadrat-5c77b6a1",
      "part": "kvadrat",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 = 49",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "7"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-7"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Vilka tal gånger sig själva blir 49? 7 och −7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7",
            "b": ""
          },
          "text": "Också (−7)² = 49: ekvationen har två lösningar."
        }
      ]
    },
    {
      "id": "tae6-kvadrat-b75bf73b",
      "part": "kvadrat",
      "text": "Lös ekvationen.",
      "rows": [
        "2x^2 = 32",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "4"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-4"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Dela med 2: x² = 16. Lösningarna är 4 och −4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16",
            "b": "-16"
          },
          "text": "x² = 16 ger x = 4 eller x = −4, inte 16."
        }
      ]
    },
    {
      "id": "tae6-kvadrat-c6327fa1",
      "part": "kvadrat",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 = 9",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "3"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Vilka tal gånger sig själva blir 9? 3 · 3 = 9 och (−3) · (−3) = 9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3",
            "b": ""
          },
          "text": "Också (−3)² = 9: ekvationen har två lösningar."
        }
      ]
    },
    {
      "id": "tae6-kvadrat-70df4fec",
      "part": "kvadrat",
      "text": "Lös ekvationen.",
      "rows": [
        "5x^2 = 45",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "3"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Dela med 5: x² = 9. Lösningarna är 3 och −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3",
            "b": ""
          },
          "text": "Också (−3)² = 9: ekvationen har två lösningar."
        }
      ]
    },
    {
      "id": "tae6-kvadrat-70e3cd3a",
      "part": "kvadrat",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 - 7 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "√7"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-√7"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Lägg till 7: x² = 7. Lösningarna är √7 och −√7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7",
            "b": "-7"
          },
          "text": "x² = 7 ger x = √7 eller x = −√7: 7 är x², inte x."
        }
      ]
    },
    {
      "id": "tae6-produkt-73791371",
      "part": "produkt",
      "text": "Lös ekvationen.",
      "rows": [
        "(x + 5)^2 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "-5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-5",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "(x + 5)² = 0 bara när x + 5 = 0: x = −5. Det är samma rot två gånger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5",
            "b": ""
          },
          "text": "x + 5 = 0 när x = −5, inte 5."
        }
      ]
    },
    {
      "id": "tae6-produkt-d525d20d",
      "part": "produkt",
      "text": "Lös ekvationen.",
      "rows": [
        "(x + 2)(x - 1) = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "1"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "En produkt är 0 när någon faktor är 0: x + 2 = 0 eller x − 1 = 0."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2",
            "b": "-1"
          },
          "text": "x + 2 = 0 när x = −2, och x − 1 = 0 när x = 1: tecknen byts."
        }
      ]
    },
    {
      "id": "tae6-produkt-9f7d3a12",
      "part": "produkt",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 - 5x = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "0"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "5"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Bryt ut x: x(x − 5) = 0. Så x = 0 eller x = 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5",
            "b": ""
          },
          "text": "Också x = 0 fungerar: 0 − 0 = 0. Bryt ut x: x(x − 5) = 0."
        }
      ]
    },
    {
      "id": "tae6-produkt-a7909029",
      "part": "produkt",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 + 4x = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "0"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-4"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Bryt ut x: x(x + 4) = 0. Så x = 0 eller x = −4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0",
            "b": "4"
          },
          "text": "x + 4 = 0 när x = −4, inte 4."
        }
      ]
    },
    {
      "id": "tae6-produkt-706133e6",
      "part": "produkt",
      "text": "Lös ekvationen.",
      "rows": [
        "(x - 4)^2 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "4"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "4",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "(x − 4)² = 0 bara när x − 4 = 0: x = 4. Det är samma rot två gånger."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-produkt-8db917af",
      "part": "produkt",
      "text": "Lös ekvationen.",
      "rows": [
        "x(x - 3) = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "0"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "En produkt är 0 när någon faktor är 0: x = 0 eller x − 3 = 0."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3",
            "b": ""
          },
          "text": "Också x = 0 gör produkten 0: 0 · (−3) = 0."
        }
      ]
    },
    {
      "id": "tae6-byte-fead5a61",
      "part": "byte",
      "text": "Lös ekvationen.",
      "rows": [
        "(x - 5)^2 - 1 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "6"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "4"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Lägg till 1: (x − 5)² = 1. Parentesen är 1 eller −1: x = 6 eller x = 4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6",
            "b": ""
          },
          "text": "Parentesen kan också vara −1: x − 5 = −1 ger x = 4."
        }
      ]
    },
    {
      "id": "tae6-byte-05fb074f",
      "part": "byte",
      "text": "Lös ekvationen.",
      "rows": [
        "(x - 2)^2 = 9",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-1"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Parentesen är 3 eller −3: x − 2 = 3 ger x = 5, och x − 2 = −3 ger x = −1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5",
            "b": ""
          },
          "text": "Parentesen kan också vara −3: x − 2 = −3 ger x = −1."
        }
      ]
    },
    {
      "id": "tae6-byte-baf74243",
      "part": "byte",
      "text": "Lös ekvationen.",
      "rows": [
        "(x - 4)^2 = 3",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "4 + √3"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "4 - √3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Parentesen är √3 eller −√3: x = 4 + √3 eller x = 4 − √3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-byte-6722d431",
      "part": "byte",
      "text": "Lös ekvationen.",
      "rows": [
        "(x + 2)^2 = 5",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "-2 + √5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-2 - √5"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Parentesen är √5 eller −√5: x = −2 + √5 eller x = −2 − √5."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-byte-8300a541",
      "part": "byte",
      "text": "Lös ekvationen.",
      "rows": [
        "(x - 3)^2 - 16 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "7"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-1"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Lägg till 16: (x − 3)² = 16. Parentesen är 4 eller −4: x = 7 eller x = −1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7",
            "b": ""
          },
          "text": "Parentesen kan också vara −4: x − 3 = −4 ger x = −1."
        }
      ]
    },
    {
      "id": "tae6-byte-c8eaee51",
      "part": "byte",
      "text": "Lös ekvationen.",
      "rows": [
        "(x + 1)^2 = 4",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "1"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Parentesen är 2 eller −2: x + 1 = 2 ger x = 1, och x + 1 = −2 ger x = −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": ""
          },
          "text": "Parentesen kan också vara −2: x + 1 = −2 ger x = −3."
        }
      ]
    },
    {
      "id": "tae6-gissa-82abb4a2",
      "part": "gissa",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 - 6x + 8 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "2"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "4"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Sök två tal vars produkt är 8 och summa −6: −2 och −4. Då är (x − 2)(x − 4) = 0, så x = 2 eller x = 4."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-gissa-f2cd9ddc",
      "part": "gissa",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 - 7x + 12 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "3"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "4"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Sök två tal vars produkt är 12 och summa −7: −3 och −4. Då är (x − 3)(x − 4) = 0, så x = 3 eller x = 4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-3",
            "b": "-4"
          },
          "text": "(x − 3)(x − 4) = 0 när x = 3 eller x = 4: tecknen byts."
        }
      ]
    },
    {
      "id": "tae6-gissa-c944768e",
      "part": "gissa",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 + x - 6 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "2"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Sök två tal vars produkt är −6 och summa 1: 3 och −2. Då är (x + 3)(x − 2) = 0, så x = −3 eller x = 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2",
            "b": "3"
          },
          "text": "(x + 3)(x − 2) = 0 när x = −3 eller x = 2: tecknen byts."
        }
      ]
    },
    {
      "id": "tae6-gissa-9544b5b2",
      "part": "gissa",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 + 2x - 8 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "2"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-4"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Sök två tal vars produkt är −8 och summa 2: 4 och −2. Då är (x + 4)(x − 2) = 0, så x = −4 eller x = 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-2",
            "b": "4"
          },
          "text": "(x + 4)(x − 2) = 0 när x = −4 eller x = 2: tecknen byts."
        }
      ]
    },
    {
      "id": "tae6-gissa-729a0f83",
      "part": "gissa",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 - x - 12 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "4"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Sök två tal vars produkt är −12 och summa −1: −4 och 3. Då är (x − 4)(x + 3) = 0, så x = 4 eller x = −3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-gissa-89c29611",
      "part": "gissa",
      "text": "Lös ekvationen.",
      "rows": [
        "x^2 + 5x + 6 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "-2"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "-3"
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "Sök två tal vars produkt är 6 och summa 5: 2 och 3. Då är (x + 2)(x + 3) = 0, så x = −2 eller x = −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2",
            "b": "3"
          },
          "text": "(x + 2)(x + 3) = 0 när x = −2 eller x = −3: tecknen byts."
        }
      ]
    },
    {
      "id": "tae6-en-rot-kand-7223b9b6",
      "part": "en-rot-kand",
      "text": "Lös ekvationen om du vet att en rot är x = 2.",
      "rows": [
        "x^2 - 7x + 10 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "2",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "I x² + px + q = 0 är summan av rötterna −p, här 7."
        },
        {
          "text": "Den ena roten är 2, så den andra är 7 − 2 = 5."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-en-rot-kand-611ef938",
      "part": "en-rot-kand",
      "text": "Lös ekvationen om du vet att en rot är x = 2.",
      "rows": [
        "x^2 - 2,5x + 1 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "0,5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "2",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "I x² + px + q = 0 är summan av rötterna −p, här 2,5."
        },
        {
          "text": "Den ena roten är 2, så den andra är 2,5 − 2 = 0,5."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-en-rot-kand-113df511",
      "part": "en-rot-kand",
      "text": "Lös ekvationen om du vet att en rot är x = 2.",
      "rows": [
        "x^2 - 1,5x - 1 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "-0,5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "2",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "I x² + px + q = 0 är summan av rötterna −p, här 1,5."
        },
        {
          "text": "Den ena roten är 2, så den andra är 1,5 − 2 = −0,5."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-en-rot-kand-0fcae1c1",
      "part": "en-rot-kand",
      "text": "Lös ekvationen om du vet att en rot är x = 2.",
      "rows": [
        "x^2 - 3x + 2 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "1"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "2",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "I x² + px + q = 0 är summan av rötterna −p, här 3."
        },
        {
          "text": "Den ena roten är 2, så den andra är 3 − 2 = 1."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-en-rot-kand-acacc866",
      "part": "en-rot-kand",
      "text": "Lös ekvationen om du vet att en rot är x = 2.",
      "rows": [
        "x^2 - 0,5x - 3 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "-1,5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "2",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "I x² + px + q = 0 är summan av rötterna −p, här 0,5."
        },
        {
          "text": "Den ena roten är 2, så den andra är 0,5 − 2 = −1,5."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tae6-en-rot-kand-524c42b6",
      "part": "en-rot-kand",
      "text": "Lös ekvationen om du vet att en rot är x = 2.",
      "rows": [
        "x^2 + 3x - 10 = 0",
        "x₁ = [a]",
        "x₂ = [b]"
      ],
      "points": "one",
      "roots": true,
      "boxes": {
        "a": {
          "accept": [
            "-5"
          ],
          "roots": true
        },
        "b": {
          "accept": [
            "2",
            ""
          ],
          "roots": true
        }
      },
      "solution": [
        {
          "text": "I x² + px + q = 0 är summan av rötterna −p, här −3."
        },
        {
          "text": "Den ena roten är 2, så den andra är −3 − 2 = −5."
        }
      ],
      "mistakes": []
    }
  ]
};
