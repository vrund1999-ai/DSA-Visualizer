export const CODE = [
  "function invertTree(node) {", //                              0
  "  if (!node) return null;", //                               1
  "  [node.left, node.right] =", //                             2
  "    [node.right, node.left];   // swap children", //         3
  "  invertTree(node.left);", //                                4
  "  invertTree(node.right);", //                               5
  "  return node;", //                                          6
  "}", //                                                       7
];
