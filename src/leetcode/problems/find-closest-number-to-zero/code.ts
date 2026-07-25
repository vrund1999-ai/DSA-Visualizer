export const CODE = [
  "function findClosestNumber(nums) {", //                    0
  "  let best = nums[0];", //                                 1
  "  for (const n of nums) {", //                             2
  "    if (Math.abs(n) < Math.abs(best) ||", //               3
  "        (Math.abs(n) === Math.abs(best) && n > best))", // 4
  "      best = n;   // closer, or larger on a tie", //       5
  "  }", //                                                   6
  "  return best;", //                                        7
  "}", //                                                     8
];
