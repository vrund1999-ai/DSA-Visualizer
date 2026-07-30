export const CODE = [
  "function maximumTastiness(price, k) {", //                 0
  "  price.sort((a, b) => a - b);", //                        1
  "  const canPick = d => {   // ≥ k with gaps ≥ d", //       2
  "    let count = 1, last = price[0];", //                   3
  "    for (const p of price)", //                            4
  "      if (p - last >= d) { count++; last = p; }", //       5
  "    return count >= k;", //                                6
  "  };", //                                                  7
  "  let lo = 0, hi = price.at(-1) - price[0];", //           8
  "  while (lo < hi) {", //                                   9
  "    const mid = Math.ceil((lo + hi) / 2);", //            10
  "    if (canPick(mid)) lo = mid;", //                       11
  "    else hi = mid - 1;", //                               12
  "  }", //                                                  13
  "  return lo;", //                                         14
  "}", //                                                    15
];
