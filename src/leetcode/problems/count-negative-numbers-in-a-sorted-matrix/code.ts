export const CODE = [
  "function countNegatives(grid) {", //                       0
  "  const m = grid.length, n = grid[0].length;", //          1
  "  let r = m - 1, c = 0, count = 0;", //                    2
  "  while (r >= 0 && c < n) {", //                           3
  "    if (grid[r][c] < 0) {", //                             4
  "      count += n - c;   // rest of row is negative", //    5
  "      r--;              // move up", //                    6
  "    } else {", //                                          7
  "      c++;              // move right", //                 8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return count;", //                                      11
  "}", //                                                    12
];
