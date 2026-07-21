export const CODE = [
  "function maxProduct(nums) {", //                            0
  "  let max = nums[0], min = nums[0], best = nums[0];", //    1
  "  for (let i = 1; i < nums.length; i++) {", //             2
  "    const x = nums[i];", //                                3
  "    if (x < 0) [max, min] = [min, max];   // swap", //     4
  "    max = Math.max(x, max * x);", //                       5
  "    min = Math.min(x, min * x);", //                       6
  "    best = Math.max(best, max);", //                       7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                     10
];
