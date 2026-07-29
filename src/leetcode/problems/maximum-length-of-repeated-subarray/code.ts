export const CODE = [
  "function findLength(nums1, nums2) {", //                   0
  "  const m = nums1.length, n = nums2.length;", //           1
  "  const dp = grid(m + 1, n + 1, 0);", //                   2
  "  let best = 0;", //                                       3
  "  for (let i = 1; i <= m; i++)", //                        4
  "    for (let j = 1; j <= n; j++)", //                      5
  "      if (nums1[i-1] === nums2[j-1]) {", //                6
  "        dp[i][j] = dp[i-1][j-1] + 1;   // extend run", //  7
  "        best = Math.max(best, dp[i][j]);", //              8
  "      }", //                                               9
  "  return best;", //                                       10
  "}", //                                                    11
];
