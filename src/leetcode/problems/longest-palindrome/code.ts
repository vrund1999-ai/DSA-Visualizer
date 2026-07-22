export const CODE = [
  "function longestPalindrome(s) {", //                        0
  "  const count = {};", //                                    1
  "  for (const c of s) count[c] = (count[c] || 0) + 1;", //  2
  "  let len = 0, hasOdd = false;", //                        3
  "  for (const c in count) {", //                            4
  "    len += count[c] - (count[c] % 2);   // pairs", //      5
  "    if (count[c] % 2) hasOdd = true;", //                  6
  "  }", //                                                   7
  "  return len + (hasOdd ? 1 : 0);   // one center", //      8
  "}", //                                                     9
];
