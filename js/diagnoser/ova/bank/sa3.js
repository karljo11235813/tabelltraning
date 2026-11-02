// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till SA3.
export default {
  "code": "SA3",
  "parts": [
    {
      "id": "mynt",
      "title": "Kast med ett mynt",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "kort",
      "title": "Ett kort ur en kortlek",
      "labels": [
        "2a",
        "2b",
        "2c"
      ]
    },
    {
      "id": "tva-farger",
      "title": "En kula, två färger",
      "labels": [
        "3a",
        "3b"
      ]
    },
    {
      "id": "andra-kulan",
      "title": "Andra kulan, utan återläggning",
      "labels": [
        "4a",
        "4b"
      ]
    },
    {
      "id": "tre-farger",
      "title": "En kula, tre färger",
      "labels": [
        "5a",
        "5b",
        "5c"
      ]
    },
    {
      "id": "tarning",
      "title": "Kast med en tärning",
      "labels": [
        "6a",
        "6b",
        "6c",
        "6d",
        "6e"
      ]
    }
  ],
  "tasks": [
    {
      "id": "sa3-mynt-6b404ddf",
      "part": "mynt",
      "text": "En enkrona har två sidor. Dessa kallas ”Klave” och ”Krona”. Du kastar ett mynt 100 gånger. Ungefär hur många gånger bör det bli ”Krona”?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "50"
          ]
        }
      },
      "solution": [
        {
          "text": "Sannolikheten för ”Krona” är 1/2 i varje kast, så ungefär hälften av kasten bör bli ”Krona”."
        },
        {
          "math": "100 / 2 = 50"
        }
      ],
      "mistakes": []
    },
    {
      "id": "sa3-mynt-07280131",
      "part": "mynt",
      "text": "En enkrona har två sidor. Dessa kallas ”Klave” och ”Krona”. Omar har fått ”Klave” i fem kast i rad. Hur stor är sannolikheten att det blir ”Krona” i nästa kast?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/2"
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
          "text": "Myntet minns inte vad det visade förra gången. I varje kast är de två sidorna lika troliga."
        },
        {
          "math": "{1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/6"
          },
          "text": "Krona har inte blivit mer troligt för att det dröjt. Myntet minns inte de tidigare kasten."
        }
      ]
    },
    {
      "id": "sa3-mynt-fa5d03f6",
      "part": "mynt",
      "text": "En enkrona har två sidor. Dessa kallas ”Klave” och ”Krona”. Hur stor är sannolikheten att det blir ”Klave” om jag kastar ett mynt en gång?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/2"
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
          "text": "Myntet har två sidor, och de är lika troliga. En av dem är ”Klave”."
        },
        {
          "math": "{1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "Myntet har bara två sidor, så det finns två utfall."
        }
      ]
    },
    {
      "id": "sa3-mynt-e93e342d",
      "part": "mynt",
      "text": "En enkrona har två sidor. Dessa kallas ”Klave” och ”Krona”. Lina har kastat ett mynt tre gånger och fått ”Krona” alla gångerna. Hur stor är sannolikheten att det blir ”Krona” i nästa kast?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/2"
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
          "text": "Myntet minns inte vad det visade förra gången. I varje kast är de två sidorna lika troliga."
        },
        {
          "math": "{1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/16"
          },
          "text": "Det är sannolikheten för fyra kronor i rad, innan något kast är gjort. Här är tre kast redan gjorda."
        }
      ]
    },
    {
      "id": "sa3-mynt-08a90574",
      "part": "mynt",
      "text": "Ett lyckohjul har två lika stora fält, ett rött och ett svart. Det har stannat på rött sju gånger i rad. Hur stor är sannolikheten att det stannar på svart nästa gång?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/2"
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
          "text": "Hjulet minns inte de tidigare snurrningarna. Fälten är lika stora, så de är lika troliga varje gång."
        },
        {
          "math": "{1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7/8"
          },
          "text": "Svart har inte blivit mer troligt för att det dröjt. Hjulet minns inte de tidigare snurrningarna."
        }
      ]
    },
    {
      "id": "sa3-mynt-366c51e7",
      "part": "mynt",
      "text": "En enkrona har två sidor. Dessa kallas ”Klave” och ”Krona”. Hur stor är sannolikheten att det blir antingen ”Krona” eller ”Klave” när jag kastar ett mynt?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/2"
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
          "text": "Båda sidorna räknas, så det blir alltid rätt. Något som alltid händer har sannolikheten 1, alltså 100 %."
        },
        {
          "math": "{2|2} = 1 = 100 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/2"
          },
          "text": "Det är sannolikheten för en av sidorna. Här räknas båda."
        }
      ]
    },
    {
      "id": "sa3-kort-9aac8ac5",
      "part": "kort",
      "text": "I en kortlek finns det 52 kort: 13 spader, 13 klöver, 13 ruter och 13 hjärter. Spader och klöver är svarta, ruter och hjärter är röda. I varje färg finns ett ess, en kung, en dam och en knekt. Du drar ett kort i en blandad kortlek. Hur stor är sannolikheten att kortet inte är ruter?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "39/52"
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
          "text": "Det finns 13 ruter, så 52 − 13 = 39 kort är inte ruter."
        },
        {
          "math": "{39|52} = {3|4} = 75 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13/52"
          },
          "text": "Det är sannolikheten för ruter. Frågan gäller alla andra kort."
        }
      ]
    },
    {
      "id": "sa3-kort-0895cc99",
      "part": "kort",
      "text": "I en kortlek finns det 52 kort: 13 spader, 13 klöver, 13 ruter och 13 hjärter. Spader och klöver är svarta, ruter och hjärter är röda. I varje färg finns ett ess, en kung, en dam och en knekt. Du drar ett kort i en blandad kortlek. Hur stor är sannolikheten att kortet är en röd knekt?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/52",
            "0,04",
            "0,038",
            "0,0385"
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
          "text": "Hjärter och ruter är röda, och de har en knekt var: 2 kort."
        },
        {
          "math": "{2|52} = {1|26}"
        },
        {
          "text": "Det är ungefär 4 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4/52"
          },
          "text": "Det är sannolikheten för en knekt av vilken färg som helst. Bara två av knektarna är röda."
        },
        {
          "answers": {
            "a": "1/52"
          },
          "text": "Det är sannolikheten för en bestämd knekt. Två knektar är röda."
        }
      ]
    },
    {
      "id": "sa3-kort-e6418410",
      "part": "kort",
      "text": "I en kortlek finns det 52 kort: 13 spader, 13 klöver, 13 ruter och 13 hjärter. Spader och klöver är svarta, ruter och hjärter är röda. I varje färg finns ett ess, en kung, en dam och en knekt. Du drar ett kort i en blandad kortlek. Hur stor är sannolikheten att kortet är ett klöverkort?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "13/52"
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
          "text": "Det finns 13 klöver bland de 52 korten."
        },
        {
          "math": "{13|52} = {1|4} = 25 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/13"
          },
          "text": "Det är sannolikheten för ett visst slags kort i en färg. Det finns 13 klöver bland 52 kort."
        }
      ]
    },
    {
      "id": "sa3-kort-c33a0945",
      "part": "kort",
      "text": "I en kortlek finns det 52 kort: 13 spader, 13 klöver, 13 ruter och 13 hjärter. Spader och klöver är svarta, ruter och hjärter är röda. I varje färg finns ett ess, en kung, en dam och en knekt. Du drar ett kort i en blandad kortlek. Hur stor är sannolikheten att kortet är en kung?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4/52",
            "0,08",
            "0,077",
            "0,0769"
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
          "text": "Det finns en kung i varje färg: 4 kungar bland de 52 korten."
        },
        {
          "math": "{4|52} = {1|13}"
        },
        {
          "text": "Det är ungefär 8 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/52"
          },
          "text": "Det är sannolikheten för en bestämd kung. Det finns en kung i varje färg."
        }
      ]
    },
    {
      "id": "sa3-kort-2c132e68",
      "part": "kort",
      "text": "I en kortlek finns det 52 kort: 13 spader, 13 klöver, 13 ruter och 13 hjärter. Spader och klöver är svarta, ruter och hjärter är röda. I varje färg finns ett ess, en kung, en dam och en knekt. Du drar ett kort i en blandad kortlek. Hur stor är sannolikheten att kortet är ett svart kort?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "26/52"
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
          "text": "Spader och klöver är svarta: 13 + 13 = 26 kort."
        },
        {
          "math": "{26|52} = {1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13/52"
          },
          "text": "Det är bara en av de svarta färgerna. Både spader och klöver är svarta."
        }
      ]
    },
    {
      "id": "sa3-kort-343e7ddc",
      "part": "kort",
      "text": "I en kortlek finns det 52 kort: 13 spader, 13 klöver, 13 ruter och 13 hjärter. Spader och klöver är svarta, ruter och hjärter är röda. I varje färg finns ett ess, en kung, en dam och en knekt. Du drar ett kort i en blandad kortlek. Hur stor är sannolikheten att kortet är hjärter dam?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/52",
            "0,02",
            "0,019",
            "0,0192"
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
          "text": "Det finns bara ett sådant kort bland de 52 korten."
        },
        {
          "math": "{1|52}"
        },
        {
          "text": "Det är ungefär 2 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4/52"
          },
          "text": "Det är sannolikheten för en dam av vilken färg som helst. Här gäller det just hjärter dam."
        },
        {
          "answers": {
            "a": "13/52"
          },
          "text": "Det är sannolikheten för hjärter. Här gäller det just hjärter dam."
        }
      ]
    },
    {
      "id": "sa3-tva-farger-360e8be5",
      "part": "tva-farger",
      "text": "I en kulpåse ligger 5 röda och 3 gröna kulor. Du stoppar ner handen och tar upp en kula. Hur stor är sannolikheten att du får upp en röd kula?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5/8"
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
          "text": "Det finns 5 + 3 = 8 kulor, och varje kula är lika trolig. 5 av dem är röda."
        },
        {
          "math": "{5|8} = 62,5 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/3"
          },
          "text": "Du jämförde röda med gröna. Jämför med alla 8 kulor."
        },
        {
          "answers": {
            "a": "3/8"
          },
          "text": "Det är sannolikheten för en grön kula."
        }
      ]
    },
    {
      "id": "sa3-tva-farger-8bd02fde",
      "part": "tva-farger",
      "text": "I en kulpåse ligger 4 gröna och 12 röda kulor. Du stoppar ner handen och tar upp en kula. Hur stor är sannolikheten att du får upp en röd kula?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12/16"
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
          "text": "Det finns 4 + 12 = 16 kulor, och varje kula är lika trolig. 12 av dem är röda."
        },
        {
          "math": "{12|16} = {3|4} = 75 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12/4"
          },
          "text": "Du jämförde röda med gröna. Jämför med alla 16 kulor."
        },
        {
          "answers": {
            "a": "4/16"
          },
          "text": "Det är sannolikheten för en grön kula."
        }
      ]
    },
    {
      "id": "sa3-tva-farger-7bc26ea4",
      "part": "tva-farger",
      "text": "I en kulpåse ligger 7 röda och 3 vita kulor. Du stoppar ner handen och tar upp en kula. Hur stor är sannolikheten att du får upp en vit kula?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/10"
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
          "text": "Det finns 7 + 3 = 10 kulor, och varje kula är lika trolig. 3 av dem är vita."
        },
        {
          "math": "{3|10} = 30 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/7"
          },
          "text": "Du jämförde vita med röda. Jämför med alla 10 kulor."
        },
        {
          "answers": {
            "a": "7/10"
          },
          "text": "Det är sannolikheten för en röd kula."
        }
      ]
    },
    {
      "id": "sa3-tva-farger-eb1e318a",
      "part": "tva-farger",
      "text": "I en kulpåse ligger 9 gula och 6 blå kulor. Du stoppar ner handen och tar upp en kula. Hur stor är sannolikheten att du får upp en blå kula?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6/15"
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
          "text": "Det finns 9 + 6 = 15 kulor, och varje kula är lika trolig. 6 av dem är blå."
        },
        {
          "math": "{6|15} = {2|5} = 40 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6/9"
          },
          "text": "Du jämförde blå med gula. Jämför med alla 15 kulor."
        },
        {
          "answers": {
            "a": "9/15"
          },
          "text": "Det är sannolikheten för en gul kula."
        }
      ]
    },
    {
      "id": "sa3-tva-farger-2e74b9a9",
      "part": "tva-farger",
      "text": "I en kulpåse ligger 10 vita och 15 svarta kulor. Du stoppar ner handen och tar upp en kula. Hur stor är sannolikheten att du får upp en vit kula?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10/25"
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
          "text": "Det finns 10 + 15 = 25 kulor, och varje kula är lika trolig. 10 av dem är vita."
        },
        {
          "math": "{10|25} = {2|5} = 40 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10/15"
          },
          "text": "Du jämförde vita med svarta. Jämför med alla 25 kulor."
        },
        {
          "answers": {
            "a": "15/25"
          },
          "text": "Det är sannolikheten för en svart kula."
        }
      ]
    },
    {
      "id": "sa3-tva-farger-c67cec9b",
      "part": "tva-farger",
      "text": "I en kulpåse ligger 2 svarta och 8 vita kulor. Du stoppar ner handen och tar upp en kula. Hur stor är sannolikheten att du får upp en svart kula?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/10"
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
          "text": "Det finns 2 + 8 = 10 kulor, och varje kula är lika trolig. 2 av dem är svarta."
        },
        {
          "math": "{2|10} = {1|5} = 20 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/8"
          },
          "text": "Du jämförde svarta med vita. Jämför med alla 10 kulor."
        },
        {
          "answers": {
            "a": "8/10"
          },
          "text": "Det är sannolikheten för en vit kula."
        }
      ]
    },
    {
      "id": "sa3-andra-kulan-d76c4eaf",
      "part": "andra-kulan",
      "text": "I en kulpåse ligger 2 gula och 9 svarta kulor. Du drar en svart kula och lägger inte tillbaka den. Sedan drar du en kula till. Hur stor är sannolikheten att den kulan är gul?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/10"
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
          "text": "Efter den första dragningen ligger det 10 kulor kvar: 2 gula och 8 svarta."
        },
        {
          "math": "{2|10} = {1|5} = 20 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2/11"
          },
          "text": "Du räknade som om den första kulan låg kvar. Nu finns det bara 10 kulor i påsen."
        }
      ]
    },
    {
      "id": "sa3-andra-kulan-dd777001",
      "part": "andra-kulan",
      "text": "I en kulpåse ligger 8 röda och 4 gröna kulor. Du drar en röd kula och lägger inte tillbaka den. Sedan drar du en kula till. Hur stor är sannolikheten att den kulan är röd?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "7/11",
            "0,64",
            "0,636",
            "0,6364"
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
          "text": "Efter den första dragningen ligger det 11 kulor kvar: 7 röda och 4 gröna."
        },
        {
          "math": "{7|11}"
        },
        {
          "text": "Det är ungefär 64 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8/12"
          },
          "text": "Du räknade som om den första kulan låg kvar. Nu finns det bara 11 kulor i påsen."
        },
        {
          "answers": {
            "a": "8/11"
          },
          "text": "Du tog bort en kula från alla kulor, men inte från de röda. Det är 7 röda kvar."
        }
      ]
    },
    {
      "id": "sa3-andra-kulan-a95730f9",
      "part": "andra-kulan",
      "text": "I en kulpåse ligger 4 vita och 6 blå kulor. Du drar en blå kula och lägger inte tillbaka den. Sedan drar du en kula till. Hur stor är sannolikheten att den kulan är vit?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4/9",
            "0,44",
            "0,444",
            "0,4444"
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
          "text": "Efter den första dragningen ligger det 9 kulor kvar: 4 vita och 5 blå."
        },
        {
          "math": "{4|9}"
        },
        {
          "text": "Det är ungefär 44 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4/10"
          },
          "text": "Du räknade som om den första kulan låg kvar. Nu finns det bara 9 kulor i påsen."
        }
      ]
    },
    {
      "id": "sa3-andra-kulan-eeae7239",
      "part": "andra-kulan",
      "text": "I en kulpåse ligger 5 vita och 3 blå kulor. Du drar en vit kula och lägger inte tillbaka den. Sedan drar du en kula till. Hur stor är sannolikheten att den kulan är blå?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/7",
            "0,43",
            "0,429",
            "0,4286"
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
          "text": "Efter den första dragningen ligger det 7 kulor kvar: 4 vita och 3 blå."
        },
        {
          "math": "{3|7}"
        },
        {
          "text": "Det är ungefär 43 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/8"
          },
          "text": "Du räknade som om den första kulan låg kvar. Nu finns det bara 7 kulor i påsen."
        }
      ]
    },
    {
      "id": "sa3-andra-kulan-b14d74b7",
      "part": "andra-kulan",
      "text": "I en kulpåse ligger 3 röda och 5 gröna kulor. Du drar en grön kula och lägger inte tillbaka den. Sedan drar du en kula till. Hur stor är sannolikheten att den kulan är grön?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4/7",
            "0,57",
            "0,571",
            "0,5714"
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
          "text": "Efter den första dragningen ligger det 7 kulor kvar: 3 röda och 4 gröna."
        },
        {
          "math": "{4|7}"
        },
        {
          "text": "Det är ungefär 57 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/8"
          },
          "text": "Du räknade som om den första kulan låg kvar. Nu finns det bara 7 kulor i påsen."
        },
        {
          "answers": {
            "a": "5/7"
          },
          "text": "Du tog bort en kula från alla kulor, men inte från de gröna. Det är 4 gröna kvar."
        }
      ]
    },
    {
      "id": "sa3-andra-kulan-51ebe45a",
      "part": "andra-kulan",
      "text": "I en kulpåse ligger 7 vita och 2 blå kulor. Du drar en vit kula och lägger inte tillbaka den. Sedan drar du en kula till. Hur stor är sannolikheten att den kulan är vit?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6/8"
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
          "text": "Efter den första dragningen ligger det 8 kulor kvar: 6 vita och 2 blå."
        },
        {
          "math": "{6|8} = {3|4} = 75 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7/9"
          },
          "text": "Du räknade som om den första kulan låg kvar. Nu finns det bara 8 kulor i påsen."
        },
        {
          "answers": {
            "a": "7/8"
          },
          "text": "Du tog bort en kula från alla kulor, men inte från de vita. Det är 6 vita kvar."
        }
      ]
    },
    {
      "id": "sa3-tre-farger-2237c7cc",
      "part": "tre-farger",
      "text": "I en påse ligger 3 röda, 6 gula och 7 blå kulor. Du drar en kula ur påsen. Bestäm sannolikheten att dra en kula som inte är gul.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10/16"
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
          "text": "Det finns 3 + 6 + 7 = 16 kulor, och 10 av dem passar."
        },
        {
          "math": "{10|16} = {5|8} = 62,5 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6/16"
          },
          "text": "Det är sannolikheten för en gul kula. Frågan gäller alla andra kulor."
        },
        {
          "answers": {
            "a": "10/6"
          },
          "text": "Du jämförde med de andra kulorna. Jämför med alla 16 kulor."
        }
      ]
    },
    {
      "id": "sa3-tre-farger-c831567c",
      "part": "tre-farger",
      "text": "I en påse ligger 4 gula, 1 vit och 5 svarta kulor. Du drar en kula ur påsen. Bestäm sannolikheten att dra en vit kula.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/10"
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
          "text": "Det finns 4 + 1 + 5 = 10 kulor, och 1 av dem passar."
        },
        {
          "math": "{1|10} = 10 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "Tre färger betyder inte att de är lika troliga. Det finns bara en vit kula."
        },
        {
          "answers": {
            "a": "1/9"
          },
          "text": "Du jämförde med de andra kulorna. Jämför med alla 10 kulor."
        }
      ]
    },
    {
      "id": "sa3-tre-farger-a28ed613",
      "part": "tre-farger",
      "text": "I en påse ligger 7 röda, 2 gröna och 6 blå kulor. Du drar en kula ur påsen. Bestäm sannolikheten att dra en röd eller en grön kula.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9/15"
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
          "text": "Det finns 7 + 2 + 6 = 15 kulor, och 9 av dem passar."
        },
        {
          "math": "{9|15} = {3|5} = 60 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7/15"
          },
          "text": "Det är bara de röda. Båda färgerna räknas."
        },
        {
          "answers": {
            "a": "9/6"
          },
          "text": "Du jämförde med de andra kulorna. Jämför med alla 15 kulor."
        }
      ]
    },
    {
      "id": "sa3-tre-farger-413fdad3",
      "part": "tre-farger",
      "text": "I en påse ligger 2 röda, 3 gröna och 5 blå kulor. Du drar en kula ur påsen. Bestäm sannolikheten att dra en blå kula.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5/10"
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
          "text": "Det finns 2 + 3 + 5 = 10 kulor, och 5 av dem passar."
        },
        {
          "math": "{5|10} = {1|2} = 50 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3/10"
          },
          "text": "Det är sannolikheten för en grön kula."
        },
        {
          "answers": {
            "a": "5/5"
          },
          "text": "Du jämförde med de andra kulorna. Jämför med alla 10 kulor."
        }
      ]
    },
    {
      "id": "sa3-tre-farger-86aaa4e8",
      "part": "tre-farger",
      "text": "I en påse ligger 1 röd, 6 gröna och 8 blå kulor. Du drar en kula ur påsen. Bestäm sannolikheten att dra en röd kula.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/15",
            "0,07",
            "0,067",
            "0,0667"
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
          "text": "Det finns 1 + 6 + 8 = 15 kulor, och 1 av dem passar."
        },
        {
          "math": "{1|15}"
        },
        {
          "text": "Det är ungefär 7 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/3"
          },
          "text": "Tre färger betyder inte att de är lika troliga. Det finns bara en röd kula."
        },
        {
          "answers": {
            "a": "1/14"
          },
          "text": "Du jämförde med de andra kulorna. Jämför med alla 15 kulor."
        }
      ]
    },
    {
      "id": "sa3-tre-farger-8e3cc56c",
      "part": "tre-farger",
      "text": "I en påse ligger 6 gröna, 3 vita och 7 röda kulor. Du drar en kula ur påsen. Bestäm sannolikheten att dra en kula som inte är röd.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9/16"
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
          "text": "Det finns 6 + 3 + 7 = 16 kulor, och 9 av dem passar."
        },
        {
          "math": "{9|16} = 56,25 %"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7/16"
          },
          "text": "Det är sannolikheten för en röd kula. Frågan gäller alla andra kulor."
        },
        {
          "answers": {
            "a": "9/7"
          },
          "text": "Du jämförde med de andra kulorna. Jämför med alla 16 kulor."
        }
      ]
    },
    {
      "id": "sa3-tarning-23f31788",
      "part": "tarning",
      "text": "Du kastar en vanlig tärning en gång. Hur stor är sannolikheten att få ett jämnt antal prickar?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3/6"
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
          "text": "2, 4 och 6 är jämna: 3 av de 6 sidorna."
        },
        {
          "math": "{3|6} = {1|2} = 50 %"
        }
      ],
      "mistakes": []
    },
    {
      "id": "sa3-tarning-2c5be712",
      "part": "tarning",
      "text": "Du kastar en vanlig tärning en gång. Hur stor är sannolikheten att inte få en sexa?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5/6",
            "0,83",
            "0,833",
            "0,8333"
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
          "text": "Alla sidor utom en: 5 av de 6 sidorna."
        },
        {
          "math": "{5|6}"
        },
        {
          "text": "Det är ungefär 83 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/6"
          },
          "text": "Det är sannolikheten för en sexa. Frågan gäller alla andra sidor."
        }
      ]
    },
    {
      "id": "sa3-tarning-a2872691",
      "part": "tarning",
      "text": "Du kastar en vanlig tärning en gång. Hur stor är sannolikheten att få minst fem prickar?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/6",
            "0,33",
            "0,333",
            "0,3333"
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
          "text": "Minst fem betyder fem eller fler: 5 och 6, alltså 2 av de 6 sidorna."
        },
        {
          "math": "{2|6} = {1|3}"
        },
        {
          "text": "Det är ungefär 33 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/6"
          },
          "text": "Minst fem betyder fem eller fler, så också 5 räknas."
        }
      ]
    },
    {
      "id": "sa3-tarning-2de1c9a1",
      "part": "tarning",
      "text": "Du kastar en vanlig tärning en gång. Hur stor är sannolikheten att få färre än fem prickar?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4/6",
            "0,67",
            "0,667",
            "0,6667"
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
          "text": "Färre än fem är 1, 2, 3 och 4: 4 av de 6 sidorna."
        },
        {
          "math": "{4|6} = {2|3}"
        },
        {
          "text": "Det är ungefär 67 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/6"
          },
          "text": "Färre än fem betyder att 5 inte räknas."
        }
      ]
    },
    {
      "id": "sa3-tarning-a0774065",
      "part": "tarning",
      "text": "Du kastar en vanlig tärning en gång. Hur stor är sannolikheten att få högst två prickar?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2/6",
            "0,33",
            "0,333",
            "0,3333"
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
          "text": "Högst två betyder två eller färre: 1 och 2, alltså 2 av de 6 sidorna."
        },
        {
          "math": "{2|6} = {1|3}"
        },
        {
          "text": "Det är ungefär 33 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1/6"
          },
          "text": "Högst två betyder två eller färre, så också 2 räknas."
        },
        {
          "answers": {
            "a": "4/6"
          },
          "text": "Det är sannolikheten för fler än två prickar."
        }
      ]
    },
    {
      "id": "sa3-tarning-a1a7e256",
      "part": "tarning",
      "text": "Du kastar en vanlig tärning en gång. Hur stor är sannolikheten att få fem prickar?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1/6",
            "0,17",
            "0,167",
            "0,1667"
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
          "text": "Bara en av de 6 sidorna har fem prickar."
        },
        {
          "math": "{1|6}"
        },
        {
          "text": "Det är ungefär 17 %."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5/6"
          },
          "text": "Det är sannolikheten för att inte få fem prickar."
        }
      ]
    }
  ]
};
