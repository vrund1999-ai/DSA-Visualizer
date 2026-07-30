export const CODE = [
  "function minFallingPathSum(matrix) {", //                  0
  "  const n = matrix.length;", //                            1
  "  const dp = matrix[0].slice();", //                       2
  "  for (let r = 1; r < n; r++) {", //                       3
  "    const next = [];", //                                  4
  "    for (let c = 0; c < n; c++) {", //                     5
  "      let best = dp[c];   // straight up", //              6
  "      if (c > 0) best = Math.min(best, dp[c - 1]);", //    7
  "      if (c < n - 1) best = Math.min(best, dp[c + 1]);", //8
  "      next[c] = matrix[r][c] + best;", //                  9
  "    }", //                                                10
  "    dp = next;", //                                       11
  "  }", //                                                  12
  "  return Math.min(...dp);", //                            13
  "}", //                                                    14
];
