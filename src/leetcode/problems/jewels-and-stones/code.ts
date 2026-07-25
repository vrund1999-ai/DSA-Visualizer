export const CODE = [
  "function numJewelsInStones(jewels, stones) {", //          0
  "  const set = new Set(jewels);", //                        1
  "  let count = 0;", //                                      2
  "  for (const s of stones) {", //                           3
  "    if (set.has(s)) count++;   // it's a jewel", //        4
  "  }", //                                                   5
  "  return count;", //                                       6
  "}", //                                                     7
];
