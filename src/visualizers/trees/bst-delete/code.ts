/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const BST_DELETE_CODE = [
  "function del(node, x) {", //                     0
  "  if (node === null) return null;", //           1
  "  if (x < node.value)", //                       2
  "    node.left = del(node.left, x);", //          3
  "  else if (x > node.value)", //                  4
  "    node.right = del(node.right, x);", //        5
  "  else {                       // found x", //   6
  "    if (!node.left) return node.right;", //      7
  "    if (!node.right) return node.left;", //      8
  "    const s = min(node.right);", //              9
  "    node.value = s.value;", //                   10
  "    node.right = del(node.right, s.value);", //  11
  "  }", //                                         12
  "  return node;", //                              13
  "}", //                                           14
];
