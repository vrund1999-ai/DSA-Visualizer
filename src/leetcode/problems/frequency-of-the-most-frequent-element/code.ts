export const CODE = [
  "function maxFrequency(nums, k) {", //                            0
  "  nums.sort((a, b) => a - b);", //                             1
  "  let left = 0, sum = 0, best = 1;", //                        2
  "  for (let right = 0; right < nums.length; right++) {", //     3
  "    sum += nums[right];", //                                   4
  "    while (nums[right] * (right - left + 1) - sum > k) {", //  5
  "      sum -= nums[left++];   // window too costly", //         6
  "    }", //                                                     7
  "    best = Math.max(best, right - left + 1);", //              8
  "  }", //                                                       9
  "  return best;", //                                            10
  "}", //                                                         11
];
