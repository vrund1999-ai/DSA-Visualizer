export const CODE = [
  "function maxOperations(nums, k) {", //                     0
  "  nums.sort((a, b) => a - b);", //                         1
  "  let l = 0, r = nums.length - 1, ops = 0;", //            2
  "  while (l < r) {", //                                     3
  "    const sum = nums[l] + nums[r];", //                    4
  "    if (sum === k) {", //                                  5
  "      ops++; l++; r--;   // remove the pair", //           6
  "    } else if (sum < k) {", //                             7
  "      l++;   // need a bigger sum", //                     8
  "    } else {", //                                          9
  "      r--;   // need a smaller sum", //                   10
  "    }", //                                                11
  "  }", //                                                  12
  "  return ops;", //                                        13
  "}", //                                                    14
];
