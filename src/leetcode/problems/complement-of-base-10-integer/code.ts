export const CODE = [
  "function bitwiseComplement(n) {", //                       0
  "  if (n === 0) return 1;", //                              1
  "  let mask = 1;", //                                       2
  "  while (mask < n) {", //                                  3
  "    mask = (mask << 1) | 1;   // all-ones cover", //       4
  "  }", //                                                   5
  "  return n ^ mask;   // flip within the width", //         6
  "}", //                                                     7
];
