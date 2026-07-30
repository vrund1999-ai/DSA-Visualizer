export const CODE = [
  "function peopleAwareOfSecret(n, delay, forget) {", //      0
  "  const MOD = 1e9 + 7;", //                                1
  "  const dp = Array(n + 1).fill(0);", //                    2
  "  dp[1] = 1;   // one person learns on day 1", //          3
  "  let share = 0;   // people sharing today", //            4
  "  for (let i = 2; i <= n; i++) {", //                      5
  "    if (i - delay >= 1) share += dp[i - delay];", //       6
  "    if (i - forget >= 1) share -= dp[i - forget];", //     7
  "    dp[i] = ((share % MOD) + MOD) % MOD;", //              8
  "  }", //                                                   9
  "  let known = 0;   // still remember on day n", //        10
  "  for (let i = n - forget + 1; i <= n; i++)", //          11
  "    if (i >= 1) known = (known + dp[i]) % MOD;", //       12
  "  return known;", //                                      13
  "}", //                                                    14
];
