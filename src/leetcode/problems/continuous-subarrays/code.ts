export const CODE = [
  "function continuousSubarrays(nums) {", //                  0
  "  const maxDq = [], minDq = [];   // monotonic", //        1
  "  let left = 0, total = 0;", //                            2
  "  for (let right = 0; right < nums.length; right++) {", // 3
  "    while (maxDq.length && nums[maxDq.at(-1)] < nums[right]) maxDq.pop();", //4
  "    while (minDq.length && nums[minDq.at(-1)] > nums[right]) minDq.pop();", //5
  "    maxDq.push(right); minDq.push(right);", //             6
  "    while (nums[maxDq[0]] - nums[minDq[0]] > 2) {", //     7
  "      left++;   // shrink: window max-min too big", //     8
  "      if (maxDq[0] < left) maxDq.shift();", //             9
  "      if (minDq[0] < left) minDq.shift();", //            10
  "    }", //                                                11
  "    total += right - left + 1;   // valid subarrays", //  12
  "  }", //                                                  13
  "  return total;", //                                      14
  "}", //                                                    15
];
