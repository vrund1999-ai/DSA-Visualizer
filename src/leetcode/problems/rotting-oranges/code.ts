export const CODE = [
  "function orangesRotting(grid) {", //                              0
  "  const q = [], R = grid.length, C = grid[0].length;", //        1
  "  let fresh = 0, minutes = 0;", //                               2
  "  for (r,c) { if (grid[r][c]===2) q.push([r,c]);", //            3
  "              else if (grid[r][c]===1) fresh++; }", //           4
  "  while (q.length && fresh) {", //                               5
  "    for (const [r,c] of drain(q))", //                           6
  "      for (const [nr,nc] of neighbours(r,c))", //                7
  "        if (grid[nr][nc] === 1) {", //                           8
  "          grid[nr][nc] = 2; fresh--; q.push([nr,nc]);", //       9
  "        }", //                                                   10
  "    minutes++;", //                                              11
  "  }", //                                                         12
  "  return fresh === 0 ? minutes : -1;", //                        13
  "}", //                                                           14
];
