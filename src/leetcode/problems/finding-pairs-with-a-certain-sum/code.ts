export const CODE = [
  "class FindSumPairs {", //                                  0
  "  constructor(nums1, nums2) {", //                         1
  "    this.nums1 = nums1;", //                               2
  "    this.nums2 = nums2;", //                               3
  "    this.freq = new Map();   // value -> count in nums2", //4
  "    for (const x of nums2)", //                            5
  "      this.freq.set(x, (this.freq.get(x) ?? 0) + 1);", //  6
  "  }", //                                                   7
  "  add(index, val) {", //                                   8
  "    const old = this.nums2[index];", //                    9
  "    this.freq.set(old, this.freq.get(old) - 1);", //      10
  "    this.nums2[index] += val;", //                        11
  "    const nw = this.nums2[index];", //                    12
  "    this.freq.set(nw, (this.freq.get(nw) ?? 0) + 1);", // 13
  "  }", //                                                  14
  "  count(tot) {", //                                       15
  "    let c = 0;", //                                       16
  "    for (const x of this.nums1)", //                      17
  "      c += this.freq.get(tot - x) ?? 0;", //              18
  "    return c;", //                                        19
  "  }", //                                                  20
  "}", //                                                    21
];
