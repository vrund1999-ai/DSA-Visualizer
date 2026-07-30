export const CODE = [
  "function combinationSum4(nums, target) {", //              0
  "  const dp = Array(target + 1).fill(0);", //               1
  "  dp[0] = 1;   // one empty combination", //               2
  "  for (let t = 1; t <= target; t++) {", //                 3
  "    for (const num of nums) {", //                         4
  "      if (num <= t)", //                                   5
  "        dp[t] += dp[t - num];   // append num", //         6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return dp[target];", //                                  9
  "}", //                                                    10
];
