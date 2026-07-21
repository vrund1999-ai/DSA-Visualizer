export const CODE = [
  "function coinChange(coins, amount) {", //                    0
  "  const dp = Array(amount + 1).fill(Infinity);", //          1
  "  dp[0] = 0;", //                                            2
  "  for (let a = 1; a <= amount; a++)", //                     3
  "    for (const coin of coins)", //                           4
  "      if (coin <= a)", //                                    5
  "        dp[a] = Math.min(dp[a], dp[a - coin] + 1);", //      6
  "  return dp[amount] === Infinity ? -1 : dp[amount];", //     7
  "}", //                                                       8
];
