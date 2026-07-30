export const CODE = [
  "function maxNumber(nums1, nums2, k) {", //                 0
  "  let best = [];", //                                      1
  "  for (let i = Math.max(0, k - nums2.length);", //         2
  "       i <= Math.min(k, nums1.length); i++) {", //         3
  "    const a = maxSub(nums1, i);        // i digits", //    4
  "    const b = maxSub(nums2, k - i);    // k - i digits", //5
  "    const cand = merge(a, b);", //                         6
  "    if (greater(cand, 0, best, 0)) best = cand;", //       7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                    10
  "// maxSub: monotonic stack keeping t largest, in order", //11
  "// merge: repeatedly take the lexicographically larger", //12
];
