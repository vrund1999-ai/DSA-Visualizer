export const CODE = [
  "function rangeBitwiseAnd(left, right) {", //               0
  "  let shift = 0;", //                                      1
  "  // strip differing low bits until left === right", //    2
  "  while (left < right) {", //                              3
  "    left >>= 1;", //                                       4
  "    right >>= 1;", //                                      5
  "    shift++;", //                                          6
  "  }", //                                                   7
  "  return left << shift;   // common prefix, zeros below", //8
  "}", //                                                     9
];
