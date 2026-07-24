export const CODE = [
  "function threeSumClosest(nums, target) {", //                    0
  "  nums.sort((a, b) => a - b);", //                              1
  "  let best = nums[0] + nums[1] + nums[2];", //                  2
  "  for (let i = 0; i < nums.length - 2; i++) {", //             3
  "    let l = i + 1, r = nums.length - 1;", //                   4
  "    while (l < r) {", //                                       5
  "      const s = nums[i] + nums[l] + nums[r];", //              6
  "      if (Math.abs(s - target) < Math.abs(best - target))", //7
  "        best = s;", //                                         8
  "      if (s === target) return s;", //                         9
  "      s < target ? l++ : r--;", //                             10
  "    }", //                                                     11
  "  }", //                                                       12
  "  return best;", //                                            13
  "}", //                                                         14
];
