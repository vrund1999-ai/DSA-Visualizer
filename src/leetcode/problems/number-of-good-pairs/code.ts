export const CODE = [
  "function numIdenticalPairs(nums) {", //                    0
  "  const seen = new Map();", //                             1
  "  let pairs = 0;", //                                      2
  "  for (const n of nums) {", //                             3
  "    const c = seen.get(n) ?? 0;", //                       4
  "    pairs += c;   // pairs with earlier equal values", //  5
  "    seen.set(n, c + 1);", //                               6
  "  }", //                                                   7
  "  return pairs;", //                                       8
  "}", //                                                     9
];
