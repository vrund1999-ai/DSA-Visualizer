export const CODE = [
  "function longestMonotonicSubarray(nums) {", //             0
  "  let best = 1, inc = 1, dec = 1;", //                     1
  "  for (let i = 1; i < nums.length; i++) {", //             2
  "    if (nums[i] > nums[i - 1]) {", //                      3
  "      inc++; dec = 1;   // extend increasing run", //      4
  "    } else if (nums[i] < nums[i - 1]) {", //               5
  "      dec++; inc = 1;   // extend decreasing run", //      6
  "    } else {", //                                          7
  "      inc = 1; dec = 1;   // equal breaks both", //        8
  "    }", //                                                 9
  "    best = Math.max(best, inc, dec);", //                 10
  "  }", //                                                  11
  "  return best;", //                                       12
  "}", //                                                    13
];
