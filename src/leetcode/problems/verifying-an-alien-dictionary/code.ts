export const CODE = [
  "function isAlienSorted(words, order) {", //                0
  "  const rank = {};", //                                    1
  "  [...order].forEach((ch, i) => rank[ch] = i);", //        2
  "  for (let w = 0; w + 1 < words.length; w++) {", //        3
  "    const a = words[w], b = words[w + 1];", //             4
  "    let i = 0;", //                                        5
  "    while (i < a.length && i < b.length) {", //            6
  "      if (a[i] !== b[i]) {", //                            7
  "        if (rank[a[i]] > rank[b[i]]) return false;", //    8
  "        break;   // a < b at this char, OK", //            9
  "      }", //                                              10
  "      i++;", //                                           11
  "    }", //                                                12
  "    if (i === b.length && a.length > b.length)", //       13
  "      return false;   // prefix longer than word", //     14
  "  }", //                                                  15
  "  return true;", //                                       16
  "}", //                                                    17
];
