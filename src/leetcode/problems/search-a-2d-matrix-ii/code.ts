export const CODE = [
  "function searchMatrix(matrix, target) {", //               0
  "  let r = 0, c = matrix[0].length - 1;  // top-right", //  1
  "  while (r < matrix.length && c >= 0) {", //               2
  "    const v = matrix[r][c];", //                           3
  "    if (v === target) return true;", //                    4
  "    else if (v > target) c--;   // column too big", //     5
  "    else r++;                   // row too small", //      6
  "  }", //                                                   7
  "  return false;", //                                       8
  "}", //                                                     9
];
