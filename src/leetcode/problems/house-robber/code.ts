export const CODE = [
  "function rob(nums) {", //                              0
  "  const dp = [];", //                                  1
  "  for (let i = 0; i < nums.length; i++) {", //         2
  "    const skip = i >= 1 ? dp[i - 1] : 0;", //          3
  "    const take = (i >= 2 ? dp[i - 2] : 0) + nums[i];",// 4
  "    dp[i] = Math.max(skip, take);", //                 5
  "  }", //                                               6
  "  return dp[nums.length - 1] || 0;", //                7
  "}", //                                                 8
];
