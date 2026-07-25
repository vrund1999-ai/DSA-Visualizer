export const CODE = [
  "function tupleSameProduct(nums) {", //                     0
  "  const count = new Map();  // product -> #pairs", //      1
  "  let tuples = 0;", //                                     2
  "  for (let i = 0; i < nums.length; i++)", //               3
  "    for (let j = i + 1; j < nums.length; j++) {", //       4
  "      const p = nums[i] * nums[j];", //                    5
  "      const c = count.get(p) ?? 0;", //                    6
  "      tuples += c * 8;   // 8 orderings per shared pair", // 7
  "      count.set(p, c + 1);", //                            8
  "    }", //                                                 9
  "  return tuples;", //                                     10
  "}", //                                                    11
];
