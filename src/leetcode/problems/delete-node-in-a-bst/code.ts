export const CODE = [
  "function deleteNode(root, key) {", //                      0
  "  if (!root) return null;", //                             1
  "  if (key < root.val)", //                                 2
  "    root.left = deleteNode(root.left, key);", //           3
  "  else if (key > root.val)", //                            4
  "    root.right = deleteNode(root.right, key);", //         5
  "  else {                       // found it", //            6
  "    if (!root.left)  return root.right;", //               7
  "    if (!root.right) return root.left;", //                8
  "    let succ = root.right;      // in-order successor", // 9
  "    while (succ.left) succ = succ.left;", //              10
  "    root.val = succ.val;        // copy value", //        11
  "    root.right = deleteNode(root.right, succ.val);", //   12
  "  }", //                                                  13
  "  return root;", //                                       14
  "}", //                                                    15
];
