export const CODE = [
  "function maximumUniqueSubarray(nums) {", //                0
  "  const seen = new Set();", //                             1
  "  let left = 0, sum = 0, best = 0;", //                    2
  "  for (let right = 0; right < nums.length; right++) {", // 3
  "    while (seen.has(nums[right])) {   // duplicate", //    4
  "      seen.delete(nums[left]);", //                        5
  "      sum -= nums[left++];   // shrink", //                6
  "    }", //                                                 7
  "    seen.add(nums[right]);", //                            8
  "    sum += nums[right];", //                               9
  "    best = Math.max(best, sum);", //                      10
  "  }", //                                                  11
  "  return best;", //                                       12
  "}", //                                                    13
];
