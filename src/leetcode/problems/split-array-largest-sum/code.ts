export const CODE = [
  "function splitArray(nums, k) {", //                        0
  "  let lo = Math.max(...nums);", //                         1
  "  let hi = nums.reduce((a, b) => a + b, 0);", //           2
  "  while (lo < hi) {", //                                   3
  "    const cap = (lo + hi) >> 1;", //                       4
  "    let pieces = 1, sum = 0;", //                          5
  "    for (const x of nums) {", //                           6
  "      if (sum + x > cap) { pieces++; sum = 0; }", //       7
  "      sum += x;", //                                       8
  "    }", //                                                 9
  "    if (pieces <= k) hi = cap;   // cap works", //         10
  "    else lo = cap + 1;           // too small", //         11
  "  }", //                                                   12
  "  return lo;", //                                          13
  "}", //                                                     14
];
