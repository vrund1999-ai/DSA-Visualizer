export const CODE = [
  "function reverseString(s) {", //                    0
  "  let l = 0, r = s.length - 1;", //                1
  "  while (l < r) {", //                             2
  "    [s[l], s[r]] = [s[r], s[l]];   // swap", //    3
  "    l++; r--;", //                                 4
  "  }", //                                           5
  "  return s;", //                                   6
  "}", //                                             7
];
