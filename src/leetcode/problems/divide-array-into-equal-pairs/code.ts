export const CODE = [
  "function divideArray(nums) {", //                          0
  "  const count = new Map();", //                            1
  "  for (const n of nums)", //                               2
  "    count.set(n, (count.get(n) ?? 0) + 1);", //            3
  "  for (const c of count.values())", //                     4
  "    if (c % 2 !== 0) return false;   // odd count", //     5
  "  return true;", //                                        6
  "}", //                                                     7
];
