export const CODE = [
  "function findTargetSumWays(nums, target) {", //            0
  "  // dp maps a running sum -> number of ways", //         1
  "  let dp = new Map([[0, 1]]);", //                         2
  "  for (const n of nums) {", //                             3
  "    const next = new Map();", //                           4
  "    for (const [sum, ways] of dp) {", //                   5
  "      add(next, sum + n, ways);   // choose +n", //        6
  "      add(next, sum - n, ways);   // choose -n", //        7
  "    }", //                                                 8
  "    dp = next;", //                                        9
  "  }", //                                                  10
  "  return dp.get(target) ?? 0;", //                        11
  "}", //                                                    12
];
