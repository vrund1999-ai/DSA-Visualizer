export const CODE = [
  "function maxProfit(prices) {", //                          0
  "  let hold = -Infinity;   // holding a share", //          1
  "  let sold = 0;           // just sold today", //          2
  "  let rest = 0;           // idle / cooldown", //          3
  "  for (const p of prices) {", //                           4
  "    const prevSold = sold;", //                            5
  "    sold = hold + p;              // sell today", //       6
  "    hold = Math.max(hold, rest - p); // buy or keep", //   7
  "    rest = Math.max(rest, prevSold);// cooldown ends", //  8
  "  }", //                                                   9
  "  return Math.max(sold, rest);", //                       10
  "}", //                                                    11
];
