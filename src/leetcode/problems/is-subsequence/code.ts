export const CODE = [
  "function isSubsequence(s, t) {", //                    0
  "  let i = 0;   // pointer into s", //                 1
  "  for (let j = 0; j < t.length; j++) {", //          2
  "    if (i < s.length && s[i] === t[j]) i++;", //     3
  "  }", //                                             4
  "  return i === s.length;", //                        5
  "}", //                                               6
];
