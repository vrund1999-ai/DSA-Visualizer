/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const FIBONACCI_CODE = [
  "dp[0] = 0; dp[1] = 1;", //                      0
  "for (let i = 2; i <= n; i++) {", //             1
  "  dp[i] = dp[i - 1] + dp[i - 2];", //           2
  "}", //                                          3
  "return dp[n];", //                              4
];
