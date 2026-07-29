export const CODE = [
  "function intersect(nums1, nums2) {", //                    0
  "  const count = new Map();", //                            1
  "  for (const n of nums1)", //                              2
  "    count.set(n, (count.get(n) ?? 0) + 1);", //            3
  "  const result = [];", //                                  4
  "  for (const n of nums2) {", //                            5
  "    if (count.get(n) > 0) {", //                           6
  "      result.push(n);", //                                 7
  "      count.set(n, count.get(n) - 1);", //                 8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return result;", //                                     11
  "}", //                                                    12
];
