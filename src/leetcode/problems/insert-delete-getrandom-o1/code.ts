export const CODE = [
  "class RandomizedSet {", //                                        0
  "  constructor() { this.arr = []; this.idx = new Map(); }", //    1
  "  insert(v) {", //                                               2
  "    if (this.idx.has(v)) return false;", //                      3
  "    this.idx.set(v, this.arr.length); this.arr.push(v);", //     4
  "    return true;", //                                            5
  "  }", //                                                         6
  "  remove(v) {", //                                               7
  "    if (!this.idx.has(v)) return false;", //                     8
  "    const i = this.idx.get(v), last = this.arr.at(-1);", //      9
  "    this.arr[i] = last; this.idx.set(last, i);   // swap", //    10
  "    this.arr.pop(); this.idx.delete(v);", //                     11
  "    return true;", //                                            12
  "  }", //                                                         13
  "  getRandom() { return this.arr[rand(this.arr.length)]; }", //   14
  "}", //                                                           15
];
