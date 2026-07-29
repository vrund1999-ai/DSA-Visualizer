export const CODE = [
  "function longestNiceSubarray(nums) {", //                  0
  "  let mask = 0, l = 0, best = 0;", //                      1
  "  for (let r = 0; r < nums.length; r++) {", //             2
  "    while (mask & nums[r]) {   // shares a bit", //        3
  "      mask ^= nums[l];         // drop left element", //   4
  "      l++;", //                                            5
  "    }", //                                                 6
  "    mask |= nums[r];           // add right element", //   7
  "    best = Math.max(best, r - l + 1);", //                 8
  "  }", //                                                   9
  "  return best;", //                                       10
  "}", //                                                    11
];
