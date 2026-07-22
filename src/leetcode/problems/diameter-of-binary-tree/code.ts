export const CODE = [
  "function diameterOfBinaryTree(root) {", //                     0
  "  let best = 0;", //                                           1
  "  function depth(node) {", //                                 2
  "    if (!node) return 0;", //                                 3
  "    const l = depth(node.left);", //                          4
  "    const r = depth(node.right);", //                         5
  "    best = Math.max(best, l + r);   // path through node", // 6
  "    return 1 + Math.max(l, r);", //                           7
  "  }", //                                                      8
  "  depth(root);", //                                           9
  "  return best;", //                                           10
  "}", //                                                        11
];
