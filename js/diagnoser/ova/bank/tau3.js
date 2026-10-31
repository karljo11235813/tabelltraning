// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAu3.
export default {
  "code": "TAu3",
  "parts": [
    {
      "id": "linjara",
      "title": "Linjära uttryck",
      "labels": [
        "1a",
        "1b",
        "2a",
        "2b",
        "3a",
        "3b"
      ]
    },
    {
      "id": "polynom",
      "title": "Polynom",
      "labels": [
        "4a",
        "4b",
        "5a",
        "5b",
        "6a",
        "6b"
      ]
    },
    {
      "id": "rationella",
      "title": "Enkla rationella uttryck",
      "labels": [
        "7a",
        "7b"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tau3-linjara-61f5f217",
      "part": "linjara",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "5 - (3x + 5) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "-3x"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Minustecknet före parentesen gäller båda termerna i den: 5 − 3x − 5."
        },
        {
          "text": "5 − 5 = 0, så −3x är kvar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10 - 3x"
          },
          "text": "Minustecknet gäller båda termerna i parentesen: 5 − 3x − 5."
        }
      ]
    },
    {
      "id": "tau3-linjara-e11d378b",
      "part": "linjara",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "4x + 7 - x - 2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3x + 5"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Lägg ihop x-termerna för sig och talen för sig: 4x − x = 3x och 7 − 2 = 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5x + 5"
          },
          "text": "Det står − x: 4x − x = 3x."
        }
      ]
    },
    {
      "id": "tau3-linjara-6d8f8297",
      "part": "linjara",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2 + 3(x + 1) + x = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4x + 5"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "3 gånger hela parentesen: 3(x + 1) = 3x + 3."
        },
        {
          "text": "2 + 3x + 3 + x = 4x + 5."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4x + 3"
          },
          "text": "3 gånger hela parentesen: 3x + 3, inte 3x + 1."
        }
      ]
    },
    {
      "id": "tau3-linjara-a52b0052",
      "part": "linjara",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "3x + 2 - 6x + 5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7 - 3x"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "x-termerna: 3x − 6x = −3x. Talen: 2 + 5 = 7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3x + 7"
          },
          "text": "Det står − 6x: 3x − 6x = −3x."
        }
      ]
    },
    {
      "id": "tau3-linjara-98725a4c",
      "part": "linjara",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "4x - (2 - x) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5x - 2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Minustecknet före parentesen byter tecken på båda termerna: −(2 − x) = −2 + x."
        },
        {
          "text": "4x − 2 + x = 5x − 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3x - 2"
          },
          "text": "−(2 − x) = −2 + x: minus gånger minus blir plus."
        }
      ]
    },
    {
      "id": "tau3-linjara-8d5fce07",
      "part": "linjara",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "8x - 3(2 - x) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "11x - 6"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "−3 gånger båda termerna: −3 · 2 = −6 och −3 · (−x) = 3x."
        },
        {
          "text": "8x − 6 + 3x = 11x − 6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5x - 6"
          },
          "text": "−3 · (−x) = +3x: minus gånger minus blir plus."
        }
      ]
    },
    {
      "id": "tau3-polynom-8b981565",
      "part": "polynom",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "3x^2 + 2 - x^2 - 5 + x^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3x^2 - 3"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Lägg ihop x²-termerna för sig och talen för sig: 3x² − x² + x² = 3x² och 2 − 5 = −3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5x^2 - 3"
          },
          "text": "Det står − x²: 3x² − x² + x² = 3x²."
        }
      ]
    },
    {
      "id": "tau3-polynom-a3636394",
      "part": "polynom",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2a^2 · 4a = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8a^3"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Talen för sig och bokstäverna för sig: 2 · 4 = 8 och a² · a = a³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8a^2"
          },
          "text": "a² · a är a · a · a = a³: exponenterna läggs ihop."
        }
      ]
    },
    {
      "id": "tau3-polynom-3cbf0ac1",
      "part": "polynom",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2 - 3(x - 4) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "14 - 3x"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "−3 gånger båda termerna: −3 · x = −3x och −3 · (−4) = 12."
        },
        {
          "text": "2 − 3x + 12 = 14 − 3x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "-3x - 10"
          },
          "text": "−3 · (−4) = +12: minus gånger minus blir plus."
        }
      ]
    },
    {
      "id": "tau3-polynom-3ff38a91",
      "part": "polynom",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "3x^2 + x(x + 2) = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4x^2 + 2x"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "x gånger hela parentesen: x · x + x · 2 = x² + 2x."
        },
        {
          "text": "3x² + x² + 2x = 4x² + 2x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4x^2 + 2"
          },
          "text": "x gånger båda termerna i parentesen: x · 2 = 2x."
        }
      ]
    },
    {
      "id": "tau3-polynom-95dfcab0",
      "part": "polynom",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2ab · a^2 - a^3 · b = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "a^3 · b"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "2ab · a² = 2a³b. Sedan är det 2a³b − a³b, två och en av samma sort: a³b."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2a^3 · b"
          },
          "text": "Det står − a³ · b efter: 2a³b − a³b = a³b."
        }
      ]
    },
    {
      "id": "tau3-polynom-e0c38903",
      "part": "polynom",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "4x^3 + 2x^3 - 3x^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3x^3"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Det är samma sorts term, x³: 4 + 2 − 3 = 3, så 3x³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3x^9"
          },
          "text": "Exponenten ändras inte när termer läggs ihop: 4 st x³ + 2 st x³ − 3 st x³ är 3 st x³."
        }
      ]
    },
    {
      "id": "tau3-rationella-52d298f5",
      "part": "rationella",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{x|4} + {y|2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(x + 2y)/4"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: y/2 = 2y/4."
        },
        {
          "text": "x/4 + 2y/4 = (x + 2y)/4."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(x + y)/6"
          },
          "text": "Täljare och nämnare läggs inte ihop var för sig. Gör nämnarna lika först."
        }
      ]
    },
    {
      "id": "tau3-rationella-e5d75bb7",
      "part": "rationella",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{5|x} - {2|x} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/x"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Samma nämnare: 5 − 2 = 3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau3-rationella-0a0bd0b7",
      "part": "rationella",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{x|2} + {x|3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5x/6"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: x/2 = 3x/6 och x/3 = 2x/6. Tillsammans 5x/6."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2x/5"
          },
          "text": "Täljare och nämnare läggs inte ihop var för sig. Gör nämnarna lika först."
        }
      ]
    },
    {
      "id": "tau3-rationella-b69a71b5",
      "part": "rationella",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{2|x} + {5|x} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7/x"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Samma nämnare: lägg ihop täljarna, 2 + 5 = 7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7/(2x)"
          },
          "text": "Nämnaren x ändras inte när täljarna läggs ihop."
        }
      ]
    },
    {
      "id": "tau3-rationella-473f9187",
      "part": "rationella",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{a|2} - {a|5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3a/10"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: a/2 = 5a/10 och a/5 = 2a/10. 5a/10 − 2a/10 = 3a/10."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau3-rationella-82d31db7",
      "part": "rationella",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{x|3} + {x|6} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x/2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: x/3 = 2x/6. 2x/6 + x/6 = 3x/6 = x/2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2x/9"
          },
          "text": "Täljare och nämnare läggs inte ihop var för sig. Gör nämnarna lika först."
        }
      ]
    }
  ]
};
