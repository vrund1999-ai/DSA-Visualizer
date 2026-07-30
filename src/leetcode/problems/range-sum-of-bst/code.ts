export const CODE = [
  "function rangeSumBST(node, low, high) {", //               0
  "  if (!node) return 0;", //                                1
  "  if (node.val < low)   // whole left subtree too small", //2
  "    return rangeSumBST(node.right, low, high);", //        3
  "  if (node.val > high)  // whole right subtree too big", //4
  "    return rangeSumBST(node.left, low, high);", //         5
  "  return node.val   // in range", //                       6
  "    + rangeSumBST(node.left, low, high)", //               7
  "    + rangeSumBST(node.right, low, high);", //             8
  "}", //                                                     9
];
