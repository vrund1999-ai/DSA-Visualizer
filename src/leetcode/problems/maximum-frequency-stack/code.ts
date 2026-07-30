export const CODE = [
  "class FreqStack {", //                                     0
  "  constructor() {", //                                     1
  "    this.freq = new Map();       // value -> count", //    2
  "    this.group = new Map();      // count -> stack", //    3
  "    this.maxFreq = 0;", //                                 4
  "  }", //                                                   5
  "  push(x) {", //                                           6
  "    const f = (this.freq.get(x) || 0) + 1;", //            7
  "    this.freq.set(x, f);", //                              8
  "    this.maxFreq = Math.max(this.maxFreq, f);", //         9
  "    if (!this.group.has(f)) this.group.set(f, []);", //   10
  "    this.group.get(f).push(x);   // stack per freq", //   11
  "  }", //                                                  12
  "  pop() {", //                                            13
  "    const x = this.group.get(this.maxFreq).pop();", //    14
  "    this.freq.set(x, this.freq.get(x) - 1);", //          15
  "    if (!this.group.get(this.maxFreq).length) this.maxFreq--;", //16
  "    return x;", //                                        17
  "  }", //                                                  18
  "}", //                                                    19
];
