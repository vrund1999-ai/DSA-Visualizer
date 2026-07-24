export const CODE = [
  "function frequencySort(nums) {", //                        0
  "  const freq = new Map();", //                             1
  "  for (const x of nums)", //                               2
  "    freq.set(x, (freq.get(x) ?? 0) + 1);", //             3
  "  return nums.sort((a, b) =>", //                          4
  "    freq.get(a) - freq.get(b)   // rarer first", //        5
  "    || b - a);                  // tie: larger first", //  6
  "}", //                                                     7
];
