// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till RP6.
export default {
  "code": "RP6",
  "parts": [
    {
      "id": "valj-hojning-sankning",
      "title": "Välj rätt beräkning: höjning och sänkning",
      "labels": [
        "1"
      ]
    },
    {
      "id": "valj-upprepad",
      "title": "Välj rätt beräkning: upprepad förändring",
      "labels": [
        "2",
        "3",
        "4"
      ]
    },
    {
      "id": "skriv-uttryck",
      "title": "Skriv ett uttryck",
      "labels": [
        "5",
        "6"
      ],
      "formNote": "Uppgiften ber om ett uttryck, inte det uträknade talet."
    }
  ],
  "tasks": [
    {
      "id": "rp6-valj-hojning-sankning-3d0e8751",
      "part": "valj-hojning-sankning",
      "kind": "pick",
      "text": "Ett par hörlurar kostar 800 kr. Först höjs priset med 20 % och sedan sänks det med 30 %. Vad blir det slutliga priset? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "0,2 · 800 · 0,7"
        },
        {
          "id": "b",
          "markup": "800 · 0,9"
        },
        {
          "id": "c",
          "markup": "800 · 1,2 · 0,7"
        },
        {
          "id": "d",
          "markup": "(800 + 0,2 · 800) · 0,7"
        }
      ],
      "accept": [
        "c",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Höjning med 20 % är faktorn 1,2: priset blir 960 kr. Sänkning med 30 % är faktorn 0,7."
        },
        {
          "text": "Sänkningen räknas på det höjda priset, 960 kr: det nya priset är 70 % av det."
        },
        {
          "math": "800 · 1,2 · 0,7 = 672"
        },
        {
          "text": "Parentesen är det höjda priset: 800 + 0,2 · 800 = 960, samma sak som 800 · 1,2."
        },
        {
          "text": "0,2 · 800 · 0,7 använder 0,2 som faktor för höjningen, men faktorn är 1,2."
        },
        {
          "text": "800 · 0,9 lägger ihop procenten, men sänkningen räknas på det höjda priset."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du använde 0,2 som faktor för höjningen. Faktorn är 1,2: 0,2 · 800 är bara höjningen i kronor."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop procenten: +20 % − 30 % = −10 %. Men sänkningen gäller det höjda priset, 960 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men (800 + 0,2 · 800) · 0,7 är också rätt: parentesen är det höjda priset."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 800 · 1,2 · 0,7 är också rätt: 800 + 0,2 · 800 är samma sak som 800 · 1,2."
        }
      ]
    },
    {
      "id": "rp6-valj-hojning-sankning-d2bc487f",
      "part": "valj-hojning-sankning",
      "kind": "pick",
      "text": "En soffa kostar 1000 kr. Först sänks priset med 30 % och sedan höjs det med 30 %. Vad blir det slutliga priset? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "1000 · 0,91"
        },
        {
          "id": "b",
          "markup": "1000 · (1 - 0,3 + 0,3)"
        },
        {
          "id": "c",
          "markup": "1000 · 0,3 · 1,3"
        },
        {
          "id": "d",
          "markup": "1000 · 0,7 · 1,3"
        }
      ],
      "accept": [
        "a",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Sänkning med 30 % är faktorn 0,7: priset blir 700 kr. Höjning med 30 % är faktorn 1,3."
        },
        {
          "text": "Höjningen räknas på det sänkta priset, 700 kr, så priset blir inte 1000 kr igen."
        },
        {
          "math": "1000 · 0,91 = 910"
        },
        {
          "text": "Faktorerna kan multipliceras ihop först: 0,7 · 1,3 = 0,91, så 1000 · 0,91 är samma sak."
        },
        {
          "text": "1000 · (1 − 0,3 + 0,3) tar ut ändringarna mot varandra, men höjningen gäller det sänkta priset."
        },
        {
          "text": "1000 · 0,3 · 1,3 använder 0,3 som faktor för sänkningen, men faktorn är 0,7."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du tänkte att −30 % och +30 % tar ut varandra. Men höjningen räknas på det sänkta priset, 700 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du använde 0,3 som faktor för sänkningen. Faktorn är 0,7: 0,3 · 1000 är bara sänkningen i kronor."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 1000 · 0,7 · 1,3 är också rätt: 0,7 · 1,3 = 0,91."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 1000 · 0,91 är också rätt: två faktorer efter varandra är samma sak som 0,91."
        }
      ]
    },
    {
      "id": "rp6-valj-hojning-sankning-9f1cf754",
      "part": "valj-hojning-sankning",
      "kind": "pick",
      "text": "En mikrovågsugn kostar 600 kr. Först höjs priset med 50 % och sedan sänks det med 20 %. Vad blir det slutliga priset? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "600 · 1,3"
        },
        {
          "id": "b",
          "markup": "600 · 1,5 · 0,8"
        },
        {
          "id": "c",
          "markup": "600 + 50 - 20"
        },
        {
          "id": "d",
          "markup": "0,5 · 600 · 0,2"
        }
      ],
      "accept": [
        "b"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Höjning med 50 % är faktorn 1,5: priset blir 900 kr. Sänkning med 20 % är faktorn 0,8."
        },
        {
          "text": "Sänkningen räknas på det höjda priset, 900 kr, så priset blir 720 kr."
        },
        {
          "math": "600 · 1,5 · 0,8 = 720"
        },
        {
          "text": "600 · 1,3 lägger ihop procenten, men sänkningen räknas på det höjda priset."
        },
        {
          "text": "600 + 50 − 20 lägger till och drar bort procenttalen som kronor."
        },
        {
          "text": "0,5 · 600 · 0,2 använder procenttalen 0,5 och 0,2 som faktorer, men faktorerna är 1,5 och 0,8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop procenten: +50 % − 20 % = +30 %. Men sänkningen gäller det höjda priset, 900 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du lade till och drog bort 50 och 20 som kronor. Men 50 % av 600 kr är 300 kr, inte 50 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du använde 0,5 och 0,2 som faktorer. Faktorerna är 1,5 och 0,8: 0,5 · 600 är bara höjningen i kronor."
        }
      ]
    },
    {
      "id": "rp6-valj-hojning-sankning-2d162c20",
      "part": "valj-hojning-sankning",
      "kind": "pick",
      "text": "En skateboard kostar 400 kr. Först höjs priset med 25 % och sedan sänks det med 25 %. Vad blir det slutliga priset? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "400 + 25 - 25"
        },
        {
          "id": "b",
          "markup": "400 · 1,25 - 0,25 · 400"
        },
        {
          "id": "c",
          "markup": "400 · 1,25 · 0,75"
        },
        {
          "id": "d",
          "markup": "0,25 · 400 · 0,75"
        }
      ],
      "accept": [
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Höjning med 25 % är faktorn 1,25: priset blir 500 kr. Sänkning med 25 % är faktorn 0,75."
        },
        {
          "text": "Sänkningen räknas på det höjda priset, 500 kr, så priset blir inte 400 kr igen."
        },
        {
          "math": "400 · 1,25 · 0,75 = 375"
        },
        {
          "text": "400 + 25 − 25 lägger till och drar bort 25 som kronor, men 25 % av 400 kr är 100 kr."
        },
        {
          "text": "400 · 1,25 − 0,25 · 400 räknar sänkningen på 400 kr, men den gäller det höjda priset, 500 kr."
        },
        {
          "text": "0,25 · 400 · 0,75 använder 0,25 som faktor för höjningen, men faktorn är 1,25."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du lade till och drog bort 25 som kronor. Men 25 % av 400 kr är 100 kr, inte 25 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du räknade sänkningen på det gamla priset, 400 kr. Den ska räknas på det höjda priset, 500 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du använde 0,25 som faktor för höjningen. Faktorn är 1,25: 0,25 · 400 är bara höjningen i kronor."
        }
      ]
    },
    {
      "id": "rp6-valj-hojning-sankning-62082b9d",
      "part": "valj-hojning-sankning",
      "kind": "pick",
      "text": "En cykel kostar 3000 kr. Först höjs priset med 10 % och sedan sänks det med 20 %. Vad blir det slutliga priset? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "3000 · 0,9"
        },
        {
          "id": "b",
          "markup": "3000 · 1,1 · 0,8"
        },
        {
          "id": "c",
          "markup": "0,1 · 3000 · 0,2"
        },
        {
          "id": "d",
          "markup": "3000 · 0,88"
        }
      ],
      "accept": [
        "b",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Höjning med 10 % är faktorn 1,1: det nya priset är 110 % av det gamla."
        },
        {
          "text": "Sänkning med 20 % är faktorn 0,8: priset blir 80 % av det höjda priset."
        },
        {
          "math": "3000 · 1,1 · 0,8 = 2640"
        },
        {
          "text": "Faktorerna kan multipliceras ihop först: 1,1 · 0,8 = 0,88, så 3000 · 0,88 är samma sak."
        },
        {
          "text": "3000 · 0,9 lägger ihop procenten, men sänkningen räknas på det höjda priset."
        },
        {
          "text": "0,1 · 3000 · 0,2 använder procenttalen 0,1 och 0,2 som faktorer, men faktorerna är 1,1 och 0,8."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop procenten: +10 % − 20 % = −10 %. Men sänkningen gäller det höjda priset, som är större än 3000 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du använde 0,1 och 0,2 som faktorer. Faktorerna är 1,1 och 0,8: 0,1 · 3000 är bara höjningen i kronor."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 3000 · 0,88 är också rätt: 1,1 · 0,8 = 0,88."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 3000 · 1,1 · 0,8 är också rätt: två faktorer efter varandra är samma sak som 0,88."
        }
      ]
    },
    {
      "id": "rp6-valj-hojning-sankning-286c7074",
      "part": "valj-hojning-sankning",
      "kind": "pick",
      "text": "En tröja kostar 500 kr. Först sänks priset med 20 % och sedan höjs det med 10 %. Vad blir det slutliga priset? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "500 · 0,8 · 1,1"
        },
        {
          "id": "b",
          "markup": "500 - 20 + 10"
        },
        {
          "id": "c",
          "markup": "500 · 0,9"
        },
        {
          "id": "d",
          "markup": "500 · 0,88"
        }
      ],
      "accept": [
        "a",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Sänkning med 20 % är faktorn 0,8: priset blir 80 % av det gamla."
        },
        {
          "text": "Höjning med 10 % är faktorn 1,1: det nya priset är 110 % av det sänkta priset."
        },
        {
          "math": "500 · 0,8 · 1,1 = 440"
        },
        {
          "text": "Faktorerna kan multipliceras ihop först: 0,8 · 1,1 = 0,88, så 500 · 0,88 är samma sak."
        },
        {
          "text": "500 − 20 + 10 lägger till och drar bort procenttalen som kronor."
        },
        {
          "text": "500 · 0,9 lägger ihop procenten, men höjningen räknas på det sänkta priset."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du lade till och drog bort 20 och 10 som kronor. Men 20 % av 500 kr är 100 kr, inte 20 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du lade ihop procenten: −20 % + 10 % = −10 %. Men höjningen gäller det sänkta priset, som är mindre än 500 kr."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 500 · 0,88 är också rätt: 0,8 · 1,1 = 0,88."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 500 · 0,8 · 1,1 är också rätt: två faktorer efter varandra är samma sak som 0,88."
        }
      ]
    },
    {
      "id": "rp6-valj-upprepad-400c678a",
      "part": "valj-upprepad",
      "kind": "pick",
      "text": "Elias veckopeng är 200 kr. Efter ett år höjs den med 10 %, och året därpå höjs den nya veckopengen med ytterligare 10 %. Vad är veckopengen efter båda höjningarna? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "200 · 1,1 · 1,1"
        },
        {
          "id": "b",
          "markup": "200 · 1,2"
        },
        {
          "id": "c",
          "markup": "(200 + 0,1 · 200) · 1,1"
        },
        {
          "id": "d",
          "markup": "200 + 10 + 10"
        }
      ],
      "accept": [
        "a",
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Höjning med 10 % är faktorn 1,1: veckopengen blir 220 kr efter första höjningen."
        },
        {
          "text": "Den andra höjningen räknas på 220 kr, så faktorn 1,1 används två gånger."
        },
        {
          "math": "200 · 1,1 · 1,1 = 242"
        },
        {
          "text": "Parentesen är veckopengen efter första höjningen: 200 + 0,1 · 200 = 200 · 1,1."
        },
        {
          "text": "200 · 1,2 lägger ihop procenten, men den andra höjningen räknas på den höjda veckopengen."
        },
        {
          "text": "200 + 10 + 10 lägger till 10 kr två gånger, men 10 % av 200 kr är 20 kr."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop procenten: 10 % + 10 % = 20 %. Men den andra höjningen gäller den höjda veckopengen."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du lade till 10 kr två gånger. Men 10 % av 200 kr är 20 kr, och andra höjningen är 10 % av 220 kr."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men (200 + 0,1 · 200) · 1,1 är också rätt: parentesen är 200 · 1,1."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 200 · 1,1 · 1,1 är också rätt: 200 + 0,1 · 200 är samma sak som 200 · 1,1."
        }
      ]
    },
    {
      "id": "rp6-valj-upprepad-20187616",
      "part": "valj-upprepad",
      "kind": "pick",
      "text": "Lisa har en timlön på 160 kr. Först höjs lönen med 5 %. Året därpå höjs den nya lönen med ytterligare 4 %. Vad är hennes timlön efter båda höjningarna? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "160 · 1,09"
        },
        {
          "id": "b",
          "markup": "160 · 1,05 · 1,04"
        },
        {
          "id": "c",
          "markup": "160 + 0,05 · 160 + 0,04 · 160"
        },
        {
          "id": "d",
          "markup": "(160 + 0,05 · 160) · 1,04"
        }
      ],
      "accept": [
        "b",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Höjning med 5 % är faktorn 1,05 och höjning med 4 % är faktorn 1,04."
        },
        {
          "text": "Den andra höjningen räknas på den höjda lönen, så faktorerna multipliceras."
        },
        {
          "math": "160 · 1,05 · 1,04 = 174,72"
        },
        {
          "text": "Parentesen är lönen efter första höjningen: 160 + 0,05 · 160 = 160 · 1,05."
        },
        {
          "text": "160 · 1,09 lägger ihop procenten, men 4 % räknas på den redan höjda lönen."
        },
        {
          "text": "160 + 0,05 · 160 + 0,04 · 160 räknar båda höjningarna på 160 kr."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop procenten: 5 % + 4 % = 9 %. Men den andra höjningen gäller den redan höjda lönen."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du räknade båda höjningarna på 160 kr. Den andra höjningen ska räknas på lönen efter den första."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men (160 + 0,05 · 160) · 1,04 är också rätt: parentesen är 160 · 1,05."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 160 · 1,05 · 1,04 är också rätt: 160 + 0,05 · 160 är samma sak som 160 · 1,05."
        }
      ]
    },
    {
      "id": "rp6-valj-upprepad-d07b0a97",
      "part": "valj-upprepad",
      "kind": "pick",
      "text": "Mira sätter in 5000 kr på ett bankkonto som ger 2 % ränta per år. Hur mycket har hon på kontot efter tre år om hon inte tar ut något? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "5000 · 1,02 · 1,02 · 1,02"
        },
        {
          "id": "b",
          "markup": "5000 · 1,06"
        },
        {
          "id": "c",
          "markup": "5000 · 1,02^3"
        },
        {
          "id": "d",
          "markup": "5000 · 1,02 · 3"
        }
      ],
      "accept": [
        "a",
        "c"
      ],
      "points": "one",
      "solution": [
        {
          "text": "2 % ränta varje år betyder att kapitalet blir 1,02 gånger så stort varje år."
        },
        {
          "text": "Efter tre år är det 1,02 · 1,02 · 1,02 = 1,02³ gånger så stort."
        },
        {
          "math": "5000 · 1,02 · 1,02 · 1,02 = 5306,04"
        },
        {
          "text": "5000 · 1,06 lägger ihop räntan för tre år, men räntan gäller det som redan har vuxit."
        },
        {
          "text": "5000 · 1,02 · 3 multiplicerar med faktorn en gång och sedan med antalet år."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop räntan för tre år (3 · 2 % = 6 %). Men räntan varje år räknas på kapitalet som redan har vuxit."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du multiplicerade med 3 i stället för med 1,02 tre gånger. Kapitalet blir inte 3 gånger så stort."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 5000 · 1,02³ är också rätt: 1,02 · 1,02 · 1,02 = 1,02³."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 5000 · 1,02 · 1,02 · 1,02 är också rätt: det är 1,02³ skrivet som en produkt."
        }
      ]
    },
    {
      "id": "rp6-valj-upprepad-caa370ab",
      "part": "valj-upprepad",
      "kind": "pick",
      "text": "En cykel kostar 1500 kr. Först sänks priset med 20 %. Sedan sänks det nya priset med ytterligare 10 %. Vad kostar cykeln efter den andra sänkningen? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "1500 · 0,7"
        },
        {
          "id": "b",
          "markup": "1500 · 0,8 · 0,9"
        },
        {
          "id": "c",
          "markup": "1500 · 0,2 · 0,1"
        },
        {
          "id": "d",
          "markup": "1500 · 0,72"
        }
      ],
      "accept": [
        "b",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Sänkning med 20 % är faktorn 0,8 och sänkning med 10 % är faktorn 0,9."
        },
        {
          "text": "Den andra sänkningen räknas på det sänkta priset, så faktorerna multipliceras."
        },
        {
          "math": "1500 · 0,8 · 0,9 = 1080"
        },
        {
          "text": "Faktorerna kan multipliceras ihop först: 0,8 · 0,9 = 0,72, så 1500 · 0,72 är samma sak."
        },
        {
          "text": "1500 · 0,7 lägger ihop procenten, men 10 % räknas på det redan sänkta priset."
        },
        {
          "text": "1500 · 0,2 · 0,1 använder procenttalen 0,2 och 0,1 som faktorer, men faktorerna är 0,8 och 0,9."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop procenten: 20 % + 10 % = 30 %. Men den andra sänkningen räknas på det redan sänkta priset."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du använde 0,2 och 0,1 som faktorer. Faktorerna för sänkningarna är 0,8 och 0,9."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 1500 · 0,72 är också rätt: 0,8 · 0,9 = 0,72."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 1500 · 0,8 · 0,9 är också rätt: två faktorer efter varandra är samma sak som 0,72."
        }
      ]
    },
    {
      "id": "rp6-valj-upprepad-88c30c6d",
      "part": "valj-upprepad",
      "kind": "pick",
      "text": "Sofia har 2500 kr på ett konto med 4 % ränta per år. Hur mycket har hon på kontot efter två år om hon inte tar ut några pengar? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "2500 · 1,04^2"
        },
        {
          "id": "b",
          "markup": "2500 · 1,08"
        },
        {
          "id": "c",
          "markup": "2500 · 0,04 · 2"
        },
        {
          "id": "d",
          "markup": "2500 · 1,04 · 1,04"
        }
      ],
      "accept": [
        "a",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "4 % ränta varje år betyder att kapitalet blir 1,04 gånger så stort varje år."
        },
        {
          "text": "Efter två år är det 1,04 · 1,04 = 1,04² gånger så stort."
        },
        {
          "math": "2500 · 1,04^2 = 2704"
        },
        {
          "text": "2500 · 1,08 lägger ihop 4 % och 4 %, men andra årets ränta räknas på 2600 kr."
        },
        {
          "text": "2500 · 0,04 · 2 är bara räntan i kronor, utan kapitalet."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop räntan för två år (2 · 4 % = 8 %). Men andra årets ränta räknas på 2600 kr, inte på 2500 kr."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du räknade bara räntan i kronor, utan kapitalet. Kapitalet efter två år är 2500 · 1,04 · 1,04."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 2500 · 1,04 · 1,04 är också rätt: 1,04² är 1,04 · 1,04."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 2500 · 1,04² är också rätt: det är 1,04 · 1,04 skrivet som en potens."
        }
      ]
    },
    {
      "id": "rp6-valj-upprepad-96241410",
      "part": "valj-upprepad",
      "kind": "pick",
      "text": "En vinterjacka kostar 1600 kr. Först sänks priset med 25 %. Sedan sänks det nya priset med ytterligare 25 %. Vad kostar jackan efter den andra sänkningen? Markera alla uttryck som ger korrekt svar på uppgiften.",
      "items": [
        {
          "id": "a",
          "markup": "1600 · 0,5"
        },
        {
          "id": "b",
          "markup": "1600 · 1,25 · 1,25"
        },
        {
          "id": "c",
          "markup": "1600 · 0,75 · 0,75"
        },
        {
          "id": "d",
          "markup": "1600 · 0,75^2"
        }
      ],
      "accept": [
        "c",
        "d"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Sänkning med 25 % är faktorn 0,75: priset blir 75 % av det gamla."
        },
        {
          "text": "Den andra sänkningen räknas på det sänkta priset: 0,75 · 0,75 = 0,75²."
        },
        {
          "math": "1600 · 0,75 · 0,75 = 900"
        },
        {
          "text": "1600 · 0,5 lägger ihop procenten, men den andra sänkningen räknas på det sänkta priset."
        },
        {
          "text": "1600 · 1,25 · 1,25 är två höjningar med 25 %, inte två sänkningar."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "Du lade ihop procenten: 25 % + 25 % = 50 %. Men den andra sänkningen räknas på det redan sänkta priset."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "Du använde 1,25, faktorn för en höjning med 25 %. Båda ändringarna är sänkningar: faktorn är 0,75."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "Du hittade ett uttryck, men 1600 · 0,75² är också rätt: 0,75 · 0,75 = 0,75²."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "Du hittade ett uttryck, men 1600 · 0,75 · 0,75 är också rätt: det är 0,75² skrivet som en produkt."
        }
      ]
    },
    {
      "id": "rp6-skriv-uttryck-7faf4169",
      "part": "skriv-uttryck",
      "text": "Ett par skor kostar 1200 kr. Priset sänks med 10 % och därefter sänks det nya priset med 30 %. Skriv ett uttryck för det slutliga priset. Du ska inte räkna ut svaret.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1200 · 0,9 · 0,7",
            "1200 · 0,63"
          ],
          "expression": true
        }
      },
      "solution": [
        {
          "text": "Sänkning med 10 % gör priset 0,9 gånger så stort, och sänkning med 30 % gör det 0,7 gånger så stort."
        },
        {
          "math": "1200 · 0,9 · 0,7 = 1200 · 0,63"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1200 · 0,1 · 0,3"
          },
          "text": "Du använde procenttalen som faktorer. Faktorerna är 0,9 och 0,7, inte 0,1 och 0,3."
        },
        {
          "answers": {
            "a": "1200 · 0,6"
          },
          "text": "Du lade ihop procenten (10 % + 30 % = 40 %). Men den andra ändringen räknas på det som redan har ändrats."
        }
      ]
    },
    {
      "id": "rp6-skriv-uttryck-eab45346",
      "part": "skriv-uttryck",
      "text": "En skrivbordsstol kostar 640 kr. Först sänks priset med 50 % och sedan sänks det nya priset med ytterligare 20 %. Skriv ett uttryck för det slutliga priset. Du ska inte räkna ut svaret.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "640 · 0,5 · 0,8",
            "640 · 0,4"
          ],
          "expression": true
        }
      },
      "solution": [
        {
          "text": "Sänkning med 50 % gör priset 0,5 gånger så stort, och sänkning med 20 % gör det 0,8 gånger så stort."
        },
        {
          "math": "640 · 0,5 · 0,8 = 640 · 0,4"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "640 · 0,5 · 0,2"
          },
          "text": "Du använde procenttalen som faktorer. Sänkning med 20 % har faktorn 0,8, inte 0,2."
        },
        {
          "answers": {
            "a": "640 · 0,3"
          },
          "text": "Du lade ihop procenten (50 % + 20 % = 70 %). Men den andra ändringen räknas på det som redan har ändrats."
        }
      ]
    },
    {
      "id": "rp6-skriv-uttryck-5cb351fc",
      "part": "skriv-uttryck",
      "text": "Hyran är 8000 kr i månaden. Först höjs hyran med 2 % och året därpå höjs den nya hyran med 3 %. Skriv ett uttryck för den slutliga hyran. Du ska inte räkna ut svaret.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "8000 · 1,02 · 1,03",
            "8000 · 1,0506"
          ],
          "expression": true
        }
      },
      "solution": [
        {
          "text": "Höjning med 2 % gör hyran 1,02 gånger så stor, och höjning med 3 % gör den 1,03 gånger så stor."
        },
        {
          "math": "8000 · 1,02 · 1,03 = 8000 · 1,0506"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8000 · 0,02 · 0,03"
          },
          "text": "Du använde procenttalen som faktorer. Faktorerna är 1,02 och 1,03, inte 0,02 och 0,03."
        },
        {
          "answers": {
            "a": "8000 · 1,05"
          },
          "text": "Du lade ihop procenten (2 % + 3 % = 5 %). Men den andra ändringen räknas på det som redan har ändrats."
        }
      ]
    },
    {
      "id": "rp6-skriv-uttryck-83d0249c",
      "part": "skriv-uttryck",
      "text": "Priset på en jacka är 800 kr. Först sänks priset med 25 % och därefter sänks det nya priset med 20 %. Skriv ett uttryck för det slutliga priset. Du ska inte räkna ut svaret.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "800 · 0,75 · 0,8",
            "800 · 0,6"
          ],
          "expression": true
        }
      },
      "solution": [
        {
          "text": "Sänkning med 25 % gör priset 0,75 gånger så stort, och sänkning med 20 % gör det 0,8 gånger så stort."
        },
        {
          "math": "800 · 0,75 · 0,8 = 800 · 0,6"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "800 · 0,25 · 0,2"
          },
          "text": "Du använde procenttalen som faktorer. Faktorerna är 0,75 och 0,8, inte 0,25 och 0,2."
        },
        {
          "answers": {
            "a": "800 · 0,55"
          },
          "text": "Du lade ihop procenten (25 % + 20 % = 45 %). Men den andra ändringen räknas på det som redan har ändrats."
        }
      ]
    },
    {
      "id": "rp6-skriv-uttryck-55f3fb1c",
      "part": "skriv-uttryck",
      "text": "Annas månadslön är 30 000 kr. Först höjs lönen med 4 % och året därpå höjs den nya lönen med ytterligare 3 %. Skriv ett uttryck för den slutliga lönen. Du ska inte räkna ut svaret.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30 000 · 1,04 · 1,03",
            "30 000 · 1,0712"
          ],
          "expression": true
        }
      },
      "solution": [
        {
          "text": "Höjning med 4 % gör lönen 1,04 gånger så stor, och höjning med 3 % gör den 1,03 gånger så stor."
        },
        {
          "math": "30 000 · 1,04 · 1,03 = 30 000 · 1,0712"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "30 000 · 0,04 · 0,03"
          },
          "text": "Du använde procenttalen som faktorer. Faktorerna är 1,04 och 1,03, inte 0,04 och 0,03."
        },
        {
          "answers": {
            "a": "30 000 · 1,07"
          },
          "text": "Du lade ihop procenten (4 % + 3 % = 7 %). Men den andra ändringen räknas på det som redan har ändrats."
        }
      ]
    },
    {
      "id": "rp6-skriv-uttryck-fc942722",
      "part": "skriv-uttryck",
      "text": "Omars timlön är 150 kr. Lönen höjs med 6 % och därefter höjs den nya lönen med 5 %. Skriv ett uttryck för den slutliga lönen. Du ska inte räkna ut svaret.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "150 · 1,06 · 1,05",
            "150 · 1,113"
          ],
          "expression": true
        }
      },
      "solution": [
        {
          "text": "Höjning med 6 % gör lönen 1,06 gånger så stor, och höjning med 5 % gör den 1,05 gånger så stor."
        },
        {
          "math": "150 · 1,06 · 1,05 = 150 · 1,113"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "150 · 0,06 · 0,05"
          },
          "text": "Du använde procenttalen som faktorer. Faktorerna är 1,06 och 1,05, inte 0,06 och 0,05."
        },
        {
          "answers": {
            "a": "150 · 1,11"
          },
          "text": "Du lade ihop procenten (6 % + 5 % = 11 %). Men den andra ändringen räknas på det som redan har ändrats."
        }
      ]
    }
  ]
};
