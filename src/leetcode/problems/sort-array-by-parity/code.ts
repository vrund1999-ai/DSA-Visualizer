export const CODE = [
  "function sortArrayByParity(nums) {", //                    0
  "  let i = 0, j = nums.length - 1;", //                     1
  "  while (i < j) {", //                                     2
  "    if (nums[i] % 2 === 0) i++;        // even, keep left",//3
  "    else if (nums[j] % 2 === 1) j--;   // odd, keep right",//4
  "    else {", //                                            5
  "      [nums[i], nums[j]] = [nums[j], nums[i]];   // swap",//6
  "      i++; j--;", //                                       7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return nums;", //                                       10
  "}", //                                                    11
];
