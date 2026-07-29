export const CODE = [
  "function maxCoins(nums) {", //                             0
  "  const a = [1, ...nums, 1];   // padded ends", //         1
  "  const n = a.length;", //                                 2
  "  const dp = grid(n, n, 0);", //                           3
  "  for (let len = 2; len < n; len++) {", //                 4
  "    for (let i = 0; i + len < n; i++) {", //               5
  "      const j = i + len;", //                              6
  "      for (let k = i + 1; k < j; k++) {   // last burst", // 7
  "        const coins = a[i]*a[k]*a[j]", //                  8
  "          + dp[i][k] + dp[k][j];", //                      9
  "        dp[i][j] = Math.max(dp[i][j], coins);", //        10
  "      }", //                                              11
  "    }", //                                                12
  "  }", //                                                  13
  "  return dp[0][n - 1];", //                               14
  "}", //                                                    15
];
