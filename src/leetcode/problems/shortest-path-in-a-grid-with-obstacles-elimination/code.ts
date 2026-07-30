export const CODE = [
  "function shortestPath(grid, k) {", //                      0
  "  const R = grid.length, C = grid[0].length;", //          1
  "  // state: [r, c, eliminations left]", //                 2
  "  const seen = new Set(['0,0,' + k]);", //                 3
  "  let queue = [[0, 0, k]], steps = 0;", //                 4
  "  while (queue.length) {", //                              5
  "    const next = [];", //                                  6
  "    for (const [r, c, e] of queue) {", //                  7
  "      if (r === R-1 && c === C-1) return steps;", //       8
  "      for (const [nr, nc] of neighbors(r, c)) {", //       9
  "        const ne = e - grid[nr][nc];", //                 10
  "        const key = nr+','+nc+','+ne;", //                11
  "        if (ne >= 0 && !seen.has(key)) {", //             12
  "          seen.add(key);", //                             13
  "          next.push([nr, nc, ne]);", //                   14
  "        }", //                                            15
  "      }", //                                              16
  "    }", //                                                17
  "    queue = next; steps++;", //                           18
  "  }", //                                                  19
  "  return -1;", //                                         20
  "}", //                                                    21
];
