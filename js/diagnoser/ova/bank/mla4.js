// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till MLä4.
export default {
  "code": "MLä4",
  "parts": [
    {
      "id": "vad-ar-pi",
      "title": "Vad är π?",
      "labels": [
        "1"
      ]
    },
    {
      "id": "omkrets",
      "title": "Omkrets och radie",
      "labels": [
        "2",
        "3"
      ]
    },
    {
      "id": "area",
      "title": "Cirkelns area",
      "labels": [
        "4",
        "5"
      ]
    },
    {
      "id": "baklanges",
      "title": "Från area till längd",
      "labels": [
        "6"
      ]
    }
  ],
  "tasks": [
    {
      "id": "mla4-vad-ar-pi-8c2fb8ea",
      "part": "vad-ar-pi",
      "kind": "pick",
      "text": "Markera alla sanna påståenden.",
      "points": "one",
      "items": [
        {
          "id": "a",
          "markup": "π är förhållandet mellan en cirkels omkrets och dess radie."
        },
        {
          "id": "b",
          "markup": "π är förhållandet mellan en cirkels area och dess radie i kvadrat."
        },
        {
          "id": "c",
          "markup": "En cirkels omkrets är π gånger radien."
        },
        {
          "id": "d",
          "markup": "π är ungefär 3,14."
        }
      ],
      "accept": [
        "b",
        "d"
      ],
      "solution": [
        {
          "text": "π är förhållandet mellan omkretsen och diametern, samma tal för alla cirklar, ungefär 3,14. Omkretsen är π · d = 2π · r och arean π · r²."
        },
        {
          "text": "a: Falskt, omkretsen delat med radien är 2π, inte π."
        },
        {
          "text": "b: Sant."
        },
        {
          "text": "c: Falskt, omkretsen är π gånger diametern, alltså 2π gånger radien."
        },
        {
          "text": "d: Sant."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "",
            "d": "1"
          },
          "text": "a är falskt: omkretsen delat med radien är 2π, inte π."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "b är också sant."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "1",
            "d": "1"
          },
          "text": "c är falskt: omkretsen är π gånger diametern, alltså 2π gånger radien."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "d är också sant."
        }
      ]
    },
    {
      "id": "mla4-vad-ar-pi-70f9fe5b",
      "part": "vad-ar-pi",
      "kind": "pick",
      "text": "Markera alla sanna påståenden.",
      "points": "one",
      "items": [
        {
          "id": "a",
          "markup": "En cirkels omkrets är π gånger diametern."
        },
        {
          "id": "b",
          "markup": "π är förhållandet mellan en cirkels omkrets och dess radie."
        },
        {
          "id": "c",
          "markup": "En cirkels area är π gånger radien i kvadrat."
        },
        {
          "id": "d",
          "markup": "π är ett mått på en cirkels area."
        }
      ],
      "accept": [
        "a",
        "c"
      ],
      "solution": [
        {
          "text": "π är förhållandet mellan omkretsen och diametern, samma tal för alla cirklar, ungefär 3,14. Omkretsen är π · d = 2π · r och arean π · r²."
        },
        {
          "text": "a: Sant."
        },
        {
          "text": "b: Falskt, omkretsen delat med radien är 2π, inte π."
        },
        {
          "text": "c: Sant."
        },
        {
          "text": "d: Falskt, π är ett förhållande, samma tal för alla cirklar, inte en area."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "a är också sant."
        },
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1",
            "d": ""
          },
          "text": "b är falskt: omkretsen delat med radien är 2π, inte π."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "c är också sant."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "1",
            "d": "1"
          },
          "text": "d är falskt: π är ett förhållande, samma tal för alla cirklar, inte en area."
        }
      ]
    },
    {
      "id": "mla4-vad-ar-pi-64e58c53",
      "part": "vad-ar-pi",
      "kind": "pick",
      "text": "Markera alla sanna påståenden.",
      "points": "one",
      "items": [
        {
          "id": "a",
          "markup": "En cirkels omkrets är 2π gånger radien."
        },
        {
          "id": "b",
          "markup": "En cirkels area är π gånger diametern."
        },
        {
          "id": "c",
          "markup": "π är en längd som mäts i cm."
        },
        {
          "id": "d",
          "markup": "En cirkels area är π gånger radien i kvadrat."
        }
      ],
      "accept": [
        "a",
        "d"
      ],
      "solution": [
        {
          "text": "π är förhållandet mellan omkretsen och diametern, samma tal för alla cirklar, ungefär 3,14. Omkretsen är π · d = 2π · r och arean π · r²."
        },
        {
          "text": "a: Sant."
        },
        {
          "text": "b: Falskt, arean är π gånger radien i kvadrat."
        },
        {
          "text": "c: Falskt, π är ett förhållande mellan två längder, så det har ingen enhet."
        },
        {
          "text": "d: Sant."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": "1"
          },
          "text": "a är också sant."
        },
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "",
            "d": "1"
          },
          "text": "b är falskt: arean är π gånger radien i kvadrat."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "1",
            "d": "1"
          },
          "text": "c är falskt: π är ett förhållande mellan två längder, så det har ingen enhet."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "d är också sant."
        }
      ]
    },
    {
      "id": "mla4-vad-ar-pi-b226b7ec",
      "part": "vad-ar-pi",
      "kind": "pick",
      "text": "Markera alla sanna påståenden.",
      "points": "one",
      "items": [
        {
          "id": "a",
          "markup": "π är förhållandet mellan en cirkels omkrets och dess diameter."
        },
        {
          "id": "b",
          "markup": "π är ett mått på en cirkels area."
        },
        {
          "id": "c",
          "markup": "En cirkels omkrets är π gånger diametern."
        },
        {
          "id": "d",
          "markup": "π är exakt 3,14."
        }
      ],
      "accept": [
        "a",
        "c"
      ],
      "solution": [
        {
          "text": "π är förhållandet mellan omkretsen och diametern, samma tal för alla cirklar, ungefär 3,14. Omkretsen är π · d = 2π · r och arean π · r²."
        },
        {
          "text": "a: Sant."
        },
        {
          "text": "b: Falskt, π är ett förhållande, samma tal för alla cirklar, inte en area."
        },
        {
          "text": "c: Sant."
        },
        {
          "text": "d: Falskt, 3,14 är ett närmevärde. π har oändligt många decimaler."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "a är också sant."
        },
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1",
            "d": ""
          },
          "text": "b är falskt: π är ett förhållande, samma tal för alla cirklar, inte en area."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "c är också sant."
        },
        {
          "answers": {
            "a": "1",
            "b": "",
            "c": "1",
            "d": "1"
          },
          "text": "d är falskt: 3,14 är ett närmevärde. π har oändligt många decimaler."
        }
      ]
    },
    {
      "id": "mla4-vad-ar-pi-7d448939",
      "part": "vad-ar-pi",
      "kind": "pick",
      "text": "Markera alla sanna påståenden.",
      "points": "one",
      "items": [
        {
          "id": "a",
          "markup": "π är exakt 3,14."
        },
        {
          "id": "b",
          "markup": "π är förhållandet mellan en cirkels omkrets och dess diameter."
        },
        {
          "id": "c",
          "markup": "En cirkels omkrets är π gånger radien."
        },
        {
          "id": "d",
          "markup": "En cirkels area är π gånger diametern."
        }
      ],
      "accept": [
        "b"
      ],
      "solution": [
        {
          "text": "π är förhållandet mellan omkretsen och diametern, samma tal för alla cirklar, ungefär 3,14. Omkretsen är π · d = 2π · r och arean π · r²."
        },
        {
          "text": "a: Falskt, 3,14 är ett närmevärde. π har oändligt många decimaler."
        },
        {
          "text": "b: Sant."
        },
        {
          "text": "c: Falskt, omkretsen är π gånger diametern, alltså 2π gånger radien."
        },
        {
          "text": "d: Falskt, arean är π gånger radien i kvadrat."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "a är falskt: 3,14 är ett närmevärde. π har oändligt många decimaler."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "",
            "d": ""
          },
          "text": "b är också sant."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "1",
            "d": ""
          },
          "text": "c är falskt: omkretsen är π gånger diametern, alltså 2π gånger radien."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": "1"
          },
          "text": "d är falskt: arean är π gånger radien i kvadrat."
        }
      ]
    },
    {
      "id": "mla4-vad-ar-pi-2d626720",
      "part": "vad-ar-pi",
      "kind": "pick",
      "text": "Markera alla sanna påståenden.",
      "points": "one",
      "items": [
        {
          "id": "a",
          "markup": "π är en längd som mäts i cm."
        },
        {
          "id": "b",
          "markup": "π är ungefär 3,14."
        },
        {
          "id": "c",
          "markup": "π är förhållandet mellan en cirkels area och dess radie i kvadrat."
        },
        {
          "id": "d",
          "markup": "π är exakt 3,14."
        }
      ],
      "accept": [
        "b",
        "c"
      ],
      "solution": [
        {
          "text": "π är förhållandet mellan omkretsen och diametern, samma tal för alla cirklar, ungefär 3,14. Omkretsen är π · d = 2π · r och arean π · r²."
        },
        {
          "text": "a: Falskt, π är ett förhållande mellan två längder, så det har ingen enhet."
        },
        {
          "text": "b: Sant."
        },
        {
          "text": "c: Sant."
        },
        {
          "text": "d: Falskt, 3,14 är ett närmevärde. π har oändligt många decimaler."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1",
            "b": "1",
            "c": "1",
            "d": ""
          },
          "text": "a är falskt: π är ett förhållande mellan två längder, så det har ingen enhet."
        },
        {
          "answers": {
            "a": "",
            "b": "",
            "c": "1",
            "d": ""
          },
          "text": "b är också sant."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "",
            "d": ""
          },
          "text": "c är också sant."
        },
        {
          "answers": {
            "a": "",
            "b": "1",
            "c": "1",
            "d": "1"
          },
          "text": "d är falskt: 3,14 är ett närmevärde. π har oändligt många decimaler."
        }
      ]
    },
    {
      "id": "mla4-omkrets-831ff058",
      "part": "omkrets",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har radien 3 cm. Bestäm cirkelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "18 cm"
          ],
          "pi": "6π",
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Omkretsen är π gånger diametern. Diametern är 2 · 3 = 6 cm."
        },
        {
          "text": "6 · π ≈ 6 · 3 = 18 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3π"
          },
          "text": "Omkretsen är π gånger diametern, inte radien: diametern är 6 cm."
        }
      ]
    },
    {
      "id": "mla4-omkrets-7c1db863",
      "part": "omkrets",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har omkretsen 36 cm. Bestäm cirkelns radie.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6 cm"
          ],
          "pi": "18/π",
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Omkretsen är π gånger diametern, så diametern är 36 / π ≈ 36 / 3 = 12 cm."
        },
        {
          "text": "Radien är hälften: 6 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "12"
          },
          "text": "Det är diametern. Radien är hälften."
        }
      ]
    },
    {
      "id": "mla4-omkrets-78aad106",
      "part": "omkrets",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har omkretsen 60 cm. Bestäm cirkelns diameter.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "20 cm"
          ],
          "pi": "60/π",
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Omkretsen är π gånger diametern, så diametern är 60 / π ≈ 60 / 3 = 20 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10"
          },
          "text": "Det är radien. Diametern är dubbelt så lång."
        }
      ]
    },
    {
      "id": "mla4-omkrets-8f80f7ba",
      "part": "omkrets",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har omkretsen 24 cm. Bestäm cirkelns radie.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4 cm"
          ],
          "pi": "12/π",
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Diametern är 24 / π ≈ 24 / 3 = 8 cm, och radien är hälften: 4 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8"
          },
          "text": "Det är diametern. Radien är hälften."
        }
      ]
    },
    {
      "id": "mla4-omkrets-d46ecb1b",
      "part": "omkrets",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har diametern 8 cm. Bestäm cirkelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "24 cm"
          ],
          "pi": "8π",
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Omkretsen är π gånger diametern: 8 · π ≈ 8 · 3 = 24 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16π"
          },
          "text": "8 cm är diametern. Omkretsen är π gånger diametern, inte 2π gånger."
        }
      ]
    },
    {
      "id": "mla4-omkrets-a5a671c2",
      "part": "omkrets",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har radien 5 cm. Bestäm cirkelns omkrets.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "30 cm"
          ],
          "pi": "10π",
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Diametern är 2 · 5 = 10 cm, och omkretsen är π gånger diametern: 10 · π ≈ 10 · 3 = 30 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "5π"
          },
          "text": "Omkretsen är π gånger diametern, inte radien: diametern är 10 cm."
        }
      ]
    },
    {
      "id": "mla4-area-583d8d17",
      "part": "area",
      "text": "Räkna med 3 som ett närmevärde på π. En halvcirkel har radien 6 cm. Bestäm halvcirkelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "54 cm²"
          ],
          "pi": "18π",
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
          "text": "Hela cirkeln har arean π · 6² = 36π. Halvcirkeln är hälften: 18π ≈ 18 · 3 = 54 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36π"
          },
          "text": "Det är hela cirkeln. Halvcirkeln är hälften."
        }
      ]
    },
    {
      "id": "mla4-area-354db450",
      "part": "area",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har diametern 12 cm. Bestäm cirkelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "108 cm²"
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
          "text": "Radien är hälften av diametern: 6 cm."
        },
        {
          "text": "Arean är π · 6² = 36π ≈ 36 · 3 = 108 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "144π"
          },
          "text": "12 cm är diametern. Arean är π · r² med radien 6 cm."
        }
      ]
    },
    {
      "id": "mla4-area-e577b2dc",
      "part": "area",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har radien 5 cm. Bestäm cirkelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "75 cm²"
          ],
          "pi": "25π",
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
          "text": "Arean är π · 5² = 25π ≈ 25 · 3 = 75 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "10π"
          },
          "text": "Det är omkretsen. Arean är π gånger radien i kvadrat."
        }
      ]
    },
    {
      "id": "mla4-area-6164a09e",
      "part": "area",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har radien 10 cm. Hur stor är arean av tre fjärdedelar av cirkeln?",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "225 cm²"
          ],
          "pi": "75π",
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
          "text": "Hela cirkeln har arean π · 10² = 100π. Tre fjärdedelar är 75π ≈ 75 · 3 = 225 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "100π"
          },
          "text": "Det är hela cirkeln. Ta tre fjärdedelar av den."
        }
      ]
    },
    {
      "id": "mla4-area-218faf07",
      "part": "area",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har radien 4 cm. Bestäm cirkelns area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "48 cm²"
          ],
          "pi": "16π",
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
          "text": "Arean är π gånger radien i kvadrat: π · 4² = 16π ≈ 16 · 3 = 48 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8π"
          },
          "text": "Radien i kvadrat är 4 · 4 = 16, inte 2 · 4."
        }
      ]
    },
    {
      "id": "mla4-area-731e10a0",
      "part": "area",
      "text": "Räkna med 3 som ett närmevärde på π. En kvarts cirkel har radien 4 cm. Bestäm dess area.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12 cm²"
          ],
          "pi": "4π",
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
          "text": "Hela cirkeln har arean π · 4² = 16π. En fjärdedel av den är 4π ≈ 4 · 3 = 12 cm²."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "16π"
          },
          "text": "Det är hela cirkeln. En kvarts cirkel är en fjärdedel av den."
        }
      ]
    },
    {
      "id": "mla4-baklanges-3dfd08a3",
      "part": "baklanges",
      "text": "Räkna med 3 som ett närmevärde på π. En halvcirkel har arean 24 cm². Bestäm omkretsen av hela cirkeln.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "24 cm"
          ],
          "range": {
            "ge": "24",
            "le": "24,6"
          },
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Hela cirkeln har dubbla arean: 2 · 24 = 48 cm². Med π ≈ 3 blir r² = 48 / 3 = 16, så r = 4 cm."
        },
        {
          "text": "Omkretsen är 2 · π · r ≈ 2 · 3 · 4 = 24 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "4"
          },
          "text": "Det är radien. Uppgiften frågar efter omkretsen."
        },
        {
          "answers": {
            "a": "12"
          },
          "text": "Det är π · r. Omkretsen är π gånger diametern, alltså 2 · π · r."
        }
      ]
    },
    {
      "id": "mla4-baklanges-db2ee3b2",
      "part": "baklanges",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har arean 300 cm². Bestäm cirkelns radie.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "10 cm"
          ],
          "range": {
            "ge": "9,7",
            "le": "10"
          },
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Arean är π · r². Med π ≈ 3 blir 3 · r² = 300, alltså r² = 300 / 3 = 100."
        },
        {
          "text": "Vilket tal gånger sig självt är 100? r = 10 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "100"
          },
          "text": "Det är r². Radien är det tal som gånger sig självt blir 100."
        }
      ]
    },
    {
      "id": "mla4-baklanges-f7434bde",
      "part": "baklanges",
      "text": "Räkna med 3 som ett närmevärde på π. En halvcirkel har arean 54 cm². Bestäm omkretsen av hela cirkeln.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "36 cm"
          ],
          "range": {
            "ge": "36",
            "le": "36,9"
          },
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Hela cirkeln har dubbla arean: 2 · 54 = 108 cm². Med π ≈ 3 blir r² = 108 / 3 = 36, så r = 6 cm."
        },
        {
          "text": "Omkretsen är 2 · π · r ≈ 2 · 3 · 6 = 36 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "6"
          },
          "text": "Det är radien. Uppgiften frågar efter omkretsen."
        },
        {
          "answers": {
            "a": "18"
          },
          "text": "Det är π · r. Omkretsen är π gånger diametern, alltså 2 · π · r."
        }
      ]
    },
    {
      "id": "mla4-baklanges-f470f861",
      "part": "baklanges",
      "text": "Räkna med 3 som ett närmevärde på π. En halvcirkel har arean 6 cm². Bestäm omkretsen av hela cirkeln.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "12 cm"
          ],
          "range": {
            "ge": "12",
            "le": "12,3"
          },
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Hela cirkeln har dubbla arean: 2 · 6 = 12 cm². Med π ≈ 3 blir r² = 12 / 3 = 4, så r = 2 cm."
        },
        {
          "text": "Omkretsen är 2 · π · r ≈ 2 · 3 · 2 = 12 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "2"
          },
          "text": "Det är radien. Uppgiften frågar efter omkretsen."
        },
        {
          "answers": {
            "a": "6"
          },
          "text": "Det är π · r. Omkretsen är π gånger diametern, alltså 2 · π · r."
        }
      ]
    },
    {
      "id": "mla4-baklanges-2ed0eb40",
      "part": "baklanges",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har arean 108 cm². Bestäm cirkelns radie.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "6 cm"
          ],
          "range": {
            "ge": "5,8",
            "le": "6"
          },
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Arean är π · r². Med π ≈ 3 blir 3 · r² = 108, alltså r² = 108 / 3 = 36."
        },
        {
          "text": "Vilket tal gånger sig självt är 36? r = 6 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "36"
          },
          "text": "Det är r². Radien är det tal som gånger sig självt blir 36."
        }
      ]
    },
    {
      "id": "mla4-baklanges-759b41df",
      "part": "baklanges",
      "text": "Räkna med 3 som ett närmevärde på π. En cirkel har arean 75 cm². Bestäm cirkelns radie.",
      "points": "each",
      "rows": [
        "Svar: [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5 cm"
          ],
          "range": {
            "ge": "4,8",
            "le": "5"
          },
          "units": {
            "mm": "1/10",
            "cm": "1",
            "dm": "10",
            "m": "100",
            "km": "100000",
            "mil": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Arean är π · r². Med π ≈ 3 blir 3 · r² = 75, alltså r² = 75 / 3 = 25."
        },
        {
          "text": "Vilket tal gånger sig självt är 25? r = 5 cm."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "25"
          },
          "text": "Det är r². Radien är det tal som gånger sig självt blir 25."
        }
      ]
    }
  ]
};
