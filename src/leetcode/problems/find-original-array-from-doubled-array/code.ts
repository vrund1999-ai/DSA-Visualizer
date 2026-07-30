export const CODE = [
  "function findOriginalArray(changed) {", //                 0
  "  if (changed.length % 2) return [];", //                  1
  "  changed.sort((a, b) => a - b);", //                      2
  "  const count = new Map();", //                            3
  "  for (const x of changed)", //                            4
  "    count.set(x, (count.get(x) || 0) + 1);", //            5
  "  const res = [];", //                                     6
  "  for (const x of changed) {", //                          7
  "    if (count.get(x) === 0) continue;   // used", //       8
  "    if ((count.get(2 * x) || 0) === 0) return [];", //     9
  "    count.set(x, count.get(x) - 1);", //                  10
  "    count.set(2 * x, count.get(2 * x) - 1);", //          11
  "    res.push(x);   // x, 2x paired", //                   12
  "  }", //                                                  13
  "  return res;", //                                        14
  "}", //                                                    15
];
