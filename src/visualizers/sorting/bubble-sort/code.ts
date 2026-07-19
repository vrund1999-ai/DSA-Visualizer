/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const BUBBLE_SORT_CODE = [
  "for (let i = 0; i < n - 1; i++) {", //           0
  "  let swapped = false;", //                      1
  "  for (let j = 0; j < n - i - 1; j++) {", //     2
  "    if (a[j] > a[j + 1]) {", //                  3
  "      [a[j], a[j + 1]] = [a[j + 1], a[j]];", //  4
  "      swapped = true;", //                       5
  "    }", //                                       6
  "  }", //                                         7
  "  if (!swapped) break;", //                      8
  "}", //                                           9
];
