// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till SA2.
export default {
  "code": "SA2",
  "parts": [
    {
      "id": "par",
      "title": "Par ur två grupper",
      "labels": [
        "1"
      ]
    },
    {
      "id": "tal",
      "title": "Tal av givna siffror",
      "labels": [
        "2"
      ]
    },
    {
      "id": "roller",
      "title": "Urval där ordningen spelar roll",
      "labels": [
        "3"
      ]
    },
    {
      "id": "alla-med-alla",
      "title": "Alla med alla",
      "labels": [
        "4"
      ]
    },
    {
      "id": "diagonaler",
      "title": "Diagonaler",
      "labels": [
        "5"
      ]
    },
    {
      "id": "saker",
      "title": "Hur många måste du ta?",
      "labels": [
        "6"
      ]
    }
  ],
  "tasks": [
    {
      "id": "sa2-par-cb1eae04",
      "part": "par",
      "text": "Till en orientering behövs en som springer och en som håller kartan. Det finns 3 löpare och 9 kartläsare. Hur många olika par kan man bilda?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Var och en av de 3 kan paras ihop med var och en av de 9."
        },
        {
          "math": "3 · 9 = 27"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du lade ihop 3 och 9. Var och en av de 3 ger 9 olika par, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa2-par-6c7e2c25",
      "part": "par",
      "text": "En kod består av en bokstav (A, B, C, D eller E) följd av en siffra (1–9). Hur många olika koder finns det?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "45"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 5 kan paras ihop med var och en av de 9."
        },
        {
          "math": "5 · 9 = 45"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "14"
          },
          "text": "Du lade ihop 5 och 9. Var och en av de 5 ger 9 olika par, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa2-par-15029556",
      "part": "par",
      "text": "Hur många olika danspar (flicka-pojke) kan man bilda av 5 pojkar och 7 flickor?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "35"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 5 kan paras ihop med var och en av de 7."
        },
        {
          "math": "5 · 7 = 35"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du lade ihop 5 och 7. Var och en av de 5 ger 7 olika par, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa2-par-dfe0aa91",
      "part": "par",
      "text": "På ett läger ska en vuxen och ett barn bilda lag. Det finns 3 vuxna och 8 barn. Hur många olika lag kan man bilda?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Var och en av de 3 kan paras ihop med var och en av de 8."
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
          "text": "Du lade ihop 3 och 8. Var och en av de 3 ger 8 olika par, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa2-par-f2b56ed0",
      "part": "par",
      "text": "I en badmintonklubb finns 6 flickor och 5 pojkar. Hur många olika par med en flicka och en pojke kan man bilda?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 6 kan paras ihop med var och en av de 5."
        },
        {
          "math": "6 · 5 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Du lade ihop 6 och 5. Var och en av de 6 ger 5 olika par, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa2-par-fef947b4",
      "part": "par",
      "text": "I en klass finns 7 sångare och 4 gitarrister. Hur många olika duor med en sångare och en gitarrist kan man bilda?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "28"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 7 kan paras ihop med var och en av de 4."
        },
        {
          "math": "7 · 4 = 28"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Du lade ihop 7 och 4. Var och en av de 7 ger 4 olika par, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa2-tal-7c5772f8",
      "part": "tal",
      "text": "Hur många tresiffriga tal kan man skriva med siffrorna 1, 2, 3, 4, 5 om talet inte får innehålla två likadana siffror?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Den första siffran kan väljas på 5 sätt, den andra på 4 sätt och den tredje på 3 sätt."
        },
        {
          "math": "5 · 4 · 3 = 60"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "125"
          },
          "text": "Då får talet ha likadana siffror. Varje siffra som är vald kan inte väljas igen."
        },
        {
          "answers": {
            "a": "20"
          },
          "text": "Det är tvåsiffriga tal. Talet har en siffra till, och den kan väljas på 3 sätt."
        }
      ]
    },
    {
      "id": "sa2-tal-59791edc",
      "part": "tal",
      "text": "Hur många tvåsiffriga tal kan man skriva med siffrorna 1, 2, 3, 4, 5 om talet inte får innehålla två likadana siffror?",
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
          "text": "Den första siffran kan väljas på 5 sätt. Den andra får inte vara samma, så den kan väljas på 4 sätt."
        },
        {
          "math": "5 · 4 = 20"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "25"
          },
          "text": "Då får talet ha två likadana siffror, till exempel 33. Den andra siffran kan bara väljas på 4 sätt."
        }
      ]
    },
    {
      "id": "sa2-tal-15b4f1af",
      "part": "tal",
      "text": "Hur många tvåsiffriga tal kan man skriva med siffrorna 2, 4, 6, 8 om talet inte får innehålla två likadana siffror?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12"
          ]
        }
      },
      "solution": [
        {
          "text": "Den första siffran kan väljas på 4 sätt. Den andra får inte vara samma, så den kan väljas på 3 sätt."
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
          "text": "Då får talet ha två likadana siffror, till exempel 44. Den andra siffran kan bara väljas på 3 sätt."
        }
      ]
    },
    {
      "id": "sa2-tal-805fcbed",
      "part": "tal",
      "text": "Hur många tvåsiffriga tal kan man skriva med siffrorna 0, 1, 2, 3, 4 om talet inte får innehålla två likadana siffror? Ett tvåsiffrigt tal kan inte börja med 0.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "16"
          ]
        }
      },
      "solution": [
        {
          "text": "Den första siffran kan vara 1, 2, 3 eller 4: 4 sätt. Den andra får vara 0 men inte samma som den första: också 4 sätt."
        },
        {
          "math": "4 · 4 = 16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "20"
          },
          "text": "Då räknas tal som börjar med 0, till exempel 03, och det är inget tvåsiffrigt tal."
        },
        {
          "answers": {
            "a": "12"
          },
          "text": "Den andra siffran får vara 0, så den kan väljas på 4 sätt."
        }
      ]
    },
    {
      "id": "sa2-tal-cd9956d2",
      "part": "tal",
      "text": "Hur många tvåsiffriga tal kan man skriva med siffrorna 1, 2, 3, 4, 5, 6 om talet får innehålla två likadana siffror?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "36"
          ]
        }
      },
      "solution": [
        {
          "text": "Båda siffrorna kan väljas på 6 sätt, eftersom talet får ha två likadana siffror."
        },
        {
          "math": "6 · 6 = 36"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Det gäller när två likadana siffror är förbjudna. Här får talet vara till exempel 33."
        }
      ]
    },
    {
      "id": "sa2-tal-68e9a4cb",
      "part": "tal",
      "text": "Hur många tvåsiffriga tal kan man skriva med siffrorna 1, 2, 3, 4, 5, 6, 7 om talet inte får innehålla två likadana siffror?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Den första siffran kan väljas på 7 sätt. Den andra får inte vara samma, så den kan väljas på 6 sätt."
        },
        {
          "math": "7 · 6 = 42"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "49"
          },
          "text": "Då får talet ha två likadana siffror, till exempel 55. Den andra siffran kan bara väljas på 6 sätt."
        },
        {
          "answers": {
            "a": "21"
          },
          "text": "Här spelar ordningen roll: 12 och 21 är olika tal, så du ska inte dela med 2."
        }
      ]
    },
    {
      "id": "sa2-roller-81ff0fcd",
      "part": "roller",
      "text": "I skolan ska man spela teater. Bland 6 kandidater ska man först välja en som spelar kungen, därefter en som spelar drottningen och slutligen en som spelar narren. På hur många olika sätt kan det ske?",
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
          "text": "Den första kan väljas på 6 sätt. Sedan finns 5 kvar att välja mellan, eftersom ingen kan få två roller, och sedan 4."
        },
        {
          "math": "6 · 5 · 4 = 120"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "216"
          },
          "text": "Då kan samma person få flera roller. För varje val finns det en person mindre kvar: 6 · 5 · 4."
        },
        {
          "answers": {
            "a": "20"
          },
          "text": "Här spelar ordningen roll: det är skillnad på vem som får vilken roll, så du ska inte dela."
        }
      ]
    },
    {
      "id": "sa2-roller-c4f8f3e2",
      "part": "roller",
      "text": "Bland 5 kandidater ska man först välja en ordförande, därefter en kassör och slutligen en sekreterare. På hur många olika sätt kan det ske?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Den första kan väljas på 5 sätt. Sedan finns 4 kvar att välja mellan, eftersom ingen kan få två roller, och sedan 3."
        },
        {
          "math": "5 · 4 · 3 = 60"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "125"
          },
          "text": "Då kan samma person få flera roller. För varje val finns det en person mindre kvar: 5 · 4 · 3."
        },
        {
          "answers": {
            "a": "10"
          },
          "text": "Här spelar ordningen roll: det är skillnad på vem som får vilken roll, så du ska inte dela."
        }
      ]
    },
    {
      "id": "sa2-roller-363e212d",
      "part": "roller",
      "text": "Bland 9 elever ska man välja en programledare och en tekniker. På hur många olika sätt kan det ske?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "72"
          ]
        }
      },
      "solution": [
        {
          "text": "Den första kan väljas på 9 sätt. Sedan finns 8 kvar att välja mellan, eftersom ingen kan få två roller."
        },
        {
          "math": "9 · 8 = 72"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "81"
          },
          "text": "Då kan samma person få flera roller. För varje val finns det en person mindre kvar: 9 · 8."
        },
        {
          "answers": {
            "a": "36"
          },
          "text": "Här spelar ordningen roll: det är skillnad på vem som får vilken roll, så du ska inte dela."
        }
      ]
    },
    {
      "id": "sa2-roller-77d7e8b5",
      "part": "roller",
      "text": "I ett lag med 6 spelare ska man välja en målvakt och en kapten, och det får inte vara samma person. På hur många olika sätt kan det ske?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30"
          ]
        }
      },
      "solution": [
        {
          "text": "Den första kan väljas på 6 sätt. Sedan finns 5 kvar att välja mellan, eftersom ingen kan få två roller."
        },
        {
          "math": "6 · 5 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Då kan samma person få flera roller. För varje val finns det en person mindre kvar: 6 · 5."
        },
        {
          "answers": {
            "a": "15"
          },
          "text": "Här spelar ordningen roll: det är skillnad på vem som får vilken roll, så du ska inte dela."
        }
      ]
    },
    {
      "id": "sa2-roller-744e9905",
      "part": "roller",
      "text": "8 löpare springer ett lopp. På hur många olika sätt kan guld, silver och brons delas ut?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "336"
          ]
        }
      },
      "solution": [
        {
          "text": "Den första kan väljas på 8 sätt. Sedan finns 7 kvar att välja mellan, eftersom ingen kan få två roller, och sedan 6."
        },
        {
          "math": "8 · 7 · 6 = 336"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "512"
          },
          "text": "Då kan samma person få flera roller. För varje val finns det en person mindre kvar: 8 · 7 · 6."
        },
        {
          "answers": {
            "a": "56"
          },
          "text": "Här spelar ordningen roll: det är skillnad på vem som får vilken roll, så du ska inte dela."
        }
      ]
    },
    {
      "id": "sa2-roller-3919a60a",
      "part": "roller",
      "text": "10 hästar springer ett lopp. På hur många olika sätt kan de tre första platserna fördelas?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "720"
          ]
        }
      },
      "solution": [
        {
          "text": "Den första kan väljas på 10 sätt. Sedan finns 9 kvar att välja mellan, eftersom ingen kan få två roller, och sedan 8."
        },
        {
          "math": "10 · 9 · 8 = 720"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1 000"
          },
          "text": "Då kan samma person få flera roller. För varje val finns det en person mindre kvar: 10 · 9 · 8."
        },
        {
          "answers": {
            "a": "120"
          },
          "text": "Här spelar ordningen roll: det är skillnad på vem som får vilken roll, så du ska inte dela."
        }
      ]
    },
    {
      "id": "sa2-alla-med-alla-acfdc35e",
      "part": "alla-med-alla",
      "text": "8 personer ska skaka hand med varandra. Hur många handskakningar blir det?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "28"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 8 personerna har 7 andra att möta. Då räknas varje handskakning två gånger (A med B och B med A), så dela med 2."
        },
        {
          "math": "8 · 7 = 56"
        },
        {
          "math": "56 / 2 = 28"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "56"
          },
          "text": "Du räknade varje handskakning två gånger: A med B är samma som B med A. Dela med 2."
        },
        {
          "answers": {
            "a": "64"
          },
          "text": "Ingen möter sig själv, och varje handskakning räknas bara en gång."
        }
      ]
    },
    {
      "id": "sa2-alla-med-alla-ec179e03",
      "part": "alla-med-alla",
      "text": "I en turnering med 5 lag möter varje lag alla andra lag en gång. Hur många matcher blir det?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 5 lagen har 4 andra att möta. Då räknas varje match två gånger (A med B och B med A), så dela med 2."
        },
        {
          "math": "5 · 4 = 20"
        },
        {
          "math": "20 / 2 = 10"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "20"
          },
          "text": "Du räknade varje match två gånger: A med B är samma som B med A. Dela med 2."
        },
        {
          "answers": {
            "a": "25"
          },
          "text": "Ingen möter sig själv, och varje match räknas bara en gång."
        }
      ]
    },
    {
      "id": "sa2-alla-med-alla-eef0f0b9",
      "part": "alla-med-alla",
      "text": "4 kompisar skålar med varandra, alla med alla. Hur många skålningar blir det?",
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
          "text": "Var och en av de 4 kompisarna har 3 andra att möta. Då räknas varje skålning två gånger (A med B och B med A), så dela med 2."
        },
        {
          "math": "4 · 3 = 12"
        },
        {
          "math": "12 / 2 = 6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Du räknade varje skålning två gånger: A med B är samma som B med A. Dela med 2."
        },
        {
          "answers": {
            "a": "16"
          },
          "text": "Ingen möter sig själv, och varje skålning räknas bara en gång."
        }
      ]
    },
    {
      "id": "sa2-alla-med-alla-25e7a71a",
      "part": "alla-med-alla",
      "text": "10 elever kramar varandra efter skolavslutningen, alla med alla. Hur många kramar blir det?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "45"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 10 eleverna har 9 andra att möta. Då räknas varje kram två gånger (A med B och B med A), så dela med 2."
        },
        {
          "math": "10 · 9 = 90"
        },
        {
          "math": "90 / 2 = 45"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "90"
          },
          "text": "Du räknade varje kram två gånger: A med B är samma som B med A. Dela med 2."
        },
        {
          "answers": {
            "a": "100"
          },
          "text": "Ingen möter sig själv, och varje kram räknas bara en gång."
        }
      ]
    },
    {
      "id": "sa2-alla-med-alla-329c2c6b",
      "part": "alla-med-alla",
      "text": "I en serie med 12 lag möter varje lag alla andra lag en gång. Hur många matcher blir det?",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Var och en av de 12 lagen har 11 andra att möta. Då räknas varje match två gånger (A med B och B med A), så dela med 2."
        },
        {
          "math": "12 · 11 = 132"
        },
        {
          "math": "132 / 2 = 66"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "132"
          },
          "text": "Du räknade varje match två gånger: A med B är samma som B med A. Dela med 2."
        },
        {
          "answers": {
            "a": "144"
          },
          "text": "Ingen möter sig själv, och varje match räknas bara en gång."
        }
      ]
    },
    {
      "id": "sa2-alla-med-alla-48e5e352",
      "part": "alla-med-alla",
      "text": "På en cirkel ligger 7 punkter. Man drar en rät linje mellan varje par av punkter. Hur många linjer blir det?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "21"
          ]
        }
      },
      "solution": [
        {
          "text": "Var och en av de 7 punkterna har 6 andra att möta. Då räknas varje linje två gånger (A med B och B med A), så dela med 2."
        },
        {
          "math": "7 · 6 = 42"
        },
        {
          "math": "42 / 2 = 21"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "42"
          },
          "text": "Du räknade varje linje två gånger: A med B är samma som B med A. Dela med 2."
        },
        {
          "answers": {
            "a": "49"
          },
          "text": "Ingen möter sig själv, och varje linje räknas bara en gång."
        }
      ]
    },
    {
      "id": "sa2-diagonaler-25a4d1ef",
      "part": "diagonaler",
      "text": "Hur många diagonaler kan man dra i en niohörning? En diagonal går mellan två hörn som inte ligger bredvid varandra.",
      "points": "each",
      "rows": [
        "Svar: [a]"
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
          "text": "Från varje hörn går det diagonaler till alla hörn utom hörnet självt och de två grannarna: 9 − 3 = 6 diagonaler."
        },
        {
          "text": "Det finns 9 hörn, men varje diagonal räknas från båda sina ändar, så dela med 2."
        },
        {
          "math": "9 · 6 = 54"
        },
        {
          "math": "54 / 2 = 27"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "54"
          },
          "text": "Du räknade varje diagonal två gånger, en från varje ände. Dela med 2."
        },
        {
          "answers": {
            "a": "36"
          },
          "text": "Du räknade också sidorna. En sida går mellan två hörn som ligger bredvid varandra och är ingen diagonal."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "Det är antalet diagonaler från ett hörn. Figuren har 9 hörn."
        }
      ]
    },
    {
      "id": "sa2-diagonaler-8e5b44a1",
      "part": "diagonaler",
      "text": "Hur många diagonaler kan man dra i en sjuhörning? En diagonal går mellan två hörn som inte ligger bredvid varandra.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "14"
          ]
        }
      },
      "solution": [
        {
          "text": "Från varje hörn går det diagonaler till alla hörn utom hörnet självt och de två grannarna: 7 − 3 = 4 diagonaler."
        },
        {
          "text": "Det finns 7 hörn, men varje diagonal räknas från båda sina ändar, så dela med 2."
        },
        {
          "math": "7 · 4 = 28"
        },
        {
          "math": "28 / 2 = 14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "28"
          },
          "text": "Du räknade varje diagonal två gånger, en från varje ände. Dela med 2."
        },
        {
          "answers": {
            "a": "21"
          },
          "text": "Du räknade också sidorna. En sida går mellan två hörn som ligger bredvid varandra och är ingen diagonal."
        },
        {
          "answers": {
            "a": "4"
          },
          "text": "Det är antalet diagonaler från ett hörn. Figuren har 7 hörn."
        }
      ]
    },
    {
      "id": "sa2-diagonaler-e8ec32d1",
      "part": "diagonaler",
      "text": "Hur många diagonaler kan man dra i en tiohörning? En diagonal går mellan två hörn som inte ligger bredvid varandra.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "35"
          ]
        }
      },
      "solution": [
        {
          "text": "Från varje hörn går det diagonaler till alla hörn utom hörnet självt och de två grannarna: 10 − 3 = 7 diagonaler."
        },
        {
          "text": "Det finns 10 hörn, men varje diagonal räknas från båda sina ändar, så dela med 2."
        },
        {
          "math": "10 · 7 = 70"
        },
        {
          "math": "70 / 2 = 35"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "70"
          },
          "text": "Du räknade varje diagonal två gånger, en från varje ände. Dela med 2."
        },
        {
          "answers": {
            "a": "45"
          },
          "text": "Du räknade också sidorna. En sida går mellan två hörn som ligger bredvid varandra och är ingen diagonal."
        },
        {
          "answers": {
            "a": "7"
          },
          "text": "Det är antalet diagonaler från ett hörn. Figuren har 10 hörn."
        }
      ]
    },
    {
      "id": "sa2-diagonaler-d8cd60c2",
      "part": "diagonaler",
      "text": "Hur många diagonaler kan man dra i en fyrhörning? En diagonal går mellan två hörn som inte ligger bredvid varandra.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2"
          ]
        }
      },
      "solution": [
        {
          "text": "Från varje hörn går det diagonaler till alla hörn utom hörnet självt och de två grannarna: 4 − 3 = 1 diagonaler."
        },
        {
          "text": "Det finns 4 hörn, men varje diagonal räknas från båda sina ändar, så dela med 2."
        },
        {
          "math": "4 · 1 = 4"
        },
        {
          "math": "4 / 2 = 2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Du räknade varje diagonal två gånger, en från varje ände. Dela med 2."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "Du räknade också sidorna. En sida går mellan två hörn som ligger bredvid varandra och är ingen diagonal."
        },
        {
          "answers": {
            "a": "1"
          },
          "text": "Det är antalet diagonaler från ett hörn. Figuren har 4 hörn."
        }
      ]
    },
    {
      "id": "sa2-diagonaler-ab460ad9",
      "part": "diagonaler",
      "text": "Hur många diagonaler kan man dra i en femhörning? En diagonal går mellan två hörn som inte ligger bredvid varandra.",
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
          "text": "Från varje hörn går det diagonaler till alla hörn utom hörnet självt och de två grannarna: 5 − 3 = 2 diagonaler."
        },
        {
          "text": "Det finns 5 hörn, men varje diagonal räknas från båda sina ändar, så dela med 2."
        },
        {
          "math": "5 · 2 = 10"
        },
        {
          "math": "10 / 2 = 5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "Du räknade varje diagonal två gånger, en från varje ände. Dela med 2."
        },
        {
          "answers": {
            "a": "2"
          },
          "text": "Det är antalet diagonaler från ett hörn. Figuren har 5 hörn."
        }
      ]
    },
    {
      "id": "sa2-diagonaler-052ba773",
      "part": "diagonaler",
      "text": "Hur många diagonaler kan man dra i en åttahörning? En diagonal går mellan två hörn som inte ligger bredvid varandra.",
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
          "text": "Från varje hörn går det diagonaler till alla hörn utom hörnet självt och de två grannarna: 8 − 3 = 5 diagonaler."
        },
        {
          "text": "Det finns 8 hörn, men varje diagonal räknas från båda sina ändar, så dela med 2."
        },
        {
          "math": "8 · 5 = 40"
        },
        {
          "math": "40 / 2 = 20"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40"
          },
          "text": "Du räknade varje diagonal två gånger, en från varje ände. Dela med 2."
        },
        {
          "answers": {
            "a": "28"
          },
          "text": "Du räknade också sidorna. En sida går mellan två hörn som ligger bredvid varandra och är ingen diagonal."
        },
        {
          "answers": {
            "a": "5"
          },
          "text": "Det är antalet diagonaler från ett hörn. Figuren har 8 hörn."
        }
      ]
    },
    {
      "id": "sa2-saker-2c674fc8",
      "part": "saker",
      "text": "I en låda ligger 5 röda och 7 gröna kulor. Du blundar. Hur många kulor måste du ta för att vara säker på att få två kulor med olika färg?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8"
          ]
        }
      },
      "solution": [
        {
          "text": "Har du otur är alla 7 gröna först. Då måste nästa kula vara röd."
        },
        {
          "math": "7 + 1 = 8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Du räknade med de 5 röda, men de 7 gröna kan komma först. Tänk på det sämsta fallet."
        },
        {
          "answers": {
            "a": "3"
          },
          "text": "Det gäller två med samma färg. Här kan många av samma färg komma först."
        }
      ]
    },
    {
      "id": "sa2-saker-59a2fe9a",
      "part": "saker",
      "text": "I ett mörkt rum ligger det 5 vita och 7 grå strumpor. Hur många strumpor måste du ta med dig för att vara säker på att få ett par med samma färg?",
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
          "text": "Har du otur är de två första strumporna olika, en vit och en grå. Den tredje har samma färg som en av dem."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Två strumpor kan vara en vit och en grå. Tänk på det sämsta fallet."
        },
        {
          "answers": {
            "a": "8"
          },
          "text": "Det är för att vara säker på en vit och en grå. För ett par med samma färg räcker färre."
        }
      ]
    },
    {
      "id": "sa2-saker-5ae76f91",
      "part": "saker",
      "text": "I en låda ligger 6 röda, 6 gula och 6 gröna knappar. Du blundar. Hur många knappar måste du ta för att vara säker på att få två med samma färg?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4"
          ]
        }
      },
      "solution": [
        {
          "text": "Har du otur är de tre första olika, en av varje färg. Den fjärde har samma färg som en av dem."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Tre knappar kan vara en av varje färg. Tänk på det sämsta fallet."
        },
        {
          "answers": {
            "a": "7"
          },
          "text": "Det är fler än som behövs: redan när du har en av varje färg gör nästa knapp två lika."
        }
      ]
    },
    {
      "id": "sa2-saker-d98aa9ab",
      "part": "saker",
      "text": "I en påse ligger godisbitar i fyra smaker, 10 av varje. Du tar utan att titta. Hur många bitar måste du ta för att vara säker på att få två med samma smak?",
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
          "text": "Har du otur är de fyra första olika, en av varje smak. Den femte har samma smak som en av dem."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Fyra bitar kan vara en av varje smak. Tänk på det sämsta fallet."
        },
        {
          "answers": {
            "a": "11"
          },
          "text": "Det är fler än som behövs: redan när du har en av varje smak gör nästa bit två lika."
        }
      ]
    },
    {
      "id": "sa2-saker-98d5b411",
      "part": "saker",
      "text": "I en låda ligger 8 röda och 3 blå kulor. Du blundar. Hur många kulor måste du ta för att vara säker på att få en blå?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9"
          ]
        }
      },
      "solution": [
        {
          "text": "Har du otur är alla de 8 röda först. Då måste nästa kula vara blå."
        },
        {
          "math": "8 + 1 = 9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Det räcker om du ville ha en röd: det finns bara 3 blå. Här kan alla 8 röda komma först."
        },
        {
          "answers": {
            "a": "8"
          },
          "text": "Alla 8 kan vara röda. Du behöver en till."
        }
      ]
    },
    {
      "id": "sa2-saker-466c4a33",
      "part": "saker",
      "text": "I en låda ligger kulor i fem färger, många av varje. Du blundar. Hur många kulor måste du ta för att vara säker på att få två med samma färg?",
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
          "text": "Har du otur är de fem första olika, en av varje färg. Den sjätte har samma färg som en av dem."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5"
          },
          "text": "Fem kulor kan vara en av varje färg. Tänk på det sämsta fallet."
        },
        {
          "answers": {
            "a": "2"
          },
          "text": "Två kulor kan ha olika färg. Tänk på det sämsta fallet."
        }
      ]
    }
  ]
};
