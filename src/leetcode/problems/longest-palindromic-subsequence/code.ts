export const CODE = [
  "function longestPalindromeSubseq(s) {", //                 0
  "  const n = s.length;", //                                 1
  "  const dp = grid(n, n, 0);", //                           2
  "  for (let i = n - 1; i >= 0; i--) {", //                  3
  "    dp[i][i] = 1;   // single char", //                    4
  "    for (let j = i + 1; j < n; j++) {", //                 5
  "      if (s[i] === s[j])", //                              6
  "        dp[i][j] = dp[i + 1][j - 1] + 2;", //              7
  "      else", //                                            8
  "        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);", //  9
  "    }", //                                                10
  "  }", //                                                  11
  "  return dp[0][n - 1];", //                               12
  "}", //                                                    13
];
