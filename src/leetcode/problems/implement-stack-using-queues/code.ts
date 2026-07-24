export const CODE = [
  "class MyStack {", //                                       0
  "  constructor() { this.q = []; }", //                      1
  "  push(x) {", //                                           2
  "    this.q.push(x);", //                                   3
  "    // rotate so the newest sits at the front", //        4
  "    for (let i = 1; i < this.q.length; i++)", //          5
  "      this.q.push(this.q.shift());", //                    6
  "  }", //                                                   7
  "  pop()  { return this.q.shift(); }", //                   8
  "  top()  { return this.q[0]; }", //                        9
  "}", //                                                    10
];
