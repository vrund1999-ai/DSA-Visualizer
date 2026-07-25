export const CODE = [
  "function getSum(a, b) {", //                               0
  "  while (b !== 0) {", //                                   1
  "    const carry = (a & b) << 1;   // bits that carry", //  2
  "    a = a ^ b;   // add without carry", //                 3
  "    b = carry;   // apply carry next round", //            4
  "  }", //                                                   5
  "  return a;", //                                           6
  "}", //                                                     7
];
