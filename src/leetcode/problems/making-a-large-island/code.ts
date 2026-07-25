export const CODE = [
  "function largestIsland(grid) {", //                        0
  "  let id = 2, size = {0: 0};", //                          1
  "  for (r,c) with grid[r][c] === 1)", //                    2
  "    size[id] = dfsFill(r, c, id++);   // label + measure", // 3
  "  let best = Math.max(0, ...values(size));", //            4
  "  for (r,c) with grid[r][c] === 0) {", //                  5
  "    const seen = new Set(neighborIds(r, c));", //          6
  "    let total = 1;                    // the flipped cell", // 7
  "    for (const k of seen) total += size[k];", //           8
  "    best = Math.max(best, total);", //                     9
  "  }", //                                                  10
  "  return best;", //                                       11
  "}", //                                                    12
];
