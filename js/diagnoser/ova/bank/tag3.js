// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAg3.
export default {
  "code": "TAg3",
  "parts": [
    {
      "id": "rita-kx-m",
      "title": "Rita grafen till y = kx + m",
      "labels": [
        "1"
      ]
    },
    {
      "id": "rita-annan-form",
      "title": "Rita grafen när y inte står ensamt",
      "labels": [
        "2"
      ]
    },
    {
      "id": "teckna-uppat",
      "title": "Teckna ekvationen, linjen går uppåt",
      "labels": [
        "3"
      ]
    },
    {
      "id": "teckna-nedat",
      "title": "Teckna ekvationen, linjen går nedåt",
      "labels": [
        "4"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tag3-rita-kx-m-4e6ebed5",
      "part": "rita-kx-m",
      "kind": "line",
      "text": "Rita grafen till y = 2x − 1.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          -1
        ],
        [
          2,
          3
        ]
      ],
      "solution": [
        {
          "text": "Linjen skär y-axeln i −1, alltså i punkten (0, −1)."
        },
        {
          "text": "k = 2: linjen går 2 steg uppåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,-1;2,-5"
          },
          "text": "Lutningen har fel tecken: k = 2, så linjen ska gå uppåt åt höger."
        },
        {
          "answers": {
            "points": "0,1;2,5"
          },
          "text": "m är fel: linjen ska skära y-axeln i −1, inte i 1."
        },
        {
          "answers": {
            "points": "0,2;2,0"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i −1 och lutningen är 2."
        }
      ]
    },
    {
      "id": "tag3-rita-kx-m-91a1e67e",
      "part": "rita-kx-m",
      "kind": "line",
      "text": "Rita grafen till y = −x + 3.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          3
        ],
        [
          2,
          1
        ]
      ],
      "solution": [
        {
          "text": "Linjen skär y-axeln i 3, alltså i punkten (0, 3)."
        },
        {
          "text": "k = −1: linjen går 1 steg nedåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,3;2,5"
          },
          "text": "Lutningen har fel tecken: k = −1, så linjen ska gå nedåt åt höger."
        },
        {
          "answers": {
            "points": "0,-3;2,-5"
          },
          "text": "m är fel: linjen ska skära y-axeln i 3, inte i −3."
        },
        {
          "answers": {
            "points": "0,-1;2,5"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i 3 och lutningen är −1."
        }
      ]
    },
    {
      "id": "tag3-rita-kx-m-c14e2d50",
      "part": "rita-kx-m",
      "kind": "line",
      "text": "Rita grafen till y = 0,5x + 1.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          1
        ],
        [
          2,
          2
        ]
      ],
      "solution": [
        {
          "text": "Linjen skär y-axeln i 1, alltså i punkten (0, 1)."
        },
        {
          "text": "k = 0,5: linjen går 1 steg uppåt för varje 2 steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,1;2,0"
          },
          "text": "Lutningen har fel tecken: k = 0,5, så linjen ska gå uppåt åt höger."
        },
        {
          "answers": {
            "points": "0,-1;2,0"
          },
          "text": "m är fel: linjen ska skära y-axeln i 1, inte i −1."
        }
      ]
    },
    {
      "id": "tag3-rita-kx-m-ad799d1b",
      "part": "rita-kx-m",
      "kind": "line",
      "text": "Rita grafen till y = x + 1.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          1
        ],
        [
          2,
          3
        ]
      ],
      "solution": [
        {
          "text": "Linjen skär y-axeln i 1, alltså i punkten (0, 1)."
        },
        {
          "text": "k = 1: linjen går 1 steg uppåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,1;2,-1"
          },
          "text": "Lutningen har fel tecken: k = 1, så linjen ska gå uppåt åt höger."
        },
        {
          "answers": {
            "points": "0,-1;2,1"
          },
          "text": "m är fel: linjen ska skära y-axeln i 1, inte i −1."
        }
      ]
    },
    {
      "id": "tag3-rita-kx-m-deeeecd7",
      "part": "rita-kx-m",
      "kind": "line",
      "text": "Rita grafen till y = −2x + 2.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          2
        ],
        [
          2,
          -2
        ]
      ],
      "solution": [
        {
          "text": "Linjen skär y-axeln i 2, alltså i punkten (0, 2)."
        },
        {
          "text": "k = −2: linjen går 2 steg nedåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,2;2,6"
          },
          "text": "Lutningen har fel tecken: k = −2, så linjen ska gå nedåt åt höger."
        },
        {
          "answers": {
            "points": "0,-2;2,-6"
          },
          "text": "m är fel: linjen ska skära y-axeln i 2, inte i −2."
        },
        {
          "answers": {
            "points": "0,-2;2,2"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i 2 och lutningen är −2."
        }
      ]
    },
    {
      "id": "tag3-rita-kx-m-89362f0e",
      "part": "rita-kx-m",
      "kind": "line",
      "text": "Rita grafen till y = 3x.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          0
        ],
        [
          2,
          6
        ]
      ],
      "solution": [
        {
          "text": "Linjen skär y-axeln i 0, alltså i punkten (0, 0)."
        },
        {
          "text": "k = 3: linjen går 3 steg uppåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,0;2,-6"
          },
          "text": "Lutningen har fel tecken: k = 3, så linjen ska gå uppåt åt höger."
        },
        {
          "answers": {
            "points": "0,3;2,3"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i 0 och lutningen är 3."
        }
      ]
    },
    {
      "id": "tag3-rita-annan-form-91d4851b",
      "part": "rita-annan-form",
      "kind": "line",
      "text": "Rita grafen till x + 2y − 4 = 0.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          2
        ],
        [
          2,
          1
        ]
      ],
      "solution": [
        {
          "text": "Skriv om ekvationen så att y står ensamt: y = −0,5x + 2."
        },
        {
          "text": "Linjen skär y-axeln i 2, alltså i punkten (0, 2)."
        },
        {
          "text": "k = −0,5: linjen går 1 steg nedåt för varje 2 steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,2;2,3"
          },
          "text": "Lutningen har fel tecken: k = −0,5, så linjen ska gå nedåt åt höger."
        },
        {
          "answers": {
            "points": "0,-2;2,-3"
          },
          "text": "m är fel: linjen ska skära y-axeln i 2, inte i −2."
        }
      ]
    },
    {
      "id": "tag3-rita-annan-form-6d9ae10f",
      "part": "rita-annan-form",
      "kind": "line",
      "text": "Rita grafen till 3x − y = 0.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          0
        ],
        [
          2,
          6
        ]
      ],
      "solution": [
        {
          "text": "Skriv om ekvationen så att y står ensamt: y = 3x."
        },
        {
          "text": "Linjen skär y-axeln i 0, alltså i punkten (0, 0)."
        },
        {
          "text": "k = 3: linjen går 3 steg uppåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,0;2,-6"
          },
          "text": "Lutningen har fel tecken: k = 3, så linjen ska gå uppåt åt höger."
        },
        {
          "answers": {
            "points": "0,3;2,3"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i 0 och lutningen är 3."
        }
      ]
    },
    {
      "id": "tag3-rita-annan-form-4207fcd8",
      "part": "rita-annan-form",
      "kind": "line",
      "text": "Rita grafen till 2x − y − 1 = 0.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          -1
        ],
        [
          2,
          3
        ]
      ],
      "solution": [
        {
          "text": "Skriv om ekvationen så att y står ensamt: y = 2x − 1."
        },
        {
          "text": "Linjen skär y-axeln i −1, alltså i punkten (0, −1)."
        },
        {
          "text": "k = 2: linjen går 2 steg uppåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,-1;2,-5"
          },
          "text": "Lutningen har fel tecken: k = 2, så linjen ska gå uppåt åt höger."
        },
        {
          "answers": {
            "points": "0,1;2,5"
          },
          "text": "m är fel: linjen ska skära y-axeln i −1, inte i 1."
        },
        {
          "answers": {
            "points": "0,2;2,0"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i −1 och lutningen är 2."
        }
      ]
    },
    {
      "id": "tag3-rita-annan-form-5fb2929c",
      "part": "rita-annan-form",
      "kind": "line",
      "text": "Rita grafen till x + y + 1 = 0.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          -1
        ],
        [
          2,
          -3
        ]
      ],
      "solution": [
        {
          "text": "Skriv om ekvationen så att y står ensamt: y = −x − 1."
        },
        {
          "text": "Linjen skär y-axeln i −1, alltså i punkten (0, −1)."
        },
        {
          "text": "k = −1: linjen går 1 steg nedåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,-1;2,1"
          },
          "text": "Lutningen har fel tecken: k = −1, så linjen ska gå nedåt åt höger."
        },
        {
          "answers": {
            "points": "0,1;2,-1"
          },
          "text": "m är fel: linjen ska skära y-axeln i −1, inte i 1."
        }
      ]
    },
    {
      "id": "tag3-rita-annan-form-58bc5d9c",
      "part": "rita-annan-form",
      "kind": "line",
      "text": "Rita grafen till 2x + y − 3 = 0.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          3
        ],
        [
          2,
          -1
        ]
      ],
      "solution": [
        {
          "text": "Skriv om ekvationen så att y står ensamt: y = −2x + 3."
        },
        {
          "text": "Linjen skär y-axeln i 3, alltså i punkten (0, 3)."
        },
        {
          "text": "k = −2: linjen går 2 steg nedåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,3;2,7"
          },
          "text": "Lutningen har fel tecken: k = −2, så linjen ska gå nedåt åt höger."
        },
        {
          "answers": {
            "points": "0,-3;2,-7"
          },
          "text": "m är fel: linjen ska skära y-axeln i 3, inte i −3."
        },
        {
          "answers": {
            "points": "0,-2;2,4"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i 3 och lutningen är −2."
        }
      ]
    },
    {
      "id": "tag3-rita-annan-form-e783e9cf",
      "part": "rita-annan-form",
      "kind": "line",
      "text": "Rita grafen till x − y + 2 = 0.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        }
      },
      "through": [
        [
          0,
          2
        ],
        [
          2,
          4
        ]
      ],
      "solution": [
        {
          "text": "Skriv om ekvationen så att y står ensamt: y = x + 2."
        },
        {
          "text": "Linjen skär y-axeln i 2, alltså i punkten (0, 2)."
        },
        {
          "text": "k = 1: linjen går 1 steg uppåt för varje steg åt höger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "0,2;2,0"
          },
          "text": "Lutningen har fel tecken: k = 1, så linjen ska gå uppåt åt höger."
        },
        {
          "answers": {
            "points": "0,-2;2,0"
          },
          "text": "m är fel: linjen ska skära y-axeln i 2, inte i −2."
        },
        {
          "answers": {
            "points": "0,1;2,5"
          },
          "text": "Du bytte plats på k och m: linjen ska skära y-axeln i 2 och lutningen är 1."
        }
      ]
    },
    {
      "id": "tag3-teckna-uppat-f529e4c9",
      "part": "teckna-uppat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              1
            ],
            [
              2,
              5
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = 2x + 1"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 1, så m = 1."
        },
        {
          "text": "Den går 2 steg uppåt för varje steg åt höger, så k = 2."
        },
        {
          "text": "Ekvationen är y = 2x + 1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = −2x + 1"
          },
          "text": "Tecknet på k är fel: linjen går uppåt åt höger."
        },
        {
          "answers": {
            "a": "y = 2x − 1"
          },
          "text": "m är fel: linjen skär y-axeln i 1."
        },
        {
          "answers": {
            "a": "y = x + 2"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-uppat-5744ae8b",
      "part": "teckna-uppat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              1
            ],
            [
              2,
              3
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = x + 1"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 1, så m = 1."
        },
        {
          "text": "Den går 1 steg uppåt för varje steg åt höger, så k = 1."
        },
        {
          "text": "Ekvationen är y = x + 1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = −x + 1"
          },
          "text": "Tecknet på k är fel: linjen går uppåt åt höger."
        },
        {
          "answers": {
            "a": "y = x − 1"
          },
          "text": "m är fel: linjen skär y-axeln i 1."
        }
      ]
    },
    {
      "id": "tag3-teckna-uppat-e5fddbdd",
      "part": "teckna-uppat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              0
            ],
            [
              2,
              4
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = 2x"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 0, så m = 0."
        },
        {
          "text": "Den går 2 steg uppåt för varje steg åt höger, så k = 2."
        },
        {
          "text": "Ekvationen är y = 2x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = −2x"
          },
          "text": "Tecknet på k är fel: linjen går uppåt åt höger."
        },
        {
          "answers": {
            "a": "y = 2"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-uppat-11aa8572",
      "part": "teckna-uppat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              -2
            ],
            [
              2,
              4
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = 3x − 2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i −2, så m = −2."
        },
        {
          "text": "Den går 3 steg uppåt för varje steg åt höger, så k = 3."
        },
        {
          "text": "Ekvationen är y = 3x − 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = −3x − 2"
          },
          "text": "Tecknet på k är fel: linjen går uppåt åt höger."
        },
        {
          "answers": {
            "a": "y = 3x + 2"
          },
          "text": "m är fel: linjen skär y-axeln i −2."
        },
        {
          "answers": {
            "a": "y = −2x + 3"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-uppat-b200aaa8",
      "part": "teckna-uppat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              1
            ],
            [
              2,
              2
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = 0,5x + 1"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 1, så m = 1."
        },
        {
          "text": "Den går 1 steg uppåt för varje 2 steg åt höger, så k = 0,5."
        },
        {
          "text": "Ekvationen är y = 0,5x + 1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = −0,5x + 1"
          },
          "text": "Tecknet på k är fel: linjen går uppåt åt höger."
        },
        {
          "answers": {
            "a": "y = 0,5x − 1"
          },
          "text": "m är fel: linjen skär y-axeln i 1."
        }
      ]
    },
    {
      "id": "tag3-teckna-uppat-80619987",
      "part": "teckna-uppat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              -3
            ],
            [
              2,
              -1
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = x − 3"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i −3, så m = −3."
        },
        {
          "text": "Den går 1 steg uppåt för varje steg åt höger, så k = 1."
        },
        {
          "text": "Ekvationen är y = x − 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = −x − 3"
          },
          "text": "Tecknet på k är fel: linjen går uppåt åt höger."
        },
        {
          "answers": {
            "a": "y = x + 3"
          },
          "text": "m är fel: linjen skär y-axeln i −3."
        },
        {
          "answers": {
            "a": "y = −3x + 1"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-nedat-a1465744",
      "part": "teckna-nedat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              2
            ],
            [
              2,
              1
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = −0,5x + 2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 2, så m = 2."
        },
        {
          "text": "Den går 1 steg nedåt för varje 2 steg åt höger, så k = −0,5."
        },
        {
          "text": "Ekvationen är y = −0,5x + 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = 0,5x + 2"
          },
          "text": "Tecknet på k är fel: linjen går nedåt åt höger."
        },
        {
          "answers": {
            "a": "y = −0,5x − 2"
          },
          "text": "m är fel: linjen skär y-axeln i 2."
        }
      ]
    },
    {
      "id": "tag3-teckna-nedat-b58c0896",
      "part": "teckna-nedat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              1
            ],
            [
              2,
              -1
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = −x + 1"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 1, så m = 1."
        },
        {
          "text": "Den går 1 steg nedåt för varje steg åt höger, så k = −1."
        },
        {
          "text": "Ekvationen är y = −x + 1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = x + 1"
          },
          "text": "Tecknet på k är fel: linjen går nedåt åt höger."
        },
        {
          "answers": {
            "a": "y = −x − 1"
          },
          "text": "m är fel: linjen skär y-axeln i 1."
        },
        {
          "answers": {
            "a": "y = x − 1"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-nedat-df813b79",
      "part": "teckna-nedat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              -2
            ],
            [
              2,
              -4
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = −x − 2"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i −2, så m = −2."
        },
        {
          "text": "Den går 1 steg nedåt för varje steg åt höger, så k = −1."
        },
        {
          "text": "Ekvationen är y = −x − 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = x − 2"
          },
          "text": "Tecknet på k är fel: linjen går nedåt åt höger."
        },
        {
          "answers": {
            "a": "y = −x + 2"
          },
          "text": "m är fel: linjen skär y-axeln i −2."
        },
        {
          "answers": {
            "a": "y = −2x − 1"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-nedat-10d86098",
      "part": "teckna-nedat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              3
            ],
            [
              2,
              -1
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = −2x + 3"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 3, så m = 3."
        },
        {
          "text": "Den går 2 steg nedåt för varje steg åt höger, så k = −2."
        },
        {
          "text": "Ekvationen är y = −2x + 3."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = 2x + 3"
          },
          "text": "Tecknet på k är fel: linjen går nedåt åt höger."
        },
        {
          "answers": {
            "a": "y = −2x − 3"
          },
          "text": "m är fel: linjen skär y-axeln i 3."
        },
        {
          "answers": {
            "a": "y = 3x − 2"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-nedat-a93cb3aa",
      "part": "teckna-nedat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              1
            ],
            [
              2,
              -5
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = −3x + 1"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 1, så m = 1."
        },
        {
          "text": "Den går 3 steg nedåt för varje steg åt höger, så k = −3."
        },
        {
          "text": "Ekvationen är y = −3x + 1."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = 3x + 1"
          },
          "text": "Tecknet på k är fel: linjen går nedåt åt höger."
        },
        {
          "answers": {
            "a": "y = −3x − 1"
          },
          "text": "m är fel: linjen skär y-axeln i 1."
        },
        {
          "answers": {
            "a": "y = x − 3"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    },
    {
      "id": "tag3-teckna-nedat-c4ce63dc",
      "part": "teckna-nedat",
      "text": "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      "chart": {
        "x": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "y": {
          "min": -4,
          "max": 4,
          "step": 1
        },
        "lines": [
          [
            [
              0,
              0
            ],
            [
              2,
              -4
            ]
          ]
        ]
      },
      "rows": [
        "[a]"
      ],
      "points": "each",
      "boxes": {
        "a": {
          "accept": [
            "y = −2x"
          ],
          "algebra": "equivalent"
        }
      },
      "solution": [
        {
          "text": "Linjen skär y-axeln i 0, så m = 0."
        },
        {
          "text": "Den går 2 steg nedåt för varje steg åt höger, så k = −2."
        },
        {
          "text": "Ekvationen är y = −2x."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "y = 2x"
          },
          "text": "Tecknet på k är fel: linjen går nedåt åt höger."
        },
        {
          "answers": {
            "a": "y = −2"
          },
          "text": "Du bytte plats på k och m: k är lutningen och m är där linjen skär y-axeln."
        }
      ]
    }
  ]
};
