export const CODE = [
  "function nextPermutation(nums) {", //                        0
  "  let i = nums.length - 2;", //                              1
  "  while (i >= 0 && nums[i] >= nums[i + 1]) i--;", //         2
  "  if (i >= 0) {", //                                         3
  "    let j = nums.length - 1;", //                            4
  "    while (nums[j] <= nums[i]) j--;", //                     5
  "    [nums[i], nums[j]] = [nums[j], nums[i]];", //            6
  "  }", //                                                     7
  "  reverse(nums, i + 1);   // reverse the suffix", //         8
  "  return nums;", //                                          9
  "}", //                                                       10
];
