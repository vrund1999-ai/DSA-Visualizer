export const CODE = [
  "function minimumArea(grid) {", //                          0
  "  let minR = Infinity, maxR = -1;", //                     1
  "  let minC = Infinity, maxC = -1;", //                     2
  "  for (let r = 0; r < grid.length; r++)", //               3
  "    for (let c = 0; c < grid[0].length; c++)", //          4
  "      if (grid[r][c] === 1) {", //                         5
  "        minR = Math.min(minR, r);", //                     6
  "        maxR = Math.max(maxR, r);", //                     7
  "        minC = Math.min(minC, c);", //                     8
  "        maxC = Math.max(maxC, c);", //                     9
  "      }", //                                              10
  "  return (maxR - minR + 1) * (maxC - minC + 1);", //      11
  "}", //                                                    12
];
