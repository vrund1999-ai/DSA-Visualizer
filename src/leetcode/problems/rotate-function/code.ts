export const CODE = [
  "function maxRotateFunction(nums) {", //                    0
  "  const n = nums.length;", //                              1
  "  const total = nums.reduce((a, b) => a + b, 0);", //      2
  "  let f = nums.reduce((a, v, i) => a + i * v, 0);", //     3
  "  let max = f;   // F(0)", //                              4
  "  for (let k = 1; k < n; k++) {", //                       5
  "    // rotating moves nums[n-k] from weight n-1 to 0", //  6
  "    f += total - n * nums[n - k];", //                     7
  "    max = Math.max(max, f);", //                           8
  "  }", //                                                   9
  "  return max;", //                                        10
  "}", //                                                    11
];
