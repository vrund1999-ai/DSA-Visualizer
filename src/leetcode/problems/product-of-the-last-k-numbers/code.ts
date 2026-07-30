export const CODE = [
  "class ProductOfNumbers {", //                              0
  "  prefix = [1];   // prefix products", //                  1
  "  add(num) {", //                                          2
  "    if (num === 0) { this.prefix = [1]; return; }", //     3
  "    this.prefix.push(this.prefix.at(-1) * num);", //       4
  "  }", //                                                   5
  "  getProduct(k) {", //                                     6
  "    const n = this.prefix.length;", //                     7
  "    if (k >= n) return 0;   // a 0 lies within", //        8
  "    return this.prefix[n - 1] / this.prefix[n - 1 - k];", //9
  "  }", //                                                  10
  "}", //                                                    11
];
