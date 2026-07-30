export const CODE = [
  "function maxMatrixSum(matrix) {", //                       0
  "  let sumAbs = 0, negs = 0;", //                           1
  "  let minAbs = Infinity;", //                              2
  "  for (const row of matrix)", //                           3
  "    for (const v of row) {", //                            4
  "      sumAbs += Math.abs(v);", //                          5
  "      if (v < 0) negs++;", //                              6
  "      minAbs = Math.min(minAbs, Math.abs(v));", //         7
  "    }", //                                                 8
  "  // negatives pair up and cancel their signs", //         9
  "  return negs % 2 === 0", //                              10
  "    ? sumAbs   // even: all positive", //                 11
  "    : sumAbs - 2 * minAbs;   // one stuck negative", //   12
  "}", //                                                    13
];
