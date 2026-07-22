export const CODE = [
  "function isBalanced(root) {", //                              0
  "  function height(node) {", //                               1
  "    if (!node) return 0;", //                                2
  "    const l = height(node.left);", //                        3
  "    const r = height(node.right);", //                       4
  "    if (l < 0 || r < 0 || Math.abs(l - r) > 1)", //          5
  "      return -1;   // unbalanced marker", //                 6
  "    return 1 + Math.max(l, r);", //                          7
  "  }", //                                                     8
  "  return height(root) !== -1;", //                           9
  "}", //                                                       10
];
