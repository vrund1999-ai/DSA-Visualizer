export const CODE = [
  "function firstMissingPositive(nums) {", //                 0
  "  const n = nums.length;", //                              1
  "  for (let i = 0; i < n; i++) {", //                       2
  "    // put nums[i] at index nums[i] - 1", //              3
  "    while (nums[i] >= 1 && nums[i] <= n &&", //            4
  "           nums[nums[i] - 1] !== nums[i]) {", //           5
  "      const j = nums[i] - 1;", //                          6
  "      [nums[i], nums[j]] = [nums[j], nums[i]];   // swap",//7
  "    }", //                                                 8
  "  }", //                                                   9
  "  for (let i = 0; i < n; i++)", //                        10
  "    if (nums[i] !== i + 1) return i + 1;", //             11
  "  return n + 1;", //                                      12
  "}", //                                                    13
];
