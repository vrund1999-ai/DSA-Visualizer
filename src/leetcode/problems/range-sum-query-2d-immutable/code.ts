export const CODE = [
  "class NumMatrix {", //                                     0
  "  constructor(matrix) {", //                               1
  "    const R = matrix.length, C = matrix[0].length;", //    2
  "    this.P = grid(R + 1, C + 1, 0);   // padded", //       3
  "    for (let r = 0; r < R; r++)", //                       4
  "      for (let c = 0; c < C; c++)", //                     5
  "        this.P[r+1][c+1] = matrix[r][c]", //               6
  "          + this.P[r][c+1] + this.P[r+1][c] - this.P[r][c];", //7
  "  }", //                                                   8
  "  sumRegion(r1, c1, r2, c2) {", //                         9
  "    return this.P[r2+1][c2+1] - this.P[r1][c2+1]", //     10
  "         - this.P[r2+1][c1] + this.P[r1][c1];", //        11
  "  }", //                                                  12
  "}", //                                                    13
];
