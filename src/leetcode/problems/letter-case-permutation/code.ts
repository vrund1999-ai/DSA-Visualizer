export const CODE = [
  "function letterCasePermutation(s) {", //                   0
  "  const res = [];", //                                     1
  "  function bt(i, cur) {", //                               2
  "    if (i === s.length) {", //                             3
  "      res.push(cur);", //                                  4
  "      return;", //                                         5
  "    }", //                                                 6
  "    const ch = s[i];", //                                  7
  "    if (/[a-zA-Z]/.test(ch)) {", //                        8
  "      bt(i + 1, cur + ch.toLowerCase());", //              9
  "      bt(i + 1, cur + ch.toUpperCase());", //             10
  "    } else {", //                                          11
  "      bt(i + 1, cur + ch);   // digit, one branch", //    12
  "    }", //                                                13
  "  }", //                                                  14
  "  bt(0, '');", //                                         15
  "  return res;", //                                        16
  "}", //                                                    17
];
