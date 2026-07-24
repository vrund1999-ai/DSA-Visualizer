export const CODE = [
  "function longestValidParentheses(s) {", //                 0
  "  const stack = [-1];   // base index", //                 1
  "  let best = 0;", //                                       2
  "  for (let i = 0; i < s.length; i++) {", //                3
  "    if (s[i] === '(') {", //                               4
  "      stack.push(i);", //                                  5
  "    } else {", //                                          6
  "      stack.pop();   // match this ')'", //                7
  "      if (stack.length === 0) stack.push(i);  // reset",// 8
  "      else best = Math.max(best, i - stack.at(-1));", //   9
  "    }", //                                                 10
  "  }", //                                                   11
  "  return best;", //                                        12
  "}", //                                                     13
];
