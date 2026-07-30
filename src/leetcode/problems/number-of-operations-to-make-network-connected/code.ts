export const CODE = [
  "function makeConnected(n, connections) {", //              0
  "  if (connections.length < n - 1) return -1;", //          1
  "  const parent = [...Array(n).keys()];", //                2
  "  const find = x => parent[x] === x", //                   3
  "    ? x : (parent[x] = find(parent[x]));", //              4
  "  let components = n;", //                                 5
  "  for (const [a, b] of connections) {", //                 6
  "    const ra = find(a), rb = find(b);", //                 7
  "    if (ra !== rb) {", //                                  8
  "      parent[ra] = rb;   // merge", //                     9
  "      components--;", //                                  10
  "    }   // else redundant cable", //                      11
  "  }", //                                                  12
  "  return components - 1;   // cables to move", //         13
  "}", //                                                    14
];
