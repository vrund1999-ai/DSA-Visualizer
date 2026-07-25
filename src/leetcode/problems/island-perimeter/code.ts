export const CODE = [
  "function islandPerimeter(grid) {", //                      0
  "  let p = 0;", //                                          1
  "  for (let r = 0; r < grid.length; r++) {", //             2
  "    for (let c = 0; c < grid[0].length; c++) {", //        3
  "      if (grid[r][c] === 1) {", //                         4
  "        p += 4;   // four sides", //                       5
  "        if (r > 0 && grid[r-1][c]) p -= 2;   // shared", //6
  "        if (c > 0 && grid[r][c-1]) p -= 2;   // shared", //7
  "      }", //                                               8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return p;", //                                          11
  "}", //                                                    12
];
