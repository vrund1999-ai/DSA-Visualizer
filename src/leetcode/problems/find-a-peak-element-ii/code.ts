export const CODE = [
  "function findPeakGrid(mat) {", //                          0
  "  let lo = 0, hi = mat[0].length - 1;", //                 1
  "  while (lo <= hi) {", //                                  2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    let row = 0;   // row of column max", //               4
  "    for (let r = 0; r < mat.length; r++)", //              5
  "      if (mat[r][mid] > mat[row][mid]) row = r;", //       6
  "    const left  = mid > 0 ? mat[row][mid - 1] : -1;", //   7
  "    const right = mid < hi ? mat[row][mid + 1] : -1;", //  8
  "    if (mat[row][mid] > left && mat[row][mid] > right)", //9
  "      return [row, mid];   // peak found", //             10
  "    else if (right > mat[row][mid]) lo = mid + 1;", //    11
  "    else hi = mid - 1;", //                               12
  "  }", //                                                  13
  "  return [-1, -1];", //                                   14
  "}", //                                                    15
];
