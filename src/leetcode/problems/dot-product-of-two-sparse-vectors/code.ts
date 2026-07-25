export const CODE = [
  "class SparseVector {", //                                  0
  "  constructor(nums) {", //                                 1
  "    this.pairs = [];   // [index, value] non-zeros", //    2
  "    nums.forEach((v, i) => v && this.pairs.push([i, v]));",//3
  "  }", //                                                   4
  "  dotProduct(vec) {", //                                   5
  "    let i = 0, j = 0, sum = 0;", //                        6
  "    while (i < this.pairs.length && j < vec.pairs.length){",//7
  "      const [ai, av] = this.pairs[i];", //                 8
  "      const [bi, bv] = vec.pairs[j];", //                  9
  "      if (ai === bi) { sum += av * bv; i++; j++; }", //   10
  "      else if (ai < bi) i++;   // advance smaller", //    11
  "      else j++;", //                                      12
  "    }", //                                                13
  "    return sum;", //                                      14
  "  }", //                                                  15
  "}", //                                                    16
];
