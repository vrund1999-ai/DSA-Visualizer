export const CODE = [
  "function numSubseq(nums, target) {", //                    0
  "  const MOD = 1e9 + 7;", //                                1
  "  nums.sort((a, b) => a - b);", //                         2
  "  const pow = precomputePow2(nums.length);", //            3
  "  let lo = 0, hi = nums.length - 1, count = 0;", //        4
  "  while (lo <= hi) {", //                                  5
  "    if (nums[lo] + nums[hi] <= target) {", //              6
  "      count = (count + pow[hi - lo]) % MOD;   // 2^gap", // 7
  "      lo++;   // fix min, all subsets in between work", // 8
  "    } else {", //                                          9
  "      hi--;   // max too big, shrink", //                 10
  "    }", //                                                11
  "  }", //                                                  12
  "  return count;", //                                      13
  "}", //                                                    14
];
