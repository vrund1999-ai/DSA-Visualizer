export const CODE = [
  "function findLengthOfLCIS(nums) {", //                     0
  "  if (nums.length === 0) return 0;", //                    1
  "  let best = 1, cur = 1;", //                              2
  "  for (let i = 1; i < nums.length; i++) {", //             3
  "    if (nums[i] > nums[i - 1]) {", //                      4
  "      cur++;   // extend the run", //                      5
  "      best = Math.max(best, cur);", //                     6
  "    } else {", //                                          7
  "      cur = 1;   // reset the run", //                     8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return best;", //                                       11
  "}", //                                                    12
];
