/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const DIJKSTRA_CODE = [
  "function dijkstra(grid, start, end) {", //                   0
  "  const dist = { [start]: 0 };", //                          1
  "  const prev = new Map();", //                               2
  "  const pq = new MinHeap([[0, start]]);", //                 3
  "  const done = new Set();", //                               4
  "  while (!pq.isEmpty()) {", //                               5
  "    const [d, cell] = pq.pop();", //                         6
  "    if (done.has(cell)) continue;", //                       7
  "    done.add(cell);", //                                     8
  "    if (cell === end) break;", //                            9
  "    for (const n of neighbors(cell)) {", //                  10
  "      const nd = d + 1;", //                                 11
  "      if (nd < (dist[n] ?? Infinity)) {", //                 12
  "        dist[n] = nd; prev.set(n, cell);", //                13
  "        pq.push([nd, n]);", //                               14
  "      }", //                                                 15
  "    }", //                                                   16
  "  }", //                                                     17
  "  return reconstructPath(prev, start, end);", //             18
  "}", //                                                       19
];
