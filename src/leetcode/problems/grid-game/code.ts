export const CODE = [
  "function gridGame(grid) {", //                             0
  "  const n = grid[0].length;", //                           1
  "  let topRight = sum(grid[0]) - grid[0][0];", //           2
  "  let bottomLeft = 0;", //                                 3
  "  let best = Infinity;", //                                4
  "  for (let j = 0; j < n; j++) {", //                       5
  "    // robot 1 drops down at column j", //                 6
  "    const second = Math.max(topRight, bottomLeft);", //    7
  "    best = Math.min(best, second);", //                    8
  "    topRight -= grid[0][j + 1] || 0;", //                  9
  "    bottomLeft += grid[1][j];", //                        10
  "  }", //                                                  11
  "  return best;   // robot 2's forced score", //           12
  "}", //                                                    13
];
