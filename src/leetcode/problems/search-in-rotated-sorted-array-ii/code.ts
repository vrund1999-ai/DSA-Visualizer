export const CODE = [
  "function search(nums, target) {", //                       0
  "  let lo = 0, hi = nums.length - 1;", //                   1
  "  while (lo <= hi) {", //                                  2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    if (nums[mid] === target) return true;", //            4
  "    if (nums[lo] === nums[mid] && nums[mid] === nums[hi]){",//5
  "      lo++; hi--;   // can't tell side — trim ends", //    6
  "    } else if (nums[lo] <= nums[mid]) {   // left sorted",//7
  "      if (nums[lo] <= target && target < nums[mid])", //   8
  "        hi = mid - 1; else lo = mid + 1;", //              9
  "    } else {                              // right sorted",//10
  "      if (nums[mid] < target && target <= nums[hi])", //   11
  "        lo = mid + 1; else hi = mid - 1;", //              12
  "    }", //                                                 13
  "  }", //                                                   14
  "  return false;", //                                       15
  "}", //                                                     16
];
