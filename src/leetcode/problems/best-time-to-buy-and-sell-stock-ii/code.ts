export const CODE = [
  "function maxProfit(prices) {", //                          0
  "  let profit = 0;", //                                    1
  "  for (let i = 1; i < prices.length; i++)", //           2
  "    if (prices[i] > prices[i - 1])", //                  3
  "      profit += prices[i] - prices[i - 1];   // rise", //4
  "  return profit;", //                                    5
  "}", //                                                   6
];
