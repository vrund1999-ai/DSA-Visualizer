export const CODE = [
  "function smallestChair(times, targetFriend) {", //         0
  "  const order = times", //                                 1
  "    .map((t, i) => [t[0], t[1], i])", //                   2
  "    .sort((a, b) => a[0] - b[0]);   // by arrival", //     3
  "  const free = new MinHeap([0..n-1]);", //                 4
  "  const busy = new MinHeap();   // [leave, chair]", //     5
  "  for (const [arrive, leave, id] of order) {", //          6
  "    while (busy.size() && busy.peek()[0] <= arrive)", //   7
  "      free.push(busy.pop()[1]);   // vacate", //           8
  "    const chair = free.pop();   // smallest free", //      9
  "    if (id === targetFriend) return chair;", //           10
  "    busy.push([leave, chair]);", //                       11
  "  }", //                                                  12
  "}", //                                                    13
];
