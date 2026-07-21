export const CODE = [
  "function moveZeroes(nums) {", //                          0
  "  let slow = 0;", //                                      1
  "  for (let i = 0; i < nums.length; i++) {", //           2
  "    if (nums[i] !== 0) {", //                             3
  "      [nums[slow], nums[i]] = [nums[i], nums[slow]];", // 4
  "      slow++;", //                                        5
  "    }", //                                                6
  "  }", //                                                  7
  "  return nums;", //                                       8
  "}", //                                                    9
];
