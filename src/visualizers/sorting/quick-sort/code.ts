/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const QUICK_SORT_CODE = [
  "function quickSort(a, lo, hi) {", //            0
  "  if (lo >= hi) return;", //                    1
  "  const p = partition(a, lo, hi);", //          2
  "  quickSort(a, lo, p - 1);", //                 3
  "  quickSort(a, p + 1, hi);", //                 4
  "}", //                                          5
  "function partition(a, lo, hi) {", //            6
  "  const pivot = a[hi];", //                     7
  "  let i = lo;", //                              8
  "  for (let j = lo; j < hi; j++) {", //          9
  "    if (a[j] < pivot) {", //                    10
  "      [a[i], a[j]] = [a[j], a[i]];", //         11
  "      i++;", //                                 12
  "    }", //                                      13
  "  }", //                                        14
  "  [a[i], a[hi]] = [a[hi], a[i]];", //           15
  "  return i;", //                                16
  "}", //                                          17
];
