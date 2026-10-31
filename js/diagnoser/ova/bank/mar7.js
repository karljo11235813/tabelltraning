// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till MAr7.
export default {
  "code": "MAr7",
  "parts": [
    {
      "id": "ratblock-pyramid",
      "title": "Rätblock och pyramid",
      "labels": [
        "1",
        "4"
      ]
    },
    {
      "id": "rund",
      "title": "Cylinder, kon och klot",
      "labels": [
        "2",
        "3",
        "6"
      ]
    },
    {
      "id": "tetraeder",
      "title": "Tetraeder",
      "labels": [
        "5"
      ]
    }
  ],
  "tasks": [
    {
      "id": "mar7-ratblock-pyramid-76e34eaf",
      "part": "ratblock-pyramid",
      "text": "Beräkna begränsningsarean för ett rätblock med kanterna 2, 5 och 6 cm.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^2"
      ],
      "boxes": {
        "a": {
          "accept": [
            "104"
          ],
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Ett rätblock har sex sidor, två av varje sort: 2 · 2 · 5 + 2 · 2 · 6 + 2 · 5 · 6 = 20 + 24 + 60 = 104 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60"
          },
          "text": "Det är volymen."
        },
        {
          "answers": {
            "a": "52"
          },
          "text": "Det är bara tre av de sex sidorna."
        }
      ]
    },
    {
      "id": "mar7-ratblock-pyramid-3dbaf9c8",
      "part": "ratblock-pyramid",
      "text": "En pyramid har en kvadratisk basyta med sidan 8 cm. Höjden är 3 cm. Beräkna pyramidens begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^2"
      ],
      "boxes": {
        "a": {
          "accept": [
            "144"
          ],
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Basytan är 8 · 8 = 64 cm²."
        },
        {
          "text": "Sidorna är fyra trianglar med basen 8 cm. Deras höjd går från toppen ned till mitten av en baskant: √(3² + 4²) = √25 = 5 cm."
        },
        {
          "text": "Fyra trianglar: 4 · 8 · 5 / 2 = 80 cm². Tillsammans 64 + 80 = 144 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "112"
          },
          "text": "Du räknade med pyramidens höjd i sidotrianglarna. Triangelns höjd är längre: 5 cm."
        },
        {
          "answers": {
            "a": "80"
          },
          "text": "Glöm inte basytan."
        }
      ]
    },
    {
      "id": "mar7-ratblock-pyramid-a410f089",
      "part": "ratblock-pyramid",
      "text": "En pyramid har en kvadratisk basyta med sidan 10 cm. Höjden är 12 cm. Beräkna pyramidens begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^2"
      ],
      "boxes": {
        "a": {
          "accept": [
            "360"
          ],
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Basytan är 10 · 10 = 100 cm²."
        },
        {
          "text": "Sidorna är fyra trianglar med basen 10 cm. Deras höjd går från toppen ned till mitten av en baskant: √(12² + 5²) = √169 = 13 cm."
        },
        {
          "text": "Fyra trianglar: 4 · 10 · 13 / 2 = 260 cm². Tillsammans 100 + 260 = 360 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "340"
          },
          "text": "Du räknade med pyramidens höjd i sidotrianglarna. Triangelns höjd är längre: 13 cm."
        },
        {
          "answers": {
            "a": "260"
          },
          "text": "Glöm inte basytan."
        }
      ]
    },
    {
      "id": "mar7-ratblock-pyramid-56368156",
      "part": "ratblock-pyramid",
      "text": "En pyramid har en kvadratisk basyta med sidan 12 cm. Höjden är 8 cm. Beräkna pyramidens begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^2"
      ],
      "boxes": {
        "a": {
          "accept": [
            "384"
          ],
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Basytan är 12 · 12 = 144 cm²."
        },
        {
          "text": "Sidorna är fyra trianglar med basen 12 cm. Deras höjd går från toppen ned till mitten av en baskant: √(8² + 6²) = √100 = 10 cm."
        },
        {
          "text": "Fyra trianglar: 4 · 12 · 10 / 2 = 240 cm². Tillsammans 144 + 240 = 384 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "336"
          },
          "text": "Du räknade med pyramidens höjd i sidotrianglarna. Triangelns höjd är längre: 10 cm."
        },
        {
          "answers": {
            "a": "240"
          },
          "text": "Glöm inte basytan."
        }
      ]
    },
    {
      "id": "mar7-ratblock-pyramid-ac990e69",
      "part": "ratblock-pyramid",
      "text": "Beräkna begränsningsarean för ett rätblock med kanterna 4, 5 och 6 cm.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^2"
      ],
      "boxes": {
        "a": {
          "accept": [
            "148"
          ],
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Ett rätblock har sex sidor, två av varje sort: 2 · 4 · 5 + 2 · 4 · 6 + 2 · 5 · 6 = 40 + 48 + 60 = 148 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "120"
          },
          "text": "Det är volymen."
        },
        {
          "answers": {
            "a": "74"
          },
          "text": "Det är bara tre av de sex sidorna."
        }
      ]
    },
    {
      "id": "mar7-ratblock-pyramid-8965a627",
      "part": "ratblock-pyramid",
      "text": "Beräkna begränsningsarean för ett rätblock med kanterna 2, 3 och 4 cm.",
      "points": "each",
      "rows": [
        "Svar: [a] cm^2"
      ],
      "boxes": {
        "a": {
          "accept": [
            "52"
          ],
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Ett rätblock har sex sidor, två av varje sort: 2 · 2 · 3 + 2 · 2 · 4 + 2 · 3 · 4 = 12 + 16 + 24 = 52 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "24"
          },
          "text": "Det är volymen."
        },
        {
          "answers": {
            "a": "26"
          },
          "text": "Det är bara tre av de sex sidorna."
        }
      ]
    },
    {
      "id": "mar7-rund-0be22ce7",
      "part": "rund",
      "text": "En kons mantelyta är uppbyggd av ett halvt cirkelområde med radien 4 cm. Bestäm konens mantelyta.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8π cm² ≈ 25,1 cm²"
          ],
          "pi": "8π",
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Mantelytan är ett halvt cirkelområde: π · 4² / 2 = 8π ≈ 25,1 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16π"
          },
          "text": "Det är hela cirkeln. Mantelytan är en halv."
        }
      ]
    },
    {
      "id": "mar7-rund-44d03bc6",
      "part": "rund",
      "text": "En cylinder har höjden 5 cm och diametern på den cirkulära bottenytan är 4 cm. Beräkna cylinderns totala begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "28π cm² ≈ 88 cm²"
          ],
          "pi": "28π",
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Radien är 2 cm. Botten och lock: 2 · π · 2² = 8π."
        },
        {
          "text": "Mantelytan är en rektangel som är lika lång som omkretsen, π · 4 = 4π, och lika hög som cylindern: 4π · 5 = 20π."
        },
        {
          "text": "Tillsammans 8π + 20π = 28π ≈ 88 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "20π"
          },
          "text": "Det är bara mantelytan. Glöm inte botten och locket."
        },
        {
          "answers": {
            "a": "72π"
          },
          "text": "Du räknade med diametern som radie."
        }
      ]
    },
    {
      "id": "mar7-rund-6782e648",
      "part": "rund",
      "text": "En cylinder har höjden 10 cm och diametern på den cirkulära bottenytan är 6 cm. Beräkna cylinderns totala begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "78π cm² ≈ 245 cm²"
          ],
          "pi": "78π",
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Radien är 3 cm. Botten och lock: 2 · π · 3² = 18π."
        },
        {
          "text": "Mantelytan är en rektangel som är lika lång som omkretsen, π · 6 = 6π, och lika hög som cylindern: 6π · 10 = 60π."
        },
        {
          "text": "Tillsammans 18π + 60π = 78π ≈ 245 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "60π"
          },
          "text": "Det är bara mantelytan. Glöm inte botten och locket."
        },
        {
          "answers": {
            "a": "192π"
          },
          "text": "Du räknade med diametern som radie."
        }
      ]
    },
    {
      "id": "mar7-rund-d28300ae",
      "part": "rund",
      "text": "En kons mantelyta är uppbyggd av ett halvt cirkelområde med radien 10 cm. Bestäm konens mantelyta.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "50π cm² ≈ 157,1 cm²"
          ],
          "pi": "50π",
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Mantelytan är ett halvt cirkelområde: π · 10² / 2 = 50π ≈ 157,1 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "100π"
          },
          "text": "Det är hela cirkeln. Mantelytan är en halv."
        }
      ]
    },
    {
      "id": "mar7-rund-380a2d89",
      "part": "rund",
      "text": "Ett klot är inskrivet i en kub med sidan 6 cm. Bestäm klotets begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "36π cm² ≈ 113,1 cm²"
          ],
          "pi": "36π",
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Klotet når kubens alla sidor, så diametern är 6 cm och radien 3 cm."
        },
        {
          "text": "Ett klots area är 4 · π · r² = 4 · π · 3² = 36π ≈ 113,1 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "144π"
          },
          "text": "6 cm är klotets diameter, inte radien."
        },
        {
          "answers": {
            "a": "216"
          },
          "text": "Det är kubens begränsningsarea."
        }
      ]
    },
    {
      "id": "mar7-rund-e824249a",
      "part": "rund",
      "text": "Ett klot är inskrivet i en kub med sidan 10 cm. Bestäm klotets begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "100π cm² ≈ 314,2 cm²"
          ],
          "pi": "100π",
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "Klotet når kubens alla sidor, så diametern är 10 cm och radien 5 cm."
        },
        {
          "text": "Ett klots area är 4 · π · r² = 4 · π · 5² = 100π ≈ 314,2 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "400π"
          },
          "text": "10 cm är klotets diameter, inte radien."
        },
        {
          "answers": {
            "a": "600"
          },
          "text": "Det är kubens begränsningsarea."
        }
      ]
    },
    {
      "id": "mar7-tetraeder-2b723db8",
      "part": "tetraeder",
      "text": "Kanten i en tetraeder är 4 cm. Bestäm tetraederns begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "16√3 cm² ≈ 27,7 cm²",
            "16√3"
          ],
          "range": {
            "ge": "27",
            "le": "27,8"
          },
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "En tetraeder har fyra sidor som är liksidiga trianglar med sidan 4 cm."
        },
        {
          "text": "Höjden i en sådan triangel delar basen mitt itu: √(4² − 2²) = √12 = 2√3 cm."
        },
        {
          "text": "En triangel: 4 · 2√3 / 2 = 4√3 cm². Fyra: 16√3 ≈ 27,7 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4√3"
          },
          "text": "Det är en sida. En tetraeder har fyra."
        },
        {
          "answers": {
            "a": "32"
          },
          "text": "Höjden i triangeln är inte 4 cm: den är 2√3 cm."
        }
      ]
    },
    {
      "id": "mar7-tetraeder-cbec1e3c",
      "part": "tetraeder",
      "text": "Kanten i en tetraeder är 8 cm. Bestäm tetraederns begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "64√3 cm² ≈ 110,9 cm²",
            "64√3"
          ],
          "range": {
            "ge": "110",
            "le": "110,9"
          },
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "En tetraeder har fyra sidor som är liksidiga trianglar med sidan 8 cm."
        },
        {
          "text": "Höjden i en sådan triangel delar basen mitt itu: √(8² − 4²) = √48 = 4√3 cm."
        },
        {
          "text": "En triangel: 8 · 4√3 / 2 = 16√3 cm². Fyra: 64√3 ≈ 110,9 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16√3"
          },
          "text": "Det är en sida. En tetraeder har fyra."
        },
        {
          "answers": {
            "a": "128"
          },
          "text": "Höjden i triangeln är inte 8 cm: den är 4√3 cm."
        }
      ]
    },
    {
      "id": "mar7-tetraeder-867d61c1",
      "part": "tetraeder",
      "text": "Kanten i en tetraeder är 14 cm. Bestäm tetraederns begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "196√3 cm² ≈ 339,5 cm²",
            "196√3"
          ],
          "range": {
            "ge": "339",
            "le": "339,5"
          },
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "En tetraeder har fyra sidor som är liksidiga trianglar med sidan 14 cm."
        },
        {
          "text": "Höjden i en sådan triangel delar basen mitt itu: √(14² − 7²) = √147 = 7√3 cm."
        },
        {
          "text": "En triangel: 14 · 7√3 / 2 = 49√3 cm². Fyra: 196√3 ≈ 339,5 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "49√3"
          },
          "text": "Det är en sida. En tetraeder har fyra."
        },
        {
          "answers": {
            "a": "392"
          },
          "text": "Höjden i triangeln är inte 14 cm: den är 7√3 cm."
        }
      ]
    },
    {
      "id": "mar7-tetraeder-a3ce332e",
      "part": "tetraeder",
      "text": "Kanten i en tetraeder är 2 cm. Bestäm tetraederns begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4√3 cm² ≈ 6,9 cm²",
            "4√3"
          ],
          "range": {
            "ge": "6",
            "le": "7"
          },
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "En tetraeder har fyra sidor som är liksidiga trianglar med sidan 2 cm."
        },
        {
          "text": "Höjden i en sådan triangel delar basen mitt itu: √(2² − 1²) = √3 = √3 cm."
        },
        {
          "text": "En triangel: 2 · √3 / 2 = √3 cm². Fyra: 4√3 ≈ 6,9 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "√3"
          },
          "text": "Det är en sida. En tetraeder har fyra."
        },
        {
          "answers": {
            "a": "8"
          },
          "text": "Höjden i triangeln är inte 2 cm: den är √3 cm."
        }
      ]
    },
    {
      "id": "mar7-tetraeder-27c1df85",
      "part": "tetraeder",
      "text": "Kanten i en tetraeder är 10 cm. Bestäm tetraederns begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "100√3 cm² ≈ 173,2 cm²",
            "100√3"
          ],
          "range": {
            "ge": "173",
            "le": "173,3"
          },
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "En tetraeder har fyra sidor som är liksidiga trianglar med sidan 10 cm."
        },
        {
          "text": "Höjden i en sådan triangel delar basen mitt itu: √(10² − 5²) = √75 = 5√3 cm."
        },
        {
          "text": "En triangel: 10 · 5√3 / 2 = 25√3 cm². Fyra: 100√3 ≈ 173,2 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "25√3"
          },
          "text": "Det är en sida. En tetraeder har fyra."
        },
        {
          "answers": {
            "a": "200"
          },
          "text": "Höjden i triangeln är inte 10 cm: den är 5√3 cm."
        }
      ]
    },
    {
      "id": "mar7-tetraeder-01599edf",
      "part": "tetraeder",
      "text": "Kanten i en tetraeder är 12 cm. Bestäm tetraederns begränsningsarea.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "144√3 cm² ≈ 249,4 cm²",
            "144√3"
          ],
          "range": {
            "ge": "249",
            "le": "249,5"
          },
          "units": {
            "mm²": "1/100",
            "cm²": "1",
            "dm²": "100",
            "m²": "10000",
            "km²": "10000000000",
            "ha": "100000000"
          }
        }
      },
      "solution": [
        {
          "text": "En tetraeder har fyra sidor som är liksidiga trianglar med sidan 12 cm."
        },
        {
          "text": "Höjden i en sådan triangel delar basen mitt itu: √(12² − 6²) = √108 = 6√3 cm."
        },
        {
          "text": "En triangel: 12 · 6√3 / 2 = 36√3 cm². Fyra: 144√3 ≈ 249,4 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36√3"
          },
          "text": "Det är en sida. En tetraeder har fyra."
        },
        {
          "answers": {
            "a": "288"
          },
          "text": "Höjden i triangeln är inte 12 cm: den är 6√3 cm."
        }
      ]
    }
  ]
};
