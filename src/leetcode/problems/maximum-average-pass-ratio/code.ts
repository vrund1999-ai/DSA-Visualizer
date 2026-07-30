export const CODE = [
  "function maxAverageRatio(classes, extra) {", //            0
  "  const gain = ([p, t]) =>", //                            1
  "    (p + 1) / (t + 1) - p / t;", //                        2
  "  const heap = new MaxHeap(gain);   // by gain", //        3
  "  for (const c of classes) heap.push(c);", //              4
  "  while (extra--) {", //                                   5
  "    const [p, t] = heap.pop();      // biggest gain", //   6
  "    heap.push([p + 1, t + 1]);", //                        7
  "  }", //                                                   8
  "  const sum = heap.items()", //                            9
  "    .reduce((s, [p, t]) => s + p / t, 0);", //            10
  "  return sum / classes.length;", //                       11
  "}", //                                                    12
];
