export const CODE = [
  "function search(nums, target) {", //                       0
  "  let lo = 0, hi = nums.length - 1;", //                   1
  "  while (lo <= hi) {", //                                  2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    if (nums[mid] === target) return mid;", //             4
  "    if (nums[lo] <= nums[mid]) {         // left sorted", //5
  "      if (nums[lo] <= target && target < nums[mid])", //   6
  "        hi = mid - 1; else lo = mid + 1;", //              7
  "    } else {                             // right sorted", //8
  "      if (nums[mid] < target && target <= nums[hi])", //   9
  "        lo = mid + 1; else hi = mid - 1;", //              10
  "    }", //                                                 11
  "  }", //                                                   12
  "  return -1;", //                                          13
  "}", //                                                     14
];
