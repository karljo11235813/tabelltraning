// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till AUp2.
export default {
  "code": "AUp2",
  "parts": [
    {
      "id": "multiplikation",
      "title": "Multiplicera potenser med samma bas",
      "labels": [
        "1a",
        "1b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla till en potens."
    },
    {
      "id": "exponent-1-0",
      "title": "Exponenten 1 eller 0 i en produkt",
      "labels": [
        "2a",
        "2b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla till en potens."
    },
    {
      "id": "division",
      "title": "Dividera potenser med samma bas",
      "labels": [
        "3a",
        "3b"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber dig förenkla till en potens."
    },
    {
      "id": "tva-baser",
      "title": "Två baser i ett bråk",
      "labels": [
        "4a",
        "4b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    },
    {
      "id": "samma-exponent",
      "title": "Samma exponent, olika baser",
      "labels": [
        "5a"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    },
    {
      "id": "dela-upp-bas",
      "title": "Dela upp en bas",
      "labels": [
        "5b"
      ],
      "formNote": "Det är rätt, men uppgiften säger Beräkna: räkna ut det till ett tal."
    }
  ],
  "tasks": [
    {
      "id": "aup2-multiplikation-41a2628c",
      "part": "multiplikation",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "10^3 · 10^3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "10³ är 3 faktorer 10 och 10³ är 3 faktorer 10, så 10³ · 10³ är 6 faktorer 10."
        },
        {
          "text": "Exponenterna läggs ihop: 3 + 3 = 6."
        },
        {
          "math": "10^3 · 10^3 = 10^6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10^9"
          },
          "text": "Du multiplicerade exponenterna. Men 10³ · 10³ är 3 + 3 = 6 faktorer 10, så exponenterna läggs ihop."
        },
        {
          "answers": {
            "a": "(10·10)^6"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 10, bara fler av dem."
        }
      ]
    },
    {
      "id": "aup2-multiplikation-e8f40ce8",
      "part": "multiplikation",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "7^8 · 7^11 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7^19"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "7⁸ är 8 faktorer 7 och 7¹¹ är 11 faktorer 7, så 7⁸ · 7¹¹ är 19 faktorer 7."
        },
        {
          "text": "Exponenterna läggs ihop: 8 + 11 = 19."
        },
        {
          "math": "7^8 · 7^11 = 7^19"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7^88"
          },
          "text": "Du multiplicerade exponenterna. Men 7⁸ · 7¹¹ är 8 + 11 = 19 faktorer 7, så exponenterna läggs ihop."
        },
        {
          "answers": {
            "a": "(7·7)^19"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 7, bara fler av dem."
        }
      ]
    },
    {
      "id": "aup2-multiplikation-8abec97b",
      "part": "multiplikation",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "12^6 · 12^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12^11"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "12⁶ är 6 faktorer 12 och 12⁵ är 5 faktorer 12, så 12⁶ · 12⁵ är 11 faktorer 12."
        },
        {
          "text": "Exponenterna läggs ihop: 6 + 5 = 11."
        },
        {
          "math": "12^6 · 12^5 = 12^11"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12^30"
          },
          "text": "Du multiplicerade exponenterna. Men 12⁶ · 12⁵ är 6 + 5 = 11 faktorer 12, så exponenterna läggs ihop."
        },
        {
          "answers": {
            "a": "(12·12)^11"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 12, bara fler av dem."
        }
      ]
    },
    {
      "id": "aup2-multiplikation-ad88249b",
      "part": "multiplikation",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "3^3 · 3^8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3^11"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "3³ är 3 faktorer 3 och 3⁸ är 8 faktorer 3, så 3³ · 3⁸ är 11 faktorer 3."
        },
        {
          "text": "Exponenterna läggs ihop: 3 + 8 = 11."
        },
        {
          "math": "3^3 · 3^8 = 3^11"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3^24"
          },
          "text": "Du multiplicerade exponenterna. Men 3³ · 3⁸ är 3 + 8 = 11 faktorer 3, så exponenterna läggs ihop."
        },
        {
          "answers": {
            "a": "(3·3)^11"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 3, bara fler av dem."
        }
      ]
    },
    {
      "id": "aup2-multiplikation-32d9105c",
      "part": "multiplikation",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "5^7 · 5^5 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5^12"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "5⁷ är 7 faktorer 5 och 5⁵ är 5 faktorer 5, så 5⁷ · 5⁵ är 12 faktorer 5."
        },
        {
          "text": "Exponenterna läggs ihop: 7 + 5 = 12."
        },
        {
          "math": "5^7 · 5^5 = 5^12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5^35"
          },
          "text": "Du multiplicerade exponenterna. Men 5⁷ · 5⁵ är 7 + 5 = 12 faktorer 5, så exponenterna läggs ihop."
        },
        {
          "answers": {
            "a": "(5·5)^12"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 5, bara fler av dem."
        }
      ]
    },
    {
      "id": "aup2-multiplikation-64b6ecf7",
      "part": "multiplikation",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "12^5 · 12^4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12^9"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "12⁵ är 5 faktorer 12 och 12⁴ är 4 faktorer 12, så 12⁵ · 12⁴ är 9 faktorer 12."
        },
        {
          "text": "Exponenterna läggs ihop: 5 + 4 = 9."
        },
        {
          "math": "12^5 · 12^4 = 12^9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12^20"
          },
          "text": "Du multiplicerade exponenterna. Men 12⁵ · 12⁴ är 5 + 4 = 9 faktorer 12, så exponenterna läggs ihop."
        },
        {
          "answers": {
            "a": "(12·12)^9"
          },
          "text": "Basen ändras inte: det är fortfarande faktorer 12, bara fler av dem."
        }
      ]
    },
    {
      "id": "aup2-exponent-1-0-56f7f492",
      "part": "exponent-1-0",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2 · 2^2 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2^3"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "2 är 2¹: en enda faktor 2."
        },
        {
          "math": "2 · 2^2 = 2^1 · 2^2 = 2^3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(2·2)^2"
          },
          "text": "Basen ändras inte: 2 · 2² är 2 + 1 = 3 faktorer 2."
        },
        {
          "answers": {
            "a": "2^2"
          },
          "text": "Du räknade 2 som 2⁰. Men 2 är 2¹, så exponenten blir 2 + 1 = 3."
        }
      ]
    },
    {
      "id": "aup2-exponent-1-0-fda46c47",
      "part": "exponent-1-0",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2^9 · 2 = [a]"
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
          "text": "2 är 2¹: en enda faktor 2."
        },
        {
          "math": "2^9 · 2 = 2^9 · 2^1 = 2^10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(2·2)^9"
          },
          "text": "Basen ändras inte: 2⁹ · 2 är 9 + 1 = 10 faktorer 2."
        },
        {
          "answers": {
            "a": "2^9"
          },
          "text": "Du räknade 2 som 2⁰. Men 2 är 2¹, så exponenten blir 9 + 1 = 10."
        }
      ]
    },
    {
      "id": "aup2-exponent-1-0-90f87834",
      "part": "exponent-1-0",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "5^6 · 5^0 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "5⁰ = 1, och att multiplicera med 1 ändrar ingenting."
        },
        {
          "math": "5^6 · 5^0 = 5^6 · 1 = 5^6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "5⁰ är inte 0 utan 1, så produkten är 5⁶."
        }
      ]
    },
    {
      "id": "aup2-exponent-1-0-04fbea9c",
      "part": "exponent-1-0",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "9^6 · 9^0 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "9⁰ = 1, och att multiplicera med 1 ändrar ingenting."
        },
        {
          "math": "9^6 · 9^0 = 9^6 · 1 = 9^6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "9⁰ är inte 0 utan 1, så produkten är 9⁶."
        }
      ]
    },
    {
      "id": "aup2-exponent-1-0-30986814",
      "part": "exponent-1-0",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "2 · 2^8 = [a]"
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
          "text": "2 är 2¹: en enda faktor 2."
        },
        {
          "math": "2 · 2^8 = 2^1 · 2^8 = 2^9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "(2·2)^8"
          },
          "text": "Basen ändras inte: 2 · 2⁸ är 8 + 1 = 9 faktorer 2."
        },
        {
          "answers": {
            "a": "2^8"
          },
          "text": "Du räknade 2 som 2⁰. Men 2 är 2¹, så exponenten blir 8 + 1 = 9."
        }
      ]
    },
    {
      "id": "aup2-exponent-1-0-af04cb6e",
      "part": "exponent-1-0",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "8^0 · 8^8 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8^8"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "8⁰ = 1, och att multiplicera med 1 ändrar ingenting."
        },
        {
          "math": "8^0 · 8^8 = 1 · 8^8 = 8^8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0"
          },
          "text": "8⁰ är inte 0 utan 1, så produkten är 8⁸."
        }
      ]
    },
    {
      "id": "aup2-division-ead61a77",
      "part": "division",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{9^21|9^9} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9^12"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "De 9 faktorerna 9 i nämnaren tar ut 9 av de 21 i täljaren: kvar blir 12 faktorer 9."
        },
        {
          "text": "Exponenterna subtraheras: 21 − 9 = 12."
        },
        {
          "math": "{9^21|9^9} = 9^12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9^30"
          },
          "text": "Vid division subtraheras exponenterna, de läggs inte ihop."
        }
      ]
    },
    {
      "id": "aup2-division-4c5094ee",
      "part": "division",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{10^11|10^7} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10^4"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "De 7 faktorerna 10 i nämnaren tar ut 7 av de 11 i täljaren: kvar blir 4 faktorer 10."
        },
        {
          "text": "Exponenterna subtraheras: 11 − 7 = 4."
        },
        {
          "math": "{10^11|10^7} = 10^4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10^18"
          },
          "text": "Vid division subtraheras exponenterna, de läggs inte ihop."
        }
      ]
    },
    {
      "id": "aup2-division-7a59c445",
      "part": "division",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{7^8|7^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7^6"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "De 2 faktorerna 7 i nämnaren tar ut 2 av de 8 i täljaren: kvar blir 6 faktorer 7."
        },
        {
          "text": "Exponenterna subtraheras: 8 − 2 = 6."
        },
        {
          "math": "{7^8|7^2} = 7^6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7^4"
          },
          "text": "Du delade exponenterna. Men nämnarens 2 faktorer tas bort från täljarens 8, så exponenterna subtraheras."
        },
        {
          "answers": {
            "a": "7^10"
          },
          "text": "Vid division subtraheras exponenterna, de läggs inte ihop."
        }
      ]
    },
    {
      "id": "aup2-division-41ed9413",
      "part": "division",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{5^10|5^5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5^5"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "De 5 faktorerna 5 i nämnaren tar ut 5 av de 10 i täljaren: kvar blir 5 faktorer 5."
        },
        {
          "text": "Exponenterna subtraheras: 10 − 5 = 5."
        },
        {
          "math": "{5^10|5^5} = 5^5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5^2"
          },
          "text": "Du delade exponenterna. Men nämnarens 5 faktorer tas bort från täljarens 10, så exponenterna subtraheras."
        },
        {
          "answers": {
            "a": "5^15"
          },
          "text": "Vid division subtraheras exponenterna, de läggs inte ihop."
        }
      ]
    },
    {
      "id": "aup2-division-62e6921b",
      "part": "division",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{9^13|9^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9^11"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "De 2 faktorerna 9 i nämnaren tar ut 2 av de 13 i täljaren: kvar blir 11 faktorer 9."
        },
        {
          "text": "Exponenterna subtraheras: 13 − 2 = 11."
        },
        {
          "math": "{9^13|9^2} = 9^11"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9^15"
          },
          "text": "Vid division subtraheras exponenterna, de läggs inte ihop."
        }
      ]
    },
    {
      "id": "aup2-division-0807a573",
      "part": "division",
      "text": "Förenkla",
      "points": "each",
      "rows": [
        "{7^22|7^11} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7^11"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "De 11 faktorerna 7 i nämnaren tar ut 11 av de 22 i täljaren: kvar blir 11 faktorer 7."
        },
        {
          "text": "Exponenterna subtraheras: 22 − 11 = 11."
        },
        {
          "math": "{7^22|7^11} = 7^11"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7^2"
          },
          "text": "Du delade exponenterna. Men nämnarens 11 faktorer tas bort från täljarens 22, så exponenterna subtraheras."
        },
        {
          "answers": {
            "a": "7^33"
          },
          "text": "Vid division subtraheras exponenterna, de läggs inte ihop."
        }
      ]
    },
    {
      "id": "aup2-tva-baser-22dc5483",
      "part": "tva-baser",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{6^7 · 3^3|6^6 · 3^2} = [a]"
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
          "text": "Förkorta varje bas för sig."
        },
        {
          "math": "{6^7|6^6} = 6^1"
        },
        {
          "math": "{3^3|3^2} = 3^1"
        },
        {
          "math": "6 · 3 = 18"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-tva-baser-05788241",
      "part": "tva-baser",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{8^7 · 6^6|8^6 · 6^5} = [a]"
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
          "text": "Förkorta varje bas för sig."
        },
        {
          "math": "{8^7|8^6} = 8^1"
        },
        {
          "math": "{6^6|6^5} = 6^1"
        },
        {
          "math": "8 · 6 = 48"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-tva-baser-708e3a2a",
      "part": "tva-baser",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{5^5 · 2^6|5^2 · 2^4} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "500"
          ]
        }
      },
      "solution": [
        {
          "text": "Förkorta varje bas för sig."
        },
        {
          "math": "{5^5|5^2} = 5^3 = 125"
        },
        {
          "math": "{2^6|2^4} = 2^2 = 4"
        },
        {
          "math": "125 · 4 = 500"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-tva-baser-f5b61982",
      "part": "tva-baser",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{8^4 · 7^5|8^3 · 7^3} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "392"
          ]
        }
      },
      "solution": [
        {
          "text": "Förkorta varje bas för sig."
        },
        {
          "math": "{8^4|8^3} = 8^1"
        },
        {
          "math": "{7^5|7^3} = 7^2 = 49"
        },
        {
          "math": "8 · 49 = 392"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-tva-baser-f349b5eb",
      "part": "tva-baser",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{2^6 · 7^5|2^4 · 7^3} = [a]"
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
          "text": "Förkorta varje bas för sig."
        },
        {
          "math": "{2^6|2^4} = 2^2 = 4"
        },
        {
          "math": "{7^5|7^3} = 7^2 = 49"
        },
        {
          "math": "4 · 49 = 196"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-tva-baser-f7c53eb4",
      "part": "tva-baser",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{5^5 · 7^4|5^4 · 7^2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "245"
          ]
        }
      },
      "solution": [
        {
          "text": "Förkorta varje bas för sig."
        },
        {
          "math": "{5^5|5^4} = 5^1"
        },
        {
          "math": "{7^4|7^2} = 7^2 = 49"
        },
        {
          "math": "5 · 49 = 245"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-samma-exponent-6db694e2",
      "part": "samma-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{18^6|6^6} = [a]"
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
          "text": "18⁶ / 6⁶ är 6 faktorer 18 delat med 6 faktorer 6. Varje 18 / 6 blir 3."
        },
        {
          "text": "Samma exponent: dela baserna först."
        },
        {
          "math": "{18^6|6^6} = 3^6 = 729"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Glöm inte exponenten: 3 ska upphöjas till 6."
        }
      ]
    },
    {
      "id": "aup2-samma-exponent-931de32c",
      "part": "samma-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{12^6|6^6} = [a]"
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
          "text": "12⁶ / 6⁶ är 6 faktorer 12 delat med 6 faktorer 6. Varje 12 / 6 blir 2."
        },
        {
          "text": "Samma exponent: dela baserna först."
        },
        {
          "math": "{12^6|6^6} = 2^6 = 64"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Glöm inte exponenten: 2 ska upphöjas till 6."
        }
      ]
    },
    {
      "id": "aup2-samma-exponent-2e9b9581",
      "part": "samma-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{10^4|5^4} = [a]"
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
          "text": "10⁴ / 5⁴ är 4 faktorer 10 delat med 4 faktorer 5. Varje 10 / 5 blir 2."
        },
        {
          "text": "Samma exponent: dela baserna först."
        },
        {
          "math": "{10^4|5^4} = 2^4 = 16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Glöm inte exponenten: 2 ska upphöjas till 4."
        }
      ]
    },
    {
      "id": "aup2-samma-exponent-46af8b05",
      "part": "samma-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{18^2|9^2} = [a]"
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
          "text": "18² / 9² är 2 faktorer 18 delat med 2 faktorer 9. Varje 18 / 9 blir 2."
        },
        {
          "text": "Samma exponent: dela baserna först."
        },
        {
          "math": "{18^2|9^2} = 2^2 = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Glöm inte exponenten: 2 ska upphöjas till 2."
        }
      ]
    },
    {
      "id": "aup2-samma-exponent-1fc9e284",
      "part": "samma-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{15^2|5^2} = [a]"
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
          "text": "15² / 5² är 2 faktorer 15 delat med 2 faktorer 5. Varje 15 / 5 blir 3."
        },
        {
          "text": "Samma exponent: dela baserna först."
        },
        {
          "math": "{15^2|5^2} = 3^2 = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Glöm inte exponenten: 3 ska upphöjas till 2."
        }
      ]
    },
    {
      "id": "aup2-samma-exponent-eca8e418",
      "part": "samma-exponent",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{15^3|5^3} = [a]"
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
          "text": "15³ / 5³ är 3 faktorer 15 delat med 3 faktorer 5. Varje 15 / 5 blir 3."
        },
        {
          "text": "Samma exponent: dela baserna först."
        },
        {
          "math": "{15^3|5^3} = 3^3 = 27"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Glöm inte exponenten: 3 ska upphöjas till 3."
        }
      ]
    },
    {
      "id": "aup2-dela-upp-bas-028f49bf",
      "part": "dela-upp-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{15^3 · 3^5|25 · 3^5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "135"
          ]
        }
      },
      "solution": [
        {
          "text": "Skriv baserna som produkter av primtal, så att samma baser kan förkortas."
        },
        {
          "math": "15^3 = 3^3 · 5^3"
        },
        {
          "math": "25 = 5^2"
        },
        {
          "math": "{15^3 · 3^5|25 · 3^5} = {3^8 · 5^3|3^5 · 5^2} = 3^3 · 5^1 = 135"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-dela-upp-bas-cce5cb09",
      "part": "dela-upp-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{15^5 · 5|3 · 5^6} = [a]"
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
          "text": "Skriv baserna som produkter av primtal, så att samma baser kan förkortas."
        },
        {
          "math": "15^5 = 3^5 · 5^5"
        },
        {
          "math": "{15^5 · 5|3 · 5^6} = {3^5 · 5^6|3 · 5^6} = 3^4 · 5^0 = 81"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-dela-upp-bas-857810ee",
      "part": "dela-upp-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{4^6 · 5^7|8^2 · 5^6} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "320"
          ]
        }
      },
      "solution": [
        {
          "text": "Skriv baserna som produkter av primtal, så att samma baser kan förkortas."
        },
        {
          "math": "4^6 = 2^12"
        },
        {
          "math": "8^2 = 2^6"
        },
        {
          "math": "{4^6 · 5^7|8^2 · 5^6} = {2^12 · 5^7|2^6 · 5^6} = 2^6 · 5^1 = 320"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-dela-upp-bas-96c153e0",
      "part": "dela-upp-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{6^4 · 2^4|9^2 · 2} = [a]"
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
          "text": "Skriv baserna som produkter av primtal, så att samma baser kan förkortas."
        },
        {
          "math": "6^4 = 2^4 · 3^4"
        },
        {
          "math": "9^2 = 3^4"
        },
        {
          "math": "{6^4 · 2^4|9^2 · 2} = {2^8 · 3^4|2 · 3^4} = 2^7 · 3^0 = 128"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-dela-upp-bas-febc0b70",
      "part": "dela-upp-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{9 · 5^5|3 · 5^4} = [a]"
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
          "text": "Skriv baserna som produkter av primtal, så att samma baser kan förkortas."
        },
        {
          "math": "9 = 3^2"
        },
        {
          "math": "{9 · 5^5|3 · 5^4} = {3^2 · 5^5|3 · 5^4} = 3^1 · 5^1 = 15"
        }
      ],
      "mistakes": []
    },
    {
      "id": "aup2-dela-upp-bas-032f6577",
      "part": "dela-upp-bas",
      "text": "Beräkna",
      "points": "each",
      "rows": [
        "{15^6 · 3|25^2 · 3^7} = [a]"
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
          "text": "Skriv baserna som produkter av primtal, så att samma baser kan förkortas."
        },
        {
          "math": "15^6 = 3^6 · 5^6"
        },
        {
          "math": "25^2 = 5^4"
        },
        {
          "math": "{15^6 · 3|25^2 · 3^7} = {3^7 · 5^6|3^7 · 5^4} = 3^0 · 5^2 = 25"
        }
      ],
      "mistakes": []
    }
  ]
};
