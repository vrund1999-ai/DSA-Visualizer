/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const INSERTION_SORT_CODE = [
  "for (let i = 1; i < n; i++) {", //              0
  "  let j = i;", //                               1
  "  while (j > 0 && a[j - 1] > a[j]) {", //       2
  "    [a[j - 1], a[j]] = [a[j], a[j - 1]];", //   3
  "    j--;", //                                   4
  "  }", //                                        5
  "}", //                                          6
];
