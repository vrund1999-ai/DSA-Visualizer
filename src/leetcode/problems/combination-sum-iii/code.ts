export const CODE = [
  "function combinationSum3(k, n) {", //                      0
  "  const res = [];", //                                     1
  "  const dfs = (start, combo, remain) => {", //             2
  "    if (combo.length === k) {", //                         3
  "      if (remain === 0) res.push([...combo]);", //         4
  "      return;", //                                         5
  "    }", //                                                 6
  "    for (let d = start; d <= 9; d++) {", //                7
  "      if (d > remain) break;   // prune", //               8
  "      combo.push(d);", //                                  9
  "      dfs(d + 1, combo, remain - d);", //                 10
  "      combo.pop();   // backtrack", //                    11
  "    }", //                                                12
  "  };", //                                                 13
  "  dfs(1, [], n);", //                                     14
  "  return res;", //                                        15
  "}", //                                                    16
];
