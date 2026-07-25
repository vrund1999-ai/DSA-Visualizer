export const CODE = [
  "function countAndSay(n) {", //                             0
  "  let s = '1';", //                                        1
  "  for (let i = 1; i < n; i++) {", //                       2
  "    let next = '', j = 0;", //                             3
  "    while (j < s.length) {", //                            4
  "      let k = j;", //                                      5
  "      while (k < s.length && s[k] === s[j]) k++;", //      6
  "      next += (k - j) + s[j];   // count + digit", //      7
  "      j = k;", //                                          8
  "    }", //                                                 9
  "    s = next;", //                                        10
  "  }", //                                                  11
  "  return s;", //                                          12
  "}", //                                                    13
];
