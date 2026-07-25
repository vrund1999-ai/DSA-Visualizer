export const CODE = [
  "function isPowerOfThree(n) {", //                          0
  "  if (n < 1) return false;", //                            1
  "  while (n % 3 === 0) {", //                               2
  "    n /= 3;   // strip a factor of 3", //                  3
  "  }", //                                                   4
  "  return n === 1;   // only 3s remained", //               5
  "}", //                                                     6
];
