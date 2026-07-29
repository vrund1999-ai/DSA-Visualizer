export const CODE = [
  "function smallestDivisor(nums, threshold) {", //           0
  "  let lo = 1, hi = Math.max(...nums);", //                 1
  "  const cost = (d) =>", //                                 2
  "    nums.reduce((s, n) => s + Math.ceil(n / d), 0);", //   3
  "  while (lo < hi) {", //                                   4
  "    const mid = (lo + hi) >> 1;", //                       5
  "    if (cost(mid) <= threshold) hi = mid;   // ok, smaller", // 6
  "    else lo = mid + 1;                        // too big", // 7
  "  }", //                                                   8
  "  return lo;", //                                          9
  "}", //                                                    10
];
