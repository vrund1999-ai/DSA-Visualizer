export const CODE = [
  "function validPalindrome(s) {", //                         0
  "  let l = 0, r = s.length - 1;", //                        1
  "  while (l < r) {", //                                     2
  "    if (s[l] !== s[r])", //                                3
  "      return isPalin(s, l + 1, r)   // skip left", //      4
  "          || isPalin(s, l, r - 1);  // skip right", //     5
  "    l++; r--;", //                                         6
  "  }", //                                                   7
  "  return true;", //                                        8
  "}", //                                                     9
  "function isPalin(s, l, r) {", //                          10
  "  while (l < r) if (s[l++] !== s[r--]) return false;", // 11
  "  return true;", //                                       12
  "}", //                                                    13
];
