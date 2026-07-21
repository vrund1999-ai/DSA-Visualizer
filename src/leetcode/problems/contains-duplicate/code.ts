export const CODE = [
  "function containsDuplicate(nums) {", //          0
  "  const seen = new Set();", //                   1
  "  for (const x of nums) {", //                   2
  "    if (seen.has(x)) return true;", //           3
  "    seen.add(x);", //                            4
  "  }", //                                         5
  "  return false;", //                             6
  "}", //                                           7
];
