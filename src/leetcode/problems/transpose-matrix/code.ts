export const CODE = [
  "function transpose(matrix) {", //                          0
  "  const m = matrix.length, n = matrix[0].length;", //      1
  "  const res = grid(n, m);", //                             2
  "  for (let i = 0; i < m; i++)", //                         3
  "    for (let j = 0; j < n; j++)", //                       4
  "      res[j][i] = matrix[i][j];   // swap indices", //     5
  "  return res;", //                                         6
  "}", //                                                     7
];
