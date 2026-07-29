export const CODE = [
  "function integerBreak(n) {", //                            0
  "  const dp = new Array(n + 1).fill(1);", //                1
  "  for (let i = 2; i <= n; i++) {", //                      2
  "    for (let j = 1; j < i; j++) {", //                     3
  "      dp[i] = Math.max(dp[i],", //                         4
  "        j * (i - j),        // split into two", //         5
  "        j * dp[i - j]);     // split further", //          6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return dp[n];", //                                       9
  "}", //                                                    10
];
