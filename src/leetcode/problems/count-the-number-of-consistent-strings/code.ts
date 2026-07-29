export const CODE = [
  "function countConsistentStrings(allowed, words) {", //     0
  "  const ok = new Set(allowed);", //                        1
  "  let count = 0;", //                                      2
  "  for (const w of words) {", //                            3
  "    let consistent = true;", //                            4
  "    for (const ch of w)", //                               5
  "      if (!ok.has(ch)) { consistent = false; break; }", // 6
  "    if (consistent) count++;", //                          7
  "  }", //                                                   8
  "  return count;", //                                       9
  "}", //                                                    10
];
