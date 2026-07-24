export const CODE = [
  "function shortestPathBinaryMatrix(grid) {", //             0
  "  const n = grid.length;", //                              1
  "  if (grid[0][0] || grid[n-1][n-1]) return -1;", //        2
  "  const q = [[0, 0, 1]];   // r, c, dist", //              3
  "  grid[0][0] = 1;   // mark visited", //                   4
  "  while (q.length) {", //                                  5
  "    const [r, c, d] = q.shift();", //                      6
  "    if (r === n-1 && c === n-1) return d;", //             7
  "    for (const [dr, dc] of DIRS8) {   // 8 neighbours", // 8
  "      const nr = r+dr, nc = c+dc;", //                     9
  "      if (inBounds(nr, nc) && grid[nr][nc] === 0) {", //  10
  "        grid[nr][nc] = 1;", //                            11
  "        q.push([nr, nc, d + 1]);", //                     12
  "      }", //                                              13
  "    }", //                                                14
  "  }", //                                                  15
  "  return -1;   // blocked", //                            16
  "}", //                                                    17
];
