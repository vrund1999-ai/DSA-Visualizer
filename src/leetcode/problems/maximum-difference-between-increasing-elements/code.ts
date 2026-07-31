export const CODE = [
  "function maximumDifference(nums) {", //                    0
  "  let min = nums[0], best = -1;", //                       1
  "  for (let i = 1; i < nums.length; i++) {", //             2
  "    if (nums[i] > min)", //                                3
  "      best = Math.max(best, nums[i] - min);", //           4
  "    else", //                                              5
  "      min = nums[i];   // new smaller left value", //      6
  "  }", //                                                   7
  "  return best;", //                                        8
  "}", //                                                     9
];
