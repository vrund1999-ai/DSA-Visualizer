/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const SELECTION_SORT_CODE = [
  "for (let i = 0; i < n - 1; i++) {", //          0
  "  let min = i;", //                             1
  "  for (let j = i + 1; j < n; j++) {", //        2
  "    if (a[j] < a[min]) min = j;", //            3
  "  }", //                                        4
  "  if (min !== i) {", //                         5
  "    [a[i], a[min]] = [a[min], a[i]];", //       6
  "  }", //                                        7
  "}", //                                          8
];
