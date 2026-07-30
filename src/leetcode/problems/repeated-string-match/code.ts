export const CODE = [
  "function repeatedStringMatch(a, b) {", //                  0
  "  // need at least this many copies to reach b's length",//1
  "  let count = Math.ceil(b.length / a.length);", //         2
  "  let s = a.repeat(count);", //                            3
  "  if (s.includes(b)) return count;", //                    4
  "  // one more copy can cover an offset", //                5
  "  s += a; count++;", //                                    6
  "  if (s.includes(b)) return count;", //                    7
  "  return -1;", //                                          8
  "}", //                                                     9
];
