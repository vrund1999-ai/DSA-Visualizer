export const CODE = [
  "function successfulPairs(spells, potions, success) {", //  0
  "  potions.sort((a, b) => a - b);", //                      1
  "  const m = potions.length, res = [];", //                 2
  "  for (const s of spells) {", //                           3
  "    let lo = 0, hi = m;   // first potion that works", //  4
  "    while (lo < hi) {", //                                 5
  "      const mid = (lo + hi) >> 1;", //                     6
  "      if (s * potions[mid] >= success) hi = mid;", //      7
  "      else lo = mid + 1;", //                              8
  "    }", //                                                 9
  "    res.push(m - lo);   // all potions from lo work", //  10
  "  }", //                                                  11
  "  return res;", //                                        12
  "}", //                                                    13
];
