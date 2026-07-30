export const CODE = [
  "function new21Game(n, k, maxPts) {", //                    0
  "  if (k === 0 || n >= k + maxPts - 1) return 1;", //       1
  "  const dp = Array(n + 1).fill(0);", //                    2
  "  dp[0] = 1;", //                                          3
  "  let window = 1, result = 0;", //                         4
  "  for (let i = 1; i <= n; i++) {", //                      5
  "    dp[i] = window / maxPts;   // avg of last maxPts", //  6
  "    if (i < k) window += dp[i];   // still drawing", //    7
  "    else result += dp[i];   // stopped in range", //       8
  "    if (i - maxPts >= 0 && i - maxPts < k)", //            9
  "      window -= dp[i - maxPts];   // slide out", //       10
  "  }", //                                                  11
  "  return result;", //                                     12
  "}", //                                                    13
];
