export const CODE = [
  "function spiralMatrixIII(rows, cols, r, c) {", //          0
  "  const res = [[r, c]];", //                               1
  "  const dr = [0, 1, 0, -1], dc = [1, 0, -1, 0];", //       2
  "  let d = 0, len = 1;", //                                 3
  "  while (res.length < rows * cols) {", //                  4
  "    for (let twice = 0; twice < 2; twice++) {", //         5
  "      for (let i = 0; i < len; i++) {", //                 6
  "        r += dr[d]; c += dc[d];   // step", //             7
  "        if (r >= 0 && r < rows && c >= 0 && c < cols)", // 8
  "          res.push([r, c]);   // record if in-bounds", //  9
  "      }", //                                              10
  "      d = (d + 1) % 4;   // turn clockwise", //           11
  "    }", //                                                12
  "    len++;   // legs grow every two turns", //            13
  "  }", //                                                  14
  "  return res;", //                                        15
  "}", //                                                    16
];
