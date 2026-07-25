export const CODE = [
  "function minCapability(nums, k) {", //                     0
  "  let lo = Math.min(...nums), hi = Math.max(...nums);", // 1
  "  const canRob = (cap) => {", //                           2
  "    let count = 0;", //                                    3
  "    for (let i = 0; i < nums.length; i++)", //             4
  "      if (nums[i] <= cap) { count++; i++; }  // skip next", // 5
  "    return count >= k;", //                                6
  "  };", //                                                  7
  "  while (lo < hi) {", //                                   8
  "    const mid = (lo + hi) >> 1;", //                       9
  "    if (canRob(mid)) hi = mid;   // try smaller cap", //  10
  "    else lo = mid + 1;", //                               11
  "  }", //                                                  12
  "  return lo;", //                                         13
  "}", //                                                    14
];
