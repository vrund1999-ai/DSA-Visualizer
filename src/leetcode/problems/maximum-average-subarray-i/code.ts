export const CODE = [
  "function findMaxAverage(nums, k) {", //                       0
  "  let sum = 0;", //                                          1
  "  for (let i = 0; i < k; i++) sum += nums[i];   // window",// 2
  "  let best = sum;", //                                       3
  "  for (let i = k; i < nums.length; i++) {", //               4
  "    sum += nums[i] - nums[i - k];   // slide", //            5
  "    best = Math.max(best, sum);", //                         6
  "  }", //                                                     7
  "  return best / k;", //                                      8
  "}", //                                                       9
];
