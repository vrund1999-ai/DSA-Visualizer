export const CODE = [
  "function maxSumAfterPartitioning(arr, k) {", //            0
  "  const n = arr.length;", //                               1
  "  const dp = Array(n + 1).fill(0);", //                    2
  "  for (let i = 1; i <= n; i++) {", //                      3
  "    let cur = 0;   // max in the last block", //           4
  "    for (let j = 1; j <= k && j <= i; j++) {", //          5
  "      cur = Math.max(cur, arr[i - j]);", //                6
  "      dp[i] = Math.max(dp[i],", //                         7
  "        dp[i - j] + cur * j);   // block of j", //         8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return dp[n];", //                                      11
  "}", //                                                    12
];
