export const CODE = [
  "function hasPathSum(node, target) {", //                          0
  "  if (!node) return false;", //                                   1
  "  target -= node.val;", //                                        2
  "  if (!node.left && !node.right) return target === 0;", //        3
  "  return hasPathSum(node.left, target)", //                       4
  "      || hasPathSum(node.right, target);", //                     5
  "}", //                                                            6
];
