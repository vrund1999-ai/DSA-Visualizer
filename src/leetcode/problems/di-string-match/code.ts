export const CODE = [
  "function diStringMatch(s) {", //                           0
  "  let lo = 0, hi = s.length;", //                          1
  "  const res = [];", //                                     2
  "  for (const ch of s) {", //                               3
  "    if (ch === 'I')", //                                   4
  "      res.push(lo++);   // smallest available", //         5
  "    else", //                                              6
  "      res.push(hi--);   // largest available", //          7
  "  }", //                                                   8
  "  res.push(lo);   // last remaining value", //             9
  "  return res;", //                                        10
  "}", //                                                    11
];
