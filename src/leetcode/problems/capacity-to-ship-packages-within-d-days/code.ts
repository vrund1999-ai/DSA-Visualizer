export const CODE = [
  "function shipWithinDays(weights, days) {", //              0
  "  let lo = Math.max(...weights);", //                      1
  "  let hi = weights.reduce((a, b) => a + b, 0);", //        2
  "  while (lo < hi) {", //                                   3
  "    const cap = (lo + hi) >> 1;", //                       4
  "    let need = 1, load = 0;", //                           5
  "    for (const w of weights) {", //                        6
  "      if (load + w > cap) { need++; load = 0; }", //       7
  "      load += w;", //                                      8
  "    }", //                                                 9
  "    if (need <= days) hi = cap;   // cap works", //        10
  "    else lo = cap + 1;            // too small", //        11
  "  }", //                                                   12
  "  return lo;", //                                          13
  "}", //                                                     14
];
