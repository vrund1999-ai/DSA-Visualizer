export const CODE = [
  "function countSquares(matrix) {", //                       0
  "  const R = matrix.length, C = matrix[0].length;", //      1
  "  const dp = grid(R, C, 0);", //                           2
  "  let total = 0;", //                                      3
  "  for (let i = 0; i < R; i++)", //                         4
  "    for (let j = 0; j < C; j++) {", //                     5
  "      if (matrix[i][j] === 0) continue;", //               6
  "      dp[i][j] = (i && j)", //                             7
  "        ? Math.min(dp[i-1][j], dp[i][j-1],", //            8
  "                   dp[i-1][j-1]) + 1", //                  9
  "        : 1;   // edge cell -> square of 1", //           10
  "      total += dp[i][j];   // squares ending here", //    11
  "    }", //                                                12
  "  return total;", //                                      13
  "}", //                                                    14
];
