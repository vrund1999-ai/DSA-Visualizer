export const CODE = [
  "function maximumCandies(candies, k) {", //                 0
  "  let lo = 1, hi = Math.max(...candies), ans = 0;", //     1
  "  while (lo <= hi) {", //                                  2
  "    const s = (lo + hi) >> 1;   // pile size", //          3
  "    let count = 0;", //                                    4
  "    for (const c of candies)", //                          5
  "      count += Math.floor(c / s);   // piles of size s", //6
  "    if (count >= k) {", //                                 7
  "      ans = s;   // feasible, try larger", //              8
  "      lo = s + 1;", //                                     9
  "    } else hi = s - 1;   // too big", //                  10
  "  }", //                                                  11
  "  return ans;", //                                        12
  "}", //                                                    13
];
