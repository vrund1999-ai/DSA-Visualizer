export const CODE = [
  "function lcaDeepestLeaves(root) {", //                     0
  "  const dfs = node => {", //                               1
  "    if (!node) return { depth: 0, lca: null };", //        2
  "    const L = dfs(node.left);", //                         3
  "    const R = dfs(node.right);", //                        4
  "    if (L.depth === R.depth)", //                          5
  "      return { depth: L.depth + 1, lca: node };", //       6
  "    return L.depth > R.depth", //                          7
  "      ? { depth: L.depth + 1, lca: L.lca }", //            8
  "      : { depth: R.depth + 1, lca: R.lca };", //           9
  "  };", //                                                 10
  "  return dfs(root).lca;", //                              11
  "}", //                                                    12
];
