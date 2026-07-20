/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const KNAPSACK_CODE = [
  "for (let w = 0; w <= W; w++) dp[0][w] = 0;", // 0
  "for (let i = 1; i <= n; i++)", //               1
  "  for (let w = 0; w <= W; w++)", //             2
  "    if (wt[i-1] <= w)", //                      3
  "      dp[i][w] = max(dp[i-1][w],", //           4
  "        val[i-1] + dp[i-1][w - wt[i-1]]);", //  5
  "    else dp[i][w] = dp[i-1][w];", //            6
  "return dp[n][W];", //                           7
];
