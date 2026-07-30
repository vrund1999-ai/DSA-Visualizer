export const CODE = [
  "function minimumPairRemoval(nums) {", //                   0
  "  let ops = 0;", //                                        1
  "  while (!isSorted(nums)) {", //                           2
  "    let best = 0;   // leftmost min-sum pair", //          3
  "    for (let i = 1; i + 1 < nums.length; i++)", //         4
  "      if (nums[i] + nums[i + 1] <", //                     5
  "          nums[best] + nums[best + 1])", //                6
  "        best = i;", //                                     7
  "    nums[best] += nums[best + 1];   // merge", //          8
  "    nums.splice(best + 1, 1);", //                         9
  "    ops++;", //                                           10
  "  }", //                                                  11
  "  return ops;", //                                        12
  "}", //                                                    13
];
