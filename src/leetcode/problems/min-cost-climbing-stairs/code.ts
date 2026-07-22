export const CODE = [
  "function minCostClimbingStairs(cost) {", //                        0
  "  const dp = [0, 0];   // free to start at step 0 or 1", //        1
  "  for (let i = 2; i <= cost.length; i++)", //                     2
  "    dp[i] = Math.min(", //                                        3
  "      dp[i-1] + cost[i-1],", //                                   4
  "      dp[i-2] + cost[i-2]);", //                                  5
  "  return dp[cost.length];", //                                    6
  "}", //                                                            7
];
