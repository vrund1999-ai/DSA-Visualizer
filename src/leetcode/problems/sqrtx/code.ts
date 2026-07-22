export const CODE = [
  "function mySqrt(x) {", //                                  0
  "  let lo = 0, hi = x, ans = 0;", //                       1
  "  while (lo <= hi) {", //                                 2
  "    const mid = (lo + hi) >> 1;", //                      3
  "    if (mid * mid <= x) {", //                            4
  "      ans = mid; lo = mid + 1;   // could be larger", //  5
  "    } else hi = mid - 1;", //                             6
  "  }", //                                                  7
  "  return ans;", //                                        8
  "}", //                                                    9
];
