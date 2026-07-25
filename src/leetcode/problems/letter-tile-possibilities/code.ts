export const CODE = [
  "function numTilePossibilities(tiles) {", //                0
  "  const count = tally(tiles);   // letter -> how many", // 1
  "  const dfs = (count) => {", //                            2
  "    let total = 0;", //                                    3
  "    for (const c in count) {", //                          4
  "      if (count[c] === 0) continue;", //                   5
  "      total++;              // use one 'c' here", //       6
  "      count[c]--;", //                                     7
  "      total += dfs(count);  // then extend the sequence", // 8
  "      count[c]++;           // backtrack", //              9
  "    }", //                                                10
  "    return total;", //                                    11
  "  };", //                                                 12
  "  return dfs(count);", //                                 13
  "}", //                                                    14
];
