export const CODE = [
  "function countSubstrings(s) {", //                         0
  "  let count = 0;", //                                      1
  "  const expand = (l, r) => {", //                          2
  "    while (l >= 0 && r < s.length && s[l] === s[r]) {", // 3
  "      count++;   // s[l..r] is a palindrome", //           4
  "      l--; r++;", //                                       5
  "    }", //                                                 6
  "  };", //                                                  7
  "  for (let i = 0; i < s.length; i++) {", //                8
  "    expand(i, i);       // odd length center", //          9
  "    expand(i, i + 1);   // even length center", //        10
  "  }", //                                                  11
  "  return count;", //                                      12
  "}", //                                                    13
];
