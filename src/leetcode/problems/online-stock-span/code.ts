export const CODE = [
  "class StockSpanner {", //                                  0
  "  constructor() { this.stack = []; }  // [price, span]", //1
  "  next(price) {", //                                       2
  "    let span = 1;", //                                     3
  "    while (this.stack.length &&", //                       4
  "           this.stack.at(-1)[0] <= price) {", //           5
  "      span += this.stack.pop()[1];   // absorb span", //   6
  "    }", //                                                 7
  "    this.stack.push([price, span]);", //                   8
  "    return span;", //                                      9
  "  }", //                                                   10
  "}", //                                                     11
];
