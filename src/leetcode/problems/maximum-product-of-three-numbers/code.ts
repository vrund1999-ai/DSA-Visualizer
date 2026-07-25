export const CODE = [
  "function maximumProduct(nums) {", //                       0
  "  nums.sort((a, b) => a - b);", //                         1
  "  const n = nums.length;", //                              2
  "  const topThree = nums[n-1] * nums[n-2] * nums[n-3];", // 3
  "  const twoLow = nums[0] * nums[1] * nums[n-1];", //       4
  "  return Math.max(topThree, twoLow);", //                  5
  "}", //                                                     6
];
