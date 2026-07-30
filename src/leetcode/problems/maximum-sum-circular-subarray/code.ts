export const CODE = [
  "function maxSubarraySumCircular(nums) {", //               0
  "  let total = 0;", //                                      1
  "  let curMax = 0, maxSum = -Infinity;", //                 2
  "  let curMin = 0, minSum = Infinity;", //                  3
  "  for (const x of nums) {", //                             4
  "    curMax = Math.max(curMax + x, x);", //                 5
  "    maxSum = Math.max(maxSum, curMax);", //                6
  "    curMin = Math.min(curMin + x, x);", //                 7
  "    minSum = Math.min(minSum, curMin);", //                8
  "    total += x;", //                                       9
  "  }", //                                                  10
  "  // wrap = total - minSubarray, unless all negative", // 11
  "  return maxSum < 0 ? maxSum", //                         12
  "    : Math.max(maxSum, total - minSum);", //              13
  "}", //                                                    14
];
