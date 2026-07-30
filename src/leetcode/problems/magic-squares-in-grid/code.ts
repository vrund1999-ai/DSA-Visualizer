export const CODE = [
  "function numMagicSquaresInside(grid) {", //                0
  "  let count = 0;", //                                      1
  "  for (let r = 0; r + 3 <= grid.length; r++)", //         2
  "    for (let c = 0; c + 3 <= grid[0].length; c++)", //    3
  "      if (isMagic(grid, r, c)) count++;", //              4
  "  return count;", //                                       5
  "}", //                                                    6
  "", //                                                     7
  "function isMagic(g, r, c) {", //                          8
  "  const seen = new Set();", //                            9
  "  for (let i = 0; i < 3; i++)", //                       10
  "    for (let j = 0; j < 3; j++) {", //                   11
  "      const v = g[r + i][c + j];", //                    12
  "      if (v < 1 || v > 9 || seen.has(v)) return false;", //13
  "      seen.add(v);", //                                  14
  "    }", //                                                15
  "  // every row, col, and diagonal must sum to 15", //    16
  "  return allLinesEqual15(g, r, c);", //                  17
  "}", //                                                   18
];
