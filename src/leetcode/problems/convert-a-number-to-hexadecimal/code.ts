export const CODE = [
  "function toHex(num) {", //                                 0
  "  if (num === 0) return '0';", //                          1
  "  const digits = '0123456789abcdef';", //                 2
  "  let n = num >>> 0;   // treat as unsigned 32-bit", //    3
  "  let hex = '';", //                                       4
  "  while (n > 0) {", //                                     5
  "    hex = digits[n & 15] + hex;   // low nibble", //       6
  "    n >>>= 4;                     // drop 4 bits", //      7
  "  }", //                                                   8
  "  return hex;", //                                         9
  "}", //                                                    10
];
