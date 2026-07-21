export const CODE = [
  "function findKthLargest(nums, k) {", //                 0
  "  const heap = [];  // min-heap of size k", //          1
  "  for (const x of nums) {", //                          2
  "    if (heap.length < k) push(heap, x);", //            3
  "    else if (x > heap[0]) {", //                        4
  "      pop(heap);          // drop the smallest", //     5
  "      push(heap, x);", //                               6
  "    }", //                                              7
  "  }", //                                                8
  "  return heap[0];  // kth largest = heap minimum", //   9
  "}", //                                                  10
];
