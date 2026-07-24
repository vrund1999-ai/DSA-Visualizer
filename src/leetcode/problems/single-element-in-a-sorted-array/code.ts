export const CODE = [
  "function singleNonDuplicate(nums) {", //                    0
  "  let lo = 0, hi = nums.length - 1;", //                   1
  "  while (lo < hi) {", //                                   2
  "    let mid = (lo + hi) >> 1;", //                         3
  "    if (mid % 2 === 1) mid--;   // align to even", //     4
  "    if (nums[mid] === nums[mid + 1]) lo = mid + 2;", //   5
  "    else hi = mid;", //                                    6
  "  }", //                                                   7
  "  return nums[lo];", //                                    8
  "}", //                                                     9
];
