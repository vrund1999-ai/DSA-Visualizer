/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const BST_INSERT_CODE = [
  "function insert(root, value) {", //                     0
  "  if (root === null)", //                               1
  "    return new Node(value);", //                        2
  "  if (value < root.value)", //                          3
  "    root.left = insert(root.left, value);", //          4
  "  else", //                                             5
  "    root.right = insert(root.right, value);", //        6
  "  return root;", //                                     7
  "}", //                                                  8
];
