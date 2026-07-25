export const CODE = [
  "function judgeSquareSum(c) {", //                          0
  "  let a = 0, b = Math.floor(Math.sqrt(c));", //            1
  "  while (a <= b) {", //                                    2
  "    const sum = a * a + b * b;", //                        3
  "    if (sum === c) return true;", //                       4
  "    else if (sum < c) a++;   // need bigger", //           5
  "    else b--;                // need smaller", //          6
  "  }", //                                                   7
  "  return false;", //                                       8
  "}", //                                                     9
];
