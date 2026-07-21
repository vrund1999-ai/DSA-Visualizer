export const CODE = [
  "function findMin(nums) {", //                        0
  "  let lo = 0, hi = nums.length - 1;", //             1
  "  while (lo < hi) {", //                             2
  "    const mid = (lo + hi) >> 1;", //                 3
  "    if (nums[mid] > nums[hi]) lo = mid + 1;", //     4
  "    else hi = mid;", //                              5
  "  }", //                                             6
  "  return nums[lo];", //                              7
  "}", //                                               8
];
