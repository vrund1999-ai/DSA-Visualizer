export const CODE = [
  "function isMatch(s, p) {", //                              0
  "  const m = s.length, n = p.length;", //                  1
  "  const dp = grid(m + 1, n + 1, false);", //              2
  "  dp[0][0] = true;", //                                   3
  "  for (let j = 1; j <= n; j++)", //                       4
  "    if (p[j-1] === '*') dp[0][j] = dp[0][j-1];", //       5
  "  for (let i = 1; i <= m; i++) {", //                     6
  "    for (let j = 1; j <= n; j++) {", //                   7
  "      if (p[j-1] === '*') {", //                          8
  "        dp[i][j] = dp[i-1][j] ||   // '*' eats s[i-1]", //9
  "                  dp[i][j-1];      // '*' is empty", //   10
  "      } else if (p[j-1] === '?' || p[j-1] === s[i-1]) {",//11
  "        dp[i][j] = dp[i-1][j-1];", //                     12
  "      }", //                                              13
  "    }", //                                                14
  "  }", //                                                  15
  "  return dp[m][n];", //                                   16
  "}", //                                                    17
];
