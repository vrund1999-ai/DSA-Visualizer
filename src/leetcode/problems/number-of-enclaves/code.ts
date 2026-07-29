export const CODE = [
  "function numEnclaves(grid) {", //                          0
  "  const m = grid.length, n = grid[0].length;", //          1
  "  const flood = (r, c) => {", //                           2
  "    if (grid[r]?.[c] !== 1) return;", //                   3
  "    grid[r][c] = 0;   // reachable from border", //        4
  "    flood(r+1,c); flood(r-1,c);", //                       5
  "    flood(r,c+1); flood(r,c-1);", //                       6
  "  };", //                                                  7
  "  for (let r = 0; r < m; r++)", //                         8
  "    for (let c = 0; c < n; c++)", //                       9
  "      if (r===0||c===0||r===m-1||c===n-1) flood(r,c);", // 10
  "  return grid.flat().filter(v => v === 1).length;", //    11
  "}", //                                                    12
];
