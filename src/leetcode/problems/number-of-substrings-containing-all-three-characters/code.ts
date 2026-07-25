export const CODE = [
  "function numberOfSubstrings(s) {", //                      0
  "  const last = { a: -1, b: -1, c: -1 };", //               1
  "  let count = 0;", //                                      2
  "  for (let i = 0; i < s.length; i++) {", //                3
  "    last[s[i]] = i;   // most recent index", //            4
  "    // every start <= min(last) gives a valid substring",//5
  "    count += Math.min(last.a, last.b, last.c) + 1;", //    6
  "  }", //                                                   7
  "  return count;", //                                       8
  "}", //                                                     9
];
