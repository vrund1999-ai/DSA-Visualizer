export const CODE = [
  "function numTilings(n) {", //                              0
  "  const MOD = 1e9 + 7;", //                                1
  "  if (n <= 2) return n;", //                               2
  "  const dp = Array(n + 1).fill(0);", //                    3
  "  dp[0] = 1; dp[1] = 1; dp[2] = 2;", //                    4
  "  for (let i = 3; i <= n; i++)", //                        5
  "    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;", //        6
  "  return dp[n];", //                                       7
  "}", //                                                     8
];
