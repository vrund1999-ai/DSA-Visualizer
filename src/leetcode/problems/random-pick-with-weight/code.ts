export const CODE = [
  "class Solution {", //                                      0
  "  constructor(w) {", //                                    1
  "    this.prefix = [];", //                                 2
  "    let sum = 0;", //                                      3
  "    for (const x of w)", //                                4
  "      this.prefix.push(sum += x);   // running total", //  5
  "    this.total = sum;", //                                 6
  "  }", //                                                   7
  "  pickIndex() {", //                                       8
  "    const r = 1 + rand(this.total);   // target", //       9
  "    let lo = 0, hi = this.prefix.length - 1;", //         10
  "    while (lo < hi) {   // first prefix >= r", //         11
  "      const mid = (lo + hi) >> 1;", //                    12
  "      if (this.prefix[mid] < r) lo = mid + 1;", //        13
  "      else hi = mid;", //                                 14
  "    }", //                                                15
  "    return lo;", //                                       16
  "  }", //                                                  17
  "}", //                                                    18
];
