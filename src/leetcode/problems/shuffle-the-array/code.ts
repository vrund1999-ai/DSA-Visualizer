export const CODE = [
  "function shuffle(nums, n) {", //                           0
  "  const res = [];", //                                     1
  "  for (let i = 0; i < n; i++) {", //                       2
  "    res.push(nums[i]);       // x_i", //                   3
  "    res.push(nums[i + n]);   // y_i", //                   4
  "  }", //                                                   5
  "  return res;", //                                         6
  "}", //                                                     7
];
