export const CODE = [
  "function subArrayRanges(nums) {", //                       0
  "  let total = 0;", //                                      1
  "  for (let i = 0; i < nums.length; i++) {", //             2
  "    let mn = nums[i], mx = nums[i];", //                   3
  "    for (let j = i; j < nums.length; j++) {", //           4
  "      mn = Math.min(mn, nums[j]);", //                     5
  "      mx = Math.max(mx, nums[j]);", //                     6
  "      total += mx - mn;   // range of nums[i..j]", //      7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return total;", //                                      10
  "}", //                                                    11
];
