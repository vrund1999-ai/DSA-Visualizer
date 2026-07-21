export const CODE = [
  "function minEatingSpeed(piles, h) {", //                              0
  "  let lo = 1, hi = Math.max(...piles);", //                          1
  "  while (lo < hi) {", //                                             2
  "    const mid = (lo + hi) >> 1;", //                                 3
  "    const hours = piles.reduce((a, p) => a + Math.ceil(p / mid), 0);", //4
  "    if (hours <= h) hi = mid;      // fast enough, try slower", //   5
  "    else lo = mid + 1;             // too slow", //                  6
  "  }", //                                                             7
  "  return lo;", //                                                    8
  "}", //                                                               9
];
