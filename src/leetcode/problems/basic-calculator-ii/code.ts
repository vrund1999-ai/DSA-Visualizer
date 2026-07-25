export const CODE = [
  "function calculate(s) {", //                               0
  "  const stack = [];", //                                   1
  "  let num = 0, op = '+';", //                              2
  "  for (let i = 0; i < s.length; i++) {", //               3
  "    const c = s[i];", //                                   4
  "    if (c >= '0' && c <= '9') num = num*10 + +c;", //      5
  "    if ((c < '0' && c !== ' ') || i === s.length-1) {", // 6
  "      if (op === '+') stack.push(num);", //               7
  "      else if (op === '-') stack.push(-num);", //          8
  "      else if (op === '*') stack.push(stack.pop()*num);", //9
  "      else stack.push((stack.pop()/num) | 0);", //        10
  "      op = c; num = 0;", //                                11
  "    }", //                                                12
  "  }", //                                                  13
  "  return stack.reduce((a, b) => a + b, 0);", //           14
  "}", //                                                    15
];
