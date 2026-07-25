export const CODE = [
  "function singleNumber(nums) {", //                         0
  "  let xorAll = 0;", //                                     1
  "  for (const n of nums) xorAll ^= n;   // = a ^ b", //     2
  "  const bit = xorAll & (-xorAll);      // lowest set bit", // 3
  "  let a = 0, b = 0;", //                                   4
  "  for (const n of nums) {", //                             5
  "    if (n & bit) a ^= n;   // group where bit is set", //  6
  "    else         b ^= n;   // group where bit is clear", // 7
  "  }", //                                                   8
  "  return [a, b];", //                                      9
  "}", //                                                    10
];
