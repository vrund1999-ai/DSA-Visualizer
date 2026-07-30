export const CODE = [
  "function getMoneyAmount(n) {", //                          0
  "  const dp = Array.from({length: n+2},", //               1
  "    () => Array(n+2).fill(0));", //                        2
  "  for (let len = 2; len <= n; len++) {", //               3
  "    for (let i = 1; i + len - 1 <= n; i++) {", //         4
  "      const j = i + len - 1;", //                         5
  "      dp[i][j] = Infinity;", //                           6
  "      for (let k = i; k <= j; k++) {", //                 7
  "        const cost = k +", //                             8
  "          Math.max(dp[i][k-1], dp[k+1][j]);", //          9
  "        dp[i][j] = Math.min(dp[i][j], cost);", //         10
  "      }", //                                              11
  "    }", //                                                12
  "  }", //                                                  13
  "  return dp[1][n];", //                                   14
  "}", //                                                    15
];
