export const CODE = [
  "function findTheDifference(s, t) {", //                    0
  "  let x = 0;", //                                          1
  "  for (const c of s) x ^= c.charCodeAt(0);", //           2
  "  for (const c of t) x ^= c.charCodeAt(0);", //           3
  "  // pairs cancel; the extra char remains", //            4
  "  return String.fromCharCode(x);", //                     5
  "}", //                                                     6
];
