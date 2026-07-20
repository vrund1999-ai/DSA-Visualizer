/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const NQUEENS_CODE = [
  "function solve(row) {", //                          0
  "  if (row === n) return true;   // solved", //      1
  "  for (let col = 0; col < n; col++) {", //          2
  "    if (isSafe(row, col)) {", //                    3
  "      place(row, col);", //                         4
  "      if (solve(row + 1)) return true;", //         5
  "      remove(row, col);   // backtrack", //         6
  "    }", //                                          7
  "  }", //                                            8
  "  return false;", //                                9
  "}", //                                              10
];
