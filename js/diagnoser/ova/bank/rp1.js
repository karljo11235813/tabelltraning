// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till RP1.
export default {
  "code": "RP1",
  "parts": [
    {
      "id": "dubbelt-halften",
      "title": "Dubbelt, hälften och tre gånger så mycket",
      "labels": [
        "1a",
        "1b",
        "2a",
        "2b",
        "2c"
      ]
    },
    {
      "id": "pris-per-hekto",
      "title": "Pris per hekto",
      "labels": [
        "3a",
        "3b"
      ]
    },
    {
      "id": "dela-vinst",
      "title": "Dela en vinst",
      "labels": [
        "4a",
        "4b"
      ]
    },
    {
      "id": "blanda-saft",
      "title": "Blanda saft",
      "labels": [
        "5a",
        "5b"
      ]
    }
  ],
  "tasks": [
    {
      "id": "rp1-dubbelt-halften-fb981f9b",
      "part": "dubbelt-halften",
      "text": "I ett recept på gryta ska det vara 2 dl grädde till 3 portioner. Hur mycket grädde ska man ta om det ska räcka till 9 portioner?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "9 portioner är tre gånger så många som 3, så det går åt tre gånger så mycket grädde: 3 · 2 dl = 6 dl."
        },
        {
          "math": "3 · 2 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Du lade till skillnaden. Men tre gånger så många portioner behöver tre gånger så mycket."
        }
      ]
    },
    {
      "id": "rp1-dubbelt-halften-8445e337",
      "part": "dubbelt-halften",
      "text": "Till en sockerkaka ska det vara dubbelt så mycket socker som smör. Hur mycket socker ska man ta till 150 g smör?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "300"
          ],
          "units": {
            "mg": "1/1000",
            "milligram": "1/1000",
            "g": 1,
            "gram": 1,
            "gr": 1,
            "hg": 100,
            "hektogram": 100,
            "kg": 1000,
            "kilo": 1000,
            "kilogram": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Dubbelt så mycket socker som smör betyder att sockret är 2 gånger så mycket som smöret."
        },
        {
          "text": "Till 150 g smör behövs 2 · 150 g = 300 g socker."
        },
        {
          "math": "2 · 150 = 300"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "75"
          },
          "text": "Du tog hälften. Men sockret är dubbelt så mycket som smöret, så det blir mer socker än smör."
        }
      ]
    },
    {
      "id": "rp1-dubbelt-halften-dc4eeb0e",
      "part": "dubbelt-halften",
      "text": "I ett recept på risotto ska det vara 450 gram ris till 6 portioner. Hur många gram ris ska man ta om det ska räcka till 12 portioner?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "900"
          ],
          "units": {
            "mg": "1/1000",
            "milligram": "1/1000",
            "g": 1,
            "gram": 1,
            "gr": 1,
            "hg": 100,
            "hektogram": 100,
            "kg": 1000,
            "kilo": 1000,
            "kilogram": 1000
          }
        }
      },
      "solution": [
        {
          "text": "12 portioner är dubbelt så många som 6, så det går åt dubbelt så mycket ris: 2 · 450 g = 900 g."
        },
        {
          "math": "2 · 450 = 900"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "456"
          },
          "text": "Du lade till skillnaden. Men dubbelt så många portioner behöver dubbelt så mycket."
        },
        {
          "answers": {
            "a": "225"
          },
          "text": "Du tog hälften. Men dubbelt så många portioner behöver dubbelt så mycket, inte hälften."
        }
      ]
    },
    {
      "id": "rp1-dubbelt-halften-7f02cbd2",
      "part": "dubbelt-halften",
      "text": "Till hemgjord fönsterputs blandar man dubbelt så mycket vatten som ättika. Hur mycket ättika behövs om man tar 12 dl vatten?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Vattnet är dubbelt så mycket som ättikan, så ättikan är hälften av vattnet."
        },
        {
          "text": "Hälften av 12 dl är 12 dl / 2 = 6 dl ättika."
        },
        {
          "math": "12 / 2 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24"
          },
          "text": "Du dubblade. Men det är vattnet som är dubbelt så mycket som ättikan, så ättikan är hälften av vattnet."
        }
      ]
    },
    {
      "id": "rp1-dubbelt-halften-0e9bdd1f",
      "part": "dubbelt-halften",
      "text": "Till kokt ris ska man ta dubbelt så mycket vatten som ris. Hur mycket vatten ska man ta till 3 dl ris?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Dubbelt så mycket vatten som ris betyder att vattnet är 2 gånger så mycket som riset."
        },
        {
          "text": "Till 3 dl ris behövs 2 · 3 dl = 6 dl vatten."
        },
        {
          "math": "2 · 3 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,5"
          },
          "text": "Du tog hälften. Men vattnet är dubbelt så mycket som riset, så det blir mer vatten än ris."
        }
      ]
    },
    {
      "id": "rp1-dubbelt-halften-9db8d40a",
      "part": "dubbelt-halften",
      "text": "I ett recept på ugnsbakad lax ska det vara 750 gram laxfilé till 6 portioner. Hur många gram laxfilé ska man ta om det ska räcka till 3 portioner?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "375"
          ],
          "units": {
            "mg": "1/1000",
            "milligram": "1/1000",
            "g": 1,
            "gram": 1,
            "gr": 1,
            "hg": 100,
            "hektogram": 100,
            "kg": 1000,
            "kilo": 1000,
            "kilogram": 1000
          }
        }
      },
      "solution": [
        {
          "text": "3 portioner är hälften så många som 6, så det går åt hälften så mycket laxfilé: 750 g / 2 = 375 g."
        },
        {
          "math": "750 / 2 = 375"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "747"
          },
          "text": "Du drog bort skillnaden i portioner. Men hälften så många portioner behöver hälften så mycket."
        },
        {
          "answers": {
            "a": "1500"
          },
          "text": "Du dubblade. Men hälften så många portioner behöver hälften så mycket."
        }
      ]
    },
    {
      "id": "rp1-pris-per-hekto-dc35b3e1",
      "part": "pris-per-hekto",
      "text": "Amir och Lova köper pistagenötter som kostar 15 kr per hg. Amir köper 3 hg. Lova köper dubbelt så mycket som Amir. Hur mycket ska Lova betala?",
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
          "text": "Lova köper dubbelt så mycket som Amir: 2 · 3 hg = 6 hg."
        },
        {
          "text": "6 hg kostar 6 gånger så mycket som 1 hg: 6 · 15 kr = 90 kr."
        },
        {
          "math": "2 · 3 = 6"
        },
        {
          "math": "6 · 15 = 90"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "45"
          },
          "text": "Det är vad Amir betalar. Lova köper dubbelt så mycket, så hon betalar dubbelt så mycket."
        },
        {
          "answers": {
            "a": "21"
          },
          "text": "Priset gäller för varje hekto: gånger, inte plus."
        }
      ]
    },
    {
      "id": "rp1-pris-per-hekto-c372315c",
      "part": "pris-per-hekto",
      "text": "Lösgodis kostar 8 kr per hg. Moa köper 3 hg. Hur mycket ska hon betala?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
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
          "text": "3 hg kostar 3 gånger så mycket som 1 hg: 3 · 8 kr = 24 kr."
        },
        {
          "math": "3 · 8 = 24"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Priset gäller för varje hekto: gånger, inte plus."
        }
      ]
    },
    {
      "id": "rp1-pris-per-hekto-47777675",
      "part": "pris-per-hekto",
      "text": "I ostdisken kostar lagrad ost 11 kr per hg. Ali köper 6 hg. Hur mycket ska han betala?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "66"
          ]
        }
      },
      "solution": [
        {
          "text": "6 hg kostar 6 gånger så mycket som 1 hg: 6 · 11 kr = 66 kr."
        },
        {
          "math": "6 · 11 = 66"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "17"
          },
          "text": "Priset gäller för varje hekto: gånger, inte plus."
        }
      ]
    },
    {
      "id": "rp1-pris-per-hekto-ceff4251",
      "part": "pris-per-hekto",
      "text": "Ines köper 6 hg salta jordnötter för 9 kr/hg. Hennes bror köper hälften så mycket som hon. Hur mycket ska brodern betala?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
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
          "text": "Brodern köper hälften så mycket som Ines: 6 hg / 2 = 3 hg."
        },
        {
          "text": "3 hg kostar 3 gånger så mycket som 1 hg: 3 · 9 kr = 27 kr."
        },
        {
          "math": "6 / 2 = 3"
        },
        {
          "math": "3 · 9 = 27"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "54"
          },
          "text": "Det är vad Ines betalar. Brodern köper hälften så mycket, så han betalar hälften så mycket."
        },
        {
          "answers": {
            "a": "12"
          },
          "text": "Priset gäller för varje hekto: gånger, inte plus."
        }
      ]
    },
    {
      "id": "rp1-pris-per-hekto-80e034f9",
      "part": "pris-per-hekto",
      "text": "Felix och Sara köper torkad frukt som kostar 7 kr/hg. Felix köper 2 hg och Sara köper tre gånger så mycket som Felix. Hur mycket ska Sara betala?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "42"
          ]
        }
      },
      "solution": [
        {
          "text": "Sara köper tre gånger så mycket som Felix: 3 · 2 hg = 6 hg."
        },
        {
          "text": "6 hg kostar 6 gånger så mycket som 1 hg: 6 · 7 kr = 42 kr."
        },
        {
          "math": "3 · 2 = 6"
        },
        {
          "math": "6 · 7 = 42"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14"
          },
          "text": "Det är vad Felix betalar. Sara köper tre gånger så mycket, så hon betalar tre gånger så mycket."
        },
        {
          "answers": {
            "a": "13"
          },
          "text": "Priset gäller för varje hekto: gånger, inte plus."
        }
      ]
    },
    {
      "id": "rp1-pris-per-hekto-9770690d",
      "part": "pris-per-hekto",
      "text": "På marknaden kostar nötblandning 12 kr/hg. Hur mycket kostar 5 hg?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "60"
          ]
        }
      },
      "solution": [
        {
          "text": "5 hg kostar 5 gånger så mycket som 1 hg: 5 · 12 kr = 60 kr."
        },
        {
          "math": "5 · 12 = 60"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "17"
          },
          "text": "Priset gäller för varje hekto: gånger, inte plus."
        }
      ]
    },
    {
      "id": "rp1-dela-vinst-f251bda5",
      "part": "dela-vinst",
      "text": "Nils och Maja köper en lott på skolans lotteri. Maja betalar tre gånger så mycket som Nils. Lotten ger en vinst på 1200 kr, som delas efter hur mycket var och en betalade. Hur mycket får Maja?",
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
          "text": "Maja har betalat 3 delar och Nils 1 del: 4 delar. 1200 kr / 4 = 300 kr är en del."
        },
        {
          "math": "1200 / 4 = 300"
        },
        {
          "text": "Maja får 3 delar: 3 · 300 kr = 900 kr."
        },
        {
          "math": "3 · 300 = 900"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "600"
          },
          "text": "Vinsten ska delas som de betalade, inte lika."
        },
        {
          "answers": {
            "a": "300"
          },
          "text": "Du räknade ut en del. Maja har betalat 3 delar."
        }
      ]
    },
    {
      "id": "rp1-dela-vinst-2f383e6b",
      "part": "dela-vinst",
      "text": "Elias och Nora anmäler ett lag till en tipspromenad. Elias betalar tre gånger så mycket som Nora av anmälningsavgiften. Laget vinner 800 kr, som delas efter hur mycket var och en betalade. Hur mycket får Nora?",
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
          "text": "Elias har betalat 3 delar och Nora 1 del: 4 delar. 800 kr / 4 = 200 kr är en del."
        },
        {
          "math": "800 / 4 = 200"
        },
        {
          "text": "Nora får 1 del: 1 · 200 kr = 200 kr."
        },
        {
          "math": "1 · 200 = 200"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "400"
          },
          "text": "Vinsten ska delas som de betalade, inte lika."
        },
        {
          "answers": {
            "a": "600"
          },
          "text": "Du räknade ut den andra personens del. Frågan gäller Nora."
        }
      ]
    },
    {
      "id": "rp1-dela-vinst-48a2a830",
      "part": "dela-vinst",
      "text": "Alma lägger 30 kr och Pontus 10 kr på en lott. De vinner 2000 kr, som delas efter hur mycket var och en lade. Hur mycket får Pontus?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
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
          "text": "Alma har lagt 30 kr och Pontus 10 kr: det är 3 delar mot 1 del, tillsammans 4 delar. 2000 kr / 4 = 500 kr är en del."
        },
        {
          "math": "2000 / 4 = 500"
        },
        {
          "text": "Pontus får 1 del: 1 · 500 kr = 500 kr."
        },
        {
          "math": "1 · 500 = 500"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1000"
          },
          "text": "Vinsten ska delas som de betalade, inte lika."
        },
        {
          "answers": {
            "a": "1500"
          },
          "text": "Du räknade ut den andra personens del. Frågan gäller Pontus."
        }
      ]
    },
    {
      "id": "rp1-dela-vinst-6e22df56",
      "part": "dela-vinst",
      "text": "Lisa och Omar köper en trisslott tillsammans. Lisa betalar dubbelt så mycket som Omar. De vinner 600 kr, och vinsten ska delas efter hur mycket var och en betalade. Hur mycket får Lisa?",
      "points": "each",
      "rows": [
        "Svar: [a] kr"
      ],
      "boxes": {
        "a": {
          "accept": [
            "400"
          ]
        }
      },
      "solution": [
        {
          "text": "Lisa har betalat 2 delar och Omar 1 del: 3 delar. 600 kr / 3 = 200 kr är en del."
        },
        {
          "math": "600 / 3 = 200"
        },
        {
          "text": "Lisa får 2 delar: 2 · 200 kr = 400 kr."
        },
        {
          "math": "2 · 200 = 400"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "300"
          },
          "text": "Vinsten ska delas som de betalade, inte lika."
        },
        {
          "answers": {
            "a": "200"
          },
          "text": "Du räknade ut en del. Lisa har betalat 2 delar."
        }
      ]
    },
    {
      "id": "rp1-dela-vinst-1357bf74",
      "part": "dela-vinst",
      "text": "Hanna och Viktor köper en bingolott. Hanna betalar hälften så mycket som Viktor. Lotten ger en vinst på 900 kr, som delas efter hur mycket var och en betalade. Hur mycket får Hanna?",
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
          "text": "Hanna har betalat hälften så mycket som Viktor: Hanna 1 del och Viktor 2 delar, tillsammans 3 delar. 900 kr / 3 = 300 kr är en del."
        },
        {
          "math": "900 / 3 = 300"
        },
        {
          "text": "Hanna får 1 del: 1 · 300 kr = 300 kr."
        },
        {
          "math": "1 · 300 = 300"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "450"
          },
          "text": "Vinsten ska delas som de betalade, inte lika."
        },
        {
          "answers": {
            "a": "600"
          },
          "text": "Du räknade ut den andra personens del. Frågan gäller Hanna."
        }
      ]
    },
    {
      "id": "rp1-dela-vinst-5c861bb1",
      "part": "dela-vinst",
      "text": "Johan satsar 20 kr och Emelie 10 kr på en lott. Vinsten är 1800 kr och delas efter hur mycket var och en satsade. Hur mycket får Johan?",
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
          "text": "Johan har satsat 20 kr och Emelie 10 kr: det är 2 delar mot 1 del, tillsammans 3 delar. 1800 kr / 3 = 600 kr är en del."
        },
        {
          "math": "1800 / 3 = 600"
        },
        {
          "text": "Johan får 2 delar: 2 · 600 kr = 1200 kr."
        },
        {
          "math": "2 · 600 = 1200"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "900"
          },
          "text": "Vinsten ska delas som de betalade, inte lika."
        },
        {
          "answers": {
            "a": "600"
          },
          "text": "Du räknade ut en del. Johan har betalat 2 delar."
        }
      ]
    },
    {
      "id": "rp1-blanda-saft-bf55bcbb",
      "part": "blanda-saft",
      "text": "Fläderblomssaft blandas av 3 dl vatten till 1 dl koncentrerad saft. Hur mycket vatten behövs för att få 1,6 liter färdig saft?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Till varje 1 dl saft hör 3 dl vatten: det blir 4 dl färdig saft."
        },
        {
          "text": "1,6 liter = 16 dl är 16 / 4 = 4 sådana omgångar: 4 · 3 dl vatten = 12 dl."
        },
        {
          "math": "16 / 4 = 4"
        },
        {
          "math": "4 · 3 = 12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16"
          },
          "text": "Det är hela mängden färdig saft. Hela mängden är saft och vatten tillsammans, så vattnet är bara en del av den."
        }
      ]
    },
    {
      "id": "rp1-blanda-saft-cff26350",
      "part": "blanda-saft",
      "text": "Hallonsaft blandas av 3 dl vatten till 1 dl koncentrerad saft. Hur mycket koncentrerad saft behövs till 12 dl vatten?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Till varje 1 dl saft hör 3 dl vatten. 12 dl vatten är 12 / 3 = 4 sådana omgångar, så det behövs 4 · 1 dl = 4 dl saft."
        },
        {
          "math": "12 / 3 = 4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Du multiplicerade. Mer vatten kräver mer saft, men saften är bara en tredjedel av vattnet."
        },
        {
          "answers": {
            "a": "3"
          },
          "text": "Du delade 12 med 4, som om 12 dl var hela blandningen. Men 12 dl är bara vattnet."
        }
      ]
    },
    {
      "id": "rp1-blanda-saft-239f8a3c",
      "part": "blanda-saft",
      "text": "Apelsinsaft blandas av 5 dl vatten till 1 dl koncentrat. Hur mycket vatten behövs för att få 3 liter färdig saft?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "25"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Till varje 1 dl saft hör 5 dl vatten: det blir 6 dl färdig saft."
        },
        {
          "text": "3 liter = 30 dl är 30 / 6 = 5 sådana omgångar: 5 · 5 dl vatten = 25 dl."
        },
        {
          "math": "30 / 6 = 5"
        },
        {
          "math": "5 · 5 = 25"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24"
          },
          "text": "Du räknade som om hela mängden vore vatten: 30 / 5 = 6 dl saft, och 30 − 6 = 24. Men 30 dl är saft och vatten tillsammans: varje omgång blir 6 dl."
        },
        {
          "answers": {
            "a": "30"
          },
          "text": "Det är hela mängden färdig saft. Hela mängden är saft och vatten tillsammans, så vattnet är bara en del av den."
        }
      ]
    },
    {
      "id": "rp1-blanda-saft-0a740797",
      "part": "blanda-saft",
      "text": "En sportdryck blandas av 5 dl vatten till 1 dl koncentrat. Hur mycket koncentrat behövs till 15 dl vatten?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Till varje 1 dl saft hör 5 dl vatten. 15 dl vatten är 15 / 5 = 3 sådana omgångar, så det behövs 3 · 1 dl = 3 dl saft."
        },
        {
          "math": "15 / 5 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "75"
          },
          "text": "Du multiplicerade. Mer vatten kräver mer saft, men saften är bara en femtedel av vattnet."
        },
        {
          "answers": {
            "a": "2,5"
          },
          "text": "Du delade 15 med 6, som om 15 dl var hela blandningen. Men 15 dl är bara vattnet."
        }
      ]
    },
    {
      "id": "rp1-blanda-saft-1d2bdf14",
      "part": "blanda-saft",
      "text": "Blåbärssaft blandas av 7 dl vatten till 1 dl koncentrerad saft. Hur mycket vatten behövs för att få 2,4 liter färdig saft?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "21"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Till varje 1 dl saft hör 7 dl vatten: det blir 8 dl färdig saft."
        },
        {
          "text": "2,4 liter = 24 dl är 24 / 8 = 3 sådana omgångar: 3 · 7 dl vatten = 21 dl."
        },
        {
          "math": "24 / 8 = 3"
        },
        {
          "math": "3 · 7 = 21"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24"
          },
          "text": "Det är hela mängden färdig saft. Hela mängden är saft och vatten tillsammans, så vattnet är bara en del av den."
        }
      ]
    },
    {
      "id": "rp1-blanda-saft-b92fea5d",
      "part": "blanda-saft",
      "text": "Svartvinbärssaft blandas av 2 dl vatten till 1 dl koncentrerad saft. Hur mycket koncentrerad saft behövs till 14 dl vatten?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7"
          ],
          "units": {
            "ml": "1/100",
            "milliliter": "1/100",
            "cl": "1/10",
            "centiliter": "1/10",
            "dl": 1,
            "deciliter": 1,
            "l": 10,
            "liter": 10,
            "hl": 1000,
            "hektoliter": 1000
          }
        }
      },
      "solution": [
        {
          "text": "Till varje 1 dl saft hör 2 dl vatten. 14 dl vatten är 14 / 2 = 7 sådana omgångar, så det behövs 7 · 1 dl = 7 dl saft."
        },
        {
          "math": "14 / 2 = 7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "28"
          },
          "text": "Du multiplicerade. Mer vatten kräver mer saft, men saften är bara hälften av vattnet."
        }
      ]
    }
  ]
};
