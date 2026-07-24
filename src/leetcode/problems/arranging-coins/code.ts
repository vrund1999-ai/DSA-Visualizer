export const CODE = [
  "function arrangeCoins(n) {", //                            0
  "  let lo = 0, hi = n;", //                                 1
  "  while (lo <= hi) {", //                                  2
  "    const k = (lo + hi) >> 1;", //                         3
  "    const need = k * (k + 1) / 2;   // full k rows", //    4
  "    if (need === n) return k;", //                         5
  "    else if (need < n) lo = k + 1;", //                    6
  "    else hi = k - 1;", //                                  7
  "  }", //                                                   8
  "  return hi;   // last k that fit", //                     9
  "}", //                                                    10
];
