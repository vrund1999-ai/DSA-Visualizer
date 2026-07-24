export const CODE = [
  "function fib(n) {", //                        0
  "  if (n < 2) return n;", //                   1
  "  const dp = [0, 1];", //                     2
  "  for (let i = 2; i <= n; i++)", //           3
  "    dp[i] = dp[i - 1] + dp[i - 2];", //       4
  "  return dp[n];", //                          5
  "}", //                                        6
];
