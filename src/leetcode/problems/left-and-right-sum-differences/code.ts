export const CODE = [
  "function leftRightDifference(nums) {", //                  0
  "  const total = nums.reduce((a, b) => a + b, 0);", //      1
  "  const ans = [];", //                                     2
  "  let left = 0;", //                                       3
  "  for (let i = 0; i < nums.length; i++) {", //             4
  "    const right = total - left - nums[i];", //             5
  "    ans.push(Math.abs(left - right));", //                 6
  "    left += nums[i];", //                                  7
  "  }", //                                                   8
  "  return ans;", //                                         9
  "}", //                                                    10
];
