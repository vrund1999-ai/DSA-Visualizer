/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const COIN_CHANGE_CODE = [
  "dp[0] = 0; dp[1..amount] = Infinity;", //          0
  "for (const c of coins)", //                        1
  "  for (let a = c; a <= amount; a++)", //           2
  "    dp[a] = min(dp[a], dp[a - c] + 1);", //        3
  "return dp[amount];", //                            4
];
