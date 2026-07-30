export const CODE = [
  "function maxDistance(arrays) {", //                        0
  "  let lo = arrays[0][0];", //                              1
  "  let hi = arrays[0].at(-1);", //                          2
  "  let best = 0;", //                                       3
  "  for (let i = 1; i < arrays.length; i++) {", //           4
  "    const a = arrays[i];", //                              5
  "    // pair across different arrays only", //              6
  "    best = Math.max(best,", //                             7
  "      Math.abs(a.at(-1) - lo),", //                        8
  "      Math.abs(hi - a[0]));", //                           9
  "    lo = Math.min(lo, a[0]);", //                         10
  "    hi = Math.max(hi, a.at(-1));", //                     11
  "  }", //                                                  12
  "  return best;", //                                       13
  "}", //                                                    14
];
