/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const EDIT_DISTANCE_CODE = [
  "// dp[i][0] = i, dp[0][j] = j", //                      0
  "for (let i = 1; i <= m; i++)", //                       1
  "  for (let j = 1; j <= n; j++)", //                     2
  "    if (a[i-1] === b[j-1])", //                         3
  "      dp[i][j] = dp[i-1][j-1];", //                     4
  "    else dp[i][j] = 1 + min(dp[i-1][j],", //            5
  "                    dp[i][j-1], dp[i-1][j-1]);", //     6
  "return dp[m][n];", //                                   7
];
