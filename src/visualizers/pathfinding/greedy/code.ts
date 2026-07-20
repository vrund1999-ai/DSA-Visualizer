/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const GREEDY_CODE = [
  "function greedy(grid, start, end) {", //                     0
  "  const prev = new Map();", //                               1
  "  const open = new MinHeap([[h(start), start]]);", //        2
  "  const done = new Set();", //                               3
  "  while (!open.isEmpty()) {", //                             4
  "    const cell = open.pop();     // lowest h only", //       5
  "    if (done.has(cell)) continue;", //                       6
  "    done.add(cell);", //                                     7
  "    if (cell === end) break;", //                            8
  "    for (const n of neighbors(cell)) {", //                  9
  "      if (!seen(n)) {", //                                   10
  "        prev.set(n, cell);", //                              11
  "        open.push([h(n), n]);", //                           12
  "      }", //                                                 13
  "    }", //                                                   14
  "  }", //                                                     15
  "  return reconstructPath(prev, start, end);", //             16
  "}", //                                                       17
];
