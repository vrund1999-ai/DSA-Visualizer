export const CODE = [
  "function nthUglyNumber(n) {", //                           0
  "  const dp = [1];", //                                     1
  "  let p2 = 0, p3 = 0, p5 = 0;", //                         2
  "  while (dp.length < n) {", //                             3
  "    const next = Math.min(dp[p2]*2, dp[p3]*3, dp[p5]*5);", // 4
  "    dp.push(next);", //                                    5
  "    if (next === dp[p2]*2) p2++;   // advance matches", // 6
  "    if (next === dp[p3]*3) p3++;", //                      7
  "    if (next === dp[p5]*5) p5++;", //                      8
  "  }", //                                                   9
  "  return dp[n - 1];", //                                  10
  "}", //                                                    11
];
