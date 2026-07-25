export const CODE = [
  "function calculate(s) {", //                               0
  "  let result = 0, sign = 1, num = 0;", //                  1
  "  const stack = [];   // saved result & sign", //          2
  "  for (const c of s) {", //                                3
  "    if (c >= '0' && c <= '9') num = num*10 + +c;", //      4
  "    else if (c === '+' || c === '-') {", //                5
  "      result += sign * num; num = 0;", //                  6
  "      sign = c === '+' ? 1 : -1;", //                      7
  "    } else if (c === '(') {", //                           8
  "      stack.push(result, sign);   // save context", //     9
  "      result = 0; sign = 1;", //                          10
  "    } else if (c === ')') {", //                          11
  "      result += sign * num; num = 0;", //                 12
  "      result = result * stack.pop() + stack.pop();", //   13
  "    }", //                                                14
  "  }", //                                                  15
  "  return result + sign * num;", //                        16
  "}", //                                                    17
];
