export const CODE = [
  "function findMaxConsecutiveOnes(nums) {", //             0
  "  let best = 0, run = 0;", //                           1
  "  for (const x of nums) {", //                          2
  "    run = x === 1 ? run + 1 : 0;   // extend/reset", // 3
  "    best = Math.max(best, run);", //                    4
  "  }", //                                                5
  "  return best;", //                                     6
  "}", //                                                  7
];
