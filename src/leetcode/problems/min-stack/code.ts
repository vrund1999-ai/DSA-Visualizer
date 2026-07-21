export const CODE = [
  "class MinStack {", //                                              0
  "  constructor() { this.st = []; this.min = []; }", //             1
  "  push(x) {", //                                                  2
  "    this.st.push(x);", //                                         3
  "    const m = this.min.length", //                                4
  "      ? Math.min(x, this.min[this.min.length - 1]) : x;", //      5
  "    this.min.push(m);", //                                        6
  "  }", //                                                          7
  "  pop() { this.st.pop(); this.min.pop(); }", //                   8
  "  top() { return this.st[this.st.length - 1]; }", //              9
  "  getMin() { return this.min[this.min.length - 1]; }", //         10
  "}", //                                                            11
];
