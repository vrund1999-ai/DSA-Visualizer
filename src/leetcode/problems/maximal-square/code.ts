export const CODE = [
  "function maximalSquare(matrix) {", //                      0
  "  const R = matrix.length, C = matrix[0].length;", //      1
  "  const dp = grid(R + 1, C + 1, 0);", //                   2
  "  let best = 0;", //                                        3
  "  for (let i = 1; i <= R; i++)", //                         4
  "    for (let j = 1; j <= C; j++) {", //                     5
  "      if (matrix[i-1][j-1] !== '1') continue;", //          6
  "      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1],", //      7
  "                          dp[i-1][j-1]) + 1;", //          8
  "      best = Math.max(best, dp[i][j]);", //                9
  "    }", //                                                 10
  "  return best * best;   // area", //                       11
  "}", //                                                     12
];
