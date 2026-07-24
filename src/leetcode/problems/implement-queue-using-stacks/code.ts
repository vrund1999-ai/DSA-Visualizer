export const CODE = [
  "class MyQueue {", //                                       0
  "  constructor() { this.inS = []; this.outS = []; }", //   1
  "  push(x) { this.inS.push(x); }", //                       2
  "  _transfer() {", //                                       3
  "    if (this.outS.length === 0)", //                       4
  "      while (this.inS.length)", //                         5
  "        this.outS.push(this.inS.pop());  // reverse", //   6
  "  }", //                                                   7
  "  pop() { this._transfer(); return this.outS.pop(); }", //8
  "  peek() { this._transfer(); return this.outS.at(-1); }",//9
  "}", //                                                    10
];
