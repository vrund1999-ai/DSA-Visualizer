export const CODE = [
  "function maxProfit(prices) {", //                          0
  "  let buy1 = -Infinity, sell1 = 0;", //                    1
  "  let buy2 = -Infinity, sell2 = 0;", //                    2
  "  for (const p of prices) {", //                           3
  "    buy1  = Math.max(buy1,  -p);       // hold 1st", //    4
  "    sell1 = Math.max(sell1, buy1 + p); // sold 1st", //    5
  "    buy2  = Math.max(buy2,  sell1 - p);// hold 2nd", //    6
  "    sell2 = Math.max(sell2, buy2 + p); // sold 2nd", //    7
  "  }", //                                                   8
  "  return sell2;", //                                       9
  "}", //                                                    10
];
