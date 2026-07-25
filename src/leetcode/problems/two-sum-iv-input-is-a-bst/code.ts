export const CODE = [
  "function findTarget(root, k) {", //                        0
  "  const seen = new Set();", //                             1
  "  const dfs = (node) => {", //                             2
  "    if (!node) return false;", //                          3
  "    if (seen.has(k - node.val)) return true;", //          4
  "    seen.add(node.val);", //                               5
  "    return dfs(node.left) || dfs(node.right);", //         6
  "  };", //                                                  7
  "  return dfs(root);", //                                   8
  "}", //                                                     9
];
