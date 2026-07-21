export const CODE = [
  "function isValid(s) {", //                                  0
  "  const stack = [];", //                                    1
  "  const pairs = { ')': '(', ']': '[', '}': '{' };", //      2
  "  for (const ch of s) {", //                                3
  "    if (ch === '(' || ch === '[' || ch === '{') {", //      4
  "      stack.push(ch);", //                                  5
  "    } else if (stack.pop() !== pairs[ch]) {", //            6
  "      return false;", //                                    7
  "    }", //                                                  8
  "  }", //                                                    9
  "  return stack.length === 0;", //                           10
  "}", //                                                      11
];
