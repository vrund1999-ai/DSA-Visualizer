export const CODE = [
  "function removeDuplicates(nums) {", //                    0
  "  if (nums.length === 0) return 0;", //                   1
  "  let slow = 0;", //                                      2
  "  for (let fast = 1; fast < nums.length; fast++) {", //   3
  "    if (nums[fast] !== nums[slow]) {", //                 4
  "      slow++;", //                                        5
  "      nums[slow] = nums[fast];", //                       6
  "    }", //                                                7
  "  }", //                                                  8
  "  return slow + 1;", //                                   9
  "}", //                                                    10
];
