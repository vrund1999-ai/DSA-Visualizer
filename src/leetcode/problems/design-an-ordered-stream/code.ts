export const CODE = [
  "class OrderedStream {", //                                 0
  "  constructor(n) {", //                                    1
  "    this.data = new Array(n + 1).fill(null);", //          2
  "    this.ptr = 1;   // next id we can emit", //            3
  "  }", //                                                   4
  "  insert(idKey, value) {", //                              5
  "    this.data[idKey] = value;", //                         6
  "    const res = [];", //                                   7
  "    while (this.data[this.ptr] != null) {", //             8
  "      res.push(this.data[this.ptr]);   // contiguous", //  9
  "      this.ptr++;", //                                     10
  "    }", //                                                 11
  "    return res;", //                                       12
  "  }", //                                                   13
  "}", //                                                     14
];
