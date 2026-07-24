export const CODE = [
  "function check(nums) {", //                              0
  "  const n = nums.length;", //                           1
  "  let breaks = 0;", //                                  2
  "  for (let i = 0; i < n; i++)", //                      3
  "    if (nums[i] > nums[(i + 1) % n]) breaks++;", //     4
  "  return breaks <= 1;   // at most one drop", //        5
  "}", //                                                  6
];
