export const CODE = [
  "function numDistinct(s, t) {", //                          0
  "  const m = s.length, n = t.length;", //                   1
  "  const dp = grid(m + 1, n + 1, 0);", //                   2
  "  for (let i = 0; i <= m; i++) dp[i][0] = 1;  // empty t", // 3
  "  for (let i = 1; i <= m; i++) {", //                      4
  "    for (let j = 1; j <= n; j++) {", //                    5
  "      dp[i][j] = dp[i - 1][j];        // skip s[i-1]", //  6
  "      if (s[i - 1] === t[j - 1])", //                      7
  "        dp[i][j] += dp[i - 1][j - 1]; // use s[i-1]", //   8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return dp[m][n];", //                                   11
  "}", //                                                    12
];
