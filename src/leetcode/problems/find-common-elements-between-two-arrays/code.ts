export const CODE = [
  "function findIntersectionValues(nums1, nums2) {", //       0
  "  const set1 = new Set(nums1);", //                        1
  "  const set2 = new Set(nums2);", //                        2
  "  let count1 = 0, count2 = 0;", //                         3
  "  for (const x of nums1)", //                              4
  "    if (set2.has(x)) count1++;   // nums1 value in nums2", //5
  "  for (const x of nums2)", //                              6
  "    if (set1.has(x)) count2++;   // nums2 value in nums1", //7
  "  return [count1, count2];", //                            8
  "}", //                                                     9
];
