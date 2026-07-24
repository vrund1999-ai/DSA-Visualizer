export const CODE = [
  "function minimumTotal(triangle) {", //                     0
  "  const dp = [...triangle.at(-1)];  // last row", //       1
  "  for (let i = triangle.length - 2; i >= 0; i--) {", //    2
  "    for (let j = 0; j <= i; j++) {", //                    3
  "      dp[j] = triangle[i][j]", //                          4
  "            + Math.min(dp[j], dp[j + 1]);", //             5
  "    }", //                                                 6
  "  }", //                                                   7
  "  return dp[0];   // min path from apex", //               8
  "}", //                                                     9
];
