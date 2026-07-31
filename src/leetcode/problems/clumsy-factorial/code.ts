export const CODE = [
  "function clumsy(n) {", //                                  0
  "  const stack = [n];", //                                  1
  "  const ops = ['*', '/', '+', '-'];", //                   2
  "  for (let i = n - 1, k = 0; i > 0; i--, k++) {", //       3
  "    const op = ops[k % 4];", //                            4
  "    if (op === '*') stack.push(stack.pop() * i);", //      5
  "    else if (op === '/')", //                              6
  "      stack.push(Math.trunc(stack.pop() / i));", //        7
  "    else if (op === '+') stack.push(i);", //               8
  "    else stack.push(-i);   // '-' pushes negative", //     9
  "  }", //                                                  10
  "  return stack.reduce((a, b) => a + b, 0);", //           11
  "}", //                                                    12
];
