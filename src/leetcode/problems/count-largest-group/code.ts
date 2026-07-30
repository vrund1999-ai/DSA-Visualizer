export const CODE = [
  "function countLargestGroup(n) {", //                       0
  "  const groups = new Map();", //                           1
  "  for (let i = 1; i <= n; i++) {", //                      2
  "    const s = [...`${i}`].reduce((a, d) => a + +d, 0);", //3
  "    groups.set(s, (groups.get(s) ?? 0) + 1);", //          4
  "  }", //                                                   5
  "  const max = Math.max(...groups.values());", //           6
  "  let count = 0;", //                                       7
  "  for (const size of groups.values())", //                 8
  "    if (size === max) count++;", //                        9
  "  return count;", //                                      10
  "}", //                                                    11
];
