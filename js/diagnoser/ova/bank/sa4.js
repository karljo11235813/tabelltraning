// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till SA4.
export default {
  "code": "SA4",
  "parts": [
    {
      "id": "stickprov",
      "title": "Sannolikhet från ett stickprov",
      "labels": [
        "1a",
        "1b",
        "1c"
      ]
    },
    {
      "id": "kast",
      "title": "Andelar och sannolikhet vid kast",
      "labels": [
        "2a",
        "2b",
        "2c"
      ]
    },
    {
      "id": "tva-mynt",
      "title": "Kast med två mynt",
      "labels": [
        "3"
      ]
    },
    {
      "id": "stickprov-slutsats",
      "title": "Slutsatser från ett stickprov",
      "labels": [
        "4"
      ]
    },
    {
      "id": "marka",
      "title": "Märka och fånga igen",
      "labels": [
        "5"
      ]
    }
  ],
  "tasks": [
    {
      "id": "sa4-stickprov-f21ac996",
      "part": "stickprov",
      "text": "Lina blundar och stoppar ner handen i en stor burk med 500 pärlor. Lina drar 50 pärlor ur burken och antecknar i tabellen vilken färg de har. Vilken färg bör det enligt försöket vara störst sannolikhet att få, om man drar en till?",
      "table": {
        "head": [
          "Färg",
          "Antal"
        ],
        "rows": [
          [
            "Blå",
            "12"
          ],
          [
            "Röd",
            "5"
          ],
          [
            "Gul",
            "18"
          ],
          [
            "Vit",
            "9"
          ],
          [
            "Svart",
            "6"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Gul",
            "gul pärla",
            "en gul",
            "en gul pärla",
            "gul",
            "gult",
            "gula",
            "gul pärlor",
            "gult pärlor",
            "gula pärlor"
          ]
        }
      },
      "solution": [
        {
          "text": "Försöket säger hur vanliga färgerna är i hela behållaren: den färg som kom flest gånger bör vara mest sannolik."
        },
        {
          "text": "Gul kom 18 gånger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "Röd"
          },
          "text": "Det är tvärtom: röd kom minst gånger."
        }
      ]
    },
    {
      "id": "sa4-stickprov-0fac0aba",
      "part": "stickprov",
      "text": "Lina blundar och stoppar ner handen i en stor burk med 500 pärlor. Lina drar 50 pärlor ur burken och antecknar i tabellen vilken färg de har. Ungefär hur många av alla 500 pärlor bör vara röda?",
      "table": {
        "head": [
          "Färg",
          "Antal"
        ],
        "rows": [
          [
            "Blå",
            "15"
          ],
          [
            "Röd",
            "8"
          ],
          [
            "Gul",
            "13"
          ],
          [
            "Vit",
            "6"
          ],
          [
            "Svart",
            "8"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "80"
          ]
        }
      },
      "solution": [
        {
          "text": "8 av 50 pärlor i försöket är röda. Samma andel bör vara röda bland alla 500."
        },
        {
          "math": "{8|50} · 500 = 80"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Det är antalet i försöket. Frågan gäller alla 500 pärlor."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "Det är andelen i procent. Frågan gäller antalet bland alla 500."
        }
      ]
    },
    {
      "id": "sa4-stickprov-e4b4fc65",
      "part": "stickprov",
      "text": "I en stor påse finns det 2 000 godisbitar. Hugo tar 100 bitar utan att titta och antecknar i tabellen vilken färg de har. Ungefär hur många av alla 2 000 bitar bör vara gröna?",
      "table": {
        "head": [
          "Färg",
          "Antal"
        ],
        "rows": [
          [
            "Röd",
            "30"
          ],
          [
            "Grön",
            "24"
          ],
          [
            "Gul",
            "10"
          ],
          [
            "Blå",
            "36"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "24 av 100 bitar i försöket är gröna. Samma andel bör vara gröna bland alla 2 000."
        },
        {
          "math": "{24|100} · 2 000 = 480"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24"
          },
          "text": "Det är antalet i försöket. Frågan gäller alla 2 000 bitar."
        }
      ]
    },
    {
      "id": "sa4-stickprov-8eb3cc42",
      "part": "stickprov",
      "text": "I en låda finns det 800 legobitar. Sara tar 40 bitar utan att titta och antecknar i tabellen vilken färg de har. Vilken färg bör det enligt försöket vara minst sannolikt att få?",
      "table": {
        "head": [
          "Färg",
          "Antal"
        ],
        "rows": [
          [
            "Gul",
            "14"
          ],
          [
            "Grön",
            "6"
          ],
          [
            "Vit",
            "3"
          ],
          [
            "Blå",
            "17"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Vit",
            "vit bit",
            "en vit",
            "en vit bit",
            "vit",
            "vitt",
            "vita",
            "vit bitar",
            "vitt bitar",
            "vita bitar"
          ]
        }
      },
      "solution": [
        {
          "text": "Försöket säger hur vanliga färgerna är i hela behållaren: den färg som kom minst gånger bör vara minst sannolik."
        },
        {
          "text": "Vit kom 3 gånger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "Blå"
          },
          "text": "Det är tvärtom: blå kom flest gånger."
        }
      ]
    },
    {
      "id": "sa4-stickprov-87151956",
      "part": "stickprov",
      "text": "I en hink finns det 600 knappar. Ali tar 30 knappar utan att titta och antecknar i tabellen vilken färg de har. Vilken färg bör det enligt försöket vara minst sannolikt att få?",
      "table": {
        "head": [
          "Färg",
          "Antal"
        ],
        "rows": [
          [
            "Svart",
            "11"
          ],
          [
            "Vit",
            "12"
          ],
          [
            "Röd",
            "2"
          ],
          [
            "Grön",
            "5"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Röd",
            "röd knapp",
            "en röd",
            "en röd knapp",
            "röd",
            "rött",
            "röda",
            "röd knappar",
            "rött knappar",
            "röda knappar"
          ]
        }
      },
      "solution": [
        {
          "text": "Försöket säger hur vanliga färgerna är i hela behållaren: den färg som kom minst gånger bör vara minst sannolik."
        },
        {
          "text": "Röd kom 2 gånger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "Vit"
          },
          "text": "Det är tvärtom: vit kom flest gånger."
        }
      ]
    },
    {
      "id": "sa4-stickprov-af9941d7",
      "part": "stickprov",
      "text": "I en stor påse finns det 2 000 godisbitar. Hugo tar 100 bitar utan att titta och antecknar i tabellen vilken färg de har. Vilken färg bör det enligt försöket vara störst sannolikhet att få, om man drar en till?",
      "table": {
        "head": [
          "Färg",
          "Antal"
        ],
        "rows": [
          [
            "Röd",
            "31"
          ],
          [
            "Grön",
            "24"
          ],
          [
            "Gul",
            "8"
          ],
          [
            "Blå",
            "37"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "Blå",
            "blå bit",
            "en blå",
            "en blå bit",
            "blå",
            "blått",
            "blåa",
            "blå bitar",
            "blått bitar",
            "blåa bitar"
          ]
        }
      },
      "solution": [
        {
          "text": "Försöket säger hur vanliga färgerna är i hela behållaren: den färg som kom flest gånger bör vara mest sannolik."
        },
        {
          "text": "Blå kom 37 gånger."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "Gul"
          },
          "text": "Det är tvärtom: gul kom minst gånger."
        }
      ]
    },
    {
      "id": "sa4-kast-98ce81b5",
      "part": "kast",
      "text": "Om man kastar en plastmugg kan den hamna på sidan eller stående. Tabellen beskriver resultatet av ett försök där man kastat en plastmugg. Fyll i andelen, som bråk eller i procent.",
      "points": "one",
      "table": {
        "head": [
          "Antal kast",
          "På sidan",
          "Andel"
        ],
        "rows": [
          [
            "10",
            "8",
            "[a]"
          ],
          [
            "50",
            "37",
            "[b]"
          ],
          [
            "100",
            "71",
            "[c]"
          ],
          [
            "500",
            "352",
            "[d]"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "8/10"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        },
        "b": {
          "accept": [
            "37/50"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        },
        "c": {
          "accept": [
            "71/100"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        },
        "d": {
          "accept": [
            "352/500"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Andelen är antalet kast med det utfallet delat med alla kast."
        },
        {
          "text": "Som procent: 80 %, 74 %, 71 %, 70,4 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10/8"
          },
          "text": "Bråket står upp och ned: täljaren är antalet med det utfallet och nämnaren alla kast."
        }
      ]
    },
    {
      "id": "sa4-kast-5b21d957",
      "part": "kast",
      "text": "Om man kastar en kapsyl kan man få öppningen upp eller öppningen ner. Tabellen beskriver resultatet av ett försök där man kastat en kapsyl. Fyll i andelen, som bråk eller i procent.",
      "points": "one",
      "table": {
        "head": [
          "Antal kast",
          "Öppningen upp",
          "Andel"
        ],
        "rows": [
          [
            "10",
            "4",
            "[a]"
          ],
          [
            "50",
            "16",
            "[b]"
          ],
          [
            "100",
            "29",
            "[c]"
          ],
          [
            "500",
            "151",
            "[d]"
          ]
        ]
      },
      "boxes": {
        "a": {
          "accept": [
            "4/10"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        },
        "b": {
          "accept": [
            "16/50"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        },
        "c": {
          "accept": [
            "29/100"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        },
        "d": {
          "accept": [
            "151/500"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Andelen är antalet kast med det utfallet delat med alla kast."
        },
        {
          "text": "Som procent: 40 %, 32 %, 29 %, 30,2 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10/4"
          },
          "text": "Bråket står upp och ned: täljaren är antalet med det utfallet och nämnaren alla kast."
        }
      ]
    },
    {
      "id": "sa4-kast-efa23b25",
      "part": "kast",
      "text": "Om man kastar en plastmugg kan den hamna på sidan eller stående. Tabellen beskriver resultatet av ett försök där man kastat en plastmugg. Ungefär hur stor är sannolikheten att muggen hamnar på sidan?",
      "points": "each",
      "table": {
        "head": [
          "Antal kast",
          "På sidan"
        ],
        "rows": [
          [
            "10",
            "8"
          ],
          [
            "20",
            "14"
          ],
          [
            "50",
            "37"
          ],
          [
            "100",
            "71"
          ],
          [
            "200",
            "139"
          ],
          [
            "500",
            "352"
          ]
        ]
      },
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "cirka 70 %"
          ],
          "range": {
            "ge": "0,68",
            "le": "0,72"
          },
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Andelen hoppar när kasten är få, men stabiliseras när de blir många. Efter 500 kast är den 70,4 % för på sidan."
        },
        {
          "math": "{352|500} = 70,4 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "80 %"
          },
          "text": "Det är andelen efter de första 10 kasten. Ju fler kast, desto säkrare: läs av den sista raden."
        }
      ]
    },
    {
      "id": "sa4-kast-6e679708",
      "part": "kast",
      "text": "Om man kastar en klädnypa kan den hamna på sidan eller på kanten. Tabellen beskriver resultatet av ett försök där man kastat en klädnypa. Ungefär hur stor är sannolikheten att klädnypan hamnar på sidan?",
      "points": "each",
      "table": {
        "head": [
          "Antal kast",
          "På sidan"
        ],
        "rows": [
          [
            "10",
            "6"
          ],
          [
            "20",
            "9"
          ],
          [
            "50",
            "22"
          ],
          [
            "100",
            "46"
          ],
          [
            "200",
            "91"
          ],
          [
            "500",
            "224"
          ]
        ]
      },
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "cirka 45 %"
          ],
          "range": {
            "ge": "0,43",
            "le": "0,47"
          },
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Andelen hoppar när kasten är få, men stabiliseras när de blir många. Efter 500 kast är den 44,8 % för på sidan."
        },
        {
          "math": "{224|500} = 44,8 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60 %"
          },
          "text": "Det är andelen efter de första 10 kasten. Ju fler kast, desto säkrare: läs av den sista raden."
        }
      ]
    },
    {
      "id": "sa4-kast-00432dce",
      "part": "kast",
      "text": "Om man kastar en klädnypa kan den hamna på sidan eller på kanten. Tabellen beskriver resultatet av ett försök där man kastat en klädnypa. Ungefär hur stor är sannolikheten att klädnypan hamnar på kanten?",
      "points": "each",
      "table": {
        "head": [
          "Antal kast",
          "På sidan"
        ],
        "rows": [
          [
            "10",
            "6"
          ],
          [
            "20",
            "9"
          ],
          [
            "50",
            "22"
          ],
          [
            "100",
            "46"
          ],
          [
            "200",
            "91"
          ],
          [
            "500",
            "224"
          ]
        ]
      },
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "cirka 55 %"
          ],
          "range": {
            "ge": "0,53",
            "le": "0,57"
          },
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Andelen hoppar när kasten är få, men stabiliseras när de blir många. Efter 500 kast är den 44,8 % för på sidan."
        },
        {
          "math": "{224|500} = 44,8 %"
        },
        {
          "text": "Alla andra kast hamnar åt andra hållet: ungefär 100 % − 45 % = 55 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40 %"
          },
          "text": "Det är andelen efter de första 10 kasten. Ju fler kast, desto säkrare: läs av den sista raden."
        },
        {
          "answers": {
            "a": "45 %"
          },
          "text": "Det är sannolikheten för det andra utfallet, det som står i tabellen. Frågan gäller resten."
        }
      ]
    },
    {
      "id": "sa4-kast-2f4207df",
      "part": "kast",
      "text": "Om man kastar en kapsyl kan man få öppningen upp eller öppningen ner. Tabellen beskriver resultatet av ett försök där man kastat en kapsyl. Ungefär hur stor är sannolikheten att öppningen hamnar ner?",
      "points": "each",
      "table": {
        "head": [
          "Antal kast",
          "Öppningen upp"
        ],
        "rows": [
          [
            "10",
            "4"
          ],
          [
            "20",
            "7"
          ],
          [
            "50",
            "16"
          ],
          [
            "100",
            "29"
          ],
          [
            "200",
            "62"
          ],
          [
            "500",
            "151"
          ]
        ]
      },
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "cirka 70 %"
          ],
          "range": {
            "ge": "0,68",
            "le": "0,72"
          },
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Andelen hoppar när kasten är få, men stabiliseras när de blir många. Efter 500 kast är den 30,2 % för öppningen upp."
        },
        {
          "math": "{151|500} = 30,2 %"
        },
        {
          "text": "Alla andra kast hamnar åt andra hållet: ungefär 100 % − 30 % = 70 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60 %"
          },
          "text": "Det är andelen efter de första 10 kasten. Ju fler kast, desto säkrare: läs av den sista raden."
        },
        {
          "answers": {
            "a": "30 %"
          },
          "text": "Det är sannolikheten för det andra utfallet, det som står i tabellen. Frågan gäller resten."
        }
      ]
    },
    {
      "id": "sa4-tva-mynt-67c3736f",
      "part": "tva-mynt",
      "text": "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Om man kastar två mynt så kan man få tre olika utfall (resultat): en krona och en klave; två kronor; två klavar. Vid ett försök kastade man två mynt och fick det här resultatet. Hur stor är sannolikheten för att få högst en krona?",
      "table": {
        "head": [
          "Antal kast",
          "Två kronor",
          "En krona och en klave",
          "Två klavar"
        ],
        "rows": [
          [
            "10",
            "1",
            "6",
            "3"
          ],
          [
            "40",
            "9",
            "22",
            "9"
          ],
          [
            "100",
            "26",
            "49",
            "25"
          ],
          [
            "800",
            "203",
            "396",
            "201"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/4"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Två mynt kan falla på fyra lika troliga sätt: krona–krona, krona–klave, klave–krona och klave–klave."
        },
        {
          "text": "3 av de fyra sätten ger högst en krona, och försöket visar samma sak: ju fler kast, desto närmare 75 % kommer andelen."
        },
        {
          "math": "{3|4} = 75 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/3"
          },
          "text": "De tre utfallen är inte lika troliga: en krona och en klave kan komma på två sätt."
        },
        {
          "answers": {
            "a": "597/800"
          },
          "text": "Det är andelen i försöket. Sannolikheten är det värde som andelen närmar sig, 3/4."
        }
      ]
    },
    {
      "id": "sa4-tva-mynt-a04188bd",
      "part": "tva-mynt",
      "text": "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Om man kastar två mynt så kan man få tre olika utfall (resultat): en krona och en klave; två kronor; två klavar. Vid ett försök kastade man två mynt och fick det här resultatet. Hur stor är sannolikheten för att få en krona och en klave?",
      "table": {
        "head": [
          "Antal kast",
          "Två kronor",
          "En krona och en klave",
          "Två klavar"
        ],
        "rows": [
          [
            "30",
            "9",
            "14",
            "7"
          ],
          [
            "100",
            "23",
            "52",
            "25"
          ],
          [
            "300",
            "77",
            "148",
            "75"
          ],
          [
            "1000",
            "246",
            "507",
            "247"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/4"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Två mynt kan falla på fyra lika troliga sätt: krona–krona, krona–klave, klave–krona och klave–klave."
        },
        {
          "text": "2 av de fyra sätten ger en krona och en klave, och försöket visar samma sak: ju fler kast, desto närmare 50 % kommer andelen."
        },
        {
          "math": "{2|4} = {1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "De tre utfallen är inte lika troliga: en krona och en klave kan komma på två sätt."
        },
        {
          "answers": {
            "a": "507/1000"
          },
          "text": "Det är andelen i försöket. Sannolikheten är det värde som andelen närmar sig, 2/4."
        }
      ]
    },
    {
      "id": "sa4-tva-mynt-bf3d899f",
      "part": "tva-mynt",
      "text": "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Om man kastar två mynt så kan man få tre olika utfall (resultat): en krona och en klave; två kronor; två klavar. Vid ett försök kastade man två mynt och fick det här resultatet. Hur stor är sannolikheten för att få minst en krona?",
      "table": {
        "head": [
          "Antal kast",
          "Två kronor",
          "En krona och en klave",
          "Två klavar"
        ],
        "rows": [
          [
            "20",
            "4",
            "11",
            "5"
          ],
          [
            "80",
            "22",
            "37",
            "21"
          ],
          [
            "200",
            "49",
            "104",
            "47"
          ],
          [
            "600",
            "146",
            "302",
            "152"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/4"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Två mynt kan falla på fyra lika troliga sätt: krona–krona, krona–klave, klave–krona och klave–klave."
        },
        {
          "text": "3 av de fyra sätten ger minst en krona, och försöket visar samma sak: ju fler kast, desto närmare 75 % kommer andelen."
        },
        {
          "math": "{3|4} = 75 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/3"
          },
          "text": "De tre utfallen är inte lika troliga: en krona och en klave kan komma på två sätt."
        },
        {
          "answers": {
            "a": "448/600"
          },
          "text": "Det är andelen i försöket. Sannolikheten är det värde som andelen närmar sig, 3/4."
        }
      ]
    },
    {
      "id": "sa4-tva-mynt-291cdc18",
      "part": "tva-mynt",
      "text": "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Om man kastar två mynt så kan man få tre olika utfall (resultat): en krona och en klave; två kronor; två klavar. Vid ett försök kastade man två mynt och fick det här resultatet. Hur stor är sannolikheten för att få en krona och en klave?",
      "table": {
        "head": [
          "Antal kast",
          "Två kronor",
          "En krona och en klave",
          "Två klavar"
        ],
        "rows": [
          [
            "10",
            "4",
            "4",
            "2"
          ],
          [
            "60",
            "14",
            "31",
            "15"
          ],
          [
            "200",
            "52",
            "97",
            "51"
          ],
          [
            "400",
            "101",
            "198",
            "101"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/4"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Två mynt kan falla på fyra lika troliga sätt: krona–krona, krona–klave, klave–krona och klave–klave."
        },
        {
          "text": "2 av de fyra sätten ger en krona och en klave, och försöket visar samma sak: ju fler kast, desto närmare 50 % kommer andelen."
        },
        {
          "math": "{2|4} = {1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "De tre utfallen är inte lika troliga: en krona och en klave kan komma på två sätt."
        },
        {
          "answers": {
            "a": "198/400"
          },
          "text": "Det är andelen i försöket. Sannolikheten är det värde som andelen närmar sig, 2/4."
        }
      ]
    },
    {
      "id": "sa4-tva-mynt-5c7380df",
      "part": "tva-mynt",
      "text": "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Om man kastar två mynt så kan man få tre olika utfall (resultat): en krona och en klave; två kronor; två klavar. Vid ett försök kastade man två mynt och fick det här resultatet. Hur stor är sannolikheten för att få två kronor?",
      "table": {
        "head": [
          "Antal kast",
          "Två kronor",
          "En krona och en klave",
          "Två klavar"
        ],
        "rows": [
          [
            "10",
            "2",
            "5",
            "3"
          ],
          [
            "50",
            "13",
            "26",
            "11"
          ],
          [
            "100",
            "24",
            "52",
            "24"
          ],
          [
            "400",
            "96",
            "205",
            "99"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/4"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Två mynt kan falla på fyra lika troliga sätt: krona–krona, krona–klave, klave–krona och klave–klave."
        },
        {
          "text": "1 av de fyra sätten ger två kronor, och försöket visar samma sak: ju fler kast, desto närmare 25 % kommer andelen."
        },
        {
          "math": "{1|4} = 25 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "De tre utfallen är inte lika troliga: en krona och en klave kan komma på två sätt."
        },
        {
          "answers": {
            "a": "96/400"
          },
          "text": "Det är andelen i försöket. Sannolikheten är det värde som andelen närmar sig, 1/4."
        }
      ]
    },
    {
      "id": "sa4-tva-mynt-1354a458",
      "part": "tva-mynt",
      "text": "En enkrona har två sidor. Dessa kallas: ”Klave” och ”Krona”. Om man kastar två mynt så kan man få tre olika utfall (resultat): en krona och en klave; två kronor; två klavar. Vid ett försök kastade man två mynt och fick det här resultatet. Hur stor är sannolikheten för att få två klavar?",
      "table": {
        "head": [
          "Antal kast",
          "Två kronor",
          "En krona och en klave",
          "Två klavar"
        ],
        "rows": [
          [
            "20",
            "6",
            "9",
            "5"
          ],
          [
            "100",
            "27",
            "51",
            "22"
          ],
          [
            "200",
            "46",
            "103",
            "51"
          ],
          [
            "500",
            "128",
            "247",
            "125"
          ]
        ]
      },
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/4"
          ],
          "units": {
            "%": "1/100",
            "procent": "1/100",
            "‰": "1/1000",
            "promille": "1/1000"
          }
        }
      },
      "solution": [
        {
          "text": "Två mynt kan falla på fyra lika troliga sätt: krona–krona, krona–klave, klave–krona och klave–klave."
        },
        {
          "text": "1 av de fyra sätten ger två klavar, och försöket visar samma sak: ju fler kast, desto närmare 25 % kommer andelen."
        },
        {
          "math": "{1|4} = 25 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "De tre utfallen är inte lika troliga: en krona och en klave kan komma på två sätt."
        }
      ]
    },
    {
      "id": "sa4-stickprov-slutsats-3a345861",
      "part": "stickprov-slutsats",
      "text": "På ett fält växer 5 000 tulpaner. Man undersöker 250 av dem, och 40 är röda. Ungefär hur många röda tulpaner finns det på fältet?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "40 av 250 är röda. Samma andel bör gälla för hela mängden."
        },
        {
          "math": "{40|250} · 5 000 = 800"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "Det är antalet i stickprovet. Frågan gäller hela mängden."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "Det är andelen i procent. Frågan gäller antalet i hela mängden."
        },
        {
          "answers": {
            "a": "4 200"
          },
          "text": "Det är antalet tulpaner som inte är röda."
        }
      ]
    },
    {
      "id": "sa4-stickprov-slutsats-176474dc",
      "part": "stickprov-slutsats",
      "text": "En stad har 40 000 invånare. Man frågar 500 av dem, och 125 har katt. Ungefär hur många i staden har katt?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10 000"
          ]
        }
      },
      "solution": [
        {
          "text": "125 av 500 är kattägare. Samma andel bör gälla för hela mängden."
        },
        {
          "math": "{125|500} · 40 000 = 10 000"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "125"
          },
          "text": "Det är antalet i stickprovet. Frågan gäller hela mängden."
        },
        {
          "answers": {
            "a": "25"
          },
          "text": "Det är andelen i procent. Frågan gäller antalet i hela mängden."
        },
        {
          "answers": {
            "a": "30 000"
          },
          "text": "Det är antalet invånare utan katt."
        }
      ]
    },
    {
      "id": "sa4-stickprov-slutsats-e24e50ca",
      "part": "stickprov-slutsats",
      "text": "I en låda ligger 3 000 skruvar. Man tar 150 av dem, och 6 är rostiga. Ungefär hur många rostiga skruvar finns det i lådan?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "120"
          ]
        }
      },
      "solution": [
        {
          "text": "6 av 150 är rostiga. Samma andel bör gälla för hela mängden."
        },
        {
          "math": "{6|150} · 3 000 = 120"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Det är antalet i stickprovet. Frågan gäller hela mängden."
        },
        {
          "answers": {
            "a": "4"
          },
          "text": "Det är andelen i procent. Frågan gäller antalet i hela mängden."
        },
        {
          "answers": {
            "a": "2 880"
          },
          "text": "Det är antalet skruvar utan rost."
        }
      ]
    },
    {
      "id": "sa4-stickprov-slutsats-37d5d7f1",
      "part": "stickprov-slutsats",
      "text": "En fabrik gör 8 000 glödlampor om dagen. Man testar 100 av dem, och 3 är trasiga. Ungefär hur många glödlampor är trasiga en sådan dag?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "240"
          ]
        }
      },
      "solution": [
        {
          "text": "3 av 100 är trasiga. Samma andel bör gälla för hela mängden."
        },
        {
          "math": "{3|100} · 8 000 = 240"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Det är antalet i stickprovet. Frågan gäller hela mängden."
        },
        {
          "answers": {
            "a": "7 760"
          },
          "text": "Det är antalet hela glödlampor."
        }
      ]
    },
    {
      "id": "sa4-stickprov-slutsats-388d8854",
      "part": "stickprov-slutsats",
      "text": "På en skola går 600 elever. Man frågar 50 av dem, och 30 cyklar till skolan. Ungefär hur många av skolans elever cyklar?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "360"
          ]
        }
      },
      "solution": [
        {
          "text": "30 av 50 är cyklister. Samma andel bör gälla för hela mängden."
        },
        {
          "math": "{30|50} · 600 = 360"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Det är antalet i stickprovet. Frågan gäller hela mängden."
        },
        {
          "answers": {
            "a": "60"
          },
          "text": "Det är andelen i procent. Frågan gäller antalet i hela mängden."
        },
        {
          "answers": {
            "a": "240"
          },
          "text": "Det är antalet elever som inte cyklar."
        }
      ]
    },
    {
      "id": "sa4-stickprov-slutsats-a5fe5997",
      "part": "stickprov-slutsats",
      "text": "I en säck har man blandat ca 10 000 vita och bruna bönor. Ur säcken tar man slumpvis upp 200 bönor. Av dem är 170 bruna och 30 vita. Ungefär hur många vita bönor bör finnas i säcken?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1 500"
          ]
        }
      },
      "solution": [
        {
          "text": "30 av 200 är vita. Samma andel bör gälla för hela mängden."
        },
        {
          "math": "{30|200} · 10 000 = 1 500"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Det är antalet i stickprovet. Frågan gäller hela mängden."
        },
        {
          "answers": {
            "a": "15"
          },
          "text": "Det är andelen i procent. Frågan gäller antalet i hela mängden."
        },
        {
          "answers": {
            "a": "8 500"
          },
          "text": "Det är antalet bruna bönor."
        }
      ]
    },
    {
      "id": "sa4-marka-bd5a15b5",
      "part": "marka",
      "text": "I en skog fångar man och märker 30 ekorrar, som sedan släpps fria. När man sedan fångar 40 ekorrar är 5 av dem märkta. Hur många ekorrar bör det sannolikt finnas i skogen?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "240"
          ]
        }
      },
      "solution": [
        {
          "text": "5 av de 40 fångade är märkta. Det bör vara samma andel som de 30 märkta är av alla ekorrar."
        },
        {
          "math": "{5|40} = {30|240}"
        },
        {
          "math": "30 · 40 / 5 = 240"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "70"
          },
          "text": "Du lade ihop de märkta och de fångade. Andelen märkta bland de fångade säger hur stor hela gruppen är."
        },
        {
          "answers": {
            "a": "1 200"
          },
          "text": "Du glömde dela med 5, antalet märkta bland de fångade."
        },
        {
          "answers": {
            "a": "30"
          },
          "text": "Det är antalet märkta. Hela gruppen är större."
        }
      ]
    },
    {
      "id": "sa4-marka-b758a8ba",
      "part": "marka",
      "text": "För att räkna hur många fiskar det finns i en sjö fångar man och märker 40 fiskar, som sedan släpps tillbaka. När man sedan fångar 30 fiskar är 6 av dem märkta. Hur många fiskar bör det sannolikt finnas i sjön?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "6 av de 30 fångade är märkta. Det bör vara samma andel som de 40 märkta är av alla fiskar."
        },
        {
          "math": "{6|30} = {40|200}"
        },
        {
          "math": "40 · 30 / 6 = 200"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "70"
          },
          "text": "Du lade ihop de märkta och de fångade. Andelen märkta bland de fångade säger hur stor hela gruppen är."
        },
        {
          "answers": {
            "a": "1 200"
          },
          "text": "Du glömde dela med 6, antalet märkta bland de fångade."
        },
        {
          "answers": {
            "a": "40"
          },
          "text": "Det är antalet märkta. Hela gruppen är större."
        }
      ]
    },
    {
      "id": "sa4-marka-72379913",
      "part": "marka",
      "text": "I en damm fångar man och märker 80 gäddor, som sedan släpps tillbaka. När man sedan fångar 100 gäddor är 16 av dem märkta. Hur många gäddor bör det sannolikt finnas i dammen?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "16 av de 100 fångade är märkta. Det bör vara samma andel som de 80 märkta är av alla gäddor."
        },
        {
          "math": "{16|100} = {80|500}"
        },
        {
          "math": "80 · 100 / 16 = 500"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "180"
          },
          "text": "Du lade ihop de märkta och de fångade. Andelen märkta bland de fångade säger hur stor hela gruppen är."
        },
        {
          "answers": {
            "a": "8 000"
          },
          "text": "Du glömde dela med 16, antalet märkta bland de fångade."
        },
        {
          "answers": {
            "a": "80"
          },
          "text": "Det är antalet märkta. Hela gruppen är större."
        }
      ]
    },
    {
      "id": "sa4-marka-7c76c236",
      "part": "marka",
      "text": "I en bäck fångar man och märker 15 grodor, som sedan släpps tillbaka. När man sedan fångar 25 grodor är 3 av dem märkta. Hur många grodor bör det sannolikt finnas i bäcken?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "125"
          ]
        }
      },
      "solution": [
        {
          "text": "3 av de 25 fångade är märkta. Det bör vara samma andel som de 15 märkta är av alla grodor."
        },
        {
          "math": "{3|25} = {15|125}"
        },
        {
          "math": "15 · 25 / 3 = 125"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "Du lade ihop de märkta och de fångade. Andelen märkta bland de fångade säger hur stor hela gruppen är."
        },
        {
          "answers": {
            "a": "375"
          },
          "text": "Du glömde dela med 3, antalet märkta bland de fångade."
        },
        {
          "answers": {
            "a": "15"
          },
          "text": "Det är antalet märkta. Hela gruppen är större."
        }
      ]
    },
    {
      "id": "sa4-marka-334c2d86",
      "part": "marka",
      "text": "På en ö fångar man och märker 24 kaniner, som sedan släpps fria. När man sedan fångar 20 kaniner är 4 av dem märkta. Hur många kaniner bör det sannolikt finnas på ön?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "120"
          ]
        }
      },
      "solution": [
        {
          "text": "4 av de 20 fångade är märkta. Det bör vara samma andel som de 24 märkta är av alla kaniner."
        },
        {
          "math": "{4|20} = {24|120}"
        },
        {
          "math": "24 · 20 / 4 = 120"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "44"
          },
          "text": "Du lade ihop de märkta och de fångade. Andelen märkta bland de fångade säger hur stor hela gruppen är."
        },
        {
          "answers": {
            "a": "480"
          },
          "text": "Du glömde dela med 4, antalet märkta bland de fångade."
        },
        {
          "answers": {
            "a": "24"
          },
          "text": "Det är antalet märkta. Hela gruppen är större."
        }
      ]
    },
    {
      "id": "sa4-marka-19c239a7",
      "part": "marka",
      "text": "På en äng fångar man och märker 50 harar, som sedan släpps fria. När man sedan fångar 60 harar är 12 av dem märkta. Hur många harar bör det sannolikt finnas på ängen?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "250"
          ]
        }
      },
      "solution": [
        {
          "text": "12 av de 60 fångade är märkta. Det bör vara samma andel som de 50 märkta är av alla harar."
        },
        {
          "math": "{12|60} = {50|250}"
        },
        {
          "math": "50 · 60 / 12 = 250"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "110"
          },
          "text": "Du lade ihop de märkta och de fångade. Andelen märkta bland de fångade säger hur stor hela gruppen är."
        },
        {
          "answers": {
            "a": "3 000"
          },
          "text": "Du glömde dela med 12, antalet märkta bland de fångade."
        },
        {
          "answers": {
            "a": "50"
          },
          "text": "Det är antalet märkta. Hela gruppen är större."
        }
      ]
    }
  ]
};
