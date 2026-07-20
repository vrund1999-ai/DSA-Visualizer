/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const LCS_CODE = [
  "// row 0 and col 0 are all zeros", //           0
  "for (let i = 1; i <= m; i++)", //               1
  "  for (let j = 1; j <= n; j++)", //             2
  "    if (a[i-1] === b[j-1])", //                 3
  "      dp[i][j] = dp[i-1][j-1] + 1;", //         4
  "    else", //                                   5
  "      dp[i][j] = max(dp[i-1][j], dp[i][j-1]);",//6
  "return dp[m][n];", //                           7
];
