export const CODE = [
  "function longestConsecutive(nums) {", //                 0
  "  const set = new Set(nums);", //                        1
  "  let best = 0;", //                                     2
  "  for (const n of set) {", //                            3
  "    if (!set.has(n - 1)) {          // a run start", //  4
  "      let len = 1, cur = n;", //                         5
  "      while (set.has(cur + 1)) { cur++; len++; }", //    6
  "      best = Math.max(best, len);", //                   7
  "    }", //                                               8
  "  }", //                                                 9
  "  return best;", //                                      10
  "}", //                                                   11
];
