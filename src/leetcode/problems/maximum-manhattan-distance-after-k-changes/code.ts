export const CODE = [
  "function maxDistance(s, k) {", //                          0
  "  const cnt = { N: 0, S: 0, E: 0, W: 0 };", //             1
  "  let best = 0;", //                                       2
  "  for (let i = 0; i < s.length; i++) {", //                3
  "    cnt[s[i]]++;", //                                      4
  "    // net distance from the moves so far", //             5
  "    const net = Math.abs(cnt.N - cnt.S)", //               6
  "      + Math.abs(cnt.E - cnt.W);", //                      7
  "    // each change flips a wasted move (+2), capped", //   8
  "    best = Math.max(best,", //                             9
  "      Math.min(i + 1, net + 2 * k));", //                 10
  "  }", //                                                  11
  "  return best;", //                                       12
  "}", //                                                    13
];
