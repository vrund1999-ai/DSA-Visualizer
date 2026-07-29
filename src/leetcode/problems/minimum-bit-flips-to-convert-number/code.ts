export const CODE = [
  "function minBitFlips(start, goal) {", //                   0
  "  let xor = start ^ goal;   // differing bits", //         1
  "  let flips = 0;", //                                      2
  "  while (xor > 0) {", //                                   3
  "    flips += xor & 1;   // count a differing bit", //      4
  "    xor >>= 1;", //                                        5
  "  }", //                                                   6
  "  return flips;", //                                       7
  "}", //                                                     8
];
