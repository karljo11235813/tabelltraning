// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAu5.
export default {
  "code": "TAu5",
  "parts": [
    {
      "id": "potenser",
      "title": "Förkorta potenser",
      "labels": [
        "1a",
        "1b",
        "3a",
        "3b"
      ]
    },
    {
      "id": "brakstreck",
      "title": "Gemensamt bråkstreck",
      "labels": [
        "2a",
        "2b",
        "6a",
        "6b",
        "7a",
        "7b"
      ]
    },
    {
      "id": "faktorisera",
      "title": "Faktorisera och förkorta",
      "labels": [
        "4a",
        "4b",
        "5a",
        "5b"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tau5-potenser-35a514f6",
      "part": "potenser",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{5a^3 · (a + b)^4|10a · (a + b)^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "a^2(a + b)^2/2",
            "(a^4 + 2a^3 · b + a^2 · b^2)/2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Parentesen är en bas som alla andra: (a + b)⁴/(a + b)² = (a + b)²."
        },
        {
          "text": "Talen: 5/10 = 1/2. a³/a = a²."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau5-potenser-7d98b057",
      "part": "potenser",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{(2a^2)^3|4a^4} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2a^2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "(2a²)³ = 2³ · a⁶ = 8a⁶. 8a⁶/(4a⁴) = 2a²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "a"
          },
          "text": "(2a²)³ = 8a⁶: både 2:an och a² upphöjs till 3."
        }
      ]
    },
    {
      "id": "tau5-potenser-cb06ff81",
      "part": "potenser",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{2x^3 · y^4|x^5 · y} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2y^3/x^2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Förkorta varje bas för sig: x³/x⁵ = 1/x² och y⁴/y = y³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2x^2 · y^3"
          },
          "text": "x³/x⁵ är 1/x²: x hamnar i nämnaren, eftersom det finns fler x under bråkstrecket."
        }
      ]
    },
    {
      "id": "tau5-potenser-b567ccba",
      "part": "potenser",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{6a^5 · 2b^2|a^2 · b^6} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12a^3/b^4"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Talen: 6 · 2 = 12. Basen a: a⁵/a² = a³. Basen b: b²/b⁶ = 1/b⁴."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12a^3 · b^4"
          },
          "text": "b²/b⁶ är 1/b⁴: b hamnar i nämnaren."
        }
      ]
    },
    {
      "id": "tau5-potenser-96838173",
      "part": "potenser",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{(3x)^2 · y^3|x · y^5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9x/y^2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "(3x)² = 9x². Sedan: x²/x = x och y³/y⁵ = 1/y²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3x/y^2"
          },
          "text": "(3x)² = 3x · 3x = 9x²: också 3:an kvadreras."
        }
      ]
    },
    {
      "id": "tau5-potenser-8076aab9",
      "part": "potenser",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{4x^5 · y^2|8x^2 · y^5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x^3/(2y^3)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Talen: 4/8 = 1/2. x⁵/x² = x³ och y²/y⁵ = 1/y³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2x^3/y^3"
          },
          "text": "4/8 är 1/2, så 2:an hamnar i nämnaren."
        }
      ]
    },
    {
      "id": "tau5-brakstreck-6c140186",
      "part": "brakstreck",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{1|x + 1} + {1|x} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(2x + 1)/(x(x + 1))",
            "(2x + 1)/(x^2 + x)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: x(x + 1). 1/(x + 1) = x/(x(x + 1)) och 1/x = (x + 1)/(x(x + 1))."
        },
        {
          "text": "Täljarna tillsammans: x + x + 1 = 2x + 1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/(2x + 1)"
          },
          "text": "Täljare och nämnare läggs inte ihop var för sig. Gör nämnarna lika först."
        }
      ]
    },
    {
      "id": "tau5-brakstreck-51497623",
      "part": "brakstreck",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{2a|a - b} - {2b|a - b} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Samma nämnare: (2a − 2b)/(a − b) = 2(a − b)/(a − b) = 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "Täljaren är 2a − 2b = 2(a − b), två gånger nämnaren: kvoten är 2."
        }
      ]
    },
    {
      "id": "tau5-brakstreck-b88ceca4",
      "part": "brakstreck",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{1|x} + {3|2x} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5/(2x)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: 1/x = 2/(2x). 2/(2x) + 3/(2x) = 5/(2x)."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4/(3x)"
          },
          "text": "Täljare och nämnare läggs inte ihop var för sig: 1/x = 2/(2x) först."
        }
      ]
    },
    {
      "id": "tau5-brakstreck-e18f61ad",
      "part": "brakstreck",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{x|3} - {2|x} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(x^2 - 6)/(3x)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: 3x. x/3 = x²/(3x) och 2/x = 6/(3x)."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau5-brakstreck-36cb2196",
      "part": "brakstreck",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{2|x} + {3|y} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(2y + 3x)/(xy)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Gör nämnarna lika: xy. 2/x = 2y/(xy) och 3/y = 3x/(xy)."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/(x + y)"
          },
          "text": "Täljare och nämnare läggs inte ihop var för sig. Gör nämnarna lika först."
        }
      ]
    },
    {
      "id": "tau5-brakstreck-840d576a",
      "part": "brakstreck",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{1|x^2} + 1 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(1 + x^2)/x^2"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "1 = x²/x². 1/x² + x²/x² = (1 + x²)/x²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/x^2"
          },
          "text": "1 är x²/x², inte 1/x²."
        }
      ]
    },
    {
      "id": "tau5-faktorisera-2d29f001",
      "part": "faktorisera",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{3x(x - y)^2|6y(x^2 - y^2)} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x(x - y)/(2y(x + y))",
            "(x^2 - xy)/(2y(x + y))",
            "x(x - y)/(2xy + 2y^2)",
            "(x^2 - xy)/(2xy + 2y^2)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "x² − y² = (x + y)(x − y). Förkorta med x − y och med 3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau5-faktorisera-a567e229",
      "part": "faktorisera",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{(a + 3b)^2|2(a^2 - 9b^2)} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(a + 3b)/(2(a - 3b))",
            "(a + 3b)/(2a - 6b)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Konjugatregeln: a² − 9b² = (a + 3b)(a − 3b)."
        },
        {
          "text": "Förkorta med a + 3b."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau5-faktorisera-47ba3cd5",
      "part": "faktorisera",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{a^2 - 9|a - 3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "a + 3"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Konjugatregeln: a² − 9 = (a + 3)(a − 3)."
        },
        {
          "text": "Förkorta med a − 3: a + 3 är kvar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "a + 3/a"
          },
          "text": "Det går inte att stryka termer i en summa. Faktorisera först: a² − 9 = (a + 3)(a − 3)."
        }
      ]
    },
    {
      "id": "tau5-faktorisera-f3ecced2",
      "part": "faktorisera",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{6(a + b)^2 · (a - b)|9(a^2 - b^2)} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2(a + b)/3",
            "(2a + 2b)/3"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Konjugatregeln: a² − b² = (a + b)(a − b)."
        },
        {
          "text": "Förkorta med (a + b)(a − b) och med 3: 2(a + b)/3."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau5-faktorisera-6494067d",
      "part": "faktorisera",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{(x^2 - 4)^2|(x + 2)^3 · (x - 2)} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "(x - 2)/(x + 2)"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "x² − 4 = (x + 2)(x − 2), så täljaren är (x + 2)²(x − 2)²."
        },
        {
          "text": "Förkorta med (x + 2)² och x − 2."
        }
      ],
      "mistakes": []
    },
    {
      "id": "tau5-faktorisera-56105731",
      "part": "faktorisera",
      "text": "Förenkla så långt som möjligt",
      "points": "each",
      "rows": [
        "{x^2 - 1|x + 1} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "x - 1"
          ],
          "algebra": "simplified"
        }
      },
      "solution": [
        {
          "text": "Konjugatregeln: x² − 1 = (x + 1)(x − 1)."
        },
        {
          "text": "Förkorta med x + 1: x − 1 är kvar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "x"
          },
          "text": "Det går inte att stryka termer i en summa. Faktorisera först: x² − 1 = (x + 1)(x − 1)."
        }
      ]
    }
  ]
};
