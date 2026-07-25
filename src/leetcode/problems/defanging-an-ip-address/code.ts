export const CODE = [
  "function defangIPaddr(address) {", //                      0
  "  let out = '';", //                                       1
  "  for (const ch of address) {", //                        2
  "    if (ch === '.')", //                                   3
  "      out += '[.]';   // neutralize the dot", //           4
  "    else", //                                              5
  "      out += ch;", //                                      6
  "  }", //                                                   7
  "  return out;", //                                         8
  "}", //                                                     9
];
