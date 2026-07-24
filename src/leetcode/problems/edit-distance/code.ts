export const CODE = [
  "function minDistance(a, b) {", //                             0
  "  const m = a.length, n = b.length;", //                     1
  "  const dp = grid(m + 1, n + 1);", //                        2
  "  for (let i = 0; i <= m; i++) dp[i][0] = i;   // deletes",// 3
  "  for (let j = 0; j <= n; j++) dp[0][j] = j;   // inserts",// 4
  "  for (let i = 1; i <= m; i++)", //                          5
  "    for (let j = 1; j <= n; j++)", //                        6
  "      dp[i][j] = a[i-1] === b[j-1]", //                      7
  "        ? dp[i-1][j-1]                    // match", //       8
  "        : 1 + Math.min(dp[i-1][j-1],      // replace", //     9
  "               dp[i-1][j], dp[i][j-1]);   // del / ins", //  10
  "  return dp[m][n];", //                                      11
  "}", //                                                       12
];
