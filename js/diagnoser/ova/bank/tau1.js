// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAu1.
export default {
  "code": "TAu1",
  "parts": [
    {
      "id": "kvadrat",
      "title": "Kvadratens omkrets och area",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "rektangel",
      "title": "Rektangelns omkrets och area",
      "labels": [
        "2a",
        "2b"
      ]
    },
    {
      "id": "parallellogram",
      "title": "Parallellogrammens omkrets och area",
      "labels": [
        "3a",
        "3b"
      ]
    },
    {
      "id": "triangel",
      "title": "Triangelns omkrets och area",
      "labels": [
        "4a",
        "4b"
      ]
    }
  ],
  "unpracticed": [
    "5"
  ],
  "tasks": [
    {
      "id": "tau1-kvadrat-e5f53f9b",
      "part": "kvadrat",
      "text": "Detta är en kvadrat med sidan s + 2. Skriv ett uttryck för kvadratens omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4(s + 2)"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "Fyra sidor som är s + 2: 4(s + 2) = 4s + 8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4s + 2"
          },
          "text": "Alla fyra sidorna är s + 2, så 2:an kommer med fyra gånger: 4(s + 2) = 4s + 8."
        }
      ],
      "figure": {
        "view": [
          100,
          76
        ],
        "pieces": [
          {
            "path": "M20 8H80V68H20Z"
          }
        ],
        "labels": [
          {
            "at": [
              90,
              38
            ],
            "text": "s + 2"
          }
        ]
      }
    },
    {
      "id": "tau1-kvadrat-b1031a55",
      "part": "kvadrat",
      "text": "Detta är en kvadrat med sidan 2a. Skriv ett uttryck för kvadratens omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8a"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "Fyra sidor som är 2a: 4 · 2a = 8a."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4a"
          },
          "text": "Varje sida är 2a, så omkretsen är 4 · 2a."
        }
      ],
      "figure": {
        "view": [
          100,
          76
        ],
        "pieces": [
          {
            "path": "M20 8H80V68H20Z"
          }
        ],
        "labels": [
          {
            "at": [
              90,
              38
            ],
            "text": "2a"
          }
        ]
      }
    },
    {
      "id": "tau1-kvadrat-386c4c53",
      "part": "kvadrat",
      "text": "Detta är en kvadrat med sidan 3s. Skriv ett uttryck för kvadratens area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9s^2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är sidan gånger sidan: 3s · 3s = 9s²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3s^2"
          },
          "text": "Båda faktorerna är 3s: 3s · 3s = 3 · 3 · s · s = 9s²."
        },
        {
          "answers": {
            "a": "12s"
          },
          "text": "Det är omkretsen. Arean är hur stor yta figuren täcker."
        }
      ],
      "figure": {
        "view": [
          100,
          76
        ],
        "pieces": [
          {
            "path": "M20 8H80V68H20Z"
          }
        ],
        "labels": [
          {
            "at": [
              90,
              38
            ],
            "text": "3s"
          }
        ]
      }
    },
    {
      "id": "tau1-kvadrat-c3feb2f3",
      "part": "kvadrat",
      "text": "Detta är en kvadrat med sidan h. Skriv ett uttryck för kvadratens area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "h^2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är sidan gånger sidan: h · h = h²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4h"
          },
          "text": "Det är omkretsen. Arean är hur stor yta figuren täcker."
        }
      ],
      "figure": {
        "view": [
          100,
          76
        ],
        "pieces": [
          {
            "path": "M20 8H80V68H20Z"
          }
        ],
        "labels": [
          {
            "at": [
              90,
              38
            ],
            "text": "h"
          }
        ]
      }
    },
    {
      "id": "tau1-kvadrat-0a836db3",
      "part": "kvadrat",
      "text": "Detta är en kvadrat med sidan b. Skriv ett uttryck för kvadratens area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "b^2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är sidan gånger sidan: b · b = b²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4b"
          },
          "text": "Det är omkretsen. Arean är hur stor yta figuren täcker."
        },
        {
          "answers": {
            "a": "2b"
          },
          "text": "b² är b · b, inte 2 · b."
        }
      ],
      "figure": {
        "view": [
          100,
          76
        ],
        "pieces": [
          {
            "path": "M20 8H80V68H20Z"
          }
        ],
        "labels": [
          {
            "at": [
              90,
              38
            ],
            "text": "b"
          }
        ]
      }
    },
    {
      "id": "tau1-kvadrat-d48cdd07",
      "part": "kvadrat",
      "text": "Detta är en kvadrat med sidan a. Skriv ett uttryck för kvadratens omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4a"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "Alla fyra sidorna är a: a + a + a + a = 4a."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "a^2"
          },
          "text": "Det är arean. Omkretsen är summan av sidorna runt figuren."
        }
      ],
      "figure": {
        "view": [
          100,
          76
        ],
        "pieces": [
          {
            "path": "M20 8H80V68H20Z"
          }
        ],
        "labels": [
          {
            "at": [
              90,
              38
            ],
            "text": "a"
          }
        ]
      }
    },
    {
      "id": "tau1-rektangel-4e7c2bfb",
      "part": "rektangel",
      "text": "En rektangel har basen 2b och höjden h. Skriv ett uttryck för rektangelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4b + 2h"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "Två sidor är 2b och två är h: 2b + h + 2b + h = 4b + 2h."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2b + h"
          },
          "text": "Det är bara två av sidorna: omkretsen är 2 · 2b + 2 · h."
        }
      ],
      "figure": {
        "view": [
          160,
          84
        ],
        "pieces": [
          {
            "path": "M10 8H140V64H10Z"
          }
        ],
        "labels": [
          {
            "at": [
              150,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              75,
              77
            ],
            "text": "2b"
          }
        ]
      }
    },
    {
      "id": "tau1-rektangel-d53ffb11",
      "part": "rektangel",
      "text": "En rektangel har basen a och höjden b. Skriv ett uttryck för rektangelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2(a + b)"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "Två sidor är a och två är b: a + b + a + b = 2a + 2b."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "a + b"
          },
          "text": "Det är bara två av sidorna. Rektangeln har fyra: 2a + 2b."
        },
        {
          "answers": {
            "a": "ab"
          },
          "text": "Det är arean. Omkretsen är summan av sidorna runt figuren."
        }
      ],
      "figure": {
        "view": [
          160,
          84
        ],
        "pieces": [
          {
            "path": "M10 8H140V64H10Z"
          }
        ],
        "labels": [
          {
            "at": [
              150,
              36
            ],
            "text": "b"
          },
          {
            "at": [
              75,
              77
            ],
            "text": "a"
          }
        ]
      }
    },
    {
      "id": "tau1-rektangel-bad1cb2b",
      "part": "rektangel",
      "text": "En rektangel har basen 3s och höjden s. Skriv ett uttryck för rektangelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3s^2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är basen gånger höjden: 3s · s = 3s²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8s"
          },
          "text": "Det är omkretsen. Arean är hur stor yta figuren täcker."
        }
      ],
      "figure": {
        "view": [
          160,
          84
        ],
        "pieces": [
          {
            "path": "M10 8H140V64H10Z"
          }
        ],
        "labels": [
          {
            "at": [
              150,
              36
            ],
            "text": "s"
          },
          {
            "at": [
              75,
              77
            ],
            "text": "3s"
          }
        ]
      }
    },
    {
      "id": "tau1-rektangel-2e36b833",
      "part": "rektangel",
      "text": "En rektangel har basen 3s och höjden s. Skriv ett uttryck för rektangelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8s"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "3s + s + 3s + s = 8s."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4s"
          },
          "text": "Det är bara två av sidorna: omkretsen är 3s + s + 3s + s."
        }
      ],
      "figure": {
        "view": [
          160,
          84
        ],
        "pieces": [
          {
            "path": "M10 8H140V64H10Z"
          }
        ],
        "labels": [
          {
            "at": [
              150,
              36
            ],
            "text": "s"
          },
          {
            "at": [
              75,
              77
            ],
            "text": "3s"
          }
        ]
      }
    },
    {
      "id": "tau1-rektangel-7114a3b1",
      "part": "rektangel",
      "text": "En rektangel har basen a och höjden b. Skriv ett uttryck för rektangelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "ab"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är basen gånger höjden: a · b."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2(a + b)"
          },
          "text": "Det är omkretsen. Arean är hur stor yta figuren täcker."
        }
      ],
      "figure": {
        "view": [
          160,
          84
        ],
        "pieces": [
          {
            "path": "M10 8H140V64H10Z"
          }
        ],
        "labels": [
          {
            "at": [
              150,
              36
            ],
            "text": "b"
          },
          {
            "at": [
              75,
              77
            ],
            "text": "a"
          }
        ]
      }
    },
    {
      "id": "tau1-rektangel-cefcf7f1",
      "part": "rektangel",
      "text": "En rektangel har basen 2b och höjden h. Skriv ett uttryck för rektangelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2bh"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är basen gånger höjden: 2b · h = 2bh."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4b + 2h"
          },
          "text": "Det är omkretsen. Arean är hur stor yta figuren täcker."
        }
      ],
      "figure": {
        "view": [
          160,
          84
        ],
        "pieces": [
          {
            "path": "M10 8H140V64H10Z"
          }
        ],
        "labels": [
          {
            "at": [
              150,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              75,
              77
            ],
            "text": "2b"
          }
        ]
      }
    },
    {
      "id": "tau1-parallellogram-874360fe",
      "part": "parallellogram",
      "text": "En parallellogram har basen s, sidan c och höjden h. Skriv ett uttryck för parallellogrammens area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "sh"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är basen gånger höjden: s · h."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "sc"
          },
          "text": "Arean räknas med höjden, inte med den sneda sidan: s · h."
        }
      ],
      "figure": {
        "view": [
          180,
          84
        ],
        "pieces": [
          {
            "path": "M10 64L46 8H170L134 64Z"
          }
        ],
        "lines": [
          "M46 8V64"
        ],
        "labels": [
          {
            "at": [
              56,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              162,
              36
            ],
            "text": "c"
          },
          {
            "at": [
              72,
              77
            ],
            "text": "s"
          }
        ]
      }
    },
    {
      "id": "tau1-parallellogram-881cc6b2",
      "part": "parallellogram",
      "text": "En parallellogram har basen a, sidan c och höjden h. Skriv ett uttryck för parallellogrammens omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2(a + c)"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "Två sidor är a och två är c. Höjden h är ingen sida."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2(a + h)"
          },
          "text": "Höjden är ingen sida: den står lodrätt inne i figuren. Sidorna är a och c."
        }
      ],
      "figure": {
        "view": [
          180,
          84
        ],
        "pieces": [
          {
            "path": "M10 64L46 8H170L134 64Z"
          }
        ],
        "lines": [
          "M46 8V64"
        ],
        "labels": [
          {
            "at": [
              56,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              162,
              36
            ],
            "text": "c"
          },
          {
            "at": [
              72,
              77
            ],
            "text": "a"
          }
        ]
      }
    },
    {
      "id": "tau1-parallellogram-10ad3c12",
      "part": "parallellogram",
      "text": "En parallellogram har basen a, sidan c och höjden h. Skriv ett uttryck för parallellogrammens area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "ah"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Klipp av triangeln på ena sidan och lägg den på andra: det blir en rektangel med basen a och höjden h."
        },
        {
          "text": "Arean är basen gånger höjden: a · h."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "ac"
          },
          "text": "Arean räknas med höjden, det lodräta avståndet, inte med den sneda sidan: a · h."
        }
      ],
      "figure": {
        "view": [
          180,
          84
        ],
        "pieces": [
          {
            "path": "M10 64L46 8H170L134 64Z"
          }
        ],
        "lines": [
          "M46 8V64"
        ],
        "labels": [
          {
            "at": [
              56,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              162,
              36
            ],
            "text": "c"
          },
          {
            "at": [
              72,
              77
            ],
            "text": "a"
          }
        ]
      }
    },
    {
      "id": "tau1-parallellogram-6866aab6",
      "part": "parallellogram",
      "text": "En parallellogram har basen 2a, sidan b och höjden h. Skriv ett uttryck för parallellogrammens omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4a + 2b"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "2a + b + 2a + b = 4a + 2b."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4a + 2h"
          },
          "text": "Höjden är ingen sida. Sidorna är 2a och b."
        }
      ],
      "figure": {
        "view": [
          180,
          84
        ],
        "pieces": [
          {
            "path": "M10 64L46 8H170L134 64Z"
          }
        ],
        "lines": [
          "M46 8V64"
        ],
        "labels": [
          {
            "at": [
              56,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              162,
              36
            ],
            "text": "b"
          },
          {
            "at": [
              72,
              77
            ],
            "text": "2a"
          }
        ]
      }
    },
    {
      "id": "tau1-parallellogram-913d61ec",
      "part": "parallellogram",
      "text": "En parallellogram har basen 2a, sidan b och höjden h. Skriv ett uttryck för parallellogrammens area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2ah"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Arean är basen gånger höjden: 2a · h = 2ah."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2ab"
          },
          "text": "Arean räknas med höjden, inte med den sneda sidan: 2a · h."
        }
      ],
      "figure": {
        "view": [
          180,
          84
        ],
        "pieces": [
          {
            "path": "M10 64L46 8H170L134 64Z"
          }
        ],
        "lines": [
          "M46 8V64"
        ],
        "labels": [
          {
            "at": [
              56,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              162,
              36
            ],
            "text": "b"
          },
          {
            "at": [
              72,
              77
            ],
            "text": "2a"
          }
        ]
      }
    },
    {
      "id": "tau1-parallellogram-9c28cdb8",
      "part": "parallellogram",
      "text": "En parallellogram har basen b och höjden h. Den delas längs en diagonal i två lika stora trianglar. Skriv ett uttryck för arean av en av trianglarna.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "bh/2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Parallellogrammens area är b · h, och varje triangel är hälften av den: bh/2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "bh"
          },
          "text": "Det är hela parallellogrammen. Triangeln är hälften."
        }
      ],
      "figure": {
        "view": [
          180,
          84
        ],
        "pieces": [
          {
            "path": "M10 64L46 8H170L134 64Z"
          }
        ],
        "lines": [
          "M46 8V64"
        ],
        "labels": [
          {
            "at": [
              56,
              36
            ],
            "text": "h"
          },
          {
            "at": [
              162,
              36
            ],
            "text": "s"
          },
          {
            "at": [
              72,
              77
            ],
            "text": "b"
          }
        ]
      }
    },
    {
      "id": "tau1-triangel-675391ec",
      "part": "triangel",
      "text": "En triangel har basen 2b och höjden h. Skriv ett uttryck för triangelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "bh"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Basen gånger höjden, delat med 2: 2b · h/2 = bh."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2bh"
          },
          "text": "Triangeln är hälften av rektangeln: 2b · h/2 = bh."
        }
      ],
      "figure": {
        "view": [
          160,
          90
        ],
        "pieces": [
          {
            "path": "M10 76L60 8L150 76Z"
          }
        ],
        "lines": [
          "M60 8V76"
        ],
        "labels": [
          {
            "at": [
              68,
              46
            ],
            "text": "h"
          },
          {
            "at": [
              80,
              88
            ],
            "text": "2b"
          }
        ]
      }
    },
    {
      "id": "tau1-triangel-23249034",
      "part": "triangel",
      "text": "En triangel har basen a och höjden h. Skriv ett uttryck för triangelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "ah/2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "En triangel är hälften av en rektangel med samma bas och höjd: a · h/2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "ah"
          },
          "text": "Det är rektangeln runt triangeln. Triangeln är hälften."
        }
      ],
      "figure": {
        "view": [
          160,
          90
        ],
        "pieces": [
          {
            "path": "M10 76L60 8L150 76Z"
          }
        ],
        "lines": [
          "M60 8V76"
        ],
        "labels": [
          {
            "at": [
              68,
              46
            ],
            "text": "h"
          },
          {
            "at": [
              80,
              88
            ],
            "text": "a"
          }
        ]
      }
    },
    {
      "id": "tau1-triangel-ef0876fc",
      "part": "triangel",
      "text": "En rätvinklig triangel har kateterna a och b. Skriv ett uttryck för triangelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "ab/2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Kateterna står vinkelrätt mot varandra, så den ena är bas och den andra höjd."
        },
        {
          "text": "Arean är a · b/2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "ab"
          },
          "text": "Det är rektangeln med sidorna a och b. Triangeln är hälften."
        }
      ]
    },
    {
      "id": "tau1-triangel-b26f74d6",
      "part": "triangel",
      "text": "En triangel har basen 4 och höjden h. Skriv ett uttryck för triangelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2h"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Basen gånger höjden, delat med 2: 4 · h/2 = 2h."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4h"
          },
          "text": "Triangeln är hälften av rektangeln: 4 · h/2 = 2h."
        }
      ],
      "figure": {
        "view": [
          160,
          90
        ],
        "pieces": [
          {
            "path": "M10 76L60 8L150 76Z"
          }
        ],
        "lines": [
          "M60 8V76"
        ],
        "labels": [
          {
            "at": [
              68,
              46
            ],
            "text": "h"
          },
          {
            "at": [
              80,
              88
            ],
            "text": "4"
          }
        ]
      }
    },
    {
      "id": "tau1-triangel-aa9e4e64",
      "part": "triangel",
      "text": "En liksidig triangel har sidan s. Skriv ett uttryck för triangelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3s"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "Alla tre sidorna är s: s + s + s = 3s."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "s^3"
          },
          "text": "s + s + s är 3s. s³ är s · s · s."
        }
      ]
    },
    {
      "id": "tau1-triangel-23f05808",
      "part": "triangel",
      "text": "En likbent triangel har basen b och två sidor som båda är s. Skriv ett uttryck för triangelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "b + 2s"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Omkretsen är summan av alla sidorna."
        },
        {
          "text": "b + s + s = b + 2s."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "b + s"
          },
          "text": "Triangeln har två sidor som är s: b + s + s."
        }
      ]
    }
  ]
};
