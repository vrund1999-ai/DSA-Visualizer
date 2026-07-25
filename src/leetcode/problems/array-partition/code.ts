export const CODE = [
  "function arrayPairSum(nums) {", //                         0
  "  nums.sort((a, b) => a - b);", //                         1
  "  let sum = 0;", //                                        2
  "  for (let i = 0; i < nums.length; i += 2)", //            3
  "    sum += nums[i];   // smaller of each sorted pair", //  4
  "  return sum;", //                                         5
  "}", //                                                     6
];
