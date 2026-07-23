export const CODE = [
  "function numSubarrayProductLessThanK(nums, k) {", //             0
  "  if (k <= 1) return 0;", //                                    1
  "  let prod = 1, left = 0, count = 0;", //                       2
  "  for (let right = 0; right < nums.length; right++) {", //      3
  "    prod *= nums[right];", //                                   4
  "    while (prod >= k) prod /= nums[left++];   // shrink", //    5
  "    count += right - left + 1;   // new subarrays", //          6
  "  }", //                                                        7
  "  return count;", //                                            8
  "}", //                                                          9
];
