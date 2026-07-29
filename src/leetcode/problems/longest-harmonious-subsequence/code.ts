export const CODE = [
  "function findLHS(nums) {", //                              0
  "  const count = new Map();", //                            1
  "  for (const n of nums)", //                              2
  "    count.set(n, (count.get(n) ?? 0) + 1);", //           3
  "  let best = 0;", //                                       4
  "  for (const [v, c] of count) {", //                      5
  "    if (count.has(v + 1))   // need consecutive value", // 6
  "      best = Math.max(best, c + count.get(v + 1));", //    7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                    10
];
