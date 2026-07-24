export const CODE = [
  "function lexicalOrder(n) {", //                            0
  "  const res = [];", //                                     1
  "  let cur = 1;", //                                        2
  "  for (let i = 0; i < n; i++) {", //                       3
  "    res.push(cur);", //                                    4
  "    if (cur * 10 <= n) {", //                              5
  "      cur *= 10;             // go deeper (append 0)", //  6
  "    } else {", //                                          7
  "      while (cur % 10 === 9 || cur + 1 > n) cur =", //     8
  "        Math.floor(cur / 10);   // climb up", //          9
  "      cur += 1;              // next sibling", //          10
  "    }", //                                                 11
  "  }", //                                                   12
  "  return res;", //                                         13
  "}", //                                                     14
];
