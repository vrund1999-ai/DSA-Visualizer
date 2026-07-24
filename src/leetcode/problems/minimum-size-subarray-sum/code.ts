export const CODE = [
  "function minSubArrayLen(target, nums) {", //                     0
  "  let left = 0, sum = 0, best = Infinity;", //                  1
  "  for (let right = 0; right < nums.length; right++) {", //      2
  "    sum += nums[right];", //                                    3
  "    while (sum >= target) {          // shrink", //             4
  "      best = Math.min(best, right - left + 1);", //             5
  "      sum -= nums[left++];", //                                 6
  "    }", //                                                      7
  "  }", //                                                        8
  "  return best === Infinity ? 0 : best;", //                     9
  "}", //                                                          10
];
