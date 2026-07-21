export const CODE = [
  "function singleNumber(nums) {", //          0
  "  let acc = 0;", //                         1
  "  for (const x of nums)", //               2
  "    acc ^= x;   // XOR cancels pairs", //   3
  "  return acc;", //                          4
  "}", //                                      5
];
