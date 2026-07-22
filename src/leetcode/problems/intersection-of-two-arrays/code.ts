export const CODE = [
  "function intersection(nums1, nums2) {", //                   0
  "  const set = new Set(nums1);", //                           1
  "  const res = new Set();", //                                2
  "  for (const x of nums2)", //                                3
  "    if (set.has(x)) res.add(x);", //                         4
  "  return [...res];", //                                      5
  "}", //                                                       6
];
