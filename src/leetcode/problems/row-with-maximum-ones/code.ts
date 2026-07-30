export const CODE = [
  "function rowAndMaximumOnes(mat) {", //                     0
  "  let bestRow = 0, bestCount = 0;", //                     1
  "  for (let r = 0; r < mat.length; r++) {", //              2
  "    const count = mat[r].reduce((a, b) => a + b, 0);", //  3
  "    if (count > bestCount) {", //                          4
  "      bestCount = count;", //                              5
  "      bestRow = r;", //                                    6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return [bestRow, bestCount];", //                        9
  "}", //                                                    10
];
