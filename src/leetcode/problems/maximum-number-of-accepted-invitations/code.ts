export const CODE = [
  "function maximumInvitations(grid) {", //                   0
  "  const m = grid.length, n = grid[0].length;", //          1
  "  const matchG = new Array(n).fill(-1);   // girl->boy", // 2
  "  let count = 0;", //                                      3
  "  const augment = (boy, seen) => {", //                    4
  "    for (let g = 0; g < n; g++) {", //                     5
  "      if (grid[boy][g] && !seen[g]) {", //                 6
  "        seen[g] = true;", //                               7
  "        if (matchG[g] === -1 || augment(matchG[g], seen)) {", // 8
  "          matchG[g] = boy;   // (re)assign girl g", //     9
  "          return true;", //                               10
  "        }", //                                            11
  "      }", //                                              12
  "    }", //                                                13
  "    return false;", //                                    14
  "  };", //                                                 15
  "  for (let b = 0; b < m; b++)", //                        16
  "    if (augment(b, new Array(n).fill(false))) count++;", // 17
  "  return count;", //                                      18
  "}", //                                                    19
];
