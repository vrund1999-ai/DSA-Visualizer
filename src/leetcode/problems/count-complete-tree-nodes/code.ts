export const CODE = [
  "function countNodes(root) {", //                           0
  "  if (!root) return 0;", //                                1
  "  const lh = leftHeight(root);   // leftmost path", //     2
  "  const rh = rightHeight(root);  // rightmost path", //    3
  "  if (lh === rh)", //                                      4
  "    return (1 << lh) - 1;   // perfect subtree", //        5
  "  return 1 + countNodes(root.left)", //                    6
  "           + countNodes(root.right);", //                  7
  "}", //                                                     8
];
