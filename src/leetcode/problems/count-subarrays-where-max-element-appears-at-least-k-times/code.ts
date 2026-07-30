export const CODE = [
  "function countSubarrays(nums, k) {", //                    0
  "  const mx = Math.max(...nums);", //                       1
  "  let total = 0, count = 0, left = 0;", //                 2
  "  for (let right = 0; right < nums.length; right++) {", // 3
  "    if (nums[right] === mx) count++;", //                  4
  "    while (count >= k) {", //                              5
  "      if (nums[left] === mx) count--;", //                 6
  "      left++;   // shrink past a max", //                  7
  "    }", //                                                 8
  "    total += left;   // valid left starts", //             9
  "  }", //                                                  10
  "  return total;", //                                      11
  "}", //                                                    12
];
