export const CODE = [
  "function getFood(grid) {", //                              0
  "  const start = findStar(grid);", //                       1
  "  const q = [[...start, 0]];   // r, c, dist", //          2
  "  const seen = new Set([key(start)]);", //                 3
  "  while (q.length) {", //                                  4
  "    const [r, c, d] = q.shift();", //                      5
  "    if (grid[r][c] === '#') return d;   // food!", //      6
  "    for (const [nr, nc] of neighbours(r, c)) {", //        7
  "      if (grid[nr]?.[nc] !== 'X' && !seen.has(key)) {", // 8
  "        seen.add(key); q.push([nr, nc, d + 1]);", //       9
  "      }", //                                              10
  "    }", //                                                11
  "  }", //                                                  12
  "  return -1;   // unreachable", //                        13
  "}", //                                                    14
];
