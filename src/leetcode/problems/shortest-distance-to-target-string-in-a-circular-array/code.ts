export const CODE = [
  "function closetTarget(words, target, startIndex) {", //    0
  "  const n = words.length;", //                             1
  "  let best = Infinity;", //                                2
  "  for (let i = 0; i < n; i++) {", //                       3
  "    if (words[i] === target) {", //                        4
  "      const d = Math.abs(i - startIndex);", //             5
  "      best = Math.min(best, d, n - d);   // both ways", // 6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return best === Infinity ? -1 : best;", //               9
  "}", //                                                    10
];
