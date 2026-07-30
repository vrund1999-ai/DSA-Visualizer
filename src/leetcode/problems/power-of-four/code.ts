export const CODE = [
  "function isPowerOfFour(n) {", //                           0
  "  if (n <= 0) return false;", //                           1
  "  // exactly one bit set → power of two", //               2
  "  if ((n & (n - 1)) !== 0) return false;", //             3
  "  // that bit must sit at an even position", //            4
  "  //   mask 0x55555555 = 0101…0101", //                   5
  "  return (n & 0x55555555) !== 0;", //                      6
  "}", //                                                     7
];
