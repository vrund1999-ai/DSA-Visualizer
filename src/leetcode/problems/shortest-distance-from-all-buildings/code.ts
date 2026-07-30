export const CODE = [
  "function shortestDistance(grid) {", //                     0
  "  const dist = zeros(), reach = zeros();", //              1
  "  let buildings = 0;", //                                  2
  "  for (each cell (r,c) with grid[r][c] === 1) {", //       3
  "    buildings++;", //                                      4
  "    bfs from (r,c):   // distances to empties", //         5
  "      for each reachable empty cell:", //                  6
  "        dist[cell] += stepCount;", //                      7
  "        reach[cell] += 1;", //                             8
  "  }", //                                                   9
  "  let best = Infinity;", //                                10
  "  for (each empty cell reached by all buildings)", //     11
  "    best = Math.min(best, dist[cell]);", //               12
  "  return best === Infinity ? -1 : best;", //              13
  "}", //                                                    14
];
