export const CODE = [
  "function longestCommonSubsequence(a, b) {", //             0
  "  const m = a.length, n = b.length;", //                   1
  "  const dp = grid(m + 1, n + 1, 0);", //                   2
  "  for (let i = 1; i <= m; i++) {", //                      3
  "    for (let j = 1; j <= n; j++) {", //                    4
  "      if (a[i-1] === b[j-1])", //                          5
  "        dp[i][j] = dp[i-1][j-1] + 1;   // extend", //      6
  "      else", //                                            7
  "        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);", //  8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return dp[m][n];", //                                   11
  "}", //                                                    12
];
