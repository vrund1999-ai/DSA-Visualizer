export const CODE = [
  "function regionsBySlashes(grid) {", //                     0
  "  const n = grid.length;", //                              1
  "  const big = zeros(3 * n, 3 * n);", //                    2
  "  // draw each slash into a 3x3 block", //                 3
  "  for (let r = 0; r < n; r++)", //                         4
  "    for (let c = 0; c < n; c++) {", //                     5
  "      const ch = grid[r][c];", //                          6
  "      if (ch === '/') mark(big, r, c, '/');", //           7
  "      if (ch === '\\\\') mark(big, r, c, '\\\\');", //     8
  "    }", //                                                 9
  "  let regions = 0;", //                                   10
  "  for (let r = 0; r < 3*n; r++)", //                      11
  "    for (let c = 0; c < 3*n; c++)", //                    12
  "      if (big[r][c] === 0) {", //                         13
  "        flood(big, r, c);   // fill one region", //       14
  "        regions++;", //                                   15
  "      }", //                                              16
  "  return regions;", //                                    17
  "}", //                                                    18
];
