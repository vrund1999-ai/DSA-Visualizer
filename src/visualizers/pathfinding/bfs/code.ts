/** Displayed source. search.ts indexes into this via each step's `line`. */
export const BFS_CODE = [
  "function bfs(grid, start, end) {", //                        0
  "  const queue = [start], visited = new Set([start]);", //    1
  "  const prev = new Map();", //                               2
  "  while (queue.length > 0) {", //                            3
  "    const cell = queue.shift();", //                         4
  "    if (cell === end) break;", //                            5
  "    for (const n of neighbors(cell)) {", //                  6
  "      if (visited.has(n)) continue;", //                     7
  "      visited.add(n);", //                                   8
  "      prev.set(n, cell);", //                                9
  "      queue.push(n);", //                                    10
  "    }", //                                                   11
  "  }", //                                                     12
  "  return reconstructPath(prev, start, end);", //             13
  "}", //                                                       14
];
