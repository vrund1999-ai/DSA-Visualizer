export const CODE = [
  "function minPathSum(grid) {", //                          0
  "  const m = grid.length, n = grid[0].length;", //        1
  "  const dp = grid.map(row => [...row]);", //             2
  "  for (let r = 0; r < m; r++)", //                       3
  "    for (let c = 0; c < n; c++) {", //                   4
  "      if (r === 0 && c === 0) continue;", //             5
  "      const up = r ? dp[r-1][c] : Infinity;", //         6
  "      const left = c ? dp[r][c-1] : Infinity;", //       7
  "      dp[r][c] += Math.min(up, left);", //               8
  "    }", //                                               9
  "  return dp[m-1][n-1];", //                              10
  "}", //                                                   11
];
