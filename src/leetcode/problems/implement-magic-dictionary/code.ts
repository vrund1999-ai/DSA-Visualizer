export const CODE = [
  "class MagicDictionary {", //                               0
  "  buildDict(words) { this.words = words; }", //            1
  "  search(word) {", //                                      2
  "    for (const w of this.words) {", //                     3
  "      if (w.length !== word.length) continue;", //         4
  "      let diff = 0;", //                                   5
  "      for (let i = 0; i < w.length; i++)", //              6
  "        if (w[i] !== word[i]) diff++;", //                 7
  "      if (diff === 1) return true;   // exactly one", //   8
  "    }", //                                                 9
  "    return false;", //                                    10
  "  }", //                                                  11
  "}", //                                                    12
];
