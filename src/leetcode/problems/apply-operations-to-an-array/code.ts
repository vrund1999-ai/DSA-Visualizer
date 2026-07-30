export const CODE = [
  "function applyOperations(nums) {", //                      0
  "  const n = nums.length;", //                              1
  "  for (let i = 0; i < n - 1; i++) {", //                   2
  "    if (nums[i] === nums[i + 1]) {", //                    3
  "      nums[i] *= 2;   // merge equal neighbors", //        4
  "      nums[i + 1] = 0;", //                                5
  "    }", //                                                 6
  "  }", //                                                   7
  "  let j = 0;   // shift non-zeros left", //                8
  "  for (let i = 0; i < n; i++)", //                         9
  "    if (nums[i] !== 0) nums[j++] = nums[i];", //          10
  "  while (j < n) nums[j++] = 0;", //                       11
  "  return nums;", //                                       12
  "}", //                                                    13
];
