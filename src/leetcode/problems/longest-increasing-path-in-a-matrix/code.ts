export const CODE = [
  "function longestIncreasingPath(matrix) {", //              0
  "  const R = matrix.length, C = matrix[0].length;", //      1
  "  const memo = grid(R, C, 0);", //                         2
  "  function dfs(r, c) {", //                                3
  "    if (memo[r][c]) return memo[r][c];", //                4
  "    let best = 1;", //                                     5
  "    for (const [nr, nc] of nbrs(r, c))", //                6
  "      if (matrix[nr][nc] > matrix[r][c])", //              7
  "        best = Math.max(best, 1 + dfs(nr, nc));", //       8
  "    return memo[r][c] = best;", //                         9
  "  }", //                                                  10
  "  let ans = 0;", //                                       11
  "  for (each cell) ans = Math.max(ans, dfs(r, c));", //    12
  "  return ans;", //                                        13
  "}", //                                                    14
];
