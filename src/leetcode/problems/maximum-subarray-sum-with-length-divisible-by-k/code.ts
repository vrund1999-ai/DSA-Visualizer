export const CODE = [
  "function maxSubarraySum(nums, k) {", //                    0
  "  let prefix = 0, ans = -Infinity;", //                    1
  "  const best = new Map([[0, 0]]);   // residue -> min", // 2
  "  for (let i = 1; i <= nums.length; i++) {", //            3
  "    prefix += nums[i - 1];", //                            4
  "    const r = i % k;   // index residue", //               5
  "    if (best.has(r))", //                                  6
  "      ans = Math.max(ans, prefix - best.get(r));", //      7
  "    best.set(r, Math.min(", //                             8
  "      best.get(r) ?? Infinity, prefix));", //              9
  "  }", //                                                  10
  "  return ans;", //                                        11
  "}", //                                                    12
];
