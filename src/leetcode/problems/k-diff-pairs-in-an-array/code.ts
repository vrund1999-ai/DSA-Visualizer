export const CODE = [
  "function findPairs(nums, k) {", //                         0
  "  const count = new Map();", //                            1
  "  for (const n of nums)", //                               2
  "    count.set(n, (count.get(n) ?? 0) + 1);", //            3
  "  let pairs = 0;", //                                      4
  "  for (const [v, c] of count) {", //                       5
  "    if (k === 0) {", //                                    6
  "      if (c >= 2) pairs++;   // duplicate value", //       7
  "    } else if (count.has(v + k)) {", //                    8
  "      pairs++;   // v and v + k both exist", //            9
  "    }", //                                                10
  "  }", //                                                  11
  "  return pairs;", //                                      12
  "}", //                                                    13
];
