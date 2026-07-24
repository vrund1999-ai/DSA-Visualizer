export const CODE = [
  "class LRUCache {", //                                             0
  "  constructor(capacity) {", //                                   1
  "    this.cap = capacity; this.map = new Map();", //             2
  "  }", //                                                        3
  "  get(key) {", //                                               4
  "    if (!this.map.has(key)) return -1;", //                     5
  "    const v = this.map.get(key);", //                           6
  "    this.map.delete(key); this.map.set(key, v);  // touch", //  7
  "    return v;", //                                              8
  "  }", //                                                        9
  "  put(key, value) {", //                                        10
  "    if (this.map.has(key)) this.map.delete(key);", //          11
  "    this.map.set(key, value);", //                              12
  "    if (this.map.size > this.cap)", //                          13
  "      this.map.delete(this.map.keys().next().value); // evict",// 14
  "  }", //                                                        15
  "}", //                                                          16
];
