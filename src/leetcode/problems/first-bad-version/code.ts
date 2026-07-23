export const CODE = [
  "function firstBadVersion(n) {", //                     0
  "  let lo = 1, hi = n;", //                            1
  "  while (lo < hi) {", //                              2
  "    const mid = lo + ((hi - lo) >> 1);", //           3
  "    if (isBadVersion(mid)) hi = mid;   // bad", //    4
  "    else lo = mid + 1;                 // good", //   5
  "  }", //                                              6
  "  return lo;", //                                     7
  "}", //                                                8
];
