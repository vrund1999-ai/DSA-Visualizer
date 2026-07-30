export const CODE = [
  "class MovingAverage {", //                                 0
  "  constructor(size) {", //                                 1
  "    this.size = size;", //                                 2
  "    this.window = [];", //                                 3
  "    this.sum = 0;", //                                     4
  "  }", //                                                   5
  "  next(val) {", //                                         6
  "    this.window.push(val);", //                            7
  "    this.sum += val;", //                                  8
  "    if (this.window.length > this.size)", //               9
  "      this.sum -= this.window.shift();   // evict", //    10
  "    return this.sum / this.window.length;", //            11
  "  }", //                                                  12
  "}", //                                                    13
];
