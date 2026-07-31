export const CODE = [
  "function divisorGame(n) {", //                             0
  "  // dp[i] = current player wins starting from i", //      1
  "  const dp = Array(n + 1).fill(false);", //                2
  "  for (let i = 2; i <= n; i++) {", //                      3
  "    for (let x = 1; x < i; x++) {", //                     4
  "      if (i % x === 0 && !dp[i - x]) {", //                5
  "        dp[i] = true;   // move to a losing state", //     6
  "        break;", //                                        7
  "      }", //                                               8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return dp[n];", //                                      11
  "}", //                                                    12
];
