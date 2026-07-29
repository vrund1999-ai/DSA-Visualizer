export const CODE = [
  "function findMaximumXOR(nums) {", //                       0
  "  let max = 0, mask = 0;", //                              1
  "  for (let bit = HIGH; bit >= 0; bit--) {", //             2
  "    mask |= (1 << bit);   // consider one more bit", //    3
  "    const prefixes = new Set(", //                         4
  "      nums.map((n) => n & mask));", //                     5
  "    const candidate = max | (1 << bit);   // greedy 1", // 6
  "    for (const p of prefixes)", //                         7
  "      if (prefixes.has(candidate ^ p)) {", //              8
  "        max = candidate;   // achievable", //              9
  "        break;", //                                       10
  "      }", //                                              11
  "  }", //                                                  12
  "  return max;", //                                        13
  "}", //                                                    14
];
