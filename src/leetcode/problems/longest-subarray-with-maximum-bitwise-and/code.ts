export const CODE = [
  "function longestSubarray(nums) {", //                      0
  "  // AND only shrinks, so the best value is the max", //   1
  "  const max = Math.max(...nums);", //                      2
  "  let best = 0, run = 0;", //                              3
  "  for (const x of nums) {", //                             4
  "    if (x === max) run++;      // extend the run", //      5
  "    else run = 0;              // reset", //               6
  "    best = Math.max(best, run);", //                       7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                    10
];
