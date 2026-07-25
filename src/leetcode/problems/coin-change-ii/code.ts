export const CODE = [
  "function change(amount, coins) {", //                      0
  "  const dp = new Array(amount + 1).fill(0);", //           1
  "  dp[0] = 1;   // one way to make 0: use nothing", //      2
  "  for (const coin of coins) {", //                         3
  "    for (let a = coin; a <= amount; a++) {", //            4
  "      dp[a] += dp[a - coin];   // add ways using coin", // 5
  "    }", //                                                 6
  "  }", //                                                   7
  "  return dp[amount];", //                                  8
  "}", //                                                     9
];
