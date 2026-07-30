export const CODE = [
  "function numTrees(n) {", //                                0
  "  const dp = Array(n + 1).fill(0);", //                    1
  "  dp[0] = 1; dp[1] = 1;", //                               2
  "  for (let nodes = 2; nodes <= n; nodes++)", //            3
  "    for (let root = 1; root <= nodes; root++)", //         4
  "      // left has root-1 nodes, right has nodes-root", //  5
  "      dp[nodes] +=", //                                    6
  "        dp[root - 1] * dp[nodes - root];", //              7
  "  return dp[n];", //                                       8
  "}", //                                                     9
];
