export const CODE = [
  "function reverseParentheses(s) {", //                      0
  "  const stack = [''];   // current segment on top", //     1
  "  for (const ch of s) {", //                               2
  "    if (ch === '(') {", //                                 3
  "      stack.push('');    // start a nested segment", //    4
  "    } else if (ch === ')') {", //                          5
  "      const done = stack.pop();", //                       6
  "      stack[stack.length-1] += reverse(done);", //         7
  "    } else {", //                                          8
  "      stack[stack.length-1] += ch;", //                    9
  "    }", //                                                10
  "  }", //                                                  11
  "  return stack[0];", //                                   12
  "}", //                                                    13
];
