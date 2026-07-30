export const CODE = [
  "function numberOfAlternatingGroups(colors, k) {", //       0
  "  const n = colors.length;", //                            1
  "  let count = 0;", //                                       2
  "  for (let start = 0; start < n; start++) {", //           3
  "    let ok = true;", //                                     4
  "    for (let j = 1; j < k; j++) {   // k tiles, circular", //5
  "      const a = colors[(start + j - 1) % n];", //          6
  "      const b = colors[(start + j) % n];", //              7
  "      if (a === b) { ok = false; break; }", //             8
  "    }", //                                                 9
  "    if (ok) count++;", //                                 10
  "  }", //                                                  11
  "  return count;", //                                      12
  "}", //                                                    13
];
