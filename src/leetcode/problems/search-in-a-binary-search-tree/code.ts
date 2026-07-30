export const CODE = [
  "function searchBST(node, val) {", //                       0
  "  while (node) {", //                                      1
  "    if (node.val === val) return node;   // found", //     2
  "    node = val < node.val", //                             3
  "      ? node.left        // go left", //                   4
  "      : node.right;      // go right", //                  5
  "  }", //                                                   6
  "  return null;   // not present", //                       7
  "}", //                                                     8
];
