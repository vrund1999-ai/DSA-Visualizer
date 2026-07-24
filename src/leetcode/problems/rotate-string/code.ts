export const CODE = [
  "function rotateString(s, goal) {", //                      0
  "  if (s.length !== goal.length) return false;", //        1
  "  const doubled = s + s;", //                              2
  "  // every rotation of s is a substring of s+s", //        3
  "  for (let k = 0; k < s.length; k++) {", //               4
  "    if (doubled.substr(k, s.length) === goal)", //        5
  "      return true;   // matched at shift k", //           6
  "  }", //                                                   7
  "  return false;", //                                       8
  "}", //                                                     9
];
