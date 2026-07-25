export const CODE = [
  "function reverseBits(n) {", //                             0
  "  let result = 0;", //                                     1
  "  for (let i = 0; i < 32; i++) {", //                      2
  "    const bit = (n >>> i) & 1;", //                        3
  "    result |= bit << (31 - i);   // mirror position", //   4
  "  }", //                                                   5
  "  return result >>> 0;   // as unsigned", //               6
  "}", //                                                     7
];
