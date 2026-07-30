export const CODE = [
  "function waysToSplitArray(nums) {", //                     0
  "  const total = nums.reduce((a, b) => a + b, 0);", //      1
  "  let left = 0, count = 0;", //                            2
  "  for (let i = 0; i < nums.length - 1; i++) {", //         3
  "    left += nums[i];", //                                  4
  "    const right = total - left;", //                       5
  "    if (left >= right) count++;   // valid split", //      6
  "  }", //                                                   7
  "  return count;", //                                       8
  "}", //                                                     9
];
