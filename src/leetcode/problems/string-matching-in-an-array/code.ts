export const CODE = [
  "function stringMatching(words) {", //                      0
  "  const res = [];", //                                     1
  "  for (let i = 0; i < words.length; i++) {", //            2
  "    for (let j = 0; j < words.length; j++) {", //          3
  "      if (i === j) continue;", //                          4
  "      if (words[j].includes(words[i])) {", //              5
  "        res.push(words[i]);   // substring found", //      6
  "        break;", //                                        7
  "      }", //                                               8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return res;", //                                        11
  "}", //                                                    12
];
