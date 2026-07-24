export const CODE = [
  "class BrowserHistory {", //                                0
  "  constructor(homepage) {", //                             1
  "    this.stack = [homepage];", //                          2
  "    this.cur = 0;   // index of current page", //          3
  "  }", //                                                   4
  "  visit(url) {", //                                        5
  "    this.stack.length = this.cur + 1;  // drop forward",// 6
  "    this.stack.push(url);", //                             7
  "    this.cur++;", //                                       8
  "  }", //                                                   9
  "  back(steps) {", //                                       10
  "    this.cur = Math.max(0, this.cur - steps);", //         11
  "    return this.stack[this.cur];", //                      12
  "  }", //                                                   13
  "  forward(steps) {", //                                    14
  "    this.cur = Math.min(this.stack.length - 1, this.cur + steps);",//15
  "    return this.stack[this.cur];", //                      16
  "  }", //                                                   17
  "}", //                                                     18
];
