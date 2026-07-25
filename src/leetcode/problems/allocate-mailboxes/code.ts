export const CODE = [
  "function minDistance(houses, k) {", //                     0
  "  houses.sort((a, b) => a - b);", //                       1
  "  const n = houses.length;", //                            2
  "  // cost[i][j] = distance if one mailbox serves i..j", // 3
  "  const cost = buildCost(houses);   // to the median", //  4
  "  const dp = grid(n + 1, k + 1, Infinity);", //            5
  "  dp[0][0] = 0;", //                                       6
  "  for (let j = 1; j <= n; j++)", //                        7
  "    for (let b = 1; b <= k; b++)", //                      8
  "      for (let i = 0; i < j; i++)", //                     9
  "        dp[j][b] = Math.min(dp[j][b],", //                10
  "          dp[i][b - 1] + cost[i][j - 1]);", //            11
  "  return dp[n][k];", //                                   12
  "}", //                                                    13
];
