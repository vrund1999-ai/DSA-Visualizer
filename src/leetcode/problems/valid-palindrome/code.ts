export const CODE = [
  "function isPalindrome(s) {", //                              0
  "  const clean = [...s.toLowerCase()]", //                   1
  "    .filter(c => /[a-z0-9]/.test(c));", //                  2
  "  let l = 0, r = clean.length - 1;", //                     3
  "  while (l < r) {", //                                      4
  "    if (clean[l] !== clean[r]) return false;", //           5
  "    l++; r--;", //                                          6
  "  }", //                                                    7
  "  return true;", //                                         8
  "}", //                                                      9
];
