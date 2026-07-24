export const CODE = [
  "function evalRPN(tokens) {", //                            0
  "  const stack = [];", //                                  1
  "  const ops = {", //                                      2
  "    '+': (a, b) => a + b, '-': (a, b) => a - b,", //      3
  "    '*': (a, b) => a * b, '/': (a, b) => (a / b) | 0,", //4
  "  };", //                                                 5
  "  for (const t of tokens) {", //                          6
  "    if (t in ops) {", //                                  7
  "      const b = stack.pop(), a = stack.pop();", //        8
  "      stack.push(ops[t](a, b));", //                      9
  "    } else {", //                                         10
  "      stack.push(Number(t));", //                         11
  "    }", //                                                12
  "  }", //                                                  13
  "  return stack[0];", //                                   14
  "}", //                                                    15
];
