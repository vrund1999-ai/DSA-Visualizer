export const CODE = [
  "function calcEquation(equations, values, queries) {", //   0
  "  const g = {};   // a -> [[b, a/b], ...]", //             1
  "  equations.forEach(([a, b], i) => {", //                  2
  "    (g[a] ??= []).push([b, values[i]]);", //               3
  "    (g[b] ??= []).push([a, 1 / values[i]]);", //           4
  "  });", //                                                 5
  "  const dfs = (a, b, acc, seen) => {", //                  6
  "    if (!(a in g) || !(b in g)) return -1;", //            7
  "    if (a === b) return acc;", //                          8
  "    seen.add(a);", //                                      9
  "    for (const [nxt, w] of g[a]) {", //                    10
  "      if (seen.has(nxt)) continue;", //                    11
  "      const r = dfs(nxt, b, acc * w, seen);", //           12
  "      if (r !== -1) return r;   // found a path", //       13
  "    }", //                                                 14
  "    return -1;", //                                        15
  "  };", //                                                  16
  "  return queries.map(([a, b]) => dfs(a, b, 1, new Set()));",//17
  "}", //                                                     18
];
