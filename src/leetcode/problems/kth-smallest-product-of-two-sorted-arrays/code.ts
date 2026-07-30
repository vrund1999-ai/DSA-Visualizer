export const CODE = [
  "function kthSmallestProduct(nums1, nums2, k) {", //        0
  "  const countLE = x => {   // pairs with product <= x", // 1
  "    let c = 0;", //                                        2
  "    for (const a of nums1) {", //                          3
  "      if (a > 0) c += countBelow(nums2, x / a);", //       4
  "      else if (a < 0) c += countAbove(nums2, x / a);", //  5
  "      else if (x >= 0) c += nums2.length;", //             6
  "    }", //                                                 7
  "    return c;", //                                         8
  "  };", //                                                  9
  "  let lo = -1e10, hi = 1e10;", //                         10
  "  while (lo < hi) {", //                                  11
  "    const mid = Math.floor((lo + hi) / 2);", //           12
  "    if (countLE(mid) >= k) hi = mid;", //                 13
  "    else lo = mid + 1;", //                               14
  "  }", //                                                  15
  "  return lo;", //                                         16
  "}", //                                                    17
];
