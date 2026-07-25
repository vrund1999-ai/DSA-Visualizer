export const CODE = [
  "function maxEvents(events) {", //                          0
  "  events.sort((a, b) => a[0] - b[0]);", //                 1
  "  const heap = [];   // end days of open events", //       2
  "  let count = 0, i = 0;", //                               3
  "  const lastDay = Math.max(...events.map(e => e[1]));", // 4
  "  for (let day = 1; day <= lastDay; day++) {", //          5
  "    while (i < events.length && events[i][0] === day)", // 6
  "      heap.push(events[i++][1]);        // opens today", // 7
  "    while (heap.length && heap[0] < day)", //              8
  "      popMin(heap);                     // expired", //    9
  "    if (heap.length) { popMin(heap); count++; }  // attend", // 10
  "  }", //                                                  11
  "  return count;", //                                      12
  "}", //                                                    13
];
