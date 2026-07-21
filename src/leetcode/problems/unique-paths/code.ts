export const CODE = [
  "function uniquePaths(m, n) {", //                                    0
  "  const dp = Array.from({length: m}, () => Array(n).fill(1));", //   1
  "  for (let r = 1; r < m; r++)", //                                  2
  "    for (let c = 1; c < n; c++)", //                                3
  "      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];", //                  4
  "  return dp[m - 1][n - 1];", //                                     5
  "}", //                                                              6
];
