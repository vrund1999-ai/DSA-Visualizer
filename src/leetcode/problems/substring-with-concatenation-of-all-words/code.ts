export const CODE = [
  "function findSubstring(s, words) {", //                    0
  "  const w = words[0].length, total = w * words.length;", //1
  "  const need = tally(words);   // word -> count", //       2
  "  const res = [];", //                                     3
  "  for (let i = 0; i + total <= s.length; i++) {", //       4
  "    const seen = new Map();", //                           5
  "    let j = 0;", //                                        6
  "    for (; j < words.length; j++) {", //                   7
  "      const word = s.substr(i + j * w, w);", //            8
  "      if (!need.has(word)) break;", //                     9
  "      seen.set(word, (seen.get(word) ?? 0) + 1);", //     10
  "      if (seen.get(word) > need.get(word)) break;", //    11
  "    }", //                                                12
  "    if (j === words.length) res.push(i);   // match", //  13
  "  }", //                                                  14
  "  return res;", //                                        15
  "}", //                                                    16
];
