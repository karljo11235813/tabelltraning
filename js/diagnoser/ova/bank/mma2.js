// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till MMa2.
export default {
  "code": "MMa2",
  "parts": [
    {
      "id": "jamvikt",
      "title": "Väg upp med olika enheter",
      "labels": [
        "1a",
        "1b"
      ]
    },
    {
      "id": "heltal",
      "title": "Byt enhet, hela tal",
      "labels": [
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f"
      ]
    },
    {
      "id": "decimal",
      "title": "Byt enhet, decimaltal och bråk",
      "labels": [
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f"
      ]
    },
    {
      "id": "ger-decimal",
      "title": "Byt enhet, svaret är ett decimaltal",
      "labels": [
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f"
      ]
    }
  ],
  "tasks": [
    {
      "id": "mma2-jamvikt-ddc46bd7",
      "part": "jamvikt",
      "text": "Vågen ska väga jämnt. Hur många gram behöver du lägga till i den högra vågskålen?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "150"
          ],
          "units": {
            "mg": "1/1000",
            "g": "1",
            "hg": "100",
            "kg": "1000",
            "ton": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Gör om till gram: 5 hg = 500 g."
        },
        {
          "text": "Det som fattas i den högra skålen är skillnaden: 500 − 350 = 150 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "345"
          },
          "text": "Du räknade med talen utan att göra om dem till samma enhet. Gör om båda till gram först."
        }
      ],
      "figure": {
        "view": [
          420,
          215
        ],
        "pieces": [
          {
            "path": "M98 49L322 25L322 31L98 55Z"
          },
          {
            "path": "M206 46H214V190H206Z"
          },
          {
            "path": "M170 205Q210 180 250 205Z"
          },
          {
            "circle": [
              210,
              40,
              6
            ]
          },
          {
            "path": "M6 152H190Q98 187 6 152Z"
          },
          {
            "path": "M76 112H120V152H76Z"
          },
          {
            "path": "M230 128H414Q322 163 230 128Z"
          },
          {
            "path": "M312 92H332V128H312Z"
          }
        ],
        "lines": [
          "M98 55L11 152M98 55L185 152",
          "M322 31L235 128M322 31L409 128"
        ],
        "labels": [
          {
            "at": [
              98,
              197
            ],
            "text": "5 hg"
          },
          {
            "at": [
              322,
              173
            ],
            "text": "350 g"
          }
        ]
      }
    },
    {
      "id": "mma2-jamvikt-e9dde35e",
      "part": "jamvikt",
      "text": "Vågen ska väga jämnt. Hur många gram behöver du lägga till i den högra vågskålen?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "800"
          ],
          "units": {
            "mg": "1/1000",
            "g": "1",
            "hg": "100",
            "kg": "1000",
            "ton": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Gör om till gram: 2 kg = 2000 g."
        },
        {
          "text": "Det som fattas i den högra skålen är skillnaden: 2000 − 1200 = 800 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "1198"
          },
          "text": "Du räknade med talen utan att göra om dem till samma enhet. Gör om båda till gram först."
        }
      ],
      "figure": {
        "view": [
          420,
          215
        ],
        "pieces": [
          {
            "path": "M98 49L322 25L322 31L98 55Z"
          },
          {
            "path": "M206 46H214V190H206Z"
          },
          {
            "path": "M170 205Q210 180 250 205Z"
          },
          {
            "circle": [
              210,
              40,
              6
            ]
          },
          {
            "path": "M6 152H190Q98 187 6 152Z"
          },
          {
            "path": "M76 112H120V152H76Z"
          },
          {
            "path": "M230 128H414Q322 163 230 128Z"
          },
          {
            "path": "M312 92H332V128H312Z"
          }
        ],
        "lines": [
          "M98 55L11 152M98 55L185 152",
          "M322 31L235 128M322 31L409 128"
        ],
        "labels": [
          {
            "at": [
              98,
              197
            ],
            "text": "2 kg"
          },
          {
            "at": [
              322,
              173
            ],
            "text": "1200 g"
          }
        ]
      }
    },
    {
      "id": "mma2-jamvikt-113a4972",
      "part": "jamvikt",
      "text": "Vågen ska väga jämnt. Hur många gram behöver du lägga till i den högra vågskålen?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "50"
          ],
          "units": {
            "mg": "1/1000",
            "g": "1",
            "hg": "100",
            "kg": "1000",
            "ton": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Gör om till gram: 3 hg = 300 g."
        },
        {
          "text": "Det som fattas i den högra skålen är skillnaden: 300 − 250 = 50 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "247"
          },
          "text": "Du räknade med talen utan att göra om dem till samma enhet. Gör om båda till gram först."
        }
      ],
      "figure": {
        "view": [
          420,
          215
        ],
        "pieces": [
          {
            "path": "M98 49L322 25L322 31L98 55Z"
          },
          {
            "path": "M206 46H214V190H206Z"
          },
          {
            "path": "M170 205Q210 180 250 205Z"
          },
          {
            "circle": [
              210,
              40,
              6
            ]
          },
          {
            "path": "M6 152H190Q98 187 6 152Z"
          },
          {
            "path": "M76 112H120V152H76Z"
          },
          {
            "path": "M230 128H414Q322 163 230 128Z"
          },
          {
            "path": "M312 92H332V128H312Z"
          }
        ],
        "lines": [
          "M98 55L11 152M98 55L185 152",
          "M322 31L235 128M322 31L409 128"
        ],
        "labels": [
          {
            "at": [
              98,
              197
            ],
            "text": "3 hg"
          },
          {
            "at": [
              322,
              173
            ],
            "text": "250 g"
          }
        ]
      }
    },
    {
      "id": "mma2-jamvikt-0790ab7f",
      "part": "jamvikt",
      "text": "Vågen ska väga jämnt. Hur många gram behöver du lägga till i den högra vågskålen?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "500"
          ],
          "units": {
            "mg": "1/1000",
            "g": "1",
            "hg": "100",
            "kg": "1000",
            "ton": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Gör om till gram: 2 kg = 2000 g och 15 hg = 1500 g."
        },
        {
          "text": "Det som fattas i den högra skålen är skillnaden: 2000 − 1500 = 500 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "13"
          },
          "text": "Du räknade med talen utan att göra om dem till samma enhet. Gör om båda till gram först."
        }
      ],
      "figure": {
        "view": [
          420,
          215
        ],
        "pieces": [
          {
            "path": "M98 49L322 25L322 31L98 55Z"
          },
          {
            "path": "M206 46H214V190H206Z"
          },
          {
            "path": "M170 205Q210 180 250 205Z"
          },
          {
            "circle": [
              210,
              40,
              6
            ]
          },
          {
            "path": "M6 152H190Q98 187 6 152Z"
          },
          {
            "path": "M76 112H120V152H76Z"
          },
          {
            "path": "M230 128H414Q322 163 230 128Z"
          },
          {
            "path": "M312 92H332V128H312Z"
          }
        ],
        "lines": [
          "M98 55L11 152M98 55L185 152",
          "M322 31L235 128M322 31L409 128"
        ],
        "labels": [
          {
            "at": [
              98,
              197
            ],
            "text": "2 kg"
          },
          {
            "at": [
              322,
              173
            ],
            "text": "15 hg"
          }
        ]
      }
    },
    {
      "id": "mma2-jamvikt-38dc99de",
      "part": "jamvikt",
      "text": "Vågen ska väga jämnt. Hur många gram behöver du lägga till i den högra vågskålen?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "600"
          ],
          "units": {
            "mg": "1/1000",
            "g": "1",
            "hg": "100",
            "kg": "1000",
            "ton": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Gör om till gram: 1,5 kg = 1500 g och 9 hg = 900 g."
        },
        {
          "text": "Det som fattas i den högra skålen är skillnaden: 1500 − 900 = 600 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "7,5"
          },
          "text": "Du räknade med talen utan att göra om dem till samma enhet. Gör om båda till gram först."
        }
      ],
      "figure": {
        "view": [
          420,
          215
        ],
        "pieces": [
          {
            "path": "M98 49L322 25L322 31L98 55Z"
          },
          {
            "path": "M206 46H214V190H206Z"
          },
          {
            "path": "M170 205Q210 180 250 205Z"
          },
          {
            "circle": [
              210,
              40,
              6
            ]
          },
          {
            "path": "M6 152H190Q98 187 6 152Z"
          },
          {
            "path": "M76 112H120V152H76Z"
          },
          {
            "path": "M230 128H414Q322 163 230 128Z"
          },
          {
            "path": "M312 92H332V128H312Z"
          }
        ],
        "lines": [
          "M98 55L11 152M98 55L185 152",
          "M322 31L235 128M322 31L409 128"
        ],
        "labels": [
          {
            "at": [
              98,
              197
            ],
            "text": "1,5 kg"
          },
          {
            "at": [
              322,
              173
            ],
            "text": "9 hg"
          }
        ]
      }
    },
    {
      "id": "mma2-jamvikt-a4d09fa6",
      "part": "jamvikt",
      "text": "Vågen ska väga jämnt. Hur många gram behöver du lägga till i den högra vågskålen?",
      "points": "each",
      "rows": [
        "Svar: [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "400"
          ],
          "units": {
            "mg": "1/1000",
            "g": "1",
            "hg": "100",
            "kg": "1000",
            "ton": "1000000"
          }
        }
      },
      "solution": [
        {
          "text": "Gör om till gram: 1 kg = 1000 g."
        },
        {
          "text": "Det som fattas i den högra skålen är skillnaden: 1000 − 600 = 400 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "599"
          },
          "text": "Du räknade med talen utan att göra om dem till samma enhet. Gör om båda till gram först."
        }
      ],
      "figure": {
        "view": [
          420,
          215
        ],
        "pieces": [
          {
            "path": "M98 49L322 25L322 31L98 55Z"
          },
          {
            "path": "M206 46H214V190H206Z"
          },
          {
            "path": "M170 205Q210 180 250 205Z"
          },
          {
            "circle": [
              210,
              40,
              6
            ]
          },
          {
            "path": "M6 152H190Q98 187 6 152Z"
          },
          {
            "path": "M76 112H120V152H76Z"
          },
          {
            "path": "M230 128H414Q322 163 230 128Z"
          },
          {
            "path": "M312 92H332V128H312Z"
          }
        ],
        "lines": [
          "M98 55L11 152M98 55L185 152",
          "M322 31L235 128M322 31L409 128"
        ],
        "labels": [
          {
            "at": [
              98,
              197
            ],
            "text": "1 kg"
          },
          {
            "at": [
              322,
              173
            ],
            "text": "600 g"
          }
        ]
      }
    },
    {
      "id": "mma2-heltal-6ecfff32",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "12 hg = [a] g"
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
          "text": "1 hg är 100 g, så 12 hg är 12 · 100 = 1200 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,12"
          },
          "text": "Du räknade åt fel håll. g är en mindre enhet än hg, så det blir fler g."
        }
      ]
    },
    {
      "id": "mma2-heltal-97e6fdfd",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "9 kg = [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "9000"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg är 1000 g, så 9 kg är 9 · 1000 = 9000 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,009"
          },
          "text": "Du räknade åt fel håll. g är en mindre enhet än kg, så det blir fler g."
        }
      ]
    },
    {
      "id": "mma2-heltal-72db3a97",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "3 kg = [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "3000"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg är 1000 g, så 3 kg är 3 · 1000 = 3000 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,003"
          },
          "text": "Du räknade åt fel håll. g är en mindre enhet än kg, så det blir fler g."
        }
      ]
    },
    {
      "id": "mma2-heltal-73d96c67",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "7 kg = [a] hg"
      ],
      "boxes": {
        "a": {
          "accept": [
            "70"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg är 10 hg, så 7 kg är 7 · 10 = 70 hg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,7"
          },
          "text": "Du räknade åt fel håll. hg är en mindre enhet än kg, så det blir fler hg."
        }
      ]
    },
    {
      "id": "mma2-heltal-99be5551",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "5 ton = [a] kg"
      ],
      "boxes": {
        "a": {
          "accept": [
            "5000"
          ]
        }
      },
      "solution": [
        {
          "text": "1 ton är 1000 kg, så 5 ton är 5 · 1000 = 5000 kg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,005"
          },
          "text": "Du räknade åt fel håll. kg är en mindre enhet än ton, så det blir fler kg."
        }
      ]
    },
    {
      "id": "mma2-heltal-5fe470af",
      "part": "heltal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "6 hg = [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "600"
          ]
        }
      },
      "solution": [
        {
          "text": "1 hg är 100 g, så 6 hg är 6 · 100 = 600 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,06"
          },
          "text": "Du räknade åt fel håll. g är en mindre enhet än hg, så det blir fler g."
        }
      ]
    },
    {
      "id": "mma2-decimal-061128ca",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "0,2 kg = [a] g"
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
          "text": "1 kg är 1000 g, så 0,2 kg är 0,2 · 1000 = 200 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0002"
          },
          "text": "Du räknade åt fel håll. g är en mindre enhet än kg, så det blir fler g."
        }
      ]
    },
    {
      "id": "mma2-decimal-0c479965",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "{1|4} kg = [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "250"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg är 1000 g, så 1/4 kg är 1/4 · 1000 = 250 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,00025"
          },
          "text": "Du räknade åt fel håll. g är en mindre enhet än kg, så det blir fler g."
        }
      ]
    },
    {
      "id": "mma2-decimal-91784469",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "4,5 ton = [a] kg"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4500"
          ]
        }
      },
      "solution": [
        {
          "text": "1 ton är 1000 kg, så 4,5 ton är 4,5 · 1000 = 4500 kg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0045"
          },
          "text": "Du räknade åt fel håll. kg är en mindre enhet än ton, så det blir fler kg."
        }
      ]
    },
    {
      "id": "mma2-decimal-0ae60168",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "3,5 kg = [a] hg"
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
          "text": "1 kg är 10 hg, så 3,5 kg är 3,5 · 10 = 35 hg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,35"
          },
          "text": "Du räknade åt fel håll. hg är en mindre enhet än kg, så det blir fler hg."
        }
      ]
    },
    {
      "id": "mma2-decimal-b8aeaeec",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "7,5 kg = [a] hg"
      ],
      "boxes": {
        "a": {
          "accept": [
            "75"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg är 10 hg, så 7,5 kg är 7,5 · 10 = 75 hg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,75"
          },
          "text": "Du räknade åt fel håll. hg är en mindre enhet än kg, så det blir fler hg."
        }
      ]
    },
    {
      "id": "mma2-decimal-fc434824",
      "part": "decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "1,5 kg = [a] g"
      ],
      "boxes": {
        "a": {
          "accept": [
            "1500"
          ]
        }
      },
      "solution": [
        {
          "text": "1 kg är 1000 g, så 1,5 kg är 1,5 · 1000 = 1500 g."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,0015"
          },
          "text": "Du räknade åt fel håll. g är en mindre enhet än kg, så det blir fler g."
        }
      ]
    },
    {
      "id": "mma2-ger-decimal-e0cfb0a9",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "25 hg = [a] kg"
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
          "text": "10 hg är 1 kg, så 25 hg är 25 / 10 = 2,5 kg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "250"
          },
          "text": "Du räknade åt fel håll. kg är en större enhet än hg, så det blir färre kg."
        }
      ]
    },
    {
      "id": "mma2-ger-decimal-bfa87f9c",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "750 g = [a] kg"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,75"
          ]
        }
      },
      "solution": [
        {
          "text": "1000 g är 1 kg, så 750 g är 750 / 1000 = 0,75 kg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "750 000"
          },
          "text": "Du räknade åt fel håll. kg är en större enhet än g, så det blir färre kg."
        }
      ]
    },
    {
      "id": "mma2-ger-decimal-e9bfc56e",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "40 g = [a] kg"
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
          "text": "1000 g är 1 kg, så 40 g är 40 / 1000 = 0,04 kg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "40 000"
          },
          "text": "Du räknade åt fel håll. kg är en större enhet än g, så det blir färre kg."
        }
      ]
    },
    {
      "id": "mma2-ger-decimal-7a162342",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "600 kg = [a] ton"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,6"
          ]
        }
      },
      "solution": [
        {
          "text": "1000 kg är 1 ton, så 600 kg är 600 / 1000 = 0,6 ton."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "600 000"
          },
          "text": "Du räknade åt fel håll. ton är en större enhet än kg, så det blir färre ton."
        }
      ]
    },
    {
      "id": "mma2-ger-decimal-12cb1b7d",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "80 g = [a] hg"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,8"
          ]
        }
      },
      "solution": [
        {
          "text": "100 g är 1 hg, så 80 g är 80 / 100 = 0,8 hg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "8000"
          },
          "text": "Du räknade åt fel håll. hg är en större enhet än g, så det blir färre hg."
        }
      ]
    },
    {
      "id": "mma2-ger-decimal-cfc535d4",
      "part": "ger-decimal",
      "text": "Byt enhet.",
      "points": "each",
      "rows": [
        "450 g = [a] hg"
      ],
      "boxes": {
        "a": {
          "accept": [
            "4,5"
          ]
        }
      },
      "solution": [
        {
          "text": "100 g är 1 hg, så 450 g är 450 / 100 = 4,5 hg."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "45 000"
          },
          "text": "Du räknade åt fel håll. hg är en större enhet än g, så det blir färre hg."
        }
      ]
    }
  ]
};
