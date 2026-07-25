export const CODE = [
  "function numSubmat(mat) {", //                             0
  "  const m = mat.length, n = mat[0].length;", //            1
  "  const height = new Array(n).fill(0);", //                2
  "  let total = 0;", //                                      3
  "  for (let i = 0; i < m; i++) {", //                       4
  "    for (let j = 0; j < n; j++)", //                       5
  "      height[j] = mat[i][j] ? height[j] + 1 : 0;", //      6
  "    for (let j = 0; j < n; j++) {", //                     7
  "      let minH = Infinity;", //                            8
  "      for (let k = j; k >= 0 && height[k]; k--) {", //     9
  "        minH = Math.min(minH, height[k]);", //            10
  "        total += minH;   // rectangles ending at (i,j)", // 11
  "      }", //                                              12
  "    }", //                                                13
  "  }", //                                                  14
  "  return total;", //                                      15
  "}", //                                                    16
];
