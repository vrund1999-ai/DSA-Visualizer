export const CODE = [
  "function largestPerimeter(nums) {", //                     0
  "  nums.sort((a, b) => b - a);   // descending", //         1
  "  for (let i = 0; i + 2 < nums.length; i++) {", //         2
  "    const [a, b, c] = [nums[i], nums[i+1], nums[i+2]];", //3
  "    if (b + c > a)   // triangle inequality", //           4
  "      return a + b + c;", //                               5
  "  }", //                                                   6
  "  return 0;   // no valid triangle", //                    7
  "}", //                                                     8
];
