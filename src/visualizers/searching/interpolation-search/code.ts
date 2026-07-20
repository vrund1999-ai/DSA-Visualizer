/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const INTERPOLATION_SEARCH_CODE = [
  "let lo = 0, hi = n - 1;", //                            0
  "while (lo <= hi && a[lo] <= target && target <= a[hi]) {",//1
  "  const pos = lo + ((target - a[lo]) * (hi - lo)) /", // 2
  "                   ((a[hi] - a[lo]) || 1);", //         3
  "  if (a[pos] === target) return pos;", //               4
  "  if (a[pos] < target) lo = pos + 1;", //               5
  "  else hi = pos - 1;", //                               6
  "}", //                                                  7
  "return -1;", //                                         8
];
