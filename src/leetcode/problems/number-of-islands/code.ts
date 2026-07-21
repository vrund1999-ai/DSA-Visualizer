export const CODE = [
  "function numIslands(grid) {", //                              0
  "  let count = 0;", //                                         1
  "  for (let r = 0; r < grid.length; r++) {", //               2
  "    for (let c = 0; c < grid[0].length; c++) {", //          3
  "      if (grid[r][c] === '1') {", //                         4
  "        count++;", //                                        5
  "        dfs(grid, r, c);", //                                6
  "      }", //                                                 7
  "    }", //                                                   8
  "  }", //                                                     9
  "  return count;", //                                         10
  "}", //                                                       11
  "function dfs(grid, r, c) {", //                              12
  "  if (oob(r, c) || grid[r][c] === '0') return;", //         13
  "  grid[r][c] = '0';  // sink this land cell", //            14
  "  dfs(r±1, c); dfs(r, c±1);  // flood neighbours", //       15
  "}", //                                                       16
];
