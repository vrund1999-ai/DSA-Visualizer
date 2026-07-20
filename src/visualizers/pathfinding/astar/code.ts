/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const ASTAR_CODE = [
  "function aStar(grid, start, end) {", //                      0
  "  const g = { [start]: 0 };", //                             1
  "  const prev = new Map();", //                               2
  "  const open = new MinHeap([[h(start), start]]);", //        3
  "  const done = new Set();", //                               4
  "  while (!open.isEmpty()) {", //                             5
  "    const cell = open.pop();       // lowest f = g + h", //  6
  "    if (done.has(cell)) continue;", //                       7
  "    done.add(cell);", //                                     8
  "    if (cell === end) break;", //                            9
  "    for (const n of neighbors(cell)) {", //                  10
  "      const ng = g[cell] + 1;", //                           11
  "      if (ng < (g[n] ?? Infinity)) {", //                    12
  "        g[n] = ng; prev.set(n, cell);", //                   13
  "        open.push([ng + h(n), n]);", //                      14
  "      }", //                                                 15
  "    }", //                                                   16
  "  }", //                                                     17
  "  return reconstructPath(prev, start, end);", //             18
  "}", //                                                       19
];
