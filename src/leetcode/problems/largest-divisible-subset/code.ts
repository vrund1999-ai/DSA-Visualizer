export const CODE = [
  "function largestDivisibleSubset(nums) {", //               0
  "  nums.sort((a, b) => a - b);", //                         1
  "  const dp = nums.map(() => 1), prev = nums.map(() => -1);",//2
  "  let best = 0;", //                                       3
  "  for (let i = 0; i < nums.length; i++) {", //             4
  "    for (let j = 0; j < i; j++) {", //                     5
  "      if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {",//6
  "        dp[i] = dp[j] + 1; prev[i] = j;   // extend", //   7
  "      }", //                                               8
  "    }", //                                                 9
  "    if (dp[i] > dp[best]) best = i;", //                  10
  "  }", //                                                  11
  "  return reconstruct(nums, prev, best);", //              12
  "}", //                                                    13
];
