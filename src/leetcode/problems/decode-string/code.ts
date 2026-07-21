export const CODE = [
  "function decodeString(s) {", //                                0
  "  const counts = [], strings = [];", //                       1
  "  let cur = '', num = 0;", //                                 2
  "  for (const ch of s) {", //                                  3
  "    if (ch >= '0' && ch <= '9') num = num * 10 + +ch;", //    4
  "    else if (ch === '[') {", //                               5
  "      counts.push(num); strings.push(cur);", //               6
  "      num = 0; cur = '';", //                                 7
  "    } else if (ch === ']') {", //                             8
  "      cur = strings.pop() + cur.repeat(counts.pop());", //    9
  "    } else cur += ch;", //                                    10
  "  }", //                                                      11
  "  return cur;", //                                            12
  "}", //                                                        13
];
