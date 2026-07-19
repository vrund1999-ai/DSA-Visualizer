/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const BINARY_SEARCH_CODE = [
  "let lo = 0, hi = n - 1;", //             0
  "while (lo <= hi) {", //                  1
  "  const mid = (lo + hi) >> 1;", //       2
  "  if (a[mid] === target) return mid;", //3
  "  if (a[mid] < target) lo = mid + 1;", //4
  "  else hi = mid - 1;", //                5
  "}", //                                   6
  "return -1;", //                          7
];
