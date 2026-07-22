export const CODE = [
  "function lengthOfLIS(nums) {", //                        0
  "  const dp = new Array(nums.length).fill(1);", //       1
  "  let best = 1;", //                                     2
  "  for (let i = 1; i < nums.length; i++) {", //          3
  "    for (let j = 0; j < i; j++)", //                     4
  "      if (nums[j] < nums[i])", //                        5
  "        dp[i] = Math.max(dp[i], dp[j] + 1);", //         6
  "    best = Math.max(best, dp[i]);", //                   7
  "  }", //                                                 8
  "  return best;", //                                      9
  "}", //                                                   10
];
