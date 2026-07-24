export const CODE = [
  "function removeKdigits(num, k) {", //                      0
  "  const stack = [];", //                                   1
  "  for (const d of num) {", //                              2
  "    while (k > 0 && stack.length &&", //                   3
  "           stack.at(-1) > d) {", //                        4
  "      stack.pop(); k--;   // drop a bigger left digit", // 5
  "    }", //                                                 6
  "    stack.push(d);", //                                    7
  "  }", //                                                   8
  "  stack.length -= k;   // still need to drop k", //        9
  "  const s = stack.join('').replace(/^0+/, '');", //       10
  "  return s || '0';", //                                   11
  "}", //                                                    12
];
