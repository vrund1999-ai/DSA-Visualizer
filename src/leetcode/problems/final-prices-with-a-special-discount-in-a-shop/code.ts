export const CODE = [
  "function finalPrices(prices) {", //                        0
  "  const res = [...prices];", //                            1
  "  const stack = [];        // indices, prices descending", //2
  "  for (let i = 0; i < prices.length; i++) {", //           3
  "    while (stack.length &&", //                            4
  "        prices[stack.at(-1)] >= prices[i]) {", //          5
  "      const j = stack.pop();", //                          6
  "      res[j] = prices[j] - prices[i];   // discount", //   7
  "    }", //                                                 8
  "    stack.push(i);", //                                    9
  "  }", //                                                  10
  "  return res;", //                                        11
  "}", //                                                    12
];
