export const CODE = [
  "function longestPalindrome(s) {", //                          0
  "  let start = 0, end = 0;", //                                1
  "  for (let i = 0; i < s.length; i++) {", //                   2
  "    expand(i, i);      // odd-length center", //              3
  "    expand(i, i + 1);  // even-length center", //             4
  "  }", //                                                      5
  "  function expand(l, r) {", //                                6
  "    while (l >= 0 && r < s.length && s[l] === s[r]) {", //    7
  "      l--; r++;", //                                          8
  "    }", //                                                    9
  "    if (r - l - 1 > end - start + 1) {", //                   10
  "      start = l + 1; end = r - 1;", //                        11
  "    }", //                                                    12
  "  }", //                                                      13
  "  return s.slice(start, end + 1);", //                        14
  "}", //                                                        15
];
