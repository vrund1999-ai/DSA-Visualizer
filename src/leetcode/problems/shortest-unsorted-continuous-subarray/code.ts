export const CODE = [
  "function findUnsortedSubarray(nums) {", //                 0
  "  const n = nums.length;", //                              1
  "  let right = -1, maxSeen = -Infinity;", //                2
  "  for (let i = 0; i < n; i++) {", //                       3
  "    if (nums[i] < maxSeen) right = i;   // out of place", //4
  "    else maxSeen = nums[i];", //                           5
  "  }", //                                                   6
  "  let left = n, minSeen = Infinity;", //                   7
  "  for (let i = n - 1; i >= 0; i--) {", //                  8
  "    if (nums[i] > minSeen) left = i;", //                  9
  "    else minSeen = nums[i];", //                          10
  "  }", //                                                  11
  "  return right <= left ? 0 : right - left + 1;", //       12
  "}", //                                                    13
];
