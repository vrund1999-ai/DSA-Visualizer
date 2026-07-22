export const CODE = [
  "function majorityElement(nums) {", //                              0
  "  let c1 = null, c2 = null, n1 = 0, n2 = 0;", //                  1
  "  for (const x of nums) {", //                                    2
  "    if (x === c1) n1++;", //                                      3
  "    else if (x === c2) n2++;", //                                 4
  "    else if (n1 === 0) { c1 = x; n1 = 1; }", //                   5
  "    else if (n2 === 0) { c2 = x; n2 = 1; }", //                   6
  "    else { n1--; n2--; }", //                                     7
  "  }", //                                                          8
  "  return [c1, c2].filter(c =>", //                                9
  "    nums.filter(x => x === c).length > nums.length / 3);", //     10
  "}", //                                                            11
];
