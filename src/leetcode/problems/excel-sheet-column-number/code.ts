export const CODE = [
  "function titleToNumber(s) {", //                          0
  "  let result = 0;", //                                    1
  "  for (const ch of s) {", //                              2
  "    const d = ch.charCodeAt(0) - 64;   // A=1..Z=26", //  3
  "    result = result * 26 + d;", //                        4
  "  }", //                                                  5
  "  return result;", //                                     6
  "}", //                                                    7
];
