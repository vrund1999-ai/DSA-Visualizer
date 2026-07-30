export const CODE = [
  "function largestSubmatrix(matrix) {", //                   0
  "  const m = matrix.length, n = matrix[0].length;", //      1
  "  // column heights of consecutive 1s ending at row r", // 2
  "  for (let r = 1; r < m; r++)", //                         3
  "    for (let c = 0; c < n; c++)", //                       4
  "      if (matrix[r][c]) matrix[r][c] += matrix[r-1][c];", //5
  "  let best = 0;", //                                       6
  "  for (const row of matrix) {", //                         7
  "    const h = [...row].sort((a, b) => b - a);", //         8
  "    for (let j = 0; j < n; j++)", //                       9
  "      best = Math.max(best, h[j] * (j + 1));", //         10
  "  }", //                                                  11
  "  return best;", //                                       12
  "}", //                                                    13
];
