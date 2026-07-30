export const CODE = [
  "function longestDiverseString(a, b, c) {", //              0
  "  const res = [];", //                                     1
  "  const cnt = { a, b, c };", //                            2
  "  while (true) {", //                                      3
  "    // pick the most-available letter that", //            4
  "    // won't make three in a row", //                      5
  "    const order = ['a','b','c']", //                       6
  "      .sort((x, y) => cnt[y] - cnt[x]);", //               7
  "    let pick = null;", //                                  8
  "    for (const ch of order) {", //                         9
  "      if (cnt[ch] === 0) continue;", //                   10
  "      const n = res.length;", //                          11
  "      if (n >= 2 && res[n-1] === ch && res[n-2] === ch)", //12
  "        continue;   // would be a triple", //             13
  "      pick = ch; break;", //                              14
  "    }", //                                                15
  "    if (!pick) break;", //                                16
  "    res.push(pick); cnt[pick]--;", //                     17
  "  }", //                                                  18
  "  return res.join('');", //                               19
  "}", //                                                    20
];
