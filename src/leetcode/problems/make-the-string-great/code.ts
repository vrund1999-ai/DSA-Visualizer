export const CODE = [
  "function makeGood(s) {", //                                0
  "  const stack = [];", //                                   1
  "  for (const ch of s) {", //                              2
  "    const top = stack.at(-1);", //                        3
  "    if (top && top !== ch &&", //                         4
  "        top.toLowerCase() === ch.toLowerCase())", //      5
  "      stack.pop();   // same letter, opposite case", //   6
  "    else", //                                             7
  "      stack.push(ch);", //                                8
  "  }", //                                                   9
  "  return stack.join('');", //                            10
  "}", //                                                    11
];
