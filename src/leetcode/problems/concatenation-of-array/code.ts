export const CODE = [
  "function getConcatenation(nums) {", //                     0
  "  const n = nums.length, ans = new Array(2 * n);", //      1
  "  for (let i = 0; i < n; i++) {", //                       2
  "    ans[i] = nums[i];        // first copy", //            3
  "    ans[i + n] = nums[i];    // second copy", //           4
  "  }", //                                                   5
  "  return ans;", //                                         6
  "}", //                                                     7
];
