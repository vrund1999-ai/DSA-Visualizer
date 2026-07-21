export const CODE = [
  "function rotate(matrix) {", //                              0
  "  const n = matrix.length;", //                            1
  "  for (let i = 0; i < n; i++)", //                         2
  "    for (let j = i + 1; j < n; j++)", //                   3
  "      [matrix[i][j], matrix[j][i]] =", //                  4
  "        [matrix[j][i], matrix[i][j]];   // transpose", //  5
  "  for (const row of matrix) row.reverse();  // flip", //   6
  "  return matrix;", //                                      7
  "}", //                                                     8
];
