export const CODE = [
  "function maxWidthRamp(nums) {", //                         0
  "  const stack = [];   // decreasing values, by index", //  1
  "  for (let i = 0; i < nums.length; i++)", //               2
  "    if (!stack.length || nums[stack.at(-1)] > nums[i])", //3
  "      stack.push(i);   // candidate ramp starts", //       4
  "  let best = 0;", //                                       5
  "  for (let j = nums.length - 1; j >= 0; j--) {", //        6
  "    while (stack.length &&", //                            7
  "           nums[stack.at(-1)] <= nums[j]) {", //           8
  "      best = Math.max(best, j - stack.pop());", //         9
  "    }", //                                                10
  "  }", //                                                  11
  "  return best;", //                                       12
  "}", //                                                    13
];
