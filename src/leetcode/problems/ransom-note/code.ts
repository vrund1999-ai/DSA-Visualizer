export const CODE = [
  "function canConstruct(ransom, magazine) {", //               0
  "  const count = {};", //                                     1
  "  for (const c of magazine)", //                            2
  "    count[c] = (count[c] || 0) + 1;", //                    3
  "  for (const c of ransom) {", //                            4
  "    if (!count[c]) return false;", //                       5
  "    count[c]--;", //                                        6
  "  }", //                                                    7
  "  return true;", //                                         8
  "}", //                                                      9
];
