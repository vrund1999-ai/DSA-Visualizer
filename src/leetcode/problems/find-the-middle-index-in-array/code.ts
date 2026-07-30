export const CODE = [
  "function findMiddleIndex(nums) {", //                      0
  "  const total = nums.reduce((a, b) => a + b, 0);", //      1
  "  let left = 0;", //                                       2
  "  for (let i = 0; i < nums.length; i++) {", //             3
  "    const right = total - left - nums[i];", //             4
  "    if (left === right) return i;   // balanced", //       5
  "    left += nums[i];", //                                  6
  "  }", //                                                   7
  "  return -1;", //                                          8
  "}", //                                                     9
];
