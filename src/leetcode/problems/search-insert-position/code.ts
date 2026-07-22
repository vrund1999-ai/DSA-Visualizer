export const CODE = [
  "function searchInsert(nums, target) {", //                 0
  "  let lo = 0, hi = nums.length;", //                       1
  "  while (lo < hi) {", //                                   2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    if (nums[mid] < target) lo = mid + 1;", //             4
  "    else hi = mid;", //                                    5
  "  }", //                                                   6
  "  return lo;   // insertion index", //                     7
  "}", //                                                     8
];
