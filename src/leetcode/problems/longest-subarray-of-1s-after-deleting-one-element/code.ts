export const CODE = [
  "function longestSubarray(nums) {", //                      0
  "  let left = 0, zeros = 0, best = 0;", //                  1
  "  for (let right = 0; right < nums.length; right++) {", // 2
  "    if (nums[right] === 0) zeros++;", //                   3
  "    while (zeros > 1) {   // at most one zero", //         4
  "      if (nums[left] === 0) zeros--;", //                  5
  "      left++;", //                                         6
  "    }", //                                                 7
  "    best = Math.max(best, right - left);", //              8
  "  }", //                                                   9
  "  return best;   // window size minus deleted cell", //   10
  "}", //                                                    11
];
