export const CODE = [
  "function scoreOfParentheses(s) {", //                      0
  "  const stack = [0];   // score at each depth", //         1
  "  for (const ch of s) {", //                               2
  "    if (ch === '(') {", //                                 3
  "      stack.push(0);   // enter deeper", //                4
  "    } else {", //                                          5
  "      const v = stack.pop();", //                          6
  "      const add = Math.max(2 * v, 1);", //                 7
  "      stack[stack.length - 1] += add;", //                 8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return stack[0];", //                                   11
  "}", //                                                    12
];
