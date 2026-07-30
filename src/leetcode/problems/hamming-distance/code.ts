export const CODE = [
  "function hammingDistance(x, y) {", //                      0
  "  let xor = x ^ y;   // 1 where bits differ", //           1
  "  let count = 0;", //                                      2
  "  while (xor) {", //                                       3
  "    count += xor & 1;   // check lowest bit", //           4
  "    xor >>= 1;   // shift right", //                       5
  "  }", //                                                   6
  "  return count;", //                                       7
  "}", //                                                     8
];
