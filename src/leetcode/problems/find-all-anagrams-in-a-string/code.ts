export const CODE = [
  "function findAnagrams(s, p) {", //                              0
  "  const need = count(p), win = {};", //                        1
  "  const res = [];", //                                         2
  "  for (let i = 0; i < s.length; i++) {", //                    3
  "    win[s[i]] = (win[s[i]] || 0) + 1;   // add right", //      4
  "    if (i >= p.length)", //                                    5
  "      remove(win, s[i - p.length]);     // drop left", //      6
  "    if (i >= p.length - 1 && equal(win, need))", //            7
  "      res.push(i - p.length + 1);", //                         8
  "  }", //                                                       9
  "  return res;", //                                             10
  "}", //                                                         11
];
