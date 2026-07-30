export const CODE = [
  "function findMaximizedCapital(k, w, profits, capital) {", //0
  "  const proj = profits.map((p, i) => [capital[i], p])", //  1
  "    .sort((a, b) => a[0] - b[0]);   // by capital asc", //  2
  "  const heap = new MaxHeap();       // affordable profits",//3
  "  let i = 0;", //                                           4
  "  for (let t = 0; t < k; t++) {", //                        5
  "    while (i < proj.length && proj[i][0] <= w)", //         6
  "      heap.push(proj[i++][1]);", //                         7
  "    if (heap.isEmpty()) break;", //                         8
  "    w += heap.pop();               // take best profit", // 9
  "  }", //                                                   10
  "  return w;", //                                           11
  "}", //                                                     12
];
