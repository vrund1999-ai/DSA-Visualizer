export const CODE = [
  "function findPeakElement(nums) {", //                 0
  "  let lo = 0, hi = nums.length - 1;", //              1
  "  while (lo < hi) {", //                              2
  "    const mid = (lo + hi) >> 1;", //                  3
  "    if (nums[mid] < nums[mid + 1]) lo = mid + 1;", // 4
  "    else hi = mid;", //                               5
  "  }", //                                              6
  "  return lo;", //                                     7
  "}", //                                                8
];
