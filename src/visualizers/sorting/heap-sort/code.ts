/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const HEAP_SORT_CODE = [
  "buildMaxHeap(a);", //                                     0
  "for (let end = n - 1; end > 0; end--) {", //              1
  "  swap(a[0], a[end]);   // max to the sorted tail", //    2
  "  siftDown(a, 0, end);", //                               3
  "}", //                                                    4
  "function siftDown(a, i, end) {", //                       5
  "  while (2*i + 1 < end) {", //                            6
  "    let c = 2*i + 1;", //                                 7
  "    if (c+1 < end && a[c+1] > a[c]) c++;", //             8
  "    if (a[i] >= a[c]) break;", //                         9
  "    swap(a[i], a[c]); i = c;", //                         10
  "  }", //                                                  11
  "}", //                                                    12
];
