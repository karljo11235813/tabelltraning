// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till RP5.
export default {
  "code": "RP5",
  "parts": [
    {
      "id": "rabatt",
      "title": "Rabatt",
      "labels": [
        "1"
      ]
    },
    {
      "id": "skatt-procent",
      "title": "Skatt i procent",
      "labels": [
        "2"
      ]
    },
    {
      "id": "moms",
      "title": "Moms",
      "labels": [
        "3"
      ]
    },
    {
      "id": "hojning-sankning",
      "title": "Höjning och sänkning",
      "labels": [
        "4"
      ]
    },
    {
      "id": "pris-fore-rabatt",
      "title": "Pris före rabatt",
      "labels": [
        "5"
      ]
    }
  ],
  "tasks": [
    {
      "id": "rp5-rabatt-05d86fc2",
      "part": "rabatt",
      "text": "En ryggsäck kostar 350 kr. Ali har ett rabattkort som ger 10 % rabatt. Hur mycket betalar han för ryggsäcken?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "315"
          ]
        }
      },
      "solution": [
        {
          "text": "10 % rabatt: man slipper betala 10 % av priset och betalar 90 %."
        },
        {
          "math": "10 % · 350 = 35"
        },
        {
          "text": "Rabatten dras bort: man betalar priset minus rabatten."
        },
        {
          "math": "350 - 35 = 315"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "35"
          },
          "text": "Det är rabatten. Priset blir det gamla priset minus rabatten."
        },
        {
          "answers": {
            "a": "340"
          },
          "text": "Du drog bort 10 kr. Men 10 % är en del av priset, inte 10 kr."
        }
      ]
    },
    {
      "id": "rp5-rabatt-ebb0ae21",
      "part": "rabatt",
      "text": "Sofia köper en cykelhjälm som kostar 450 kr. Hjälmen har 40 % rabatt. Hur mycket betalar hon?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "270"
          ]
        }
      },
      "solution": [
        {
          "text": "40 % rabatt: man slipper betala 40 % av priset och betalar 60 %."
        },
        {
          "math": "40 % · 450 = 180"
        },
        {
          "text": "Rabatten dras bort: man betalar priset minus rabatten."
        },
        {
          "math": "450 - 180 = 270"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "180"
          },
          "text": "Det är rabatten. Priset blir det gamla priset minus rabatten."
        },
        {
          "answers": {
            "a": "410"
          },
          "text": "Du drog bort 40 kr. Men 40 % är en del av priset, inte 40 kr."
        }
      ]
    },
    {
      "id": "rp5-rabatt-87e6ed4f",
      "part": "rabatt",
      "text": "En tröja kostar 260 kr. Mira får 15 % rabatt. Hur mycket betalar hon för tröjan?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "221"
          ]
        }
      },
      "solution": [
        {
          "text": "15 % rabatt: man slipper betala 15 % av priset och betalar 85 %."
        },
        {
          "math": "15 % · 260 = 39"
        },
        {
          "text": "Rabatten dras bort: man betalar priset minus rabatten."
        },
        {
          "math": "260 - 39 = 221"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "39"
          },
          "text": "Det är rabatten. Priset blir det gamla priset minus rabatten."
        },
        {
          "answers": {
            "a": "245"
          },
          "text": "Du drog bort 15 kr. Men 15 % är en del av priset, inte 15 kr."
        }
      ]
    },
    {
      "id": "rp5-rabatt-00dd4f6d",
      "part": "rabatt",
      "text": "En vinterjacka kostar 1200 kr. Under en kampanj får man 30 % rabatt. Hur mycket får man betala för jackan?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "840"
          ]
        }
      },
      "solution": [
        {
          "text": "30 % rabatt: man slipper betala 30 % av priset och betalar 70 %."
        },
        {
          "math": "30 % · 1200 = 360"
        },
        {
          "text": "Rabatten dras bort: man betalar priset minus rabatten."
        },
        {
          "math": "1200 - 360 = 840"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "360"
          },
          "text": "Det är rabatten. Priset blir det gamla priset minus rabatten."
        },
        {
          "answers": {
            "a": "1170"
          },
          "text": "Du drog bort 30 kr. Men 30 % är en del av priset, inte 30 kr."
        }
      ]
    },
    {
      "id": "rp5-rabatt-5994901e",
      "part": "rabatt",
      "text": "Ett par skor kostar 640 kr. Skorna säljs med 25 % rabatt. Vad kostar skorna efter rabatten?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "480"
          ]
        }
      },
      "solution": [
        {
          "text": "25 % rabatt: man slipper betala 25 % av priset och betalar 75 %."
        },
        {
          "math": "25 % · 640 = 160"
        },
        {
          "text": "Rabatten dras bort: man betalar priset minus rabatten."
        },
        {
          "math": "640 - 160 = 480"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "160"
          },
          "text": "Det är rabatten. Priset blir det gamla priset minus rabatten."
        },
        {
          "answers": {
            "a": "615"
          },
          "text": "Du drog bort 25 kr. Men 25 % är en del av priset, inte 25 kr."
        }
      ]
    },
    {
      "id": "rp5-rabatt-81323f17",
      "part": "rabatt",
      "text": "Hörlurar kostar 590 kr. Man får 20 % rabatt om man handlar på nätet. Hur mycket betalar man för hörlurarna?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "472"
          ]
        }
      },
      "solution": [
        {
          "text": "20 % rabatt: man slipper betala 20 % av priset och betalar 80 %."
        },
        {
          "math": "20 % · 590 = 118"
        },
        {
          "text": "Rabatten dras bort: man betalar priset minus rabatten."
        },
        {
          "math": "590 - 118 = 472"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "118"
          },
          "text": "Det är rabatten. Priset blir det gamla priset minus rabatten."
        },
        {
          "answers": {
            "a": "570"
          },
          "text": "Du drog bort 20 kr. Men 20 % är en del av priset, inte 20 kr."
        }
      ]
    },
    {
      "id": "rp5-skatt-procent-49f38475",
      "part": "skatt-procent",
      "text": "Kim har 28 000 kr i lön före skatt och 22 960 kr efter skatt. Hur många procent av lönen går till skatt?",
      "points": "each",
      "rows": [
        "Svar: [a] %"
      ],
      "boxes": {
        "a": {
          "accept": [
            "18"
          ],
          "units": {
            "%": 1,
            "procent": 1,
            "‰": "1/10",
            "promille": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Skatten är lönen före skatt minus det som är kvar."
        },
        {
          "math": "28 000 - 22 960 = 5040"
        },
        {
          "text": "Skatten som andel av lönen före skatt:"
        },
        {
          "math": "{5040|28 000} = {18|100} = 18 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "82"
          },
          "text": "Det är andelen som är kvar. Frågan gäller skatten."
        }
      ]
    },
    {
      "id": "rp5-skatt-procent-4ee42ab7",
      "part": "skatt-procent",
      "text": "Pelles lön är 26 000 kr före skatt. Efter skatten har han 20 280 kr kvar. Hur många procent av lönen är skatten?",
      "points": "each",
      "rows": [
        "Svar: [a] %"
      ],
      "boxes": {
        "a": {
          "accept": [
            "22"
          ],
          "units": {
            "%": 1,
            "procent": 1,
            "‰": "1/10",
            "promille": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Skatten är lönen före skatt minus det som är kvar."
        },
        {
          "math": "26 000 - 20 280 = 5720"
        },
        {
          "text": "Skatten som andel av lönen före skatt:"
        },
        {
          "math": "{5720|26 000} = {22|100} = 22 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "78"
          },
          "text": "Det är andelen som är kvar. Frågan gäller skatten."
        }
      ]
    },
    {
      "id": "rp5-skatt-procent-4498d515",
      "part": "skatt-procent",
      "text": "Alma får 24 000 kr utbetalt av en lön på 32 000 kr före skatt. Hur många procent av lönen är skatten?",
      "points": "each",
      "rows": [
        "Svar: [a] %"
      ],
      "boxes": {
        "a": {
          "accept": [
            "25"
          ],
          "units": {
            "%": 1,
            "procent": 1,
            "‰": "1/10",
            "promille": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Skatten är lönen före skatt minus det som är kvar."
        },
        {
          "math": "32 000 - 24 000 = 8000"
        },
        {
          "text": "Skatten som andel av lönen före skatt:"
        },
        {
          "math": "{8000|32 000} = {25|100} = 25 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "75"
          },
          "text": "Det är andelen som är kvar. Frågan gäller skatten."
        }
      ]
    },
    {
      "id": "rp5-skatt-procent-c5513e23",
      "part": "skatt-procent",
      "text": "Maja tjänar 12 000 kr före skatt på sitt sommarjobb och får 10 200 kr efter skatt. Hur många procent av lönen är skatten?",
      "points": "each",
      "rows": [
        "Svar: [a] %"
      ],
      "boxes": {
        "a": {
          "accept": [
            "15"
          ],
          "units": {
            "%": 1,
            "procent": 1,
            "‰": "1/10",
            "promille": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Skatten är lönen före skatt minus det som är kvar."
        },
        {
          "math": "12 000 - 10 200 = 1800"
        },
        {
          "text": "Skatten som andel av lönen före skatt:"
        },
        {
          "math": "{1800|12 000} = {15|100} = 15 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "85"
          },
          "text": "Det är andelen som är kvar. Frågan gäller skatten."
        }
      ]
    },
    {
      "id": "rp5-skatt-procent-839d0e68",
      "part": "skatt-procent",
      "text": "Hanna tjänar 36 000 kr före skatt och får 28 800 kr efter skatt. Hur många procent av lönen betalar hon i skatt?",
      "points": "each",
      "rows": [
        "Svar: [a] %"
      ],
      "boxes": {
        "a": {
          "accept": [
            "20"
          ],
          "units": {
            "%": 1,
            "procent": 1,
            "‰": "1/10",
            "promille": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Skatten är lönen före skatt minus det som är kvar."
        },
        {
          "math": "36 000 - 28 800 = 7200"
        },
        {
          "text": "Skatten som andel av lönen före skatt:"
        },
        {
          "math": "{7200|36 000} = {20|100} = 20 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "80"
          },
          "text": "Det är andelen som är kvar. Frågan gäller skatten."
        },
        {
          "answers": {
            "a": "25"
          },
          "text": "Du jämförde skatten med det som är kvar. Jämför med lönen före skatt."
        }
      ]
    },
    {
      "id": "rp5-skatt-procent-e99fadc6",
      "part": "skatt-procent",
      "text": "Sams lön före skatt är 40 000 kr. Efter skatt har han 30 400 kr kvar. Hur många procent av lönen är skatten?",
      "points": "each",
      "rows": [
        "Svar: [a] %"
      ],
      "boxes": {
        "a": {
          "accept": [
            "24"
          ],
          "units": {
            "%": 1,
            "procent": 1,
            "‰": "1/10",
            "promille": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Skatten är lönen före skatt minus det som är kvar."
        },
        {
          "math": "40 000 - 30 400 = 9600"
        },
        {
          "text": "Skatten som andel av lönen före skatt:"
        },
        {
          "math": "{9600|40 000} = {24|100} = 24 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "76"
          },
          "text": "Det är andelen som är kvar. Frågan gäller skatten."
        }
      ]
    },
    {
      "id": "rp5-moms-f6c8a667",
      "part": "moms",
      "text": "En soffa kostar 7200 kr utan moms. Momsen är 25 %. Vad kostar soffan med moms?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
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
          "text": "Momsen är 25 % av priset utan moms: 25 % av 7200 kr är 1800 kr."
        },
        {
          "math": "25 % · 7200 = 1800"
        },
        {
          "text": "Med moms: 7200 + 1800 = 9000 kr."
        },
        {
          "math": "7200 + 1800 = 9000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1800"
          },
          "text": "Det är bara momsen. Priset med moms är priset utan moms plus momsen."
        },
        {
          "answers": {
            "a": "7225"
          },
          "text": "Du lade till 25 kr. Men 25 % är en del av priset, inte 25 kr."
        }
      ]
    },
    {
      "id": "rp5-moms-cb24aa29",
      "part": "moms",
      "text": "En cykel kostar 4800 kr utan moms. Man ska också betala 25 % moms. Hur mycket kostar cykeln när momsen är inräknad?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6000"
          ]
        }
      },
      "solution": [
        {
          "text": "Momsen är 25 % av priset utan moms: 25 % av 4800 kr är 1200 kr."
        },
        {
          "math": "25 % · 4800 = 1200"
        },
        {
          "text": "Med moms: 4800 + 1200 = 6000 kr."
        },
        {
          "math": "4800 + 1200 = 6000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1200"
          },
          "text": "Det är bara momsen. Priset med moms är priset utan moms plus momsen."
        },
        {
          "answers": {
            "a": "4825"
          },
          "text": "Du lade till 25 kr. Men 25 % är en del av priset, inte 25 kr."
        }
      ]
    },
    {
      "id": "rp5-moms-9ad0b5cc",
      "part": "moms",
      "text": "En lunch på restaurang kostar 125 kr utan moms. Momsen är 12 %. Hur mycket betalar man för lunchen?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "140"
          ]
        }
      },
      "solution": [
        {
          "text": "Momsen är 12 % av priset utan moms: 12 % av 125 kr är 15 kr."
        },
        {
          "math": "12 % · 125 = 15"
        },
        {
          "text": "Med moms: 125 + 15 = 140 kr."
        },
        {
          "math": "125 + 15 = 140"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Det är bara momsen. Priset med moms är priset utan moms plus momsen."
        },
        {
          "answers": {
            "a": "137"
          },
          "text": "Du lade till 12 kr. Men 12 % är en del av priset, inte 12 kr."
        }
      ]
    },
    {
      "id": "rp5-moms-9a2d9706",
      "part": "moms",
      "text": "En mobiltelefon kostar 3200 kr utan moms. Momsen är 25 %. Vad betalar man totalt?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4000"
          ]
        }
      },
      "solution": [
        {
          "text": "Momsen är 25 % av priset utan moms: 25 % av 3200 kr är 800 kr."
        },
        {
          "math": "25 % · 3200 = 800"
        },
        {
          "text": "Med moms: 3200 + 800 = 4000 kr."
        },
        {
          "math": "3200 + 800 = 4000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "800"
          },
          "text": "Det är bara momsen. Priset med moms är priset utan moms plus momsen."
        },
        {
          "answers": {
            "a": "3225"
          },
          "text": "Du lade till 25 kr. Men 25 % är en del av priset, inte 25 kr."
        }
      ]
    },
    {
      "id": "rp5-moms-a9b16b73",
      "part": "moms",
      "text": "En surfplatta kostar 2800 kr utan moms. Momsen är 25 %. Hur mycket kostar surfplattan med moms?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3500"
          ]
        }
      },
      "solution": [
        {
          "text": "Momsen är 25 % av priset utan moms: 25 % av 2800 kr är 700 kr."
        },
        {
          "math": "25 % · 2800 = 700"
        },
        {
          "text": "Med moms: 2800 + 700 = 3500 kr."
        },
        {
          "math": "2800 + 700 = 3500"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "700"
          },
          "text": "Det är bara momsen. Priset med moms är priset utan moms plus momsen."
        },
        {
          "answers": {
            "a": "2825"
          },
          "text": "Du lade till 25 kr. Men 25 % är en del av priset, inte 25 kr."
        }
      ]
    },
    {
      "id": "rp5-moms-ac8615ac",
      "part": "moms",
      "text": "Ett hotellrum kostar 1500 kr per natt utan moms. Momsen är 12 %. Vad kostar rummet per natt med moms?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1680"
          ]
        }
      },
      "solution": [
        {
          "text": "Momsen är 12 % av priset utan moms: 12 % av 1500 kr är 180 kr."
        },
        {
          "math": "12 % · 1500 = 180"
        },
        {
          "text": "Med moms: 1500 + 180 = 1680 kr."
        },
        {
          "math": "1500 + 180 = 1680"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "180"
          },
          "text": "Det är bara momsen. Priset med moms är priset utan moms plus momsen."
        },
        {
          "answers": {
            "a": "1512"
          },
          "text": "Du lade till 12 kr. Men 12 % är en del av priset, inte 12 kr."
        }
      ]
    },
    {
      "id": "rp5-hojning-sankning-b9b76ae3",
      "part": "hojning-sankning",
      "text": "En bluetooth-högtalare för 320 kr höjs i pris med 25 %. På det höjda priset ger butiken 25 % rabatt. Vad kostar högtalaren?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "300"
          ]
        }
      },
      "solution": [
        {
          "text": "Höjningen räknas på det gamla priset."
        },
        {
          "math": "320 + 25 % · 320 = 400"
        },
        {
          "text": "Sänkningen räknas på det nya priset, 400 kr."
        },
        {
          "math": "400 - 25 % · 400 = 300"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "320"
          },
          "text": "Sänkningen räknas på det höjda priset, så den blir större än höjningen."
        }
      ]
    },
    {
      "id": "rp5-hojning-sankning-2cdfb89f",
      "part": "hojning-sankning",
      "text": "En jacka för 480 kr blir 25 % dyrare. Därefter sänks det nya priset med 10 %. Vad kostar jackan nu?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "540"
          ]
        }
      },
      "solution": [
        {
          "text": "Höjningen räknas på det gamla priset."
        },
        {
          "math": "480 + 25 % · 480 = 600"
        },
        {
          "text": "Sänkningen räknas på det nya priset, 600 kr."
        },
        {
          "math": "600 - 10 % · 600 = 540"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "552"
          },
          "text": "+25 % − 10 % blir inte +15 %: sänkningen räknas på det höjda priset."
        }
      ]
    },
    {
      "id": "rp5-hojning-sankning-73eef633",
      "part": "hojning-sankning",
      "text": "En skateboard kostar 800 kr. Priset höjs med 10 %, och på det nya priset ges 10 % rabatt. Vad kostar den då?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "792"
          ]
        }
      },
      "solution": [
        {
          "text": "Höjningen räknas på det gamla priset."
        },
        {
          "math": "800 + 10 % · 800 = 880"
        },
        {
          "text": "Sänkningen räknas på det nya priset, 880 kr."
        },
        {
          "math": "880 - 10 % · 880 = 792"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "800"
          },
          "text": "Sänkningen räknas på det höjda priset, så den blir större än höjningen."
        }
      ]
    },
    {
      "id": "rp5-hojning-sankning-e032d790",
      "part": "hojning-sankning",
      "text": "En fotbollströja för 600 kr höjs i pris med 20 %. Sedan sänks det nya priset med 20 %. Vad kostar tröjan?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "576"
          ]
        }
      },
      "solution": [
        {
          "text": "Höjningen räknas på det gamla priset."
        },
        {
          "math": "600 + 20 % · 600 = 720"
        },
        {
          "text": "Sänkningen räknas på det nya priset, 720 kr."
        },
        {
          "math": "720 - 20 % · 720 = 576"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "600"
          },
          "text": "Sänkningen räknas på det höjda priset, så den blir större än höjningen."
        }
      ]
    },
    {
      "id": "rp5-hojning-sankning-b7bd2591",
      "part": "hojning-sankning",
      "text": "En gitarr för 500 kr höjs i pris med 30 %. På det höjda priset ger butiken 30 % rabatt. Vad kostar gitarren?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "455"
          ]
        }
      },
      "solution": [
        {
          "text": "Höjningen räknas på det gamla priset."
        },
        {
          "math": "500 + 30 % · 500 = 650"
        },
        {
          "text": "Sänkningen räknas på det nya priset, 650 kr."
        },
        {
          "math": "650 - 30 % · 650 = 455"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "500"
          },
          "text": "Sänkningen räknas på det höjda priset, så den blir större än höjningen."
        }
      ]
    },
    {
      "id": "rp5-hojning-sankning-8bec99da",
      "part": "hojning-sankning",
      "text": "En mikrovågsugn för 1000 kr höjs i pris med 10 %. Sedan ges 20 % rabatt på det nya priset. Vad kostar ugnen?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "880"
          ]
        }
      },
      "solution": [
        {
          "text": "Höjningen räknas på det gamla priset."
        },
        {
          "math": "1000 + 10 % · 1000 = 1100"
        },
        {
          "text": "Sänkningen räknas på det nya priset, 1100 kr."
        },
        {
          "math": "1100 - 20 % · 1100 = 880"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "900"
          },
          "text": "+10 % − 20 % blir inte −10 %: sänkningen räknas på det höjda priset."
        }
      ]
    },
    {
      "id": "rp5-pris-fore-rabatt-329d8183",
      "part": "pris-fore-rabatt",
      "text": "En skrivbordslampa är nedsatt med 25 %. Nu kostar den 450 kr. Vad kostade lampan före nedsättningen?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "600"
          ]
        }
      },
      "solution": [
        {
          "text": "Efter 25 % rabatt betalar man 75 % av det ordinarie priset."
        },
        {
          "text": "450 kr är 75 %: 1 % är 450 / 75 = 6 kr, och 100 % är 100 · 6 = 600 kr."
        },
        {
          "math": "450 / 75 = 6"
        },
        {
          "math": "100 · 6 = 600"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "562,5"
          },
          "text": "Du lade 25 % av 450 kr ovanpå. Men rabatten räknades på det gamla priset."
        },
        {
          "answers": {
            "a": "475"
          },
          "text": "Du lade till 25 kr. Men 25 % är en del av det gamla priset, inte 25 kr."
        }
      ]
    },
    {
      "id": "rp5-pris-fore-rabatt-aefdadae",
      "part": "pris-fore-rabatt",
      "text": "Ali köper en bokhylla med 40 % rabatt och betalar 540 kr. Vad är bokhyllans ordinarie pris?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "900"
          ]
        }
      },
      "solution": [
        {
          "text": "Efter 40 % rabatt betalar man 60 % av det ordinarie priset."
        },
        {
          "text": "540 kr är 60 %: 1 % är 540 / 60 = 9 kr, och 100 % är 100 · 9 = 900 kr."
        },
        {
          "math": "540 / 60 = 9"
        },
        {
          "math": "100 · 9 = 900"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "756"
          },
          "text": "Du lade 40 % av 540 kr ovanpå. Men rabatten räknades på det gamla priset."
        },
        {
          "answers": {
            "a": "580"
          },
          "text": "Du lade till 40 kr. Men 40 % är en del av det gamla priset, inte 40 kr."
        }
      ]
    },
    {
      "id": "rp5-pris-fore-rabatt-5bff580e",
      "part": "pris-fore-rabatt",
      "text": "En mobil säljs med 20 % rabatt för 960 kr. Vilket var priset utan rabatt?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1200"
          ]
        }
      },
      "solution": [
        {
          "text": "Efter 20 % rabatt betalar man 80 % av det ordinarie priset."
        },
        {
          "text": "960 kr är 80 %: 1 % är 960 / 80 = 12 kr, och 100 % är 100 · 12 = 1200 kr."
        },
        {
          "math": "960 / 80 = 12"
        },
        {
          "math": "100 · 12 = 1200"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1152"
          },
          "text": "Du lade 20 % av 960 kr ovanpå. Men rabatten räknades på det gamla priset."
        },
        {
          "answers": {
            "a": "980"
          },
          "text": "Du lade till 20 kr. Men 20 % är en del av det gamla priset, inte 20 kr."
        }
      ]
    },
    {
      "id": "rp5-pris-fore-rabatt-3df13665",
      "part": "pris-fore-rabatt",
      "text": "Efter 30 % rabatt kostar en kamera 1050 kr. Vad kostade kameran innan rabatten?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1500"
          ]
        }
      },
      "solution": [
        {
          "text": "Efter 30 % rabatt betalar man 70 % av det ordinarie priset."
        },
        {
          "text": "1050 kr är 70 %: 1 % är 1050 / 70 = 15 kr, och 100 % är 100 · 15 = 1500 kr."
        },
        {
          "math": "1050 / 70 = 15"
        },
        {
          "math": "100 · 15 = 1500"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1365"
          },
          "text": "Du lade 30 % av 1050 kr ovanpå. Men rabatten räknades på det gamla priset."
        },
        {
          "answers": {
            "a": "1080"
          },
          "text": "Du lade till 30 kr. Men 30 % är en del av det gamla priset, inte 30 kr."
        }
      ]
    },
    {
      "id": "rp5-pris-fore-rabatt-ee7e9646",
      "part": "pris-fore-rabatt",
      "text": "Ett par byxor har fått 10 % rabatt och kostar nu 630 kr. Vad var det ordinarie priset?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "700"
          ]
        }
      },
      "solution": [
        {
          "text": "Efter 10 % rabatt betalar man 90 % av det ordinarie priset."
        },
        {
          "text": "630 kr är 90 %: 1 % är 630 / 90 = 7 kr, och 100 % är 100 · 7 = 700 kr."
        },
        {
          "math": "630 / 90 = 7"
        },
        {
          "math": "100 · 7 = 700"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "693"
          },
          "text": "Du lade 10 % av 630 kr ovanpå. Men rabatten räknades på det gamla priset."
        },
        {
          "answers": {
            "a": "640"
          },
          "text": "Du lade till 10 kr. Men 10 % är en del av det gamla priset, inte 10 kr."
        }
      ]
    },
    {
      "id": "rp5-pris-fore-rabatt-0139a5f9",
      "part": "pris-fore-rabatt",
      "text": "På en rea är alla priser sänkta med 15 %. Mira betalar 680 kr för en jacka. Hur mycket hade jackan kostat utan rea?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "800"
          ]
        }
      },
      "solution": [
        {
          "text": "Efter 15 % rabatt betalar man 85 % av det ordinarie priset."
        },
        {
          "text": "680 kr är 85 %: 1 % är 680 / 85 = 8 kr, och 100 % är 100 · 8 = 800 kr."
        },
        {
          "math": "680 / 85 = 8"
        },
        {
          "math": "100 · 8 = 800"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "782"
          },
          "text": "Du lade 15 % av 680 kr ovanpå. Men rabatten räknades på det gamla priset."
        },
        {
          "answers": {
            "a": "695"
          },
          "text": "Du lade till 15 kr. Men 15 % är en del av det gamla priset, inte 15 kr."
        }
      ]
    }
  ]
};
