export const CODE = [
  "function isZeroArray(nums, queries) {", //                 0
  "  const n = nums.length;", //                              1
  "  const diff = Array(n + 1).fill(0);", //                  2
  "  for (const [l, r] of queries) {", //                     3
  "    diff[l]++;   // +1 decrement available", //            4
  "    diff[r + 1]--;", //                                    5
  "  }", //                                                   6
  "  let capacity = 0;", //                                   7
  "  for (let i = 0; i < n; i++) {", //                       8
  "    capacity += diff[i];   // prefix sum", //              9
  "    if (nums[i] > capacity) return false;", //            10
  "  }", //                                                  11
  "  return true;   // all reducible to 0", //               12
  "}", //                                                    13
];
