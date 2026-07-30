export const CODE = [
  "function strangePrinter(s) {", //                          0
  "  const n = s.length;", //                                 1
  "  const dp = grid(n, n, 0);", //                           2
  "  for (let i = 0; i < n; i++) dp[i][i] = 1;", //           3
  "  for (let len = 2; len <= n; len++)", //                  4
  "    for (let i = 0; i + len - 1 < n; i++) {", //           5
  "      const j = i + len - 1;", //                          6
  "      dp[i][j] = dp[i][j - 1] + 1;   // print s[j] alone", //7
  "      for (let k = i; k < j; k++)", //                     8
  "        if (s[k] === s[j])   // extend an earlier print", //9
  "          dp[i][j] = Math.min(dp[i][j],", //              10
  "            dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0));", //11
  "    }", //                                                12
  "  return dp[0][n - 1];", //                               13
  "}", //                                                    14
];
