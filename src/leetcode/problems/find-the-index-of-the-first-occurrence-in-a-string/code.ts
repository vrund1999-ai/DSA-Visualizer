export const CODE = [
  "function strStr(haystack, needle) {", //                          0
  "  const n = haystack.length, m = needle.length;", //            1
  "  for (let i = 0; i + m <= n; i++) {", //                       2
  "    let j = 0;", //                                             3
  "    while (j < m && haystack[i + j] === needle[j]) j++;", //    4
  "    if (j === m) return i;   // full match", //                 5
  "  }", //                                                        6
  "  return -1;", //                                               7
  "}", //                                                          8
];
