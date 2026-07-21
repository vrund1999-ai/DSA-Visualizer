/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const CODE = [
  "function maxProfit(prices) {", //                           0
  "  let minPrice = Infinity;", //                             1
  "  let maxProfit = 0;", //                                   2
  "  for (let i = 0; i < prices.length; i++) {", //            3
  "    if (prices[i] < minPrice) {", //                        4
  "      minPrice = prices[i];", //                            5
  "    } else if (prices[i] - minPrice > maxProfit) {", //     6
  "      maxProfit = prices[i] - minPrice;", //                7
  "    }", //                                                  8
  "  }", //                                                    9
  "  return maxProfit;", //                                    10
  "}", //                                                      11
];
