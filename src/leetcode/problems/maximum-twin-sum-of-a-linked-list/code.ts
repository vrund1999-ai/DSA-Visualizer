export const CODE = [
  "function pairSum(head) {", //                              0
  "  const vals = toArray(head);", //                         1
  "  let l = 0, r = vals.length - 1, best = 0;", //           2
  "  while (l < r) {", //                                     3
  "    const twin = vals[l] + vals[r];   // twin pair", //    4
  "    best = Math.max(best, twin);", //                      5
  "    l++; r--;", //                                         6
  "  }", //                                                   7
  "  return best;", //                                        8
  "}", //                                                     9
];
