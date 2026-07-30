export const CODE = [
  "function maximumEnergy(energy, k) {", //                   0
  "  const n = energy.length;", //                            1
  "  const dp = [...energy];", //                             2
  "  let best = -Infinity;", //                               3
  "  for (let i = n - 1; i >= 0; i--) {", //                  4
  "    if (i + k < n)", //                                    5
  "      dp[i] += dp[i + k];   // chain forward", //          6
  "    best = Math.max(best, dp[i]);", //                     7
  "  }", //                                                   8
  "  return best;   // best starting point", //               9
  "}", //                                                    10
];
