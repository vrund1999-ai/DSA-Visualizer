export const CODE = [
  "function removeOuterParentheses(s) {", //                  0
  "  let res = '', depth = 0;", //                            1
  "  for (const c of s) {", //                                2
  "    if (c === '(') {", //                                  3
  "      if (depth > 0) res += c;   // keep inner", //        4
  "      depth++;", //                                        5
  "    } else {", //                                          6
  "      depth--;", //                                        7
  "      if (depth > 0) res += c;   // keep inner", //        8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return res;", //                                        11
  "}", //                                                    12
];
