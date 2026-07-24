export const CODE = [
  "function numSubarraysWithSum(nums, goal) {", //            0
  "  const seen = new Map([[0, 1]]);  // prefix -> count", // 1
  "  let sum = 0, ans = 0;", //                               2
  "  for (const x of nums) {", //                             3
  "    sum += x;", //                                         4
  "    // subarrays ending here with the target sum", //     5
  "    ans += seen.get(sum - goal) ?? 0;", //                6
  "    seen.set(sum, (seen.get(sum) ?? 0) + 1);", //         7
  "  }", //                                                   8
  "  return ans;", //                                        9
  "}", //                                                    10
];
