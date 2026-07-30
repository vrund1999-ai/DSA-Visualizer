export const CODE = [
  "function findMinHeightTrees(n, edges) {", //               0
  "  if (n <= 2) return [...Array(n).keys()];", //            1
  "  const adj = buildAdj(edges), deg = degrees();", //       2
  "  let leaves = nodes.filter(v => deg[v] === 1);", //       3
  "  let remaining = n;", //                                  4
  "  while (remaining > 2) {", //                             5
  "    remaining -= leaves.length;", //                       6
  "    const next = [];", //                                  7
  "    for (const leaf of leaves)", //                        8
  "      for (const nb of adj[leaf])", //                     9
  "        if (--deg[nb] === 1) next.push(nb);", //          10
  "    leaves = next;   // peel the next layer", //          11
  "  }", //                                                  12
  "  return leaves;   // 1 or 2 centroids", //               13
  "}", //                                                    14
];
