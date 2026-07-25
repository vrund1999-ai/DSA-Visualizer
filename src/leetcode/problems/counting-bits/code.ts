export const CODE = [
  "function countBits(n) {", //                               0
  "  const dp = new Array(n + 1).fill(0);", //                1
  "  for (let i = 1; i <= n; i++) {", //                      2
  "    dp[i] = dp[i >> 1] + (i & 1);", //                     3
  "    // = ones in i/2, plus the dropped last bit", //       4
  "  }", //                                                   5
  "  return dp;", //                                          6
  "}", //                                                     7
];
