export const CODE = [
  "function isMatch(s, p) {", //                              0
  "  const m = s.length, n = p.length;", //                  1
  "  const dp = grid(m + 1, n + 1, false);", //              2
  "  dp[0][0] = true;   // empty matches empty", //          3
  "  for (let j = 1; j <= n; j++)", //                       4
  "    if (p[j-1] === '*') dp[0][j] = dp[0][j-2];", //       5
  "  for (let i = 1; i <= m; i++) {", //                     6
  "    for (let j = 1; j <= n; j++) {", //                   7
  "      if (p[j-1] === '*') {", //                          8
  "        dp[i][j] = dp[i][j-2] ||   // zero copies", //    9
  "          (match(s[i-1], p[j-2]) && dp[i-1][j]);", //     10
  "      } else {", //                                       11
  "        dp[i][j] = match(s[i-1], p[j-1]) && dp[i-1][j-1];", // 12
  "      }", //                                              13
  "    }", //                                                14
  "  }", //                                                  15
  "  return dp[m][n];", //                                   16
  "}", //                                                    17
];
