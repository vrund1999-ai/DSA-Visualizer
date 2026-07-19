/** Displayed source. search.ts indexes into this via each step's `line`. */
export const DFS_CODE = [
  "function dfs(grid, start, end) {", //                        0
  "  const stack = [start], visited = new Set([start]);", //    1
  "  const prev = new Map();", //                               2
  "  while (stack.length > 0) {", //                            3
  "    const cell = stack.pop();", //                           4
  "    if (cell === end) break;", //                            5
  "    for (const n of neighbors(cell)) {", //                  6
  "      if (visited.has(n)) continue;", //                     7
  "      visited.add(n);", //                                   8
  "      prev.set(n, cell);", //                                9
  "      stack.push(n);", //                                    10
  "    }", //                                                   11
  "  }", //                                                     12
  "  return reconstructPath(prev, start, end);", //             13
  "}", //                                                       14
];
