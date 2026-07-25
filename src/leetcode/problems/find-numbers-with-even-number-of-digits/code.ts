export const CODE = [
  "function findNumbers(nums) {", //                          0
  "  let count = 0;", //                                      1
  "  for (const n of nums) {", //                             2
  "    const digits = String(n).length;", //                 3
  "    if (digits % 2 === 0) count++;   // even digit count",//4
  "  }", //                                                   5
  "  return count;", //                                       6
  "}", //                                                     7
];
