export const CODE = [
  "function smallestDistancePair(nums, k) {", //              0
  "  nums.sort((a, b) => a - b);", //                         1
  "  let lo = 0, hi = nums[nums.length - 1] - nums[0];", //   2
  "  const countLE = (d) => {   // pairs with distance <= d", // 3
  "    let count = 0, j = 0;", //                             4
  "    for (let i = 0; i < nums.length; i++) {", //           5
  "      while (nums[i] - nums[j] > d) j++;", //              6
  "      count += i - j;", //                                 7
  "    }", //                                                 8
  "    return count;", //                                     9
  "  };", //                                                 10
  "  while (lo < hi) {", //                                  11
  "    const mid = (lo + hi) >> 1;", //                      12
  "    if (countLE(mid) >= k) hi = mid;", //                 13
  "    else lo = mid + 1;", //                               14
  "  }", //                                                  15
  "  return lo;", //                                         16
  "}", //                                                    17
];
