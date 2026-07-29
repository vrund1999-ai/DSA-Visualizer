export const CODE = [
  "function countHillValley(nums) {", //                      0
  "  let count = 0, prev = nums[0];", //                      1
  "  for (let i = 1; i < nums.length - 1; i++) {", //         2
  "    if (nums[i] === nums[i + 1]) continue;   // plateau", // 3
  "    const left = prev, right = nums[i + 1];", //           4
  "    if ((nums[i] > left && nums[i] > right) ||", //        5
  "        (nums[i] < left && nums[i] < right))", //          6
  "      count++;   // hill or valley", //                    7
  "    prev = nums[i];", //                                   8
  "  }", //                                                   9
  "  return count;", //                                      10
  "}", //                                                    11
];
