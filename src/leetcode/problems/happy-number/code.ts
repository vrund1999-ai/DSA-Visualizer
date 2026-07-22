export const CODE = [
  "function isHappy(n) {", //                              0
  "  const seen = new Set();", //                          1
  "  while (n !== 1 && !seen.has(n)) {", //                2
  "    seen.add(n);", //                                   3
  "    n = String(n).split('')", //                        4
  "      .reduce((s, d) => s + d * d, 0);", //             5
  "  }", //                                                6
  "  return n === 1;", //                                  7
  "}", //                                                  8
];
