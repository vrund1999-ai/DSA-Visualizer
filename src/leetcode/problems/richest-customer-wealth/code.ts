export const CODE = [
  "function maximumWealth(accounts) {", //                    0
  "  let best = 0;", //                                       1
  "  for (const customer of accounts) {", //                 2
  "    const wealth = customer", //                           3
  "      .reduce((sum, bank) => sum + bank, 0);", //          4
  "    best = Math.max(best, wealth);", //                    5
  "  }", //                                                   6
  "  return best;", //                                        7
  "}", //                                                     8
];
