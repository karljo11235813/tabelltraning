// Genererad av tools/diagnoser/build-ova.mjs. Ändra inte för hand: ändra mallen och kör skriptet.
// Övningar till TAt3.
export default {
  "code": "TAt3",
  "parts": [
    {
      "id": "kant-fakta",
      "title": "Använd det du vet",
      "labels": [
        "1a",
        "1b",
        "1c",
        "1d",
        "2a",
        "2b",
        "2c",
        "2d"
      ]
    },
    {
      "id": "jamnt-udda",
      "title": "Jämnt eller udda",
      "labels": [
        "3a",
        "3b",
        "3c",
        "4a",
        "4b",
        "4c",
        "5a",
        "5b",
        "5c"
      ]
    },
    {
      "id": "generalisera",
      "title": "Använd ett mönster",
      "labels": [
        "6a",
        "6b"
      ]
    }
  ],
  "tasks": [
    {
      "id": "tat3-kant-fakta-e5c40dc5",
      "part": "kant-fakta",
      "text": "Du vet att 8 − 3 = 5. Då är",
      "points": "each",
      "rows": [
        "800 - 300 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "500"
          ]
        }
      },
      "solution": [
        {
          "text": "800 är 8 hundratal och 300 är 3 hundratal: 5 hundratal."
        },
        {
          "math": "800 - 300 = 500"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "50"
          },
          "text": "Det är hundratal: 8 hundratal − 3 hundratal = 5 hundratal = 500."
        }
      ]
    },
    {
      "id": "tat3-kant-fakta-a9818bdb",
      "part": "kant-fakta",
      "text": "Du vet att 7 − 4 = 3. Då är",
      "points": "each",
      "rows": [
        "70 - 40 = [a]"
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
          "text": "70 är 7 tiotal och 40 är 4 tiotal: 3 tiotal."
        },
        {
          "math": "70 - 40 = 30"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "3"
          },
          "text": "Det är tiotal: 7 tiotal − 4 tiotal = 3 tiotal = 30."
        }
      ]
    },
    {
      "id": "tat3-kant-fakta-745118ef",
      "part": "kant-fakta",
      "text": "Du vet att 8 − 3 = 5. Då är",
      "points": "each",
      "rows": [
        "48 - 3 = [a]"
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
          "text": "8 − 3 = 5, och 3 dras från entalen: 48 − 3 = 45."
        },
        {
          "math": "48 - 3 = 45"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "18"
          },
          "text": "3 är ental, så det dras från entalen 8, inte från tiotalen."
        }
      ]
    },
    {
      "id": "tat3-kant-fakta-db0fd01d",
      "part": "kant-fakta",
      "text": "Du vet att 6 + 3 = 9. Då är",
      "points": "each",
      "rows": [
        "600 + 300 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "900"
          ]
        }
      },
      "solution": [
        {
          "text": "600 är 6 hundratal och 300 är 3 hundratal: 9 hundratal."
        },
        {
          "math": "600 + 300 = 900"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "90"
          },
          "text": "Det är hundratal: 6 hundratal + 3 hundratal = 9 hundratal = 900."
        }
      ]
    },
    {
      "id": "tat3-kant-fakta-f58cf2c1",
      "part": "kant-fakta",
      "text": "Du vet att 7 − 4 = 3. Då är",
      "points": "each",
      "rows": [
        "67 - 4 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "63"
          ]
        }
      },
      "solution": [
        {
          "text": "7 − 4 = 3, och 4 dras från entalen: 67 − 4 = 63."
        },
        {
          "math": "67 - 4 = 63"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "27"
          },
          "text": "4 är ental, så det dras från entalen 7, inte från tiotalen."
        }
      ]
    },
    {
      "id": "tat3-kant-fakta-4ee38499",
      "part": "kant-fakta",
      "text": "Du vet att 4 + 5 = 9. Då är",
      "points": "each",
      "rows": [
        "40 + 50 = [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "90"
          ]
        }
      },
      "solution": [
        {
          "text": "40 är 4 tiotal och 50 är 5 tiotal: 9 tiotal."
        },
        {
          "math": "40 + 50 = 90"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "9"
          },
          "text": "Det är tiotal: 4 tiotal + 5 tiotal = 9 tiotal = 90."
        }
      ]
    },
    {
      "id": "tat3-jamnt-udda-8eeab47e",
      "part": "jamnt-udda",
      "kind": "pick",
      "text": "Ger den här multiplikationen ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      "items": [
        {
          "id": "u",
          "markup": "26 · 7 ger ett udda tal"
        },
        {
          "id": "j",
          "markup": "26 · 7 ger ett jämnt tal"
        }
      ],
      "accept": [
        "j"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Ett jämnt tal gånger vilket heltal som helst är jämnt: 26 = 2 · 13, så 26 · 7 är 2 gånger ett heltal."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "u": "1",
            "j": ""
          },
          "text": "Ett jämnt tal gånger vilket heltal som helst är jämnt: 26 = 2 · 13, så 26 · 7 är 2 gånger ett heltal."
        }
      ]
    },
    {
      "id": "tat3-jamnt-udda-d70fdcc2",
      "part": "jamnt-udda",
      "kind": "pick",
      "text": "Ger den här subtraktionen ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      "items": [
        {
          "id": "u",
          "markup": "71 - 33 ger ett udda tal"
        },
        {
          "id": "j",
          "markup": "71 - 33 ger ett jämnt tal"
        }
      ],
      "accept": [
        "j"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Båda talen är udda. De har var sitt ental som blir över när man parar ihop, och de två bildar ett par: differensen är jämn."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "u": "1",
            "j": ""
          },
          "text": "Båda talen är udda. De har var sitt ental som blir över när man parar ihop, och de två bildar ett par: differensen är jämn."
        }
      ]
    },
    {
      "id": "tat3-jamnt-udda-446a1824",
      "part": "jamnt-udda",
      "kind": "pick",
      "text": "Ger den här additionen ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      "items": [
        {
          "id": "u",
          "markup": "27 + 14 ger ett udda tal"
        },
        {
          "id": "j",
          "markup": "27 + 14 ger ett jämnt tal"
        }
      ],
      "accept": [
        "u"
      ],
      "points": "one",
      "solution": [
        {
          "text": "27 är udda och 14 är jämnt. Bara det ena har ett ental som blir över, så summan är udda."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "u": "",
            "j": "1"
          },
          "text": "27 är udda och 14 är jämnt. Bara det ena har ett ental som blir över, så summan är udda."
        }
      ]
    },
    {
      "id": "tat3-jamnt-udda-aea268b4",
      "part": "jamnt-udda",
      "kind": "pick",
      "text": "Ger den här additionen ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      "items": [
        {
          "id": "u",
          "markup": "53 + 39 ger ett udda tal"
        },
        {
          "id": "j",
          "markup": "53 + 39 ger ett jämnt tal"
        }
      ],
      "accept": [
        "j"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Båda talen är udda. De har var sitt ental som blir över när man parar ihop, och de två bildar ett par: summan är jämn."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "u": "1",
            "j": ""
          },
          "text": "Båda talen är udda. De har var sitt ental som blir över när man parar ihop, och de två bildar ett par: summan är jämn."
        }
      ]
    },
    {
      "id": "tat3-jamnt-udda-c1488f48",
      "part": "jamnt-udda",
      "kind": "pick",
      "text": "Ger den här subtraktionen ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      "items": [
        {
          "id": "u",
          "markup": "84 - 25 ger ett udda tal"
        },
        {
          "id": "j",
          "markup": "84 - 25 ger ett jämnt tal"
        }
      ],
      "accept": [
        "u"
      ],
      "points": "one",
      "solution": [
        {
          "text": "84 är jämnt och 25 är udda. Bara det ena har ett ental som blir över, så differensen är udda."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "u": "",
            "j": "1"
          },
          "text": "84 är jämnt och 25 är udda. Bara det ena har ett ental som blir över, så differensen är udda."
        }
      ]
    },
    {
      "id": "tat3-jamnt-udda-4d58a96a",
      "part": "jamnt-udda",
      "kind": "pick",
      "text": "Ger den här multiplikationen ett jämnt eller ett udda svar? Välj rätt alternativ. (Räkna inte ut svaret!)",
      "items": [
        {
          "id": "u",
          "markup": "13 · 15 ger ett udda tal"
        },
        {
          "id": "j",
          "markup": "13 · 15 ger ett jämnt tal"
        }
      ],
      "accept": [
        "u"
      ],
      "points": "one",
      "solution": [
        {
          "text": "Båda talen är udda, och udda gånger udda är udda: inget av talen har en faktor 2."
        }
      ],
      "mistakes": [
        {
          "answers": {
            "u": "",
            "j": "1"
          },
          "text": "Båda talen är udda, och udda gånger udda är udda: inget av talen har en faktor 2."
        }
      ]
    },
    {
      "id": "tat3-generalisera-90909bcd",
      "part": "generalisera",
      "text": "Om du vet att 1/11 ≈ 0,090909 och att 2/11 = 2 · 1/11 ≈ 0,181818. Hur kan man då skriva det här bråket i decimalform?",
      "points": "each",
      "rows": [
        "{7|11} ≈ [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,636363",
            "0,6363",
            "0,63636363",
            "0,636364"
          ]
        }
      },
      "solution": [
        {
          "text": "7/11 = 7 · 1/11, så det är 7 gånger 0,090909: 0,636363."
        },
        {
          "math": "{7|11} ≈ 0,636363"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,7"
          },
          "text": "7/11 är inte 0,7. Det är 7 gånger 1/11: 0,636363."
        }
      ]
    },
    {
      "id": "tat3-generalisera-5cbe4ead",
      "part": "generalisera",
      "text": "Om du vet att 1/99 ≈ 0,010101 och att 2/99 = 2 · 1/99 ≈ 0,020202. Hur kan man då skriva det här bråket i decimalform?",
      "points": "each",
      "rows": [
        "{47|99} ≈ [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,474747",
            "0,4747",
            "0,47474747"
          ]
        }
      },
      "solution": [
        {
          "text": "47/99 = 47 · 1/99, så det är 47 gånger 0,010101: 0,474747."
        },
        {
          "math": "{47|99} ≈ 0,474747"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,47"
          },
          "text": "47/99 är inte 0,47. Det är 47 gånger 1/99: 0,474747."
        }
      ]
    },
    {
      "id": "tat3-generalisera-906c6437",
      "part": "generalisera",
      "text": "Om du vet att 1/9 ≈ 0,111111 och att 2/9 = 2 · 1/9 ≈ 0,222222. Hur kan man då skriva det här bråket i decimalform?",
      "points": "each",
      "rows": [
        "{8|9} ≈ [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,888888",
            "0,8888",
            "0,88888888",
            "0,888",
            "0,88888",
            "0,8888888",
            "0,888889"
          ]
        }
      },
      "solution": [
        {
          "text": "8/9 = 8 · 1/9, så det är 8 gånger 0,111111: 0,888888."
        },
        {
          "math": "{8|9} ≈ 0,888888"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,8"
          },
          "text": "8/9 är inte 0,8. Det är 8 gånger 1/9: 0,888888."
        }
      ]
    },
    {
      "id": "tat3-generalisera-11a19de3",
      "part": "generalisera",
      "text": "Om du vet att 1/99 ≈ 0,010101 och att 2/99 = 2 · 1/99 ≈ 0,020202. Hur kan man då skriva det här bråket i decimalform?",
      "points": "each",
      "rows": [
        "{23|99} ≈ [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,232323",
            "0,2323",
            "0,23232323"
          ]
        }
      },
      "solution": [
        {
          "text": "23/99 = 23 · 1/99, så det är 23 gånger 0,010101: 0,232323."
        },
        {
          "math": "{23|99} ≈ 0,232323"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,23"
          },
          "text": "23/99 är inte 0,23. Det är 23 gånger 1/99: 0,232323."
        }
      ]
    },
    {
      "id": "tat3-generalisera-d509c074",
      "part": "generalisera",
      "text": "Om du vet att 1/11 ≈ 0,090909 och att 2/11 = 2 · 1/11 ≈ 0,181818. Hur kan man då skriva det här bråket i decimalform?",
      "points": "each",
      "rows": [
        "{4|11} ≈ [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,363636",
            "0,3636",
            "0,36363636"
          ]
        }
      },
      "solution": [
        {
          "text": "4/11 = 4 · 1/11, så det är 4 gånger 0,090909: 0,363636."
        },
        {
          "math": "{4|11} ≈ 0,363636"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,4"
          },
          "text": "4/11 är inte 0,4. Det är 4 gånger 1/11: 0,363636."
        }
      ]
    },
    {
      "id": "tat3-generalisera-5a3da962",
      "part": "generalisera",
      "text": "Om du vet att 1/9 ≈ 0,111111 och att 2/9 = 2 · 1/9 ≈ 0,222222. Hur kan man då skriva det här bråket i decimalform?",
      "points": "each",
      "rows": [
        "{5|9} ≈ [a]"
      ],
      "boxes": {
        "a": {
          "accept": [
            "0,555555",
            "0,5555",
            "0,55555555",
            "0,555",
            "0,55555",
            "0,5555555"
          ]
        }
      },
      "solution": [
        {
          "text": "5/9 = 5 · 1/9, så det är 5 gånger 0,111111: 0,555555."
        },
        {
          "math": "{5|9} ≈ 0,555555"
        }
      ],
      "mistakes": [
        {
          "answers": {
            "a": "0,5"
          },
          "text": "5/9 är inte 0,5. Det är 5 gånger 1/9: 0,555555."
        }
      ]
    }
  ]
};
