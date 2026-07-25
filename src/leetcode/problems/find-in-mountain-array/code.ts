export const CODE = [
  "function findInMountainArray(target, arr) {", //           0
  "  // 1) find the peak", //                                 1
  "  let lo = 0, hi = arr.length - 1;", //                    2
  "  while (lo < hi) {", //                                   3
  "    const m = (lo + hi) >> 1;", //                         4
  "    if (arr[m] < arr[m+1]) lo = m+1; else hi = m;", //     5
  "  }", //                                                   6
  "  const peak = lo;", //                                    7
  "  // 2) search ascending [0, peak]", //                    8
  "  let i = bsearch(0, peak, true);", //                     9
  "  if (i !== -1) return i;", //                            10
  "  // 3) search descending [peak+1, end]", //              11
  "  return bsearch(peak+1, arr.length-1, false);", //       12
  "}", //                                                    13
];
