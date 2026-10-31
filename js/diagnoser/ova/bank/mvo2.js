// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till MVo2.
export default {
  "code": "MVo2",
  "parts": [
    {
      "id": "recept",
      "title": "Räkna om ett recept",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "matt",
      "title": "Hur många mått?",
      "labels": [
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "2g",
        "2h",
        "2i"
      ]
    },
    {
      "id": "enhet",
      "title": "Välj enhet",
      "labels": [
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "3g"
      ]
    }
  ],
  "tasks": [
    {
      "id": "mvo2-recept-f8ee4c95",
      "part": "recept",
      "text": "Det här receptet på varm choklad är lagom till 4 personer: 8 dl mjölk, 4 msk kakao och 2 msk socker. Hur mycket mjölk behöver man till 6 personer?",
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
            "mm³": "1/100000",
            "cm³": "1/100",
            "dm³": "10",
            "m³": "10000",
            "ml": "1/100",
            "cl": "1/10",
            "dl": "1",
            "l": "10",
            "hl": "1000"
          }
        }
      },
      "solution": [
        {
          "text": "En person behöver 8 / 4 = 2 dl. 6 personer: 6 · 2 = 12."
        },
        {
          "text": "Mjölk: 12 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "Det blir inte lika många dl mer som det blir personer mer. Räkna ut hur många gånger så många personer det är."
        }
      ]
    },
    {
      "id": "mvo2-recept-dd4a370b",
      "part": "recept",
      "text": "Det här receptet på gröt är lagom till 1 person: 1 dl havregryn, 2 dl vatten och en nypa salt. Hur mycket vatten behöver man till 5 personer?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10"
          ],
          "units": {
            "mm³": "1/100000",
            "cm³": "1/100",
            "dm³": "10",
            "m³": "10000",
            "ml": "1/100",
            "cl": "1/10",
            "dl": "1",
            "l": "10",
            "hl": "1000"
          }
        }
      },
      "solution": [
        {
          "text": "5 personer är 5 gånger så många som 1: 5 · 2 = 10."
        },
        {
          "text": "Vatten: 10 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Det blir inte lika många dl mer som det blir personer mer. Räkna ut hur många gånger så många personer det är."
        }
      ]
    },
    {
      "id": "mvo2-recept-ced3b242",
      "part": "recept",
      "text": "Det här receptet på smoothie är lagom till 2 personer: 4 dl yoghurt, 2 dl juice och 1 banan. Hur mycket yoghurt behöver man till 6 personer?",
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
            "mm³": "1/100000",
            "cm³": "1/100",
            "dm³": "10",
            "m³": "10000",
            "ml": "1/100",
            "cl": "1/10",
            "dl": "1",
            "l": "10",
            "hl": "1000"
          }
        }
      },
      "solution": [
        {
          "text": "6 personer är 3 gånger så många som 2, så det går åt 3 gånger så mycket: 3 · 4 = 12."
        },
        {
          "text": "Yoghurt: 12 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Det blir inte lika många dl mer som det blir personer mer. Räkna ut hur många gånger så många personer det är."
        }
      ]
    },
    {
      "id": "mvo2-recept-6916249a",
      "part": "recept",
      "text": "Det här receptet på smoothie är lagom till 2 personer: 4 dl yoghurt, 2 dl juice och 1 banan. Hur mycket juice behöver man till 6 personer?",
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
            "mm³": "1/100000",
            "cm³": "1/100",
            "dm³": "10",
            "m³": "10000",
            "ml": "1/100",
            "cl": "1/10",
            "dl": "1",
            "l": "10",
            "hl": "1000"
          }
        }
      },
      "solution": [
        {
          "text": "6 personer är 3 gånger så många som 2, så det går åt 3 gånger så mycket: 3 · 2 = 6."
        },
        {
          "text": "Juice: 6 dl."
        }
      ],
      "mistakes": []
    },
    {
      "id": "mvo2-recept-75a2fd05",
      "part": "recept",
      "text": "Det här receptet på våfflor är lagom till 4 personer: 4 dl vetemjöl, 1 tsk bakpulver, 5 dl mjölk och 1 dl smält smör. Hur mycket mjölk behöver man till 8 personer?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10"
          ],
          "units": {
            "mm³": "1/100000",
            "cm³": "1/100",
            "dm³": "10",
            "m³": "10000",
            "ml": "1/100",
            "cl": "1/10",
            "dl": "1",
            "l": "10",
            "hl": "1000"
          }
        }
      },
      "solution": [
        {
          "text": "8 personer är dubbelt så många som 4: 2 · 5 = 10."
        },
        {
          "text": "Mjölk: 10 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Det blir inte lika många dl mer som det blir personer mer. Räkna ut hur många gånger så många personer det är."
        }
      ]
    },
    {
      "id": "mvo2-recept-61c8954c",
      "part": "recept",
      "text": "Det här receptet på våfflor är lagom till 4 personer: 4 dl vetemjöl, 1 tsk bakpulver, 5 dl mjölk och 1 dl smält smör. Hur mycket vetemjöl behöver man till 2 personer?",
      "points": "each",
      "rows": [
        "Svar: [a] dl"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2"
          ],
          "units": {
            "mm³": "1/100000",
            "cm³": "1/100",
            "dm³": "10",
            "m³": "10000",
            "ml": "1/100",
            "cl": "1/10",
            "dl": "1",
            "l": "10",
            "hl": "1000"
          }
        }
      },
      "solution": [
        {
          "text": "2 personer är hälften av 4: 4 / 2 = 2."
        },
        {
          "text": "Vetemjöl: 2 dl."
        }
      ],
      "mistakes": []
    },
    {
      "id": "mvo2-matt-f8f76a86",
      "part": "matt",
      "text": "Hur många 5 dl-mått behövs för att fylla ett kärl på 1 ½ liter?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "1 liter är 10 dl, så 1 ½ liter är 15 dl."
        },
        {
          "text": "15 / 5 = 3 mått."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,3"
          },
          "text": "Gör om liter till dl först: 1 liter = 10 dl."
        }
      ]
    },
    {
      "id": "mvo2-matt-a4363f9a",
      "part": "matt",
      "text": "Hur många 1 dl-mått behövs för att fylla ett kärl på 1 ½ liter?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "1 liter är 10 dl, så 1 ½ liter är 15 dl."
        },
        {
          "text": "15 / 1 = 15 mått."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,5"
          },
          "text": "Gör om liter till dl först: 1 liter = 10 dl."
        }
      ]
    },
    {
      "id": "mvo2-matt-3921a408",
      "part": "matt",
      "text": "Hur många 2 dl-mått behövs för att fylla ett kärl på 1 liter?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter är 10 dl."
        },
        {
          "text": "10 / 2 = 5 mått."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,5"
          },
          "text": "Gör om liter till dl först: 1 liter = 10 dl."
        }
      ]
    },
    {
      "id": "mvo2-matt-2cea00f3",
      "part": "matt",
      "text": "Hur många 2 dl-mått behövs för att fylla ett kärl på 4 liter?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "20"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter är 10 dl, så 4 liter är 40 dl."
        },
        {
          "text": "40 / 2 = 20 mått."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Gör om liter till dl först: 1 liter = 10 dl."
        }
      ]
    },
    {
      "id": "mvo2-matt-c94acf51",
      "part": "matt",
      "text": "Hur många 2 ½ dl-mått behövs för att fylla ett kärl på 5 liter?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "20"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter är 10 dl, så 5 liter är 50 dl."
        },
        {
          "text": "50 / 2,5 = 20 mått."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Gör om liter till dl först: 1 liter = 10 dl."
        }
      ]
    },
    {
      "id": "mvo2-matt-f7b2c027",
      "part": "matt",
      "text": "Hur många 5 dl-mått behövs för att fylla ett kärl på 3 liter?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6"
          ]
        }
      },
      "solution": [
        {
          "text": "1 liter är 10 dl, så 3 liter är 30 dl."
        },
        {
          "text": "30 / 5 = 6 mått."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,6"
          },
          "text": "Gör om liter till dl först: 1 liter = 10 dl."
        }
      ]
    },
    {
      "id": "mvo2-enhet-e0ee4e97",
      "part": "enhet",
      "text": "Fyll i lämplig enhet. Välj mellan liter, dl, msk (matsked) och tsk (tesked).",
      "points": "each",
      "rows": [
        "I bulldegen ska det vara 2 [a] kardemumma."
      ],
      "boxes": {
        "a": {
          "accept": [
            "tsk",
            "tesked",
            "teskedar"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Kryddor mäts i små mått: 2 tsk."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "dl"
          },
          "text": "Det blir för mycket. Kryddor mäts i små mått: 2 tsk."
        }
      ]
    },
    {
      "id": "mvo2-enhet-73840f32",
      "part": "enhet",
      "text": "Fyll i lämplig enhet. Välj mellan liter, dl, msk (matsked) och tsk (tesked).",
      "points": "each",
      "rows": [
        "Ett badkar rymmer 200 [a] vatten."
      ],
      "boxes": {
        "a": {
          "accept": [
            "liter",
            "l"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Ett badkar är stort: 200 liter."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "dl"
          },
          "text": "Det blir för lite. Ett badkar är stort: 200 liter."
        }
      ]
    },
    {
      "id": "mvo2-enhet-440961dd",
      "part": "enhet",
      "text": "Fyll i lämplig enhet. Välj mellan liter, dl, msk (matsked) och tsk (tesked).",
      "points": "each",
      "rows": [
        "Han häller 1 [a] olja i stekpannan."
      ],
      "boxes": {
        "a": {
          "accept": [
            "msk",
            "matsked",
            "matskedar"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Lite olja i en stekpanna är en matsked: 1 msk."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "liter"
          },
          "text": "Det blir för mycket. Lite olja i en stekpanna är en matsked: 1 msk."
        }
      ]
    },
    {
      "id": "mvo2-enhet-52127972",
      "part": "enhet",
      "text": "Fyll i lämplig enhet. Välj mellan liter, dl, msk (matsked) och tsk (tesked).",
      "points": "each",
      "rows": [
        "En hink rymmer 10 [a] vatten."
      ],
      "boxes": {
        "a": {
          "accept": [
            "liter",
            "l"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "En hink rymmer flera liter: 10 liter."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "dl"
          },
          "text": "Det blir för lite. En hink rymmer flera liter: 10 liter."
        }
      ]
    },
    {
      "id": "mvo2-enhet-bd5bbce4",
      "part": "enhet",
      "text": "Fyll i lämplig enhet. Välj mellan liter, dl, msk (matsked) och tsk (tesked).",
      "points": "each",
      "rows": [
        "En liten flaska vatten rymmer 5 [a]."
      ],
      "boxes": {
        "a": {
          "accept": [
            "dl",
            "deciliter"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "En liten flaska är en halv liter, alltså 5 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "liter"
          },
          "text": "Det blir för mycket. En liten flaska är en halv liter, alltså 5 dl."
        }
      ]
    },
    {
      "id": "mvo2-enhet-d146fee8",
      "part": "enhet",
      "text": "Fyll i lämplig enhet. Välj mellan liter, dl, msk (matsked) och tsk (tesked).",
      "points": "each",
      "rows": [
        "En kopp te rymmer 2 [a]."
      ],
      "boxes": {
        "a": {
          "accept": [
            "dl",
            "deciliter"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "En kopp rymmer ungefär ett glas: 2 dl."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "liter"
          },
          "text": "Det blir för mycket. En kopp rymmer ungefär ett glas: 2 dl."
        }
      ]
    }
  ]
};
