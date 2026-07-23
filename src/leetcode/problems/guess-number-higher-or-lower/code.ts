export const CODE = [
  "function guessNumber(n) {", //                      0
  "  let lo = 1, hi = n;", //                         1
  "  while (lo <= hi) {", //                          2
  "    const mid = lo + ((hi - lo) >> 1);", //        3
  "    const r = guess(mid);", //                     4
  "    if (r === 0) return mid;   // correct", //     5
  "    if (r < 0) hi = mid - 1;   // too high", //    6
  "    else lo = mid + 1;         // too low", //     7
  "  }", //                                           8
  "}", //                                             9
];
