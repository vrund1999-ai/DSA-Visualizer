export const CODE = [
  "function longestStrChain(words) {", //                     0
  "  words.sort((a, b) => a.length - b.length);", //          1
  "  const dp = new Map();   // word -> chain length", //     2
  "  let best = 1;", //                                       3
  "  for (const w of words) {", //                            4
  "    let len = 1;", //                                      5
  "    for (let i = 0; i < w.length; i++) {", //              6
  "      const prev = w.slice(0, i) + w.slice(i + 1);", //    7
  "      if (dp.has(prev))", //                               8
  "        len = Math.max(len, dp.get(prev) + 1);", //        9
  "    }", //                                                10
  "    dp.set(w, len);", //                                  11
  "    best = Math.max(best, len);", //                      12
  "  }", //                                                  13
  "  return best;", //                                       14
  "}", //                                                    15
];
