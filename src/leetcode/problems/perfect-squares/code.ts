export const CODE = [
  "function numSquares(n) {", //                              0
  "  const dp = new Array(n + 1).fill(Infinity);", //         1
  "  dp[0] = 0;", //                                          2
  "  for (let i = 1; i <= n; i++) {", //                      3
  "    for (let j = 1; j * j <= i; j++) {", //                4
  "      dp[i] = Math.min(dp[i], dp[i - j*j] + 1);", //       5
  "    }", //                                                 6
  "  }", //                                                   7
  "  return dp[n];", //                                       8
  "}", //                                                     9
];
