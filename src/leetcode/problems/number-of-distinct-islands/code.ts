export const CODE = [
  "function numDistinctIslands(grid) {", //                   0
  "  const shapes = new Set();", //                           1
  "  for (let r = 0; r < grid.length; r++)", //               2
  "    for (let c = 0; c < grid[0].length; c++)", //          3
  "      if (grid[r][c] === 1) {", //                         4
  "        const cells = [];", //                             5
  "        dfs(r, c, r, c, cells);   // relative coords", //  6
  "        shapes.add(cells.join('|'));   // signature", //   7
  "      }", //                                               8
  "  return shapes.size;   // distinct shapes", //            9
  "}", //                                                    10
  "", //                                                     11
  "function dfs(r, c, r0, c0, cells) {", //                  12
  "  if (out || grid[r][c] !== 1) return;", //               13
  "  grid[r][c] = 0;   // mark visited", //                  14
  "  cells.push([r - r0, c - c0]);   // normalize", //       15
  "  for (dir of 4) dfs(...);", //                           16
  "}", //                                                    17
];
