/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const SHELL_SORT_CODE = [
  "for (let gap = n >> 1; gap > 0; gap >>= 1) {", // 0
  "  for (let i = gap; i < n; i++) {", //           1
  "    let j = i;", //                              2
  "    while (j >= gap && a[j-gap] > a[j]) {", //   3
  "      swap(a[j-gap], a[j]);", //                 4
  "      j -= gap;", //                             5
  "    }", //                                       6
  "  }", //                                         7
  "}", //                                           8
];
