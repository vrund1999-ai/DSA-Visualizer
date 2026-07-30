export const CODE = [
  "function maxAbsoluteSum(nums) {", //                       0
  "  let curMax = 0, maxSum = 0;", //                         1
  "  let curMin = 0, minSum = 0;", //                         2
  "  for (const x of nums) {", //                             3
  "    curMax = Math.max(curMax + x, x);", //                 4
  "    maxSum = Math.max(maxSum, curMax);", //                5
  "    curMin = Math.min(curMin + x, x);", //                 6
  "    minSum = Math.min(minSum, curMin);", //                7
  "  }", //                                                   8
  "  return Math.max(maxSum, -minSum);", //                   9
  "}", //                                                    10
];
