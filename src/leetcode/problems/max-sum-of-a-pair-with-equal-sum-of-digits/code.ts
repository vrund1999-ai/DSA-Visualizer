export const CODE = [
  "function maximumSum(nums) {", //                           0
  "  const best = new Map();  // digitSum -> largest so far", // 1
  "  let ans = -1;", //                                       2
  "  for (const n of nums) {", //                             3
  "    const ds = digitSum(n);", //                           4
  "    if (best.has(ds))", //                                 5
  "      ans = Math.max(ans, n + best.get(ds));", //          6
  "    if (n > (best.get(ds) ?? 0))", //                      7
  "      best.set(ds, n);   // keep the biggest per bucket", // 8
  "  }", //                                                   9
  "  return ans;", //                                        10
  "}", //                                                    11
];
