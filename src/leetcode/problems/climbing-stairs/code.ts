export const CODE = [
  "function climbStairs(n) {", //                  0
  "  const dp = [1, 1];", //                       1
  "  for (let i = 2; i <= n; i++) {", //           2
  "    dp[i] = dp[i - 1] + dp[i - 2];", //         3
  "  }", //                                        4
  "  return dp[n];", //                            5
  "}", //                                          6
];
