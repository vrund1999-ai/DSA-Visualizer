export const CODE = [
  "function calPoints(operations) {", //                      0
  "  const stack = [];", //                                   1
  "  for (const op of operations) {", //                      2
  "    if (op === '+')", //                                   3
  "      stack.push(stack.at(-1) + stack.at(-2));", //        4
  "    else if (op === 'D')", //                              5
  "      stack.push(2 * stack.at(-1));", //                   6
  "    else if (op === 'C')", //                              7
  "      stack.pop();", //                                    8
  "    else stack.push(Number(op));", //                      9
  "  }", //                                                  10
  "  return stack.reduce((a, b) => a + b, 0);", //           11
  "}", //                                                    12
];
