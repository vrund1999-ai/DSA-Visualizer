export const CODE = [
  "function countArrangement(n) {", //                        0
  "  const used = Array(n + 1).fill(false);", //              1
  "  let count = 0;", //                                      2
  "  const dfs = pos => {", //                                3
  "    if (pos > n) { count++; return; }", //                 4
  "    for (let v = 1; v <= n; v++) {", //                    5
  "      if (used[v]) continue;", //                          6
  "      if (v % pos === 0 || pos % v === 0) {", //           7
  "        used[v] = true;", //                               8
  "        dfs(pos + 1);", //                                 9
  "        used[v] = false;   // backtrack", //              10
  "      }", //                                              11
  "    }", //                                                12
  "  };", //                                                 13
  "  dfs(1);", //                                            14
  "  return count;", //                                      15
  "}", //                                                    16
];
