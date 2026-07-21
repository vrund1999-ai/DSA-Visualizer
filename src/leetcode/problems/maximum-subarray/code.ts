export const CODE = [
  "function maxSubArray(nums) {", //                       0
  "  let cur = nums[0], best = nums[0];", //               1
  "  for (let i = 1; i < nums.length; i++) {", //          2
  "    cur = Math.max(nums[i], cur + nums[i]);", //        3
  "    best = Math.max(best, cur);", //                    4
  "  }", //                                                5
  "  return best;", //                                     6
  "}", //                                                  7
];
