export const CODE = [
  "function validPath(n, edges, source, dest) {", //          0
  "  const parent = Array.from({length: n}, (_, i) => i);", //1
  "  const find = x => parent[x] === x", //                   2
  "    ? x : (parent[x] = find(parent[x]));", //              3
  "  for (const [a, b] of edges)", //                         4
  "    parent[find(a)] = find(b);   // union", //             5
  "  return find(source) === find(dest);", //                 6
  "}", //                                                     7
];
