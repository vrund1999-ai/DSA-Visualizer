export const CODE = [
  "function minimumEffortPath(h) {", //                       0
  "  const R = h.length, C = h[0].length;", //                1
  "  const eff = grid(R, C, Infinity);", //                   2
  "  eff[0][0] = 0;", //                                       3
  "  const heap = new MinHeap([[0, 0, 0]]);", //               4
  "  while (heap.size()) {", //                                5
  "    const [e, r, c] = heap.pop();   // least effort", //    6
  "    if (r === R - 1 && c === C - 1) return e;", //          7
  "    if (e > eff[r][c]) continue;", //                       8
  "    for (const [nr, nc] of nbrs(r, c)) {", //               9
  "      const ne = Math.max(e, Math.abs(h[nr][nc] - h[r][c]));", //10
  "      if (ne < eff[nr][nc]) {", //                         11
  "        eff[nr][nc] = ne;", //                             12
  "        heap.push([ne, nr, nc]);", //                      13
  "      }", //                                               14
  "    }", //                                                 15
  "  }", //                                                   16
  "}", //                                                     17
];
