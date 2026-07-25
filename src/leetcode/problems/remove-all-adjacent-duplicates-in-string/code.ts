export const CODE = [
  "function removeDuplicates(s) {", //                        0
  "  const stack = [];", //                                   1
  "  for (const ch of s) {", //                               2
  "    if (stack.length && stack.at(-1) === ch)", //          3
  "      stack.pop();      // cancel the adjacent pair", //   4
  "    else", //                                              5
  "      stack.push(ch);   // no match on top", //            6
  "  }", //                                                   7
  "  return stack.join('');", //                              8
  "}", //                                                     9
];
