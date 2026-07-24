export const CODE = [
  "function minDays(bloomDay, m, k) {", //                    0
  "  if (m * k > bloomDay.length) return -1;", //             1
  "  let lo = Math.min(...bloomDay);", //                     2
  "  let hi = Math.max(...bloomDay);", //                     3
  "  const canMake = (day) => {", //                          4
  "    let bouquets = 0, run = 0;", //                        5
  "    for (const b of bloomDay) {", //                       6
  "      run = b <= day ? run + 1 : 0;", //                   7
  "      if (run === k) { bouquets++; run = 0; }", //         8
  "    }", //                                                 9
  "    return bouquets >= m;", //                             10
  "  };", //                                                  11
  "  while (lo < hi) {", //                                   12
  "    const mid = (lo + hi) >> 1;", //                       13
  "    if (canMake(mid)) hi = mid; else lo = mid + 1;", //    14
  "  }", //                                                   15
  "  return lo;", //                                          16
  "}", //                                                     17
];
