export const CODE = [
  "function maxAreaOfIsland(grid) {", //                      0
  "  let best = 0;", //                                       1
  "  const dfs = (r, c) => {", //                             2
  "    if (grid[r]?.[c] !== 1) return 0;", //                 3
  "    grid[r][c] = 0;   // sink to avoid revisits", //       4
  "    return 1 + dfs(r+1,c) + dfs(r-1,c)", //                5
  "             + dfs(r,c+1) + dfs(r,c-1);", //               6
  "  };", //                                                  7
  "  for (let r = 0; r < grid.length; r++)", //               8
  "    for (let c = 0; c < grid[0].length; c++)", //          9
  "      best = Math.max(best, dfs(r, c));", //              10
  "  return best;", //                                       11
  "}", //                                                    12
];
