export const CODE = [
  "function canPartition(nums) {", //                             0
  "  const sum = nums.reduce((a, b) => a + b, 0);", //           1
  "  if (sum % 2) return false;", //                            2
  "  const target = sum / 2;", //                               3
  "  const dp = Array(target + 1).fill(false);", //             4
  "  dp[0] = true;", //                                         5
  "  for (const x of nums)", //                                 6
  "    for (let s = target; s >= x; s--)", //                   7
  "      dp[s] = dp[s] || dp[s - x];", //                       8
  "  return dp[target];", //                                    9
  "}", //                                                       10
];
