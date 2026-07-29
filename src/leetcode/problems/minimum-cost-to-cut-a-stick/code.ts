export const CODE = [
  "function minCost(n, cuts) {", //                           0
  "  const p = [0, ...cuts.sort((a,b)=>a-b), n];", //         1
  "  const m = p.length;", //                                 2
  "  const dp = grid(m, m, 0);", //                           3
  "  for (let len = 2; len < m; len++) {", //                 4
  "    for (let i = 0; i + len < m; i++) {", //               5
  "      const j = i + len;", //                              6
  "      let best = Infinity;", //                            7
  "      for (let k = i + 1; k < j; k++)", //                 8
  "        best = Math.min(best,", //                         9
  "          dp[i][k] + dp[k][j] + p[j] - p[i]);", //        10
  "      dp[i][j] = best;", //                               11
  "    }", //                                                12
  "  }", //                                                  13
  "  return dp[0][m - 1];", //                               14
  "}", //                                                    15
];
