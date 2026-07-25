export const CODE = [
  "function maximumSubarraySum(nums, k) {", //                0
  "  const seen = new Map();   // value -> count", //         1
  "  let sum = 0, best = 0;", //                              2
  "  for (let i = 0; i < nums.length; i++) {", //             3
  "    sum += nums[i];", //                                   4
  "    seen.set(nums[i], (seen.get(nums[i]) ?? 0) + 1);", //  5
  "    if (i >= k) {   // shrink to size k", //               6
  "      sum -= nums[i - k];", //                             7
  "      dec(seen, nums[i - k]);", //                         8
  "    }", //                                                 9
  "    if (i >= k - 1 && seen.size === k)   // all distinct",//10
  "      best = Math.max(best, sum);", //                    11
  "  }", //                                                  12
  "  return best;", //                                       13
  "}", //                                                    14
];
