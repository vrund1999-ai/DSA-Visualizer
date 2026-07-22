export const CODE = [
  "function lengthOfLastWord(s) {", //                     0
  "  let i = s.length - 1, len = 0;", //                   1
  "  while (i >= 0 && s[i] === ' ') i--;   // trailing", //2
  "  while (i >= 0 && s[i] !== ' ') {", //                 3
  "    len++; i--;                          // count", //  4
  "  }", //                                                5
  "  return len;", //                                      6
  "}", //                                                  7
];
