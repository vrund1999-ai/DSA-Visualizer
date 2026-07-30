export const CODE = [
  "function numberOfWays(n, x) {", //                         0
  "  const MOD = 1e9 + 7;", //                                1
  "  const dp = Array(n + 1).fill(0);", //                    2
  "  dp[0] = 1;                    // empty sum", //           3
  "  for (let base = 1; base ** x <= n; base++) {", //        4
  "    const p = base ** x;", //                              5
  "    for (let t = n; t >= p; t--) {   // use p at most once",//6
  "      dp[t] = (dp[t] + dp[t - p]) % MOD;", //              7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return dp[n];", //                                      10
  "}", //                                                    11
];
