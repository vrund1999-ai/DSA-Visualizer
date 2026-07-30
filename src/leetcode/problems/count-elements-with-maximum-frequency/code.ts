export const CODE = [
  "function maxFrequencyElements(nums) {", //                 0
  "  const freq = new Map();", //                             1
  "  for (const x of nums)", //                               2
  "    freq.set(x, (freq.get(x) ?? 0) + 1);", //             3
  "  const max = Math.max(...freq.values());", //            4
  "  let total = 0;", //                                      5
  "  for (const c of freq.values())", //                     6
  "    if (c === max) total += c;", //                        7
  "  return total;", //                                       8
  "}", //                                                     9
];
