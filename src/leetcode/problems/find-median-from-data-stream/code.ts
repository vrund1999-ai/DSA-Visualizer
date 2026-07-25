export const CODE = [
  "class MedianFinder {", //                                  0
  "  constructor() { this.lo = new MaxHeap();", //            1
  "                  this.hi = new MinHeap(); }", //          2
  "  addNum(x) {", //                                         3
  "    this.lo.push(x);", //                                  4
  "    this.hi.push(this.lo.pop());   // largest low → hi",// 5
  "    if (this.hi.size > this.lo.size)", //                  6
  "      this.lo.push(this.hi.pop()); // rebalance", //       7
  "  }", //                                                   8
  "  findMedian() {", //                                      9
  "    return this.lo.size > this.hi.size", //               10
  "      ? this.lo.top()", //                                11
  "      : (this.lo.top() + this.hi.top()) / 2;", //         12
  "  }", //                                                  13
  "}", //                                                    14
];
