/** Displayed source for the in-order (depth-first) traversal. */
export const INORDER_CODE = [
  "function inorder(node) {", //   0
  "  if (node === null) return;", //1
  "  inorder(node.left);", //      2
  "  visit(node);", //             3
  "  inorder(node.right);", //     4
  "}", //                          5
];

/** Displayed source for the level-order (breadth-first) traversal. */
export const BFS_CODE = [
  "const queue = [root];", //                   0
  "while (queue.length > 0) {", //              1
  "  const node = queue.shift();", //           2
  "  visit(node);", //                          3
  "  if (node.left) queue.push(node.left);", // 4
  "  if (node.right) queue.push(node.right);", //5
  "}", //                                       6
];
