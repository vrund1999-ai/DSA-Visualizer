export const CODE = [
  "function romanToInt(s) {", //                                     0
  "  const val = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};", //       1
  "  let total = 0;", //                                            2
  "  for (let i = 0; i < s.length; i++) {", //                      3
  "    if (i + 1 < s.length && val[s[i]] < val[s[i + 1]])", //      4
  "      total -= val[s[i]];   // subtractive pair", //             5
  "    else", //                                                    6
  "      total += val[s[i]];", //                                   7
  "  }", //                                                         8
  "  return total;", //                                             9
  "}", //                                                           10
];
