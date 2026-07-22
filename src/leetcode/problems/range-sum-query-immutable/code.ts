export const CODE = [
  "class NumArray {", //                                        0
  "  constructor(nums) {", //                                   1
  "    this.prefix = [0];", //                                  2
  "    for (const x of nums)", //                               3
  "      this.prefix.push(this.prefix.at(-1) + x);", //         4
  "  }", //                                                     5
  "  sumRange(i, j) {", //                                      6
  "    return this.prefix[j + 1] - this.prefix[i];", //         7
  "  }", //                                                     8
  "}", //                                                       9
];
