export const CODE = [
  "function findDiagonalOrder(mat) {", //                     0
  "  const m = mat.length, n = mat[0].length, res = [];", //  1
  "  let r = 0, c = 0, up = true;", //                        2
  "  for (let i = 0; i < m * n; i++) {", //                   3
  "    res.push(mat[r][c]);", //                              4
  "    if (up) {                     // moving up-right", //  5
  "      if (c === n - 1) { r++; up = false; }", //           6
  "      else if (r === 0) { c++; up = false; }", //          7
  "      else { r--; c++; }", //                              8
  "    } else {                      // moving down-left", // 9
  "      if (r === m - 1) { c++; up = true; }", //           10
  "      else if (c === 0) { r++; up = true; }", //          11
  "      else { r++; c--; }", //                             12
  "    }", //                                                13
  "  }", //                                                  14
  "  return res;", //                                        15
  "}", //                                                    16
];
