export const CODE = [
  "function minSwaps(grid) {", //                             0
  "  const n = grid.length;", //                              1
  "  // trailing zeros in each row", //                       2
  "  const zeros = grid.map(row => {", //                     3
  "    let z = 0;", //                                        4
  "    for (let c = n - 1; c >= 0 && row[c] === 0; c--) z++;", //5
  "    return z;", //                                         6
  "  });", //                                                 7
  "  let swaps = 0;", //                                      8
  "  for (let i = 0; i < n; i++) {", //                       9
  "    const need = n - 1 - i;", //                          10
  "    let j = i;", //                                       11
  "    while (j < n && zeros[j] < need) j++;", //            12
  "    if (j === n) return -1;   // impossible", //          13
  "    while (j > i) {   // bubble the row up", //           14
  "      [zeros[j], zeros[j-1]] = [zeros[j-1], zeros[j]];", //15
  "      j--; swaps++;", //                                  16
  "    }", //                                                17
  "  }", //                                                  18
  "  return swaps;", //                                      19
  "}", //                                                    20
];
