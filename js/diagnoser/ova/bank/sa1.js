// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till SA1.
export default {
  "code": "SA1",
  "parts": [
    {
      "id": "tva-val",
      "title": "Två val",
      "labels": [
        "1"
      ]
    },
    {
      "id": "tre-val",
      "title": "Tre val",
      "labels": [
        "2"
      ]
    },
    {
      "id": "utan-ordning",
      "title": "Två olika, utan hänsyn till ordning",
      "labels": [
        "4a"
      ]
    },
    {
      "id": "samma-tillats",
      "title": "När samma får väljas två gånger",
      "labels": [
        "4b"
      ]
    },
    {
      "id": "vilka-farger",
      "title": "Vilka färger kan det bli?",
      "labels": [
        "5"
      ]
    }
  ],
  "unpracticed": [
    "3"
  ],
  "tasks": [
    {
      "id": "sa1-tva-val-d4430613",
      "part": "tva-val",
      "text": "I en garderob finns 3 olika mössor och 4 olika halsdukar. Elin väljer en mössa och en halsduk. På hur många olika sätt kan Elin kombinera dem?",
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
          "text": "För varje mössa finns 4 halsdukar att välja på, och det finns 3 mössor."
        },
        {
          "math": "3 · 4 = 12"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7"
          },
          "text": "Du lade ihop 3 och 4. Varje mössa kan kombineras med 4 halsdukar, så det blir 3 grupper med 4 i varje."
        }
      ]
    },
    {
      "id": "sa1-tva-val-9520cea3",
      "part": "tva-val",
      "text": "I skolmatsalen finns 4 olika huvudrätter och 5 olika efterrätter. Du väljer en av varje. Hur många olika måltider kan du välja mellan?",
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
          "text": "För varje huvudrätt finns 5 efterrätter att välja på, och det finns 4 huvudrätter."
        },
        {
          "math": "4 · 5 = 20"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Du lade ihop 4 och 5. Varje huvudrätt kan kombineras med 5 efterrätter, så det blir 4 grupper med 5 i varje."
        }
      ]
    },
    {
      "id": "sa1-tva-val-68061031",
      "part": "tva-val",
      "text": "På ett café finns 5 olika smörgåsar och 3 olika drycker. Noor väljer en smörgås och en dryck. På hur många olika sätt kan Noor göra det?",
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
          "text": "För varje smörgås finns 3 drycker att välja på, och det finns 5 smörgåsar."
        },
        {
          "math": "5 · 3 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Du lade ihop 5 och 3. Varje smörgås kan kombineras med 3 drycker, så det blir 5 grupper med 3 i varje."
        }
      ]
    },
    {
      "id": "sa1-tva-val-0912b9ef",
      "part": "tva-val",
      "text": "I ett lag har man 5 olika tröjor och 6 olika par shorts att välja mellan. Hur många olika matchkläder kan laget få av en tröja och ett par shorts?",
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
          "text": "För varje tröja finns 6 par shorts att välja på, och det finns 5 tröjor."
        },
        {
          "math": "5 · 6 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Du lade ihop 5 och 6. Varje tröja kan kombineras med 6 par shorts, så det blir 5 grupper med 6 i varje."
        }
      ]
    },
    {
      "id": "sa1-tva-val-3d515bb0",
      "part": "tva-val",
      "text": "Maja har 2 olika jackor och 7 olika par skor. På hur många olika sätt kan Maja kombinera en jacka och ett par skor?",
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
          "text": "För varje jacka finns 7 par skor att välja på, och det finns 2 jackor."
        },
        {
          "math": "2 · 7 = 14"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Du lade ihop 2 och 7. Varje jacka kan kombineras med 7 par skor, så det blir 2 grupper med 7 i varje."
        }
      ]
    },
    {
      "id": "sa1-tva-val-42dec235",
      "part": "tva-val",
      "text": "I en butik finns 3 olika cyklar och 6 olika hjälmar. Ali köper en cykel och en hjälm. På hur många olika sätt kan Ali kombinera dem?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "18"
          ]
        }
      },
      "solution": [
        {
          "text": "För varje cykel finns 6 hjälmar att välja på, och det finns 3 cyklar."
        },
        {
          "math": "3 · 6 = 18"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Du lade ihop 3 och 6. Varje cykel kan kombineras med 6 hjälmar, så det blir 3 grupper med 6 i varje."
        }
      ]
    },
    {
      "id": "sa1-tre-val-2e3ba4bb",
      "part": "tre-val",
      "text": "Du kastar ett mynt (2 utfall), kastar en tärning (6 utfall) och snurrar ett hjul med 3 fält. Hur många olika resultat kan du få? Rita gärna ett träddiagram.",
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
          "text": "Träddiagrammet börjar med 2 grenar. Från varje gren går 6 nya, och från var och en av dem går 3 nya."
        },
        {
          "math": "2 · 6 · 3 = 36"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "11"
          },
          "text": "Du lade ihop antalen. Varje val delar varje gren i trädet, så antalen ska multipliceras."
        },
        {
          "answers": {
            "a": "12"
          },
          "text": "Du räknade bara de två första valen. Varje sådan kombination kan fortsätta på 3 sätt."
        }
      ]
    },
    {
      "id": "sa1-tre-val-8069570d",
      "part": "tre-val",
      "text": "På ett café väljer du ett av 3 olika bröd, ett av 3 olika pålägg och en av 2 olika drycker. Hur många olika kombinationer finns det? Rita gärna ett träddiagram.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "18"
          ]
        }
      },
      "solution": [
        {
          "text": "Träddiagrammet börjar med 3 grenar. Från varje gren går 3 nya, och från var och en av dem går 2 nya."
        },
        {
          "math": "3 · 3 · 2 = 18"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Du lade ihop antalen. Varje val delar varje gren i trädet, så antalen ska multipliceras."
        },
        {
          "answers": {
            "a": "9"
          },
          "text": "Du räknade bara de två första valen. Varje sådan kombination kan fortsätta på 2 sätt."
        }
      ]
    },
    {
      "id": "sa1-tre-val-ed9d6ba7",
      "part": "tre-val",
      "text": "Från A till B finns 3 vägar, från B till C finns 2 vägar och från C till D finns 5 vägar. Hur många olika vägar finns det från A till D över B och C? Rita gärna ett träddiagram.",
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
          "text": "Träddiagrammet börjar med 3 grenar. Från varje gren går 2 nya, och från var och en av dem går 5 nya."
        },
        {
          "math": "3 · 2 · 5 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "Du lade ihop antalen. Varje val delar varje gren i trädet, så antalen ska multipliceras."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "Du räknade bara de två första valen. Varje sådan kombination kan fortsätta på 5 sätt."
        }
      ]
    },
    {
      "id": "sa1-tre-val-a7cf46b4",
      "part": "tre-val",
      "text": "På en restaurang finns 2 förrätter, 5 huvudrätter och 3 efterrätter. Hur många olika middagar med en rätt av varje slag kan du välja mellan? Rita gärna ett träddiagram.",
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
          "text": "Träddiagrammet börjar med 2 grenar. Från varje gren går 5 nya, och från var och en av dem går 3 nya."
        },
        {
          "math": "2 · 5 · 3 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "Du lade ihop antalen. Varje val delar varje gren i trädet, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa1-tre-val-89f8560d",
      "part": "tre-val",
      "text": "Lea har 4 olika kepsar, 2 olika jackor och 2 olika par vantar. På hur många olika sätt kan Lea kombinera en keps, en jacka och ett par vantar? Rita gärna ett träddiagram.",
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
          "text": "Träddiagrammet börjar med 4 grenar. Från varje gren går 2 nya, och från var och en av dem går 2 nya."
        },
        {
          "math": "4 · 2 · 2 = 16"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Du lade ihop antalen. Varje val delar varje gren i trädet, så antalen ska multipliceras."
        }
      ]
    },
    {
      "id": "sa1-tre-val-1ba9c7fd",
      "part": "tre-val",
      "text": "Oskar har 3 olika tröjor, 2 olika par byxor och 4 olika par skor. På hur många olika sätt kan Oskar kombinera en tröja, ett par byxor och ett par skor? Rita gärna ett träddiagram.",
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
          "text": "Träddiagrammet börjar med 3 grenar. Från varje gren går 2 nya, och från var och en av dem går 4 nya."
        },
        {
          "math": "3 · 2 · 4 = 24"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Du lade ihop antalen. Varje val delar varje gren i trädet, så antalen ska multipliceras."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "Du räknade bara de två första valen. Varje sådan kombination kan fortsätta på 4 sätt."
        }
      ]
    },
    {
      "id": "sa1-utan-ordning-5ee84b07",
      "part": "utan-ordning",
      "text": "En pizzeria har sex olika pålägg. Du väljer två olika pålägg till din pizza, och ordningen spelar ingen roll. Hur många olika pizzor kan du välja mellan?",
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
          "text": "Det första kan väljas på 6 sätt och det andra på 5 sätt: 30 sätt med ordningen medräknad."
        },
        {
          "text": "Varje val räknas då två gånger (A och B, B och A), så dela med 2."
        },
        {
          "math": "6 · 5 = 30"
        },
        {
          "math": "30 / 2 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30"
          },
          "text": "Du räknade varje val två gånger. A och B är samma val som B och A, så dela med 2."
        },
        {
          "answers": {
            "a": "36"
          },
          "text": "Då får samma sak väljas två gånger, och varje val räknas två gånger."
        }
      ]
    },
    {
      "id": "sa1-utan-ordning-5fd89b25",
      "part": "utan-ordning",
      "text": "Mina ska låna två av tre olika böcker. Ordningen spelar ingen roll. På hur många olika sätt kan Mina välja?",
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
          "text": "Det första kan väljas på 3 sätt och det andra på 2 sätt: 6 sätt med ordningen medräknad."
        },
        {
          "text": "Varje val räknas då två gånger (A och B, B och A), så dela med 2."
        },
        {
          "math": "3 · 2 = 6"
        },
        {
          "math": "6 / 2 = 3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Du räknade varje val två gånger. A och B är samma val som B och A, så dela med 2."
        },
        {
          "answers": {
            "a": "9"
          },
          "text": "Då får samma sak väljas två gånger, och varje val räknas två gånger."
        }
      ]
    },
    {
      "id": "sa1-utan-ordning-2e140634",
      "part": "utan-ordning",
      "text": "I en glasskiosk finns det fem smaker: päron, vanilj, blåbär, jordgubbe och choklad. Hur många olika glasstrutar kan du skapa om du väljer två kulor med olika smaker? Ordningen spelar ingen roll: ”vanilj – päron” är samma glass som ”päron – vanilj”.",
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
          "text": "Det första kan väljas på 5 sätt och det andra på 4 sätt: 20 sätt med ordningen medräknad."
        },
        {
          "text": "Varje val räknas då två gånger (A och B, B och A), så dela med 2."
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
          "text": "Du räknade varje val två gånger. A och B är samma val som B och A, så dela med 2."
        },
        {
          "answers": {
            "a": "25"
          },
          "text": "Då får samma sak väljas två gånger, och varje val räknas två gånger."
        }
      ]
    },
    {
      "id": "sa1-utan-ordning-efc43bf0",
      "part": "utan-ordning",
      "text": "Läraren väljer två av tio elever som ska hämta böcker. Ordningen spelar ingen roll. Hur många olika par kan läraren välja?",
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
          "text": "Det första kan väljas på 10 sätt och det andra på 9 sätt: 90 sätt med ordningen medräknad."
        },
        {
          "text": "Varje val räknas då två gånger (A och B, B och A), så dela med 2."
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
          "text": "Du räknade varje val två gånger. A och B är samma val som B och A, så dela med 2."
        },
        {
          "answers": {
            "a": "100"
          },
          "text": "Då får samma sak väljas två gånger, och varje val räknas två gånger."
        }
      ]
    },
    {
      "id": "sa1-utan-ordning-b29c8ad0",
      "part": "utan-ordning",
      "text": "Till en smoothie väljer du två olika frukter av åtta. Ordningen spelar ingen roll. Hur många olika smoothies kan du göra?",
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
          "text": "Det första kan väljas på 8 sätt och det andra på 7 sätt: 56 sätt med ordningen medräknad."
        },
        {
          "text": "Varje val räknas då två gånger (A och B, B och A), så dela med 2."
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
          "text": "Du räknade varje val två gånger. A och B är samma val som B och A, så dela med 2."
        },
        {
          "answers": {
            "a": "64"
          },
          "text": "Då får samma sak väljas två gånger, och varje val räknas två gånger."
        }
      ]
    },
    {
      "id": "sa1-utan-ordning-5cbdd70f",
      "part": "utan-ordning",
      "text": "Alva ska bjuda med två av sina sju kompisar på bio. Ordningen spelar ingen roll. På hur många olika sätt kan Alva välja?",
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
          "text": "Det första kan väljas på 7 sätt och det andra på 6 sätt: 42 sätt med ordningen medräknad."
        },
        {
          "text": "Varje val räknas då två gånger (A och B, B och A), så dela med 2."
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
          "text": "Du räknade varje val två gånger. A och B är samma val som B och A, så dela med 2."
        },
        {
          "answers": {
            "a": "49"
          },
          "text": "Då får samma sak väljas två gånger, och varje val räknas två gånger."
        }
      ]
    },
    {
      "id": "sa1-samma-tillats-aa5d870d",
      "part": "samma-tillats",
      "text": "En godisbutik har fem sorter. Du väljer två bitar, ordningen spelar ingen roll och båda får vara av samma sort. Hur många olika val finns det?",
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
          "text": "Två olika: 10 val. Två av samma sort: 5 val, ett för varje sort."
        },
        {
          "math": "10 + 5 = 15"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "Det är bara valen med två olika. Lägg till två av samma sort."
        },
        {
          "answers": {
            "a": "25"
          },
          "text": "Då räknas ordningen, men A och B är samma val som B och A."
        }
      ]
    },
    {
      "id": "sa1-samma-tillats-c52e7403",
      "part": "samma-tillats",
      "text": "I en glasskiosk finns det sex smaker. Med två kulor av olika smaker kan du göra 15 olika glassar. Hur många fler glassar kan du göra om du även får välja två kulor med samma smak?",
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
          "text": "Det nya är två kulor med samma smak: ett nytt val för var och en av de 6 sorterna. De olika valen är redan räknade."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "21"
          },
          "text": "Det är alla val tillsammans. Frågan gäller hur många fler de blir: 15 + 6 = 21, alltså 6 fler."
        }
      ]
    },
    {
      "id": "sa1-samma-tillats-35832851",
      "part": "samma-tillats",
      "text": "I en glasskiosk finns det sju smaker. Du väljer två kulor, ordningen spelar ingen roll och båda får ha samma smak. Hur många olika glassar kan du göra?",
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
          "text": "Två olika: 21 val. Två med samma smak: 7 val, ett för varje sort."
        },
        {
          "math": "21 + 7 = 28"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "21"
          },
          "text": "Det är bara valen med två olika. Lägg till två med samma smak."
        },
        {
          "answers": {
            "a": "49"
          },
          "text": "Då räknas ordningen, men A och B är samma val som B och A."
        }
      ]
    },
    {
      "id": "sa1-samma-tillats-4c1cf2e1",
      "part": "samma-tillats",
      "text": "Du kastar två likadana tärningar. Ordningen spelar ingen roll: 2 och 5 är samma resultat som 5 och 2. Hur många olika resultat kan du få?",
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
          "text": "Två olika: 15 val. Två lika: 6 val, ett för varje sort."
        },
        {
          "math": "15 + 6 = 21"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Det är bara valen med två olika. Lägg till två lika."
        },
        {
          "answers": {
            "a": "36"
          },
          "text": "Då räknas ordningen, men A och B är samma val som B och A."
        }
      ]
    },
    {
      "id": "sa1-samma-tillats-b8dade8f",
      "part": "samma-tillats",
      "text": "En pizzeria har fem pålägg. Med två olika pålägg kan du göra 10 olika pizzor. Hur många fler pizzor kan du göra om du även får ta dubbel portion av ett enda pålägg?",
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
          "text": "Det nya är dubbel portion av ett pålägg: ett nytt val för var och en av de 5 sorterna. De olika valen är redan räknade."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "15"
          },
          "text": "Det är alla val tillsammans. Frågan gäller hur många fler de blir: 10 + 5 = 15, alltså 5 fler."
        }
      ]
    },
    {
      "id": "sa1-samma-tillats-4212189f",
      "part": "samma-tillats",
      "text": "I en glasskiosk finns det tre smaker. Med två kulor av olika smaker kan du göra 3 olika glassar. Hur många fler glassar kan du göra om du även får välja två kulor med samma smak?",
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
          "text": "Det nya är två kulor med samma smak: ett nytt val för var och en av de 3 sorterna. De olika valen är redan räknade."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Det är alla val tillsammans. Frågan gäller hur många fler de blir: 3 + 3 = 6, alltså 3 fler."
        }
      ]
    },
    {
      "id": "sa1-vilka-farger-c1401675",
      "part": "vilka-farger",
      "kind": "pick",
      "text": "I en låda ligger tre kulor, två är röda och en är blå. Leo blundar och tar alla tre kulorna. Markera alla färgkombinationer som kan bli.",
      "items": [
        {
          "id": "a",
          "markup": "Tre röda"
        },
        {
          "id": "b",
          "markup": "Två röda och en blå"
        },
        {
          "id": "c",
          "markup": "En röd och två blå"
        },
        {
          "id": "d",
          "markup": "Tre blå"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Det kan inte bli tre röda, en röd och två blå eller tre blå: så många kulor av den färgen finns inte."
        },
        {
          "text": "Det kan bli två röda och en blå."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1",
            "d": "1"
          },
          "text": "Alla kombinationer kan inte bli. Räkna hur många kulor det finns av varje färg."
        }
      ]
    },
    {
      "id": "sa1-vilka-farger-610a9693",
      "part": "vilka-farger",
      "kind": "pick",
      "text": "I en burk ligger fyra knappar: två svarta, en röd och en vit. Ali blundar och tar två knappar. Markera alla färgkombinationer som kan bli.",
      "items": [
        {
          "id": "a",
          "markup": "Två svarta"
        },
        {
          "id": "b",
          "markup": "En svart och en röd"
        },
        {
          "id": "c",
          "markup": "En svart och en vit"
        },
        {
          "id": "d",
          "markup": "Två röda"
        },
        {
          "id": "e",
          "markup": "En röd och en vit"
        },
        {
          "id": "f",
          "markup": "Två vita"
        }
      ],
      "accept": [
        "a",
        "b",
        "c",
        "e"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Det kan inte bli två röda eller två vita: så många knappar av den färgen finns inte."
        },
        {
          "text": "Det kan bli två svarta, en svart och en röd, en svart och en vit eller en röd och en vit."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1",
            "d": "1",
            "e": "1",
            "f": "1"
          },
          "text": "Alla kombinationer kan inte bli. Räkna hur många knappar det finns av varje färg."
        }
      ]
    },
    {
      "id": "sa1-vilka-farger-4aeb8ae5",
      "part": "vilka-farger",
      "kind": "pick",
      "text": "I en påse ligger fem pärlor: en gul, en grön och tre vita. Sara blundar och tar två pärlor. Markera alla färgkombinationer som kan bli.",
      "items": [
        {
          "id": "a",
          "markup": "Två gula"
        },
        {
          "id": "b",
          "markup": "En gul och en grön"
        },
        {
          "id": "c",
          "markup": "En gul och en vit"
        },
        {
          "id": "d",
          "markup": "Två gröna"
        },
        {
          "id": "e",
          "markup": "En grön och en vit"
        },
        {
          "id": "f",
          "markup": "Två vita"
        }
      ],
      "accept": [
        "b",
        "c",
        "e",
        "f"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Det kan inte bli två gula eller två gröna: så många pärlor av den färgen finns inte."
        },
        {
          "text": "Det kan bli en gul och en grön, en gul och en vit, en grön och en vit eller två vita."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1",
            "d": "1",
            "e": "1",
            "f": "1"
          },
          "text": "Alla kombinationer kan inte bli. Räkna hur många pärlor det finns av varje färg."
        }
      ]
    },
    {
      "id": "sa1-vilka-farger-235874d0",
      "part": "vilka-farger",
      "kind": "pick",
      "text": "I en låda ligger fem kulor, en är röd och fyra är blå. Noah blundar och tar två kulor. Markera alla färgkombinationer som kan bli.",
      "items": [
        {
          "id": "a",
          "markup": "Två röda"
        },
        {
          "id": "b",
          "markup": "En röd och en blå"
        },
        {
          "id": "c",
          "markup": "Två blå"
        }
      ],
      "accept": [
        "b",
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Det kan inte bli två röda: så många kulor av den färgen finns inte."
        },
        {
          "text": "Det kan bli en röd och en blå eller två blå."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1"
          },
          "text": "Alla kombinationer kan inte bli. Räkna hur många kulor det finns av varje färg."
        }
      ]
    },
    {
      "id": "sa1-vilka-farger-4c40767e",
      "part": "vilka-farger",
      "kind": "pick",
      "text": "I en låda ligger sex kulor, tre är röda och tre är blå. Alva blundar och tar två kulor. Markera alla färgkombinationer som kan bli.",
      "items": [
        {
          "id": "a",
          "markup": "Två röda"
        },
        {
          "id": "b",
          "markup": "En röd och en blå"
        },
        {
          "id": "c",
          "markup": "Två blå"
        }
      ],
      "accept": [
        "a",
        "b",
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Det finns tillräckligt många kulor av varje färg, så alla kombinationer kan bli."
        },
        {
          "text": "Det kan bli två röda, en röd och en blå eller två blå."
        }
      ],
      "mistakes": []
    },
    {
      "id": "sa1-vilka-farger-8fec5308",
      "part": "vilka-farger",
      "kind": "pick",
      "text": "I en låda ligger sex kulor, fyra är gröna och två är gula. Maja blundar och tar tre kulor. Markera alla färgkombinationer som kan bli.",
      "items": [
        {
          "id": "a",
          "markup": "Tre gröna"
        },
        {
          "id": "b",
          "markup": "Två gröna och en gul"
        },
        {
          "id": "c",
          "markup": "En grön och två gula"
        },
        {
          "id": "d",
          "markup": "Tre gula"
        }
      ],
      "accept": [
        "a",
        "b",
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Det kan inte bli tre gula: så många kulor av den färgen finns inte."
        },
        {
          "text": "Det kan bli tre gröna, två gröna och en gul eller en grön och två gula."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1",
            "d": "1"
          },
          "text": "Alla kombinationer kan inte bli. Räkna hur många kulor det finns av varje färg."
        }
      ]
    }
  ]
};
