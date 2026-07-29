export const CODE = [
  "function finalValueAfterOperations(operations) {", //      0
  "  let x = 0;", //                                          1
  "  for (const op of operations) {", //                      2
  "    if (op.includes('+')) x++;   // ++X or X++", //        3
  "    else x--;                    // --X or X--", //        4
  "  }", //                                                   5
  "  return x;", //                                           6
  "}", //                                                     7
];
