export const CODE = [
  "function uniquePathsIII(grid) {", //                       0
  "  let empty = 1, sr, sc;   // count of cells to cover", // 1
  "  grid.forEach((row, r) => row.forEach((v, c) => {", //    2
  "    if (v === 0) empty++;", //                             3
  "    else if (v === 1) { sr = r; sc = c; }", //             4
  "  }));", //                                                5
  "  let paths = 0;", //                                      6
  "  const dfs = (r, c, left) => {", //                       7
  "    if (grid[r]?.[c] === undefined || grid[r][c] === -1)", //8
  "      return;", //                                         9
  "    if (grid[r][c] === 2) {", //                          10
  "      if (left === 0) paths++;   // covered all", //      11
  "      return;", //                                        12
  "    }", //                                                13
  "    grid[r][c] = -1;             // mark visited", //     14
  "    for (const [nr,nc] of neighbors(r,c))", //           15
  "      dfs(nr, nc, left - 1);", //                         16
  "    grid[r][c] = 0;              // backtrack", //        17
  "  };", //                                                 18
  "  dfs(sr, sc, empty);", //                                19
  "  return paths;", //                                      20
  "}", //                                                    21
];
