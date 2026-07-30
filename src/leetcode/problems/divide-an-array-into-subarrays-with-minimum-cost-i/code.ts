export const CODE = [
  "function minimumCost(nums) {", //                          0
  "  const first = nums[0];      // subarray 1 fixed", //     1
  "  let m1 = Infinity, m2 = Infinity;  // two smallest", //  2
  "  for (let i = 1; i < nums.length; i++) {", //             3
  "    if (nums[i] < m1) { m2 = m1; m1 = nums[i]; }", //      4
  "    else if (nums[i] < m2) { m2 = nums[i]; }", //          5
  "  }", //                                                   6
  "  return first + m1 + m2;", //                             7
  "}", //                                                     8
];
