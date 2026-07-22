export const CODE = [
  "function removeElement(nums, val) {", //                    0
  "  let k = 0;   // next write slot", //                     1
  "  for (let i = 0; i < nums.length; i++) {", //             2
  "    if (nums[i] !== val) {", //                            3
  "      nums[k] = nums[i];", //                              4
  "      k++;", //                                            5
  "    }", //                                                 6
  "  }", //                                                   7
  "  return k;", //                                           8
  "}", //                                                     9
];
