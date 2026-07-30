export const CODE = [
  "function longestArithSeqLength(nums) {", //                0
  "  const dp = nums.map(() => new Map());", //               1
  "  let best = 1;", //                                       2
  "  for (let i = 0; i < nums.length; i++) {", //             3
  "    for (let j = 0; j < i; j++) {", //                     4
  "      const d = nums[i] - nums[j];", //                    5
  "      const len = (dp[j].get(d) || 1) + 1;", //            6
  "      dp[i].set(d, Math.max(dp[i].get(d) || 0, len));", // 7
  "      best = Math.max(best, dp[i].get(d));", //            8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return best;", //                                       11
  "}", //                                                    12
];
