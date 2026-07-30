export const CODE = [
  "function findDifference(nums1, nums2) {", //               0
  "  const s1 = new Set(nums1), s2 = new Set(nums2);", //     1
  "  const only1 = [], only2 = [];", //                       2
  "  for (const x of s1)", //                                 3
  "    if (!s2.has(x)) only1.push(x);   // in 1 not 2", //    4
  "  for (const x of s2)", //                                 5
  "    if (!s1.has(x)) only2.push(x);   // in 2 not 1", //    6
  "  return [only1, only2];", //                              7
  "}", //                                                     8
];
