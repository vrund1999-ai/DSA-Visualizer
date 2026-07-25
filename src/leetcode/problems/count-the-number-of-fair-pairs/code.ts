export const CODE = [
  "function countFairPairs(nums, lower, upper) {", //         0
  "  nums.sort((a, b) => a - b);", //                         1
  "  // pairs with sum <= x, via two pointers", //            2
  "  const countLE = (x) => {", //                            3
  "    let l = 0, r = nums.length - 1, c = 0;", //            4
  "    while (l < r) {", //                                   5
  "      if (nums[l] + nums[r] <= x) {", //                   6
  "        c += r - l;   // all r' in (l, r] pair with l", // 7
  "        l++;", //                                          8
  "      } else r--;", //                                     9
  "    }", //                                                10
  "    return c;", //                                        11
  "  };", //                                                 12
  "  return countLE(upper) - countLE(lower - 1);", //        13
  "}", //                                                    14
];
