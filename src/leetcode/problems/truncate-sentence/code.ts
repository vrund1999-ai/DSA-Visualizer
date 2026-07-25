export const CODE = [
  "function truncateSentence(s, k) {", //                     0
  "  let count = 0;", //                                      1
  "  for (let i = 0; i < s.length; i++) {", //               2
  "    if (s[i] === ' ') count++;   // word boundary", //     3
  "    if (count === k) return s.slice(0, i);", //           4
  "  }", //                                                   5
  "  return s;   // fewer than k words", //                   6
  "}", //                                                     7
];
