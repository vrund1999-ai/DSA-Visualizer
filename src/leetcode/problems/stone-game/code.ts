export const CODE = [
  "function stoneGame(piles) {", //                           0
  "  const n = piles.length;", //                             1
  "  const dp = grid(n, n, 0);", //                           2
  "  for (let i = 0; i < n; i++) dp[i][i] = piles[i];", //    3
  "  for (let len = 2; len <= n; len++)", //                  4
  "    for (let i = 0; i + len - 1 < n; i++) {", //           5
  "      const j = i + len - 1;", //                          6
  "      dp[i][j] = Math.max(", //                            7
  "        piles[i] - dp[i + 1][j],   // take left", //       8
  "        piles[j] - dp[i][j - 1]);  // take right", //      9
  "    }", //                                                10
  "  return dp[0][n - 1] > 0;   // Alice ahead", //          11
  "}", //                                                    12
];
