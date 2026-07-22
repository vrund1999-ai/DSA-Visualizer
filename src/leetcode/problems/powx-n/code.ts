export const CODE = [
  "function myPow(x, n) {", //                                    0
  "  if (n < 0) { x = 1 / x; n = -n; }", //                     1
  "  let result = 1;", //                                       2
  "  while (n > 0) {", //                                       3
  "    if (n & 1) result *= x;   // odd bit", //                4
  "    x *= x;                   // square the base", //        5
  "    n >>= 1;                  // next bit", //               6
  "  }", //                                                     7
  "  return result;", //                                        8
  "}", //                                                       9
];
