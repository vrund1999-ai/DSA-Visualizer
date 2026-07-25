export const CODE = [
  "function maxProfit(prices, fee) {", //                     0
  "  let cash = 0;              // not holding", //           1
  "  let hold = -prices[0];     // holding a share", //       2
  "  for (let i = 1; i < prices.length; i++) {", //          3
  "    // sell today (pay the fee) or keep cash", //         4
  "    cash = Math.max(cash, hold + prices[i] - fee);", //    5
  "    // buy today or keep holding", //                     6
  "    hold = Math.max(hold, cash - prices[i]);", //         7
  "  }", //                                                   8
  "  return cash;   // end with no share", //                9
  "}", //                                                    10
];
