export const CODE = [
  "function maxSumDivThree(nums) {", //                       0
  "  let dp = [0, -Infinity, -Infinity];", //                 1
  "  //   dp[r] = best sum with remainder r mod 3", //        2
  "  for (const x of nums) {", //                             3
  "    const next = [...dp];", //                             4
  "    for (let r = 0; r < 3; r++) {", //                     5
  "      if (dp[r] === -Infinity) continue;", //              6
  "      const nr = (r + x) % 3;", //                         7
  "      next[nr] = Math.max(next[nr], dp[r] + x);", //       8
  "    }", //                                                 9
  "    dp = next;", //                                       10
  "  }", //                                                  11
  "  return dp[0];   // sum divisible by 3", //              12
  "}", //                                                    13
];
