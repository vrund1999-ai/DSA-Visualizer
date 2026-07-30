export const CODE = [
  "function predictTheWinner(nums) {", //                     0
  "  const n = nums.length;", //                              1
  "  // dp[i][j] = best (current - other) score on nums[i..j]",//2
  "  const dp = nums.map(v => [...Array(n)].map(() => 0));", //3
  "  for (let i = 0; i < n; i++) dp[i][i] = nums[i];", //     4
  "  for (let len = 2; len <= n; len++)", //                  5
  "    for (let i = 0; i + len - 1 < n; i++) {", //           6
  "      const j = i + len - 1;", //                          7
  "      dp[i][j] = Math.max(", //                            8
  "        nums[i] - dp[i + 1][j],", //                       9
  "        nums[j] - dp[i][j - 1]);", //                     10
  "    }", //                                                11
  "  return dp[0][n - 1] >= 0;", //                          12
  "}", //                                                    13
];
