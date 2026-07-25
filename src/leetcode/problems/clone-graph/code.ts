export const CODE = [
  "function cloneGraph(node) {", //                           0
  "  if (!node) return null;", //                             1
  "  const map = new Map();   // original -> copy", //        2
  "  const dfs = (n) => {", //                                3
  "    if (map.has(n)) return map.get(n);", //                4
  "    const copy = { val: n.val, neighbors: [] };", //       5
  "    map.set(n, copy);   // register before recursing", //  6
  "    for (const nb of n.neighbors)", //                     7
  "      copy.neighbors.push(dfs(nb));", //                    8
  "    return copy;", //                                       9
  "  };", //                                                 10
  "  return dfs(node);", //                                  11
  "}", //                                                    12
];
