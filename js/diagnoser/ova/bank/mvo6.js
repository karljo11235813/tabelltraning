// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till MVo6.
export default {
  "code": "MVo6",
  "parts": [
    {
      "id": "sammansatt",
      "title": "Sammansatta kroppar",
      "labels": [
        "1",
        "4",
        "6"
      ]
    },
    {
      "id": "jamforelser",
      "title": "Jämförelser",
      "labels": [
        "2",
        "3",
        "5"
      ]
    }
  ],
  "tasks": [
    {
      "id": "mvo6-sammansatt-b51e2a9a",
      "part": "sammansatt",
      "text": "En glasstrut består av en kon med en halv glasskula ovanpå. Konen och halvklotet har radien 3 cm, och hela höjden är 12 cm. Bestäm volymen.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "45π cm³ ≈ 141,4 cm³"
          ],
          "pi": "45π",
          "units": {
            "mm³": "1/1000",
            "cm³": "1",
            "dm³": "1000",
            "m³": "1000000",
            "ml": "1",
            "cl": "10",
            "dl": "100",
            "l": "1000",
            "hl": "100000"
          }
        }
      },
      "solution": [
        {
          "text": "Halvklotet: 2/3 · π · 3³ = 18π cm³."
        },
        {
          "text": "Konen är 12 − 3 = 9 cm hög: π · 3² · 9 / 3 = 27π cm³. Tillsammans 45π ≈ 141,4 cm³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "54π"
          },
          "text": "Konens höjd är hela höjden minus halvklotets radie: 12 − 3 = 9 cm."
        }
      ]
    },
    {
      "id": "mvo6-sammansatt-6d5a1581",
      "part": "sammansatt",
      "text": "En kapsel består av en cylinder med ett halvklot i varje ände. Cylindern har radien 3 mm och längden 10 mm. Bestäm kapselns volym.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "126π mm³ ≈ 395,8 mm³"
          ],
          "pi": "126π",
          "units": {
            "mm³": "1",
            "cm³": "1000",
            "dm³": "1000000",
            "m³": "1000000000",
            "ml": "1000",
            "cl": "10000",
            "dl": "100000",
            "l": "1000000",
            "hl": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Cylindern: π · 3² · 10 = 90π mm³. De två halvkloten är tillsammans ett helt klot: 4/3 · π · 3³ = 36π mm³."
        },
        {
          "text": "Tillsammans 126π ≈ 395,8 mm³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "108π"
          },
          "text": "Kapseln har ett halvklot i varje ände, alltså ett helt klot."
        }
      ]
    },
    {
      "id": "mvo6-sammansatt-105db8de",
      "part": "sammansatt",
      "text": "Ett cirkustält är uppbyggt som en kon ovanpå en cylinder. Cylindern är 3 m hög och har radien 6 m. Hela tältet är 5 m högt. Bestäm tältets volym.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "132π m³ ≈ 414,7 m³"
          ],
          "pi": "132π",
          "units": {
            "mm³": "1/1000000000",
            "cm³": "1/1000000",
            "dm³": "1/1000",
            "m³": "1",
            "ml": "1/1000000",
            "cl": "1/100000",
            "dl": "1/10000",
            "l": "1/1000",
            "hl": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Cylindern: π · 6² · 3 = 108π m³."
        },
        {
          "text": "Konen är 5 − 3 = 2 m hög: π · 6² · 2 / 3 = 24π m³. Tillsammans 132π ≈ 414,7 m³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "168π"
          },
          "text": "Konens höjd är hela höjden minus cylinderns: 5 − 3 = 2 m."
        }
      ]
    },
    {
      "id": "mvo6-sammansatt-7f884def",
      "part": "sammansatt",
      "text": "Ett cirkustält är uppbyggt som en kon ovanpå en cylinder. Cylindern är 4 m hög och har radien 3 m. Hela tältet är 8 m högt. Bestäm tältets volym.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "48π m³ ≈ 150,8 m³"
          ],
          "pi": "48π",
          "units": {
            "mm³": "1/1000000000",
            "cm³": "1/1000000",
            "dm³": "1/1000",
            "m³": "1",
            "ml": "1/1000000",
            "cl": "1/100000",
            "dl": "1/10000",
            "l": "1/1000",
            "hl": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Cylindern: π · 3² · 4 = 36π m³."
        },
        {
          "text": "Konen är 8 − 4 = 4 m hög: π · 3² · 4 / 3 = 12π m³. Tillsammans 48π ≈ 150,8 m³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60π"
          },
          "text": "Konens höjd är hela höjden minus cylinderns: 8 − 4 = 4 m."
        }
      ]
    },
    {
      "id": "mvo6-sammansatt-58cd0804",
      "part": "sammansatt",
      "text": "En silo är en cylinder med ett halvklot som tak. Cylindern har radien 3 m och höjden 8 m. Bestäm silons volym.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "90π m³ ≈ 282,7 m³"
          ],
          "pi": "90π",
          "units": {
            "mm³": "1/1000000000",
            "cm³": "1/1000000",
            "dm³": "1/1000",
            "m³": "1",
            "ml": "1/1000000",
            "cl": "1/100000",
            "dl": "1/10000",
            "l": "1/1000",
            "hl": "1/10"
          }
        }
      },
      "solution": [
        {
          "text": "Cylindern: π · 3² · 8 = 72π m³. Halvklotet: 2/3 · π · 3³ = 18π m³."
        },
        {
          "text": "Tillsammans 90π ≈ 282,7 m³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "108π"
          },
          "text": "Taket är ett halvt klot, inte ett helt."
        }
      ]
    },
    {
      "id": "mvo6-sammansatt-ffe73041",
      "part": "sammansatt",
      "text": "En vattendroppe består av ett halvklot och en kon som står med spetsen uppåt på halvklotet. Klotets radie är 3 mm och hela höjden 7 mm. Bestäm vattendroppens volym.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30π mm³ ≈ 94,2 mm³"
          ],
          "pi": "30π",
          "units": {
            "mm³": "1",
            "cm³": "1000",
            "dm³": "1000000",
            "m³": "1000000000",
            "ml": "1000",
            "cl": "10000",
            "dl": "100000",
            "l": "1000000",
            "hl": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Halvklotet: 2/3 · π · 3³ = 18π mm³."
        },
        {
          "text": "Konen är 7 − 3 = 4 mm hög: π · 3² · 4 / 3 = 12π mm³. Tillsammans 30π ≈ 94,2 mm³."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "48π"
          },
          "text": "Droppen har ett halvt klot, inte ett helt."
        },
        {
          "answers": {
            "a": "39π"
          },
          "text": "Konens höjd är hela höjden minus klotets radie: 7 − 3 = 4 mm."
        }
      ]
    },
    {
      "id": "mvo6-jamforelser-dcc182e7",
      "part": "jamforelser",
      "text": "En kub har kanten 10 cm. I kuben ställer man en cylinder som är lika hög som kuben och vars botten når kubens fyra sidor. Hur många procent av kubens volym upptas av cylindern?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "π/4 ≈ 79 %"
          ],
          "pi": "π/4",
          "units": {
            "%": "1/100",
            "procent": "1/100"
          }
        }
      },
      "solution": [
        {
          "text": "Cylinderns diameter är 10 cm, så radien är 5 cm: π · 5² · 10 = 250π cm³. Kuben är 10 · 10 · 10 = 1000 cm³."
        },
        {
          "text": "Andelen är 250π / 1000 = π/4 ≈ 0,785, alltså ungefär 79 %."
        }
      ],
      "mistakes": []
    },
    {
      "id": "mvo6-jamforelser-7a3dc9e8",
      "part": "jamforelser",
      "text": "En kon och en cylinder har samma basarea och samma höjd. Hur många gånger större volym har cylindern?",
      "points": "each",
      "rows": [
        "Svar: [a] gånger"
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
          "text": "Konens volym är basarean · höjden / 3 och cylinderns basarean · höjden."
        },
        {
          "text": "Cylindern har 3 gånger så stor volym."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "Det är konen jämfört med cylindern. Uppgiften frågar hur många gånger större cylindern är."
        }
      ]
    },
    {
      "id": "mvo6-jamforelser-18774750",
      "part": "jamforelser",
      "text": "Ett halvklot och en cylinder har samma radie, och cylindern är lika hög som radien. Hur många gånger större volym har cylindern?",
      "points": "each",
      "rows": [
        "Svar: [a] gånger"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,5"
          ]
        }
      },
      "solution": [
        {
          "text": "Halvklotet har volymen 2/3 · π · r³ och cylindern π · r² · r = π · r³."
        },
        {
          "text": "Cylindern är 1 / (2/3) = 1,5 gånger så stor."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "3 gånger gäller en kon och en cylinder. Halvklotet är 2/3 av cylindern."
        }
      ]
    },
    {
      "id": "mvo6-jamforelser-0f96c9eb",
      "part": "jamforelser",
      "text": "En pyramid är inskriven i en kub med kanten 3 cm. Bestäm pyramidens volym.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^3"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9"
          ],
          "units": {
            "mm³": "1/1000",
            "cm³": "1",
            "dm³": "1000",
            "m³": "1000000",
            "ml": "1",
            "cl": "10",
            "dl": "100",
            "l": "1000",
            "hl": "100000"
          }
        }
      },
      "solution": [
        {
          "text": "Pyramiden har kubens botten som basyta och är lika hög som kuben: 3 · 3 · 3 / 3 = 9 cm³, en tredjedel av kubens volym."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "27"
          },
          "text": "Det är kubens volym. Pyramiden är en tredjedel av den."
        }
      ]
    },
    {
      "id": "mvo6-jamforelser-7972ce53",
      "part": "jamforelser",
      "text": "En kub har kanten 6 cm. I kuben ställer man en kon som är lika hög som kuben och vars botten når kubens fyra sidor. Hur många procent av kubens volym upptas av konen?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "π/12 ≈ 26 %"
          ],
          "pi": "π/12",
          "units": {
            "%": "1/100",
            "procent": "1/100"
          }
        }
      },
      "solution": [
        {
          "text": "Konens radie är 3 cm: π · 3² · 6 / 3 = 18π cm³. Kuben är 6 · 6 · 6 = 216 cm³."
        },
        {
          "text": "Andelen är 18π / 216 = π/12 ≈ 0,26, alltså ungefär 26 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "π/4"
          },
          "text": "Det är en cylinder. En kon är en tredjedel av den."
        }
      ]
    },
    {
      "id": "mvo6-jamforelser-cb8b9219",
      "part": "jamforelser",
      "text": "En pyramid är inskriven i en kub med kanten 9 cm. Bestäm pyramidens volym.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^3"
      ],
      "boxes": {
        "a": {
          "accept": [
            "243"
          ],
          "units": {
            "mm³": "1/1000",
            "cm³": "1",
            "dm³": "1000",
            "m³": "1000000",
            "ml": "1",
            "cl": "10",
            "dl": "100",
            "l": "1000",
            "hl": "100000"
          }
        }
      },
      "solution": [
        {
          "text": "Pyramiden har kubens botten som basyta och är lika hög som kuben: 9 · 9 · 9 / 3 = 243 cm³, en tredjedel av kubens volym."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "729"
          },
          "text": "Det är kubens volym. Pyramiden är en tredjedel av den."
        }
      ]
    }
  ]
};
