export const CODE = [
  "function uniquePathsWithObstacles(grid) {", //             0
  "  const m = grid.length, n = grid[0].length;", //         1
  "  const dp = Array.from({length: m},", //                 2
  "                   () => new Array(n).fill(0));", //       3
  "  for (let i = 0; i < m; i++) {", //                       4
  "    for (let j = 0; j < n; j++) {", //                     5
  "      if (grid[i][j] === 1) { dp[i][j] = 0; continue; }", // 6
  "      if (i === 0 && j === 0) { dp[i][j] = 1; continue; }", // 7
  "      const up   = i > 0 ? dp[i-1][j] : 0;", //            8
  "      const left = j > 0 ? dp[i][j-1] : 0;", //            9
  "      dp[i][j] = up + left;", //                           10
  "    }", //                                                 11
  "  }", //                                                   12
  "  return dp[m-1][n-1];", //                                13
  "}", //                                                     14
];
