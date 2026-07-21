export const CODE = [
  "function productExceptSelf(nums) {", //                 0
  "  const res = new Array(nums.length).fill(1);", //      1
  "  let prefix = 1;", //                                  2
  "  for (let i = 0; i < nums.length; i++) {", //          3
  "    res[i] = prefix;", //                               4
  "    prefix *= nums[i];", //                             5
  "  }", //                                                6
  "  let suffix = 1;", //                                  7
  "  for (let i = nums.length - 1; i >= 0; i--) {", //     8
  "    res[i] *= suffix;", //                              9
  "    suffix *= nums[i];", //                             10
  "  }", //                                                11
  "  return res;", //                                      12
  "}", //                                                  13
];
