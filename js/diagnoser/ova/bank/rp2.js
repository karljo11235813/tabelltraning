// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till RP2.
export default {
  "code": "RP2",
  "parts": [
    {
      "id": "fyll-tabell",
      "title": "Fyll i tabellen",
      "labels": [
        "1a",
        "2a"
      ]
    },
    {
      "id": "rita-grafen",
      "title": "Rita grafen",
      "labels": [
        "1b"
      ]
    },
    {
      "id": "las-av-grafen",
      "title": "Läs av grafen",
      "labels": [
        "1c",
        "2c"
      ]
    },
    {
      "id": "tolka-diagrammet",
      "title": "Tolka diagrammet",
      "labels": [
        "3a",
        "3b",
        "3c"
      ]
    }
  ],
  "unpracticed": [
    "2b"
  ],
  "tasks": [
    {
      "id": "rp2-fyll-tabell-878923bb",
      "part": "fyll-tabell",
      "text": "Mjölk kostar 16 kr/liter. Fyll i tabellen vad det kostar att köpa 4, 5 och 8 liter mjölk.",
      "points": "one",
      "table": {
        "head": [
          "Volym (liter)",
          "Pris (kr)"
        ],
        "rows": [
          [
            "1",
            "16"
          ],
          [
            "2",
            "32"
          ],
          [
            "4",
            "[a]"
          ],
          [
            "5",
            "[b]"
          ],
          [
            "8",
            "[c]"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "64"
          ]
        },
        "b": {
          "accept": [
            "80"
          ]
        },
        "c": {
          "accept": [
            "128"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter kostar 16 kr. 4 liter kostar 4 gånger så mycket:"
        },
        {
          "math": "4 · 16 = 64"
        },
        {
          "math": "5 · 16 = 80"
        },
        {
          "math": "8 · 16 = 128"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "48",
            "b": "64",
            "c": "80"
          },
          "text": "Du lade till 16 kr för varje rad. Det stämmer bara när antalet ökar med 1 från raden ovanför. Annars multiplicerar du: 4 · 16."
        },
        {
          "answers": {
            "a": "20",
            "b": "21",
            "c": "24"
          },
          "text": "Du lade ihop 4 och 16. Antalet ska multipliceras med priset för 1 liter: 4 · 16."
        }
      ]
    },
    {
      "id": "rp2-fyll-tabell-b9080299",
      "part": "fyll-tabell",
      "text": "Att hyra en kanot kostar 60 kr/timme. Fyll i tabellen vad det kostar att hyra kanoten i 3 timmar och i 8 timmar.",
      "points": "one",
      "table": {
        "head": [
          "Antal timmar",
          "Pris (kr)"
        ],
        "rows": [
          [
            "1",
            "60"
          ],
          [
            "2",
            "120"
          ],
          [
            "3",
            "[a]"
          ],
          [
            "8",
            "[b]"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "180"
          ]
        },
        "b": {
          "accept": [
            "480"
          ]
        }
      },
      "solution": [
        {
          "text": "1 timme kostar 60 kr. 3 timmar kostar 3 gånger så mycket:"
        },
        {
          "math": "3 · 60 = 180"
        },
        {
          "math": "8 · 60 = 480"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "180",
            "b": "240"
          },
          "text": "Du lade till 60 kr för varje rad. Det stämmer bara när antalet ökar med 1 från raden ovanför. Annars multiplicerar du: 8 · 60."
        },
        {
          "answers": {
            "a": "63",
            "b": "68"
          },
          "text": "Du lade ihop 3 och 60. Antalet ska multipliceras med priset för 1 timme: 3 · 60."
        }
      ]
    },
    {
      "id": "rp2-fyll-tabell-1832cf5f",
      "part": "fyll-tabell",
      "text": "På loppmarknaden kostar varje bok 25 kr. Fyll i tabellen vad det kostar att köpa 3, 6 och 8 böcker.",
      "points": "one",
      "table": {
        "head": [
          "Antal böcker",
          "Pris (kr)"
        ],
        "rows": [
          [
            "1",
            "25"
          ],
          [
            "3",
            "[a]"
          ],
          [
            "4",
            "100"
          ],
          [
            "6",
            "[b]"
          ],
          [
            "8",
            "[c]"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "75"
          ]
        },
        "b": {
          "accept": [
            "150"
          ]
        },
        "c": {
          "accept": [
            "200"
          ]
        }
      },
      "solution": [
        {
          "text": "1 bok kostar 25 kr. 3 böcker kostar 3 gånger så mycket:"
        },
        {
          "math": "3 · 25 = 75"
        },
        {
          "math": "6 · 25 = 150"
        },
        {
          "math": "8 · 25 = 200"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "50",
            "b": "125",
            "c": "150"
          },
          "text": "Du lade till 25 kr för varje rad. Det stämmer bara när antalet ökar med 1 från raden ovanför. Annars multiplicerar du: 3 · 25."
        },
        {
          "answers": {
            "a": "28",
            "b": "31",
            "c": "33"
          },
          "text": "Du lade ihop 3 och 25. Antalet ska multipliceras med priset för 1 bok: 3 · 25."
        }
      ]
    },
    {
      "id": "rp2-fyll-tabell-7131577a",
      "part": "fyll-tabell",
      "text": "Tabellen visar vad det kostar att köpa morötter som kostar 12 kr/kg. Fyll i tabellen vad det kostar att köpa 6 kg och 10 kg morötter.",
      "points": "one",
      "table": {
        "head": [
          "Vikt (kg)",
          "Pris (kr)"
        ],
        "rows": [
          [
            "1",
            "12"
          ],
          [
            "2",
            "24"
          ],
          [
            "4",
            "48"
          ],
          [
            "6",
            "[a]"
          ],
          [
            "10",
            "[b]"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "72"
          ]
        },
        "b": {
          "accept": [
            "120"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg kostar 12 kr. 6 kg kostar 6 gånger så mycket:"
        },
        {
          "math": "6 · 12 = 72"
        },
        {
          "math": "10 · 12 = 120"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60",
            "b": "72"
          },
          "text": "Du lade till 12 kr för varje rad. Det stämmer bara när antalet ökar med 1 från raden ovanför. Annars multiplicerar du: 6 · 12."
        },
        {
          "answers": {
            "a": "18",
            "b": "22"
          },
          "text": "Du lade ihop 6 och 12. Antalet ska multipliceras med priset för 1 kg: 6 · 12."
        }
      ]
    },
    {
      "id": "rp2-fyll-tabell-adc47fe2",
      "part": "fyll-tabell",
      "text": "Havregryn kostar 24 kr/kg. Fyll i tabellen vad det kostar att köpa 0,5 kg och 1,5 kg havregryn.",
      "points": "one",
      "table": {
        "head": [
          "Vikt (kg)",
          "Pris (kr)"
        ],
        "rows": [
          [
            "0,5",
            "[a]"
          ],
          [
            "1",
            "24"
          ],
          [
            "1,5",
            "[b]"
          ],
          [
            "2",
            "48"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "12"
          ]
        },
        "b": {
          "accept": [
            "36"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg kostar 24 kr. 0,5 kg kostar hälften så mycket och 1,5 kg en och en halv gång så mycket:"
        },
        {
          "math": "24 / 2 = 12"
        },
        {
          "math": "1,5 · 24 = 36"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24,5",
            "b": "25,5"
          },
          "text": "Du lade ihop 0,5 och 24. Antalet ska multipliceras med priset för 1 kg: 0,5 · 24."
        },
        {
          "answers": {
            "a": "48",
            "b": "16"
          },
          "text": "Du delade 24 med antalet kg. Multiplicera i stället: 0,5 · 24 och 1,5 · 24."
        }
      ]
    },
    {
      "id": "rp2-fyll-tabell-a782ac16",
      "part": "fyll-tabell",
      "text": "Biljetter till skolbion kostar 35 kr/biljett. Fyll i tabellen vad det kostar att köpa 3, 5 och 10 biljetter.",
      "points": "one",
      "table": {
        "head": [
          "Antal biljetter",
          "Pris (kr)"
        ],
        "rows": [
          [
            "1",
            "35"
          ],
          [
            "2",
            "70"
          ],
          [
            "3",
            "[a]"
          ],
          [
            "5",
            "[b]"
          ],
          [
            "10",
            "[c]"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "105"
          ]
        },
        "b": {
          "accept": [
            "175"
          ]
        },
        "c": {
          "accept": [
            "350"
          ]
        }
      },
      "solution": [
        {
          "text": "1 biljett kostar 35 kr. 3 biljetter kostar 3 gånger så mycket:"
        },
        {
          "math": "3 · 35 = 105"
        },
        {
          "math": "5 · 35 = 175"
        },
        {
          "math": "10 · 35 = 350"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "105",
            "b": "140",
            "c": "175"
          },
          "text": "Du lade till 35 kr för varje rad. Det stämmer bara när antalet ökar med 1 från raden ovanför. Annars multiplicerar du: 5 · 35."
        },
        {
          "answers": {
            "a": "38",
            "b": "40",
            "c": "45"
          },
          "text": "Du lade ihop 3 och 35. Antalet ska multipliceras med priset för 1 biljett: 3 · 35."
        }
      ]
    },
    {
      "id": "rp2-rita-grafen-4fa8d183",
      "part": "rita-grafen",
      "kind": "plot",
      "text": "På biblioteket kostar det 2 kr per sida att skriva ut: 1 sida kostar 2 kr, 2 sidor 4 kr, 3 sidor 6 kr, 4 sidor 8 kr och 5 sidor 10 kr. Pricka in värdena i koordinatsystemet. Klicka på skärningarna i rutnätet.",
      "chart": {
        "x": {
          "min": "0",
          "max": "10",
          "step": "1",
          "label": "Antal sidor"
        },
        "y": {
          "min": "0",
          "max": "10",
          "step": "1",
          "label": "Pris (kr)"
        }
      },
      "points": [
        [
          "1",
          "2"
        ],
        [
          "2",
          "4"
        ],
        [
          "3",
          "6"
        ],
        [
          "4",
          "8"
        ],
        [
          "5",
          "10"
        ]
      ],
      "optional": [
        [
          0,
          0
        ]
      ],
      "solution": [
        {
          "text": "Varje punkt är ett par ur tabellen: (2; 4) betyder 2 sidor för 4 kr."
        },
        {
          "text": "Punkterna ligger på en rät linje genom origo, eftersom priset är proportionellt mot antalet sidor."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "2,1;4,2;6,3;8,4;10,5"
          },
          "text": "Du bytte plats på x och y: punkten är (2; 4), inte (4; 2). Antalet sidor hör till x-axeln."
        }
      ]
    },
    {
      "id": "rp2-rita-grafen-513fa9a4",
      "part": "rita-grafen",
      "kind": "plot",
      "text": "Päron kostar 15 kr/kg: 1 kg kostar 15 kr, 2 kg 30 kr, 4 kg 60 kr och 5 kg 75 kr. Pricka in värdena i koordinatsystemet. Klicka på skärningarna i rutnätet.",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Vikt (kg)"
        },
        "y": {
          "min": "0",
          "max": "90",
          "step": "15",
          "label": "Pris (kr)"
        }
      },
      "points": [
        [
          "1",
          "15"
        ],
        [
          "2",
          "30"
        ],
        [
          "4",
          "60"
        ],
        [
          "5",
          "75"
        ]
      ],
      "optional": [
        [
          0,
          0
        ]
      ],
      "solution": [
        {
          "text": "Varje punkt är ett par ur tabellen: (2; 30) betyder 2 kg för 30 kr."
        },
        {
          "text": "Punkterna ligger på en rät linje genom origo, eftersom priset är proportionellt mot vikten."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rp2-rita-grafen-06f58448",
      "part": "rita-grafen",
      "kind": "plot",
      "text": "Biljetter till badhuset kostar 25 kr/biljett: 1 biljett kostar 25 kr, 2 biljetter 50 kr, 4 biljetter 100 kr och 5 biljetter 125 kr. Pricka in värdena i koordinatsystemet. Klicka på skärningarna i rutnätet.",
      "chart": {
        "x": {
          "min": "0",
          "max": "10",
          "step": "1",
          "label": "Antal biljetter"
        },
        "y": {
          "min": "0",
          "max": "150",
          "step": "25",
          "label": "Pris (kr)"
        }
      },
      "points": [
        [
          "1",
          "25"
        ],
        [
          "2",
          "50"
        ],
        [
          "4",
          "100"
        ],
        [
          "5",
          "125"
        ]
      ],
      "optional": [
        [
          0,
          0
        ]
      ],
      "solution": [
        {
          "text": "Varje punkt är ett par ur tabellen: (2; 50) betyder 2 biljetter för 50 kr."
        },
        {
          "text": "Punkterna ligger på en rät linje genom origo, eftersom priset är proportionellt mot antalet biljetter."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rp2-rita-grafen-de5cc9cd",
      "part": "rita-grafen",
      "kind": "plot",
      "text": "Russin kostar 60 kr/kg: 0,5 kg kostar 30 kr, 1 kg 60 kr, 1,5 kg 90 kr, 2 kg 120 kr och 2,5 kg 150 kr. Pricka in värdena i koordinatsystemet. Klicka på skärningarna i rutnätet.",
      "chart": {
        "x": {
          "min": "0",
          "max": "5",
          "step": "0,5",
          "label": "Vikt (kg)"
        },
        "y": {
          "min": "0",
          "max": "180",
          "step": "30",
          "label": "Pris (kr)"
        }
      },
      "points": [
        [
          "0,5",
          "30"
        ],
        [
          "1",
          "60"
        ],
        [
          "1,5",
          "90"
        ],
        [
          "2",
          "120"
        ],
        [
          "2,5",
          "150"
        ]
      ],
      "optional": [
        [
          0,
          0
        ]
      ],
      "solution": [
        {
          "text": "Varje punkt är ett par ur tabellen: (1; 60) betyder 1 kg för 60 kr."
        },
        {
          "text": "Punkterna ligger på en rät linje genom origo, eftersom priset är proportionellt mot vikten."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rp2-rita-grafen-be4c3b53",
      "part": "rita-grafen",
      "kind": "plot",
      "text": "Bananer kostar 3 kr/st: 1 banan kostar 3 kr, 2 bananer 6 kr, 3 bananer 9 kr och 4 bananer 12 kr. Pricka in värdena i koordinatsystemet. Klicka på skärningarna i rutnätet.",
      "chart": {
        "x": {
          "min": "0",
          "max": "12",
          "step": "1",
          "label": "Antal bananer"
        },
        "y": {
          "min": "0",
          "max": "12",
          "step": "1",
          "label": "Pris (kr)"
        }
      },
      "points": [
        [
          "1",
          "3"
        ],
        [
          "2",
          "6"
        ],
        [
          "3",
          "9"
        ],
        [
          "4",
          "12"
        ]
      ],
      "optional": [
        [
          0,
          0
        ]
      ],
      "solution": [
        {
          "text": "Varje punkt är ett par ur tabellen: (2; 6) betyder 2 bananer för 6 kr."
        },
        {
          "text": "Punkterna ligger på en rät linje genom origo, eftersom priset är proportionellt mot antalet bananer."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "points": "3,1;6,2;9,3;12,4"
          },
          "text": "Du bytte plats på x och y: punkten är (2; 6), inte (6; 2). Antalet bananer hör till x-axeln."
        }
      ]
    },
    {
      "id": "rp2-rita-grafen-ae69a64c",
      "part": "rita-grafen",
      "kind": "plot",
      "text": "Juice kostar 24 kr/liter: 1 liter kostar 24 kr, 2 liter 48 kr, 3 liter 72 kr och 5 liter 120 kr. Pricka in värdena i koordinatsystemet. Klicka på skärningarna i rutnätet.",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Volym (liter)"
        },
        "y": {
          "min": "0",
          "max": "144",
          "step": "24",
          "label": "Pris (kr)"
        }
      },
      "points": [
        [
          "1",
          "24"
        ],
        [
          "2",
          "48"
        ],
        [
          "3",
          "72"
        ],
        [
          "5",
          "120"
        ]
      ],
      "optional": [
        [
          0,
          0
        ]
      ],
      "solution": [
        {
          "text": "Varje punkt är ett par ur tabellen: (2; 48) betyder 2 liter för 48 kr."
        },
        {
          "text": "Punkterna ligger på en rät linje genom origo, eftersom priset är proportionellt mot volymen."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rp2-las-av-grafen-c26eae7b",
      "part": "las-av-grafen",
      "text": "Grafen visar vad muffins kostar på ett kafé. Läs av vad 6 muffins kostar.",
      "chart": {
        "x": {
          "min": "0",
          "max": "10",
          "step": "1",
          "label": "Antal muffins"
        },
        "y": {
          "min": "0",
          "max": "150",
          "step": "30",
          "label": "Pris (kr)"
        },
        "line": "15"
      },
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "90"
          ]
        }
      },
      "solution": [
        {
          "text": "Gå upp från 6 på x-axeln till linjen och sedan vågrätt till y-axeln: 90 kr."
        },
        {
          "text": "Kontrollera med priset för 1 muffin: 15 kr. Linjen går upp 15 kr för varje muffin."
        },
        {
          "math": "6 · 15 = 90"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "75"
          },
          "text": "Du läste av priset för 5 muffins. Frågan gäller 6 muffins."
        },
        {
          "answers": {
            "a": "105"
          },
          "text": "Du läste av priset för 7 muffins. Frågan gäller 6 muffins."
        }
      ]
    },
    {
      "id": "rp2-las-av-grafen-7d65316f",
      "part": "las-av-grafen",
      "text": "Grafen visar vad plommon kostar. Läs av vad 2,5 kg plommon kostar.",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Vikt (kg)"
        },
        "y": {
          "min": "0",
          "max": "96",
          "step": "16",
          "label": "Pris (kr)"
        },
        "line": "16"
      },
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "40"
          ]
        }
      },
      "solution": [
        {
          "text": "Gå upp från 2,5 på x-axeln till linjen och sedan vågrätt till y-axeln: 40 kr."
        },
        {
          "text": "40 kr ligger mitt emellan strecken 32 och 48."
        },
        {
          "text": "Kontrollera med priset för 1 kg: 16 kr. Linjen går upp 16 kr för varje kg."
        },
        {
          "math": "2,5 · 16 = 40"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "32"
          },
          "text": "Du läste av priset för 2 kg. Frågan gäller 2,5 kg."
        },
        {
          "answers": {
            "a": "48"
          },
          "text": "Du läste av priset för 3 kg. Frågan gäller 2,5 kg."
        }
      ]
    },
    {
      "id": "rp2-las-av-grafen-7d744da4",
      "part": "las-av-grafen",
      "text": "Grafen visar vad det kostar att hyra en cykel. Läs av vad det kostar att hyra cykeln i 5 timmar.",
      "chart": {
        "x": {
          "min": "0",
          "max": "8",
          "step": "1",
          "label": "Tid (timmar)"
        },
        "y": {
          "min": "0",
          "max": "320",
          "step": "80",
          "label": "Pris (kr)"
        },
        "line": "40"
      },
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "200"
          ]
        }
      },
      "solution": [
        {
          "text": "Gå upp från 5 på x-axeln till linjen och sedan vågrätt till y-axeln: 200 kr."
        },
        {
          "text": "200 kr ligger mitt emellan strecken 160 och 240."
        },
        {
          "text": "Kontrollera med priset för 1 timme: 40 kr. Linjen går upp 40 kr för varje timme."
        },
        {
          "math": "5 · 40 = 200"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "160"
          },
          "text": "Du läste av priset för 4 timmar. Frågan gäller 5 timmar."
        },
        {
          "answers": {
            "a": "240"
          },
          "text": "Du läste av priset för 6 timmar. Frågan gäller 5 timmar."
        }
      ]
    },
    {
      "id": "rp2-las-av-grafen-9a6b0849",
      "part": "las-av-grafen",
      "text": "Grafen visar vad mineralvatten kostar. Läs av vad 8 liter mineralvatten kostar.",
      "chart": {
        "x": {
          "min": "0",
          "max": "10",
          "step": "1",
          "label": "Volym (liter)"
        },
        "y": {
          "min": "0",
          "max": "120",
          "step": "24",
          "label": "Pris (kr)"
        },
        "line": "12"
      },
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "96"
          ]
        }
      },
      "solution": [
        {
          "text": "Gå upp från 8 på x-axeln till linjen och sedan vågrätt till y-axeln: 96 kr."
        },
        {
          "text": "Kontrollera med priset för 1 liter: 12 kr. Linjen går upp 12 kr för varje liter."
        },
        {
          "math": "8 · 12 = 96"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "84"
          },
          "text": "Du läste av priset för 7 liter. Frågan gäller 8 liter."
        },
        {
          "answers": {
            "a": "108"
          },
          "text": "Du läste av priset för 9 liter. Frågan gäller 8 liter."
        }
      ]
    },
    {
      "id": "rp2-las-av-grafen-7d8a81d4",
      "part": "las-av-grafen",
      "text": "Grafen visar vad tomater kostar. Läs av vad 5,5 kg tomater kostar.",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Vikt (kg)"
        },
        "y": {
          "min": "0",
          "max": "180",
          "step": "30",
          "label": "Pris (kr)"
        },
        "line": "30"
      },
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "165"
          ]
        }
      },
      "solution": [
        {
          "text": "Gå upp från 5,5 på x-axeln till linjen och sedan vågrätt till y-axeln: 165 kr."
        },
        {
          "text": "165 kr ligger mitt emellan strecken 150 och 180."
        },
        {
          "text": "Kontrollera med priset för 1 kg: 30 kr. Linjen går upp 30 kr för varje kg."
        },
        {
          "math": "5,5 · 30 = 165"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "150"
          },
          "text": "Du läste av priset för 5 kg. Frågan gäller 5,5 kg."
        },
        {
          "answers": {
            "a": "180"
          },
          "text": "Du läste av priset för 6 kg. Frågan gäller 5,5 kg."
        }
      ]
    },
    {
      "id": "rp2-las-av-grafen-7fe48c4f",
      "part": "las-av-grafen",
      "text": "Grafen visar vad ost kostar. Läs av vad 3,5 kg ost kostar.",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Vikt (kg)"
        },
        "y": {
          "min": "0",
          "max": "600",
          "step": "100",
          "label": "Pris (kr)"
        },
        "line": "100"
      },
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "350"
          ]
        }
      },
      "solution": [
        {
          "text": "Gå upp från 3,5 på x-axeln till linjen och sedan vågrätt till y-axeln: 350 kr."
        },
        {
          "text": "350 kr ligger mitt emellan strecken 300 och 400."
        },
        {
          "text": "Kontrollera med priset för 1 kg: 100 kr. Linjen går upp 100 kr för varje kg."
        },
        {
          "math": "3,5 · 100 = 350"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "300"
          },
          "text": "Du läste av priset för 3 kg. Frågan gäller 3,5 kg."
        },
        {
          "answers": {
            "a": "400"
          },
          "text": "Du läste av priset för 4 kg. Frågan gäller 3,5 kg."
        }
      ]
    },
    {
      "id": "rp2-tolka-diagrammet-76907755",
      "part": "tolka-diagrammet",
      "text": "En fiskebåt går hela tiden med samma hastighet. I diagrammet ser du hur långt båten kommer på en viss tid (f(x) = 12x). Hur långt kommer båten på 9 timmar?",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Tid (timmar)"
        },
        "y": {
          "min": "0",
          "max": "72",
          "step": "12",
          "label": "Sträcka (km)"
        },
        "line": "12"
      },
      "points": "each",
      "rows": [
        "Svar: [a] km"
      ],
      "boxes": {
        "a": {
          "accept": [
            "108"
          ]
        }
      },
      "solution": [
        {
          "text": "Grafen slutar vid 6 timmar. Linjen går upp 12 km per timme: farten är 12 km/h."
        },
        {
          "text": "På 9 timmar kommer båten 9 gånger så långt:"
        },
        {
          "math": "9 · 12 = 108"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "72"
          },
          "text": "Du svarade med det sista värdet i grafen, 72 km. Grafen slutar vid 6 timmar, men båten fortsätter."
        }
      ]
    },
    {
      "id": "rp2-tolka-diagrammet-86974712",
      "part": "tolka-diagrammet",
      "text": "En buss kör hela tiden med samma hastighet. I diagrammet ser du hur långt bussen kommer på en viss tid (f(x) = 6x). Hur långt kommer bussen på 4,5 timmar?",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Tid (timmar)"
        },
        "y": {
          "min": "0",
          "max": "36",
          "step": "6",
          "label": "Avstånd (mil)"
        },
        "line": "6"
      },
      "points": "each",
      "rows": [
        "Svar: [a] mil"
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
          "text": "Linjen går upp 6 mil för varje timme: farten är 6 mil/h."
        },
        {
          "text": "På 4,5 timmar kommer bussen 4,5 gånger så långt:"
        },
        {
          "math": "4,5 · 6 = 27"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,5"
          },
          "text": "Du svarade med tiden, 4,5 timmar. Frågan gäller sträckan, som du läser på y-axeln."
        }
      ]
    },
    {
      "id": "rp2-tolka-diagrammet-f9c1e53a",
      "part": "tolka-diagrammet",
      "text": "En cyklist cyklar hela tiden med samma hastighet. I diagrammet ser du hur långt cyklisten kommer på en viss tid (f(x) = 15x). Efter hur lång tid har cyklisten cyklat 45 km?",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Tid (timmar)"
        },
        "y": {
          "min": "0",
          "max": "90",
          "step": "15",
          "label": "Sträcka (km)"
        },
        "line": "15"
      },
      "points": "each",
      "rows": [
        "Svar: [a] timmar"
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
          "text": "Linjen går upp 15 km för varje timme: farten är 15 km/h."
        },
        {
          "text": "Från 45 på y-axeln: vågrätt till linjen, sedan ned till x-axeln: 3 timmar."
        },
        {
          "math": "3 · 15 = 45"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "45"
          },
          "text": "Du svarade med sträckan, 45 km. Frågan gäller tiden, som du läser på x-axeln."
        }
      ]
    },
    {
      "id": "rp2-tolka-diagrammet-ad441f67",
      "part": "tolka-diagrammet",
      "text": "Ett tåg kör hela tiden med samma hastighet. I diagrammet ser du hur långt tåget kommer på en viss tid (f(x) = 16x). Efter hur lång tid har tåget kört 40 mil?",
      "chart": {
        "x": {
          "min": "0",
          "max": "4",
          "step": "0,5",
          "label": "Tid (timmar)"
        },
        "y": {
          "min": "0",
          "max": "64",
          "step": "16",
          "label": "Avstånd (mil)"
        },
        "line": "16"
      },
      "points": "each",
      "rows": [
        "Svar: [a] timmar"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Linjen går upp 16 mil för varje timme: farten är 16 mil/h."
        },
        {
          "text": "Från 40 på y-axeln: vågrätt till linjen, sedan ned till x-axeln: 2,5 timmar."
        },
        {
          "math": "2,5 · 16 = 40"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "Du svarade med sträckan, 40 mil. Frågan gäller tiden, som du läser på x-axeln."
        }
      ]
    },
    {
      "id": "rp2-tolka-diagrammet-a532ccd0",
      "part": "tolka-diagrammet",
      "text": "En skoter kör hela tiden med samma hastighet. I diagrammet ser du hur långt skotern kommer på en viss tid (f(x) = 4x). Hur långt kommer en skoter som kör dubbelt så fort på 3 timmar?",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Tid (timmar)"
        },
        "y": {
          "min": "0",
          "max": "24",
          "step": "4",
          "label": "Avstånd (mil)"
        },
        "line": "4"
      },
      "points": "each",
      "rows": [
        "Svar: [a] mil"
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
          "text": "Farten i grafen är 4 mil/h. Dubbelt så fort är 8 mil/h:"
        },
        {
          "math": "2 · 4 = 8"
        },
        {
          "text": "På 3 timmar kommer den snabbare skotern 3 gånger så långt:"
        },
        {
          "math": "3 · 8 = 24"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du läste av grafen: 12 mil på 3 timmar. Frågan gäller dubbelt så fort."
        }
      ]
    },
    {
      "id": "rp2-tolka-diagrammet-14340702",
      "part": "tolka-diagrammet",
      "text": "En lastbil kör hela tiden med samma hastighet. I diagrammet ser du hur långt lastbilen kommer på en viss tid (f(x) = 8x). Hur långt kommer lastbilen på 4 timmar?",
      "chart": {
        "x": {
          "min": "0",
          "max": "6",
          "step": "0,5",
          "label": "Tid (timmar)"
        },
        "y": {
          "min": "0",
          "max": "48",
          "step": "8",
          "label": "Avstånd (mil)"
        },
        "line": "8"
      },
      "points": "each",
      "rows": [
        "Svar: [a] mil"
      ],
      "boxes": {
        "a": {
          "accept": [
            "32"
          ]
        }
      },
      "solution": [
        {
          "text": "Linjen går upp 8 mil för varje timme: farten är 8 mil/h."
        },
        {
          "text": "På 4 timmar kommer lastbilen 4 gånger så långt:"
        },
        {
          "math": "4 · 8 = 32"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Du svarade med tiden, 4 timmar. Frågan gäller sträckan, som du läser på y-axeln."
        }
      ]
    }
  ]
};
