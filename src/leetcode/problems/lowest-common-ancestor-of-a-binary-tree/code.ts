export const CODE = [
  "function lowestCommonAncestor(root, p, q) {", //           0
  "  if (!root || root === p || root === q)", //             1
  "    return root;", //                                     2
  "  const left  = lca(root.left,  p, q);", //               3
  "  const right = lca(root.right, p, q);", //               4
  "  if (left && right) return root;   // split → LCA", //   5
  "  return left ?? right;   // both on one side", //        6
  "}", //                                                    7
];
