export const CODE = [
  "function setZeroes(matrix) {", //                                   0
  "  const rows = new Set(), cols = new Set();", //                   1
  "  matrix.forEach((row, r) =>", //                                 2
  "    row.forEach((v, c) => {", //                                  3
  "      if (v === 0) { rows.add(r); cols.add(c); }", //             4
  "    }));", //                                                     5
  "  matrix.forEach((row, r) =>", //                                 6
  "    row.forEach((v, c) => {", //                                  7
  "      if (rows.has(r) || cols.has(c)) matrix[r][c] = 0;", //      8
  "    }));", //                                                     9
  "  return matrix;", //                                             10
  "}", //                                                            11
];
