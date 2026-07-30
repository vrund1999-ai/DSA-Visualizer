export const CODE = [
  "function findMaxForm(strs, m, n) {", //                    0
  "  const dp = grid(m + 1, n + 1, 0);", //                   1
  "  for (const s of strs) {", //                             2
  "    const zeros = count(s, '0');", //                      3
  "    const ones  = s.length - zeros;", //                   4
  "    for (let i = m; i >= zeros; i--)", //                  5
  "      for (let j = n; j >= ones; j--)", //                 6
  "        dp[i][j] = Math.max(", //                          7
  "          dp[i][j],", //                                   8
  "          dp[i - zeros][j - ones] + 1);   // take s", //   9
  "  }", //                                                  10
  "  return dp[m][n];", //                                   11
  "}", //                                                    12
];
