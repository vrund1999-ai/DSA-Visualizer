export const CODE = [
  "function sortColors(nums) {", //                              0
  "  let low = 0, mid = 0, high = nums.length - 1;", //         1
  "  while (mid <= high) {", //                                 2
  "    if (nums[mid] === 0) {", //                              3
  "      swap(nums, low++, mid++);", //                         4
  "    } else if (nums[mid] === 2) {", //                       5
  "      swap(nums, mid, high--);", //                          6
  "    } else {", //                                            7
  "      mid++;", //                                            8
  "    }", //                                                   9
  "  }", //                                                     10
  "  return nums;", //                                          11
  "}", //                                                       12
];
