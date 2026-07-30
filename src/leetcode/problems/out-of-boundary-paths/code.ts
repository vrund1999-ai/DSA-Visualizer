export const CODE = [
  "function findPaths(m, n, maxMove, sr, sc) {", //           0
  "  const MOD = 1e9 + 7;", //                                1
  "  let dp = grid(m, n, 0);", //                             2
  "  dp[sr][sc] = 1;", //                                     3
  "  let count = 0;", //                                      4
  "  for (let move = 1; move <= maxMove; move++) {", //       5
  "    const next = grid(m, n, 0);", //                       6
  "    for (let r = 0; r < m; r++)", //                       7
  "      for (let c = 0; c < n; c++) {", //                   8
  "        if (!dp[r][c]) continue;", //                      9
  "        for (const [nr, nc] of nbrs(r, c)) {", //         10
  "          if (outside(nr, nc))", //                       11
  "            count = (count + dp[r][c]) % MOD;", //         12
  "          else next[nr][nc] =", //                        13
  "            (next[nr][nc] + dp[r][c]) % MOD;", //          14
  "        }", //                                            15
  "      }", //                                              16
  "    dp = next;", //                                       17
  "  }", //                                                  18
  "  return count;", //                                      19
  "}", //                                                    20
];
