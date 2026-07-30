export const CODE = [
  "function longestPalindrome(words) {", //                   0
  "  const count = new Map();", //                            1
  "  for (const w of words)", //                              2
  "    count.set(w, (count.get(w) ?? 0) + 1);", //            3
  "  let length = 0, center = false;", //                     4
  "  for (const [w, c] of count) {", //                       5
  "    const rev = w[1] + w[0];", //                          6
  "    if (w[0] === w[1]) {", //                              7
  "      length += Math.floor(c / 2) * 4;   // pairs", //     8
  "      if (c % 2) center = true;   // odd -> center", //    9
  "    } else if (w[0] < w[1]) {", //                        10
  "      length += Math.min(c, count.get(rev) ?? 0) * 4;", //11
  "    }", //                                                12
  "  }", //                                                  13
  "  return length + (center ? 2 : 0);", //                  14
  "}", //                                                    15
];
