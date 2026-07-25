export const CODE = [
  "class RandomizedCollection {", //                          0
  "  list = []; idx = new Map();   // value -> Set(indices)", // 1
  "  insert(v) {", //                                         2
  "    if (!this.idx.has(v)) this.idx.set(v, new Set());", // 3
  "    this.idx.get(v).add(this.list.length);", //            4
  "    this.list.push(v);", //                                5
  "    return this.idx.get(v).size === 1;   // was new?", //  6
  "  }", //                                                   7
  "  remove(v) {", //                                         8
  "    if (!this.idx.get(v)?.size) return false;", //         9
  "    const i = pop(this.idx.get(v));", //                  10
  "    const last = this.list.length - 1;", //               11
  "    const lv = this.list[last];", //                      12
  "    this.list[i] = lv;", //                               13
  "    this.idx.get(lv).delete(last).add?.(i);   // remap", // 14
  "    this.list.pop();", //                                 15
  "    return true;", //                                     16
  "  }", //                                                  17
  "  getRandom() { return this.list[rand(this.list.length)]; }", // 18
  "}", //                                                    19
];
