export const CODE = [
  "function search(nums, target) {", //                    0
  "  let lo = 0, hi = nums.length - 1;", //                1
  "  while (lo <= hi) {", //                               2
  "    const mid = (lo + hi) >> 1;", //                    3
  "    if (nums[mid] === target) return mid;", //          4
  "    if (nums[mid] < target) lo = mid + 1;", //          5
  "    else hi = mid - 1;", //                             6
  "  }", //                                                7
  "  return -1;", //                                       8
  "}", //                                                  9
];
