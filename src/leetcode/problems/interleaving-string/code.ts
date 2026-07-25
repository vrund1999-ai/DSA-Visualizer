export const CODE = [
  "function isInterleave(s1, s2, s3) {", //                   0
  "  const m = s1.length, n = s2.length;", //                 1
  "  if (m + n !== s3.length) return false;", //             2
  "  const dp = grid(m + 1, n + 1, false);", //              3
  "  dp[0][0] = true;", //                                    4
  "  for (let i = 0; i <= m; i++) {", //                      5
  "    for (let j = 0; j <= n; j++) {", //                    6
  "      if (i && dp[i-1][j] && s1[i-1] === s3[i+j-1])", //   7
  "        dp[i][j] = true;   // take from s1", //            8
  "      if (j && dp[i][j-1] && s2[j-1] === s3[i+j-1])", //   9
  "        dp[i][j] = true;   // take from s2", //           10
  "    }", //                                                11
  "  }", //                                                  12
  "  return dp[m][n];", //                                   13
  "}", //                                                    14
];
