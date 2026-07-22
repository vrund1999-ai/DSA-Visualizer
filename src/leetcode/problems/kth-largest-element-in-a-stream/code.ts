export const CODE = [
  "class KthLargest {", //                                       0
  "  constructor(k, nums) {", //                                 1
  "    this.k = k;", //                                          2
  "    this.heap = new MinHeap();   // keep k largest", //       3
  "    for (const x of nums) this.add(x);", //                   4
  "  }", //                                                      5
  "  add(val) {", //                                             6
  "    this.heap.push(val);", //                                 7
  "    if (this.heap.size() > this.k) this.heap.pop();", //      8
  "    return this.heap.peek();   // kth largest", //            9
  "  }", //                                                      10
  "}", //                                                        11
];
