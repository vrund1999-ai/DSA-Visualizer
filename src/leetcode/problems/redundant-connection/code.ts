export const CODE = [
  "function findRedundantConnection(edges) {", //             0
  "  const parent = Array.from({length: edges.length+1},", // 1
  "                            (_, i) => i);", //             2
  "  const find = x => parent[x] === x", //                   3
  "    ? x : (parent[x] = find(parent[x]));", //              4
  "  for (const [a, b] of edges) {", //                       5
  "    if (find(a) === find(b))", //                          6
  "      return [a, b];   // already connected → cycle", //   7
  "    parent[find(a)] = find(b);   // union", //             8
  "  }", //                                                   9
  "}", //                                                    10
];
