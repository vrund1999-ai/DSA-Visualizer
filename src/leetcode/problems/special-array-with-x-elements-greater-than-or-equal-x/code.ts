export const CODE = [
  "function specialArray(nums) {", //                         0
  "  const n = nums.length;", //                              1
  "  for (let x = 0; x <= n; x++) {", //                      2
  "    let count = 0;", //                                    3
  "    for (const v of nums)", //                             4
  "      if (v >= x) count++;   // at least x", //            5
  "    if (count === x) return x;   // special!", //          6
  "  }", //                                                   7
  "  return -1;", //                                          8
  "}", //                                                     9
];
