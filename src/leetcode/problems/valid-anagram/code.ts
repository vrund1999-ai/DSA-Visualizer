export const CODE = [
  "function isAnagram(s, t) {", //                              0
  "  if (s.length !== t.length) return false;", //             1
  "  const count = {};", //                                    2
  "  for (const c of s) count[c] = (count[c] || 0) + 1;", //   3
  "  for (const c of t) {", //                                 4
  "    if (!count[c]) return false;", //                       5
  "    count[c]--;", //                                        6
  "  }", //                                                    7
  "  return true;", //                                         8
  "}", //                                                      9
];
