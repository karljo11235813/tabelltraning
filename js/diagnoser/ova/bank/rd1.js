// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till RD1.
export default {
  "code": "RD1",
  "parts": [
    {
      "id": "namnare-10-100",
      "title": "Bråk med nämnaren 10 eller 100",
      "labels": [
        "1a",
        "1b",
        "1c",
        "1d"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber om ett decimaltal."
    },
    {
      "id": "brak-till-decimal",
      "title": "Bråk som decimaltal",
      "labels": [
        "2a",
        "2b",
        "2c",
        "2d"
      ],
      "formNote": "Det är rätt värde, men uppgiften ber om ett decimaltal."
    },
    {
      "id": "mellan",
      "title": "Ett tal mellan två tal",
      "labels": [
        "3a",
        "3b",
        "3c"
      ]
    },
    {
      "id": "storst",
      "title": "Vilket tal är störst?",
      "labels": [
        "4a",
        "4b",
        "4c"
      ]
    },
    {
      "id": "tallinje",
      "title": "Decimaltal på tallinjen",
      "labels": [
        "5"
      ]
    },
    {
      "id": "med-heltal",
      "title": "Heltal och decimaltal",
      "labels": [
        "6a",
        "6b",
        "6c"
      ]
    },
    {
      "id": "dela",
      "title": "Dela ett decimaltal",
      "labels": [
        "7a",
        "7b",
        "7c",
        "7d"
      ]
    }
  ],
  "tasks": [
    {
      "id": "rd1-namnare-10-100-87251485",
      "part": "namnare-10-100",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{7|10} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,7",
            "0,70"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "7/10 är 7 tiondelar."
        },
        {
          "text": "Tiondelarna står på första platsen efter kommat."
        },
        {
          "math": "{7|10} = 0,7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,07"
          },
          "text": "Det är 7 hundradelar. Här är det 7 tiondelar."
        },
        {
          "answers": {
            "a": "7,10"
          },
          "text": "Bråkstrecket är inget komma: täljaren och nämnaren är inte heltalet och decimalerna."
        }
      ]
    },
    {
      "id": "rd1-namnare-10-100-599397a3",
      "part": "namnare-10-100",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{9|10} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,9",
            "0,90"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "9/10 är 9 tiondelar."
        },
        {
          "text": "Tiondelarna står på första platsen efter kommat."
        },
        {
          "math": "{9|10} = 0,9"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,09"
          },
          "text": "Det är 9 hundradelar. Här är det 9 tiondelar."
        },
        {
          "answers": {
            "a": "9,10"
          },
          "text": "Bråkstrecket är inget komma: täljaren och nämnaren är inte heltalet och decimalerna."
        }
      ]
    },
    {
      "id": "rd1-namnare-10-100-5a6a5698",
      "part": "namnare-10-100",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{13|10} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,3",
            "1,30"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "13/10 är 13 tiondelar."
        },
        {
          "text": "10 tiondelar är 1 hel, så det är 1 hel och 3 tiondelar."
        },
        {
          "math": "{13|10} = 1,3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,13"
          },
          "text": "Det är 13 hundradelar. Här är det 13 tiondelar."
        },
        {
          "answers": {
            "a": "13,10"
          },
          "text": "Bråkstrecket är inget komma: täljaren och nämnaren är inte heltalet och decimalerna."
        }
      ]
    },
    {
      "id": "rd1-namnare-10-100-8b70afe7",
      "part": "namnare-10-100",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{41|100} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,41",
            "0,410"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "41/100 är 41 hundradelar."
        },
        {
          "text": "Hundradelarna står på andra platsen efter kommat, och tiondelarna på den första."
        },
        {
          "math": "{41|100} = 0,41"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,1"
          },
          "text": "Det är 41 tiondelar. Här är det 41 hundradelar."
        },
        {
          "answers": {
            "a": "41,100"
          },
          "text": "Bråkstrecket är inget komma: täljaren och nämnaren är inte heltalet och decimalerna."
        }
      ]
    },
    {
      "id": "rd1-namnare-10-100-97c69797",
      "part": "namnare-10-100",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{23|100} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,23",
            "0,230"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "23/100 är 23 hundradelar."
        },
        {
          "text": "Hundradelarna står på andra platsen efter kommat, och tiondelarna på den första."
        },
        {
          "math": "{23|100} = 0,23"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,3"
          },
          "text": "Det är 23 tiondelar. Här är det 23 hundradelar."
        },
        {
          "answers": {
            "a": "23,100"
          },
          "text": "Bråkstrecket är inget komma: täljaren och nämnaren är inte heltalet och decimalerna."
        }
      ]
    },
    {
      "id": "rd1-namnare-10-100-39381f75",
      "part": "namnare-10-100",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{7|100} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,07",
            "0,070"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "7/100 är 7 hundradelar."
        },
        {
          "text": "Hundradelarna står på andra platsen efter kommat, och tiondelarna på den första."
        },
        {
          "math": "{7|100} = 0,07"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,7"
          },
          "text": "Det är 7 tiondelar. Här är det 7 hundradelar."
        },
        {
          "answers": {
            "a": "7,100"
          },
          "text": "Bråkstrecket är inget komma: täljaren och nämnaren är inte heltalet och decimalerna."
        }
      ]
    },
    {
      "id": "rd1-brak-till-decimal-7c078ac4",
      "part": "brak-till-decimal",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{3|4} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,75",
            "0,750"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Förläng bråket så att nämnaren blir 100, så går det att läsa av hundradelar."
        },
        {
          "math": "{3|4} = {75|100} = 0,75"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,4"
          },
          "text": "Bråkstrecket är inget komma. Förläng så att nämnaren blir 10 eller 100."
        },
        {
          "answers": {
            "a": "0,34"
          },
          "text": "Täljaren och nämnaren är inte decimalerna. Förläng så att nämnaren blir 10 eller 100."
        }
      ]
    },
    {
      "id": "rd1-brak-till-decimal-35c9635e",
      "part": "brak-till-decimal",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{4|5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,8",
            "0,80"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Förläng bråket så att nämnaren blir 10, så går det att läsa av tiondelar."
        },
        {
          "math": "{4|5} = {8|10} = 0,8"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4,5"
          },
          "text": "Bråkstrecket är inget komma. Förläng så att nämnaren blir 10 eller 100."
        },
        {
          "answers": {
            "a": "0,45"
          },
          "text": "Täljaren och nämnaren är inte decimalerna. Förläng så att nämnaren blir 10 eller 100."
        }
      ]
    },
    {
      "id": "rd1-brak-till-decimal-d57588f6",
      "part": "brak-till-decimal",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{1|20} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,05",
            "0,050"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Förläng bråket så att nämnaren blir 100, så går det att läsa av hundradelar."
        },
        {
          "math": "{1|20} = {5|100} = 0,05"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,20"
          },
          "text": "Bråkstrecket är inget komma. Förläng så att nämnaren blir 10 eller 100."
        },
        {
          "answers": {
            "a": "0,120"
          },
          "text": "Täljaren och nämnaren är inte decimalerna. Förläng så att nämnaren blir 10 eller 100."
        }
      ]
    },
    {
      "id": "rd1-brak-till-decimal-aed6c9dc",
      "part": "brak-till-decimal",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{2|5} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,4",
            "0,40"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Förläng bråket så att nämnaren blir 10, så går det att läsa av tiondelar."
        },
        {
          "math": "{2|5} = {4|10} = 0,4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,5"
          },
          "text": "Bråkstrecket är inget komma. Förläng så att nämnaren blir 10 eller 100."
        },
        {
          "answers": {
            "a": "0,25"
          },
          "text": "Täljaren och nämnaren är inte decimalerna. Förläng så att nämnaren blir 10 eller 100."
        }
      ]
    },
    {
      "id": "rd1-brak-till-decimal-35b38113",
      "part": "brak-till-decimal",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{1|25} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,04",
            "0,040"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Förläng bråket så att nämnaren blir 100, så går det att läsa av hundradelar."
        },
        {
          "math": "{1|25} = {4|100} = 0,04"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,25"
          },
          "text": "Bråkstrecket är inget komma. Förläng så att nämnaren blir 10 eller 100."
        },
        {
          "answers": {
            "a": "0,125"
          },
          "text": "Täljaren och nämnaren är inte decimalerna. Förläng så att nämnaren blir 10 eller 100."
        }
      ]
    },
    {
      "id": "rd1-brak-till-decimal-8f4e372e",
      "part": "brak-till-decimal",
      "text": "Skriv som ett decimaltal.",
      "points": "each",
      "rows": [
        "{3|2} = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,5",
            "1,50"
          ],
          "form": "exact"
        }
      },
      "solution": [
        {
          "text": "Förläng bråket så att nämnaren blir 10, så går det att läsa av tiondelar."
        },
        {
          "math": "{3|2} = {15|10} = 1,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,2"
          },
          "text": "Bråkstrecket är inget komma. Förläng så att nämnaren blir 10 eller 100."
        },
        {
          "answers": {
            "a": "0,32"
          },
          "text": "Täljaren och nämnaren är inte decimalerna. Förläng så att nämnaren blir 10 eller 100."
        }
      ]
    },
    {
      "id": "rd1-mellan-db88816e",
      "part": "mellan",
      "text": "Skriv ett tal som ligger mellan följande tal.",
      "points": "each",
      "rows": [
        "1,9 < [a] < 2"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,95"
          ],
          "range": {
            "gt": "1,9",
            "lt": "2"
          }
        }
      },
      "solution": [
        {
          "text": "Skriv talen med lika många decimaler: 1,9 är 190 hundradelar och 2 är 200 hundradelar."
        },
        {
          "text": "1,95 ligger mellan dem, och det finns fler tal som gör det: det finns alltid tal mellan två tal."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,9"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        },
        {
          "answers": {
            "a": "2"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        }
      ]
    },
    {
      "id": "rd1-mellan-9df4a4a1",
      "part": "mellan",
      "text": "Skriv ett tal som ligger mellan följande tal.",
      "points": "each",
      "rows": [
        "0,61 < [a] < 0,62"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,615"
          ],
          "range": {
            "gt": "0,61",
            "lt": "0,62"
          }
        }
      },
      "solution": [
        {
          "text": "Skriv talen med lika många decimaler: 0,61 är 610 tusendelar och 0,62 är 620 tusendelar."
        },
        {
          "text": "0,615 ligger mellan dem, och det finns fler tal som gör det: det finns alltid tal mellan två tal."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,61"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        },
        {
          "answers": {
            "a": "0,62"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        }
      ]
    },
    {
      "id": "rd1-mellan-b2d01bb1",
      "part": "mellan",
      "text": "Skriv ett tal som ligger mellan följande tal.",
      "points": "each",
      "rows": [
        "0,7 < [a] < 0,8"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,75"
          ],
          "range": {
            "gt": "0,7",
            "lt": "0,8"
          }
        }
      },
      "solution": [
        {
          "text": "Skriv talen med lika många decimaler: 0,7 är 70 hundradelar och 0,8 är 80 hundradelar."
        },
        {
          "text": "0,75 ligger mellan dem, och det finns fler tal som gör det: det finns alltid tal mellan två tal."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,7"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        },
        {
          "answers": {
            "a": "0,8"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        }
      ]
    },
    {
      "id": "rd1-mellan-6dec8e0b",
      "part": "mellan",
      "text": "Skriv ett tal som ligger mellan följande tal.",
      "points": "each",
      "rows": [
        "0,41 < [a] < 0,44"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,42"
          ],
          "range": {
            "gt": "0,41",
            "lt": "0,44"
          }
        }
      },
      "solution": [
        {
          "text": "Skriv talen med lika många decimaler: 0,41 är 41 hundradelar och 0,44 är 44 hundradelar."
        },
        {
          "text": "0,42 ligger mellan dem, och det finns fler tal som gör det: det finns alltid tal mellan två tal."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,41"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        },
        {
          "answers": {
            "a": "0,44"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        }
      ]
    },
    {
      "id": "rd1-mellan-bafaf50e",
      "part": "mellan",
      "text": "Skriv ett tal som ligger mellan följande tal.",
      "points": "each",
      "rows": [
        "0,3 < [a] < 0,5"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,4"
          ],
          "range": {
            "gt": "0,3",
            "lt": "0,5"
          }
        }
      },
      "solution": [
        {
          "text": "Skriv talen med lika många decimaler: 0,3 är 3 tiondelar och 0,5 är 5 tiondelar."
        },
        {
          "text": "0,4 ligger mellan dem, och det finns fler tal som gör det: det finns alltid tal mellan två tal."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,3"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        },
        {
          "answers": {
            "a": "0,5"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        }
      ]
    },
    {
      "id": "rd1-mellan-d548afc3",
      "part": "mellan",
      "text": "Skriv ett tal som ligger mellan följande tal.",
      "points": "each",
      "rows": [
        "0,2 < [a] < 0,3"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,25"
          ],
          "range": {
            "gt": "0,2",
            "lt": "0,3"
          }
        }
      },
      "solution": [
        {
          "text": "Skriv talen med lika många decimaler: 0,2 är 20 hundradelar och 0,3 är 30 hundradelar."
        },
        {
          "text": "0,25 ligger mellan dem, och det finns fler tal som gör det: det finns alltid tal mellan två tal."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,2"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        },
        {
          "answers": {
            "a": "0,3"
          },
          "text": "Talet ska ligga mellan talen, inte vara ett av dem."
        }
      ]
    },
    {
      "id": "rd1-storst-5b95cad7",
      "part": "storst",
      "kind": "pick",
      "text": "Vilket tal är störst? Välj det talet.",
      "items": [
        {
          "id": "a",
          "markup": "0,09"
        },
        {
          "id": "b",
          "markup": "0,1"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Skriv båda med lika många decimaler: 0,09 är 9 hundradelar och 0,1 är 10 hundradelar."
        },
        {
          "text": "10 är större än 9, så 0,1 är störst."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": ""
          },
          "text": "Fler siffror betyder inte ett större tal: 0,09 är 9 hundradelar och 0,1 är 10 hundradelar."
        }
      ]
    },
    {
      "id": "rd1-storst-f16c1ca9",
      "part": "storst",
      "kind": "pick",
      "text": "Vilket tal är störst? Välj det talet.",
      "items": [
        {
          "id": "a",
          "markup": "1,05"
        },
        {
          "id": "b",
          "markup": "1,5"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Skriv båda med lika många decimaler: 1,05 är 105 hundradelar och 1,5 är 150 hundradelar."
        },
        {
          "text": "150 är större än 105, så 1,5 är störst."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": ""
          },
          "text": "Fler siffror betyder inte ett större tal: 1,05 är 105 hundradelar och 1,5 är 150 hundradelar."
        }
      ]
    },
    {
      "id": "rd1-storst-dcf6b643",
      "part": "storst",
      "kind": "pick",
      "text": "Vilket tal är störst? Välj det talet.",
      "items": [
        {
          "id": "a",
          "markup": "0,7"
        },
        {
          "id": "b",
          "markup": "0,65"
        }
      ],
      "accept": [
        "a"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Skriv båda med lika många decimaler: 0,7 är 70 hundradelar och 0,65 är 65 hundradelar."
        },
        {
          "text": "70 är större än 65, så 0,7 är störst."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1"
          },
          "text": "Fler siffror betyder inte ett större tal: 0,65 är 65 hundradelar och 0,7 är 70 hundradelar."
        }
      ]
    },
    {
      "id": "rd1-storst-1f66e223",
      "part": "storst",
      "kind": "pick",
      "text": "Vilket tal är störst? Välj det talet.",
      "items": [
        {
          "id": "a",
          "markup": "2,09"
        },
        {
          "id": "b",
          "markup": "2,1"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Skriv båda med lika många decimaler: 2,09 är 209 hundradelar och 2,1 är 210 hundradelar."
        },
        {
          "text": "210 är större än 209, så 2,1 är störst."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": ""
          },
          "text": "Fler siffror betyder inte ett större tal: 2,09 är 209 hundradelar och 2,1 är 210 hundradelar."
        }
      ]
    },
    {
      "id": "rd1-storst-fbd6e9cd",
      "part": "storst",
      "kind": "pick",
      "text": "Vilket tal är störst? Välj det talet.",
      "items": [
        {
          "id": "a",
          "markup": "0,2"
        },
        {
          "id": "b",
          "markup": "0,15"
        }
      ],
      "accept": [
        "a"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Skriv båda med lika många decimaler: 0,2 är 20 hundradelar och 0,15 är 15 hundradelar."
        },
        {
          "text": "20 är större än 15, så 0,2 är störst."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1"
          },
          "text": "Fler siffror betyder inte ett större tal: 0,15 är 15 hundradelar och 0,2 är 20 hundradelar."
        }
      ]
    },
    {
      "id": "rd1-storst-231bffbf",
      "part": "storst",
      "kind": "pick",
      "text": "Vilket tal är störst? Välj det talet.",
      "items": [
        {
          "id": "a",
          "markup": "0,35"
        },
        {
          "id": "b",
          "markup": "0,4"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Skriv båda med lika många decimaler: 0,35 är 35 hundradelar och 0,4 är 40 hundradelar."
        },
        {
          "text": "40 är större än 35, så 0,4 är störst."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": ""
          },
          "text": "Fler siffror betyder inte ett större tal: 0,35 är 35 hundradelar och 0,4 är 40 hundradelar."
        }
      ]
    },
    {
      "id": "rd1-tallinje-dde5717a",
      "part": "tallinje",
      "kind": "place",
      "text": "Sätt ett a vid talet 0,1 på tallinjen och ett b vid talet 0,95 på tallinjen.",
      "line": {
        "min": 0,
        "max": 1,
        "step": "0,1",
        "snap": "0,05",
        "labels": [
          0,
          "0,5",
          1
        ]
      },
      "letters": {
        "a": "0,1",
        "b": "0,95"
      },
      "solution": [
        {
          "text": "Mellan 0 och 1 finns tio lika långa delar, så varje streck är en tiondel."
        },
        {
          "text": "0,1 är 1 tiondel, så a står på streck nummer 1 efter 0."
        },
        {
          "text": "0,95 ligger mitt emellan 0,9 och 1."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rd1-tallinje-1cd9ae30",
      "part": "tallinje",
      "kind": "place",
      "text": "Sätt ett a vid talet 0,9 på tallinjen och ett b vid talet 0,35 på tallinjen.",
      "line": {
        "min": 0,
        "max": 1,
        "step": "0,1",
        "snap": "0,05",
        "labels": [
          0,
          "0,5",
          1
        ]
      },
      "letters": {
        "a": "0,9",
        "b": "0,35"
      },
      "solution": [
        {
          "text": "Mellan 0 och 1 finns tio lika långa delar, så varje streck är en tiondel."
        },
        {
          "text": "0,9 är 9 tiondelar, så a står på streck nummer 9 efter 0."
        },
        {
          "text": "0,35 ligger mitt emellan 0,3 och 0,4."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rd1-tallinje-9d460e8d",
      "part": "tallinje",
      "kind": "place",
      "text": "Sätt ett a vid talet 0,2 på tallinjen och ett b vid talet 0,55 på tallinjen.",
      "line": {
        "min": 0,
        "max": 1,
        "step": "0,1",
        "snap": "0,05",
        "labels": [
          0,
          "0,5",
          1
        ]
      },
      "letters": {
        "a": "0,2",
        "b": "0,55"
      },
      "solution": [
        {
          "text": "Mellan 0 och 1 finns tio lika långa delar, så varje streck är en tiondel."
        },
        {
          "text": "0,2 är 2 tiondelar, så a står på streck nummer 2 efter 0."
        },
        {
          "text": "0,55 ligger mitt emellan 0,5 och 0,6."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rd1-tallinje-da7a82ee",
      "part": "tallinje",
      "kind": "place",
      "text": "Sätt ett a vid talet 0,4 på tallinjen och ett b vid talet 0,85 på tallinjen.",
      "line": {
        "min": 0,
        "max": 1,
        "step": "0,1",
        "snap": "0,05",
        "labels": [
          0,
          "0,5",
          1
        ]
      },
      "letters": {
        "a": "0,4",
        "b": "0,85"
      },
      "solution": [
        {
          "text": "Mellan 0 och 1 finns tio lika långa delar, så varje streck är en tiondel."
        },
        {
          "text": "0,4 är 4 tiondelar, så a står på streck nummer 4 efter 0."
        },
        {
          "text": "0,85 ligger mitt emellan 0,8 och 0,9."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rd1-tallinje-17223894",
      "part": "tallinje",
      "kind": "place",
      "text": "Sätt ett a vid talet 0,7 på tallinjen och ett b vid talet 0,15 på tallinjen.",
      "line": {
        "min": 0,
        "max": 1,
        "step": "0,1",
        "snap": "0,05",
        "labels": [
          0,
          "0,5",
          1
        ]
      },
      "letters": {
        "a": "0,7",
        "b": "0,15"
      },
      "solution": [
        {
          "text": "Mellan 0 och 1 finns tio lika långa delar, så varje streck är en tiondel."
        },
        {
          "text": "0,7 är 7 tiondelar, så a står på streck nummer 7 efter 0."
        },
        {
          "text": "0,15 ligger mitt emellan 0,1 och 0,2."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rd1-tallinje-da75bf4e",
      "part": "tallinje",
      "kind": "place",
      "text": "Sätt ett a vid talet 0,8 på tallinjen och ett b vid talet 0,45 på tallinjen.",
      "line": {
        "min": 0,
        "max": 1,
        "step": "0,1",
        "snap": "0,05",
        "labels": [
          0,
          "0,5",
          1
        ]
      },
      "letters": {
        "a": "0,8",
        "b": "0,45"
      },
      "solution": [
        {
          "text": "Mellan 0 och 1 finns tio lika långa delar, så varje streck är en tiondel."
        },
        {
          "text": "0,8 är 8 tiondelar, så a står på streck nummer 8 efter 0."
        },
        {
          "text": "0,45 ligger mitt emellan 0,4 och 0,5."
        }
      ],
      "mistakes": []
    },
    {
      "id": "rd1-med-heltal-ef35a872",
      "part": "med-heltal",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "3 - 0,5 = [a]"
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
          "text": "Räkna i tiondelar: 3 är 30 tiondelar och 0,5 är 5 tiondelar."
        },
        {
          "text": "30 − 5 = 25 tiondelar."
        },
        {
          "math": "3 - 0,5 = 2,5"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3,5"
          },
          "text": "Du lade till 0,5 i stället för att dra bort det. Räkna i tiondelar: 30 − 5 = 25."
        }
      ]
    },
    {
      "id": "rd1-med-heltal-0474e5eb",
      "part": "med-heltal",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "2 - 0,7 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1,3"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna i tiondelar: 2 är 20 tiondelar och 0,7 är 7 tiondelar."
        },
        {
          "text": "20 − 7 = 13 tiondelar."
        },
        {
          "math": "2 - 0,7 = 1,3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2,7"
          },
          "text": "Du lade till 0,7 i stället för att dra bort det. Räkna i tiondelar: 20 − 7 = 13."
        }
      ]
    },
    {
      "id": "rd1-med-heltal-c08bf54a",
      "part": "med-heltal",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "1 - 0,3 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,7"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna i tiondelar: 1 är 10 tiondelar och 0,3 är 3 tiondelar."
        },
        {
          "text": "10 − 3 = 7 tiondelar."
        },
        {
          "math": "1 - 0,3 = 0,7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,3"
          },
          "text": "Du lade till 0,3 i stället för att dra bort det. Räkna i tiondelar: 10 − 3 = 7."
        }
      ]
    },
    {
      "id": "rd1-med-heltal-954ab7bc",
      "part": "med-heltal",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "1 - 0,9 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,1"
          ]
        }
      },
      "solution": [
        {
          "text": "Räkna i tiondelar: 1 är 10 tiondelar och 0,9 är 9 tiondelar."
        },
        {
          "text": "10 − 9 = 1 tiondel."
        },
        {
          "math": "1 - 0,9 = 0,1"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1,9"
          },
          "text": "Du lade till 0,9 i stället för att dra bort det. Räkna i tiondelar: 10 − 9 = 1."
        }
      ]
    },
    {
      "id": "rd1-med-heltal-e0cecd40",
      "part": "med-heltal",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "2 + 0,4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "2,4"
          ]
        }
      },
      "solution": [
        {
          "text": "Hela och tiondelar står på olika platser: heltalet före kommat och tiondelarna efter."
        },
        {
          "math": "2 + 0,4 = 2,4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,6"
          },
          "text": "Du lade ihop 2 och 4. Men 2 är hela och 4 är tiondelar."
        }
      ]
    },
    {
      "id": "rd1-med-heltal-685f5fa1",
      "part": "med-heltal",
      "text": "Beräkna.",
      "points": "each",
      "rows": [
        "3 + 0,6 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3,6"
          ]
        }
      },
      "solution": [
        {
          "text": "Hela och tiondelar står på olika platser: heltalet före kommat och tiondelarna efter."
        },
        {
          "math": "3 + 0,6 = 3,6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,9"
          },
          "text": "Du lade ihop 3 och 6. Men 3 är hela och 6 är tiondelar."
        }
      ]
    },
    {
      "id": "rd1-dela-b07b9058",
      "part": "dela",
      "text": "Vad är hälften av 0,6?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,3"
          ]
        }
      },
      "solution": [
        {
          "text": "0,6 är 6 tiondelar. Hälften av 6 tiondelar är 3 tiondelar."
        },
        {
          "math": "0,6 / 2 = 0,3"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,03"
          },
          "text": "Kommat hamnade fel: 3 tiondelar är 0,3."
        }
      ]
    },
    {
      "id": "rd1-dela-1b65017f",
      "part": "dela",
      "text": "Vad är hälften av 1,4?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,7"
          ]
        }
      },
      "solution": [
        {
          "text": "1,4 är 14 tiondelar. Hälften av 14 tiondelar är 7 tiondelar."
        },
        {
          "math": "1,4 / 2 = 0,7"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,07"
          },
          "text": "Kommat hamnade fel: 7 tiondelar är 0,7."
        }
      ]
    },
    {
      "id": "rd1-dela-bc2195d0",
      "part": "dela",
      "text": "Vad är en tredjedel av 0,12?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,04"
          ]
        }
      },
      "solution": [
        {
          "text": "0,12 är 12 hundradelar. En tredjedel av 12 hundradelar är 4 hundradelar."
        },
        {
          "math": "0,12 / 3 = 0,04"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,004"
          },
          "text": "Kommat hamnade fel: 4 hundradelar är 0,04."
        },
        {
          "answers": {
            "a": "0,4"
          },
          "text": "Kommat hamnade fel: 4 hundradelar är 0,04."
        }
      ]
    },
    {
      "id": "rd1-dela-299899d3",
      "part": "dela",
      "text": "Vad är en tredjedel av 0,6?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,2"
          ]
        }
      },
      "solution": [
        {
          "text": "0,6 är 6 tiondelar. En tredjedel av 6 tiondelar är 2 tiondelar."
        },
        {
          "math": "0,6 / 3 = 0,2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,02"
          },
          "text": "Kommat hamnade fel: 2 tiondelar är 0,2."
        }
      ]
    },
    {
      "id": "rd1-dela-60b554bc",
      "part": "dela",
      "text": "Vad är en fjärdedel av 0,8?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,2"
          ]
        }
      },
      "solution": [
        {
          "text": "0,8 är 8 tiondelar. En fjärdedel av 8 tiondelar är 2 tiondelar."
        },
        {
          "math": "0,8 / 4 = 0,2"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,02"
          },
          "text": "Kommat hamnade fel: 2 tiondelar är 0,2."
        }
      ]
    },
    {
      "id": "rd1-dela-5e00b173",
      "part": "dela",
      "text": "Vad är en fjärdedel av 0,12?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,03"
          ]
        }
      },
      "solution": [
        {
          "text": "0,12 är 12 hundradelar. En fjärdedel av 12 hundradelar är 3 hundradelar."
        },
        {
          "math": "0,12 / 4 = 0,03"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,003"
          },
          "text": "Kommat hamnade fel: 3 hundradelar är 0,03."
        },
        {
          "answers": {
            "a": "0,3"
          },
          "text": "Kommat hamnade fel: 3 hundradelar är 0,03."
        }
      ]
    }
  ]
};
