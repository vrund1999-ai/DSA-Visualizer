export const CODE = [
  "function isPerfectSquare(num) {", //                       0
  "  let lo = 1, hi = num;", //                               1
  "  while (lo <= hi) {", //                                  2
  "    const mid = lo + ((hi - lo) >> 1);", //                3
  "    const sq = mid * mid;", //                             4
  "    if (sq === num) return true;", //                      5
  "    if (sq < num) lo = mid + 1;", //                       6
  "    else hi = mid - 1;", //                                7
  "  }", //                                                   8
  "  return false;", //                                       9
  "}", //                                                    10
];
