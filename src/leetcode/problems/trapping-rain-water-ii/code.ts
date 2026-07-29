export const CODE = [
  "function trapRainWater(H) {", //                           0
  "  const heap = new MinHeap();  // [height, r, c]", //      1
  "  // push every border cell, mark visited", //            2
  "  for (const cell of border(H)) heap.push(cell);", //      3
  "  let water = 0;", //                                      4
  "  while (heap.size()) {", //                               5
  "    const [h, r, c] = heap.pop();  // lowest wall", //     6
  "    for (const [nr, nc] of nbrs(r, c))", //                7
  "      if (!seen[nr][nc]) {", //                            8
  "        water += Math.max(0, h - H[nr][nc]);", //          9
  "        heap.push([Math.max(h, H[nr][nc]), nr, nc]);", // 10
  "        seen[nr][nc] = true;", //                         11
  "      }", //                                              12
  "  }", //                                                  13
  "  return water;", //                                      14
  "}", //                                                    15
];
