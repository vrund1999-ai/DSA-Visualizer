export const CODE = [
  "function isMonotonic(nums) {", //                          0
  "  let inc = true, dec = true;", //                         1
  "  for (let i = 1; i < nums.length; i++) {", //             2
  "    if (nums[i] > nums[i-1]) dec = false;", //             3
  "    if (nums[i] < nums[i-1]) inc = false;", //             4
  "  }", //                                                   5
  "  return inc || dec;   // one direction holds", //         6
  "}", //                                                     7
];
