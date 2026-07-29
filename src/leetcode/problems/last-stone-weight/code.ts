export const CODE = [
  "function lastStoneWeight(stones) {", //                    0
  "  const heap = new MaxHeap(stones);", //                   1
  "  while (heap.size() > 1) {", //                           2
  "    const a = heap.pop();   // heaviest", //               3
  "    const b = heap.pop();   // next heaviest", //          4
  "    if (a !== b)", //                                      5
  "      heap.push(a - b);   // remainder", //                6
  "  }", //                                                   7
  "  return heap.size() ? heap.pop() : 0;", //                8
  "}", //                                                     9
];
