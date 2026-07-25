export const CODE = [
  "function clearDigits(s) {", //                             0
  "  const stack = [];", //                                   1
  "  for (const ch of s) {", //                               2
  "    if (isDigit(ch))", //                                  3
  "      stack.pop();      // delete nearest left letter", // 4
  "    else", //                                              5
  "      stack.push(ch);   // keep the letter for now", //    6
  "  }", //                                                   7
  "  return stack.join('');", //                              8
  "}", //                                                     9
];
