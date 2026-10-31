// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAe4.
export default {
  "code": "TAe4",
  "parts": [
    {
      "id": "linjara",
      "title": "Linjära ekvationer",
      "labels": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    {
      "id": "andragrad",
      "title": "Andragradsekvationer",
      "labels": [
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tae4-linjara-deb4414d",
      "part": "linjara",
      "kind": "pick",
      "text": "Vad gäller för ekvationen 5x − 3 = 5x + 3?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "a"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Dra bort 5x: −3 = 3, och det stämmer aldrig."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": ""
          },
          "text": "Dra bort 5x från båda sidor: −3 = 3. Det stämmer inte för något x."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Sidorna skiljer sig alltid med 6, så de är aldrig lika."
        }
      ]
    },
    {
      "id": "tae4-linjara-5529c644",
      "part": "linjara",
      "kind": "pick",
      "text": "Vad gäller för ekvationen 6(x + 1) − 2 = 6x + 4?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Vänster sida: 6x + 6 − 2 = 6x + 4, samma som höger. Det stämmer för alla x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "Förenkla vänster sida: 6x + 6 − 2 = 6x + 4, samma som höger."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": ""
          },
          "text": "Det stämmer inte bara för ett x: sidorna är samma uttryck, så alla x fungerar."
        }
      ]
    },
    {
      "id": "tae4-linjara-a70c19e9",
      "part": "linjara",
      "kind": "pick",
      "text": "Vad gäller för ekvationen 4x + 2 = 2(2x + 1)?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Multiplicera in 2: höger sida är 4x + 2, samma som vänster. Det stämmer för alla x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "Multiplicera in 2: 2(2x + 1) = 4x + 2, samma som vänster sida."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": ""
          },
          "text": "Det stämmer inte bara för ett x: sidorna är samma uttryck, så alla x fungerar."
        }
      ]
    },
    {
      "id": "tae4-linjara-a247337c",
      "part": "linjara",
      "kind": "pick",
      "text": "Vad gäller för ekvationen 2x + 7 = 5x + 7?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Dra bort 2x och 7: 0 = 3x, så x = 0. Ekvationen har en lösning."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "x = 0 fungerar: 7 = 7."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Bara x = 0 fungerar. Pröva x = 1: 9 är inte 12."
        }
      ]
    },
    {
      "id": "tae4-linjara-d83ec09b",
      "part": "linjara",
      "kind": "pick",
      "text": "Vad gäller för ekvationen x + 5 = 0?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "x = −5 gör vänster sida 0: ekvationen har en lösning."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "x = −5 fungerar: −5 + 5 = 0."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Bara x = −5 fungerar. Pröva x = 0: 0 + 5 är inte 0."
        }
      ]
    },
    {
      "id": "tae4-linjara-417e771e",
      "part": "linjara",
      "kind": "pick",
      "text": "Vad gäller för ekvationen 3x − 1 = 3(x − 1)?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "a"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Multiplicera in 3: 3x − 1 = 3x − 3. Dra bort 3x: −1 = −3, och det stämmer aldrig."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": ""
          },
          "text": "Dra bort 3x från båda sidor: −1 = −3. Det stämmer inte för något x."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Sidorna är inte samma uttryck: 3(x − 1) = 3x − 3, inte 3x − 1."
        }
      ]
    },
    {
      "id": "tae4-andragrad-0144e4a9",
      "part": "andragrad",
      "kind": "pick",
      "text": "Vad gäller för ekvationen (x + 3)(x − 3) = x² − 9?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Konjugatregeln: (x + 3)(x − 3) = x² − 9, samma som höger. Det stämmer för alla x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "Multiplicera ut vänster sida: (x + 3)(x − 3) = x² − 9, samma som höger."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": ""
          },
          "text": "Det stämmer inte bara för några x: sidorna är samma uttryck, så alla x fungerar."
        }
      ]
    },
    {
      "id": "tae4-andragrad-58ff063c",
      "part": "andragrad",
      "kind": "pick",
      "text": "Vad gäller för ekvationen x(x − 5) = 0?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "En produkt är 0 när en faktor är 0: x = 0 eller x = 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "x = 0 fungerar: 0 · (−5) = 0."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Bara 0 och 5 fungerar. Pröva x = 1: 1 · (−4) är inte 0."
        }
      ]
    },
    {
      "id": "tae4-andragrad-52897ed0",
      "part": "andragrad",
      "kind": "pick",
      "text": "Vad gäller för ekvationen x² + 4 = 0?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "a"
      ],
      "points": "one",
      "solution": [
        {
          "text": "x² är aldrig negativt, så x² + 4 är minst 4 och aldrig 0."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": ""
          },
          "text": "x² + 4 = 0 kräver x² = −4, men ett tal i kvadrat är aldrig negativt."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Inget x fungerar: x² + 4 är alltid minst 4."
        }
      ]
    },
    {
      "id": "tae4-andragrad-ea70e35f",
      "part": "andragrad",
      "kind": "pick",
      "text": "Vad gäller för ekvationen (x − 2)² + 1 = 0?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "a"
      ],
      "points": "one",
      "solution": [
        {
          "text": "(x − 2)² är aldrig negativt, så vänster sida är minst 1 och aldrig 0."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": ""
          },
          "text": "(x − 2)² = −1 går inte: en kvadrat är aldrig negativ."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Inget x fungerar: vänster sida är alltid minst 1."
        }
      ]
    },
    {
      "id": "tae4-andragrad-1b7878ef",
      "part": "andragrad",
      "kind": "pick",
      "text": "Vad gäller för ekvationen x² − 9 = 0?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "x² = 9 har lösningarna 3 och −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "x = 3 fungerar: 9 − 9 = 0."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Bara 3 och −3 fungerar. Pröva x = 0: −9 är inte 0."
        }
      ]
    },
    {
      "id": "tae4-andragrad-8169e663",
      "part": "andragrad",
      "kind": "pick",
      "text": "Vad gäller för ekvationen x² = (x − 2)²?",
      "items": [
        {
          "id": "a",
          "markup": "Ekvationen har ingen lösning"
        },
        {
          "id": "b",
          "markup": "Ekvationen har lösning"
        },
        {
          "id": "c",
          "markup": "Ekvationen har oändligt många lösningar"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Utveckla: x² = x² − 4x + 4. Dra bort x²: 0 = −4x + 4, så x = 1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": ""
          },
          "text": "x = 1 fungerar: 1² = 1 och (1 − 2)² = 1."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1"
          },
          "text": "Bara x = 1 fungerar. Pröva x = 0: 0 är inte 4."
        }
      ]
    }
  ]
};
