export const CODE = [
  "function updateMatrix(mat) {", //                          0
  "  const m = mat.length, n = mat[0].length;", //           1
  "  const dist = grid(m, n, Infinity);", //                 2
  "  const q = [];", //                                       3
  "  // seed the queue with every 0 cell", //                4
  "  forEachCell((r, c) => {", //                            5
  "    if (mat[r][c] === 0) { dist[r][c] = 0; q.push([r,c]); }",//6
  "  });", //                                                 7
  "  while (q.length) {   // BFS outward", //                8
  "    const [r, c] = q.shift();", //                         9
  "    for (const [nr, nc] of neighbours(r, c)) {", //       10
  "      if (dist[nr][nc] > dist[r][c] + 1) {", //           11
  "        dist[nr][nc] = dist[r][c] + 1;", //               12
  "        q.push([nr, nc]);", //                            13
  "      }", //                                              14
  "    }", //                                                15
  "  }", //                                                  16
  "  return dist;", //                                       17
  "}", //                                                    18
];
