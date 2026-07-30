export const CODE = [
  "function maxEnvelopes(env) {", //                          0
  "  env.sort((a, b) =>", //                                  1
  "    a[0] - b[0] || b[1] - a[1]);   // w asc, h desc", //   2
  "  const tails = [];   // LIS on heights", //               3
  "  for (const [, h] of env) {", //                          4
  "    let lo = 0, hi = tails.length;", //                    5
  "    while (lo < hi) {   // first tail >= h", //            6
  "      const mid = (lo + hi) >> 1;", //                     7
  "      if (tails[mid] < h) lo = mid + 1;", //               8
  "      else hi = mid;", //                                  9
  "    }", //                                                10
  "    tails[lo] = h;   // place or extend", //              11
  "  }", //                                                  12
  "  return tails.length;", //                               13
  "}", //                                                    14
];
