export const CODE = [
  "function maxDepth(node) {", //                    0
  "  if (!node) return 0;", //                       1
  "  const left = maxDepth(node.left);", //          2
  "  const right = maxDepth(node.right);", //        3
  "  return 1 + Math.max(left, right);", //          4
  "}", //                                            5
];
