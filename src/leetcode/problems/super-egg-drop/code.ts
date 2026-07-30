export const CODE = [
  "function superEggDrop(k, n) {", //                         0
  "  // dp[m][e] = floors coverable with m moves, e eggs", // 1
  "  const dp = [Array(k + 1).fill(0)];", //                  2
  "  let m = 0;", //                                          3
  "  while (dp[m][k] < n) {", //                              4
  "    m++;", //                                              5
  "    dp[m] = [0];", //                                      6
  "    for (let e = 1; e <= k; e++)", //                      7
  "      dp[m][e] = dp[m-1][e-1] + dp[m-1][e] + 1;", //       8
  "  }", //                                                   9
  "  return m;   // fewest moves", //                        10
  "}", //                                                    11
];
