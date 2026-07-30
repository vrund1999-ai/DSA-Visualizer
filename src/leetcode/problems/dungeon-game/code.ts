export const CODE = [
  "function calculateMinimumHP(d) {", //                      0
  "  const R = d.length, C = d[0].length;", //                1
  "  const dp = grid(R + 1, C + 1, Infinity);", //            2
  "  dp[R][C - 1] = dp[R - 1][C] = 1;", //                    3
  "  for (let i = R - 1; i >= 0; i--)", //                    4
  "    for (let j = C - 1; j >= 0; j--) {", //                5
  "      const need = Math.min(dp[i + 1][j], dp[i][j + 1])", //6
  "                 - d[i][j];", //                           7
  "      dp[i][j] = Math.max(1, need);   // stay alive", //   8
  "    }", //                                                 9
  "  return dp[0][0];", //                                   10
  "}", //                                                    11
];
