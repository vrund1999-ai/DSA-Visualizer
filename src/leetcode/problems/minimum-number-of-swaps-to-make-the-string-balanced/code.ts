export const CODE = [
  "function minSwaps(s) {", //                                0
  "  let balance = 0;   // open brackets so far", //          1
  "  let unmatched = 0;   // unmatched ']'", //               2
  "  for (const ch of s) {", //                               3
  "    if (ch === '[') {", //                                 4
  "      balance++;", //                                      5
  "    } else if (balance > 0) {", //                         6
  "      balance--;   // matches an open '['", //             7
  "    } else {", //                                          8
  "      unmatched++;   // stray closing ']'", //             9
  "    }", //                                                10
  "  }", //                                                  11
  "  return Math.ceil(unmatched / 2);   // each swap fixes 2", //12
  "}", //                                                    13
];
