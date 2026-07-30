export const CODE = [
  "function mctFromLeafValues(arr) {", //                     0
  "  let res = 0;", //                                        1
  "  const stack = [Infinity];   // decreasing", //           2
  "  for (const x of arr) {", //                              3
  "    while (stack.at(-1) <= x) {", //                       4
  "      const mid = stack.pop();", //                        5
  "      res += mid * Math.min(stack.at(-1), x);", //         6
  "    }", //                                                 7
  "    stack.push(x);", //                                    8
  "  }", //                                                   9
  "  while (stack.length > 2)", //                           10
  "    res += stack.pop() * stack.at(-1);", //               11
  "  return res;", //                                        12
  "}", //                                                    13
];
