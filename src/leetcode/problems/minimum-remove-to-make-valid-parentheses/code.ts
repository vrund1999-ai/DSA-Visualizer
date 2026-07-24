export const CODE = [
  "function minRemoveToMakeValid(s) {", //                          0
  "  const arr = [...s], stack = [];", //                          1
  "  for (let i = 0; i < arr.length; i++) {", //                   2
  "    if (arr[i] === '(') stack.push(i);", //                     3
  "    else if (arr[i] === ')') {", //                             4
  "      if (stack.length) stack.pop();   // match", //            5
  "      else arr[i] = '';                // extra ')'", //        6
  "    }", //                                                      7
  "  }", //                                                        8
  "  for (const i of stack) arr[i] = '';  // extra '('", //        9
  "  return arr.join('');", //                                     10
  "}", //                                                          11
];
